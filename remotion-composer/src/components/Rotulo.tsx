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
  weights: ["500", "600"],
  subsets: ["latin"],
});

// Artilugio brand palette (ARTILUGIO - Manual de identidad visual (maestro)
// v2.4, §4) — alineada con ListReveal.tsx/MonumentalTitle.tsx: panel en
// Azul Técnico con acento Bronce Forjado (no la barra Acero Hierro/Azul
// Técnico de la version anterior de este componente), y Cobre Cálido como
// segundo acento cálido (brillo/subtexto), igual que en esos dos.
const AZUL_TECNICO = "#1D2A3A"; // panel background (ListReveal)
const BLANCO_ACERO = "#E2E8F0"; // default rótulo text
const BRONCE_FORJADO = "#C87A38"; // accent border + CTA text (ListReveal/MonumentalTitle)
const COBRE_CALIDO = "#D49A46"; // subtext / glow accent (MonumentalTitle subtitle, ListReveal highlight)

export interface RotuloProps {
  text: string;
  /** "label": Blanco Acero on Acero/Hierro bar, Azul Técnico accent — the
   * default for on-screen data/facts. "cta": Bronce Forjado text, isotipo
   * icon, no bar — reserved for the subscribe callout (manual §10.1). */
  variant?: "label" | "cta";
  /** Optional secondary line under the main text (e.g. a correction note). */
  subtext?: string;
  iconSrc?: string;
  position?: "bottom-left" | "bottom-center" | "top-left";
  /** Real Sequence duration in seconds — see the same CRITICAL FIX note as
   * ImageScene/AnimeScene: useVideoConfig().durationInFrames is the full
   * composition length, not this overlay's own on-screen duration. */
  sceneDurationSeconds: number;
}

// Title-safe margins (~5% each side on a 1920x1080 frame).
const SAFE_MARGIN_X = 100;
const SAFE_MARGIN_Y = 90;
const FADE_SECONDS = 0.4;

export const Rotulo: React.FC<RotuloProps> = ({
  text,
  variant = "label",
  subtext,
  iconSrc,
  position = "bottom-center",
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
  // Small rise-in on entry, matching the fade — keeps it from feeling static.
  const translateY = interpolate(fadeIn, [0, 1], [10, 0]);

  const isCta = variant === "cta";
  const isTop = position === "top-left";
  const alignH = position === "bottom-center" ? "center" : "flex-start";

  // CTA: +50% over the original label sizing (icon 56->84, text 44->66).
  // Label: a modest bump over the original (32->38, subtext 20->24).
  const iconSize = isCta ? 84 : 0;
  const textSize = isCta ? 66 : 38;
  const subtextSize = isCta ? 30 : 24;

  return (
    <AbsoluteFill
      style={{
        justifyContent: isTop ? "flex-start" : "flex-end",
        alignItems: alignH,
        padding: `${SAFE_MARGIN_Y}px ${SAFE_MARGIN_X}px`,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          opacity,
          transform: `translateY(${isTop ? -translateY : translateY}px)`,
          display: "flex",
          alignItems: "center",
          gap: 18,
          maxWidth: "85%",
          ...(isCta
            ? {}
            : {
                background: `${AZUL_TECNICO}D9`, // ~85% opacity, matches ListReveal's panel
                borderLeft: `4px solid ${BRONCE_FORJADO}`,
                borderRadius: 6,
                padding: "16px 28px",
                boxShadow: "0 10px 28px rgba(0,0,0,0.45)",
              }),
        }}
      >
        {iconSrc && (
          <Img
            src={resolveAsset(iconSrc)}
            style={{ width: iconSize, height: iconSize, objectFit: "contain", flexShrink: 0 }}
          />
        )}
        <div>
          <div
            style={{
              fontFamily: montserrat,
              fontWeight: isCta ? 600 : 500,
              fontSize: textSize,
              letterSpacing: isCta ? "0.08em" : "0.01em",
              textTransform: isCta ? "uppercase" : "none",
              color: isCta ? BRONCE_FORJADO : BLANCO_ACERO,
              // CTA has no background panel (unlike "label") — needs the
              // same multi-layer glow MonumentalTitle uses for legibility
              // on its own bare text, instead of a flat drop shadow.
              textShadow: isCta
                ? `0 0 4px rgba(14,14,17,0.85), 0 0 14px rgba(14,14,17,0.55), 0 0 26px ${COBRE_CALIDO}99`
                : "0 2px 10px rgba(0,0,0,0.7)",
              lineHeight: 1.25,
            }}
          >
            {text}
          </div>
          {subtext && (
            <div
              style={{
                fontFamily: montserrat,
                fontWeight: 500,
                fontSize: subtextSize,
                marginTop: 4,
                // Cobre Cálido — mismo color que usa MonumentalTitle para su
                // propio subtítulo secundario.
                color: COBRE_CALIDO,
                textShadow: "0 2px 8px rgba(0,0,0,0.6)",
              }}
            >
              {subtext}
            </div>
          )}
        </div>
      </div>
    </AbsoluteFill>
  );
};
