import {
  AbsoluteFill,
  Audio,
  Img,
  OffthreadVideo,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/SpaceGrotesk";
import { TextCard } from "./components/TextCard";
import { StatCard } from "./components/StatCard";
import { CalloutBox } from "./components/CalloutBox";
import { ComparisonCard } from "./components/ComparisonCard";
import { BarChart } from "./components/charts/BarChart";
import { LineChart } from "./components/charts/LineChart";
import { PieChart } from "./components/charts/PieChart";
import { KPIGrid } from "./components/charts/KPIGrid";
import { ProgressBar } from "./components/ProgressBar";
import { CaptionOverlay, WordCaption } from "./components/CaptionOverlay";
import { SectionTitle } from "./components/SectionTitle";
import { StatReveal } from "./components/StatReveal";
import { HeroTitle } from "./components/HeroTitle";
import { AnimeScene } from "./components/AnimeScene";
import type { CameraMotion } from "./components/AnimeScene";
import { ParallaxScene } from "./components/ParallaxScene";
import type { ParallaxLayer, ParallaxMotion } from "./components/ParallaxScene";
import { ListReveal } from "./components/ListReveal";
import type { ListRevealItem } from "./components/ListReveal";
import { PhotoInsert } from "./components/PhotoInsert";
import { MonumentalTitle } from "./components/MonumentalTitle";
import { Rotulo } from "./components/Rotulo";
import { ImpactStamp } from "./components/ImpactStamp";
import { Watermark } from "./components/Watermark";
import { CtaScene, CtaBackground } from "./components/ArtilugioCta";
import { TerminalScene } from "./components/TerminalScene";
import type { TerminalStep } from "./components/TerminalScene";
import { ScreenshotScene } from "./components/ScreenshotScene";
import type { ScreenshotStep } from "./components/ScreenshotScene";
import { ProviderChip } from "./components/ProviderChip";
import { resolveAsset } from "./lib/resolveAsset";
import type { ParticleType } from "./components/ParticleOverlay";
import { resolveTheme, type ThemeConfig, DEFAULT_THEME } from "./Root";

// Load Space Grotesk font for cinematic typography
const { fontFamily } = loadFont("normal", {
  weights: ["400", "700"],
  subsets: ["latin"],
});

// ---------------------------------------------------------------------------
// Animated Background — Gradient Mesh + Floating Orbs
// ---------------------------------------------------------------------------

// Parse hex color to RGB components
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const clean = hex.replace("#", "");
  const bigint = parseInt(clean.length === 3
    ? clean.split("").map(c => c + c).join("")
    : clean, 16);
  return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
}

// Detect if a color is "light" (for choosing grid/overlay treatment)
function isLightColor(hex: string): boolean {
  const { r, g, b } = hexToRgb(hex);
  return (r * 299 + g * 587 + b * 114) / 1000 > 128;
}

// Darken/lighten a color by mixing toward black or white
function shiftColor(hex: string, amount: number): string {
  const { r, g, b } = hexToRgb(hex);
  const clamp = (v: number) => Math.max(0, Math.min(255, Math.round(v)));
  if (amount < 0) {
    // Darken
    const f = 1 + amount;
    return `rgb(${clamp(r * f)}, ${clamp(g * f)}, ${clamp(b * f)})`;
  }
  // Lighten
  return `rgb(${clamp(r + (255 - r) * amount)}, ${clamp(g + (255 - g) * amount)}, ${clamp(b + (255 - b) * amount)})`;
}

