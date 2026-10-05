import { ExplainerProps } from "../Explainer";

// Shorts del video 008 - "El fuego griego". Generado por
// projects/008-fuego-griego/shorts/_build_shorts.py -- no editar a mano,
// cambiar el script y regenerar. Fuente: guiones aprobados por Victor el 5 oct
// 2026 ("10-Redes Sociales/008 - Shorts del fuego griego.md", boveda Obsidian).
// Miniserie de 6 partes, tecnica "una pregunta, una respuesta" + regla del
// primer segundo. CTA SIN NARRAR: la locucion acaba en el ultimo dato y la
// tarjeta de marca lleva el texto del CTA (experimento de la campana 008).
//
// Banco de planos: SOLO imagenes y motion graphics ya aprobados del video
// largo (public/video008). Motion graphics en videoFit "contain"; cada tramo
// termina en el ultimo fotograma del clip (dato ya dibujado).
//
// Audio: narracion -1.0dBFS de pico, musica -22.0dBFS (pistas originales por
// bloque). SFX: el mismo cue de cada plano en el largo (sfx_cues.json),
// recortado, con fundidos y RMS con tope -43dBFS (solo reduce). Los motion
// graphics no llevan SFX (CLAUDE.md 35.1).
//
// Subtitulos: faster-whisper (small, es) alineado con el texto aprobado.

const THEME = {
  captionHighlightColor: "#D49A46",
  captionBackgroundColor: "rgba(14, 14, 17, 0.78)",
  captionFontSize: 54,
  captionFontFamily: "Montserrat",
  captionFontWeight: 800,
} as const;

const WATERMARK = "social-clips/source/logo-isotipo-full.png";


// ---------------------------------------------------------------------------
// Short 1 - "EL RAYO DEL CIELO" (Parte 1)
// Locucion: 008_FuegoGriego_Short1_Rayo.mp3 (40.80325s, sin CTA) + tarjeta CTA 3.0s = 43.80325s.
// Musica: 04-historia.mp3 desde 125.0s (pista original del largo, sin editar).
// ---------------------------------------------------------------------------
export const short1RayoFixture: ExplainerProps = {
  "cuts": [
    {
      "id": "3-open",
      "source": "video008/images/3.png",
      "in_seconds": 0.0,
      "out_seconds": 2.54,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "transform": {
        "position": {
          "x": 22,
          "y": 50
        }
      },
      "audioSrc": "video008/shorts-audio/sfx/processed/short1-sfx-3-open.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "2a",
      "source": "video008/images/2a.png",
      "in_seconds": 2.54,
      "out_seconds": 8.3,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video008/shorts-audio/sfx/processed/short1-sfx-2a.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "40-rus",
      "source": "video008/video/plano-40-rus-941-retimed.mp4",
      "in_seconds": 8.3,
      "out_seconds": 12.04,
      "source_in_seconds": 0.0,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      }
    },
    {
      "id": "42b",
      "source": "video008/images/42b.png",
      "in_seconds": 12.04,
      "out_seconds": 15.14,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "pan-right",
      "audioSrc": "video008/shorts-audio/sfx/processed/short1-sfx-42b.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "43a",
      "source": "video008/images/43a.png",
      "in_seconds": 15.14,
      "out_seconds": 16.64,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "transform": {
        "position": {
          "x": 60,
          "y": 50
        }
      },
      "audioSrc": "video008/shorts-audio/sfx/processed/short1-sfx-43a.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "43b-sifones",
      "source": "video008/video/plano-43b-cuatro-sifones-retimed.mp4",
      "in_seconds": 16.64,
      "out_seconds": 19.7,
      "source_in_seconds": 0.87,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      }
    },
    {
      "id": "44a",
      "source": "video008/images/44a.png",
      "in_seconds": 19.7,
      "out_seconds": 23.02,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "transform": {
        "position": {
          "x": 25,
          "y": 50
        }
      },
      "audioSrc": "video008/shorts-audio/sfx/processed/short1-sfx-44a.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "44b",
      "source": "video008/images/44b.png",
      "in_seconds": 23.02,
      "out_seconds": 27.16,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video008/shorts-audio/sfx/processed/short1-sfx-44b.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "45",
      "source": "video008/images/45.png",
      "in_seconds": 27.16,
      "out_seconds": 35.5,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "pan-left",
      "audioSrc": "video008/shorts-audio/sfx/processed/short1-sfx-45.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "46b",
      "source": "video008/images/46b.png",
      "in_seconds": 35.5,
      "out_seconds": 36.68,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video008/shorts-audio/sfx/processed/short1-sfx-46b.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "4a",
      "source": "video008/images/4a.png",
      "in_seconds": 36.68,
      "out_seconds": 40.80325,
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "backgroundColor": "transparent",
      "audioSrc": "video008/shorts-audio/sfx/processed/short1-sfx-4a.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "cta",
      "source": "",
      "type": "cta_card",
      "in_seconds": 40.80325,
      "out_seconds": 43.80325,
      "text": "Parte 2:\ncómo disparaba ese fuego\nun barco de madera\n\nSíguenos",
      "ctaStyle": {
        "textTop": 900,
        "maxFontSize": 60,
        "lastLineColor": "#E2E8F0"
      }
    }
  ],
  "overlays": [
    {
      "type": "monumental_title",
      "in_seconds": 0.0,
      "out_seconds": 3.0,
      "position": "center",
      "text": "EL RAYO\nDEL CIELO"
    },
    {
      "type": "rotulo",
      "in_seconds": 2.74,
      "out_seconds": 8.100000000000001,
      "position": "top-left",
      "variant": "label",
      "text": "BÓSFORO",
      "subtitle": "941"
    },
    {
      "type": "rotulo",
      "in_seconds": 12.239999999999998,
      "out_seconds": 19.5,
      "position": "top-left",
      "variant": "label",
      "text": "LIUDPRANDO DE CREMONA",
      "subtitle": "ANTAPODOSIS"
    },
    {
      "type": "rotulo",
      "in_seconds": 36.88,
      "out_seconds": 40.70325,
      "position": "top-left",
      "variant": "label",
      "text": "CRÓNICA DE NÉSTOR"
    }
  ],
  "watermarkSrc": WATERMARK,
  "brandBackground": true,
  "themeConfig": THEME,
  "captionsPhraseAware": true,
  "captions": [
    {
      "word": "Quince",
      "startMs": 0,
      "endMs": 380,
      "pageBreakAfter": false
    },
    {
      "word": "galeras",
      "startMs": 380,
      "endMs": 700,
      "pageBreakAfter": false
    },
    {
      "word": "viejas,",
      "startMs": 700,
      "endMs": 1160,
      "pageBreakAfter": true
    },
    {
      "word": "ya",
      "startMs": 1300,
      "endMs": 1420,
      "pageBreakAfter": false
    },
    {
      "word": "fuera",
      "startMs": 1420,
      "endMs": 1660,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 1660,
      "endMs": 1840,
      "pageBreakAfter": false
    },
    {
      "word": "servicio,",
      "startMs": 1840,
      "endMs": 2220,
      "pageBreakAfter": true
    },
    {
      "word": "fueron",
      "startMs": 2540,
      "endMs": 2700,
      "pageBreakAfter": false
    },
    {
      "word": "todo",
      "startMs": 2700,
      "endMs": 3000,
      "pageBreakAfter": false
    },
    {
      "word": "lo",
      "startMs": 3000,
      "endMs": 3180,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 3180,
      "endMs": 3300,
      "pageBreakAfter": false
    },
    {
      "word": "Constantinopla",
      "startMs": 3300,
      "endMs": 4020,
      "pageBreakAfter": true
    },
    {
      "word": "pudo",
      "startMs": 4020,
      "endMs": 4320,
      "pageBreakAfter": false
    },
    {
      "word": "oponer",
      "startMs": 4320,
      "endMs": 4680,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 4680,
      "endMs": 4840,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 4840,
      "endMs": 4920,
      "pageBreakAfter": false
    },
    {
      "word": "flota",
      "startMs": 4920,
      "endMs": 5180,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 5180,
      "endMs": 5380,
      "pageBreakAfter": false
    },
    {
      "word": "Igor",
      "startMs": 5380,
      "endMs": 5540,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 5540,
      "endMs": 5740,
      "pageBreakAfter": false
    },
    {
      "word": "Kiev",
      "startMs": 5740,
      "endMs": 5980,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 5980,
      "endMs": 6260,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 6260,
      "endMs": 6360,
      "pageBreakAfter": false
    },
    {
      "word": "año",
      "startMs": 6360,
      "endMs": 6500,
      "pageBreakAfter": false
    },
    {
      "word": "941.",
      "startMs": 6500,
      "endMs": 7540,
      "pageBreakAfter": true
    },
    {
      "word": "La",
      "startMs": 8300,
      "endMs": 8540,
      "pageBreakAfter": false
    },
    {
      "word": "armada",
      "startMs": 8540,
      "endMs": 8840,
      "pageBreakAfter": false
    },
    {
      "word": "imperial",
      "startMs": 8840,
      "endMs": 9180,
      "pageBreakAfter": false
    },
    {
      "word": "estaba",
      "startMs": 9180,
      "endMs": 9540,
      "pageBreakAfter": false
    },
    {
      "word": "lejos,",
      "startMs": 9540,
      "endMs": 9880,
      "pageBreakAfter": true
    },
    {
      "word": "combatiendo",
      "startMs": 10200,
      "endMs": 10820,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 10820,
      "endMs": 10940,
      "pageBreakAfter": false
    },
    {
      "word": "los",
      "startMs": 10940,
      "endMs": 11080,
      "pageBreakAfter": false
    },
    {
      "word": "árabes.",
      "startMs": 11080,
      "endMs": 11460,
      "pageBreakAfter": true
    },
    {
      "word": "El",
      "startMs": 12040,
      "endMs": 12160,
      "pageBreakAfter": false
    },
    {
      "word": "emperador",
      "startMs": 12160,
      "endMs": 12560,
      "pageBreakAfter": false
    },
    {
      "word": "Romano",
      "startMs": 12560,
      "endMs": 13060,
      "pageBreakAfter": false
    },
    {
      "word": "Lecapeno",
      "startMs": 13060,
      "endMs": 13660,
      "pageBreakAfter": false
    },
    {
      "word": "mandó",
      "startMs": 13660,
      "endMs": 14180,
      "pageBreakAfter": true
    },
    {
      "word": "reparar",
      "startMs": 14180,
      "endMs": 14540,
      "pageBreakAfter": false
    },
    {
      "word": "esas",
      "startMs": 14540,
      "endMs": 14760,
      "pageBreakAfter": false
    },
    {
      "word": "galeras",
      "startMs": 14760,
      "endMs": 15140,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 15140,
      "endMs": 15580,
      "pageBreakAfter": false
    },
    {
      "word": "montarles",
      "startMs": 15580,
      "endMs": 16060,
      "pageBreakAfter": true
    },
    {
      "word": "lanzafuegos",
      "startMs": 16060,
      "endMs": 16640,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 16640,
      "endMs": 16800,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 16800,
      "endMs": 16920,
      "pageBreakAfter": false
    },
    {
      "word": "proa,",
      "startMs": 16920,
      "endMs": 17240,
      "pageBreakAfter": true
    },
    {
      "word": "en",
      "startMs": 17460,
      "endMs": 17520,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 17520,
      "endMs": 17640,
      "pageBreakAfter": false
    },
    {
      "word": "popa",
      "startMs": 17640,
      "endMs": 17980,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 17980,
      "endMs": 18220,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 18220,
      "endMs": 18340,
      "pageBreakAfter": true
    },
    {
      "word": "los",
      "startMs": 18340,
      "endMs": 18460,
      "pageBreakAfter": false
    },
    {
      "word": "dos",
      "startMs": 18460,
      "endMs": 18660,
      "pageBreakAfter": false
    },
    {
      "word": "costados.",
      "startMs": 18660,
      "endMs": 19100,
      "pageBreakAfter": true
    },
    {
      "word": "Igor",
      "startMs": 19700,
      "endMs": 20000,
      "pageBreakAfter": false
    },
    {
      "word": "ordenó",
      "startMs": 20000,
      "endMs": 20540,
      "pageBreakAfter": false
    },
    {
      "word": "rodearlas",
      "startMs": 20540,
      "endMs": 21040,
      "pageBreakAfter": false
    },
    {
      "word": "para",
      "startMs": 21040,
      "endMs": 21260,
      "pageBreakAfter": false
    },
    {
      "word": "capturarlas",
      "startMs": 21260,
      "endMs": 21840,
      "pageBreakAfter": true
    },
    {
      "word": "intactas.",
      "startMs": 21840,
      "endMs": 22340,
      "pageBreakAfter": true
    },
    {
      "word": "Rodeados,",
      "startMs": 23020,
      "endMs": 23620,
      "pageBreakAfter": false
    },
    {
      "word": "los",
      "startMs": 24000,
      "endMs": 24080,
      "pageBreakAfter": false
    },
    {
      "word": "bizantinos",
      "startMs": 24080,
      "endMs": 24600,
      "pageBreakAfter": false
    },
    {
      "word": "dispararon",
      "startMs": 24600,
      "endMs": 25100,
      "pageBreakAfter": false
    },
    {
      "word": "su",
      "startMs": 25100,
      "endMs": 25300,
      "pageBreakAfter": true
    },
    {
      "word": "fuego",
      "startMs": 25300,
      "endMs": 25540,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 25540,
      "endMs": 25780,
      "pageBreakAfter": false
    },
    {
      "word": "todas",
      "startMs": 25780,
      "endMs": 26020,
      "pageBreakAfter": false
    },
    {
      "word": "direcciones.",
      "startMs": 26020,
      "endMs": 26600,
      "pageBreakAfter": true
    },
    {
      "word": "Solo",
      "startMs": 27160,
      "endMs": 27480,
      "pageBreakAfter": false
    },
    {
      "word": "se",
      "startMs": 27480,
      "endMs": 27640,
      "pageBreakAfter": false
    },
    {
      "word": "salvaron",
      "startMs": 27640,
      "endMs": 28040,
      "pageBreakAfter": false
    },
    {
      "word": "los",
      "startMs": 28040,
      "endMs": 28200,
      "pageBreakAfter": false
    },
    {
      "word": "barcos",
      "startMs": 28200,
      "endMs": 28540,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 28540,
      "endMs": 28660,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 28660,
      "endMs": 28760,
      "pageBreakAfter": false
    },
    {
      "word": "Rus",
      "startMs": 28760,
      "endMs": 28980,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 28980,
      "endMs": 29140,
      "pageBreakAfter": false
    },
    {
      "word": "alcanzaron",
      "startMs": 29140,
      "endMs": 29600,
      "pageBreakAfter": true
    },
    {
      "word": "aguas",
      "startMs": 29600,
      "endMs": 30000,
      "pageBreakAfter": false
    },
    {
      "word": "poco",
      "startMs": 30000,
      "endMs": 30160,
      "pageBreakAfter": false
    },
    {
      "word": "profundas,",
      "startMs": 30160,
      "endMs": 31220,
      "pageBreakAfter": true
    },
    {
      "word": "adonde",
      "startMs": 31300,
      "endMs": 31580,
      "pageBreakAfter": false
    },
    {
      "word": "las",
      "startMs": 31580,
      "endMs": 31780,
      "pageBreakAfter": false
    },
    {
      "word": "galeras,",
      "startMs": 31780,
      "endMs": 32140,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 32440,
      "endMs": 32620,
      "pageBreakAfter": false
    },
    {
      "word": "más",
      "startMs": 32620,
      "endMs": 32800,
      "pageBreakAfter": false
    },
    {
      "word": "calado,",
      "startMs": 32800,
      "endMs": 33180,
      "pageBreakAfter": true
    },
    {
      "word": "no",
      "startMs": 33620,
      "endMs": 33720,
      "pageBreakAfter": false
    },
    {
      "word": "podían",
      "startMs": 33720,
      "endMs": 34060,
      "pageBreakAfter": false
    },
    {
      "word": "seguirlos.",
      "startMs": 34060,
      "endMs": 34680,
      "pageBreakAfter": true
    },
    {
      "word": "Tras",
      "startMs": 35500,
      "endMs": 35780,
      "pageBreakAfter": false
    },
    {
      "word": "meses",
      "startMs": 35780,
      "endMs": 35960,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 35960,
      "endMs": 36120,
      "pageBreakAfter": false
    },
    {
      "word": "campaña,",
      "startMs": 36120,
      "endMs": 36600,
      "pageBreakAfter": true
    },
    {
      "word": "los",
      "startMs": 36680,
      "endMs": 36740,
      "pageBreakAfter": false
    },
    {
      "word": "supervivientes",
      "startMs": 36740,
      "endMs": 37400,
      "pageBreakAfter": false
    },
    {
      "word": "contaron",
      "startMs": 37400,
      "endMs": 37860,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 37860,
      "endMs": 37980,
      "pageBreakAfter": false
    },
    {
      "word": "Kiev",
      "startMs": 37980,
      "endMs": 38200,
      "pageBreakAfter": true
    },
    {
      "word": "que",
      "startMs": 38200,
      "endMs": 38700,
      "pageBreakAfter": false
    },
    {
      "word": "los",
      "startMs": 38700,
      "endMs": 38820,
      "pageBreakAfter": false
    },
    {
      "word": "griegos",
      "startMs": 38820,
      "endMs": 39140,
      "pageBreakAfter": false
    },
    {
      "word": "tenían",
      "startMs": 39140,
      "endMs": 39480,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 39480,
      "endMs": 39720,
      "pageBreakAfter": true
    },
    {
      "word": "rayo",
      "startMs": 39720,
      "endMs": 40000,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 40000,
      "endMs": 40120,
      "pageBreakAfter": false
    },
    {
      "word": "cielo.",
      "startMs": 40120,
      "endMs": 40360,
      "pageBreakAfter": true
    }
  ],
  "audio": {
    "narration": {
      "src": "video008/shorts-audio/short1-narration.mp3",
      "volume": 1.9953
    },
    "music": {
      "src": "video008/shorts-audio/short1-music.mp3",
      "volume": 0.1175,
      "fadeInSeconds": 0.5,
      "fadeOutSeconds": 1.0,
      "loop": true
    }
  }
};


