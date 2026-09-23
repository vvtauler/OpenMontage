import { Composition, CalculateMetadataFunction } from "remotion";
import { Explainer, ExplainerProps } from "./Explainer";
import {
  CinematicRenderer,
  calculateCinematicMetadata,
} from "./CinematicRenderer";
import { signalFromTomorrowWithMusicFixture } from "./cinematic/fixtures";
import { TalkingHead, TalkingHeadProps, calculateTalkingHeadMetadata } from "./TalkingHead";
import {
  TitledVideo,
  calculateTitledVideoMetadata,
} from "./TitledVideo";
import { EndTag, EndTagProps } from "./components/EndTag";
import { HeroTitle } from "./components/HeroTitle";
import { ProductReveal, ProductRevealProps } from "./components/ProductReveal";
import { CaptionOverlay, WordCaption } from "./components/CaptionOverlay";
import { CollageBurst, CollageBurstProps } from "./CollageBurst";
import { LyricOverlay, LyricOverlayProps } from "./LyricOverlay";
import {
  SocialClip,
  SocialClipProps,
  calculateSocialClipMetadata,
} from "./components/SocialClip";
import { artilugioLargoTemplate } from "./fixtures/templates/artilugioLargoTemplate";
import { artilugioShortTemplate } from "./fixtures/templates/artilugioShortTemplate";
import { video003 } from "./fixtures/video003";
import {
  short1HookFixture as video003Short1,
  short2MecanismoFixture as video003Short2,
  short3ClimaxFixture as video003Short3,
  short4RevelacionFixture as video003Short4,
} from "./fixtures/video003-shorts";
import { video004 } from "./fixtures/video004";
import { video005Fixture } from "./fixtures/video005";
import { video006Fixture } from "./fixtures/video006";
import {
  short1HookFixture as video004Short1,
  short2MecanismoFixture as video004Short2,
  short3ClimaxFixture as video004Short3,
  short4RevelacionFixture as video004Short4,
} from "./fixtures/video004-shorts";
import {
  short1RescateFixture as video005Short1,
  short2PruebaFixture as video005Short2,
  short3TesoroFixture as video005Short3,
  short4CambioFixture as video005Short4,
  short5OroFixture as video005Short5,
  short6SignificadoFixture as video005Short6,
} from "./fixtures/video005-shorts";

// ---------------------------------------------------------------------------
// Theme System — prevents every video from looking like dark fintech
// ---------------------------------------------------------------------------

export interface ThemeConfig {
  primaryColor: string;
  accentColor: string;
  backgroundColor: string;
  surfaceColor: string;
  textColor: string;
  mutedTextColor: string;
  headingFont: string;
  bodyFont: string;
  monoFont: string;
  chartColors: string[];
  springConfig: { damping: number; stiffness: number; mass: number };
  transitionDuration: number;
  captionHighlightColor: string;
  captionBackgroundColor: string;
  /** Optional per-video override — undefined keeps Explainer's existing 42px
   * default (16:9 long-form). Vertical shorts pass a larger size (e.g. 54,
   * matching SocialClip's brand captions) via themeConfig. */
  captionFontSize?: number;
  /** Optional per-video override — undefined keeps CaptionOverlay's own
   * default (Space Grotesk). Artilugio shorts pass "Montserrat" via
   * themeConfig to match the brand type system (manual de identidad visual
   * §8 / social-shorts-strategy.md §8: Cinzel for the wordmark, Montserrat
   * for CTA/body/captions) — the font itself still needs to be loaded
   * where it's used (see CaptionOverlay.tsx). */
  captionFontFamily?: string;
  /** Optional per-video override — undefined keeps CaptionOverlay's own
   * default (700). Pairs with captionFontFamily: "Montserrat" for the
   * ExtraBold (800) weight the brand spec asks for. */
  captionFontWeight?: number;
}

