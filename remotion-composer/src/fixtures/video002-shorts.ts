import { ExplainerProps } from "../Explainer";

// Shorts del vídeo 002 — "El arco compuesto que convirtió a los mongoles en un
// imperio". Fuente: guion técnico "10-Redes Sociales/002 - Shorts del arco
// mongol.md" (bóveda Obsidian, proyecto YouTube_Faceless). Criterio de esa
// nota: CERO generación nueva — solo montaje sobre narración, imágenes y
// motion graphics YA aprobados para el vídeo largo (mismos archivos que usa
// props/video002.json). Los recortes de audio (narration-final.mp3) se
// hicieron encajando los timestamps del guion sobre los silencios reales
// detectados con ffmpeg silencedetect, no a ciegas — pero siguen siendo un
// primer corte para revisar en Remotion Studio, no el corte final.

// ---------------------------------------------------------------------------
// Short 1 — Hook completo ("el arco de Gengis Kan" que no existía)
// Audio: narration-final [0.00–27.974] (bloque Hook completo, sin recortar).
// Visual: mismos cuts 1a/1b que abren el vídeo largo (0.00–28.92).
// ---------------------------------------------------------------------------
export const short1HookFixture: ExplainerProps = {
  cuts: [
    {
      id: "1a",
      source: "video002/images/1a.png",
      in_seconds: 0.0,
      out_seconds: 11.3667, // frame 341 a 30fps
      source_in_seconds: 0,
      // "cut", no "fade_black": un short debe enganchar desde el frame 0,
      // no abrir con un fundido desde negro como el vídeo largo.
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "drift-up",
    },
    {
      id: "1b",
      source: "video002/images/1b.png",
      in_seconds: 11.3667, // continúa justo donde termina 1a, sin hueco
      out_seconds: 18.1667, // frame 545 a 30fps
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "cut", // ya no es el último corte — sigue directo a 19b
      transition_duration: 0.5,
      animation: "zoom-in",
      // Encuadre para que el jinete quede centrado: la imagen (1376x768) es
      // más ancha que el recorte vertical, y el jinete está a la izquierda
      // del centro real de la imagen — sin esto, el corte por defecto
      // (centrado en la imagen, no en el personaje) lo dejaba pegado al
      // borde izquierdo.
      transform: { position: "20% 50%" },
    },
    {
      id: "19b",
      source: "video002/images/19b.png",
      in_seconds: 18.1667, // continúa justo donde termina 1b, sin hueco
      out_seconds: 28.248, // frame 847 a 30fps — final real del audio (frase completa + silencio final)
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "fade_black", // cierra el metraje, antes del CTA
      transition_duration: 0.5,
      animation: "zoom-in", // el vídeo largo usa "static" aquí, pero un short no puede tener una imagen quieta
      // Los dos arcos en contraste (mismo par que en el vídeo largo) —
      // encuadre calculado sobre el bounding box real del arco compacto
      // (izquierda, x 390-533 de 1376) para que quede centrado y el arco
      // ornamentado de la derecha (x 754-1015) quede totalmente fuera.
      // zoomOrigin abajo: el zoom-in crece desde el borde inferior en vez
      // del centro, así la base del arco queda fija contra el borde
      // inferior del vídeo en vez de alejarse al zoomar.
      transform: { position: "26% 50%", zoomOrigin: "50% 100%" },
      // Sin esto, el fundido final revela el fondo azul fijo de ImageScene
      // (#0F172A) en vez del fondo del CTA que ya está montado detrás.
      backgroundColor: "transparent",
    },
    {
      id: "cta",
      source: "", // no usado — cta_card no pasa por ImageScene/VideoScene
      type: "cta_card",
      in_seconds: 28.248, // arranca justo donde termina 19b (y el audio)
      out_seconds: 28.248 + 2.5, // CTA_DURATION_SECONDS, igual que en SocialClip/vídeo 001
      text: "Síguenos para más",
      // Narración encontrada en la bóveda Obsidian, carpeta "Sin clasificar"
      // (mismo texto exacto que el CTA — verificado transcribiendo el
      // archivo). Copiada a public/video002/shorts-audio/short1-cta.mp3.
      audioSrc: "video002/shorts-audio/short1-cta.mp3",
      audioStartSeconds: 0.5, // medio segundo de margen antes de que arranque la voz
      // Pico medido -4.1dBFS -> x1.4289 para dejarlo en -1dBFS.
      audioVolume: 1.4289,
    },
  ],
  overlays: [
    {
      type: "monumental_title",
      in_seconds: 0,
      out_seconds: 2.9333, // frame 88 a 30fps
      position: "center",
      text: "Naadam",
      subtitle: "Mongolia",
    },
    {
      type: "monumental_title",
      in_seconds: 11.3667, // arranca con el corte 1b
      out_seconds: 16.3667, // 5s, igual que el resto de rótulos
      position: "bottom-center", // tercio inferior
      widthRatio: 0.8,
      background: false, // imagen ya oscura — el halo no aporta nada
      text: "Gengis Kan",
    },
  ],
  // Isotipo del canal + subtítulos con el mismo tratamiento de marca que los
  // shorts del vídeo 1 (mismo logo/tamaño que SocialClip.tsx vía el
  // componente Watermark compartido; mismo bronce/acero y tamaño de
  // subtítulo que su CaptionOverlay, aquí vía themeConfig).
  watermarkSrc: "social-clips/source/logo-isotipo-full.png",
  // brandBackground: fondo fijo de marca, capa persistente detrás de todo el
  // short — parte de la base común a los 5 shorts (ver nota en short2), se
  // active o no tape realmente algo (aquí los cuts van a "cover", sin
  // huecos, así que no se llega a ver, pero mantiene la misma estructura).
  brandBackground: true,
  themeConfig: {
    captionHighlightColor: "#D49A46", // Cobre Cálido
    captionBackgroundColor: "rgba(14, 14, 17, 0.78)", // Acero/Hierro
    captionFontSize: 54,
  },
  // Transcrito con faster-whisper (modelo small, es) sobre el propio
  // short1-hook.mp3 — mismo método que el guion técnico del vídeo largo.
  // Corrección manual: Whisper oyó "Genghis Khan" (grafía inglesa); el guion
  // aprobado usa "Gengis Kan".
  captions: [
    { word: "Cada", startMs: 0, endMs: 260 },
    { word: "año,", startMs: 260, endMs: 600 },
    { word: "en", startMs: 740, endMs: 800 },
    { word: "el", startMs: 800, endMs: 900 },
    { word: "festival", startMs: 900, endMs: 1220 },
    { word: "de", startMs: 1220, endMs: 1460 },
    { word: "Naadam,", startMs: 1460, endMs: 1960 },
    { word: "en", startMs: 2200, endMs: 2300 },
    { word: "Mongolia,", startMs: 2300, endMs: 2760 },
    { word: "miles", startMs: 3400, endMs: 3580 },
    { word: "de", startMs: 3580, endMs: 3760 },
    { word: "personas", startMs: 3760, endMs: 4160 },
    { word: "ven", startMs: 4160, endMs: 4560 },
    { word: "a", startMs: 4560, endMs: 4700 },
    { word: "arqueros", startMs: 4700, endMs: 5140 },
    { word: "disparar", startMs: 5140, endMs: 5560 },
    { word: "con", startMs: 5560, endMs: 5780 },
    { word: "lo", startMs: 5780, endMs: 6200 },
    { word: "que", startMs: 6200, endMs: 6360 },
    { word: "ellos", startMs: 6360, endMs: 6540 },
    { word: "llaman", startMs: 6540, endMs: 6880 },
    { word: "el", startMs: 6880, endMs: 7600 },
    { word: "arco", startMs: 7600, endMs: 7980 },
    { word: "de", startMs: 7980, endMs: 8140 },
    { word: "Gengis", startMs: 8140, endMs: 8640 },
    { word: "Kan.", startMs: 8640, endMs: 8960 },
    { word: "Pero", startMs: 9580, endMs: 9900 },
    { word: "hay", startMs: 9900, endMs: 10180 },
    { word: "un", startMs: 10180, endMs: 10280 },
    { word: "problema.", startMs: 10280, endMs: 10560 },
    { word: "Cuando", startMs: 11360, endMs: 11540 },
    { word: "el", startMs: 11540, endMs: 11720 },
    { word: "guerrero", startMs: 11720, endMs: 12000 },
    { word: "mongol", startMs: 12000, endMs: 12380 },
    { word: "conquistó", startMs: 12380, endMs: 12880 },
    { word: "medio", startMs: 12880, endMs: 13080 },
    { word: "mundo,", startMs: 13080, endMs: 13420 },
    { word: "ese", startMs: 14000, endMs: 14220 },
    { word: "arco", startMs: 14220, endMs: 14620 },
    { word: "no", startMs: 14620, endMs: 15040 },
    { word: "existía", startMs: 15040, endMs: 15600 },
    { word: "todavía.", startMs: 15600, endMs: 15920 },
    { word: "El", startMs: 16720, endMs: 16880 },
    { word: "arma", startMs: 16880, endMs: 17040 },
    { word: "que", startMs: 17040, endMs: 17240 },
    { word: "llevaron", startMs: 17240, endMs: 17560 },
    { word: "sus", startMs: 17560, endMs: 17760 },
    { word: "jinetes", startMs: 17760, endMs: 18240 },
    { word: "por", startMs: 18240, endMs: 18400 },
    { word: "media", startMs: 18400, endMs: 18640 },
    { word: "eurasia", startMs: 18640, endMs: 19140 },
    { word: "era", startMs: 19140, endMs: 19580 },
    { word: "distinto,", startMs: 19580, endMs: 20100 },
    { word: "más", startMs: 20460, endMs: 20740 },
    { word: "corto,", startMs: 20740, endMs: 21260 },
    { word: "más", startMs: 21680, endMs: 21860 },
    { word: "ligero.", startMs: 21860, endMs: 22320 },
    { word: "Y", startMs: 23000, endMs: 23180 },
    { word: "según", startMs: 23180, endMs: 23400 },
    { word: "la", startMs: 23400, endMs: 23560 },
    { word: "evidencia", startMs: 23560, endMs: 24000 },
    { word: "arqueológica,", startMs: 24000, endMs: 24720 },
    { word: "bastante", startMs: 24720, endMs: 25500 },
    { word: "más", startMs: 25500, endMs: 25860 },
    { word: "rápido", startMs: 25860, endMs: 26200 },
    { word: "de", startMs: 26200, endMs: 26380 },
    { word: "lo", startMs: 26380, endMs: 26500 },
    { word: "que", startMs: 26500, endMs: 26580 },
    { word: "la", startMs: 26580, endMs: 26680 },
    { word: "imagen", startMs: 26680, endMs: 27000 },
    { word: "popular", startMs: 27000, endMs: 27460 },
    { word: "sugiere.", startMs: 27460, endMs: 27940 },
  ],
  audio: {
    // Sin endAt: llega hasta el final real del archivo (28.248s, incluida
    // la frase completa + el pequeño silencio final añadido con ffmpeg).
    // Pico medido -3.2dBFS -> x1.2882 para dejarlo en -1dBFS.
    narration: { src: "video002/shorts-audio/short1-hook.mp3", volume: 1.2882 },
    // Primeros 31s de music-final.mp3 (vídeo largo) — cubre el mismo tramo
    // que suena bajo el Hook, con margen para llegar hasta el CTA. Pico
    // medido -24.7dBFS -> x0.9661 para dejarlo en -25dBFS exactos.
    music: { src: "video002/shorts-audio/short1-music.mp3", volume: 0.9661 },
  },
};