// ---------------------------------------------------------------------------
// Short 2 - "BOMBEABAN EL FUEGO" (Parte 2)
// Locucion: 008_FuegoGriego_Short2_Bomba.mp3 (42.24s, sin CTA) + tarjeta CTA 3.0s = 45.24s.
// Musica: 03-objeto.mp3 desde 5.0s (pista original del largo, sin editar).
// ---------------------------------------------------------------------------
export const short2BombaFixture: ExplainerProps = {
  "cuts": [
    {
      "id": "16a-open",
      "source": "video008/images/16a.png",
      "in_seconds": 0.0,
      "out_seconds": 3.68,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "transform": {
        "position": {
          "x": 28,
          "y": 50
        }
      },
      "audioSrc": "video008/shorts-audio/sfx/processed/short2-sfx-16a-open.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "16b-pivote",
      "source": "video008/video/plano-16b-pivote-retimed.mp4",
      "in_seconds": 3.68,
      "out_seconds": 7.08,
      "source_in_seconds": 3.2,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      },
      "playbackRate": 1.0
    },
    {
      "id": "17-componentes",
      "source": "video008/video/plano-17-componentes-retimed.mp4",
      "in_seconds": 7.08,
      "out_seconds": 13.58,
      "source_in_seconds": 5.97,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      },
      "playbackRate": 0.999
    },
    {
      "id": "18-conexiones",
      "source": "video008/video/plano-18-conexiones-retimed.mp4",
      "in_seconds": 13.58,
      "out_seconds": 16.46,
      "source_in_seconds": 1.69,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      },
      "playbackRate": 0.999
    },
    {
      "id": "19-bomba",
      "source": "video008/video/plano-19-bomba-retimed.mp4",
      "in_seconds": 16.46,
      "out_seconds": 24.12,
      "source_in_seconds": 2.61,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      },
      "playbackRate": 1.0
    },
    {
      "id": "20-ctesibio",
      "source": "video008/video/plano-20-ctesibio-retimed.mp4",
      "in_seconds": 24.12,
      "out_seconds": 33.02,
      "source_in_seconds": 2.3,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      },
      "playbackRate": 1.0
    },
    {
      "id": "15",
      "source": "video008/images/15.png",
      "in_seconds": 33.02,
      "out_seconds": 42.24,
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5,
      "animation": "pan-left",
      "backgroundColor": "transparent",
      "audioSrc": "video008/shorts-audio/sfx/processed/short2-sfx-15.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "cta",
      "source": "",
      "type": "cta_card",
      "in_seconds": 42.24,
      "out_seconds": 45.24,
      "text": "Parte 3:\nquienes lo disparaban\nno sabían fabricarlo\n\nSíguenos",
      "ctaStyle": {
        "textTop": 900,
        "maxFontSize": 60,
        "lastLineColor": "#E2E8F0"
      }
    }
  ],
  "overlays": [
    {
      "type": "monumental_title",
      "in_seconds": 0.0,
      "out_seconds": 3.0,
      "position": "center",
      "text": "BOMBEABAN\nEL FUEGO"
    },
    {
      "type": "rotulo",
      "in_seconds": 16.66,
      "out_seconds": 23.92,
      "position": "top-left",
      "variant": "label",
      "text": "RECONSTRUCCIÓN DE J. HALDON",
      "subtitle": "2002"
    }
  ],
  "watermarkSrc": WATERMARK,
  "brandBackground": true,
  "themeConfig": THEME,
  "captionsPhraseAware": true,
  "captions": [
    {
      "word": "El",
      "startMs": 0,
      "endMs": 180,
      "pageBreakAfter": false
    },
    {
      "word": "fuego",
      "startMs": 180,
      "endMs": 420,
      "pageBreakAfter": false
    },
    {
      "word": "griego",
      "startMs": 420,
      "endMs": 800,
      "pageBreakAfter": false
    },
    {
      "word": "salía",
      "startMs": 800,
      "endMs": 1200,
      "pageBreakAfter": false
    },
    {
      "word": "por",
      "startMs": 1200,
      "endMs": 1420,
      "pageBreakAfter": true
    },
    {
      "word": "un",
      "startMs": 1420,
      "endMs": 1540,
      "pageBreakAfter": false
    },
    {
      "word": "tubo",
      "startMs": 1540,
      "endMs": 1800,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 1800,
      "endMs": 1900,
      "pageBreakAfter": false
    },
    {
      "word": "bronce",
      "startMs": 1900,
      "endMs": 2240,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 2240,
      "endMs": 2560,
      "pageBreakAfter": true
    },
    {
      "word": "la",
      "startMs": 2560,
      "endMs": 2660,
      "pageBreakAfter": false
    },
    {
      "word": "proa",
      "startMs": 2660,
      "endMs": 2940,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 2940,
      "endMs": 3080,
      "pageBreakAfter": false
    },
    {
      "word": "dromon,",
      "startMs": 3080,
      "endMs": 3500,
      "pageBreakAfter": true
    },
    {
      "word": "sobre",
      "startMs": 3680,
      "endMs": 4140,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 4140,
      "endMs": 4320,
      "pageBreakAfter": false
    },
    {
      "word": "pivote",
      "startMs": 4320,
      "endMs": 4640,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 4640,
      "endMs": 4840,
      "pageBreakAfter": false
    },
    {
      "word": "los",
      "startMs": 4840,
      "endMs": 4980,
      "pageBreakAfter": true
    },
    {
      "word": "operarios",
      "startMs": 4980,
      "endMs": 5400,
      "pageBreakAfter": false
    },
    {
      "word": "giraban",
      "startMs": 5400,
      "endMs": 5840,
      "pageBreakAfter": false
    },
    {
      "word": "para",
      "startMs": 5840,
      "endMs": 6040,
      "pageBreakAfter": false
    },
    {
      "word": "apuntar.",
      "startMs": 6040,
      "endMs": 6520,
      "pageBreakAfter": true
    },
    {
      "word": "Detrás,",
      "startMs": 7080,
      "endMs": 7440,
      "pageBreakAfter": false
    },
    {
      "word": "las",
      "startMs": 7940,
      "endMs": 8080,
      "pageBreakAfter": false
    },
    {
      "word": "fuentes",
      "startMs": 8080,
      "endMs": 8400,
      "pageBreakAfter": false
    },
    {
      "word": "citan",
      "startMs": 8400,
      "endMs": 8860,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 8860,
      "endMs": 9080,
      "pageBreakAfter": true
    },
    {
      "word": "caldero",
      "startMs": 9080,
      "endMs": 9520,
      "pageBreakAfter": false
    },
    {
      "word": "donde",
      "startMs": 9520,
      "endMs": 9740,
      "pageBreakAfter": false
    },
    {
      "word": "se",
      "startMs": 9740,
      "endMs": 9940,
      "pageBreakAfter": false
    },
    {
      "word": "calentaba",
      "startMs": 9940,
      "endMs": 10400,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 10400,
      "endMs": 10560,
      "pageBreakAfter": true
    },
    {
      "word": "líquido,",
      "startMs": 10560,
      "endMs": 10840,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 11200,
      "endMs": 11360,
      "pageBreakAfter": false
    },
    {
      "word": "brasero",
      "startMs": 11360,
      "endMs": 11740,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 11740,
      "endMs": 12160,
      "pageBreakAfter": false
    },
    {
      "word": "una",
      "startMs": 12160,
      "endMs": 12340,
      "pageBreakAfter": true
    },
    {
      "word": "bomba.",
      "startMs": 12340,
      "endMs": 12680,
      "pageBreakAfter": true
    },
    {
      "word": "Ningún",
      "startMs": 13580,
      "endMs": 14040,
      "pageBreakAfter": false
    },
    {
      "word": "texto",
      "startMs": 14040,
      "endMs": 14300,
      "pageBreakAfter": false
    },
    {
      "word": "explica",
      "startMs": 14300,
      "endMs": 14800,
      "pageBreakAfter": false
    },
    {
      "word": "cómo",
      "startMs": 14800,
      "endMs": 15040,
      "pageBreakAfter": false
    },
    {
      "word": "encajaban.",
      "startMs": 15040,
      "endMs": 15540,
      "pageBreakAfter": true
    },
    {
      "word": "En",
      "startMs": 16460,
      "endMs": 16740,
      "pageBreakAfter": false
    },
    {
      "word": "2002,",
      "startMs": 16740,
      "endMs": 17240,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 17820,
      "endMs": 17880,
      "pageBreakAfter": false
    },
    {
      "word": "historiador",
      "startMs": 17880,
      "endMs": 18300,
      "pageBreakAfter": false
    },
    {
      "word": "John",
      "startMs": 18300,
      "endMs": 18580,
      "pageBreakAfter": false
    },
    {
      "word": "Haldon",
      "startMs": 18580,
      "endMs": 19040,
      "pageBreakAfter": false
    },
    {
      "word": "probó",
      "startMs": 19040,
      "endMs": 19700,
      "pageBreakAfter": true
    },
    {
      "word": "a",
      "startMs": 19700,
      "endMs": 19860,
      "pageBreakAfter": false
    },
    {
      "word": "escala",
      "startMs": 19860,
      "endMs": 20120,
      "pageBreakAfter": false
    },
    {
      "word": "real",
      "startMs": 20120,
      "endMs": 20420,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 20420,
      "endMs": 20560,
      "pageBreakAfter": false
    },
    {
      "word": "reconstrucción",
      "startMs": 20560,
      "endMs": 21260,
      "pageBreakAfter": true
    },
    {
      "word": "más",
      "startMs": 21260,
      "endMs": 21500,
      "pageBreakAfter": false
    },
    {
      "word": "sólida:",
      "startMs": 21500,
      "endMs": 21940,
      "pageBreakAfter": true
    },
    {
      "word": "una",
      "startMs": 22420,
      "endMs": 22620,
      "pageBreakAfter": false
    },
    {
      "word": "bomba",
      "startMs": 22620,
      "endMs": 22920,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 22920,
      "endMs": 23020,
      "pageBreakAfter": false
    },
    {
      "word": "doble",
      "startMs": 23020,
      "endMs": 23280,
      "pageBreakAfter": false
    },
    {
      "word": "cilindro,",
      "startMs": 23280,
      "endMs": 23740,
      "pageBreakAfter": true
    },
    {
      "word": "como",
      "startMs": 24120,
      "endMs": 24300,
      "pageBreakAfter": false
    },
    {
      "word": "las",
      "startMs": 24300,
      "endMs": 24480,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 24480,
      "endMs": 24620,
      "pageBreakAfter": false
    },
    {
      "word": "siglos",
      "startMs": 24620,
      "endMs": 24900,
      "pageBreakAfter": false
    },
    {
      "word": "antes",
      "startMs": 24900,
      "endMs": 25180,
      "pageBreakAfter": true
    },
    {
      "word": "describieron",
      "startMs": 25180,
      "endMs": 25780,
      "pageBreakAfter": false
    },
    {
      "word": "los",
      "startMs": 25780,
      "endMs": 25960,
      "pageBreakAfter": false
    },
    {
      "word": "ingenieros",
      "startMs": 25960,
      "endMs": 26500,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 26500,
      "endMs": 26600,
      "pageBreakAfter": false
    },
    {
      "word": "Alejandría",
      "startMs": 26600,
      "endMs": 27100,
      "pageBreakAfter": true
    },
    {
      "word": "para",
      "startMs": 27100,
      "endMs": 27360,
      "pageBreakAfter": false
    },
    {
      "word": "mover",
      "startMs": 27360,
      "endMs": 27580,
      "pageBreakAfter": false
    },
    {
      "word": "agua.",
      "startMs": 27580,
      "endMs": 27840,
      "pageBreakAfter": true
    },
    {
      "word": "Sus",
      "startMs": 28320,
      "endMs": 28620,
      "pageBreakAfter": false
    },
    {
      "word": "dos",
      "startMs": 28620,
      "endMs": 28820,
      "pageBreakAfter": false
    },
    {
      "word": "pistones,",
      "startMs": 28820,
      "endMs": 29280,
      "pageBreakAfter": true
    },
    {
      "word": "alternos,",
      "startMs": 29540,
      "endMs": 30040,
      "pageBreakAfter": false
    },
    {
      "word": "empujan",
      "startMs": 30400,
      "endMs": 30880,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 30880,
      "endMs": 30980,
      "pageBreakAfter": false
    },
    {
      "word": "líquido",
      "startMs": 30980,
      "endMs": 31300,
      "pageBreakAfter": false
    },
    {
      "word": "caliente",
      "startMs": 31300,
      "endMs": 31720,
      "pageBreakAfter": true
    },
    {
      "word": "hacia",
      "startMs": 31720,
      "endMs": 31920,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 31920,
      "endMs": 32080,
      "pageBreakAfter": false
    },
    {
      "word": "boquilla.",
      "startMs": 32080,
      "endMs": 32480,
      "pageBreakAfter": true
    },
    {
      "word": "Para",
      "startMs": 33020,
      "endMs": 33280,
      "pageBreakAfter": false
    },
    {
      "word": "Haldon,",
      "startMs": 33280,
      "endMs": 33720,
      "pageBreakAfter": true
    },
    {
      "word": "casi",
      "startMs": 34100,
      "endMs": 34260,
      "pageBreakAfter": false
    },
    {
      "word": "toda",
      "startMs": 34260,
      "endMs": 34500,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 34500,
      "endMs": 34640,
      "pageBreakAfter": false
    },
    {
      "word": "fuerza",
      "startMs": 34640,
      "endMs": 34860,
      "pageBreakAfter": false
    },
    {
      "word": "salía",
      "startMs": 34860,
      "endMs": 35340,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 35340,
      "endMs": 35500,
      "pageBreakAfter": false
    },
    {
      "word": "esa",
      "startMs": 35500,
      "endMs": 35660,
      "pageBreakAfter": false
    },
    {
      "word": "bomba",
      "startMs": 35660,
      "endMs": 36000,
      "pageBreakAfter": false
    },
    {
      "word": "manual.",
      "startMs": 36000,
      "endMs": 36260,
      "pageBreakAfter": true
    },
    {
      "word": "Calentar",
      "startMs": 36900,
      "endMs": 37280,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 37280,
      "endMs": 37440,
      "pageBreakAfter": false
    },
    {
      "word": "depósito",
      "startMs": 37440,
      "endMs": 37880,
      "pageBreakAfter": false
    },
    {
      "word": "cerrado",
      "startMs": 37880,
      "endMs": 38320,
      "pageBreakAfter": false
    },
    {
      "word": "hasta",
      "startMs": 38320,
      "endMs": 38620,
      "pageBreakAfter": true
    },
    {
      "word": "darle",
      "startMs": 38620,
      "endMs": 38880,
      "pageBreakAfter": false
    },
    {
      "word": "presión",
      "startMs": 38880,
      "endMs": 39320,
      "pageBreakAfter": false
    },
    {
      "word": "habría",
      "startMs": 39320,
      "endMs": 39640,
      "pageBreakAfter": false
    },
    {
      "word": "sido",
      "startMs": 39640,
      "endMs": 39860,
      "pageBreakAfter": false
    },
    {
      "word": "demasiado",
      "startMs": 39860,
      "endMs": 40160,
      "pageBreakAfter": true
    },
    {
      "word": "peligroso",
      "startMs": 40160,
      "endMs": 40960,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 40960,
      "endMs": 41040,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 41040,
      "endMs": 41140,
      "pageBreakAfter": false
    },
    {
      "word": "barco",
      "startMs": 41140,
      "endMs": 41440,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 41440,
      "endMs": 41540,
      "pageBreakAfter": true
    },
    {
      "word": "madera.",
      "startMs": 41540,
      "endMs": 41840,
      "pageBreakAfter": true
    }
  ],
  "audio": {
    "narration": {
      "src": "video008/shorts-audio/short2-narration.mp3",
      "volume": 1.6406
    },
    "music": {
      "src": "video008/shorts-audio/short2-music.mp3",
      "volume": 0.1109,
      "fadeInSeconds": 0.5,
      "fadeOutSeconds": 1.0,
      "loop": true
    }
  }
};