const AnimatedBackground: React.FC<{ theme: ThemeConfig }> = ({ theme }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const bg = theme.backgroundColor;
  const primary = theme.primaryColor;
  const accent = theme.accentColor;
  const surface = theme.surfaceColor;
  const light = isLightColor(bg);

  // Slow-moving gradient angles
  const angle1 = 135 + Math.sin(frame / (fps * 8)) * 30;

  // Build gradient from theme colors instead of hardcoded dark blue
  const { r: bgR, g: bgG, b: bgB } = hexToRgb(bg);
  const { r: priR, g: priG, b: priB } = hexToRgb(primary);
  const { r: accR, g: accG, b: accB } = hexToRgb(accent);

  const gradient = `
    radial-gradient(ellipse at ${30 + Math.sin(frame / (fps * 10)) * 20}% ${40 + Math.cos(frame / (fps * 8)) * 20}%,
      rgba(${priR}, ${priG}, ${priB}, 0.15) 0%, transparent 60%),
    radial-gradient(ellipse at ${70 + Math.cos(frame / (fps * 7)) * 20}% ${60 + Math.sin(frame / (fps * 9)) * 25}%,
      rgba(${accR}, ${accG}, ${accB}, 0.1) 0%, transparent 55%),
    linear-gradient(${angle1}deg, ${bg} 0%, ${shiftColor(bg, light ? -0.05 : 0.05)} 40%, ${surface} 70%, ${bg} 100%)
  `;

  // Floating orbs — derived from theme chart colors with low opacity
  const orbColors = theme.chartColors.slice(0, 5);
  const orbOpacity = light ? 0.06 : 0.08;
  const orbs = [
    { x: 20, y: 30, size: 300, color: orbColors[0] || primary, speedX: 7, speedY: 11 },
    { x: 70, y: 60, size: 250, color: orbColors[1] || accent, speedX: 9, speedY: 8 },
    { x: 40, y: 80, size: 200, color: orbColors[2] || primary, speedX: 13, speedY: 6 },
    { x: 80, y: 20, size: 350, color: orbColors[3] || accent, speedX: 11, speedY: 14 },
    { x: 10, y: 70, size: 180, color: orbColors[4] || primary, speedX: 8, speedY: 10 },
  ];

  // Grid and overlay colors adapt to light vs dark backgrounds
  const gridColor = light ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.02)";
  const fadeColor = light
    ? `rgba(${bgR},${bgG},${bgB},0.2)`
    : `rgba(${bgR},${bgG},${bgB},0.4)`;

  return (
    <AbsoluteFill style={{ background: gradient }}>
      {/* Floating glow orbs */}
      {orbs.map((orb, i) => {
        const ox = orb.x + Math.sin(frame / (fps * orb.speedX)) * 15;
        const oy = orb.y + Math.cos(frame / (fps * orb.speedY)) * 12;
        const { r, g, b } = hexToRgb(orb.color);
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${ox}%`,
              top: `${oy}%`,
              width: orb.size,
              height: orb.size,
              borderRadius: "50%",
              background: `rgba(${r}, ${g}, ${b}, ${orbOpacity})`,
              filter: `blur(${orb.size * 0.4}px)`,
              transform: "translate(-50%, -50%)",
              willChange: "transform",
            }}
          />
        );
      })}

      {/* Subtle grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(${gridColor} 1px, transparent 1px),
            linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 0.5 + Math.sin(frame / (fps * 20)) * 0.2,
        }}
      />

      {/* Top gradient fade for depth */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "30%",
          background: `linear-gradient(to bottom, ${fadeColor}, transparent)`,
        }}
      />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------------------
// Types — aligned with edit_decisions artifact schema
// ---------------------------------------------------------------------------

interface Cut {
  id: string;
  source: string;
  in_seconds: number;
  out_seconds: number;
  layer?: string;
  type?: string;
  // Component-specific props
  text?: string;
  stat?: string;
  subtitle?: string;
  callout_type?: "info" | "warning" | "tip" | "quote";
  title?: string;
  // Video source trim — seek to this point in the source before playback.
  // Defaults to 0 (play from beginning). Use this instead of in_seconds for source trimming.
  source_in_seconds?: number;
  // Comparison props
  leftLabel?: string;
  rightLabel?: string;
  leftValue?: string;
  rightValue?: string;
  // Chart props
  chartData?: any[];
  chartSeries?: any[];
  chartColors?: string[];
  chartAnimation?: string;
  donut?: boolean;
  centerLabel?: string;
  centerValue?: string;
  showGrid?: boolean;
  showValues?: boolean;
  showLegend?: boolean;
  showMarkers?: boolean;
  xLabel?: string;
  yLabel?: string;
  columns?: 2 | 3 | 4;
  // Progress bar props
  progress?: number;
  progressLabel?: string;
  progressColor?: string;
  progressAnimation?: string;
  progressSegments?: any[];
  // Hero title props (when used as scene, not overlay)
  heroSubtitle?: string;
  // Styling overrides
  backgroundColor?: string;
  backgroundImage?: string; // AI-generated or stock image rendered behind the component
  backgroundVideo?: string; // Video clip rendered behind the component (takes priority over backgroundImage)
  backgroundVideoStart?: number; // Seek position in seconds for background video (default 0)
  backgroundOverlay?: number; // Opacity of dark overlay on backgroundImage/backgroundVideo (0-1, default 0.55)
  color?: string;
  accentColor?: string;
  fontSize?: number;
  // Animation & transitions
  animation?: string;
  transition_in?: string;
  transition_out?: string;
  transition_duration?: number;
  transform?: {
    animation?: string;
    // Peak scale reached by the cut's zoom. Images: overrides the default
    // 1.28 peak of animation "zoom-in"/"zoom-out" (other animations keep
    // their own fixed amplitude). Videos: a static punch-in held for the
    // whole cut, no animated growth (1 = no zoom, the default everywhere
    // video is used).
    scale?: number;
    position?: string | { x: number; y: number };
    // Ancla del zoom de la animación de la propia imagen (ken-burns,
    // zoom-in, ...) — CSS transform-origin, p. ej. "50% 100%" para que el
    // borde inferior de la imagen quede fijo con el borde inferior del
    // vídeo mientras hace zoom, en vez de crecer desde el centro (por
    // defecto "50% 50%").
    zoomOrigin?: string;
  };
  // Per-cut audio (e.g. a CTA voiceover) — plays exactly during this cut's
  // own on-screen window, independent of the composition-wide
  // audio.narration/audio.music tracks.
  audioSrc?: string;
  audioVolume?: number;
  /** Delay (seconds, relative to this cut's own start) before audioSrc
   * starts playing — e.g. a beat of silence before a CTA voiceover kicks
   * in, instead of it starting exactly on the cut's first frame. */
  audioStartSeconds?: number;
  // Video cuts — "contain" instead of the default "cover" for motion
  // graphics whose on-screen text/diagrams reach their own edges (a crop
  // would cut information off).
  videoFit?: "cover" | "contain";
  // Retimes the source without changing (out_seconds - in_seconds) —
  // e.g. slotting an existing clip into a new on-screen duration so its
  // content still finishes exactly at the cut's own end instead of
  // freezing early or getting cut off. 1 = native speed.
  playbackRate?: number;
  // Anime scene props (type: "anime_scene")
  images?: string[];
  particles?: ParticleType;
  particleColor?: string;
  particleCount?: number;
  particleIntensity?: number;
  vignette?: boolean;
  lightingFrom?: string;
  lightingTo?: string;
  // Parallax scene props (type: "parallax_scene") — true depth parallax,
  // 2+ layers moving at different rates. See components/ParallaxScene.tsx.
  layers?: ParallaxLayer[];
  parallaxIntensity?: number;
  // Terminal scene props (type: "terminal_scene")
  steps?: TerminalStep[];
  terminalTitle?: string;
  prompt?: string;
  // Screenshot scene props (type: "screenshot_scene")
  screenshotSteps?: ScreenshotStep[];
  screenshotSize?: { width: number; height: number };
  cursorStartAt?: [number, number];
}

interface Overlay {
  type: "section_title" | "stat_reveal" | "hero_title" | "provider_chip" | "list_reveal" | "photo_insert" | "monumental_title" | "rotulo" | "impact_stamp";
  in_seconds: number;
  out_seconds: number;
  text?: string;
  subtitle?: string;
  accentColor?: string;
  position?: string;
  // provider_chip
  providers?: string[];
  cycleSeconds?: number;
  label?: string;
  // list_reveal — enumeration items appearing one at a time on one side
  items?: ListRevealItem[];
  // photo_insert — real photograph/document overlaid on the background
  source?: string;
  caption?: string;
  attribution?: string;
  width?: number;
  // monumental_title — fracción del ancho de pantalla que debe ocupar el
  // título (0-1; por defecto 0.9) y si lleva el halo de fondo suave detrás
  // (por defecto true — desactivarlo tiene sentido sobre imágenes ya
  // oscuras, donde el texto blanco ya tiene contraste de sobra).
  widthRatio?: number;
  background?: boolean;
  // rotulo — lower-third data/fact callout (or the "cta" subscribe variant).
  // Reuses `text`/`subtitle` (mapped to Rotulo's `subtext`) and `position`
  // above; `position` here is Rotulo's own set ("bottom-left" |
  // "bottom-center" | "top-left"), not list_reveal/photo_insert's
  // "left"/"right".
  variant?: "label" | "cta";
  iconSrc?: string;
}

interface AudioLayer {
  src: string;
  volume?: number;
  /** Stop playback at this point (seconds into the composition timeline,
   * since narration/music start at frame 0) — trims the tail instead of
   * letting it run to the end of the source file. */
  endAt?: number;
}

interface AudioConfig {
  narration?: AudioLayer;
  /** Sound-effects track — independent of narration/music, mixed in parallel. */
  sfx?: AudioLayer;
  music?: AudioLayer & {
    fadeInSeconds?: number;
    fadeOutSeconds?: number;
    /** Start playback from this offset in seconds (skip quiet intros).
     *  Use the audio_energy tool to find the optimal offset. */
    offsetSeconds?: number;
    /** Loop the music if it's shorter than the video duration. */
    loop?: boolean;
  };
}

export interface ExplainerProps {
  [key: string]: unknown;
  cuts: Cut[];
  overlays?: Overlay[];
  captions?: WordCaption[];
  audio?: AudioConfig;
  /** Isotipo del canal, persistente durante toda la composición — mismo
   * tratamiento que en los shorts de vídeo 1 (vía SocialClip). Opt-in: sin
   * este prop no se renderiza nada, así que el vídeo largo (16:9) no se ve
   * afectado. */
  watermarkSrc?: string;
  /** Fondo de marca (fondo-limpio.jpg, el mismo que usa la tarjeta CTA) de
   * toda la composición, montado una sola vez detrás de todo — igual que
   * watermarkSrc. Pensado para cortes de vídeo en videoFit:"contain": al
   * ir por-corte (montar/desmontar junto al propio <OffthreadVideo> en
   * cada Sequence) el vídeo dejaba de pintarse pasados unos ~140 frames;
   * como capa única y persistente no le pasa — mismo patrón ya probado
   * con el isotipo, que convive con los cortes de vídeo sin problema. */
  brandBackground?: boolean;
}

// ---------------------------------------------------------------------------
// Image Extensions
// ---------------------------------------------------------------------------

const IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".bmp", ".tiff", ".tif", ".webp"];
const VIDEO_EXTENSIONS = [".mp4", ".mov", ".webm", ".avi", ".mkv"];

function isImage(source: string): boolean {
  const lower = source.toLowerCase();
  return IMAGE_EXTENSIONS.some((ext) => lower.endsWith(ext));
}

function isVideo(source: string): boolean {
  const lower = source.toLowerCase();
  return VIDEO_EXTENSIONS.some((ext) => lower.endsWith(ext));
}

// ---------------------------------------------------------------------------
// Cinematic vignette overlay
// ---------------------------------------------------------------------------

const Vignette: React.FC = () => (
  <AbsoluteFill
    style={{
      background:
        "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%)",
      pointerEvents: "none",
    }}
  />
);

// ---------------------------------------------------------------------------
// Focal point — resolves cut.transform.position (previously declared but
// never read anywhere in this file, confirmed 29 ago 2026) into a CSS
// object-position value. Without this, objectFit:"cover" always crops to
// dead-center, so an off-center subject gets clipped as soon as Ken Burns
// zooms/pans — this is the anchor the crop and camera motion are measured
// from, not an extra motion effect of its own.
// ---------------------------------------------------------------------------

function resolveObjectPosition(
  position?: string | { x: number; y: number }
): string {
  if (!position) return "50% 50%";
  if (typeof position === "string") return position;
  const x = Math.max(0, Math.min(100, position.x));
  const y = Math.max(0, Math.min(100, position.y));
  return `${x}% ${y}%`;
}

// ---------------------------------------------------------------------------
// Enhanced Image Scene — spring physics, parallax, variety
// ---------------------------------------------------------------------------

const ImageScene: React.FC<{
  src: string;
  animation?: string;
  /** Anchor point for objectFit:"cover" cropping and the camera motion
   * transform above it — e.g. { x: 65, y: 40 } or "top". Default: centered. */
  focalPoint?: string | { x: number; y: number };
  /** "cut"/"none" skips the spring fade-in (resp. the fade-out tail) entirely —
   * e.g. a social short's opening cut, which needs to hook instantly instead
   * of rising from black. Anything else (including unset) keeps the existing
   * spring/crossfade look every other cut already relies on. */
  transitionIn?: string;
  transitionOut?: string;
  /** CSS transform-origin for the zoom/pan animation above — e.g. "50% 100%"
   * pins the image's bottom edge in place while it zooms in, instead of the
   * default "50% 50%" (grows from center, both edges recede evenly). */
  zoomOrigin?: string;
  /** Backing behind the image — matters when transitionOut fades toward
   * 0.3 opacity (not 0): whatever this is set to is what gets revealed
   * during that fade. Default "#0F172A" everywhere except where a cut
   * explicitly overrides it (e.g. "transparent" right before a CTA card,
   * so its own background shows through the fade instead of this flat
   * navy placeholder). */
  backgroundColor?: string;
  /** Overrides the peak scale reached by "zoom-in"/"zoom-out" (default
   * 1.28 either way) — e.g. 1.14 to halve the default zoom-in amount.
   * Other animations (pan-*, ken-burns, ...) keep their own fixed
   * amplitude regardless of this prop. */
  zoomScale?: number;
}> = ({
  src,
  animation,
  focalPoint,
  transitionIn,
  transitionOut,
  zoomOrigin,
  backgroundColor = "#0F172A",
  zoomScale,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const hardIn = ["cut", "none"].includes((transitionIn || "").toLowerCase());
  const hardOut = ["cut", "none"].includes((transitionOut || "").toLowerCase());

  // Smooth spring fade-in — skipped on a hard cut-in.
  const fadeIn = hardIn ? 1 : spring({ frame, fps, config: { damping: 18, stiffness: 80 } });

  // Fade-out for crossfade effect — skipped on a hard cut-out.
  const fadeOutStart = durationInFrames - 8;
  const fadeOut = hardOut
    ? 1
    : interpolate(frame, [fadeOutStart, durationInFrames], [1, 0.3], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });

  let scale = 1;
  let translateX = 0;
  let translateY = 0;
  let objectPositionXOverride: number | undefined;
  const anim = animation || "zoom-in";

  // Progress with easing — smoother than linear
  const progress = interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Amplitudes raised ~55-70% over the original values (29 ago 2026) — see
  // matching note in components/AnimeScene.tsx useCameraMotion. Scale grows
  // alongside translate so the wider pan/drift never reveals the image edge.
  const zoomAmplitude = zoomScale !== undefined ? zoomScale - 1 : 0.28;
  if (anim === "zoom-in") {
    scale = 1 + progress * zoomAmplitude;
  } else if (anim === "zoom-out") {
    scale = 1 + zoomAmplitude - progress * zoomAmplitude;
  } else if (anim === "pan-left") {
    translateX = interpolate(progress, [0, 1], [65, -65]);
    scale = 1.2;
  } else if (anim === "pan-right") {
    translateX = interpolate(progress, [0, 1], [-65, 65]);
    scale = 1.2;
  } else if (anim === "ken-burns" || anim === "ken-burns-slow-zoom") {
    // Cinematic Ken Burns: gentle zoom + diagonal drift
    scale = 1 + progress * 0.32;
    translateX = interpolate(progress, [0, 1], [0, -42]);
    translateY = interpolate(progress, [0, 1], [0, -26]);
  } else if (anim === "parallax") {
    // Subtle parallax — foreground moves faster
    translateY = interpolate(progress, [0, 1], [28, -28]);
    scale = 1.16;
  } else if (anim === "drift-up") {
    // Gentle continuous upward drift — was silently falling through to no
    // motion at all (unrecognized keyword), leaving the cut static.
    translateY = interpolate(progress, [0, 1], [26, -26]);
    scale = 1.08 + progress * 0.08;
  } else if (anim === "pan-edge-left-to-right") {
    // Full edge-to-edge sweep of the "cover" crop window itself — starts
    // showing the image's left margin (object-position 0%), ends showing
    // its right margin (100%). No scale/translate involved: unlike
    // "pan-left"/"pan-right" above (a small ±65px drift at a fixed 1.2x
    // zoom), this animates the crop position directly so the full source
    // width is revealed over the cut's duration.
    objectPositionXOverride = interpolate(progress, [0, 1], [0, 100]);
  }
  // "static" or "none" → just display

  return (
    <AbsoluteFill style={{ overflow: "hidden", background: backgroundColor }}>
      <Img
        src={resolveAsset(src)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition:
            objectPositionXOverride !== undefined
              ? `${objectPositionXOverride}% 50%`
              : resolveObjectPosition(focalPoint),
          opacity: fadeIn * fadeOut,
          transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
          transformOrigin: zoomOrigin || "50% 50%",
          willChange: "transform, opacity",
        }}
      />
      <Vignette />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------------------
// Enhanced Video Scene
// ---------------------------------------------------------------------------

const VideoScene: React.FC<{
  src: string;
  startFrom?: number;
  transitionIn?: string;
  transitionOut?: string;
  transitionDuration?: number;
  sceneDurationSeconds: number;
  backgroundColor?: string;
  /** "contain" scales the clip to fit fully inside the frame instead of
   * cropping it — for motion graphics with on-screen text/diagram content
   * that reaches the clip's own edges, where a "cover" crop would cut
   * information off. Default "cover" (existing behavior everywhere else). */
  fit?: "cover" | "contain";
  /** Speeds up (>1) or slows down (<1) the source without touching the
   * cut's own on-screen duration — e.g. retiming a clip to a new slot in a
   * reordered sequence so its content still finishes right as the cut
   * ends, instead of freezing on its last frame early or getting cut off
   * mid-playback. Default 1 (native speed). */
  playbackRate?: number;
  /** Fixed scale applied for the cut's whole duration — a static punch-in,
   * not an animated zoom (no movement, no progress-based growth). e.g.
   * 1.25 holds the clip at 125% throughout. Default 1 (no zoom, existing
   * behavior everywhere else). */
  zoomScale?: number;
}> = ({
  src,
  startFrom = 0,
  transitionIn,
  transitionOut,
  transitionDuration,
  sceneDurationSeconds,
  backgroundColor = "#0F172A",
  fit = "cover",
  playbackRate = 1,
  zoomScale = 1,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const durationInFrames = Math.max(1, Math.round(sceneDurationSeconds * fps));
  const scale = zoomScale;

  const hardIn = ["cut", "none"].includes((transitionIn || "").toLowerCase());
  const hardOut = ["cut", "none"].includes((transitionOut || "").toLowerCase());
  const transitionFrames = Math.max(
    1,
    Math.round((transitionDuration ?? 8 / fps) * fps),
  );
  const fadeIn = hardIn
    ? 1
    : interpolate(frame, [0, transitionFrames], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
  const fadeOutStart = Math.max(0, durationInFrames - transitionFrames);
  const fadeOut = hardOut
    ? 1
    : interpolate(frame, [fadeOutStart, durationInFrames], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });

  return (
    <AbsoluteFill style={{ background: backgroundColor, overflow: "hidden" }}>
      <OffthreadVideo
        src={resolveAsset(src)}
        startFrom={Math.round(startFrom * fps)}
        playbackRate={playbackRate}
        style={{
          width: "100%",
          height: "100%",
          objectFit: fit,
          opacity: fadeIn * fadeOut,
          transform: `scale(${scale})`,
        }}
        muted
      />
      <Vignette />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------------------
// Scene renderer — maps cut type / source to the right component
// ---------------------------------------------------------------------------

// Background image layer — renders an AI-generated/stock image behind data components
const BackgroundImageLayer: React.FC<{
  src: string;
  overlayOpacity?: number;
  children: React.ReactNode;
}> = ({ src, overlayOpacity = 0.55, children }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Subtle ken-burns on the background
  const progress = interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const bgScale = 1 + progress * 0.08;

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {/* Background image with subtle zoom */}
      <Img
        src={resolveAsset(src)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `scale(${bgScale})`,
          willChange: "transform",
        }}
      />
      {/* Dark overlay for readability */}
      <AbsoluteFill
        style={{
          background: `rgba(15, 23, 42, ${overlayOpacity})`,
        }}
      />
      {/* Component content on top */}
      {children}
    </AbsoluteFill>
  );
};

// Background video layer — plays a looping video behind component content with dark overlay
const BackgroundVideoLayer: React.FC<{
  src: string;
  startFrom?: number;
  overlayOpacity?: number;
  children: React.ReactNode;
}> = ({ src, startFrom = 0, overlayOpacity = 0.55, children }) => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {/* Background video */}
      <OffthreadVideo
        src={resolveAsset(src)}
        startFrom={Math.round(startFrom * fps)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        muted
      />
      {/* Dark overlay for readability */}
      <AbsoluteFill
        style={{
          background: `rgba(15, 23, 42, ${overlayOpacity})`,
        }}
      />
      {/* Component content on top */}
      {children}
    </AbsoluteFill>
  );
};

const SceneRenderer: React.FC<{ cut: Cut; theme: ThemeConfig }> = ({ cut, theme }) => {
  // Closing CTA card (type: "cta_card") — same brand card the video 001
  // shorts close on. Self-contained (own background), not wrapped with
  // maybeWrapWithBg below since it isn't image/video content.
  if (cut.type === "cta_card") {
    return <CtaScene text={cut.text} />;
  }

  // Wrap component with background video or image if specified
  const maybeWrapWithBg = (element: React.ReactElement) => {
    if (cut.backgroundVideo) {
      return (
        <BackgroundVideoLayer
          src={cut.backgroundVideo}
          startFrom={cut.backgroundVideoStart ?? 0}
          overlayOpacity={cut.backgroundOverlay ?? 0.55}
        >
          {element}
        </BackgroundVideoLayer>
      );
    }
    if (cut.backgroundImage) {
      return (
        <BackgroundImageLayer
          src={cut.backgroundImage}
          overlayOpacity={cut.backgroundOverlay ?? 0.55}
        >
          {element}
        </BackgroundImageLayer>
      );
    }
    return element;
  };

  // Resolve the scene element based on cut type, then wrap with backgroundImage if set
  // Use transparent bg so the animated gradient background shows through
  // When no explicit backgroundColor on the cut, inherit from theme
  const rawBg = (cut.backgroundImage || cut.backgroundVideo) ? "transparent" : (cut.backgroundColor || theme.surfaceColor);
  const bgColor = (rawBg === theme.backgroundColor || rawBg === "#0F172A" || rawBg === "#0f172a") ? "transparent" : rawBg;
  const textColor = cut.color || theme.textColor;
  const accent = cut.accentColor || theme.accentColor;

  // Explicit component types — use theme-derived defaults for colors
  if (cut.type === "text_card" && cut.text) {
    return maybeWrapWithBg(
      <TextCard text={cut.text} fontSize={cut.fontSize} color={textColor} backgroundColor={bgColor} />
    );
  }
  if (cut.type === "stat_card" && cut.stat) {
    return maybeWrapWithBg(
      <StatCard stat={cut.stat} subtitle={cut.subtitle} accentColor={accent} backgroundColor={bgColor} />
    );
  }
  if (cut.type === "callout" && cut.text) {
    return maybeWrapWithBg(
      <CalloutBox
        text={cut.text} type={cut.callout_type} title={cut.title}
        borderColor={accent} backgroundColor={cut.backgroundColor || theme.surfaceColor}
        textColor={textColor} containerBackgroundColor={bgColor}
      />
    );
  }
  if (cut.type === "comparison" && cut.leftLabel && cut.rightLabel && cut.leftValue && cut.rightValue) {
    return maybeWrapWithBg(
      <ComparisonCard
        leftLabel={cut.leftLabel} rightLabel={cut.rightLabel}
        leftValue={cut.leftValue} rightValue={cut.rightValue}
        title={cut.title} backgroundColor={bgColor} textColor={textColor}
      />
    );
  }
  if (cut.type === "hero_title" && cut.text) {
    return maybeWrapWithBg(
      <HeroTitle title={cut.text} subtitle={cut.heroSubtitle || cut.subtitle} />
    );
  }
  if (cut.type === "terminal_scene" && cut.steps) {
    return maybeWrapWithBg(
      <TerminalScene
        title={cut.terminalTitle || "Terminal"}
        steps={cut.steps as TerminalStep[]}
        prompt={cut.prompt}
        accentColor={accent}
        backgroundColor={bgColor || theme.backgroundColor}
      />
    );
  }
  if (cut.type === "screenshot_scene" && cut.backgroundImage && cut.screenshotSteps) {
    return (
      <ScreenshotScene
        backgroundImage={cut.backgroundImage}
        backgroundSize={cut.screenshotSize}
        steps={cut.screenshotSteps as ScreenshotStep[]}
        accentColor={accent}
        cursorStartAt={cut.cursorStartAt}
      />
    );
  }

  // --- Chart types — use theme.chartColors as default palette ---
  if (cut.type === "bar_chart" && cut.chartData) {
    return maybeWrapWithBg(
      <BarChart
        data={cut.chartData} title={cut.title} colors={cut.chartColors || theme.chartColors}
        animationStyle={(cut.chartAnimation as any) || "grow-up"}
        showGrid={cut.showGrid} showValues={cut.showValues} backgroundColor={bgColor}
      />
    );
  }
  if (cut.type === "line_chart" && cut.chartSeries) {
    return maybeWrapWithBg(
      <LineChart
        series={cut.chartSeries} title={cut.title} colors={cut.chartColors || theme.chartColors}
        animationStyle={(cut.chartAnimation as any) || "draw"}
        showGrid={cut.showGrid} showMarkers={cut.showMarkers} showLegend={cut.showLegend}
        xLabel={cut.xLabel} yLabel={cut.yLabel} backgroundColor={bgColor}
      />
    );
  }
  if (cut.type === "pie_chart" && cut.chartData) {
    return maybeWrapWithBg(
      <PieChart
        data={cut.chartData} title={cut.title} colors={cut.chartColors || theme.chartColors}
        animationStyle={(cut.chartAnimation as any) || "expand"}
        donut={cut.donut} centerLabel={cut.centerLabel} centerValue={cut.centerValue}
        showLegend={cut.showLegend} backgroundColor={bgColor}
      />
    );
  }
  if (cut.type === "kpi_grid" && cut.chartData) {
    return maybeWrapWithBg(
      <KPIGrid
        metrics={cut.chartData} title={cut.title} columns={cut.columns}
        colors={cut.chartColors || theme.chartColors} animationStyle={(cut.chartAnimation as any) || "count-up"}
        backgroundColor={bgColor}
      />
    );
  }
  if (cut.type === "progress_bar" && cut.progress !== undefined) {
    return maybeWrapWithBg(
      <AbsoluteFill
        style={{
          background: bgColor || theme.surfaceColor,
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "80px 120px",
        }}
      >
        {cut.title && (
          <div style={{
            position: "absolute", top: 120, fontSize: 48, fontWeight: 700,
            color: textColor, textAlign: "center", width: "100%",
          }}>
            {cut.title}
          </div>
        )}
        <ProgressBar
          progress={cut.progress} label={cut.progressLabel}
          color={cut.progressColor || accent}
          animationStyle={(cut.progressAnimation as any) || "fill"}
          segments={cut.progressSegments} backgroundColor={cut.backgroundColor || theme.surfaceColor}
        />
      </AbsoluteFill>
    );
  }

  // --- Parallax scene (true depth parallax, 2+ layers) ---
  if (cut.type === "parallax_scene" && cut.layers && cut.layers.length > 0) {
    return (
      <ParallaxScene
        layers={cut.layers}
        animation={(cut.animation as ParallaxMotion) || "push-in"}
        intensity={cut.parallaxIntensity ?? 1}
        vignette={cut.vignette ?? true}
        backgroundColor={cut.backgroundColor ?? theme.backgroundColor}
        sceneDurationSeconds={cut.out_seconds - cut.in_seconds}
      />
    );
  }

  // --- Anime scene (multi-image crossfade + particles) ---
  if (cut.type === "anime_scene" && cut.images && cut.images.length > 0) {
    return (
      <AnimeScene
        images={cut.images}
        animation={(cut.animation as CameraMotion) || "ken-burns"}
        particles={cut.particles}
        particleColor={cut.particleColor}
        particleCount={cut.particleCount}
        particleIntensity={cut.particleIntensity}
        backgroundColor={cut.backgroundColor ?? theme.backgroundColor}
        vignette={cut.vignette ?? true}
        lightingFrom={cut.lightingFrom}
        lightingTo={cut.lightingTo}
        focalPoint={cut.transform?.position}
        sceneDurationSeconds={cut.out_seconds - cut.in_seconds}
      />
    );
  }

  // --- Media types (image / video fallback) ---
  const animation = cut.animation || cut.transform?.animation;

  if (cut.source && isImage(cut.source)) {
    return maybeWrapWithBg(
      <ImageScene
        src={cut.source}
        animation={animation}
        focalPoint={cut.transform?.position}
        transitionIn={cut.transition_in}
        transitionOut={cut.transition_out}
        zoomOrigin={cut.transform?.zoomOrigin}
        backgroundColor={cut.backgroundColor ?? theme.backgroundColor}
        zoomScale={cut.transform?.scale}
      />,
    );
  }

  if (cut.source && isVideo(cut.source)) {
    return maybeWrapWithBg(
      <VideoScene
        src={cut.source}
        startFrom={cut.source_in_seconds ?? 0}
        transitionIn={cut.transition_in}
        transitionOut={cut.transition_out}
        transitionDuration={cut.transition_duration}
        sceneDurationSeconds={cut.out_seconds - cut.in_seconds}
        backgroundColor={cut.backgroundColor ?? theme.backgroundColor}
        fit={cut.videoFit}
        playbackRate={cut.playbackRate}
        zoomScale={cut.transform?.scale}
      />,
    );
  }

  // Final fallback — try as image if source exists, otherwise show text_card
  if (cut.source) {
    return maybeWrapWithBg(
      <ImageScene
        src={cut.source}
        animation={animation}
        focalPoint={cut.transform?.position}
        transitionIn={cut.transition_in}
        transitionOut={cut.transition_out}
        zoomOrigin={cut.transform?.zoomOrigin}
        backgroundColor={cut.backgroundColor ?? theme.backgroundColor}
        zoomScale={cut.transform?.scale}
      />,
    );
  }

  // No source, no type — render as text card with cut id as fallback
  return <TextCard text={cut.text || cut.id} color={textColor} backgroundColor={bgColor} />;
};

// ---------------------------------------------------------------------------
// Overlay renderer
// ---------------------------------------------------------------------------

const OverlayRenderer: React.FC<{ overlay: Overlay }> = ({ overlay }) => {
  if (overlay.type === "section_title") {
    return (
      <SectionTitle
        title={overlay.text ?? ""}
        subtitle={overlay.subtitle}
        accentColor={overlay.accentColor}
        position={(overlay.position as any) || "top-left"}
      />
    );
  }
  if (overlay.type === "stat_reveal") {
    return (
      <StatReveal
        stat={overlay.text ?? ""}
        label={overlay.subtitle}
        accentColor={overlay.accentColor}
        position={(overlay.position as any) || "bottom-right"}
      />
    );
  }
  if (overlay.type === "hero_title") {
    return <HeroTitle title={overlay.text ?? ""} subtitle={overlay.subtitle} />;
  }
  if (overlay.type === "provider_chip" && overlay.providers) {
    return (
      <ProviderChip
        providers={overlay.providers as string[]}
        cycleSeconds={overlay.cycleSeconds}
        position={(overlay.position as any) || "bottom-right"}
        accentColor={overlay.accentColor}
        label={overlay.label}
      />
    );
  }
  if (overlay.type === "list_reveal" && overlay.items) {
    return (
      <ListReveal
        items={overlay.items}
        position={(overlay.position as "left" | "right") || "right"}
        sceneDurationSeconds={overlay.out_seconds - overlay.in_seconds}
      />
    );
  }
  if (overlay.type === "photo_insert" && overlay.source) {
    return (
      <PhotoInsert
        source={overlay.source}
        caption={overlay.caption}
        attribution={overlay.attribution}
        position={(overlay.position as "left" | "right") || "right"}
        width={overlay.width}
        sceneDurationSeconds={overlay.out_seconds - overlay.in_seconds}
      />
    );
  }
  if (overlay.type === "rotulo") {
    return (
      <Rotulo
        text={overlay.text ?? ""}
        variant={overlay.variant}
        subtext={overlay.subtitle}
        iconSrc={overlay.iconSrc}
        position={(overlay.position as "bottom-left" | "bottom-center" | "top-left") || "bottom-center"}
        sceneDurationSeconds={overlay.out_seconds - overlay.in_seconds}
      />
    );
  }
  if (overlay.type === "impact_stamp") {
    return <ImpactStamp text={overlay.text ?? ""} />;
  }
  if (overlay.type === "monumental_title") {
    return (
      <MonumentalTitle
        title={overlay.text ?? ""}
        subtitle={overlay.subtitle}
        position={(overlay.position as "center" | "bottom-center") || "bottom-center"}
        widthRatio={overlay.widthRatio}
        background={overlay.background}
      />
    );
  }
  return null;
};

// ---------------------------------------------------------------------------
// Main composition
// ---------------------------------------------------------------------------

const CTA_BACKGROUND_LEAD_SECONDS = 1;

export const Explainer: React.FC<ExplainerProps> = (props) => {
  const { cuts, overlays, captions, audio, watermarkSrc, brandBackground } = props;
  const { fps, durationInFrames } = useVideoConfig();

  // Resolve theme from props — playbook name, theme name, or custom themeConfig
  const theme = resolveTheme(props as Record<string, unknown>);

  return (
    <AbsoluteFill style={{ background: theme.backgroundColor, fontFamily: theme.headingFont || fontFamily }}>
      {/* Layer 0: Animated gradient background — driven by theme */}
      <AnimatedBackground theme={theme} />

      {/* Layer 0.4: persistent brand background (fondo-limpio.jpg) for the
          whole composition — see ExplainerProps.brandBackground doc. Only
          actually visible wherever cuts don't fully cover it (e.g. a
          videoFit:"contain" cut's letterbox bars). */}
      {brandBackground && <CtaBackground />}

      {/* Layer 0.5: cta_card background(s), visible a beat before the cut
          officially starts — sits behind the Layer 1 loop below (painted
          first), so it only actually shows once the preceding cut's own
          fade reveals it. Cut "19b" pairs with this by setting its own
          backgroundColor to "transparent" for its last frames; without
          that override an image cut's opaque backing (#0F172A) would keep
          blocking this regardless. */}
      {cuts
        .filter((c) => c.type === "cta_card")
        .map((c) => {
          const leadFrom = Math.round((c.in_seconds - CTA_BACKGROUND_LEAD_SECONDS) * fps);
          return (
            <Sequence
              key={`cta-bg-${c.id}`}
              from={Math.max(0, leadFrom)}
              durationInFrames={Math.round(CTA_BACKGROUND_LEAD_SECONDS * fps)}
            >
              <CtaBackground />
            </Sequence>
          );
        })}

      {/* Layer 1: Visual scenes */}
      {cuts.map((cut) => {
        const from = Math.round(cut.in_seconds * fps);
        const duration = Math.round((cut.out_seconds - cut.in_seconds) * fps);
        // cta_card gets a head start via Remotion's built-in premounting —
        // its <CanvasImage> background gets to finish decoding before the
        // cut needs to actually be visible, instead of flashing blank on
        // its first real frame while the image loads for the first time.
        const premountFor =
          cut.type === "cta_card"
            ? Math.round(CTA_BACKGROUND_LEAD_SECONDS * fps)
            : undefined;

        return (
          <Sequence
            key={cut.id}
            from={from}
            durationInFrames={duration}
            premountFor={premountFor}
          >
            <SceneRenderer cut={cut} theme={theme} />
            {cut.audioSrc && (
              <Sequence from={Math.round((cut.audioStartSeconds ?? 0) * fps)} layout="none">
                <Audio src={resolveAsset(cut.audioSrc)} volume={cut.audioVolume ?? 1} />
              </Sequence>
            )}
          </Sequence>
        );
      })}

      {/* Layer 2: Overlays (section titles, stat reveals, hero titles) */}
      {overlays?.map((overlay, i) => {
        const from = Math.round(overlay.in_seconds * fps);
        const duration = Math.round(
          (overlay.out_seconds - overlay.in_seconds) * fps
        );

        return (
          <Sequence key={`overlay-${i}`} from={from} durationInFrames={duration}>
            <OverlayRenderer overlay={overlay} />
          </Sequence>
        );
      })}

      {/* Layer 3: Captions (word-by-word highlight) */}
      {captions && captions.length > 0 && (
        <CaptionOverlay
          words={captions}
          wordsPerPage={6}
          fontSize={theme.captionFontSize ?? 42}
          highlightColor={theme.captionHighlightColor}
          backgroundColor={theme.captionBackgroundColor}
        />
      )}

      {/* Layer 3b: Isotipo del canal — persistente, opt-in vía watermarkSrc */}
      {watermarkSrc && <Watermark src={watermarkSrc} />}

      {/* Layer 4: Audio — narration */}
      {audio?.narration?.src && (
        <Audio
          src={resolveAsset(audio.narration.src)}
          volume={audio.narration.volume ?? 1}
          trimAfter={
            audio.narration.endAt !== undefined
              ? Math.round(audio.narration.endAt * fps)
              : undefined
          }
        />
      )}

      {/* Layer 4: Audio — sfx */}
      {audio?.sfx?.src && (
        <Audio
          src={resolveAsset(audio.sfx.src)}
          volume={audio.sfx.volume ?? 1}
          trimAfter={
            audio.sfx.endAt !== undefined
              ? Math.round(audio.sfx.endAt * fps)
              : undefined
          }
        />
      )}

      {/* Layer 4: Audio — music with offset, fade in/out, and optional loop */}
      {audio?.music?.src && (
        <Audio
          src={resolveAsset(audio.music.src)}
          startFrom={Math.round((audio.music.offsetSeconds ?? 0) * fps)}
          loop={audio.music.loop ?? false}
          loopVolumeCurveBehavior="repeat"
          volume={(f) => {
            const baseVol = audio.music!.volume ?? 0.1;
            const fadeInDur = (audio.music!.fadeInSeconds ?? 2) * fps;
            const fadeOutDur = (audio.music!.fadeOutSeconds ?? 3) * fps;
            const totalFrames = durationInFrames;

            // Fade in
            const fadeIn = interpolate(f, [0, fadeInDur], [0, baseVol], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            // Fade out
            const fadeOut = interpolate(
              f,
              [totalFrames - fadeOutDur, totalFrames],
              [baseVol, 0],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
            );
            return Math.min(fadeIn, fadeOut);
          }}
        />
      )}
    </AbsoluteFill>
  );
};
