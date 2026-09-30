import {
  AbsoluteFill,
  OffthreadVideo,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { resolveAsset } from "../lib/resolveAsset";

// Technical inset — a small Motion Graphics clip (e.g. a map) framed in a
// corner over the running background image. Same palette as the rest of
// the technical graphics (manual: Azul técnico + Bronce forjado), unlike
// PhotoInsert's white instant-photo mount, which is reserved for real
// photographs/documents.
const AZUL_TECNICO = "#1D2A3A";
const BRONCE_FORJADO = "#C87A38";

export interface VideoInsetProps {
  /** Muted clip (public asset path), already timed to the overlay window. */
  source: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  /** Inset width in px (16:9 is kept). Default 640. */
  width?: number;
  /** Real Sequence duration in seconds (same fix as PhotoInsert/Rotulo). */
  sceneDurationSeconds: number;
}

const FADE_SECONDS = 0.5;
const SAFE_MARGIN = 90;

export const VideoInset: React.FC<VideoInsetProps> = ({
  source,
  position = "top-left",
  width = 640,
  sceneDurationSeconds,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const durationInFrames = Math.round(sceneDurationSeconds * fps);
  const fadeFrames = Math.round(FADE_SECONDS * fps);
  const fadeIn = interpolate(frame, [0, fadeFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(
    frame,
    [durationInFrames - fadeFrames, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const opacity = Math.min(fadeIn, fadeOut);
  const isRight = position.endsWith("right");
  const isTop = position.startsWith("top");
  const translateY = interpolate(fadeIn, [0, 1], [isTop ? -30 : 30, 0]);

  return (
    <AbsoluteFill
      style={{
        justifyContent: isTop ? "flex-start" : "flex-end",
        alignItems: isRight ? "flex-end" : "flex-start",
        padding: SAFE_MARGIN,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          opacity,
          transform: `translateY(${translateY}px)`,
          width,
          height: Math.round((width * 9) / 16),
          background: AZUL_TECNICO,
          border: `3px solid ${BRONCE_FORJADO}`,
          borderRadius: 6,
          overflow: "hidden",
          boxShadow: "0 14px 34px rgba(0,0,0,0.6)",
        }}
      >
        <OffthreadVideo
          src={resolveAsset(source)}
          muted
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
    </AbsoluteFill>
  );
};