// ---------------------------------------------------------------------------
// Short 3 - "UN SECRETO EN TRES PIEZAS" (Parte 3)
// Locucion: 008_FuegoGriego_Short3_Secreto.mp3 (39.784438s, sin CTA) + tarjeta CTA 3.0s = 42.784438s.
// Musica: 04-historia.mp3 desde 30.0s (pista original del largo, sin editar).
// ---------------------------------------------------------------------------
export const short3SecretoFixture: ExplainerProps = {
  "cuts": [
    {
      "id": "5-open",
      "source": "video008/images/5-short.png",
      "in_seconds": 0.0,
      "out_seconds": 3.38,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "transform": {
        "position": {
          "x": 58,
          "y": 50
        }
      },
      "audioSrc": "video008/shorts-audio/sfx/processed/short3-sfx-5-open.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "29-grupos",
      "source": "video008/video/plano-29-tres-grupos-retimed.mp4",
      "in_seconds": 3.38,
      "out_seconds": 18.06,
      "source_in_seconds": 1.32,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      }
    },
    {
      "id": "35",
      "source": "video008/images/35.png",
      "in_seconds": 18.06,
      "out_seconds": 20.98,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video008/shorts-audio/sfx/processed/short3-sfx-35.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "36-flotas",
      "source": "video008/video/plano-36-flotas-retimed.mp4",
      "in_seconds": 20.98,
      "out_seconds": 23.56,
      "source_in_seconds": 4.59,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      },
      "playbackRate": 0.999
    },
    {
      "id": "37",
      "source": "video008/images/37.png",
      "in_seconds": 23.56,
      "out_seconds": 27.94,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "transform": {
        "position": {
          "x": 30,
          "y": 50
        }
      },
      "audioSrc": "video008/shorts-audio/sfx/processed/short3-sfx-37.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "38",
      "source": "video008/images/38.png",
      "in_seconds": 27.94,
      "out_seconds": 36.98,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "pan-right",
      "transform": {
        "position": {
          "x": 45,
          "y": 50
        }
      },
      "audioSrc": "video008/shorts-audio/sfx/processed/short3-sfx-38.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "39",
      "source": "video008/images/39.png",
      "in_seconds": 36.98,
      "out_seconds": 39.784438,
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "backgroundColor": "transparent",
      "audioSrc": "video008/shorts-audio/sfx/processed/short3-sfx-39.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "cta",
      "source": "",
      "type": "cta_card",
      "in_seconds": 39.784438,
      "out_seconds": 42.784438,
      "text": "Parte 4:\nlo que el emperador\nmandaba responder\na los extranjeros\n\nSíguenos",
      "ctaStyle": {
        "textTop": 900,
        "maxFontSize": 60,
        "lastLineColor": "#E2E8F0"
      }
    }
  ],
  "overlays": [
    {
      "type": "monumental_title",
      "in_seconds": 0.0,
      "out_seconds": 3.0,
      "position": "center",
      "text": "UN SECRETO\nEN TRES PIEZAS"
    },
    {
      "type": "rotulo",
      "in_seconds": 28.14,
      "out_seconds": 36.779999999999994,
      "position": "top-left",
      "variant": "label",
      "text": "MESEMBRIA",
      "subtitle": "812"
    }
  ],
  "watermarkSrc": WATERMARK,
  "brandBackground": true,
  "themeConfig": THEME,
  "captionsPhraseAware": true,
  "captions": [
    {
      "word": "Los",
      "startMs": 0,
      "endMs": 160,
      "pageBreakAfter": false
    },
    {
      "word": "hombres",
      "startMs": 160,
      "endMs": 420,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 420,
      "endMs": 600,
      "pageBreakAfter": false
    },
    {
      "word": "disparaban",
      "startMs": 600,
      "endMs": 1060,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 1060,
      "endMs": 1220,
      "pageBreakAfter": true
    },
    {
      "word": "fuego",
      "startMs": 1220,
      "endMs": 1380,
      "pageBreakAfter": false
    },
    {
      "word": "griego",
      "startMs": 1380,
      "endMs": 1780,
      "pageBreakAfter": false
    },
    {
      "word": "no",
      "startMs": 1780,
      "endMs": 2040,
      "pageBreakAfter": false
    },
    {
      "word": "sabían",
      "startMs": 2040,
      "endMs": 2360,
      "pageBreakAfter": false
    },
    {
      "word": "fabricarlo.",
      "startMs": 2360,
      "endMs": 2900,
      "pageBreakAfter": true
    },
    {
      "word": "Bizancio",
      "startMs": 3380,
      "endMs": 3880,
      "pageBreakAfter": false
    },
    {
      "word": "repartió",
      "startMs": 3880,
      "endMs": 4360,
      "pageBreakAfter": false
    },
    {
      "word": "su",
      "startMs": 4360,
      "endMs": 4520,
      "pageBreakAfter": false
    },
    {
      "word": "producción",
      "startMs": 4520,
      "endMs": 4900,
      "pageBreakAfter": false
    },
    {
      "word": "entre",
      "startMs": 4900,
      "endMs": 5240,
      "pageBreakAfter": true
    },
    {
      "word": "grupos",
      "startMs": 5240,
      "endMs": 5520,
      "pageBreakAfter": false
    },
    {
      "word": "separados.",
      "startMs": 5520,
      "endMs": 6020,
      "pageBreakAfter": true
    },
    {
      "word": "Uno",
      "startMs": 6560,
      "endMs": 6740,
      "pageBreakAfter": false
    },
    {
      "word": "preparaba",
      "startMs": 6740,
      "endMs": 7240,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 7240,
      "endMs": 7380,
      "pageBreakAfter": false
    },
    {
      "word": "compuesto",
      "startMs": 7380,
      "endMs": 7820,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 7820,
      "endMs": 8000,
      "pageBreakAfter": true
    },
    {
      "word": "los",
      "startMs": 8000,
      "endMs": 8100,
      "pageBreakAfter": false
    },
    {
      "word": "arsenales",
      "startMs": 8100,
      "endMs": 8660,
      "pageBreakAfter": false
    },
    {
      "word": "imperiales,",
      "startMs": 8660,
      "endMs": 9180,
      "pageBreakAfter": true
    },
    {
      "word": "otro",
      "startMs": 9500,
      "endMs": 9680,
      "pageBreakAfter": false
    },
    {
      "word": "construía",
      "startMs": 9680,
      "endMs": 10140,
      "pageBreakAfter": false
    },
    {
      "word": "los",
      "startMs": 10140,
      "endMs": 10280,
      "pageBreakAfter": false
    },
    {
      "word": "barcos",
      "startMs": 10280,
      "endMs": 10620,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 10620,
      "endMs": 10740,
      "pageBreakAfter": true
    },
    {
      "word": "las",
      "startMs": 10740,
      "endMs": 10900,
      "pageBreakAfter": false
    },
    {
      "word": "calderas,",
      "startMs": 10900,
      "endMs": 11280,
      "pageBreakAfter": true
    },
    {
      "word": "y",
      "startMs": 11580,
      "endMs": 11740,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 11740,
      "endMs": 11880,
      "pageBreakAfter": false
    },
    {
      "word": "tercero",
      "startMs": 11880,
      "endMs": 12320,
      "pageBreakAfter": false
    },
    {
      "word": "adiestraba",
      "startMs": 12320,
      "endMs": 12900,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 12900,
      "endMs": 13180,
      "pageBreakAfter": true
    },
    {
      "word": "quienes",
      "startMs": 13180,
      "endMs": 13320,
      "pageBreakAfter": false
    },
    {
      "word": "lo",
      "startMs": 13320,
      "endMs": 13500,
      "pageBreakAfter": false
    },
    {
      "word": "disparaban,",
      "startMs": 13500,
      "endMs": 14000,
      "pageBreakAfter": true
    },
    {
      "word": "los",
      "startMs": 14320,
      "endMs": 14420,
      "pageBreakAfter": false
    },
    {
      "word": "sifonatores.",
      "startMs": 14420,
      "endMs": 15040,
      "pageBreakAfter": true
    },
    {
      "word": "Ninguno",
      "startMs": 15720,
      "endMs": 16180,
      "pageBreakAfter": false
    },
    {
      "word": "conocía",
      "startMs": 16180,
      "endMs": 16660,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 16660,
      "endMs": 16800,
      "pageBreakAfter": false
    },
    {
      "word": "proceso",
      "startMs": 16800,
      "endMs": 17080,
      "pageBreakAfter": false
    },
    {
      "word": "entero.",
      "startMs": 17080,
      "endMs": 17460,
      "pageBreakAfter": true
    },
    {
      "word": "El",
      "startMs": 18060,
      "endMs": 18180,
      "pageBreakAfter": false
    },
    {
      "word": "arma",
      "startMs": 18180,
      "endMs": 18340,
      "pageBreakAfter": false
    },
    {
      "word": "se",
      "startMs": 18340,
      "endMs": 18520,
      "pageBreakAfter": false
    },
    {
      "word": "quedaba",
      "startMs": 18520,
      "endMs": 18840,
      "pageBreakAfter": false
    },
    {
      "word": "casi",
      "startMs": 18840,
      "endMs": 19060,
      "pageBreakAfter": true
    },
    {
      "word": "siempre",
      "startMs": 19060,
      "endMs": 19440,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 19440,
      "endMs": 19620,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 19620,
      "endMs": 19740,
      "pageBreakAfter": false
    },
    {
      "word": "flota",
      "startMs": 19740,
      "endMs": 19980,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 19980,
      "endMs": 20160,
      "pageBreakAfter": true
    },
    {
      "word": "defendía",
      "startMs": 20160,
      "endMs": 20600,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 20600,
      "endMs": 20700,
      "pageBreakAfter": false
    },
    {
      "word": "capital",
      "startMs": 20700,
      "endMs": 20980,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 20980,
      "endMs": 21580,
      "pageBreakAfter": false
    },
    {
      "word": "rara",
      "startMs": 21580,
      "endMs": 21720,
      "pageBreakAfter": true
    },
    {
      "word": "vez",
      "startMs": 21720,
      "endMs": 21940,
      "pageBreakAfter": false
    },
    {
      "word": "llegaba",
      "startMs": 21940,
      "endMs": 22280,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 22280,
      "endMs": 22420,
      "pageBreakAfter": false
    },
    {
      "word": "las",
      "startMs": 22420,
      "endMs": 22560,
      "pageBreakAfter": false
    },
    {
      "word": "provincias.",
      "startMs": 22560,
      "endMs": 23000,
      "pageBreakAfter": true
    },
    {
      "word": "Se",
      "startMs": 23560,
      "endMs": 23760,
      "pageBreakAfter": false
    },
    {
      "word": "temía",
      "startMs": 23760,
      "endMs": 24040,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 24040,
      "endMs": 24200,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 24200,
      "endMs": 24340,
      "pageBreakAfter": false
    },
    {
      "word": "gobernador",
      "startMs": 24340,
      "endMs": 24780,
      "pageBreakAfter": true
    },
    {
      "word": "con",
      "startMs": 24780,
      "endMs": 25000,
      "pageBreakAfter": false
    },
    {
      "word": "sifones",
      "startMs": 25000,
      "endMs": 25340,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 25340,
      "endMs": 25560,
      "pageBreakAfter": false
    },
    {
      "word": "sus",
      "startMs": 25560,
      "endMs": 25680,
      "pageBreakAfter": false
    },
    {
      "word": "barcos",
      "startMs": 25680,
      "endMs": 26080,
      "pageBreakAfter": true
    },
    {
      "word": "los",
      "startMs": 26080,
      "endMs": 26360,
      "pageBreakAfter": false
    },
    {
      "word": "volviera",
      "startMs": 26360,
      "endMs": 26700,
      "pageBreakAfter": false
    },
    {
      "word": "contra",
      "startMs": 26700,
      "endMs": 27020,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 27020,
      "endMs": 27220,
      "pageBreakAfter": false
    },
    {
      "word": "emperador.",
      "startMs": 27220,
      "endMs": 27640,
      "pageBreakAfter": true
    },
    {
      "word": "En",
      "startMs": 27940,
      "endMs": 28320,
      "pageBreakAfter": false
    },
    {
      "word": "812,",
      "startMs": 28320,
      "endMs": 29040,
      "pageBreakAfter": true
    },
    {
      "word": "los",
      "startMs": 29600,
      "endMs": 29720,
      "pageBreakAfter": false
    },
    {
      "word": "búlgaros",
      "startMs": 29720,
      "endMs": 30140,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 30140,
      "endMs": 30240,
      "pageBreakAfter": false
    },
    {
      "word": "kan",
      "startMs": 30240,
      "endMs": 30520,
      "pageBreakAfter": false
    },
    {
      "word": "Krum",
      "startMs": 30520,
      "endMs": 30800,
      "pageBreakAfter": true
    },
    {
      "word": "tomaron",
      "startMs": 30800,
      "endMs": 31420,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 31420,
      "endMs": 31560,
      "pageBreakAfter": false
    },
    {
      "word": "fortaleza",
      "startMs": 31560,
      "endMs": 32060,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 32060,
      "endMs": 32160,
      "pageBreakAfter": false
    },
    {
      "word": "Mesembria",
      "startMs": 32160,
      "endMs": 32720,
      "pageBreakAfter": true
    },
    {
      "word": "y",
      "startMs": 32720,
      "endMs": 33200,
      "pageBreakAfter": false
    },
    {
      "word": "encontraron",
      "startMs": 33200,
      "endMs": 33780,
      "pageBreakAfter": false
    },
    {
      "word": "36",
      "startMs": 33780,
      "endMs": 34200,
      "pageBreakAfter": false
    },
    {
      "word": "sifones",
      "startMs": 34200,
      "endMs": 34920,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 34920,
      "endMs": 35080,
      "pageBreakAfter": true
    },
    {
      "word": "bronce",
      "startMs": 35080,
      "endMs": 35420,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 35420,
      "endMs": 35500,
      "pageBreakAfter": false
    },
    {
      "word": "depósitos",
      "startMs": 35500,
      "endMs": 35940,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 35940,
      "endMs": 36120,
      "pageBreakAfter": false
    },
    {
      "word": "líquido.",
      "startMs": 36120,
      "endMs": 36500,
      "pageBreakAfter": true
    },
    {
      "word": "No",
      "startMs": 36980,
      "endMs": 37200,
      "pageBreakAfter": false
    },
    {
      "word": "hay",
      "startMs": 37200,
      "endMs": 37340,
      "pageBreakAfter": false
    },
    {
      "word": "constancia",
      "startMs": 37340,
      "endMs": 37920,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 37920,
      "endMs": 38380,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 38380,
      "endMs": 38500,
      "pageBreakAfter": true
    },
    {
      "word": "llegaran",
      "startMs": 38500,
      "endMs": 38860,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 38860,
      "endMs": 38980,
      "pageBreakAfter": false
    },
    {
      "word": "usarlos.",
      "startMs": 38980,
      "endMs": 39360,
      "pageBreakAfter": true
    }
  ],
  "audio": {
    "narration": {
      "src": "video008/shorts-audio/short3-narration.mp3",
      "volume": 1.5311
    },
    "music": {
      "src": "video008/shorts-audio/short3-music.mp3",
      "volume": 0.1274,
      "fadeInSeconds": 0.5,
      "fadeOutSeconds": 1.0,
      "loop": true
    }
  }
};


