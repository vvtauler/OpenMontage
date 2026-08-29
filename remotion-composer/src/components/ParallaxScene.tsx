import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { resolveAsset } from "../lib/resolveAsset";

// ---------------------------------------------------------------------------
// ParallaxScene — true multi-layer depth parallax (29 ago 2026).
//
// Every other camera-motion scene (ImageScene, AnimeScene) applies ONE
// scale/translate transform to a SINGLE flat image. The result reads as "a
// photo with a zoom", not as a scene with depth, because every pixel in the
// frame moves at the same rate. This component instead takes 2+ image
// layers ordered by depth and moves each one at its own rate — background
// layers drift slowly, foreground layers (typically an alpha-matted cutout
// of the subject) drift faster. That differential is what a human eye reads
// as "this has depth" rather than "this image is being panned".
//
// Requires layers that are already separated (a background plate + a
// transparent-background cutout of the subject, e.g. via matting/rembg, or
// generated separately from the start) — this component only handles the
// rendering side, not producing the layered assets.
// ---------------------------------------------------------------------------

export interface ParallaxLayer {
  /** Image path — same field name as the top-level cut.source, for
   * consistency with the rest of the cut format. Background layers are
   * typically opaque photos; foreground layers are usually alpha-matted
   * cutouts (transparent PNG) of the subject. */
  source: string;
  /** 0 = farthest background (moves least), 1 = nearest foreground (moves
   * most). Values above 1 are allowed for an exaggerated hero foreground. */
  depth: number;
  /** Extra base scale on top of the shared camera scale — foreground cutouts
   * are often generated slightly small relative to the frame. Default 1. */
  scale?: number;
  /** "cover" for a full-bleed background, "contain" for a cutout that must
   * never be cropped (e.g. a full object silhouette). Default: "cover". */
  fit?: "cover" | "contain";
}

export type ParallaxMotion =
  | "pan-left"
  | "pan-right"
  | "drift-up"
  | "drift-down"
  | "push-in";

export interface ParallaxSceneProps {
  /** 2-4 layers. Order in the array doesn't matter — depth does — but
   * back-to-front order keeps the JSX easy to read. */
  layers: ParallaxLayer[];
  animation?: ParallaxMotion;
  /** 0-1+ multiplier on the base motion magnitude. Default 1. */
  intensity?: number;
  vignette?: boolean;
  backgroundColor?: string;
  /** Same CRITICAL FIX as ImageScene/AnimeScene: useVideoConfig().durationInFrames
   * is the FULL composition duration, not this Sequence's duration. */
  sceneDurationSeconds?: number;
}

const ParallaxVignette: React.FC = () => (
  <AbsoluteFill
    style={{
      background:
        "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)",
      pointerEvents: "none",
    }}
  />
);

/**
 * Motion for one layer at a given depth. Base magnitudes match the
 * post-29-ago amplitudes in AnimeScene/ImageScene (see the "raised ~55-70%"
 * notes there) so a parallax scene feels consistent in intensity with a
 * plain Ken Burns scene at depth ~0.6-0.7 — deeper foreground layers go
 * further than a single-layer scene ever could, which is the point.
 */
function layerMotion(
  animation: ParallaxMotion,
  depth: number,
  intensity: number,
  progress: number
) {
  const amt = depth * intensity;
  let scale = 1;
  let translateX = 0;
  let translateY = 0;

  switch (animation) {
    case "pan-left":
      translateX = interpolate(progress, [0, 1], [60 * amt, -60 * amt]);
      break;
    case "pan-right":
      translateX = interpolate(progress, [0, 1], [-60 * amt, 60 * amt]);
      break;
    case "drift-up":
      translateY = interpolate(progress, [0, 1], [45 * amt, -45 * amt]);
      break;
    case "drift-down":
      translateY = interpolate(progress, [0, 1], [-45 * amt, 45 * amt]);
      break;
    case "push-in":
    default:
      scale = 1 + progress * 0.3 * amt;
      break;
  }

  // Overscan grows with depth so the fastest-moving (nearest) layer never
  // reveals its own edge — the layer's own translate is bounded by amt, so
  // this scales the same way.
  const overscan = 1.15 + 0.18 * amt;
  return { scale: scale * overscan, translateX, translateY };
}

export const ParallaxScene: React.FC<ParallaxSceneProps> = ({
  layers,
  animation = "push-in",
  intensity = 1,
  vignette = true,
  backgroundColor = "#0A0A1A",
  sceneDurationSeconds,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const effectiveDuration = sceneDurationSeconds
    ? Math.round(sceneDurationSeconds * fps)
    : durationInFrames;

  const progress = interpolate(frame, [0, effectiveDuration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const sceneIn = spring({ frame, fps, config: { damping: 18, stiffness: 80 } });
  const sceneOut = interpolate(
    frame,
    [effectiveDuration - 10, effectiveDuration],
    [1, 0.25],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const opacity = sceneIn * sceneOut;

  // Render back-to-front regardless of input order, so a caller doesn't have
  // to worry about array order matching visual stacking.
  const ordered = [...layers].sort((a, b) => a.depth - b.depth);

  return (
    <AbsoluteFill style={{ overflow: "hidden", background: backgroundColor, opacity }}>
      {ordered.map((layer, i) => {
        const { scale, translateX, translateY } = layerMotion(
          animation,
          layer.depth,
          intensity,
          progress
        );
        const layerScale = scale * (layer.scale ?? 1);
        return (
          <AbsoluteFill key={i}>
            <Img
              src={resolveAsset(layer.source)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: layer.fit ?? "cover",
                transform: `scale(${layerScale}) translate(${translateX}px, ${translateY}px)`,
                willChange: "transform",
              }}
            />
          </AbsoluteFill>
        );
      })}
      {vignette && <ParallaxVignette />}
    </AbsoluteFill>
  );
};
