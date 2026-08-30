import { ExplainerProps } from "../../Explainer";

// ---------------------------------------------------------------------------
// ARTILUGIO_LARGO — plantilla de referencia para el vídeo largo (16:9,
// YouTube) del canal Artilugio.
//
// Extraída de video002 ("El arco compuesto que convirtió a los mongoles en
// un imperio") — vídeo 002 YA PUBLICADO tal cual esta forma. NO es contenido
// para renderizar: es la referencia técnica de qué partes son fijas del
// canal y cuáles cambian en cada vídeo nuevo. Composición correspondiente
// en Root.tsx: "Artilugio_Largo". El fixture real y completo del vídeo 002
// vive en ../video002.ts — cópialo de ahí, no de aquí, si necesitas
// re-renderizar ese vídeo en concreto.
//
// FIJO en todo vídeo largo del canal (no cambiar sin decisión explícita):
//   - Sin watermarkSrc, sin brandBackground, sin cta_card final: el vídeo
//     largo NO lleva marca de agua persistente ni tarjeta de cierre — eso
//     es un tratamiento propio de los shorts verticales (ver
//     artilugioShortTemplate.ts). El "suscríbete" y el end-screen van por
//     las herramientas nativas de YouTube, no quemados en el vídeo.
//   - themeConfig.backgroundColor: "#000000" — sin esto, cualquier corte
//     sin `backgroundColor` propio revela el navy genérico de Remotion
//     (#0F172A) en sus fundidos (fade_black de entrada/salida, y el resto
//     final de un fadeOut que no llega a opacity 0) — se ve especialmente
//     en el fundido de apertura/cierre del vídeo. No se toca ningún otro
//     campo del tema (fuentes, acentos...), solo este.
//   - captions: [] — el vídeo largo no lleva subtítulos quemados.
//   - audio: siempre narration + music, y sfx si el vídeo tiene efectos de
//     sonido propios (banda sonora ambiental / puntuales) — las tres son
//     capas independientes y reales en ExplainerProps.audio.
//
// VARÍA en cada vídeo nuevo (esto de aquí son solo ejemplos del 002):
//   - El propio array de cuts (fuentes, timings, transiciones, framing).
//   - overlays: el estilo "rotulo" que usaba el 002 (rótulos de corrección
//     tipo "500 m — ¿el mito?") queda DESCARTADO para vídeos futuros — el
//     canal va a usar otro modelo de overlay para esto, todavía sin
//     diseñar. No copies el patrón "rotulo" de video002.ts; hasta que haya
//     un reemplazo, deja overlays: [] o usa un tipo ya cableado
//     (section_title, stat_reveal, monumental_title, list_reveal,
//     photo_insert) si un vídeo concreto lo necesita.
// ---------------------------------------------------------------------------
export const artilugioLargoTemplate: ExplainerProps = {
  cuts: [
    {
      id: "example-image-cut",
      // Asset real de video002 (ya publicado) solo para que esta plantilla
      // se pueda previsualizar/renderizar como prueba — sustitúyelo por
      // los assets del vídeo nuevo.
      source: "video002/images/1a.png",
      in_seconds: 0.0,
      out_seconds: 12.0,
      source_in_seconds: 0,
      // "fade_black" en el primer/último corte del vídeo; "cut" entre
      // cortes intermedios que se suceden sin hueco — a diferencia de los
      // shorts, el vídeo largo SÍ puede abrir con un fundido desde negro.
      transition_in: "fade_black",
      transition_out: "cut",
      transition_duration: 0.5,
      // A diferencia de los shorts (que nunca dejan una imagen quieta),
      // el vídeo largo sí puede usar "static" en tramos donde la
      // narración lleva el peso y no conviene distraer con movimiento.
      animation: "drift-up",
    },
    {
      id: "example-video-cut",
      // Asset real de video002 también aquí, por la misma razón.
      source: "video002/video/Artilugio_Intro.mp4",
      in_seconds: 12.0,
      out_seconds: 18.0,
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "fade_black",
      transition_duration: 0.5,
      animation: "static",
    },
  ],
  // Descartado para vídeos futuros — ver nota arriba. Deja [] o usa un tipo
  // ya cableado si el vídeo concreto necesita un overlay de texto.
  overlays: [],
  // Negro real en vez del navy genérico de Remotion (#0F172A) para los
  // fundidos de apertura/cierre — ver nota arriba.
  themeConfig: { backgroundColor: "#000000" },
  captions: [],
  audio: {
    narration: { src: "video00X/audio/narration-final.mp3", volume: 1.0 },
    // Opcional — solo si el vídeo tiene efectos de sonido propios.
    sfx: { src: "video00X/audio/sfx-final.mp3", volume: 1.0 },
    music: { src: "video00X/music/music-final.mp3", volume: 1.0 },
  },
};