// ---------------------------------------------------------------------------
// Short 4 - "UN ANGEL Y UNA MALDICION" (Parte 4)
// Locucion: 008_FuegoGriego_Short4_Leyenda.mp3 (39.053063s, sin CTA) + tarjeta CTA 3.0s = 42.053063s.
// Musica: 04-historia.mp3 desde 50.0s (pista original del largo, sin editar).
// ---------------------------------------------------------------------------
export const short4LeyendaFixture: ExplainerProps = {
  "cuts": [
    {
      "id": "32-open",
      "source": "video008/images/32.png",
      "in_seconds": 0.0,
      "out_seconds": 6.06,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "transform": {
        "position": {
          "x": 40,
          "y": 50
        }
      },
      "audioSrc": "video008/shorts-audio/sfx/processed/short4-sfx-32-open.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "33a",
      "source": "video008/images/33a.png",
      "in_seconds": 6.06,
      "out_seconds": 14.76,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "transform": {
        "position": {
          "x": 28,
          "y": 50
        }
      },
      "audioSrc": "video008/shorts-audio/sfx/processed/short4-sfx-33a.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "33b",
      "source": "video008/images/33b.png",
      "in_seconds": 14.76,
      "out_seconds": 20.78,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video008/shorts-audio/sfx/processed/short4-sfx-33b.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "34a",
      "source": "video008/images/34a.png",
      "in_seconds": 20.78,
      "out_seconds": 28.92,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "transform": {
        "position": {
          "x": 40,
          "y": 50
        }
      },
      "audioSrc": "video008/shorts-audio/sfx/processed/short4-sfx-34a.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "34b",
      "source": "video008/images/34b.png",
      "in_seconds": 28.92,
      "out_seconds": 33.58,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video008/shorts-audio/sfx/processed/short4-sfx-34b.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "25a-codice",
      "source": "video008/images/25a.png",
      "in_seconds": 33.58,
      "out_seconds": 39.053063,
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "backgroundColor": "transparent",
      "audioSrc": "video008/shorts-audio/sfx/processed/short4-sfx-25a-codice.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "cta",
      "source": "",
      "type": "cta_card",
      "in_seconds": 39.053063,
      "out_seconds": 42.053063,
      "text": "Parte 5:\nlo que el arma\nnecesitaba\npara funcionar\n\nSíguenos",
      "ctaStyle": {
        "textTop": 900,
        "maxFontSize": 60,
        "lastLineColor": "#E2E8F0"
      }
    }
  ],
  "overlays": [
    {
      "type": "monumental_title",
      "in_seconds": 0.0,
      "out_seconds": 3.0,
      "position": "center",
      "text": "UN ÁNGEL Y\nUNA MALDICIÓN"
    },
    {
      "type": "rotulo",
      "in_seconds": 6.26,
      "out_seconds": 33.379999999999995,
      "position": "top-left",
      "variant": "label",
      "text": "LEYENDA OFICIAL",
      "subtitle": "DE ADMINISTRANDO IMPERIO, CAP. 13"
    }
  ],
  "watermarkSrc": WATERMARK,
  "brandBackground": true,
  "themeConfig": THEME,
  "captionsPhraseAware": true,
  "captions": [
    {
      "word": "Constantino",
      "startMs": 0,
      "endMs": 600,
      "pageBreakAfter": false
    },
    {
      "word": "VII",
      "startMs": 600,
      "endMs": 840,
      "pageBreakAfter": false
    },
    {
      "word": "dejó",
      "startMs": 840,
      "endMs": 1480,
      "pageBreakAfter": false
    },
    {
      "word": "escrito",
      "startMs": 1480,
      "endMs": 1800,
      "pageBreakAfter": false
    },
    {
      "word": "para",
      "startMs": 1800,
      "endMs": 2020,
      "pageBreakAfter": true
    },
    {
      "word": "su",
      "startMs": 2020,
      "endMs": 2220,
      "pageBreakAfter": false
    },
    {
      "word": "hijo",
      "startMs": 2220,
      "endMs": 2400,
      "pageBreakAfter": false
    },
    {
      "word": "qué",
      "startMs": 2400,
      "endMs": 2640,
      "pageBreakAfter": false
    },
    {
      "word": "responder",
      "startMs": 2640,
      "endMs": 3060,
      "pageBreakAfter": false
    },
    {
      "word": "si",
      "startMs": 3060,
      "endMs": 3420,
      "pageBreakAfter": true
    },
    {
      "word": "un",
      "startMs": 3420,
      "endMs": 3580,
      "pageBreakAfter": false
    },
    {
      "word": "pueblo",
      "startMs": 3580,
      "endMs": 3780,
      "pageBreakAfter": false
    },
    {
      "word": "extranjero",
      "startMs": 3780,
      "endMs": 4420,
      "pageBreakAfter": false
    },
    {
      "word": "pedía",
      "startMs": 4420,
      "endMs": 4940,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 4940,
      "endMs": 5080,
      "pageBreakAfter": true
    },
    {
      "word": "fuego",
      "startMs": 5080,
      "endMs": 5280,
      "pageBreakAfter": false
    },
    {
      "word": "griego.",
      "startMs": 5280,
      "endMs": 5780,
      "pageBreakAfter": true
    },
    {
      "word": "Debía",
      "startMs": 6060,
      "endMs": 6480,
      "pageBreakAfter": false
    },
    {
      "word": "decir",
      "startMs": 6480,
      "endMs": 6780,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 6780,
      "endMs": 7000,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 7000,
      "endMs": 7180,
      "pageBreakAfter": false
    },
    {
      "word": "ángel",
      "startMs": 7180,
      "endMs": 7480,
      "pageBreakAfter": true
    },
    {
      "word": "se",
      "startMs": 7480,
      "endMs": 7900,
      "pageBreakAfter": false
    },
    {
      "word": "lo",
      "startMs": 7900,
      "endMs": 8000,
      "pageBreakAfter": false
    },
    {
      "word": "había",
      "startMs": 8000,
      "endMs": 8220,
      "pageBreakAfter": false
    },
    {
      "word": "revelado",
      "startMs": 8220,
      "endMs": 8700,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 8700,
      "endMs": 8820,
      "pageBreakAfter": true
    },
    {
      "word": "Constantino",
      "startMs": 8820,
      "endMs": 9460,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 9460,
      "endMs": 9560,
      "pageBreakAfter": false
    },
    {
      "word": "Grande,",
      "startMs": 9560,
      "endMs": 9800,
      "pageBreakAfter": true
    },
    {
      "word": "con",
      "startMs": 10260,
      "endMs": 10460,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 10460,
      "endMs": 10600,
      "pageBreakAfter": false
    },
    {
      "word": "orden",
      "startMs": 10600,
      "endMs": 10840,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 10840,
      "endMs": 11020,
      "pageBreakAfter": false
    },
    {
      "word": "fabricarlo",
      "startMs": 11020,
      "endMs": 11520,
      "pageBreakAfter": true
    },
    {
      "word": "solo",
      "startMs": 11520,
      "endMs": 11800,
      "pageBreakAfter": false
    },
    {
      "word": "entre",
      "startMs": 11800,
      "endMs": 12080,
      "pageBreakAfter": false
    },
    {
      "word": "cristianos",
      "startMs": 12080,
      "endMs": 12740,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 12740,
      "endMs": 12980,
      "pageBreakAfter": false
    },
    {
      "word": "solo",
      "startMs": 12980,
      "endMs": 13180,
      "pageBreakAfter": true
    },
    {
      "word": "en",
      "startMs": 13180,
      "endMs": 13300,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 13300,
      "endMs": 13420,
      "pageBreakAfter": false
    },
    {
      "word": "ciudad",
      "startMs": 13420,
      "endMs": 13640,
      "pageBreakAfter": false
    },
    {
      "word": "imperial.",
      "startMs": 13640,
      "endMs": 14080,
      "pageBreakAfter": true
    },
    {
      "word": "Y",
      "startMs": 14760,
      "endMs": 14900,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 14900,
      "endMs": 15000,
      "pageBreakAfter": false
    },
    {
      "word": "Constantino",
      "startMs": 15000,
      "endMs": 15540,
      "pageBreakAfter": false
    },
    {
      "word": "había",
      "startMs": 15540,
      "endMs": 15760,
      "pageBreakAfter": false
    },
    {
      "word": "mandado",
      "startMs": 15760,
      "endMs": 16160,
      "pageBreakAfter": true
    },
    {
      "word": "grabar",
      "startMs": 16160,
      "endMs": 16500,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 16500,
      "endMs": 16640,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 16640,
      "endMs": 16740,
      "pageBreakAfter": false
    },
    {
      "word": "altar",
      "startMs": 16740,
      "endMs": 17000,
      "pageBreakAfter": false
    },
    {
      "word": "una",
      "startMs": 17000,
      "endMs": 17400,
      "pageBreakAfter": true
    },
    {
      "word": "maldición",
      "startMs": 17400,
      "endMs": 17860,
      "pageBreakAfter": false
    },
    {
      "word": "contra",
      "startMs": 17860,
      "endMs": 18260,
      "pageBreakAfter": false
    },
    {
      "word": "quien",
      "startMs": 18260,
      "endMs": 18460,
      "pageBreakAfter": false
    },
    {
      "word": "lo",
      "startMs": 18460,
      "endMs": 18620,
      "pageBreakAfter": false
    },
    {
      "word": "entregara",
      "startMs": 18620,
      "endMs": 19080,
      "pageBreakAfter": true
    },
    {
      "word": "a",
      "startMs": 19080,
      "endMs": 19240,
      "pageBreakAfter": false
    },
    {
      "word": "otro",
      "startMs": 19240,
      "endMs": 19440,
      "pageBreakAfter": false
    },
    {
      "word": "pueblo.",
      "startMs": 19440,
      "endMs": 19780,
      "pageBreakAfter": true
    },
    {
      "word": "La",
      "startMs": 20780,
      "endMs": 21060,
      "pageBreakAfter": false
    },
    {
      "word": "respuesta",
      "startMs": 21060,
      "endMs": 21400,
      "pageBreakAfter": false
    },
    {
      "word": "traía",
      "startMs": 21400,
      "endMs": 21880,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 21880,
      "endMs": 22080,
      "pageBreakAfter": false
    },
    {
      "word": "escarmiento.",
      "startMs": 22080,
      "endMs": 22640,
      "pageBreakAfter": true
    },
    {
      "word": "Un",
      "startMs": 23100,
      "endMs": 23200,
      "pageBreakAfter": false
    },
    {
      "word": "gobernador",
      "startMs": 23200,
      "endMs": 23640,
      "pageBreakAfter": false
    },
    {
      "word": "militar,",
      "startMs": 23640,
      "endMs": 24080,
      "pageBreakAfter": true
    },
    {
      "word": "sobornado",
      "startMs": 24500,
      "endMs": 24980,
      "pageBreakAfter": false
    },
    {
      "word": "por",
      "startMs": 24980,
      "endMs": 25160,
      "pageBreakAfter": false
    },
    {
      "word": "extranjeros,",
      "startMs": 25160,
      "endMs": 25840,
      "pageBreakAfter": true
    },
    {
      "word": "les",
      "startMs": 26140,
      "endMs": 26320,
      "pageBreakAfter": false
    },
    {
      "word": "había",
      "startMs": 26320,
      "endMs": 26640,
      "pageBreakAfter": false
    },
    {
      "word": "cedido",
      "startMs": 26640,
      "endMs": 27000,
      "pageBreakAfter": false
    },
    {
      "word": "una",
      "startMs": 27000,
      "endMs": 27280,
      "pageBreakAfter": false
    },
    {
      "word": "parte",
      "startMs": 27280,
      "endMs": 27560,
      "pageBreakAfter": true
    },
    {
      "word": "del",
      "startMs": 27560,
      "endMs": 27760,
      "pageBreakAfter": false
    },
    {
      "word": "fuego.",
      "startMs": 27760,
      "endMs": 28040,
      "pageBreakAfter": true
    },
    {
      "word": "Al",
      "startMs": 28920,
      "endMs": 29400,
      "pageBreakAfter": false
    },
    {
      "word": "ir",
      "startMs": 29400,
      "endMs": 29520,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 29520,
      "endMs": 29580,
      "pageBreakAfter": false
    },
    {
      "word": "entrar",
      "startMs": 29580,
      "endMs": 29840,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 29840,
      "endMs": 29980,
      "pageBreakAfter": true
    },
    {
      "word": "una",
      "startMs": 29980,
      "endMs": 30120,
      "pageBreakAfter": false
    },
    {
      "word": "iglesia,",
      "startMs": 30120,
      "endMs": 30480,
      "pageBreakAfter": true
    },
    {
      "word": "un",
      "startMs": 30940,
      "endMs": 31060,
      "pageBreakAfter": false
    },
    {
      "word": "fuego",
      "startMs": 31060,
      "endMs": 31260,
      "pageBreakAfter": false
    },
    {
      "word": "bajado",
      "startMs": 31260,
      "endMs": 31660,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 31660,
      "endMs": 31820,
      "pageBreakAfter": false
    },
    {
      "word": "cielo",
      "startMs": 31820,
      "endMs": 32140,
      "pageBreakAfter": true
    },
    {
      "word": "lo",
      "startMs": 32140,
      "endMs": 32480,
      "pageBreakAfter": false
    },
    {
      "word": "consumió.",
      "startMs": 32480,
      "endMs": 32960,
      "pageBreakAfter": true
    },
    {
      "word": "Era",
      "startMs": 33580,
      "endMs": 33820,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 33820,
      "endMs": 33960,
      "pageBreakAfter": false
    },
    {
      "word": "argumento",
      "startMs": 33960,
      "endMs": 34460,
      "pageBreakAfter": false
    },
    {
      "word": "para",
      "startMs": 34460,
      "endMs": 34600,
      "pageBreakAfter": false
    },
    {
      "word": "usar",
      "startMs": 34600,
      "endMs": 34800,
      "pageBreakAfter": true
    },
    {
      "word": "ante",
      "startMs": 34800,
      "endMs": 35020,
      "pageBreakAfter": false
    },
    {
      "word": "los",
      "startMs": 35020,
      "endMs": 35140,
      "pageBreakAfter": false
    },
    {
      "word": "extranjeros.",
      "startMs": 35140,
      "endMs": 35820,
      "pageBreakAfter": true
    },
    {
      "word": "Nada",
      "startMs": 36300,
      "endMs": 36540,
      "pageBreakAfter": false
    },
    {
      "word": "demuestra",
      "startMs": 36540,
      "endMs": 37060,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 37060,
      "endMs": 37180,
      "pageBreakAfter": false
    },
    {
      "word": "lo",
      "startMs": 37180,
      "endMs": 37280,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 37280,
      "endMs": 37420,
      "pageBreakAfter": true
    },
    {
      "word": "gobernador",
      "startMs": 37420,
      "endMs": 37960,
      "pageBreakAfter": false
    },
    {
      "word": "ocurriera.",
      "startMs": 37960,
      "endMs": 38600,
      "pageBreakAfter": true
    }
  ],
  "audio": {
    "narration": {
      "src": "video008/shorts-audio/short4-narration.mp3",
      "volume": 1.9275
    },
    "music": {
      "src": "video008/shorts-audio/short4-music.mp3",
      "volume": 0.1413,
      "fadeInSeconds": 0.5,
      "fadeOutSeconds": 1.0,
      "loop": true
    }
  }
};


