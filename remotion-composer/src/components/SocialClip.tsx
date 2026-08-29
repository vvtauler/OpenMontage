import {
  AbsoluteFill,
  CanvasImage,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
  useDelayRender,
  useVideoConfig,
} from "remotion";
import { Video } from "@remotion/media";
import { useCallback, useEffect, useMemo, useState } from "react";
import { resolveAsset } from "../lib/resolveAsset";
import { CaptionOverlay, WordCaption } from "./CaptionOverlay";
import { scale } from "@remotion/effects/scale";
import { loadFont as loadCinzel } from "@remotion/google-fonts/Cinzel";
import { loadFont as loadMontserrat } from "@remotion/google-fonts/Montserrat";

const { fontFamily: cinzelFontFamily } = loadCinzel("normal", {
  weights: ["600"],
});
const { fontFamily: montserratFontFamily } = loadMontserrat("normal", {
  weights: ["600"],
});

export type SocialClipCropMode = "center" | "fit-width-blur-bg";

export interface SocialClipProps {
  /** Absolute filesystem path (or staticFile-relative path) to the source master video. */
  videoSrc: string;
  /** In-point in the source video, in seconds. */
  trimStartSeconds: number;
  /** Out-point in the source video, in seconds. */
  trimEndSeconds: number;
  /** Path (relative to public/) of a WordCaption[] JSON file, already shifted to start at clip time 0. */
  captionsFile: string;
  /** Absolute filesystem path (or staticFile-relative path) to the brand watermark PNG. */
  watermarkSrc: string;
  /**
   * "center": crop a vertical 9:16 slice from the horizontal center of the 16:9 source.
   * "fit-width-blur-bg": show the full 16:9 frame width-fit (nothing cropped), letterboxed
   * top/bottom with a blurred, darkened copy of the same footage as background filler —
   * use this when on-screen content (labels, diagram elements) moves across the full frame
   * width over the clip's duration, so a fixed center crop would clip content at some point.
   */
  cropMode: SocialClipCropMode;
  /** Closing CTA card text, shown for CTA_DURATION_SECONDS after the trimmed footage. */
  ctaText?: string;
  /**
   * Zoom aplicado al vídeo en modo "center" (por clip, no compartido — cada
   * composición pasa el suyo en Root.tsx en vez de un valor fijo global,
   * porque el punto de zoom que hace falta para que el sujeto quede
   * centrado varía de un plano a otro).
   */
  videoScale?: number;
}

// 4 líneas explícitas, la 3ª en blanco a propósito (espaciado entre
// "YouTube" y la instrucción final).
const DEFAULT_CTA_TEXT = "Vídeo completo en\nYouTube\n\nenlace en la bio";
const CTA_DURATION_SECONDS = 2.5;

/**
 * Mide el ancho real (en px) de un texto con una fuente/peso concretos a un
 * tamaño de referencia, usando canvas — evita adivinar métricas a ojo.
 */
function measureTextWidth(
  text: string,
  fontWeight: number,
  fontFamily: string,
  referenceFontSize = 100
): number {
  if (typeof document === "undefined") return 0;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return 0;
  ctx.font = `${fontWeight} ${referenceFontSize}px ${fontFamily}`;
  return ctx.measureText(text).width;
}

/**
 * Calcula el fontSize necesario para que `text` ocupe exactamente
 * `targetWidthPx`, midiendo con la fuente real ya cargada (en vez de
 * estirar el texto con textLength/letter-spacing, que deforma el tipo).
 * `letterSpacingEm` se suma como espacio extra entre caracteres si el
 * elemento también lleva letter-spacing en su CSS, para que el cálculo siga
 * siendo exacto.
 */
function useFittedFontSize(
  text: string,
  fontFamily: string,
  fontWeight: number,
  targetWidthPx: number,
  letterSpacingEm = 0
): number {
  return useMemo(() => {
    const ref = 100;
    const measured = measureTextWidth(text, fontWeight, fontFamily, ref);
    const naturalRatio = measured > 0 ? measured / ref : text.length * 0.55; // fallback si no hay canvas
    const gaps = Math.max(0, text.length - 1);
    const denom = naturalRatio + gaps * letterSpacingEm;
    return denom > 0 ? targetWidthPx / denom : ref;
  }, [text, fontFamily, fontWeight, targetWidthPx, letterSpacingEm]);
}

const CANVAS_WIDTH = 1080;
const CANVAS_HEIGHT = 1920;

// Zonas seguras de plataforma (TikTok/Reels cubren estas áreas con su propia UI:
// barra de estado arriba, usuario/caption/iconos de interacción abajo y a la derecha).
// Logo y subtítulos deben respetar también los laterales, no solo arriba/abajo —
// el vídeo de fondo puede ir a sangre, pero cualquier elemento gráfico (logo,
// subtítulos, texto en pantalla) no debería tocar el borde.
const SAFE_MARGIN_TOP = 250; // ~13% de 1920 — evita la barra de estado/usuario
const SAFE_MARGIN_BOTTOM = 320; // ~17% de 1920 — evita caption/usuario nativos de la plataforma
const SAFE_MARGIN_SIDE = 64; // ~6% de 1080 a cada lado