export const THEMES: Record<string, ThemeConfig> = {
  "clean-professional": {
    primaryColor: "#2563EB",
    accentColor: "#F59E0B",
    backgroundColor: "#FFFFFF",
    surfaceColor: "#F9FAFB",
    textColor: "#1F2937",
    mutedTextColor: "#6B7280",
    headingFont: "Inter",
    bodyFont: "Inter",
    monoFont: "JetBrains Mono",
    chartColors: ["#2563EB", "#F59E0B", "#10B981", "#8B5CF6", "#EC4899", "#06B6D4"],
    springConfig: { damping: 20, stiffness: 120, mass: 1 },
    transitionDuration: 0.4,
    captionHighlightColor: "#2563EB",
    captionBackgroundColor: "rgba(255, 255, 255, 0.85)",
  },
  "flat-motion-graphics": {
    primaryColor: "#7C3AED",
    accentColor: "#EC4899",
    backgroundColor: "#0F172A",
    surfaceColor: "#1E293B",
    textColor: "#F8FAFC",
    mutedTextColor: "#94A3B8",
    headingFont: "Space Grotesk",
    bodyFont: "Space Grotesk",
    monoFont: "Fira Code",
    chartColors: ["#7C3AED", "#EC4899", "#06B6D4", "#F59E0B", "#10B981", "#EF4444"],
    springConfig: { damping: 12, stiffness: 80, mass: 1 },
    transitionDuration: 0.3,
    captionHighlightColor: "#22D3EE",
    captionBackgroundColor: "rgba(15, 23, 42, 0.75)",
  },
  "minimalist-diagram": {
    primaryColor: "#1A1A2E",
    accentColor: "#E94560",
    backgroundColor: "#FAFAFA",
    surfaceColor: "#FFFFFF",
    textColor: "#1A1A2E",
    mutedTextColor: "#6B7280",
    headingFont: "IBM Plex Sans",
    bodyFont: "IBM Plex Sans",
    monoFont: "IBM Plex Mono",
    chartColors: ["#E94560", "#1A1A2E", "#0F3460", "#9CA3AF"],
    springConfig: { damping: 25, stiffness: 150, mass: 1 },
    transitionDuration: 0.5,
    captionHighlightColor: "#E94560",
    captionBackgroundColor: "rgba(250, 250, 250, 0.9)",
  },
  "anime-ghibli": {
    primaryColor: "#2D5016",
    accentColor: "#FFB347",
    backgroundColor: "#0A0A1A",
    surfaceColor: "#1A2332",
    textColor: "#F0E6D3",
    mutedTextColor: "#A8957E",
    headingFont: "Noto Serif JP",
    bodyFont: "Noto Sans",
    monoFont: "Fira Code",
    chartColors: ["#FFB347", "#2D5016", "#FF6B9D", "#A8E6CF", "#6B4C8A", "#E8927C"],
    springConfig: { damping: 18, stiffness: 60, mass: 1 },
    transitionDuration: 1.0,
    captionHighlightColor: "#FFB347",
    captionBackgroundColor: "rgba(10, 10, 26, 0.8)",
  },
};

// Default theme when none is specified — uses the existing dark style for backwards compatibility
export const DEFAULT_THEME = THEMES["flat-motion-graphics"];

export function resolveTheme(props: Record<string, unknown>): ThemeConfig {
  const themeName = (props.theme as string) || (props.playbook as string);
  if (themeName && THEMES[themeName]) {
    return THEMES[themeName];
  }
  // Allow custom theme passed as full object
  if (props.themeConfig && typeof props.themeConfig === "object") {
    return { ...DEFAULT_THEME, ...(props.themeConfig as Partial<ThemeConfig>) };
  }
  return DEFAULT_THEME;
}

