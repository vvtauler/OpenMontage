import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFont as loadCinzel } from "@remotion/google-fonts/Cinzel";
import { loadFont as loadMontserrat } from "@remotion/google-fonts/Montserrat";

const { fontFamily: cinzel } = loadCinzel("normal", { weights: ["700"] });
const { fontFamily: montserrat } = loadMontserrat("normal", {
  weights: ["500"],
  subsets: ["latin"],
});

// Artilugio brand palette (ARTILUGIO - Manual de identidad visual (maestro) v2.4, §4, §5)
const BLANCO_ACERO = "#E2E8F0";
const BRONCE_FORJADO = "#C87A38";
const COBRE_CALIDO = "#D49A46";

export interface MonumentalTitleProps {
  /** Character or object name — set in Cinzel, uppercase, monumental
   * (manual §5). For introducing a person or a hero object shown large in
   * the background image, not for section titles (see SectionTitle). */
  title: string;
  /** Optional descriptor below the name — dates, role, etc. — in the
   * channel's technical sans-serif, per the manual's typographic contrast
   * rule (Cinzel = historia/monumentalidad, sans técnica = precisión). */
  subtitle?: string;
  position?: "center" | "bottom-center";
}

export const MonumentalTitle: React.FC<MonumentalTitleProps> = ({
  title,
  subtitle,
  position = "bottom-center",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const isBottom = position === "bottom-center";

  const reveal = spring({ frame, fps, config: { damping: 16, stiffness: 90 } });
  const opacity = reveal;
  const translateY = interpolate(reveal, [0, 1], [isBottom ? 24 : 16, 0]);
  const scale = interpolate(reveal, [0, 1], [0.97, 1]);

  const underlineWidth = interpolate(
    spring({ frame: frame - 8, fps, config: { damping: 16, stiffness: 70 } }),
    [0, 1],
    [0, 220]
  );

  // Non-directional (0,0-offset) blur layers instead of an offset drop
  // shadow — a soft radiant halo around the letterforms rather than a cast
  // shadow in one direction. Tight dark layer for edge contrast/legibility
  // against any background, wider warm layers for the "resplandor" glow.
  const glow = [
    "0 0 6px rgba(14,14,17,0.85)",
    "0 0 18px rgba(14,14,17,0.55)",
    `0 0 34px ${COBRE_CALIDO}99`,
    `0 0 70px ${BRONCE_FORJADO}66`,
  ].join(", ");

  return (
    <AbsoluteFill
      style={{
        justifyContent: isBottom ? "flex-end" : "center",
        alignItems: "center",
        padding: isBottom ? "0 100px 110px" : "0 100px",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          opacity,
          transform: `translateY(${translateY}px) scale(${scale})`,
          textAlign: "center",
          maxWidth: "85%",
        }}
      >
        <div
          style={{
            fontFamily: cinzel,
            fontWeight: 700,
            fontSize: 84,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: BLANCO_ACERO,
            lineHeight: 1.15,
            textShadow: glow,
          }}
        >
          {title}
        </div>

        <div
          style={{
            margin: "18px auto 0",
            height: 3,
            width: underlineWidth,
            background: BRONCE_FORJADO,
            borderRadius: 2,
          }}
        />

        {subtitle && (
          <div
            style={{
              marginTop: 16,
              fontFamily: montserrat,
              fontWeight: 500,
              fontSize: 24,
              letterSpacing: "0.04em",
              color: COBRE_CALIDO,
              textShadow: "0 2px 10px rgba(0,0,0,0.7)",
            }}
          >
            {subtitle}
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};
