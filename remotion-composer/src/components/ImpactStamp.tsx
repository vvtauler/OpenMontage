import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFont as loadCinzel } from "@remotion/google-fonts/Cinzel";

const { fontFamily: cinzel } = loadCinzel("normal", {
  weights: ["700"],
  subsets: ["latin"],
});

const BRONCE_FORJADO = "#C87A38";

export interface ImpactStampProps {
  /** e.g. "FALSO" (5o) / "SE OXIDA" (6i) — guion tecnico 015 SS175-185. */
  text: string;
}

/**
 * A ~1s "impact beat" for a frozen frame: instant contrast/vignette hit +
 * a rigid, no-overshoot stamp entrance for full-screen text. Deliberately
 * NOT Rotulo (too slow/discreet) and NOT StatReveal/HeroTitle (wrong
 * palette) — see "Sello de impacto - 5o/6i" in the guion tecnico.
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
  // no overshoot.
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
            fontFamily: cinzel,
            fontWeight: 700,
            fontSize: 120,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: BRONCE_FORJADO,
            textShadow: "0 4px 24px rgba(0,0,0,0.85)",
            opacity,
            transform: `scale(${scale})`,
          }}
        >
          {text}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