const WATERMARK_WIDTH = CANVAS_WIDTH * 0.11 * 1.23 * 2; // tamaño base x ajuste manual x2
const WATERMARK_MARGIN = 283; // 40 (margen top) + 243 (bajado a mano en Studio, zona segura)
const WATERMARK_OPACITY = 1;

function useWordCaptions(captionsFile: string): WordCaption[] | null {
  const [words, setWords] = useState<WordCaption[] | null>(null);
  const { delayRender, continueRender, cancelRender } = useDelayRender();
  const [handle] = useState(() => delayRender(`Loading captions: ${captionsFile}`));

  const load = useCallback(async () => {
    try {
      const response = await fetch(staticFile(captionsFile));
      const data = (await response.json()) as WordCaption[];
      setWords(data);
      continueRender(handle);
    } catch (e) {
      cancelRender(e as Error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [captionsFile, handle]);

  useEffect(() => {
    load();
  }, [load]);

  return words;
}

const Watermark: React.FC<{ src: string }> = ({ src }) => (
  <CanvasImage
    src={resolveAsset(src)}
    style={{
      position: "absolute",
      top: WATERMARK_MARGIN,
      left: "50%",
      transform: "translateX(-50%)",
      width: WATERMARK_WIDTH,
      height: "auto",
      opacity: WATERMARK_OPACITY,
      zIndex: 3,
      translate: "0px -146px"
    }}
    from={-22} />
);

const ARTILUGIO_MARK = "ARTILUGIO";
const ARTILUGIO_LETTER_SPACING_EM = 0.22;
const ARTILUGIO_TARGET_WIDTH = CANVAS_WIDTH * 0.8; // 80% del ancho de pantalla

const CTA_TARGET_WIDTH = CANVAS_WIDTH * 0.75; // 75% del ancho, medido por la línea más larga

/** Wordmark "ARTILUGIO", elemento independiente, justo debajo del isotipo. */
const ArtilugioMark: React.FC = () => {
  const fontSize = useFittedFontSize(
    ARTILUGIO_MARK,
    cinzelFontFamily,
    600,
    ARTILUGIO_TARGET_WIDTH,
    ARTILUGIO_LETTER_SPACING_EM
  );

  return (
    <div
      style={{
        fontFamily: cinzelFontFamily,
        fontWeight: 600,
        fontSize,
        letterSpacing: `${ARTILUGIO_LETTER_SPACING_EM}em`,
        color: "#E2E8F0", // Blanco Acero
        textShadow: "0 2px 16px rgba(0,0,0,0.7)",
        whiteSpace: "nowrap",
      }}
    >
      {ARTILUGIO_MARK}
    </div>
  );
};

/** CTA, elemento independiente: N líneas explícitas (separadas por \n en el
 * texto), todas al mismo fontSize — el que hace que la línea más larga
 * ocupe exactamente CTA_TARGET_WIDTH. Una línea vacía solo aporta el hueco
 * vertical de una línea, sin texto. */
const CtaText: React.FC<{ text: string }> = ({ text }) => {
  const lines = text.split("\n");
  const longestLine = lines.reduce((a, b) => (b.length > a.length ? b : a), "");
  const fontSize = useFittedFontSize(
    longestLine,
    montserratFontFamily,
    600,
    CTA_TARGET_WIDTH
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {lines.map((line, i) => (
        <div
          key={i}
          style={{
            fontFamily: montserratFontFamily,
            fontWeight: 600,
            fontSize,
            lineHeight: 1.35,
            color: "#C87A38", // Bronce Forjado
            textAlign: "center",
            whiteSpace: "nowrap",
            textShadow: line ? "0 2px 10px rgba(0,0,0,0.7)" : undefined,
          }}
        >
          {line || " " /* línea en blanco: solo el hueco vertical */}
        </div>
      ))}
    </div>
  );
};

const CtaCard: React.FC<{ text: string }> = ({ text }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = interpolate(frame, [0, Math.round(0.4 * fps)], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ zIndex: 4 }}>
      {/* ARTILUGIO — justo debajo del isotipo, posición fija */}
      <div
        style={{
          opacity,
          position: "absolute",
          top: 460, // justo debajo del isotipo (misma zona segura que los subtítulos)
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <ArtilugioMark />
      </div>
      {/* CTA — elemento independiente, centrado en toda la pantalla */}
      <AbsoluteFill style={{ opacity, justifyContent: "center", alignItems: "center" }}>
        <CtaText text={text} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const SocialClip: React.FC<SocialClipProps> = ({
  videoSrc,
  trimStartSeconds,
  trimEndSeconds,
  captionsFile,
  watermarkSrc,
  cropMode,
  ctaText = DEFAULT_CTA_TEXT,
  videoScale = 0.7,
}) => {
  const { fps } = useVideoConfig();
  const words = useWordCaptions(captionsFile);
  const trimBeforeFrames = Math.round(trimStartSeconds * fps);
  const durationInFrames = Math.round((trimEndSeconds - trimStartSeconds) * fps);
  const ctaDurationFrames = Math.round(CTA_DURATION_SECONDS * fps);
  const resolvedSrc = resolveAsset(videoSrc);

  return (
    <AbsoluteFill style={{ backgroundColor: "#0E0E11" }}>
      {/* Fondo de marca y logo — persistentes durante todo el clip (vídeo +
          cierre), no solo durante el metraje. Debajo del vídeo se tapan;
          en la tarjeta de cierre quedan visibles como base de esa pantalla,
          así el cierre no rompe con lo que se ha visto hasta ese momento. */}
      <CanvasImage
        src={resolveAsset("social-clips/source/fondo-limpio.jpg")}
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          height: "100%",
          width: "auto",

          // explícito: por si algún efecto de vídeo crea su propio stacking context
          zIndex: 0,

          translate: "1px 0px"
        }}
        from={-11} />
      <Watermark src={watermarkSrc} />
      <Sequence durationInFrames={durationInFrames} layout="none" from={-2}>
      {cropMode === "center" ? (
        // 16:9 source inside a 9:16 box with objectFit="cover" scales up until both
        // dimensions are filled, cropping the excess off the left/right edges —
        // exactly a horizontal center-crop, no manual crop math needed.
        (<Video
        src={resolvedSrc}
        trimBefore={trimBeforeFrames}
        durationInFrames={durationInFrames}
        objectFit="cover"
        style={{
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
        effects={[scale({
          scale: videoScale
        })]}
        from={2} />)
      ) : (
        <>
          {/* Blurred, darkened full-bleed background (objectFit="cover" crops it,
              but that doesn't matter here — it's just filler behind the foreground). */}
          <Video
            src={resolvedSrc}
            trimBefore={trimBeforeFrames}
            durationInFrames={durationInFrames}
            objectFit="cover"
            style={{
              width: "100%",
              height: "100%",
              filter: "blur(60px) brightness(0.45) saturate(1.15)",
              transform: "scale(1.15)", // avoid blur revealing edge artifacts
              zIndex: 1,
            }} />
          {/* objectFit="contain" shows the full, uncropped 16:9 frame letterboxed
              inside the 9:16 canvas — guarantees no diagram content is ever clipped,
              regardless of where it sits in frame. */}
          <Video
            src={resolvedSrc}
            trimBefore={trimBeforeFrames}
            durationInFrames={durationInFrames}
            objectFit="contain"
            style={{
              width: "100%",
              height: "100%",
              filter: "drop-shadow(0 0 40px rgba(0,0,0,0.6))",
              zIndex: 2,
            }}
          />
        </>
      )}
      {words ? (
        // Envuelto con z-index explícito: las capas de vídeo de arriba llevan
        // zIndex 1/2, y sin esto los subtítulos (sin z-index propio) quedaban
        // tapados por el vídeo aunque estuvieran después en el DOM — un
        // elemento posicionado con z-index siempre pinta por encima de un
        // hermano sin z-index, sin importar el orden.
        (<AbsoluteFill style={{ zIndex: 3 }}>
          <CaptionOverlay
            words={words}
            wordsPerPage={5}
            fontSize={54}
            highlightColor="#D49A46"
            color="#E2E8F0"
            backgroundColor="rgba(14, 14, 17, 0.78)"
            fontFamily="Inter, Montserrat, system-ui, sans-serif"
            position="bottom"
          />
        </AbsoluteFill>)
      ) : null}
      </Sequence>
      {/* Cierre/CTA — tarjeta final tras el metraje recortado. Fondo y logo
          (arriba) siguen en pantalla; aquí solo se añade el texto, con la
          identidad de marca: Cinzel/bronce para "ARTILUGIO", Inter/blanco
          acero para la llamada a la acción — mismo lenguaje tipográfico
          que el manual de identidad visual (Cinzel = histórico/monumental,
          sans técnica = tecnología/precisión). */}
      <Sequence from={durationInFrames} durationInFrames={ctaDurationFrames} layout="none">
        <CtaCard text={ctaText} />
      </Sequence>
    </AbsoluteFill>
  );
};

export function calculateSocialClipMetadata({
  props,
}: {
  props: SocialClipProps;
}) {
  const fps = 30;
  const clipFrames = Math.max(
    1,
    Math.round((props.trimEndSeconds - props.trimStartSeconds) * fps)
  );
  const ctaFrames = Math.round(CTA_DURATION_SECONDS * fps);
  return { durationInFrames: clipFrames + ctaFrames, fps, width: CANVAS_WIDTH, height: CANVAS_HEIGHT };
}