// ---------------------------------------------------------------------------
// Short 2 — "Un muelle compuesto de tres capas"
// Audio: dos párrafos NO contiguos del bloque Objeto, unidos por corte
// directo (se omite el párrafo intermedio sobre materiales concretos):
//   párrafo 1 [69.469–78.290] + párrafo 2 [115.167–132.549]
// ---------------------------------------------------------------------------
export const short2ObjetoFixture: ExplainerProps = {
  // Reorganizado siguiendo el audio (29 ago 2026): la imagen 4 (los 2
  // arcos, largo vs. compuesto — "un arco largo no entra en esa
  // ecuación...") y la 2c (núcleo de madera) abren el short mientras la
  // narración habla en términos generales; el motion 7a (energía) sigue.
  // 6a/6b/6c (núcleo/asta/tendón por separado) se eliminaron por sobrar
  // metraje frente al audio — la narración pasa directa de "esa
  // combinación..." a "es, literalmente, un muelle compuesto de tres
  // capas", así que 7b (el muelle, cierre) sigue justo a 7a sin hueco
  // intermedio. list_reveal (núcleo/asta/tendón) eliminado con ellos: sin
  // esos 3 planos ya no tenía sobre qué imagen mostrarse.
  cuts: [
    {
      id: "4",
      source: "video002/images/4.png",
      in_seconds: 0,
      out_seconds: 6.0, // f180
      // "cut": entra directa, sin fundido de aparición (hardIn en
      // ImageScene salta el spring fade-in de opacidad).
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.4,
      animation: "zoom-in",
      transform: {
        // Ancla el zoom en la base de la imagen: las puntas/talones de los
        // 2 arcos quedan fijos contra el borde inferior del encuadre en
        // vez de deslizarse hacia abajo al hacer zoom desde el centro.
        zoomOrigin: "50% 100%",
        // Zoom a la mitad del default de "zoom-in" (1.28 -> pico 1.14).
        scale: 1.14,
      },
    },
    {
      id: "2c",
      source: "video002/images/2c.png",
      in_seconds: 6.0, // f180
      out_seconds: 8.733333, // f262
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.4,
      animation: "pan-left",
    },
    {
      id: "7a",
      source: "video002/video/plano-7a-energia.mp4",
      in_seconds: 8.733333, // f262
      out_seconds: 16.733333, // f502
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.4,
      videoFit: "contain",
      backgroundColor: "transparent",
      // Slot de 8.0s (f262→f502) vs. los 7.966s reales del clip fuente
      // (ffprobe) — retimed para que el contenido termine justo en el
      // corte en vez de congelarse en el último frame unos instantes antes.
      playbackRate: 0.9958,
      // Zoom fijo (punch-in estático, sin animación) para el motion graphic.
      transform: { scale: 1.25 },
    },
    {
      id: "7b",
      source: "video002/video/plano-7b-muelle.mp4",
      in_seconds: 16.733333, // f502, justo a continuación de 7a
      out_seconds: 27.003333,
      source_in_seconds: 0,
      transition_in: "cut",
      // fade_black + backgroundColor transparent: el fundido revela el
      // fondo del CTA ya premontado detrás (Layer 0.5 en Explainer.tsx),
      // en vez de un negro plano — mismo patrón que el cierre del short 1.
      transition_out: "fade_black",
      transition_duration: 0.5,
      videoFit: "contain",
      backgroundColor: "transparent",
      transform: { scale: 1.25 },
    },
    {
      id: "cta",
      source: "", // no usado — cta_card no pasa por ImageScene/VideoScene
      type: "cta_card",
      in_seconds: 27.003333, // arranca justo donde termina 7b
      out_seconds: 27.003333 + 2.5, // CTA_DURATION_SECONDS, igual que en SocialClip/short 1
      text: "Síguenos para más",
      // No existe un short2-cta.mp3 propio — reutiliza la misma locución
      // genérica del short 1 (mismo texto exacto en pantalla), calibrada
      // igual (-4.1dBFS medido -> x1.4289 para -1dBFS).
      audioSrc: "video002/shorts-audio/short1-cta.mp3",
      audioStartSeconds: 0.5,
      audioVolume: 1.4289,
    },
  ],
  // Isotipo + subtítulos de marca, igual que el short 1. brandBackground:
  // fondo fijo para todo el vídeo (capa única, ver nota en ExplainerProps)
  // — rellena las franjas que deja el "contain" de los cortes 7a/7b.
  watermarkSrc: "social-clips/source/logo-isotipo-full.png",
  brandBackground: true,
  themeConfig: {
    captionHighlightColor: "#D49A46",
    captionBackgroundColor: "rgba(14, 14, 17, 0.78)",
    captionFontSize: 54,
  },
  // Transcrito con faster-whisper (modelo small, es) sobre el propio
  // short2-objeto.mp3. El audio real empieza con la frase de cierre del
  // bloque Contexto ("Un arco largo no entra en esa ecuación..."), no con
  // la primera frase citada en la nota fuente — sincronizado con el audio
  // como referencia. Corrección manual: Whisper oyó "hasta" (homófono);
  // el guion aprobado usa "asta". "por si sola" -> "por sí sola" (tilde).
  captions: [
    { word: "Un", startMs: 0, endMs: 160 },
    { word: "arco", startMs: 160, endMs: 360 },
    { word: "largo", startMs: 360, endMs: 600 },
    { word: "no", startMs: 600, endMs: 840 },
    { word: "entra", startMs: 840, endMs: 1100 },
    { word: "en", startMs: 1100, endMs: 1240 },
    { word: "esa", startMs: 1240, endMs: 1440 },
    { word: "ecuación,", startMs: 1440, endMs: 1940 },
    { word: "hacía", startMs: 2240, endMs: 2540 },
    { word: "falta", startMs: 2540, endMs: 2780 },
    { word: "comprimir", startMs: 2780, endMs: 3380 },
    { word: "toda", startMs: 3380, endMs: 3640 },
    { word: "esa", startMs: 3640, endMs: 3920 },
    { word: "potencia", startMs: 3920, endMs: 4480 },
    { word: "en", startMs: 4480, endMs: 4640 },
    { word: "un", startMs: 4640, endMs: 4760 },
    { word: "arma", startMs: 4760, endMs: 4960 },
    { word: "compacta.", startMs: 4960, endMs: 5600 },
    { word: "Ninguna", startMs: 6000, endMs: 6420 },
    { word: "madera,", startMs: 6420, endMs: 6820 },
    { word: "por", startMs: 7080, endMs: 7180 },
    { word: "sí", startMs: 7180, endMs: 7340 },
    { word: "sola,", startMs: 7340, endMs: 7580 },
    { word: "es", startMs: 7980, endMs: 8080 },
    { word: "capaz", startMs: 8080, endMs: 8340 },
    { word: "de", startMs: 8340, endMs: 8560 },
    { word: "eso.", startMs: 8560, endMs: 8760 },
    { word: "Esa", startMs: 8840, endMs: 9000 },
    { word: "combinación", startMs: 9000, endMs: 9540 },
    { word: "es", startMs: 9540, endMs: 9680 },
    { word: "lo", startMs: 9680, endMs: 9780 },
    { word: "que", startMs: 9780, endMs: 9900 },
    { word: "permite", startMs: 9900, endMs: 10220 },
    { word: "que", startMs: 10220, endMs: 10460 },
    { word: "un", startMs: 10460, endMs: 10620 },
    { word: "arco", startMs: 10620, endMs: 10920 },
    { word: "de", startMs: 10920, endMs: 11080 },
    { word: "menos", startMs: 11080, endMs: 11280 },
    { word: "de", startMs: 11280, endMs: 11480 },
    { word: "un", startMs: 11480, endMs: 11600 },
    { word: "metro", startMs: 11600, endMs: 11860 },
    { word: "y", startMs: 11860, endMs: 12000 },
    { word: "medio", startMs: 12000, endMs: 12300 },
    { word: "almacene", startMs: 12300, endMs: 13080 },
    { word: "más", startMs: 13080, endMs: 13340 },
    { word: "energía", startMs: 13340, endMs: 13800 },
    { word: "que", startMs: 13800, endMs: 14060 },
    { word: "un", startMs: 14060, endMs: 14200 },
    { word: "arco", startMs: 14200, endMs: 14440 },
    { word: "recto", startMs: 14440, endMs: 14940 },
    { word: "mucho", startMs: 14940, endMs: 15440 },
    { word: "más", startMs: 15440, endMs: 15640 },
    { word: "largo.", startMs: 15640, endMs: 15980 },
    { word: "El", startMs: 16840, endMs: 17020 },
    { word: "asta", startMs: 17020, endMs: 17240 },
    { word: "empuja,", startMs: 17240, endMs: 17780 },
    { word: "el", startMs: 18200, endMs: 18300 },
    { word: "tendón", startMs: 18300, endMs: 18680 },
    { word: "tira", startMs: 18680, endMs: 19040 },
    { word: "y", startMs: 19040, endMs: 19640 },
    { word: "la", startMs: 19640, endMs: 19760 },
    { word: "madera", startMs: 19760, endMs: 20040 },
    { word: "reparte", startMs: 20040, endMs: 20500 },
    { word: "la", startMs: 20500, endMs: 20640 },
    { word: "tensión", startMs: 20640, endMs: 21040 },
    { word: "entre", startMs: 21040, endMs: 21260 },
    { word: "ambos.", startMs: 21260, endMs: 21540 },
    { word: "Es,", startMs: 22200, endMs: 22540 },
    { word: "literalmente,", startMs: 22900, endMs: 23640 },
    { word: "un", startMs: 24280, endMs: 24480 },
    { word: "muelle", startMs: 24480, endMs: 24760 },
    { word: "compuesto", startMs: 24760, endMs: 25340 },
    { word: "de", startMs: 25340, endMs: 25520 },
    { word: "tres", startMs: 25520, endMs: 25720 },
    { word: "capas.", startMs: 25720, endMs: 26180 },
  ],
  audio: {
    // Pico medido -2.3dBFS -> x1.1615 para dejarlo en -1dBFS.
    narration: { src: "video002/shorts-audio/short2-objeto.mp3", volume: 1.1615 },
    // music-final.mp3 (vídeo largo) con offset via tools.analysis.audio_energy
    // (ventana de 30.5s con más energía de las que no son la intro en
    // silencio: 212s, -37.7 LUFS). Pico medido en esa ventana -24.1dBFS ->
    // x0.9016 para dejarlo en -25dBFS, igual que el short 1.
    music: {
      src: "video002/music/music-final.mp3",
      volume: 0.9016,
      offsetSeconds: 212,
    },
  },
};

