import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFont as loadMontserrat } from "@remotion/google-fonts/Montserrat";

const { fontFamily: montserrat } = loadMontserrat("normal", {
  weights: ["800"],
  subsets: ["latin"],
});

// Ink-stamp red — deliberately outside the Artilugio brand palette (no red
// anywhere else in the system): this is a rubber-stamp "REJECTED" visual
// metaphor, not a brand element.
const SELLO_ROJO = "#B91C1C";
const STAMP_ROTATION_DEG = -30;

export interface ImpactStampProps {
  /** e.g. "FALSO" (5o) / "SE OXIDA" (6i) — guion tecnico 015 SS175-185. */
  text: string;
}

/**
 * A ~1s "impact beat" over a frozen frame: instant contrast/vignette hit +
 * a rigid, no-overshoot rubber-stamp entrance — red text in a rotated
 * bordered box, like an ink stamp slammed down ("FALSO"/"SE OXIDA"). The
 * background itself must stay a static continuation of the previous cut
 * (no independent camera move on this plano) - the impact reads entirely
 * from this graphic, not from the image cutting. Deliberately NOT Rotulo
 * (too slow/discreet) and NOT StatReveal/HeroTitle (wrong palette) — see
 * "Sello de impacto - 5o/6i" in the guion tecnico.
 */
export const ImpactStamp: React.FC<ImpactStampProps> = ({ text }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Contrast/vignette hits instantly (2-3 frames, no fade).
  const vignetteOpacity = interpolate(frame, [0, 2], [0, 0.55], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Rigid spring stamp entrance, resolved in 3-4 frames — high damping,
  // no overshoot, like a stamp slammed down once.
  const scale = spring({
    frame,
    fps,
    from: 1.4,
    to: 1,
    durationInFrames: 4,
    config: { damping: 200, mass: 0.5 },
  });
  const opacity = interpolate(frame, [0, 2], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,${vignetteOpacity}) 100%)`,
        }}
      />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            opacity,
            transform: `scale(${scale}) rotate(${STAMP_ROTATION_DEG}deg)`,
            border: `6px solid ${SELLO_ROJO}`,
            borderRadius: 6,
            padding: "14px 36px",
            // Faint mottled fill instead of a flat block — reads as worn
            // ink on a rubber stamp rather than a clean UI badge.
            background: "rgba(185, 28, 28, 0.08)",
            boxShadow: `0 0 0 3px rgba(185,28,28,0.25) inset`,
          }}
        >
          <div
            style={{
              fontFamily: montserrat,
              fontWeight: 800,
              fontSize: 108,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: SELLO_ROJO,
              textShadow: "0 2px 6px rgba(0,0,0,0.5)",
              lineHeight: 1,
            }}
          >
            {text}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
