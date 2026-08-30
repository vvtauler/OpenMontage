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
import { useCallback, useEffect, useState } from "react";
import { resolveAsset } from "../lib/resolveAsset";
import { CaptionOverlay, WordCaption } from "./CaptionOverlay";
import { Watermark } from "./Watermark";
import { CtaCard, DEFAULT_CTA_TEXT, CTA_DURATION_SECONDS } from "./ArtilugioCta";
import { scale } from "@remotion/effects/scale";

export type SocialClipCropMode = "center" | "fit-width-blur-bg";

export type SocialClipBackgroundAnimation =
  | "ken-burns"
  | "zoom-in"
  | "zoom-out"
  | "pan-left"
  | "pan-right"
  | "drift-up";

export interface SocialClipBackgroundCut {
  /** Absolute filesystem path (or staticFile-relative path) to the image/video used as ambient VFX behind the foreground crop. */
  source: string;
  /**
   * In/out point in seconds on the SAME timeline as `trimStartSeconds`/`trimEndSeconds`
   * (the long video's timeline) — this is what keeps the background in sync with
   * whatever is on screen in the long video during this exact audio range, instead
   * of an unrelated brand backdrop.
   */
  inSeconds: number;
  outSeconds: number;
  /** Ken Burns direction; defaults to a gentle zoom + diagonal drift. */
  animation?: SocialClipBackgroundAnimation;
}

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
  /**
   * VFX de fondo: recorte de imágenes/vídeo del vídeo largo que ocupan el
   * mismo rango temporal que este short, mostrado en ken-burns detrás del
   * vídeo recortado. Sustituye al fondo de marca estático mientras dura su
   * rango — nunca puede quedar una imagen fija en pantalla.
   */
  backgroundCuts?: SocialClipBackgroundCut[];
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

const BACKGROUND_VIDEO_EXTENSIONS = [".mp4", ".mov", ".webm", ".avi", ".mkv"];

function isBackgroundVideoSource(source: string): boolean {
  const lower = source.toLowerCase();
  return BACKGROUND_VIDEO_EXTENSIONS.some((ext) => lower.endsWith(ext));
}

/**
 * Deriva scale/translate por frame para que el fondo nunca quede como
 * imagen fija — mismo vocabulario de animación que `Explainer.tsx` (Ken
 * Burns, pan, zoom), pero con overscan propio (parte ya en 1.14x) porque
 * aquí el fondo va desenfocado y objectFit="cover" en un lienzo 9:16 a
 * partir de una fuente 16:9.
 */
function backgroundKenBurnsTransform(
  progress: number,
  animation: SocialClipBackgroundAnimation
): { scale: number; xPercent: number; yPercent: number } {
  const BASE_SCALE = 1.14;
  switch (animation) {
    case "zoom-in":
      return { scale: BASE_SCALE + progress * 0.16, xPercent: 0, yPercent: 0 };
    case "zoom-out":
      return { scale: BASE_SCALE + 0.16 - progress * 0.16, xPercent: 0, yPercent: 0 };
    case "pan-left":
      return { scale: BASE_SCALE + 0.06, xPercent: interpolate(progress, [0, 1], [2.5, -2.5]), yPercent: 0 };
    case "pan-right":
      return { scale: BASE_SCALE + 0.06, xPercent: interpolate(progress, [0, 1], [-2.5, 2.5]), yPercent: 0 };
    case "drift-up":
      return {
        scale: BASE_SCALE + progress * 0.08,
        xPercent: 0,
        yPercent: interpolate(progress, [0, 1], [2.5, -2.5]),
      };
    case "ken-burns":
    default:
      return {
        scale: BASE_SCALE + progress * 0.12,
        xPercent: interpolate(progress, [0, 1], [0, -2.5]),
        yPercent: interpolate(progress, [0, 1], [0, -1.5]),
      };
  }
}

/**
 * Capa de fondo desenfocada con Ken Burns continuo — nunca opacity 0 ni
 * fundido a negro al entrar: arranca visible desde el frame 0 de su propio
 * Sequence, con el desplazamiento ya en marcha. Sirve tanto para el fondo
 * de marca persistente como para cada `backgroundCut` de VFX.
 */
