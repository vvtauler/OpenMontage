import { ExplainerProps } from "../../Explainer";

// ---------------------------------------------------------------------------
// ARTILUGIO_SHORT — plantilla de referencia para los shorts verticales
// (9:16, TikTok/Reels/YouTube Shorts) del canal Artilugio.
//
// Extraída de los 5 shorts de video002 (Short002-01..05) — YA PUBLICADOS
// tal cual esta forma. NO es contenido para renderizar: es la referencia
// técnica de qué partes son la base fija de TODO short del canal y cuáles
// cambian en cada short nuevo. Composición correspondiente en Root.tsx:
// "Artilugio_short". Los 5 fixtures reales completos viven en
// ../video002-shorts.ts — cópialos de ahí, no de aquí, para reutilizar
// contenido real.
//
// FIJO en todo short del canal (misma base para los 5, ver decisión al
// reconciliar el vídeo 002 — la base es igual, solo cambian elementos y
// audio):
//   - watermarkSrc: siempre el isotipo del canal.
//   - brandBackground: true SIEMPRE, aunque en un short concreto no llegue
//     a notarse (cuts a "cover" sin huecos) — mantiene la misma estructura
//     en los 5.
//   - themeConfig: mismos captionHighlightColor/captionBackgroundColor/
//     captionFontSize en los 5 — es la identidad de marca del canal, no
//     una elección por short.
//   - Último cut siempre type: "cta_card" (texto + audio propio de cierre,
//     nunca la duración fija de SocialClip's DEFAULT_CTA_TEXT — cada short
//     puede tener su propio texto/CTA).
//   - transition_in del primer cut siempre "cut" (nunca "fade_black" como
//     el vídeo largo) — un short tiene que enganchar desde el frame 0.
//   - animation nunca "static" — a diferencia del vídeo largo, un short no
//     puede tener una imagen quieta en ningún momento.
//
// VARÍA en cada short nuevo (esto de aquí son solo ejemplos del short 1):
//   - cuts: qué tramo del vídeo largo se reutiliza (mismas fuentes/
//     timestamps que su equivalente en video00X.ts), y el framing
//     (transform.position/zoomOrigin) si el encuadre por defecto no centra
//     bien al sujeto.
//   - overlays: monumental_title / list_reveal, SOLO si el contenido del
//     short lo pide — no es parte de la base común, no hay que forzarlos
//     en todos los shorts.
//   - captions: transcripción real (faster-whisper) del audio de ESE short.
//   - audio.narration/music: los ficheros recortados para ese short.
// ---------------------------------------------------------------------------
export const artilugioShortTemplate: ExplainerProps = {
  cuts: [
    {
      id: "example-1",
      source: "video00X/images/1a.png",
      in_seconds: 0.0,
      out_seconds: 11.3667,
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "drift-up",
      // Ejemplo de reencuadre — solo cuando el punto de interés no coincide
      // con el centro de la imagen fuente.
      // transform: { position: "20% 50%" },
    },
    {
      id: "example-2",
      source: "video00X/images/1b.png",
      in_seconds: 11.3667,
      out_seconds: 18.1667,
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "fade_black", // cierra el metraje, antes del CTA
      transition_duration: 0.5,
      animation: "zoom-in",
      // Sin esto, el fundido final revela el fondo azul fijo de
      // ImageScene en vez del fondo del CTA ya montado detrás.
      backgroundColor: "transparent",
    },
    {
      id: "cta",
      source: "", // no usado — cta_card no pasa por ImageScene/VideoScene
      type: "cta_card",
      in_seconds: 18.1667,
      out_seconds: 18.1667 + 2.5, // CTA_DURATION_SECONDS
      text: "Síguenos para más",
      audioSrc: "video00X/shorts-audio/shortN-cta.mp3",
      audioStartSeconds: 0.5,
      audioVolume: 1.0,
    },
  ],
  // Solo si el contenido del short lo pide — ver nota arriba.
  overlays: [],
  watermarkSrc: "social-clips/source/logo-isotipo-full.png",
  brandBackground: true,
  themeConfig: {
    captionHighlightColor: "#D49A46", // Cobre Cálido
    captionBackgroundColor: "rgba(14, 14, 17, 0.78)", // Acero/Hierro
    captionFontSize: 54,
  },
  // Transcripción real (faster-whisper) del audio de ese short concreto.
  captions: [],
  audio: {
    narration: { src: "video00X/shorts-audio/shortN-hook.mp3", volume: 1.0 },
    music: { src: "video00X/shorts-audio/shortN-music.mp3", volume: 1.0 },
  },
};