// ---------------------------------------------------------------------------
// Short 3 — El equipamiento del jinete, según Plano Carpini
// Audio: párrafo único [221.646–253.846].
// Visual: 12a/12b/13a/13b (equipamiento, zihgir, técnica de tiro).
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// Short 3 — "El equipamiento del jinete, según Plano Carpini"
// Audio (30 ago 2026, recortado de nuevo): la locución original
// (short3-historia.mp3) empezaba mal — arrancaba en "pero antes de
// repetirla como si fuera el alcance de un arquero en combate..." (el
// planteamiento del mito de los 500m, contenido ya usado en el short 4),
// y terminaba antes de completar la lista de equipo — le faltaban "tres
// carcajes... flechas silbantes... y una lima para mantener afiladas las
// puntas de hierro en plena campaña". Recortado de nuevo directo de
// narration-final.mp3 (frame 358 de la composición ≈ inicio de "Lo que sí
// sabemos del equipamiento..."), hasta el final real de la explicación:
// [233.44–263.94] del máster, 30.6s.
// Visual: 12a (retrato del fraile) + 12b (arcos/carcajes/lima — encaja
// literal con la enumeración). 13a/13b (anillo de pulgar/zihgir, técnica
// de tiro) pertenecían al párrafo siguiente ("para disparar, el arquero
// mongol no usaba los tres dedos..."), no cubierto por este audio más
// corto — se retiran de este short.
// Recortado una 2ª vez (30 ago 2026) — la primera pasada de este recorte
// se hizo AL REVÉS: se conservó "embajador del Papa que visitó el
// Imperio Mongol, hacia 1245." y se quitó "Lo que sí sabemos... Fray
// Juan de Plano Carpini". Corregido: se quita "embajador del Papa que
// visitó el Imperio Mongol, hacia 1245." (empalme directo, sin hueco
// audible) y se conserva "Lo que sí sabemos del equipamiento de combate
// viene de un testigo directo, Fray Juan de Plano Carpini." encadenado
// con "Según su relato, cada jinete portaba...".
// ---------------------------------------------------------------------------
export const short3HistoriaFixture: ExplainerProps = {
  cuts: [
    {
      id: "12a",
      source: "video002/images/12a.png",
      in_seconds: 0.0,
      out_seconds: 6.6,
      source_in_seconds: 0,
      // "cut": entra directa, sin fundido de aparición.
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      // Estática: corte de apertura breve, sin animación de cámara.
      animation: "static",
    },
    {
      id: "12b",
      source: "video002/images/12b.png",
      in_seconds: 6.6,
      out_seconds: 25.25,
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "fade_black",
      transition_duration: 0.5,
      // Barrido de borde a borde: empieza mostrando el margen izquierdo
      // de la imagen y termina en el margen derecho, misma duración del
      // corte (18.65s) — nueva animación "pan-edge-left-to-right".
      animation: "pan-edge-left-to-right",
      // Transparente para que el fundido revele el fondo del CTA ya
      // premontado detrás (Layer 0.5 en Explainer.tsx) en vez del navy
      // plano de ImageScene — mismo patrón que el cierre de los shorts
      // anteriores.
      backgroundColor: "transparent",
    },
    {
      id: "cta",
      source: "", // no usado — cta_card no pasa por ImageScene/VideoScene
      type: "cta_card",
      in_seconds: 25.25, // arranca justo donde termina 12b
      out_seconds: 25.25 + 2.5, // CTA_DURATION_SECONDS, igual que en los shorts anteriores
      text: "Síguenos para más",
      // No existe un short3-cta.mp3 propio — reutiliza la misma locución
      // genérica de los shorts anteriores (mismo texto exacto en
      // pantalla), calibrada igual (-4.1dBFS medido -> x1.4289 para -1dBFS).
      audioSrc: "video002/shorts-audio/short1-cta.mp3",
      audioStartSeconds: 0.5,
      audioVolume: 1.4289,
    },
  ],
  overlays: [
    {
      type: "monumental_title",
      in_seconds: 0,
      out_seconds: 5,
      position: "bottom-center",
      text: "Fray Juan de Plano Carpini",
      subtitle: "Embajador del Papa, c. 1245",
    },
    {
      // Resincronizado a los nuevos límites de "12b" (6.6s) y a cuándo
      // se nombra cada elemento en el audio recortado.
      type: "list_reveal",
      in_seconds: 6.6,
      out_seconds: 24.5,
      position: "right",
      items: [
        { text: "Dos o tres arcos", at_seconds: 3.4 },
        { text: "Tres carcajes de flechas", at_seconds: 8.82 },
        { text: "Una lima para las puntas", at_seconds: 14.72 },
      ],
    },
  ],
  // Isotipo + subtítulos con el mismo color/formato que los shorts 1, 2 y 4.
  watermarkSrc: "social-clips/source/logo-isotipo-full.png",
  // brandBackground: base común a los 5 shorts (ver nota en short2).
  brandBackground: true,
  themeConfig: {
    captionHighlightColor: "#D49A46",
    captionBackgroundColor: "rgba(14, 14, 17, 0.78)",
    captionFontSize: 54,
  },
  audio: {
    // Pico medido -3.5dBFS -> x1.3335 para dejarlo en -1dBFS.
    narration: { src: "video002/shorts-audio/short3-equipo.mp3", volume: 1.3335 },
    // music-final.mp3 (vídeo largo) con offset via tools.analysis.audio_energy
    // (ventana de 28.75s con más energía que la intro en silencio: 213s,
    // -37.2 LUFS). Pico medido en esa ventana -24.1dBFS -> x0.9016 para
    // dejarlo en -25dBFS, igual que los shorts anteriores.
    music: {
      src: "video002/music/music-final.mp3",
      volume: 0.9016,
      offsetSeconds: 213,
    },
  },
  captions: [
    { word: "Lo", startMs: 0, endMs: 460 },
    { word: "que", startMs: 460, endMs: 580 },
    { word: "sí", startMs: 580, endMs: 680 },
    { word: "sabemos", startMs: 680, endMs: 1000 },
    { word: "del", startMs: 1000, endMs: 1200 },
    { word: "equipamiento", startMs: 1200, endMs: 1740 },
    { word: "de", startMs: 1740, endMs: 1900 },
    { word: "combate,", startMs: 1900, endMs: 2300 },
    { word: "viene", startMs: 2620, endMs: 3120 },
    { word: "de", startMs: 3120, endMs: 3280 },
    { word: "un", startMs: 3280, endMs: 3440 },
    { word: "testigo", startMs: 3440, endMs: 3860 },
    { word: "directo,", startMs: 3860, endMs: 4400 },
    { word: "Fray", startMs: 4780, endMs: 5040 },
    { word: "Juan", startMs: 5040, endMs: 5380 },
    { word: "de", startMs: 5380, endMs: 5580 },
    { word: "Plano", startMs: 5580, endMs: 5840 },
    { word: "Carpini.", startMs: 5840, endMs: 6360 },
    { word: "Según", startMs: 6840, endMs: 7140 },
    { word: "su", startMs: 7140, endMs: 7300 },
    { word: "relato,", startMs: 7300, endMs: 7680 },
    { word: "cada", startMs: 7940, endMs: 8100 },
    { word: "jinete", startMs: 8100, endMs: 8500 },
    { word: "portaba", startMs: 8500, endMs: 8980 },
    { word: "por", startMs: 8980, endMs: 9260 },
    { word: "norma", startMs: 9260, endMs: 9620 },
    { word: "militar,", startMs: 9620, endMs: 10000 },
    { word: "dos", startMs: 10000, endMs: 10740 },
    { word: "o", startMs: 10740, endMs: 10900 },
    { word: "tres", startMs: 10900, endMs: 11080 },
    { word: "arcos,", startMs: 11080, endMs: 11500 },
    { word: "uno", startMs: 12140, endMs: 12340 },
    { word: "de", startMs: 12340, endMs: 12480 },
    { word: "largo", startMs: 12480, endMs: 12680 },
    { word: "alcance,", startMs: 12680, endMs: 13140 },
    { word: "otro", startMs: 13480, endMs: 13660 },
    { word: "para", startMs: 13660, endMs: 13900 },
    { word: "el", startMs: 13900, endMs: 14040 },
    { word: "combate", startMs: 14040, endMs: 14420 },
    { word: "cercano,", startMs: 14420, endMs: 14920 },
    { word: "tres", startMs: 15420, endMs: 15620 },
    { word: "carcajes", startMs: 15620, endMs: 16200 },
    { word: "con", startMs: 16200, endMs: 16400 },
    { word: "flechas", startMs: 16400, endMs: 16700 },
    { word: "de", startMs: 16700, endMs: 16840 },
    { word: "distinto", startMs: 16840, endMs: 17240 },
    { word: "tipo,", startMs: 17240, endMs: 17540 },
    { word: "incluidas", startMs: 17960, endMs: 18400 },
    { word: "flechas", startMs: 18400, endMs: 18760 },
    { word: "silbantes", startMs: 18760, endMs: 19280 },
    { word: "para", startMs: 19280, endMs: 19580 },
    { word: "dar", startMs: 19580, endMs: 19740 },
    { word: "señales", startMs: 19740, endMs: 20160 },
    { word: "a", startMs: 20160, endMs: 20280 },
    { word: "distancia", startMs: 20280, endMs: 20720 },
    { word: "y", startMs: 20720, endMs: 21320 },
    { word: "una", startMs: 21320, endMs: 21520 },
    { word: "lima", startMs: 21520, endMs: 21980 },
    { word: "para", startMs: 21980, endMs: 22260 },
    { word: "mantener", startMs: 22260, endMs: 22600 },
    { word: "afiladas", startMs: 22600, endMs: 23120 },
    { word: "las", startMs: 23120, endMs: 23320 },
    { word: "puntas", startMs: 23320, endMs: 23720 },
    { word: "de", startMs: 23720, endMs: 23820 },
    { word: "hierro", startMs: 23820, endMs: 24160 },
    { word: "en", startMs: 24160, endMs: 24280 },
    { word: "plena", startMs: 24280, endMs: 24520 },
    { word: "campaña.", startMs: 24520, endMs: 25040 },
  ],
};

