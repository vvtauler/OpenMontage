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
      out_seconds: 12.0,
      source_in_seconds: 0,
      transition_in: "fade_black",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "drift-up",
    },
    {
      id: "1b",
      source: "video002/images/1b.png",
      in_seconds: 12.0,
      out_seconds: 28.92,
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "fade_black",
      transition_duration: 0.5,
      animation: "zoom-in",
    },
  ],
  overlays: [
    {
      type: "list_reveal",
      in_seconds: 0,
      out_seconds: 20,
      position: "right",
      items: [
        { text: "Arco de Naadam (hoy)", at_seconds: 1 },
        { text: "Arco de la conquista (ss. XIII-XIV)", at_seconds: 8 },
      ],
    },
  ],
  audio: {
    narration: { src: "video002/shorts-audio/short1-hook.mp3" },
  },
};

// ---------------------------------------------------------------------------
// Short 2 — "Un muelle compuesto de tres capas"
// Audio: dos párrafos NO contiguos del bloque Objeto, unidos por corte
// directo (se omite el párrafo intermedio sobre materiales concretos):
//   párrafo 1 [69.469–78.290] + párrafo 2 [115.167–132.549]
// Visual: los 5 motion graphics de Fase 7 (ManimCE) que cita la nota,
// reencadenados sin las imágenes/planos intermedios del vídeo largo —
// re-sincronización deliberada, no la posición original en el vídeo largo.
// OJO: 6a/6b/6c ya llevan rotulado quemado en el render — valorar en Studio
// si el list_reveal es redundante (aviso explícito de la nota fuente).
// ---------------------------------------------------------------------------
export const short2ObjetoFixture: ExplainerProps = {
  cuts: [
    {
      id: "6a",
      source: "video002/video/plano-6a-nucleo.mp4",
      in_seconds: 0.0,
      out_seconds: 5.78,
      source_in_seconds: 0,
      transition_in: "fade_black",
      transition_out: "cut",
      transition_duration: 0.4,
    },
    {
      id: "6b",
      source: "video002/video/plano-6b-asta-compresion.mp4",
      in_seconds: 5.78,
      out_seconds: 12.76,
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.4,
    },
    {
      id: "6c",
      source: "video002/video/plano-6c-tendon-tension.mp4",
      in_seconds: 12.76,
      out_seconds: 17.14,
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.4,
    },
    {
      id: "7a",
      source: "video002/video/plano-7a-energia.mp4",
      in_seconds: 17.14,
      out_seconds: 25.24,
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.4,
    },
    {
      id: "7b",
      source: "video002/video/plano-7b-muelle.mp4",
      in_seconds: 25.24,
      out_seconds: 35.51,
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "fade_black",
      transition_duration: 0.5,
    },
  ],
  overlays: [
    {
      type: "list_reveal",
      in_seconds: 0,
      out_seconds: 15,
      position: "left",
      items: [
        { text: "Núcleo de madera elástica", at_seconds: 1 },
        { text: "Asta animal — compresión", at_seconds: 4 },
        { text: "Tendón — tensión", at_seconds: 7 },
      ],
    },
  ],
  audio: {
    narration: { src: "video002/shorts-audio/short2-objeto.mp3" },
  },
};

// ---------------------------------------------------------------------------
// Short 3 — El equipamiento del jinete, según Plano Carpini
// Audio: párrafo único [221.646–253.846].
// Visual: 12a/12b/13a/13b (equipamiento, zihgir, técnica de tiro).
// ---------------------------------------------------------------------------
export const short3HistoriaFixture: ExplainerProps = {
  cuts: [
    {
      id: "12a",
      source: "video002/images/12a.png",
      in_seconds: 0.0,
      out_seconds: 12.12,
      source_in_seconds: 0,
      transition_in: "fade_black",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "zoom-in",
    },
    {
      id: "12b",
      source: "video002/images/12b.png",
      in_seconds: 12.12,
      out_seconds: 31.28,
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "static",
    },
    {
      id: "13a",
      source: "video002/images/13a.png",
      in_seconds: 31.28,
      out_seconds: 37.22,
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "static",
    },
    {
      id: "13b",
      source: "video002/images/13b.png",
      in_seconds: 37.22,
      out_seconds: 49.93,
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "fade_black",
      transition_duration: 0.5,
      animation: "zoom-in",
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
      type: "list_reveal",
      in_seconds: 5,
      out_seconds: 20,
      position: "right",
      items: [
        { text: "Dos o tres arcos", at_seconds: 1 },
        { text: "Tres carcajes de flechas", at_seconds: 4 },
        { text: "Una lima para las puntas", at_seconds: 7 },
      ],
    },
  ],
  audio: {
    narration: { src: "video002/shorts-audio/short3-historia.mp3" },
  },
};

