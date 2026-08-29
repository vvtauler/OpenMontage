import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFont as loadMontserrat } from "@remotion/google-fonts/Montserrat";

const { fontFamily: montserrat } = loadMontserrat("normal", {
  weights: ["500", "600"],
  subsets: ["latin"],
});

// Artilugio brand palette (ARTILUGIO - Manual de identidad visual (maestro) v2.4, §4)
const AZUL_TECNICO = "#1D2A3A";
const BLANCO_ACERO = "#E2E8F0";
const BRONCE_FORJADO = "#C87A38";
const COBRE_CALIDO = "#D49A46";

export interface ListRevealItem {
  text: string;
  /** Seconds into this overlay's own Sequence — not the composition's. */
  at_seconds: number;
}

export interface ListRevealProps {
  items: ListRevealItem[];
  position?: "left" | "right";
  /** Real Sequence duration in seconds — same CRITICAL FIX pattern as
   * ImageScene/AnimeScene/Rotulo: useVideoConfig().durationInFrames is the
   * full composition length, not this overlay's own on-screen duration. */
  sceneDurationSeconds: number;
}

const SAFE_MARGIN_X = 100;
const PANEL_FADE_SECONDS = 0.3;
const ITEM_FADE_SECONDS = 0.35;
const HIGHLIGHT_SECONDS = 0.9;

export const ListReveal: React.FC<ListRevealProps> = ({
  items,
  position = "right",
  sceneDurationSeconds,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const isRight = position === "right";
  const itemFadeFrames = Math.round(ITEM_FADE_SECONDS * fps);
  const highlightFrames = Math.round(HIGHLIGHT_SECONDS * fps);

  // The panel itself is one single, fixed-size pill — it fades in once (timed
  // to the first item's own reveal) rather than each item carrying its own
  // background box. All items are always in the DOM (never conditionally
  // rendered) so the pill's width/height are correct — sized for the full
  // list — from the moment it appears, with no resize jump as later, wider
  // lines get revealed.
  const firstRevealFrame = Math.round(
    Math.min(...items.map((it) => it.at_seconds)) * fps
  );
  const panelFadeFrames = Math.round(PANEL_FADE_SECONDS * fps);
  const panelOpacity = interpolate(
    frame,
    [firstRevealFrame, firstRevealFrame + panelFadeFrames],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: isRight ? "flex-end" : "flex-start",
        padding: `0 ${SAFE_MARGIN_X}px`,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          opacity: panelOpacity,
          background: `${AZUL_TECNICO}D9`,
          borderLeft: isRight ? "none" : `4px solid ${BRONCE_FORJADO}`,
          borderRight: isRight ? `4px solid ${BRONCE_FORJADO}` : "none",
          borderRadius: 6,
          padding: "24px 32px",
          boxShadow: "0 10px 28px rgba(0,0,0,0.45)",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          alignItems: isRight ? "flex-end" : "flex-start",
        }}
      >
        {items.map((item, i) => {
          const revealFrame = Math.round(item.at_seconds * fps);
          const sinceReveal = frame - revealFrame;

          const opacity = interpolate(
            sinceReveal,
            [0, itemFadeFrames],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );
          const translateX = interpolate(
            sinceReveal,
            [0, itemFadeFrames],
            [isRight ? 24 : -24, 0],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );
          // Brief warm glow right after this item's own reveal — draws the
          // eye to whichever line just appeared. No per-item box anymore, so
          // this lives on the text itself as an extra text-shadow layer.
          const highlight = interpolate(
            sinceReveal,
            [0, highlightFrames],
            [1, 0],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );

          return (
            <div
              key={i}
              style={{
                opacity,
                transform: `translateX(${translateX}px)`,
                fontFamily: montserrat,
                fontWeight: 500,
                fontSize: 32,
                color: BLANCO_ACERO,
                letterSpacing: "0.01em",
                whiteSpace: "nowrap",
                textShadow:
                  highlight > 0
                    ? `0 0 ${16 * highlight}px ${COBRE_CALIDO}, 0 2px 10px rgba(0,0,0,0.7)`
                    : "0 2px 10px rgba(0,0,0,0.7)",
              }}
            >
              {item.text}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