// ---------------------------------------------------------------------------
// Short 5 - "INVENCIBLE EN EL MAR" (Parte 5)
// Locucion: 008_FuegoGriego_Short5_Limites.mp3 (39.706063s, sin CTA) + tarjeta CTA 3.0s = 42.706063s.
// Musica: 05-consecuencias.mp3 desde 0.0s (pista original del largo, sin editar).
// ---------------------------------------------------------------------------
export const short5LimitesFixture: ExplainerProps = {
  "cuts": [
    {
      "id": "21a-open",
      "source": "video008/images/21a.png",
      "in_seconds": 0.0,
      "out_seconds": 3.46,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "transform": {
        "position": {
          "x": 75,
          "y": 50
        }
      },
      "audioSrc": "video008/shorts-audio/sfx/processed/short5-sfx-21a-open.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "50-alcance",
      "source": "video008/video/plano-50-alcance-retimed.mp4",
      "in_seconds": 3.46,
      "out_seconds": 6.1,
      "source_in_seconds": 5.29,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      }
    },
    {
      "id": "51-flancos",
      "source": "video008/video/plano-51-flancos-retimed.mp4",
      "in_seconds": 6.1,
      "out_seconds": 10.28,
      "source_in_seconds": 4.85,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      }
    },
    {
      "id": "49-viento",
      "source": "video008/video/plano-49-viento-retimed.mp4",
      "in_seconds": 10.28,
      "out_seconds": 16.4,
      "source_in_seconds": 0.0,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      },
      "playbackRate": 0.795
    },
    {
      "id": "53-mapa",
      "source": "video008/video/plano-53-creta-sicilia-tasos-retimed.mp4",
      "in_seconds": 16.4,
      "out_seconds": 26.06,
      "source_in_seconds": 6.07,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      }
    },
    {
      "id": "54",
      "source": "video008/images/54.png",
      "in_seconds": 26.06,
      "out_seconds": 30.18,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video008/shorts-audio/sfx/processed/short5-sfx-54.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "55-dos",
      "source": "video008/video/plano-55-dos-explicaciones-retimed.mp4",
      "in_seconds": 30.18,
      "out_seconds": 37.72,
      "source_in_seconds": 0.23,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      },
      "playbackRate": 1.0
    },
    {
      "id": "56-riesgo",
      "source": "video008/video/plano-56-riesgo-retimed.mp4",
      "in_seconds": 37.72,
      "out_seconds": 39.706063,
      "source_in_seconds": 7.98,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      },
      "backgroundColor": "transparent"
    },
    {
      "id": "cta",
      "source": "",
      "type": "cta_card",
      "in_seconds": 39.706063,
      "out_seconds": 42.706063,
      "text": "Parte 6, la última:\nde qué estaba hecho\ny por qué ya\nnadie lo sabe\n\nSíguenos",
      "ctaStyle": {
        "textTop": 900,
        "maxFontSize": 60,
        "lastLineColor": "#E2E8F0"
      }
    }
  ],
  "overlays": [
    {
      "type": "monumental_title",
      "in_seconds": 0.0,
      "out_seconds": 3.0,
      "position": "center",
      "text": "¿INVENCIBLE\nEN EL MAR?"
    },
    {
      "type": "rotulo",
      "in_seconds": 3.66,
      "out_seconds": 5.8999999999999995,
      "position": "top-left",
      "variant": "label",
      "text": "RECONSTRUCCIÓN DE J. HALDON",
      "subtitle": "2002"
    }
  ],
  "watermarkSrc": WATERMARK,
  "brandBackground": true,
  "themeConfig": THEME,
  "captionsPhraseAware": true,
  "captions": [
    {
      "word": "Según",
      "startMs": 0,
      "endMs": 320,
      "pageBreakAfter": false
    },
    {
      "word": "las",
      "startMs": 320,
      "endMs": 500,
      "pageBreakAfter": false
    },
    {
      "word": "reconstrucciones",
      "startMs": 500,
      "endMs": 1200,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 1200,
      "endMs": 1400,
      "pageBreakAfter": false
    },
    {
      "word": "John",
      "startMs": 1400,
      "endMs": 1600,
      "pageBreakAfter": true
    },
    {
      "word": "Haldon,",
      "startMs": 1600,
      "endMs": 2000,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 2300,
      "endMs": 2400,
      "pageBreakAfter": false
    },
    {
      "word": "chorro",
      "startMs": 2400,
      "endMs": 2640,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 2640,
      "endMs": 2760,
      "pageBreakAfter": false
    },
    {
      "word": "fuego",
      "startMs": 2760,
      "endMs": 3000,
      "pageBreakAfter": true
    },
    {
      "word": "griego",
      "startMs": 3000,
      "endMs": 3460,
      "pageBreakAfter": false
    },
    {
      "word": "alcanzaba",
      "startMs": 3460,
      "endMs": 4160,
      "pageBreakAfter": false
    },
    {
      "word": "solo",
      "startMs": 4160,
      "endMs": 4400,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 4400,
      "endMs": 4600,
      "pageBreakAfter": false
    },
    {
      "word": "10",
      "startMs": 4600,
      "endMs": 4820,
      "pageBreakAfter": true
    },
    {
      "word": "a",
      "startMs": 4820,
      "endMs": 4920,
      "pageBreakAfter": false
    },
    {
      "word": "15",
      "startMs": 4920,
      "endMs": 5180,
      "pageBreakAfter": false
    },
    {
      "word": "metros.",
      "startMs": 5180,
      "endMs": 5500,
      "pageBreakAfter": true
    },
    {
      "word": "A",
      "startMs": 6100,
      "endMs": 6280,
      "pageBreakAfter": false
    },
    {
      "word": "esa",
      "startMs": 6280,
      "endMs": 6420,
      "pageBreakAfter": false
    },
    {
      "word": "distancia,",
      "startMs": 6420,
      "endMs": 6860,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 7300,
      "endMs": 7380,
      "pageBreakAfter": false
    },
    {
      "word": "dromon",
      "startMs": 7380,
      "endMs": 7700,
      "pageBreakAfter": false
    },
    {
      "word": "quedaba",
      "startMs": 7700,
      "endMs": 8020,
      "pageBreakAfter": false
    },
    {
      "word": "casi",
      "startMs": 8020,
      "endMs": 8340,
      "pageBreakAfter": false
    },
    {
      "word": "al",
      "startMs": 8340,
      "endMs": 8480,
      "pageBreakAfter": true
    },
    {
      "word": "alcance",
      "startMs": 8480,
      "endMs": 8820,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 8820,
      "endMs": 8980,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 8980,
      "endMs": 9180,
      "pageBreakAfter": false
    },
    {
      "word": "abordaje.",
      "startMs": 9180,
      "endMs": 9600,
      "pageBreakAfter": true
    },
    {
      "word": "Necesitaba",
      "startMs": 10280,
      "endMs": 10840,
      "pageBreakAfter": false
    },
    {
      "word": "además",
      "startMs": 10840,
      "endMs": 11180,
      "pageBreakAfter": false
    },
    {
      "word": "mar",
      "startMs": 11180,
      "endMs": 11460,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 11460,
      "endMs": 11600,
      "pageBreakAfter": false
    },
    {
      "word": "calma:",
      "startMs": 11600,
      "endMs": 11900,
      "pageBreakAfter": true
    },
    {
      "word": "con",
      "startMs": 12300,
      "endMs": 12440,
      "pageBreakAfter": false
    },
    {
      "word": "viento",
      "startMs": 12440,
      "endMs": 12720,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 12720,
      "endMs": 12880,
      "pageBreakAfter": false
    },
    {
      "word": "contra,",
      "startMs": 12880,
      "endMs": 13120,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 13660,
      "endMs": 13760,
      "pageBreakAfter": false
    },
    {
      "word": "chorro",
      "startMs": 13760,
      "endMs": 14100,
      "pageBreakAfter": false
    },
    {
      "word": "podía",
      "startMs": 14100,
      "endMs": 14420,
      "pageBreakAfter": false
    },
    {
      "word": "volver",
      "startMs": 14420,
      "endMs": 14660,
      "pageBreakAfter": false
    },
    {
      "word": "hacia",
      "startMs": 14660,
      "endMs": 14940,
      "pageBreakAfter": true
    },
    {
      "word": "la",
      "startMs": 14940,
      "endMs": 15100,
      "pageBreakAfter": false
    },
    {
      "word": "propia",
      "startMs": 15100,
      "endMs": 15360,
      "pageBreakAfter": false
    },
    {
      "word": "cubierta.",
      "startMs": 15360,
      "endMs": 15860,
      "pageBreakAfter": true
    },
    {
      "word": "Entre",
      "startMs": 16400,
      "endMs": 16640,
      "pageBreakAfter": false
    },
    {
      "word": "826",
      "startMs": 16640,
      "endMs": 17600,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 17600,
      "endMs": 17900,
      "pageBreakAfter": false
    },
    {
      "word": "829,",
      "startMs": 17900,
      "endMs": 18760,
      "pageBreakAfter": true
    },
    {
      "word": "Bizancio",
      "startMs": 19400,
      "endMs": 19820,
      "pageBreakAfter": false
    },
    {
      "word": "perdió",
      "startMs": 19820,
      "endMs": 20240,
      "pageBreakAfter": false
    },
    {
      "word": "Creta,",
      "startMs": 20240,
      "endMs": 20520,
      "pageBreakAfter": true
    },
    {
      "word": "vio",
      "startMs": 20980,
      "endMs": 21160,
      "pageBreakAfter": false
    },
    {
      "word": "empezar",
      "startMs": 21160,
      "endMs": 21520,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 21520,
      "endMs": 21700,
      "pageBreakAfter": false
    },
    {
      "word": "conquista",
      "startMs": 21700,
      "endMs": 22160,
      "pageBreakAfter": false
    },
    {
      "word": "árabe",
      "startMs": 22160,
      "endMs": 22500,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 22500,
      "endMs": 22620,
      "pageBreakAfter": false
    },
    {
      "word": "Sicilia",
      "startMs": 22620,
      "endMs": 22980,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 23440,
      "endMs": 23580,
      "pageBreakAfter": false
    },
    {
      "word": "fue",
      "startMs": 23580,
      "endMs": 23720,
      "pageBreakAfter": false
    },
    {
      "word": "derrotado",
      "startMs": 23720,
      "endMs": 24180,
      "pageBreakAfter": true
    },
    {
      "word": "en",
      "startMs": 24180,
      "endMs": 24280,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 24280,
      "endMs": 24380,
      "pageBreakAfter": false
    },
    {
      "word": "batalla",
      "startMs": 24380,
      "endMs": 24660,
      "pageBreakAfter": false
    },
    {
      "word": "naval",
      "startMs": 24660,
      "endMs": 24880,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 24880,
      "endMs": 25080,
      "pageBreakAfter": true
    },
    {
      "word": "Tasos.",
      "startMs": 25080,
      "endMs": 25360,
      "pageBreakAfter": true
    },
    {
      "word": "Las",
      "startMs": 26060,
      "endMs": 26620,
      "pageBreakAfter": false
    },
    {
      "word": "crónicas",
      "startMs": 26620,
      "endMs": 27100,
      "pageBreakAfter": false
    },
    {
      "word": "no",
      "startMs": 27100,
      "endMs": 27280,
      "pageBreakAfter": false
    },
    {
      "word": "mencionan",
      "startMs": 27280,
      "endMs": 27740,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 27740,
      "endMs": 27840,
      "pageBreakAfter": true
    },
    {
      "word": "fuego",
      "startMs": 27840,
      "endMs": 28060,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 28060,
      "endMs": 28280,
      "pageBreakAfter": false
    },
    {
      "word": "ninguno",
      "startMs": 28280,
      "endMs": 28700,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 28700,
      "endMs": 28820,
      "pageBreakAfter": false
    },
    {
      "word": "esos",
      "startMs": 28820,
      "endMs": 29000,
      "pageBreakAfter": true
    },
    {
      "word": "episodios.",
      "startMs": 29000,
      "endMs": 29580,
      "pageBreakAfter": true
    },
    {
      "word": "Unos",
      "startMs": 30180,
      "endMs": 30440,
      "pageBreakAfter": false
    },
    {
      "word": "historiadores",
      "startMs": 30440,
      "endMs": 30860,
      "pageBreakAfter": false
    },
    {
      "word": "lo",
      "startMs": 30860,
      "endMs": 31100,
      "pageBreakAfter": false
    },
    {
      "word": "explican",
      "startMs": 31100,
      "endMs": 31480,
      "pageBreakAfter": false
    },
    {
      "word": "por",
      "startMs": 31480,
      "endMs": 31700,
      "pageBreakAfter": true
    },
    {
      "word": "sus",
      "startMs": 31700,
      "endMs": 31860,
      "pageBreakAfter": false
    },
    {
      "word": "límites",
      "startMs": 31860,
      "endMs": 32220,
      "pageBreakAfter": false
    },
    {
      "word": "tácticos.",
      "startMs": 32220,
      "endMs": 32740,
      "pageBreakAfter": true
    },
    {
      "word": "Otros,",
      "startMs": 33200,
      "endMs": 33580,
      "pageBreakAfter": false
    },
    {
      "word": "por",
      "startMs": 34120,
      "endMs": 34280,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 34280,
      "endMs": 34380,
      "pageBreakAfter": false
    },
    {
      "word": "miedo",
      "startMs": 34380,
      "endMs": 34580,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 34580,
      "endMs": 34760,
      "pageBreakAfter": true
    },
    {
      "word": "que",
      "startMs": 34760,
      "endMs": 34860,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 34860,
      "endMs": 34980,
      "pageBreakAfter": false
    },
    {
      "word": "barco",
      "startMs": 34980,
      "endMs": 35260,
      "pageBreakAfter": false
    },
    {
      "word": "con",
      "startMs": 35260,
      "endMs": 35420,
      "pageBreakAfter": false
    },
    {
      "word": "sifones",
      "startMs": 35420,
      "endMs": 35780,
      "pageBreakAfter": true
    },
    {
      "word": "cayera",
      "startMs": 35780,
      "endMs": 36260,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 36260,
      "endMs": 36360,
      "pageBreakAfter": false
    },
    {
      "word": "manos",
      "startMs": 36360,
      "endMs": 36540,
      "pageBreakAfter": false
    },
    {
      "word": "enemigas.",
      "startMs": 36540,
      "endMs": 37100,
      "pageBreakAfter": true
    },
    {
      "word": "Las",
      "startMs": 37720,
      "endMs": 37860,
      "pageBreakAfter": false
    },
    {
      "word": "fuentes",
      "startMs": 37860,
      "endMs": 38180,
      "pageBreakAfter": false
    },
    {
      "word": "no",
      "startMs": 38180,
      "endMs": 38400,
      "pageBreakAfter": false
    },
    {
      "word": "permiten",
      "startMs": 38400,
      "endMs": 38880,
      "pageBreakAfter": false
    },
    {
      "word": "decidir.",
      "startMs": 38880,
      "endMs": 39320,
      "pageBreakAfter": true
    }
  ],
  "audio": {
    "narration": {
      "src": "video008/shorts-audio/short5-narration.mp3",
      "volume": 1.9498
    },
    "music": {
      "src": "video008/shorts-audio/short5-music.mp3",
      "volume": 0.1462,
      "fadeInSeconds": 0.5,
      "fadeOutSeconds": 1.0,
      "loop": true
    }
  }
};