// ---------------------------------------------------------------------------
// Short 4 — "Tres alcances distintos" (el mito de los 500 metros)
// Audio (29 ago 2026, recortado de nuevo): la locución original
// (short4-consecuencias.mp3, [270.928–312.451] del máster) empezaba mal
// (arrancaba en "tiraba de la cuerda...", cola del bloque anterior, no en el
// mito de los 500 m) y terminaba corta (le faltaba la 3ª distancia —
// "50-150 m, combate real" — y el cierre "tres capas de datos, tres
// funciones distintas"). Recortado de nuevo directo de narration-final.mp3,
// arrancando en "500 metros de precisión letal..." y llegando hasta el
// final real de la explicación: [288.69–324.6] del máster (35.9 s).
// Visual: 15a/15b/15c (infografía de los tres alcances) + "14" (estepa,
// planteamiento del mito — antes ausente del fixture, ver misma nota).
// 16a/16b/16c (Timothy May, bloque siguiente) ya no encajan con este
// audio más corto y se retiran de este short.
// ---------------------------------------------------------------------------
export const short4ConsecuenciasFixture: ExplainerProps = {
  cuts: [
    {
      // Antes 14.png (estepa al atardecer, planteamiento del mito) — sin
      // arquero en plano; sustituida por 3d (jinete a galope apuntando)
      // a petición de Víctor.
      id: "3d",
      source: "video002/images/3d.png",
      in_seconds: 0.0,
      out_seconds: 8.07,
      source_in_seconds: 0,
      // "cut": entra directa, sin fundido de aparición (hardIn en
      // ImageScene salta el spring fade-in de opacidad) — igual que la
      // imagen 1 del short 2.
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "zoom-in",
    },
    {
      // Antes 15a.png (estela de Yisüngge) — sustituida por 10b (arquero
      // tensando el arco ante la corte) a petición de Víctor.
      id: "10b",
      source: "video002/images/10b.png",
      in_seconds: 8.07,
      out_seconds: 14.25,
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "static",
    },
    {
      id: "15b",
      source: "video002/images/15b.png",
      in_seconds: 14.25,
      out_seconds: 23.95,
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "static",
      // El arquero en primer plano queda en el borde izquierdo de la
      // imagen — el "cover" por defecto (centrado) lo recorta. Desplaza
      // el encuadre a la izquierda de la fuente (=lo que se ve se mueve a
      // la derecha en pantalla) para que quede visible, igual que 15c.
      transform: { position: "20% 50%" },
    },
    {
      id: "15c",
      source: "video002/images/15c.png",
      in_seconds: 23.95,
      out_seconds: 35.9,
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "fade_black",
      transition_duration: 0.5,
      animation: "static",
      // Transparente para que el fundido revele el fondo del CTA ya
      // premontado detrás (Layer 0.5 en Explainer.tsx) en vez del navy
      // plano de ImageScene — mismo patrón que el cierre del short 1/2.
      backgroundColor: "transparent",
    },
    {
      id: "cta",
      source: "", // no usado — cta_card no pasa por ImageScene/VideoScene
      type: "cta_card",
      in_seconds: 35.9, // arranca justo donde termina 15c
      out_seconds: 35.9 + 2.5, // CTA_DURATION_SECONDS, igual que en los shorts anteriores
      text: "Síguenos para más",
      // No existe un short4-cta.mp3 propio — reutiliza la misma locución
      // genérica de los shorts 1 y 2 (mismo texto exacto en pantalla),
      // calibrada igual (-4.1dBFS medido -> x1.4289 para -1dBFS).
      audioSrc: "video002/shorts-audio/short1-cta.mp3",
      audioStartSeconds: 0.5,
      audioVolume: 1.4289,
    },
  ],
  overlays: [
    {
      // Arranca con el corte "10b" (8.07s) en vez de en 0: durante "3d" la
      // locución todavía plantea el mito ("500 m de precisión letal..."),
      // sin cifras concretas que enumerar todavía.
      type: "list_reveal",
      in_seconds: 8.07,
      out_seconds: 35,
      position: "right",
      items: [
        { text: "536 m — récord deportivo (Yisüngge)", at_seconds: 0.75 },
        { text: "~300 m — hostigamiento", at_seconds: 6.61 },
        { text: "50-150 m — combate real", at_seconds: 16.13 },
      ],
    },
  ],
  // Isotipo + subtítulos de marca, mismo color/formato que los shorts 1 y 2.
  watermarkSrc: "social-clips/source/logo-isotipo-full.png",
  // brandBackground: base común a los 5 shorts (ver nota en short2).
  brandBackground: true,
  themeConfig: {
    captionHighlightColor: "#D49A46",
    captionBackgroundColor: "rgba(14, 14, 17, 0.78)",
    captionFontSize: 54,
  },
  audio: {
    // Pico medido -1.0dBFS — ya en el objetivo de la convención (-1dBFS),
    // sin necesidad de multiplicador.
    narration: { src: "video002/shorts-audio/short4-distancias.mp3" },
    // music-final.mp3 (vídeo largo) con offset via tools.analysis.audio_energy
    // (ventana de 39.4s con más energía que la intro en silencio: 38s,
    // -38.6 LUFS). Pico medido en esa ventana -24.9dBFS -> x0.9886 para
    // dejarlo en -25dBFS, igual que los shorts 1 y 2.
    music: {
      src: "video002/music/music-final.mp3",
      volume: 0.9886,
      offsetSeconds: 38,
    },
  },
  captions: [
    { word: "500", startMs: 0, endMs: 440 },
    { word: "metros", startMs: 440, endMs: 1080 },
    { word: "de", startMs: 1080, endMs: 1280 },
    { word: "precisión", startMs: 1280, endMs: 1820 },
    { word: "letal.", startMs: 1820, endMs: 2280 },
    { word: "La", startMs: 2800, endMs: 3080 },
    { word: "evidencia", startMs: 3080, endMs: 3580 },
    { word: "es", startMs: 3580, endMs: 3840 },
    { word: "algo", startMs: 3840, endMs: 4040 },
    { word: "más", startMs: 4040, endMs: 4220 },
    { word: "específica.", startMs: 4220, endMs: 4900 },
    { word: "En", startMs: 5340, endMs: 5500 },
    { word: "realidad", startMs: 5500, endMs: 5840 },
    { word: "hay", startMs: 5840, endMs: 6180 },
    { word: "tres", startMs: 6180, endMs: 6420 },
    { word: "alcances", startMs: 6420, endMs: 6860 },
    { word: "distintos.", startMs: 6860, endMs: 7320 },
    { word: "536", startMs: 8820, endMs: 9500 },
    { word: "metros", startMs: 9500, endMs: 10000 },
    { word: "es", startMs: 10000, endMs: 10400 },
    { word: "el", startMs: 10400, endMs: 10540 },
    { word: "récord", startMs: 10540, endMs: 10840 },
    { word: "deportivo", startMs: 10840, endMs: 11440 },
    { word: "de", startMs: 11440, endMs: 11580 },
    { word: "Yisüngge,", startMs: 11580, endMs: 12120 },
    { word: "con", startMs: 12480, endMs: 12700 },
    { word: "una", startMs: 12700, endMs: 12860 },
    { word: "flecha", startMs: 12860, endMs: 13180 },
    { word: "de", startMs: 13180, endMs: 13320 },
    { word: "exhibición.", startMs: 13320, endMs: 13820 },
    { word: "En", startMs: 14680, endMs: 14900 },
    { word: "torno", startMs: 14900, endMs: 15220 },
    { word: "a", startMs: 15220, endMs: 15360 },
    { word: "300", startMs: 15360, endMs: 15640 },
    { word: "metros", startMs: 15640, endMs: 16260 },
    { word: "era", startMs: 16260, endMs: 16680 },
    { word: "el", startMs: 16680, endMs: 16820 },
    { word: "alcance", startMs: 16820, endMs: 17140 },
    { word: "del", startMs: 17140, endMs: 17340 },
    { word: "fuego", startMs: 17340, endMs: 17600 },
    { word: "de", startMs: 17600, endMs: 17800 },
    { word: "hostigamiento,", startMs: 17800, endMs: 18380 },
    { word: "con", startMs: 18860, endMs: 19120 },
    { word: "puntas", startMs: 19120, endMs: 19500 },
    { word: "ligeras,", startMs: 19500, endMs: 20020 },
    { word: "disparado", startMs: 20460, endMs: 20940 },
    { word: "en", startMs: 20940, endMs: 21080 },
    { word: "oleadas", startMs: 21080, endMs: 21420 },
    { word: "para", startMs: 21420, endMs: 21720 },
    { word: "desgastar", startMs: 21720, endMs: 22200 },
    { word: "al", startMs: 22200, endMs: 22300 },
    { word: "enemigo", startMs: 22300, endMs: 22700 },
    { word: "antes", startMs: 22700, endMs: 23160 },
    { word: "del", startMs: 23160, endMs: 23380 },
    { word: "choque.", startMs: 23380, endMs: 23700 },
    { word: "Y", startMs: 24200, endMs: 24420 },
    { word: "entre", startMs: 24420, endMs: 24620 },
    { word: "50", startMs: 24620, endMs: 24940 },
    { word: "y", startMs: 24940, endMs: 25240 },
    { word: "150", startMs: 25240, endMs: 25600 },
    { word: "metros", startMs: 25600, endMs: 26360 },
    { word: "era", startMs: 26360, endMs: 26880 },
    { word: "el", startMs: 26880, endMs: 27060 },
    { word: "alcance", startMs: 27060, endMs: 27420 },
    { word: "de", startMs: 27420, endMs: 27580 },
    { word: "combate", startMs: 27580, endMs: 27940 },
    { word: "real,", startMs: 27940, endMs: 28280 },
    { word: "con", startMs: 28280, endMs: 28940 },
    { word: "flechas", startMs: 28940, endMs: 29320 },
    { word: "de", startMs: 29320, endMs: 29460 },
    { word: "guerra", startMs: 29460, endMs: 29700 },
    { word: "más", startMs: 29700, endMs: 29920 },
    { word: "pesadas,", startMs: 29920, endMs: 30360 },
    { word: "capaces", startMs: 30740, endMs: 31160 },
    { word: "de", startMs: 31160, endMs: 31300 },
    { word: "atravesar", startMs: 31300, endMs: 31760 },
    { word: "una", startMs: 31760, endMs: 31900 },
    { word: "armadura,", startMs: 31900, endMs: 32300 },
    { word: "tres", startMs: 32900, endMs: 33120 },
    { word: "capas", startMs: 33120, endMs: 33520 },
    { word: "de", startMs: 33520, endMs: 33620 },
    { word: "datos,", startMs: 33620, endMs: 33860 },
    { word: "tres", startMs: 34360, endMs: 34520 },
    { word: "funciones", startMs: 34520, endMs: 35020 },
    { word: "distintas.", startMs: 35020, endMs: 35660 },
  ],
};