const calculateMetadata: CalculateMetadataFunction<ExplainerProps> = async ({
  props,
}) => {
  const cuts = props.cuts || [];
  if (cuts.length === 0) {
    return { durationInFrames: 30 * 60 };
  }
  const lastCut = cuts.reduce((a, b) =>
    (b.out_seconds ?? 0) > (a.out_seconds ?? 0) ? b : a
  );
  const lastEnd = lastCut.out_seconds ?? 0;
  // A cta_card is the composition's own terminal card — nothing fades
  // after it, so no padding is needed. Any other ending (fade_black into
  // nothing) keeps 1s of padding for that fade to actually land on screen.
  const padding = lastCut.type === "cta_card" ? 0 : 1;
  return { durationInFrames: Math.ceil((lastEnd + padding) * 30) };
};

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="Explainer"
        component={Explainer}
        durationInFrames={30 * 60}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          cuts: [],
          overlays: [],
          captions: [],
          audio: {},
        }}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="CinematicRenderer"
        component={CinematicRenderer}
        durationInFrames={30 * 30}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          scenes: [],
          titleFontSize: 78,
          titleWidth: 1320,
          signalLineCount: 18,
        }}
        calculateMetadata={calculateCinematicMetadata}
      />
      <Composition
        id="SignalFromTomorrowWithMusic"
        component={CinematicRenderer}
        durationInFrames={30 * 30}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={signalFromTomorrowWithMusicFixture}
        calculateMetadata={calculateCinematicMetadata}
      />
      <Composition
        id="TalkingHead"
        component={TalkingHead}
        durationInFrames={30 * 300}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          videoSrc: "",
          captions: [],
          overlays: [],
          wordsPerPage: 4,
          fontSize: 52,
          highlightColor: "#22D3EE",
          durationSeconds: 30,
        } as TalkingHeadProps}
        calculateMetadata={calculateTalkingHeadMetadata}
      />
      <Composition
        id="TitledVideo"
        component={TitledVideo}
        durationInFrames={30 * 60}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          videoSrc: "",
          tagline: "home is a verb.",
          taglineInSeconds: 53.5,
          taglineOutSeconds: undefined,
          topPx: 150,
          fontSize: 148,
          accentColor: "#F5C470",
        }}
        calculateMetadata={calculateTitledVideoMetadata}
      />
      <Composition
        id="HeroTitle"
        component={HeroTitle}
        durationInFrames={30 * 17}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          title: "THE CALIBRATORS",
          subtitle: "The People Who Define Reality",
        }}
      />
      <Composition
        id="ProductReveal"
        component={ProductReveal}
        durationInFrames={30 * 8}
        fps={30}
        width={1280}
        height={720}
        defaultProps={{
          productImage: "airnothing/product.png",
          productName: "AirNothing Pro Max Ultra",
          price: "Starting at $999",
          tagline: "Nothing included.",
          closer: "Less is nothing.",
          accentColor: "#00D4FF",
        } as ProductRevealProps}
      />
      <Composition
        id="ProductRevealVertical"
        component={ProductReveal}
        durationInFrames={30 * 8}
        fps={30}
        width={720}
        height={1280}
        defaultProps={{
          productImage: "airnothing/product.png",
          productName: "AirNothing Pro Max Ultra",
          price: "Starting at $999",
          tagline: "Nothing included.",
          closer: "Less is nothing.",
          accentColor: "#00D4FF",
        } as ProductRevealProps}
      />
      <Composition
        id="CaptionOverlayOnly"
        component={CaptionOverlay}
        durationInFrames={30 * 300}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          words: [] as WordCaption[],
          wordsPerPage: 3,
          fontSize: 58,
          highlightColor: "#FACC15",
          backgroundColor: "rgba(15, 23, 42, 0.75)",
        }}
      />
      <Composition
        id="CollageBurst"
        component={CollageBurst}
        durationInFrames={30 * 30}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          backgroundSrc: "",
          backgroundInSeconds: 0,
          curtainStartSeconds: 1.5,
          curtainEndSeconds: 3.0,
          clips: [],
        } as CollageBurstProps}
      />
      <Composition
        id="LyricOverlay"
        component={LyricOverlay}
        durationInFrames={30 * 28}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          videoSrc: "",
          lyrics: [],
          bottomY: 0.88,
        } as LyricOverlayProps}
      />
      <Composition
        id="SocialClip"
        component={SocialClip}
        durationInFrames={30 * 30}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          videoSrc: "",
          trimStartSeconds: 0,
          trimEndSeconds: 10,
          captionsFile: "",
          watermarkSrc: "",
          cropMode: "center",
        } as SocialClipProps}
        calculateMetadata={calculateSocialClipMetadata}
      />
      {/* Plantillas de referencia del canal Artilugio — video 002 (largo y
          shorts) ya está publicado; estas dos composiciones documentan la
          base técnica a reutilizar en próximos vídeos (qué es fijo del
          canal vs. qué cambia por vídeo). Ver
          src/fixtures/templates/artilugioLargoTemplate.ts y
          artilugioShortTemplate.ts — no son contenido para renderizar tal
          cual, son ejemplos comentados para copiar de ahí. */}
      <Composition
        id="Artilugio-Largo"
        component={Explainer}
        durationInFrames={30 * 60}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={artilugioLargoTemplate}
        calculateMetadata={calculateMetadata}
      />
      {/* Preview de Fase 8 (Montaje) del video 003 - "La columna de hierro
          de Delhi" - narracion sola por ahora, sfx/musica en curso. Quitar
          esta composicion una vez el video este renderizado y publicado,
          igual que se hizo con los preview de video001/002 (ver commit
          "chore(remotion): drop preview-only compositions from Root.tsx"). */}
      <Composition
        id="Artilugio-Largo-003"
        component={Explainer}
        durationInFrames={30 * 60}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={video003}
        calculateMetadata={calculateMetadata}
      />
      {/* Borrador de Fase 8 (Montaje) del video 004 - "La barca solar de
          Keops" - cuts + narracion + musica; SFX pendiente de una pasada
          posterior. Quitar esta composicion una vez el video este
          renderizado y publicado. */}
      <Composition
        id="Artilugio-Largo-004"
        component={Explainer}
        durationInFrames={30 * 60}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={video004}
        calculateMetadata={calculateMetadata}
      />
      {/* Borrador de Fase 8 (Montaje) del video 005 - "El disco de Nebra" -
          cuts + narracion + musica + sfx, primer corte. Planos 10b/35a
          arreglados (15 sept 2026): fondo Ref B -> diagrama HyperFrames
          propio del disco (plano-10b-diagrama-disco.mp4, geometria de Ref A,
          estilo AZUL_TECNICO/BRONCE_FORJADO del resto del video); 35a
          reutiliza la imagen 2 (Hook) en su lugar, list_reveal anadido.
          Pendiente de aprobacion de Victor antes de re-renderizar. Quitar
          esta composicion una vez el video este renderizado y publicado. */}
      <Composition
        id="Artilugio-Largo-005"
        component={Explainer}
        durationInFrames={30 * 60}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={video005Fixture}
        calculateMetadata={calculateMetadata}
      />
      {/* Borrador de Fase 8 (Montaje) del video 006 - "Ulfberht: la espada
          vikinga que no era vikinga" - cuts + narracion + musica + sfx,
          primer corte generado por Claude. Pendiente de aprobacion de
          Victor. Quitar esta composicion una vez el video este renderizado
          y publicado. */}
      <Composition
        id="Artilugio-Largo-006"
        component={Explainer}
        durationInFrames={30 * 60}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={video006Fixture}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="Artilugio-short"
        component={Explainer}
        durationInFrames={30 * 30}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={artilugioShortTemplate}
        calculateMetadata={calculateMetadata}
      />
      {/* Preview de los 4 shorts del video 003 (sistema v2, ver
          10-Redes Sociales/003 - Shorts de la columna de hierro de Delhi.md
          y skills/meta/social-shorts-strategy.md). Primer corte para
          revisar en Remotion Studio — pendiente de aprobación de Víctor
          antes de renderizar. Quitar estas 4 composiciones una vez
          aprobadas y publicadas, igual que se hizo con los preview de
          video001/002. */}
      <Composition
        id="Artilugio-short-003-1-hook"
        component={Explainer}
        durationInFrames={Math.ceil(35.108563 * 30)}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={video003Short1}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="Artilugio-short-003-2-mecanismo"
        component={Explainer}
        durationInFrames={Math.ceil(39.653875 * 30)}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={video003Short2}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="Artilugio-short-003-3-climax"
        component={Explainer}
        durationInFrames={Math.ceil(31.8955 * 30)}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={video003Short3}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="Artilugio-short-003-4-revelacion"
        component={Explainer}
        durationInFrames={Math.ceil(42.057125 * 30)}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={video003Short4}
        calculateMetadata={calculateMetadata}
      />
      {/* Preview de los 4 shorts del video 004 (sistema v2, ver
          10-Redes Sociales/004 - Shorts de la barca solar de Keops.md).
          Locuciones clasificadas y primer corte montado el 6 sept 2026.
          Primer corte para revisar en Remotion Studio -- pendiente de
          aprobacion de Victor antes de renderizar. Quitar estas 4
          composiciones una vez aprobadas y publicadas. */}
      <Composition
        id="Artilugio-short-004-1-hook"
        component={Explainer}
        durationInFrames={Math.ceil(46.759125 * 30)}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={video004Short1}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="Artilugio-short-004-2-mecanismo"
        component={Explainer}
        durationInFrames={Math.ceil(30.693875 * 30)}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={video004Short2}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="Artilugio-short-004-3-climax"
        component={Explainer}
        durationInFrames={Math.ceil(43.128125 * 30)}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={video004Short3}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="Artilugio-short-004-4-revelacion"
        component={Explainer}
        durationInFrames={Math.ceil(51.565714 * 30)}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={video004Short4}
        calculateMetadata={calculateMetadata}
      />
      {/* Preview de los 6 shorts del video 005 (ver 10-Redes Sociales/005 -
          Shorts del disco de Nebra.md). Primer corte montado el 21 sept 2026
          para revisar en Remotion Studio -- pendiente de aprobacion de
          Victor antes de renderizar. Quitar estas composiciones una vez
          aprobadas y publicadas. */}
      <Composition
        id="Artilugio-short-005-1-rescate"
        component={Explainer}
        durationInFrames={Math.ceil(47.595063 * 30)}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={video005Short1}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="Artilugio-short-005-2-prueba"
        component={Explainer}
        durationInFrames={Math.ceil(37.799125 * 30)}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={video005Short2}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="Artilugio-short-005-3-tesoro"
        component={Explainer}
        durationInFrames={Math.ceil(40.280816 * 30)}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={video005Short3}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="Artilugio-short-005-4-cambio"
        component={Explainer}
        durationInFrames={Math.ceil(40.672625 * 30)}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={video005Short4}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="Artilugio-short-005-5-oro"
        component={Explainer}
        durationInFrames={Math.ceil(39.053063 * 30)}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={video005Short5}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="Artilugio-short-005-6-significado"
        component={Explainer}
        durationInFrames={Math.ceil(53.524875 * 30)}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={video005Short6}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="EndTag"
        component={EndTag}
        // 5.5s at 30fps = 165 frames. Render CLI can override via --props.
        durationInFrames={165}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          text: "THE CITY KEEPS ITS OWN VIGIL.",
          palette: "cool_offwhite_on_black",
          fadeInSeconds: 0.6,
          holdSeconds: 4.3,
          fadeOutSeconds: 0.6,
        } as EndTagProps}
      />
      <Composition
        id="EndTagOverlay"
        component={EndTag}
        // 8.19s at 30fps = 246 frames. Render CLI can override via --props.
        // Intended to be composited on top of body footage, not concat'd.
        durationInFrames={246}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          text: "EARN THE LIGHT.",
          palette: "cool_offwhite_on_black",
          fadeInSeconds: 1.0,
          holdSeconds: 5.69,
          fadeOutSeconds: 1.5,
          overlay: true,
        } as EndTagProps}
      />
    </>
  );
};