// ---------------------------------------------------------------------------
// Short 4 — "Tres alcances distintos" (el mito de los 500 metros)
// Audio: dos párrafos contiguos [270.928–312.451].
// Visual: 15a/15b/15c/16a/16b/16c (infografía de los tres alcances).
// ---------------------------------------------------------------------------
export const short4ConsecuenciasFixture: ExplainerProps = {
  cuts: [
    {
      id: "15a",
      source: "video002/images/15a.png",
      in_seconds: 0.0,
      out_seconds: 6.22,
      source_in_seconds: 0,
      transition_in: "fade_black",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "static",
    },
    {
      id: "15b",
      source: "video002/images/15b.png",
      in_seconds: 6.22,
      out_seconds: 15.84,
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "static",
    },
    {
      id: "15c",
      source: "video002/images/15c.png",
      in_seconds: 15.84,
      out_seconds: 28.11,
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "static",
    },
    {
      id: "16a",
      source: "video002/images/16a.png",
      in_seconds: 28.11,
      out_seconds: 36.01,
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "static",
    },
    {
      id: "16b",
      source: "video002/images/16b.png",
      in_seconds: 36.01,
      out_seconds: 43.51,
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "static",
    },
    {
      id: "16c",
      source: "video002/images/16c.png",
      in_seconds: 43.51,
      out_seconds: 59.98,
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "fade_black",
      transition_duration: 0.5,
      animation: "zoom-in",
    },
  ],
  overlays: [
    {
      type: "list_reveal",
      in_seconds: 0,
      out_seconds: 20,
      position: "right",
      items: [
        { text: "536 m — récord deportivo (Yisüngge)", at_seconds: 2 },
        { text: "~300 m — hostigamiento", at_seconds: 6 },
        { text: "50-150 m — combate real", at_seconds: 10 },
      ],
    },
  ],
  audio: {
    narration: { src: "video002/shorts-audio/short4-consecuencias.mp3" },
  },
};

// ---------------------------------------------------------------------------
// Short 5 — "Su descendiente, cuatro siglos más tarde" (cierre)
// Audio: 2º y 3er párrafo del bloque Legado, contiguos [389.650–451.521].
// Visual: 19a-19d/20a-20c/21/22 (transición arco de conquista → Qing/Naadam).
// El monumental_title de la nota fuente traía in_seconds:12 como
// placeholder ("timings quedan como placeholder"); aquí se sitúa sobre
// 21/22 (~64-74s), donde caen las imágenes de cierre/reveal, no sobre la
// transición inicial — a confirmar visualmente en Studio.
// ---------------------------------------------------------------------------
export const short5LegadoFixture: ExplainerProps = {
  cuts: [
    {
      id: "19a",
      source: "video002/images/19a.png",
      in_seconds: 0.0,
      out_seconds: 5.9,
      source_in_seconds: 0,
      transition_in: "fade_black",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "static",
    },
    {
      id: "19b",
      source: "video002/images/19b.png",
      in_seconds: 5.9,
      out_seconds: 18.04,
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "static",
    },
    {
      id: "19c",
      source: "video002/images/19c.png",
      in_seconds: 18.04,
      out_seconds: 24.2,
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "static",
    },
    {
      id: "19d",
      source: "video002/images/19d.png",
      in_seconds: 24.2,
      out_seconds: 34.61,
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "static",
    },
    {
      id: "20a",
      source: "video002/images/20a.png",
      in_seconds: 34.61,
      out_seconds: 44.86,
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "static",
    },
    {
      id: "20b",
      source: "video002/images/20b.png",
      in_seconds: 44.86,
      out_seconds: 51.25,
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "static",
    },
    {
      id: "20c",
      source: "video002/images/20c.png",
      in_seconds: 51.25,
      out_seconds: 63.07,
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "zoom-in",
    },
    {
      id: "21",
      source: "video002/images/21.png",
      in_seconds: 63.07,
      out_seconds: 73.95,
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "zoom-in",
    },
    {
      id: "22",
      source: "video002/images/22.png",
      in_seconds: 73.95,
      out_seconds: 82.66,
      source_in_seconds: 0,
      transition_in: "cut",
      transition_out: "fade_black",
      transition_duration: 0.5,
      animation: "static",
    },
  ],
  overlays: [
    {
      type: "monumental_title",
      in_seconds: 64,
      out_seconds: 70,
      position: "bottom-center",
      text: "El arco de Naadam",
      subtitle: "Diseño manchú Qing, s. XVII",
    },
  ],
  audio: {
    narration: { src: "video002/shorts-audio/short5-legado.mp3" },
  },
};