// ---------------------------------------------------------------------------
// Short 5 — "La disciplina detrás de las flechas" (rehecho entero, 30 ago 2026)
// Reemplaza por completo el short 5 anterior ("su descendiente, cuatro
// siglos más tarde" / arco de Naadam) — audio e imágenes nuevos, a
// petición de Víctor: bloque Consecuencias [340.58–381.14] del máster,
// "El arco compuesto no era exclusivo de los mongoles..." hasta "...una
// logística de 3 a 5 caballos por jinete." (planos 16c-17d del guion
// técnico, §5:27-6:12).
// Visual: 16c (varios pueblos de la estepa con arcos similares) — 17a
// (campamento militar organizado) — 17b (motion graphic ManimCE,
// pirámide del sistema decimal 10/100/1.000/10.000, ya trae el rótulo
// quemado) — 17c (proclamación de la Yassa) — 17d (jinete con 3-5
// caballos de refresco).
// Recortado una 2ª vez (frames 258-480 del corte anterior = "turcos,
// unos, otros pueblos nómadas. Todos disparaban con una tecnología muy
// similar."): se quita, empalme directo entre "...desde siglos antes."
// y "Para May, lo que sí fue exclusivo...". Límites de corte
// verificados contra el silencio real de la forma de onda
// (ffmpeg silencedetect), no solo contra la transcripción.
// ---------------------------------------------------------------------------
export const short5LegadoFixture: ExplainerProps = {
  cuts: [
    {
      id: "16c",
      source: "video002/images/16c.png",
      in_seconds: 0.0,
      out_seconds: 8.94,
      source_in_seconds: 0,
      // "cut": entra directa, sin fundido de aparición.
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "static",
    },
    {
      id: "17a",
      source: "video002/images/17a.png",
      in_seconds: 8.94,
      out_seconds: 16.22,
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "static",
    },
    {
      id: "17b",
      source: "video002/video/plano-17b-piramide-decimal.mp4",
      in_seconds: 16.22,
      out_seconds: 23.32,
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      // Motion graphic 16:9 con rotulado propio (pirámide 10/100/1.000/
      // 10.000) hasta el borde — "contain" en vez de "cover" para no
      // recortarlo, igual que los motion graphics del short 2.
      videoFit: "contain",
      backgroundColor: "transparent",
      // Zoom fijo (punch-in estático, sin animación) a petición de Víctor.
      transform: { scale: 1.4 },
    },
    {
      id: "17c",
      source: "video002/images/17c.png",
      in_seconds: 23.32,
      out_seconds: 30.43,
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "static",
      // El personaje en primer plano queda a la derecha del centro — el
      // "cover" por defecto (centrado) lo recorta. Desplazamiento total
      // 150px + 200px de pantalla = 350px, convertidos a la escala real
      // de la imagen (1024px de ancho, "cover" x3.33) = +10.25% sobre el
      // 50% central.
      transform: { position: "60.25% 50%" },
    },
    {
      id: "17d",
      source: "video002/images/17d.png",
      in_seconds: 30.43,
      out_seconds: 33.58,
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "fade_black",
      transition_duration: 0.5,
      animation: "static",
      // Transparente para que el fundido revele el fondo del CTA ya
      // premontado detrás (Layer 0.5 en Explainer.tsx) en vez del navy
      // plano de ImageScene — mismo patrón que el cierre de los shorts
      // anteriores.
      backgroundColor: "transparent",
    },
    {
      id: "cta",
      source: "", // no usado — cta_card no pasa por ImageScene/VideoScene
      type: "cta_card",
      in_seconds: 33.58, // arranca justo donde termina 17d
      out_seconds: 33.58 + 2.5, // CTA_DURATION_SECONDS, igual que en los shorts anteriores
      text: "Síguenos para más",
      // No existe un short5-cta.mp3 propio — reutiliza la misma locución
      // genérica de los shorts anteriores (mismo texto exacto en
      // pantalla), calibrada igual (-4.1dBFS medido -> x1.4289 para -1dBFS).
      audioSrc: "video002/shorts-audio/short1-cta.mp3",
      audioStartSeconds: 0.5,
      audioVolume: 1.4289,
    },
  ],
  // Isotipo + subtítulos con el mismo color/formato que los shorts
  // anteriores. brandBackground: fondo fijo para todo el vídeo (capa
  // persistente, ver nota en ExplainerProps) — rellena las franjas que
  // deja el "contain" del motion graphic "17b".
  watermarkSrc: "social-clips/source/logo-isotipo-full.png",
  brandBackground: true,
  themeConfig: {
    captionHighlightColor: "#D49A46",
    captionBackgroundColor: "rgba(14, 14, 17, 0.78)",
    captionFontSize: 54,
  },
  audio: {
    // Pico medido -1.4dBFS -> x1.0471 para dejarlo en -1dBFS (verificado
    // de nuevo tras el 2º recorte, sin cambios).
    narration: { src: "video002/shorts-audio/short5-legado.mp3", volume: 1.0471 },
    // music-final.mp3 (vídeo largo) con offset via tools.analysis.audio_energy
    // (ventana de 36.1s con más energía que la intro en silencio: 217s,
    // -38.3 LUFS). Pico medido en esa ventana -24.1dBFS -> x0.9016 para
    // dejarlo en -25dBFS, igual que los shorts anteriores.
    music: {
      src: "video002/music/music-final.mp3",
      volume: 0.9016,
      offsetSeconds: 217,
    },
  },
  captions: [
    { word: "El", startMs: 0, endMs: 400 },
    { word: "arco", startMs: 400, endMs: 580 },
    { word: "compuesto", startMs: 580, endMs: 1060 },
    { word: "no", startMs: 1060, endMs: 1320 },
    { word: "era", startMs: 1320, endMs: 1480 },
    { word: "exclusivo", startMs: 1480, endMs: 2080 },
    { word: "de", startMs: 2080, endMs: 2200 },
    { word: "los", startMs: 2200, endMs: 2300 },
    { word: "mongoles,", startMs: 2300, endMs: 2740 },
    { word: "era", startMs: 3060, endMs: 3880 },
    { word: "el", startMs: 3880, endMs: 4060 },
    { word: "arma", startMs: 4060, endMs: 4280 },
    { word: "estándar", startMs: 4280, endMs: 4800 },
    { word: "de", startMs: 4800, endMs: 4940 },
    { word: "casi", startMs: 4940, endMs: 5100 },
    { word: "todas", startMs: 5100, endMs: 5340 },
    { word: "las", startMs: 5340, endMs: 5580 },
    { word: "culturas", startMs: 5580, endMs: 6020 },
    { word: "de", startMs: 6020, endMs: 6160 },
    { word: "la", startMs: 6160, endMs: 6240 },
    { word: "estepa", startMs: 6240, endMs: 6620 },
    { word: "euroasiática", startMs: 6620, endMs: 7360 },
    { word: "desde", startMs: 7360, endMs: 7560 },
    { word: "siglos", startMs: 7560, endMs: 7980 },
    { word: "antes.", startMs: 7980, endMs: 8320 },
    { word: "Para", startMs: 9200, endMs: 9540 },
    { word: "May,", startMs: 9540, endMs: 9740 },
    { word: "lo", startMs: 10300, endMs: 10380 },
    { word: "que", startMs: 10380, endMs: 10500 },
    { word: "sí", startMs: 10500, endMs: 10620 },
    { word: "fue", startMs: 10620, endMs: 10780 },
    { word: "exclusivo", startMs: 10780, endMs: 11320 },
    { word: "de", startMs: 11320, endMs: 11460 },
    { word: "Genghis", startMs: 11460, endMs: 11980 },
    { word: "Khan", startMs: 11980, endMs: 12280 },
    { word: "fue", startMs: 12280, endMs: 12900 },
    { word: "la", startMs: 12900, endMs: 13040 },
    { word: "organización", startMs: 13040, endMs: 13660 },
    { word: "militar", startMs: 13660, endMs: 14020 },
    { word: "que", startMs: 14020, endMs: 14280 },
    { word: "puso", startMs: 14280, endMs: 14600 },
    { word: "detrás", startMs: 14600, endMs: 14980 },
    { word: "de", startMs: 14980, endMs: 15120 },
    { word: "esas", startMs: 15120, endMs: 15300 },
    { word: "flechas,", startMs: 15300, endMs: 15760 },
    { word: "un", startMs: 16380, endMs: 16680 },
    { word: "sistema", startMs: 16680, endMs: 17040 },
    { word: "decimal", startMs: 17040, endMs: 17500 },
    { word: "que", startMs: 17500, endMs: 18160 },
    { word: "dividía", startMs: 18160, endMs: 18540 },
    { word: "sus", startMs: 18540, endMs: 18700 },
    { word: "ejércitos", startMs: 18700, endMs: 19220 },
    { word: "en", startMs: 19220, endMs: 19440 },
    { word: "grupos", startMs: 19440, endMs: 19680 },
    { word: "de", startMs: 19680, endMs: 19940 },
    { word: "diez,", startMs: 19940, endMs: 20200 },
    { word: "cien,", startMs: 20540, endMs: 20900 },
    { word: "mil", startMs: 21280, endMs: 21480 },
    { word: "y", startMs: 21480, endMs: 21880 },
    { word: "diez", startMs: 21880, endMs: 22100 },
    { word: "mil", startMs: 22100, endMs: 22280 },
    { word: "soldados,", startMs: 22280, endMs: 22800 },
    { word: "una", startMs: 22800, endMs: 23680 },
    { word: "disciplina", startMs: 23680, endMs: 24280 },
    { word: "militar,", startMs: 24280, endMs: 24680 },
    { word: "la", startMs: 25140, endMs: 25360 },
    { word: "yasa,", startMs: 25360, endMs: 25720 },
    { word: "que", startMs: 26280, endMs: 26500 },
    { word: "castigaba", startMs: 26500, endMs: 27000 },
    { word: "con", startMs: 27000, endMs: 27160 },
    { word: "la", startMs: 27160, endMs: 27280 },
    { word: "muerte", startMs: 27280, endMs: 27560 },
    { word: "la", startMs: 27560, endMs: 27740 },
    { word: "deserción", startMs: 27740, endMs: 28300 },
    { word: "o", startMs: 28300, endMs: 28540 },
    { word: "el", startMs: 28540, endMs: 28620 },
    { word: "abandono", startMs: 28620, endMs: 29060 },
    { word: "de", startMs: 29060, endMs: 29140 },
    { word: "un", startMs: 29140, endMs: 29260 },
    { word: "compañero", startMs: 29260, endMs: 29780 },
    { word: "herido", startMs: 29780, endMs: 30220 },
    { word: "y", startMs: 30220, endMs: 30740 },
    { word: "una", startMs: 30740, endMs: 30880 },
    { word: "logística", startMs: 30880, endMs: 31460 },
    { word: "de", startMs: 31460, endMs: 31600 },
    { word: "tres", startMs: 31600, endMs: 31840 },
    { word: "a", startMs: 31840, endMs: 31960 },
    { word: "cinco", startMs: 31960, endMs: 32180 },
    { word: "caballos", startMs: 32180, endMs: 32700 },
    { word: "por", startMs: 32700, endMs: 32880 },
    { word: "jinete.", startMs: 32880, endMs: 33280 },
  ],
};