const KenBurnsBackdrop: React.FC<{
  src: string;
  animation?: SocialClipBackgroundAnimation;
  durationInFrames: number;
  sourceInSeconds?: number;
}> = ({ src, animation = "ken-burns", durationInFrames, sourceInSeconds = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = interpolate(frame, [0, Math.max(1, durationInFrames)], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const { scale: bgScale, xPercent, yPercent } = backgroundKenBurnsTransform(progress, animation);
  const style: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "blur(46px) brightness(0.42) saturate(1.15)",
    transform: `scale(${bgScale}) translate(${xPercent}%, ${yPercent}%)`,
    zIndex: 0,
  };

  if (isBackgroundVideoSource(src)) {
    return (
      <Video
        src={resolveAsset(src)}
        trimBefore={Math.round(sourceInSeconds * fps)}
        durationInFrames={durationInFrames}
        muted
        objectFit="cover"
        style={style}
      />
    );
  }

  return <CanvasImage src={resolveAsset(src)} style={style} />;
};

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

export const SocialClip: React.FC<SocialClipProps> = ({
  videoSrc,
  trimStartSeconds,
  trimEndSeconds,
  captionsFile,
  watermarkSrc,
  cropMode,
  ctaText = DEFAULT_CTA_TEXT,
  videoScale = 0.7,
  backgroundCuts = [],
}) => {
  const { fps, durationInFrames: compositionDurationInFrames } = useVideoConfig();
  const words = useWordCaptions(captionsFile);
  const trimBeforeFrames = Math.round(trimStartSeconds * fps);
  const durationInFrames = Math.round((trimEndSeconds - trimStartSeconds) * fps);
  const ctaDurationFrames = Math.round(CTA_DURATION_SECONDS * fps);
  const resolvedSrc = resolveAsset(videoSrc);

  // Guard against an unset/empty videoSrc (e.g. this composition's raw
  // defaultProps, before real props are loaded in the Studio): mounting
  // <Video src=""> throws a MediaPlaybackError that takes down the whole
  // Studio preview, hiding the composition list behind it — not just this
  // one clip. Bail out to a blank frame instead of ever reaching <Video>.
  if (!videoSrc) {
    return <AbsoluteFill style={{ backgroundColor: "#0E0E11" }} />;
  }

  return (
    <AbsoluteFill style={{ backgroundColor: "#0E0E11" }}>
      {/* Fondo de marca — persistente durante todo el clip (vídeo + cierre),
          con Ken Burns continuo propio: nunca puede quedar como una imagen
          fija en pantalla, ni siquiera bajo la tarjeta de cierre. Los
          `backgroundCuts` (más abajo) lo tapan mientras dura el metraje. */}
      <KenBurnsBackdrop
        src="social-clips/source/fondo-limpio.jpg"
        animation="ken-burns"
        durationInFrames={compositionDurationInFrames}
      />
      {/* VFX de fondo — mismo tramo de imágenes/vídeo que aparece en el vídeo
          largo durante este mismo rango de audio, en ken-burns, para que el
          margen alrededor del recorte central nunca sea un fondo de marca
          inerte y desconectado de lo que se está narrando. Arranca visible
          desde su propio frame 0 (sin fundido a negro). */}
      {backgroundCuts.map((cut, index) => {
        const cutStartFrame = Math.round((cut.inSeconds - trimStartSeconds) * fps);
        const cutEndFrame = Math.min(
          durationInFrames,
          Math.round((cut.outSeconds - trimStartSeconds) * fps)
        );
        const cutDurationFrames = cutEndFrame - Math.max(0, cutStartFrame);
        if (cutDurationFrames <= 0 || cutStartFrame >= durationInFrames) return null;
        return (
          <Sequence
            key={`${cut.source}-${index}`}
            from={Math.max(0, cutStartFrame)}
            durationInFrames={cutDurationFrames}
            layout="none"
          >
            <KenBurnsBackdrop
              src={cut.source}
              animation={cut.animation}
              durationInFrames={cutDurationFrames}
              sourceInSeconds={Math.max(0, trimStartSeconds - cut.inSeconds)}
            />
          </Sequence>
        );
      })}
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