// ---------------------------------------------------------------------------
// Short 6 - "FORMULA PERDIDA" (Parte 6)
// Locucion: 008_FuegoGriego_Short6_Formula.mp3 (41.325688s, sin CTA) + tarjeta CTA 5.0s = 46.325688s.
// Musica: 06-legado-cta.mp3 desde 5.0s (pista original del largo, sin editar).
// ---------------------------------------------------------------------------
export const short6FormulaFixture: ExplainerProps = {
  "cuts": [
    {
      "id": "13b-open",
      "source": "video008/images/13b.png",
      "in_seconds": 0.0,
      "out_seconds": 2.62,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "transform": {
        "position": {
          "x": 42,
          "y": 50
        }
      },
      "audioSrc": "video008/shorts-audio/sfx/processed/short6-sfx-13b-open.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "64-quimica",
      "source": "video008/video/plano-64-quimica-retimed.mp4",
      "in_seconds": 2.62,
      "out_seconds": 10.04,
      "source_in_seconds": 0.91,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      }
    },
    {
      "id": "65",
      "source": "video008/images/65.png",
      "in_seconds": 10.04,
      "out_seconds": 14.62,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "transform": {
        "position": {
          "x": 35,
          "y": 50
        }
      },
      "audioSrc": "video008/shorts-audio/sfx/processed/short6-sfx-65.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "66-proporciones",
      "source": "video008/video/plano-66-proporciones-retimed.mp4",
      "in_seconds": 14.62,
      "out_seconds": 16.24,
      "source_in_seconds": 3.25,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      },
      "playbackRate": 0.998
    },
    {
      "id": "67-salitre",
      "source": "video008/video/plano-67-salitre-retimed.mp4",
      "in_seconds": 16.24,
      "out_seconds": 25.72,
      "source_in_seconds": 2.49,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      },
      "playbackRate": 1.0
    },
    {
      "id": "60",
      "source": "video008/images/60.png",
      "in_seconds": 25.72,
      "out_seconds": 30.84,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video008/shorts-audio/sfx/processed/short6-sfx-60.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "61b-cadena",
      "source": "video008/video/plano-61b-cadena-rota-retimed.mp4",
      "in_seconds": 30.84,
      "out_seconds": 37.82,
      "source_in_seconds": 6.35,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      }
    },
    {
      "id": "59",
      "source": "video008/images/59.png",
      "in_seconds": 37.82,
      "out_seconds": 41.325688,
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "backgroundColor": "transparent",
      "audioSrc": "video008/shorts-audio/sfx/processed/short6-sfx-59.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "cta",
      "source": "",
      "type": "cta_card",
      "in_seconds": 41.325688,
      "out_seconds": 46.325688,
      "text": "Si hubieras sido emperador,\n¿habrías repartido\nlos sifones\npor las provincias?\n\nCuéntanoslo y síguenos",
      "ctaStyle": {
        "textTop": 900,
        "maxFontSize": 60,
        "lastLineColor": "#E2E8F0"
      }
    }
  ],
  "overlays": [
    {
      "type": "monumental_title",
      "in_seconds": 0.0,
      "out_seconds": 3.0,
      "position": "center",
      "text": "FÓRMULA\nPERDIDA"
    },
    {
      "type": "rotulo",
      "in_seconds": 10.239999999999998,
      "out_seconds": 14.52,
      "position": "top-left",
      "variant": "label",
      "text": "ANA COMNENA",
      "subtitle": "ALEXÍADA"
    },
    {
      "type": "rotulo",
      "in_seconds": 38.02,
      "out_seconds": 41.225688,
      "position": "top-left",
      "variant": "label",
      "text": "1204",
      "subtitle": "CUARTA CRUZADA"
    }
  ],
  "watermarkSrc": WATERMARK,
  "brandBackground": true,
  "themeConfig": THEME,
  "captionsPhraseAware": true,
  "captions": [
    {
      "word": "La",
      "startMs": 0,
      "endMs": 180,
      "pageBreakAfter": false
    },
    {
      "word": "receta",
      "startMs": 180,
      "endMs": 460,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 460,
      "endMs": 620,
      "pageBreakAfter": false
    },
    {
      "word": "fuego",
      "startMs": 620,
      "endMs": 800,
      "pageBreakAfter": false
    },
    {
      "word": "griego",
      "startMs": 800,
      "endMs": 1180,
      "pageBreakAfter": true
    },
    {
      "word": "no",
      "startMs": 1180,
      "endMs": 1340,
      "pageBreakAfter": false
    },
    {
      "word": "se",
      "startMs": 1340,
      "endMs": 1500,
      "pageBreakAfter": false
    },
    {
      "word": "ha",
      "startMs": 1500,
      "endMs": 1600,
      "pageBreakAfter": false
    },
    {
      "word": "conservado.",
      "startMs": 1600,
      "endMs": 2100,
      "pageBreakAfter": true
    },
    {
      "word": "La",
      "startMs": 2620,
      "endMs": 2780,
      "pageBreakAfter": false
    },
    {
      "word": "química",
      "startMs": 2780,
      "endMs": 3140,
      "pageBreakAfter": false
    },
    {
      "word": "actual",
      "startMs": 3140,
      "endMs": 3500,
      "pageBreakAfter": false
    },
    {
      "word": "trabaja",
      "startMs": 3500,
      "endMs": 4000,
      "pageBreakAfter": false
    },
    {
      "word": "con",
      "startMs": 4000,
      "endMs": 4160,
      "pageBreakAfter": true
    },
    {
      "word": "un",
      "startMs": 4160,
      "endMs": 4300,
      "pageBreakAfter": false
    },
    {
      "word": "modelo",
      "startMs": 4300,
      "endMs": 4620,
      "pageBreakAfter": false
    },
    {
      "word": "razonable:",
      "startMs": 4620,
      "endMs": 5160,
      "pageBreakAfter": true
    },
    {
      "word": "nafta",
      "startMs": 5800,
      "endMs": 6240,
      "pageBreakAfter": false
    },
    {
      "word": "o",
      "startMs": 6240,
      "endMs": 6500,
      "pageBreakAfter": false
    },
    {
      "word": "petróleo",
      "startMs": 6500,
      "endMs": 6840,
      "pageBreakAfter": false
    },
    {
      "word": "ligero,",
      "startMs": 6840,
      "endMs": 7260,
      "pageBreakAfter": true
    },
    {
      "word": "espesado",
      "startMs": 7260,
      "endMs": 7940,
      "pageBreakAfter": false
    },
    {
      "word": "con",
      "startMs": 7940,
      "endMs": 8140,
      "pageBreakAfter": false
    },
    {
      "word": "resinas",
      "startMs": 8140,
      "endMs": 8500,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 8500,
      "endMs": 8700,
      "pageBreakAfter": false
    },
    {
      "word": "pino",
      "startMs": 8700,
      "endMs": 8960,
      "pageBreakAfter": true
    },
    {
      "word": "y",
      "startMs": 8960,
      "endMs": 9060,
      "pageBreakAfter": false
    },
    {
      "word": "azufre.",
      "startMs": 9060,
      "endMs": 9400,
      "pageBreakAfter": true
    },
    {
      "word": "Ana",
      "startMs": 10040,
      "endMs": 10380,
      "pageBreakAfter": false
    },
    {
      "word": "Comnena,",
      "startMs": 10380,
      "endMs": 10720,
      "pageBreakAfter": true
    },
    {
      "word": "una",
      "startMs": 10980,
      "endMs": 11080,
      "pageBreakAfter": false
    },
    {
      "word": "princesa",
      "startMs": 11080,
      "endMs": 11520,
      "pageBreakAfter": false
    },
    {
      "word": "bizantina",
      "startMs": 11520,
      "endMs": 11960,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 11960,
      "endMs": 12160,
      "pageBreakAfter": false
    },
    {
      "word": "siglo",
      "startMs": 12160,
      "endMs": 12380,
      "pageBreakAfter": true
    },
    {
      "word": "XII,",
      "startMs": 12380,
      "endMs": 12640,
      "pageBreakAfter": false
    },
    {
      "word": "menciona",
      "startMs": 13140,
      "endMs": 13520,
      "pageBreakAfter": false
    },
    {
      "word": "resina",
      "startMs": 13520,
      "endMs": 13920,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 13920,
      "endMs": 14020,
      "pageBreakAfter": false
    },
    {
      "word": "azufre,",
      "startMs": 14020,
      "endMs": 14380,
      "pageBreakAfter": true
    },
    {
      "word": "pero",
      "startMs": 14620,
      "endMs": 14800,
      "pageBreakAfter": false
    },
    {
      "word": "sin",
      "startMs": 14800,
      "endMs": 15000,
      "pageBreakAfter": false
    },
    {
      "word": "cantidades.",
      "startMs": 15000,
      "endMs": 15500,
      "pageBreakAfter": true
    },
    {
      "word": "Algunas",
      "startMs": 16240,
      "endMs": 16640,
      "pageBreakAfter": false
    },
    {
      "word": "reconstrucciones",
      "startMs": 16640,
      "endMs": 17300,
      "pageBreakAfter": false
    },
    {
      "word": "populares",
      "startMs": 17300,
      "endMs": 17860,
      "pageBreakAfter": false
    },
    {
      "word": "añaden",
      "startMs": 17860,
      "endMs": 18180,
      "pageBreakAfter": false
    },
    {
      "word": "salitre,",
      "startMs": 18180,
      "endMs": 18640,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 19100,
      "endMs": 19180,
      "pageBreakAfter": false
    },
    {
      "word": "ingrediente",
      "startMs": 19180,
      "endMs": 19600,
      "pageBreakAfter": false
    },
    {
      "word": "clave",
      "startMs": 19600,
      "endMs": 19900,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 19900,
      "endMs": 20040,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 20040,
      "endMs": 20140,
      "pageBreakAfter": true
    },
    {
      "word": "pólvora.",
      "startMs": 20140,
      "endMs": 20460,
      "pageBreakAfter": true
    },
    {
      "word": "Los",
      "startMs": 21180,
      "endMs": 21320,
      "pageBreakAfter": false
    },
    {
      "word": "especialistas",
      "startMs": 21320,
      "endMs": 21880,
      "pageBreakAfter": false
    },
    {
      "word": "lo",
      "startMs": 21880,
      "endMs": 22080,
      "pageBreakAfter": false
    },
    {
      "word": "descartan:",
      "startMs": 22080,
      "endMs": 22560,
      "pageBreakAfter": true
    },
    {
      "word": "la",
      "startMs": 23000,
      "endMs": 23160,
      "pageBreakAfter": false
    },
    {
      "word": "pólvora",
      "startMs": 23160,
      "endMs": 23520,
      "pageBreakAfter": false
    },
    {
      "word": "llegó",
      "startMs": 23520,
      "endMs": 23920,
      "pageBreakAfter": false
    },
    {
      "word": "al",
      "startMs": 23920,
      "endMs": 24180,
      "pageBreakAfter": false
    },
    {
      "word": "Mediterráneo",
      "startMs": 24180,
      "endMs": 24780,
      "pageBreakAfter": true
    },
    {
      "word": "siglos",
      "startMs": 24780,
      "endMs": 25400,
      "pageBreakAfter": false
    },
    {
      "word": "después.",
      "startMs": 25400,
      "endMs": 25720,
      "pageBreakAfter": true
    },
    {
      "word": "Para",
      "startMs": 25720,
      "endMs": 26540,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 26540,
      "endMs": 26720,
      "pageBreakAfter": false
    },
    {
      "word": "historiador",
      "startMs": 26720,
      "endMs": 27160,
      "pageBreakAfter": false
    },
    {
      "word": "Alex",
      "startMs": 27160,
      "endMs": 27440,
      "pageBreakAfter": false
    },
    {
      "word": "Roland,",
      "startMs": 27440,
      "endMs": 27740,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 28220,
      "endMs": 28300,
      "pageBreakAfter": false
    },
    {
      "word": "arma",
      "startMs": 28300,
      "endMs": 28500,
      "pageBreakAfter": false
    },
    {
      "word": "se",
      "startMs": 28500,
      "endMs": 28780,
      "pageBreakAfter": false
    },
    {
      "word": "perdió",
      "startMs": 28780,
      "endMs": 29100,
      "pageBreakAfter": false
    },
    {
      "word": "por",
      "startMs": 29100,
      "endMs": 29260,
      "pageBreakAfter": true
    },
    {
      "word": "su",
      "startMs": 29260,
      "endMs": 29420,
      "pageBreakAfter": false
    },
    {
      "word": "propio",
      "startMs": 29420,
      "endMs": 29660,
      "pageBreakAfter": false
    },
    {
      "word": "secreto:",
      "startMs": 29660,
      "endMs": 30280,
      "pageBreakAfter": true
    },
    {
      "word": "repartido",
      "startMs": 30840,
      "endMs": 31400,
      "pageBreakAfter": false
    },
    {
      "word": "entre",
      "startMs": 31400,
      "endMs": 31620,
      "pageBreakAfter": false
    },
    {
      "word": "unos",
      "startMs": 31620,
      "endMs": 31860,
      "pageBreakAfter": false
    },
    {
      "word": "pocos",
      "startMs": 31860,
      "endMs": 32260,
      "pageBreakAfter": false
    },
    {
      "word": "especialistas",
      "startMs": 32260,
      "endMs": 32860,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 32860,
      "endMs": 33020,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 33020,
      "endMs": 33100,
      "pageBreakAfter": false
    },
    {
      "word": "capital,",
      "startMs": 33100,
      "endMs": 33440,
      "pageBreakAfter": true
    },
    {
      "word": "desapareció",
      "startMs": 33800,
      "endMs": 34440,
      "pageBreakAfter": false
    },
    {
      "word": "cuando",
      "startMs": 34440,
      "endMs": 34680,
      "pageBreakAfter": false
    },
    {
      "word": "esa",
      "startMs": 34680,
      "endMs": 35000,
      "pageBreakAfter": false
    },
    {
      "word": "cadena",
      "startMs": 35000,
      "endMs": 35380,
      "pageBreakAfter": false
    },
    {
      "word": "se",
      "startMs": 35380,
      "endMs": 35520,
      "pageBreakAfter": true
    },
    {
      "word": "rompió,",
      "startMs": 35520,
      "endMs": 35940,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 35940,
      "endMs": 36220,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 36220,
      "endMs": 36340,
      "pageBreakAfter": false
    },
    {
      "word": "siglo",
      "startMs": 36340,
      "endMs": 36600,
      "pageBreakAfter": false
    },
    {
      "word": "XII.",
      "startMs": 36600,
      "endMs": 36880,
      "pageBreakAfter": true
    },
    {
      "word": "En",
      "startMs": 37820,
      "endMs": 37980,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 37980,
      "endMs": 38080,
      "pageBreakAfter": false
    },
    {
      "word": "asalto",
      "startMs": 38080,
      "endMs": 38360,
      "pageBreakAfter": false
    },
    {
      "word": "cruzado",
      "startMs": 38360,
      "endMs": 38760,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 38760,
      "endMs": 38900,
      "pageBreakAfter": true
    },
    {
      "word": "1204",
      "startMs": 38900,
      "endMs": 39900,
      "pageBreakAfter": false
    },
    {
      "word": "ya",
      "startMs": 39900,
      "endMs": 40300,
      "pageBreakAfter": false
    },
    {
      "word": "no",
      "startMs": 40300,
      "endMs": 40480,
      "pageBreakAfter": false
    },
    {
      "word": "aparece.",
      "startMs": 40480,
      "endMs": 40840,
      "pageBreakAfter": true
    }
  ],
  "audio": {
    "narration": {
      "src": "video008/shorts-audio/short6-narration.mp3",
      "volume": 1.4622
    },
    "music": {
      "src": "video008/shorts-audio/short6-music.mp3",
      "volume": 0.1109,
      "fadeInSeconds": 0.5,
      "fadeOutSeconds": 1.0,
      "loop": true
    }
  }
};
