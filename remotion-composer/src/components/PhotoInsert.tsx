import {
  AbsoluteFill,
  Img,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFont as loadMontserrat } from "@remotion/google-fonts/Montserrat";
import { resolveAsset } from "../lib/resolveAsset";

const { fontFamily: montserrat } = loadMontserrat("normal", {
  weights: ["500"],
  subsets: ["latin"],
});

// Physical-photograph treatment — white print border with an enlarged bottom
// strip for the caption, like an instant photo. Deliberately distinct from
// the dark/bronze "Dark Cinematic Technical" palette used everywhere else in
// the frame, so a real source reads unmistakably as real, not as another
// AI-generated element.
const FRAME_WHITE = "#FAFAF7";
const CAPTION_INK = "#2D3238"; // Acero/Hierro (manual §4) — dark text on white
const ATTRIBUTION_INK = "#6B7280"; // muted — fine-print rights/credit line

export interface PhotoInsertProps {
  /** Real photograph or document — museum piece, manuscript page, a cited
   * researcher's portrait, etc. Must already be rights-cleared; this
   * component only handles presentation, never sourcing/licensing. */
  source: string;
  /** Photo title/description — top line, larger. E.g. "Arco compuesto mongol, s. XIII". */
  caption?: string;
  /** Rights/credit line — bottom line, smaller. E.g. "Museo de Cluny — dominio público". */
  attribution?: string;
  position?: "left" | "right";
  /** Insert width in px. Default 420. */
  width?: number;
  /** Real Sequence duration in seconds — same CRITICAL FIX pattern as
   * ImageScene/AnimeScene/Rotulo. */
  sceneDurationSeconds: number;
}

const FADE_SECONDS = 0.5;
const SAFE_MARGIN = 90;

export const PhotoInsert: React.FC<PhotoInsertProps> = ({
  source,
  caption,
  attribution,
  position = "right",
  width = 420,
  sceneDurationSeconds,
}) => {
  const hasFooter = Boolean(caption || attribution);
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
  const isRight = position === "right";
  const translateX = interpolate(fadeIn, [0, 1], [isRight ? 50 : -50, 0]);
  const rotation = isRight ? 1.5 : -1.5;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-end",
        alignItems: isRight ? "flex-end" : "flex-start",
        padding: SAFE_MARGIN,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          opacity,
          transform: `translateX(${translateX}px) rotate(${rotation}deg)`,
          width,
        }}
      >
        {/* Instant-photo mount: white border, thin on top/sides, wide on the
         * bottom — the caption lives inside that bottom strip, not floating
         * outside the frame. */}
        <div
          style={{
            background: FRAME_WHITE,
            padding: `14px 14px ${hasFooter ? 0 : 14}px 14px`,
            borderRadius: 2,
            boxShadow: "0 14px 34px rgba(0,0,0,0.6)",
          }}
        >
          <Img
            src={resolveAsset(source)}
            style={{ width: "100%", display: "block" }}
          />
          {hasFooter && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
                padding: "10px 6px 20px 6px",
              }}
            >
              {caption && (
                <div
                  style={{
                    fontFamily: montserrat,
                    fontWeight: 600,
                    fontSize: 19,
                    color: CAPTION_INK,
                    lineHeight: 1.3,
                    textAlign: "center",
                  }}
                >
                  {caption}
                </div>
              )}
              {attribution && (
                <div
                  style={{
                    fontFamily: montserrat,
                    fontWeight: 500,
                    fontSize: 13,
                    color: ATTRIBUTION_INK,
                    lineHeight: 1.3,
                    textAlign: "center",
                  }}
                >
                  {attribution}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </AbsoluteFill>
  );
};
