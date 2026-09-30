import { ExplainerProps } from "../Explainer";

// Shorts del video 005 - "El disco de Nebra". Fuente: guion narrado de
// Victor (encargado a partir de la investigacion inicial, no del guion
// largo) + guion visual de "10-Redes Sociales/005 - Shorts del disco de
// Nebra.md" (boveda Obsidian). Miniserie de 6 partes, mismo criterio que
// video004-shorts.ts.
//
// Locuciones grabadas por Victor en ElevenLabs y clasificadas el 21 sept
// 2026 desde 09-Almacen/00-Sin clasificar (5_1..5_6) a
// Assets/Audio/005 - El disco de Nebra/Shorts/. OJO: el orden de los
// ficheros 5_N NO coincide con el orden de la serie -- 5_3 es el Short 4,
// 5_4 el Short 5, 5_5 el Short 6 y 5_6 el Short 3; se renombraron segun lo
// que dice cada audio. El CTA de cada short va integrado en la ultima
// frase de la locucion, por eso el cta_card final NO lleva audioSrc propio.
//
// Banco de planos: SOLO imagenes y motion graphics ya generados y
// aprobados para el video largo (public/video005/images y video/) -- nada
// nuevo generado. Los grafismos (monumental_title, rotulo, impact_stamp,
// cta_card) son componentes existentes del repo, no imagenes de IA.
// Motion graphics en videoFit "contain" (letterbox en vertical, mismo
// criterio aceptado en 003/004).
//
// Audio: musica recortada de music-final.mp3 del video largo por bloque
// (Hook 0s, Forense 4:31, Historia 3:07, Objeto 1:23/1:45, Hipotesis
// 6:59); niveles como 003/004 (narracion -1.0dBFS de pico, musica
// -25.0dBFS). SIN SFX: no existen cues aislados de 005 (solo
// sfx-final.mp3, premezclado para el largo) y no se han inventado.
//
// Transcripcion con faster-whisper (small, es), 21 sept 2026. Correcciones
// manuales de nombres propios: expoliadores, Nebra, Mittelberg, Unetice,
// Carnon, Cornualles, Pleyades, Artilugio. El Short 6 cierra con "objetos"
// (dicho asi en la locucion), no "Artilugios".

const THEME = {
  captionHighlightColor: "#D49A46",
  captionBackgroundColor: "rgba(14, 14, 17, 0.78)",
  captionFontSize: 54,
  captionFontFamily: "Montserrat",
  captionFontWeight: 800,
} as const;

const WATERMARK = "social-clips/source/logo-isotipo-full.png";


// ---------------------------------------------------------------------------
// Short 1 - "EL RESCATE POLICIAL" (Parte 1)
// Locucion: 005_DiscoNebra_Short1_Rescate.mp3 (47.595063s, integra, incluye el CTA final).
// ---------------------------------------------------------------------------
export const short1RescateFixture: ExplainerProps = {
  "cuts": [
    {
      "id": "34d-open",
      "source": "video005/images/34d.png",
      "in_seconds": 0.0,
      "out_seconds": 4.2,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "transform": {
        "scale": 1.14
      }
    },
    {
      "id": "1a",
      "source": "video005/images/1a.png",
      "in_seconds": 4.2,
      "out_seconds": 12.2,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "transform": {
        "position": {
          "x": 42,
          "y": 50
        }
      }
    },
    {
      "id": "16",
      "source": "video005/images/16.png",
      "in_seconds": 12.2,
      "out_seconds": 19.4,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-out"
    },
    {
      "id": "18a",
      "source": "video005/images/18a.png",
      "in_seconds": 19.4,
      "out_seconds": 22.6,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "pan-left"
    },
    {
      "id": "18b",
      "source": "video005/images/18b.png",
      "in_seconds": 22.6,
      "out_seconds": 25.0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "pan-right"
    },
    {
      "id": "18c",
      "source": "video005/images/18c.png",
      "in_seconds": 25.0,
      "out_seconds": 34.5,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in"
    },
    {
      "id": "20d",
      "source": "video005/video/plano-20d-comparacion-suelo.mp4",
      "in_seconds": 34.5,
      "out_seconds": 39.7,
      "source_in_seconds": 0.0,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "playbackRate": 1.2,
      "transform": {
        "scale": 1.8
      }
    },
    {
      "id": "34d-close",
      "source": "video005/images/34d.png",
      "in_seconds": 39.7,
      "out_seconds": 43.0,
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5,
      "animation": "zoom-out",
      "backgroundColor": "transparent"
    },
    {
      "id": "cta",
      "source": "",
      "type": "cta_card",
      "in_seconds": 43.0,
      "out_seconds": 47.595063,
      "text": "SIGUENOS PARA PARTE 2"
    }
  ],
  "overlays": [
    {
      "type": "impact_stamp",
      "in_seconds": 0.5,
      "out_seconds": 2.0,
      "text": "RECUPERADO"
    },
    {
      "type": "rotulo",
      "in_seconds": 2.0,
      "out_seconds": 4.1,
      "position": "top-left",
      "variant": "label",
      "text": "TRAS CASI 3 AÑOS EN EL MERCADO NEGRO"
    },
    {
      "type": "rotulo",
      "in_seconds": 9.6,
      "out_seconds": 12.0,
      "position": "top-left",
      "variant": "label",
      "text": "NEBRA, ALEMANIA",
      "subtitle": "4 de julio de 1999"
    },
    {
      "type": "rotulo",
      "in_seconds": 16.4,
      "out_seconds": 19.2,
      "position": "top-left",
      "variant": "label",
      "text": "1600-1500 a. C."
    },
    {
      "type": "rotulo",
      "in_seconds": 40.0,
      "out_seconds": 43.0,
      "position": "top-left",
      "variant": "label",
      "text": "MEMORIA DEL MUNDO",
      "subtitle": "UNESCO"
    }
  ],
  "watermarkSrc": WATERMARK,
  "brandBackground": true,
  "themeConfig": THEME,
  "captionsPhraseAware": true,
  "captions": [
    {
      "word": "Este",
      "startMs": 0,
      "endMs": 240,
      "pageBreakAfter": false
    },
    {
      "word": "Artilugio",
      "startMs": 240,
      "endMs": 840,
      "pageBreakAfter": false
    },
    {
      "word": "estuvo",
      "startMs": 840,
      "endMs": 1240,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 1240,
      "endMs": 1380,
      "pageBreakAfter": false
    },
    {
      "word": "punto",
      "startMs": 1380,
      "endMs": 1500,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 1500,
      "endMs": 1740,
      "pageBreakAfter": false
    },
    {
      "word": "desaparecer",
      "startMs": 1740,
      "endMs": 2280,
      "pageBreakAfter": false
    },
    {
      "word": "para",
      "startMs": 2280,
      "endMs": 2480,
      "pageBreakAfter": false
    },
    {
      "word": "siempre",
      "startMs": 2480,
      "endMs": 2800,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 2800,
      "endMs": 3020,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 3020,
      "endMs": 3120,
      "pageBreakAfter": false
    },
    {
      "word": "mercado",
      "startMs": 3120,
      "endMs": 3400,
      "pageBreakAfter": false
    },
    {
      "word": "negro.",
      "startMs": 3400,
      "endMs": 3850,
      "pageBreakAfter": true
    },
    {
      "word": "En",
      "startMs": 4340,
      "endMs": 4540,
      "pageBreakAfter": false
    },
    {
      "word": "1999,",
      "startMs": 4540,
      "endMs": 5550,
      "pageBreakAfter": true
    },
    {
      "word": "dos",
      "startMs": 6360,
      "endMs": 6600,
      "pageBreakAfter": false
    },
    {
      "word": "expoliadores",
      "startMs": 6600,
      "endMs": 7160,
      "pageBreakAfter": false
    },
    {
      "word": "lo",
      "startMs": 7160,
      "endMs": 7460,
      "pageBreakAfter": false
    },
    {
      "word": "encontraron",
      "startMs": 7460,
      "endMs": 8020,
      "pageBreakAfter": false
    },
    {
      "word": "ilegalmente",
      "startMs": 8020,
      "endMs": 8640,
      "pageBreakAfter": true
    },
    {
      "word": "con",
      "startMs": 8640,
      "endMs": 8840,
      "pageBreakAfter": false
    },
    {
      "word": "detectores",
      "startMs": 8840,
      "endMs": 9340,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 9340,
      "endMs": 9480,
      "pageBreakAfter": false
    },
    {
      "word": "metales",
      "startMs": 9480,
      "endMs": 9780,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 9780,
      "endMs": 9980,
      "pageBreakAfter": true
    },
    {
      "word": "un",
      "startMs": 9980,
      "endMs": 10080,
      "pageBreakAfter": false
    },
    {
      "word": "bosque",
      "startMs": 10080,
      "endMs": 10380,
      "pageBreakAfter": false
    },
    {
      "word": "cercano",
      "startMs": 10380,
      "endMs": 10760,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 10760,
      "endMs": 10920,
      "pageBreakAfter": false
    },
    {
      "word": "Nebra,",
      "startMs": 10920,
      "endMs": 11500,
      "pageBreakAfter": true
    },
    {
      "word": "Alemania.",
      "startMs": 11500,
      "endMs": 11970,
      "pageBreakAfter": true
    },
    {
      "word": "No",
      "startMs": 12520,
      "endMs": 12760,
      "pageBreakAfter": false
    },
    {
      "word": "sabían",
      "startMs": 12760,
      "endMs": 13100,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 13100,
      "endMs": 13300,
      "pageBreakAfter": false
    },
    {
      "word": "habían",
      "startMs": 13300,
      "endMs": 13540,
      "pageBreakAfter": false
    },
    {
      "word": "desenterrado",
      "startMs": 13540,
      "endMs": 14220,
      "pageBreakAfter": true
    },
    {
      "word": "una",
      "startMs": 14220,
      "endMs": 14560,
      "pageBreakAfter": false
    },
    {
      "word": "pieza",
      "startMs": 14560,
      "endMs": 14900,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 14900,
      "endMs": 15020,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 15020,
      "endMs": 15120,
      "pageBreakAfter": false
    },
    {
      "word": "Edad",
      "startMs": 15100,
      "endMs": 15320,
      "pageBreakAfter": true
    },
    {
      "word": "del",
      "startMs": 15320,
      "endMs": 15480,
      "pageBreakAfter": false
    },
    {
      "word": "Bronce,",
      "startMs": 15480,
      "endMs": 16200,
      "pageBreakAfter": true
    },
    {
      "word": "enterrada",
      "startMs": 16200,
      "endMs": 16660,
      "pageBreakAfter": false
    },
    {
      "word": "allí",
      "startMs": 16660,
      "endMs": 16980,
      "pageBreakAfter": false
    },
    {
      "word": "desde",
      "startMs": 16980,
      "endMs": 17180,
      "pageBreakAfter": false
    },
    {
      "word": "hace",
      "startMs": 17180,
      "endMs": 17420,
      "pageBreakAfter": false
    },
    {
      "word": "más",
      "startMs": 17420,
      "endMs": 17640,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 17640,
      "endMs": 17820,
      "pageBreakAfter": false
    },
    {
      "word": "3.500",
      "startMs": 17820,
      "endMs": 18560,
      "pageBreakAfter": false
    },
    {
      "word": "años.",
      "startMs": 18560,
      "endMs": 19210,
      "pageBreakAfter": true
    },
    {
      "word": "El",
      "startMs": 19880,
      "endMs": 20060,
      "pageBreakAfter": false
    },
    {
      "word": "disco",
      "startMs": 20060,
      "endMs": 20300,
      "pageBreakAfter": false
    },
    {
      "word": "pasó",
      "startMs": 20300,
      "endMs": 20560,
      "pageBreakAfter": false
    },
    {
      "word": "casi",
      "startMs": 20560,
      "endMs": 20840,
      "pageBreakAfter": false
    },
    {
      "word": "tres",
      "startMs": 20840,
      "endMs": 21060,
      "pageBreakAfter": true
    },
    {
      "word": "años",
      "startMs": 21060,
      "endMs": 21320,
      "pageBreakAfter": false
    },
    {
      "word": "circulando",
      "startMs": 21320,
      "endMs": 21860,
      "pageBreakAfter": false
    },
    {
      "word": "por",
      "startMs": 21860,
      "endMs": 22100,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 22100,
      "endMs": 22200,
      "pageBreakAfter": false
    },
    {
      "word": "mercado",
      "startMs": 22200,
      "endMs": 22500,
      "pageBreakAfter": true
    },
    {
      "word": "negro,",
      "startMs": 22500,
      "endMs": 23260,
      "pageBreakAfter": false
    },
    {
      "word": "lejos",
      "startMs": 23260,
      "endMs": 23520,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 23520,
      "endMs": 23680,
      "pageBreakAfter": false
    },
    {
      "word": "arqueólogos",
      "startMs": 23680,
      "endMs": 24240,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 24240,
      "endMs": 24340,
      "pageBreakAfter": true
    },
    {
      "word": "museos.",
      "startMs": 24340,
      "endMs": 25290,
      "pageBreakAfter": true
    },
    {
      "word": "Hasta",
      "startMs": 25290,
      "endMs": 25560,
      "pageBreakAfter": false
    },
    {
      "word": "que,",
      "startMs": 25560,
      "endMs": 26040,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 26040,
      "endMs": 26180,
      "pageBreakAfter": false
    },
    {
      "word": "23",
      "startMs": 26180,
      "endMs": 26560,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 26560,
      "endMs": 26780,
      "pageBreakAfter": false
    },
    {
      "word": "febrero",
      "startMs": 26780,
      "endMs": 27120,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 27120,
      "endMs": 27220,
      "pageBreakAfter": true
    },
    {
      "word": "2002,",
      "startMs": 27220,
      "endMs": 27870,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 28340,
      "endMs": 28440,
      "pageBreakAfter": false
    },
    {
      "word": "policía",
      "startMs": 28420,
      "endMs": 28820,
      "pageBreakAfter": false
    },
    {
      "word": "suiza",
      "startMs": 28820,
      "endMs": 29120,
      "pageBreakAfter": false
    },
    {
      "word": "organizó",
      "startMs": 29120,
      "endMs": 29600,
      "pageBreakAfter": true
    },
    {
      "word": "una",
      "startMs": 29600,
      "endMs": 29720,
      "pageBreakAfter": false
    },
    {
      "word": "operación",
      "startMs": 29720,
      "endMs": 30180,
      "pageBreakAfter": false
    },
    {
      "word": "encubierta",
      "startMs": 30180,
      "endMs": 30740,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 30740,
      "endMs": 30860,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 30860,
      "endMs": 30960,
      "pageBreakAfter": true
    },
    {
      "word": "hotel",
      "startMs": 30960,
      "endMs": 31160,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 31160,
      "endMs": 31300,
      "pageBreakAfter": false
    },
    {
      "word": "Basilea.",
      "startMs": 31300,
      "endMs": 32320,
      "pageBreakAfter": true
    },
    {
      "word": "Allí",
      "startMs": 32320,
      "endMs": 32560,
      "pageBreakAfter": false
    },
    {
      "word": "recuperaron",
      "startMs": 32560,
      "endMs": 33060,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 33060,
      "endMs": 33260,
      "pageBreakAfter": false
    },
    {
      "word": "disco",
      "startMs": 33260,
      "endMs": 33500,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 33500,
      "endMs": 33620,
      "pageBreakAfter": true
    },
    {
      "word": "Nebra.",
      "startMs": 33620,
      "endMs": 33970,
      "pageBreakAfter": true
    },
    {
      "word": "Después,",
      "startMs": 34540,
      "endMs": 35320,
      "pageBreakAfter": false
    },
    {
      "word": "las",
      "startMs": 35320,
      "endMs": 35440,
      "pageBreakAfter": false
    },
    {
      "word": "pruebas",
      "startMs": 35440,
      "endMs": 35780,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 35780,
      "endMs": 35920,
      "pageBreakAfter": false
    },
    {
      "word": "suelo",
      "startMs": 35920,
      "endMs": 36260,
      "pageBreakAfter": true
    },
    {
      "word": "y",
      "startMs": 36260,
      "endMs": 36500,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 36500,
      "endMs": 36600,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 36580,
      "endMs": 36680,
      "pageBreakAfter": false
    },
    {
      "word": "excavación",
      "startMs": 36680,
      "endMs": 37260,
      "pageBreakAfter": false
    },
    {
      "word": "confirmaron",
      "startMs": 37260,
      "endMs": 38100,
      "pageBreakAfter": true
    },
    {
      "word": "su",
      "startMs": 38100,
      "endMs": 38320,
      "pageBreakAfter": false
    },
    {
      "word": "lugar",
      "startMs": 38320,
      "endMs": 38580,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 38580,
      "endMs": 38720,
      "pageBreakAfter": false
    },
    {
      "word": "origen.",
      "startMs": 38720,
      "endMs": 39250,
      "pageBreakAfter": true
    },
    {
      "word": "A",
      "startMs": 39740,
      "endMs": 39840,
      "pageBreakAfter": false
    },
    {
      "word": "veces",
      "startMs": 39820,
      "endMs": 40020,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 40020,
      "endMs": 40280,
      "pageBreakAfter": false
    },
    {
      "word": "historia",
      "startMs": 40280,
      "endMs": 40600,
      "pageBreakAfter": false
    },
    {
      "word": "no",
      "startMs": 40600,
      "endMs": 40820,
      "pageBreakAfter": true
    },
    {
      "word": "se",
      "startMs": 40820,
      "endMs": 40960,
      "pageBreakAfter": false
    },
    {
      "word": "descubre,",
      "startMs": 40960,
      "endMs": 41820,
      "pageBreakAfter": true
    },
    {
      "word": "se",
      "startMs": 41820,
      "endMs": 42000,
      "pageBreakAfter": false
    },
    {
      "word": "rescata.",
      "startMs": 42000,
      "endMs": 42570,
      "pageBreakAfter": true
    },
    {
      "word": "Síguenos",
      "startMs": 43080,
      "endMs": 43500,
      "pageBreakAfter": false
    },
    {
      "word": "para",
      "startMs": 43500,
      "endMs": 43720,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 43720,
      "endMs": 43860,
      "pageBreakAfter": false
    },
    {
      "word": "parte",
      "startMs": 43860,
      "endMs": 44040,
      "pageBreakAfter": false
    },
    {
      "word": "2,",
      "startMs": 44040,
      "endMs": 44720,
      "pageBreakAfter": true
    },
    {
      "word": "cómo",
      "startMs": 44720,
      "endMs": 44900,
      "pageBreakAfter": false
    },
    {
      "word": "demostraron",
      "startMs": 44900,
      "endMs": 45480,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 45480,
      "endMs": 45620,
      "pageBreakAfter": false
    },
    {
      "word": "venía",
      "startMs": 45620,
      "endMs": 45960,
      "pageBreakAfter": false
    },
    {
      "word": "exactamente",
      "startMs": 45960,
      "endMs": 46360,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 46360,
      "endMs": 46720,
      "pageBreakAfter": false
    },
    {
      "word": "ese",
      "startMs": 46720,
      "endMs": 46860,
      "pageBreakAfter": false
    },
    {
      "word": "monte.",
      "startMs": 46860,
      "endMs": 47100,
      "pageBreakAfter": true
    }
  ],
  "audio": {
    "narration": {
      "src": "video005/shorts-audio/short1-narration.mp3",
      "volume": 1.5849
    },
    "music": {
      "src": "video005/shorts-audio/short1-music.mp3",
      "volume": 0.0923,
      "fadeInSeconds": 0.5,
      "fadeOutSeconds": 1.0,
      "loop": true
    }
  }
};


// ---------------------------------------------------------------------------
// Short 2 - "LA PRUEBA ENTERRADA" (Parte 2)
// Locucion: 005_DiscoNebra_Short2_Prueba.mp3 (37.799125s, integra, incluye el CTA final).
// ---------------------------------------------------------------------------
export const short2PruebaFixture: ExplainerProps = {
  "cuts": [
    {
      "id": "20c-teaser",
      "source": "video005/images/20c.png",
      "in_seconds": 0.0,
      "out_seconds": 4.6,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "transform": {
        "scale": 1.4
      }
    },
    {
      "id": "20a",
      "source": "video005/images/20a.png",
      "in_seconds": 4.6,
      "out_seconds": 10.3,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "ken-burns"
    },
    {
      "id": "20b",
      "source": "video005/images/20b.png",
      "in_seconds": 10.3,
      "out_seconds": 15.9,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in"
    },
    {
      "id": "20c",
      "source": "video005/images/20c.png",
      "in_seconds": 15.9,
      "out_seconds": 22.0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-out"
    },
    {
      "id": "20d",
      "source": "video005/video/plano-20d-comparacion-suelo.mp4",
      "in_seconds": 22.0,
      "out_seconds": 28.4,
      "source_in_seconds": 0.0,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "playbackRate": 0.973,
      "transform": {
        "scale": 1.8
      }
    },
    {
      "id": "34d",
      "source": "video005/images/34d.png",
      "in_seconds": 28.4,
      "out_seconds": 34.0,
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5,
      "animation": "zoom-out",
      "backgroundColor": "transparent"
    },
    {
      "id": "cta",
      "source": "",
      "type": "cta_card",
      "in_seconds": 34.0,
      "out_seconds": 37.799125,
      "text": "SIGUENOS PARA PARTE 3"
    }
  ],
  "overlays": [
    {
      "type": "monumental_title",
      "in_seconds": 0.0,
      "out_seconds": 3.4,
      "position": "center",
      "text": "¿DE DÓNDE\nSALIÓ?"
    },
    {
      "type": "rotulo",
      "in_seconds": 5.4,
      "out_seconds": 9.8,
      "position": "top-left",
      "variant": "label",
      "text": "MITTELBERG, ALEMANIA"
    },
    {
      "type": "monumental_title",
      "in_seconds": 29.2,
      "out_seconds": 33.6,
      "position": "center",
      "text": "LA TIERRA\nHABLÓ"
    }
  ],
  "watermarkSrc": WATERMARK,
  "brandBackground": true,
  "themeConfig": THEME,
  "captionsPhraseAware": true,
  "captions": [
    {
      "word": "¿Y",
      "startMs": 0,
      "endMs": 160,
      "pageBreakAfter": false
    },
    {
      "word": "si",
      "startMs": 160,
      "endMs": 260,
      "pageBreakAfter": false
    },
    {
      "word": "los",
      "startMs": 240,
      "endMs": 400,
      "pageBreakAfter": false
    },
    {
      "word": "expoliadores",
      "startMs": 400,
      "endMs": 980,
      "pageBreakAfter": false
    },
    {
      "word": "se",
      "startMs": 980,
      "endMs": 1200,
      "pageBreakAfter": true
    },
    {
      "word": "hubieran",
      "startMs": 1200,
      "endMs": 1440,
      "pageBreakAfter": false
    },
    {
      "word": "inventado",
      "startMs": 1440,
      "endMs": 1940,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 1940,
      "endMs": 2080,
      "pageBreakAfter": false
    },
    {
      "word": "lugar",
      "startMs": 2080,
      "endMs": 2280,
      "pageBreakAfter": false
    },
    {
      "word": "donde",
      "startMs": 2280,
      "endMs": 2520,
      "pageBreakAfter": true
    },
    {
      "word": "encontraron",
      "startMs": 2520,
      "endMs": 3140,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 3140,
      "endMs": 3260,
      "pageBreakAfter": false
    },
    {
      "word": "disco",
      "startMs": 3260,
      "endMs": 3520,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 3520,
      "endMs": 3640,
      "pageBreakAfter": false
    },
    {
      "word": "Nebra?",
      "startMs": 3640,
      "endMs": 3990,
      "pageBreakAfter": true
    },
    {
      "word": "Después",
      "startMs": 4800,
      "endMs": 5060,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 5060,
      "endMs": 5300,
      "pageBreakAfter": false
    },
    {
      "word": "recuperar",
      "startMs": 5300,
      "endMs": 5800,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 5800,
      "endMs": 5920,
      "pageBreakAfter": false
    },
    {
      "word": "pieza,",
      "startMs": 5920,
      "endMs": 6660,
      "pageBreakAfter": true
    },
    {
      "word": "los",
      "startMs": 6660,
      "endMs": 6760,
      "pageBreakAfter": false
    },
    {
      "word": "arqueólogos",
      "startMs": 6720,
      "endMs": 7340,
      "pageBreakAfter": false
    },
    {
      "word": "excavaron",
      "startMs": 7340,
      "endMs": 7840,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 7840,
      "endMs": 8020,
      "pageBreakAfter": false
    },
    {
      "word": "punto",
      "startMs": 8020,
      "endMs": 8240,
      "pageBreakAfter": true
    },
    {
      "word": "exacto",
      "startMs": 8240,
      "endMs": 8740,
      "pageBreakAfter": false
    },
    {
      "word": "señalado",
      "startMs": 8740,
      "endMs": 9140,
      "pageBreakAfter": false
    },
    {
      "word": "por",
      "startMs": 9140,
      "endMs": 9360,
      "pageBreakAfter": false
    },
    {
      "word": "los",
      "startMs": 9360,
      "endMs": 9500,
      "pageBreakAfter": false
    },
    {
      "word": "ladrones.",
      "startMs": 9500,
      "endMs": 10010,
      "pageBreakAfter": true
    },
    {
      "word": "Y",
      "startMs": 10480,
      "endMs": 10740,
      "pageBreakAfter": false
    },
    {
      "word": "allí",
      "startMs": 10740,
      "endMs": 10960,
      "pageBreakAfter": false
    },
    {
      "word": "apareció",
      "startMs": 10960,
      "endMs": 11420,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 11420,
      "endMs": 11560,
      "pageBreakAfter": false
    },
    {
      "word": "primera",
      "startMs": 11560,
      "endMs": 11840,
      "pageBreakAfter": true
    },
    {
      "word": "pista,",
      "startMs": 11840,
      "endMs": 12720,
      "pageBreakAfter": false
    },
    {
      "word": "fragmentos",
      "startMs": 12720,
      "endMs": 13420,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 13420,
      "endMs": 13520,
      "pageBreakAfter": false
    },
    {
      "word": "una",
      "startMs": 13520,
      "endMs": 13700,
      "pageBreakAfter": false
    },
    {
      "word": "botella",
      "startMs": 13700,
      "endMs": 14020,
      "pageBreakAfter": true
    },
    {
      "word": "rota",
      "startMs": 14020,
      "endMs": 14360,
      "pageBreakAfter": false
    },
    {
      "word": "dentro",
      "startMs": 14360,
      "endMs": 14620,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 14620,
      "endMs": 14800,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 14800,
      "endMs": 14900,
      "pageBreakAfter": false
    },
    {
      "word": "fosa.",
      "startMs": 14900,
      "endMs": 15290,
      "pageBreakAfter": true
    },
    {
      "word": "También",
      "startMs": 16000,
      "endMs": 16360,
      "pageBreakAfter": false
    },
    {
      "word": "encontraron",
      "startMs": 16360,
      "endMs": 16920,
      "pageBreakAfter": false
    },
    {
      "word": "marcas",
      "startMs": 16920,
      "endMs": 17240,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 17240,
      "endMs": 17420,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 17420,
      "endMs": 17520,
      "pageBreakAfter": true
    },
    {
      "word": "pared",
      "startMs": 17500,
      "endMs": 17740,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 17740,
      "endMs": 17880,
      "pageBreakAfter": false
    },
    {
      "word": "agujero,",
      "startMs": 17880,
      "endMs": 18580,
      "pageBreakAfter": true
    },
    {
      "word": "que",
      "startMs": 18580,
      "endMs": 18740,
      "pageBreakAfter": false
    },
    {
      "word": "coincidían",
      "startMs": 18740,
      "endMs": 19280,
      "pageBreakAfter": false
    },
    {
      "word": "con",
      "startMs": 19280,
      "endMs": 19460,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 19460,
      "endMs": 19600,
      "pageBreakAfter": false
    },
    {
      "word": "piqueta",
      "startMs": 19600,
      "endMs": 19940,
      "pageBreakAfter": true
    },
    {
      "word": "utilizada",
      "startMs": 19940,
      "endMs": 20480,
      "pageBreakAfter": false
    },
    {
      "word": "para",
      "startMs": 20480,
      "endMs": 20720,
      "pageBreakAfter": false
    },
    {
      "word": "extraer",
      "startMs": 20720,
      "endMs": 21120,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 21120,
      "endMs": 21260,
      "pageBreakAfter": false
    },
    {
      "word": "tesoro,",
      "startMs": 21260,
      "endMs": 22020,
      "pageBreakAfter": true
    },
    {
      "word": "pero",
      "startMs": 22020,
      "endMs": 22280,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 22280,
      "endMs": 22400,
      "pageBreakAfter": false
    },
    {
      "word": "prueba",
      "startMs": 22400,
      "endMs": 22620,
      "pageBreakAfter": false
    },
    {
      "word": "más",
      "startMs": 22620,
      "endMs": 22880,
      "pageBreakAfter": false
    },
    {
      "word": "poderosa",
      "startMs": 22880,
      "endMs": 23320,
      "pageBreakAfter": true
    },
    {
      "word": "estaba",
      "startMs": 23320,
      "endMs": 23660,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 23660,
      "endMs": 23820,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 23820,
      "endMs": 23920,
      "pageBreakAfter": false
    },
    {
      "word": "tierra.",
      "startMs": 23900,
      "endMs": 24290,
      "pageBreakAfter": true
    },
    {
      "word": "El",
      "startMs": 24760,
      "endMs": 24920,
      "pageBreakAfter": false
    },
    {
      "word": "sedimento",
      "startMs": 24920,
      "endMs": 25420,
      "pageBreakAfter": false
    },
    {
      "word": "adherido",
      "startMs": 25420,
      "endMs": 25720,
      "pageBreakAfter": false
    },
    {
      "word": "al",
      "startMs": 25720,
      "endMs": 25880,
      "pageBreakAfter": false
    },
    {
      "word": "disco",
      "startMs": 25880,
      "endMs": 26180,
      "pageBreakAfter": true
    },
    {
      "word": "coincidía",
      "startMs": 26180,
      "endMs": 27140,
      "pageBreakAfter": false
    },
    {
      "word": "con",
      "startMs": 27140,
      "endMs": 27320,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 27320,
      "endMs": 27460,
      "pageBreakAfter": false
    },
    {
      "word": "suelo",
      "startMs": 27460,
      "endMs": 27720,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 27720,
      "endMs": 27920,
      "pageBreakAfter": true
    },
    {
      "word": "Mittelberg.",
      "startMs": 27920,
      "endMs": 28420,
      "pageBreakAfter": true
    },
    {
      "word": "El",
      "startMs": 28420,
      "endMs": 29280,
      "pageBreakAfter": false
    },
    {
      "word": "disco",
      "startMs": 29280,
      "endMs": 29560,
      "pageBreakAfter": false
    },
    {
      "word": "no",
      "startMs": 29560,
      "endMs": 29800,
      "pageBreakAfter": false
    },
    {
      "word": "solo",
      "startMs": 29800,
      "endMs": 30000,
      "pageBreakAfter": false
    },
    {
      "word": "había",
      "startMs": 30000,
      "endMs": 30260,
      "pageBreakAfter": true
    },
    {
      "word": "sido",
      "startMs": 30260,
      "endMs": 30560,
      "pageBreakAfter": false
    },
    {
      "word": "recuperado,",
      "startMs": 30560,
      "endMs": 31660,
      "pageBreakAfter": true
    },
    {
      "word": "la",
      "startMs": 31660,
      "endMs": 31780,
      "pageBreakAfter": false
    },
    {
      "word": "propia",
      "startMs": 31780,
      "endMs": 31980,
      "pageBreakAfter": false
    },
    {
      "word": "tierra",
      "startMs": 31980,
      "endMs": 32340,
      "pageBreakAfter": false
    },
    {
      "word": "confirmó",
      "startMs": 32340,
      "endMs": 32940,
      "pageBreakAfter": false
    },
    {
      "word": "su",
      "startMs": 32940,
      "endMs": 33060,
      "pageBreakAfter": true
    },
    {
      "word": "historia.",
      "startMs": 33060,
      "endMs": 33590,
      "pageBreakAfter": true
    },
    {
      "word": "Síguenos",
      "startMs": 34100,
      "endMs": 34520,
      "pageBreakAfter": false
    },
    {
      "word": "para",
      "startMs": 34520,
      "endMs": 34740,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 34740,
      "endMs": 34860,
      "pageBreakAfter": false
    },
    {
      "word": "parte",
      "startMs": 34860,
      "endMs": 35060,
      "pageBreakAfter": false
    },
    {
      "word": "3,",
      "startMs": 35060,
      "endMs": 35900,
      "pageBreakAfter": true
    },
    {
      "word": "lo",
      "startMs": 35900,
      "endMs": 36000,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 36000,
      "endMs": 36140,
      "pageBreakAfter": false
    },
    {
      "word": "enterraron",
      "startMs": 36140,
      "endMs": 36700,
      "pageBreakAfter": false
    },
    {
      "word": "junto",
      "startMs": 36700,
      "endMs": 36900,
      "pageBreakAfter": false
    },
    {
      "word": "al",
      "startMs": 36900,
      "endMs": 37140,
      "pageBreakAfter": true
    },
    {
      "word": "disco.",
      "startMs": 37140,
      "endMs": 37380,
      "pageBreakAfter": true
    }
  ],
  "audio": {
    "narration": {
      "src": "video005/shorts-audio/short2-narration.mp3",
      "volume": 1.6032
    },
    "music": {
      "src": "video005/shorts-audio/short2-music.mp3",
      "volume": 0.9441,
      "fadeInSeconds": 0.5,
      "fadeOutSeconds": 1.0,
      "loop": true
    }
  }
};


// ---------------------------------------------------------------------------
// Short 3 - "EL TESORO QUE ENTERRARON" (Parte 3)
// Locucion: 005_DiscoNebra_Short3_Tesoro.mp3 (40.280816s, integra, incluye el CTA final).
// ---------------------------------------------------------------------------
export const short3TesoroFixture: ExplainerProps = {
  "cuts": [
    {
      "id": "15a-disco",
      "source": "video005/images/15a.png",
      "in_seconds": 0.0,
      "out_seconds": 5.3,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "pan-right",
      "transform": {
        "position": {
          "x": 15,
          "y": 50
        }
      }
    },
    {
      "id": "16",
      "source": "video005/images/16.png",
      "in_seconds": 5.3,
      "out_seconds": 13.4,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "ken-burns"
    },
    {
      "id": "15a-espadas",
      "source": "video005/images/15a.png",
      "in_seconds": 13.4,
      "out_seconds": 17.7,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "transform": {
        "position": {
          "x": 63,
          "y": 50
        }
      }
    },
    {
      "id": "15a-hachas",
      "source": "video005/images/15a.png",
      "in_seconds": 17.7,
      "out_seconds": 22.0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "pan-left",
      "transform": {
        "position": {
          "x": 94,
          "y": 50
        }
      }
    },
    {
      "id": "4a",
      "source": "video005/images/4a.png",
      "in_seconds": 22.0,
      "out_seconds": 27.8,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "pan-left"
    },
    {
      "id": "33",
      "source": "video005/images/33.png",
      "in_seconds": 27.8,
      "out_seconds": 35.6,
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "transform": {
        "position": {
          "x": 58,
          "y": 50
        }
      },
      "backgroundColor": "transparent"
    },
    {
      "id": "cta",
      "source": "",
      "type": "cta_card",
      "in_seconds": 35.6,
      "out_seconds": 40.280816,
      "text": "SIGUENOS PARA PARTE 4"
    }
  ],
  "overlays": [
    {
      "type": "monumental_title",
      "in_seconds": 0.0,
      "out_seconds": 3.4,
      "position": "center",
      "text": "NO ESTABA\nSOLO"
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
      "word": "disco",
      "startMs": 180,
      "endMs": 440,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 440,
      "endMs": 580,
      "pageBreakAfter": false
    },
    {
      "word": "Nebra",
      "startMs": 580,
      "endMs": 820,
      "pageBreakAfter": false
    },
    {
      "word": "no",
      "startMs": 820,
      "endMs": 1240,
      "pageBreakAfter": true
    },
    {
      "word": "fue",
      "startMs": 1240,
      "endMs": 1440,
      "pageBreakAfter": false
    },
    {
      "word": "enterrado",
      "startMs": 1440,
      "endMs": 1860,
      "pageBreakAfter": false
    },
    {
      "word": "solo,",
      "startMs": 1860,
      "endMs": 2520,
      "pageBreakAfter": true
    },
    {
      "word": "lo",
      "startMs": 2520,
      "endMs": 2660,
      "pageBreakAfter": false
    },
    {
      "word": "acompañaban",
      "startMs": 2660,
      "endMs": 3200,
      "pageBreakAfter": false
    },
    {
      "word": "armas,",
      "startMs": 3200,
      "endMs": 3820,
      "pageBreakAfter": true
    },
    {
      "word": "herramientas",
      "startMs": 3820,
      "endMs": 4380,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 4380,
      "endMs": 4500,
      "pageBreakAfter": false
    },
    {
      "word": "joyas.",
      "startMs": 4500,
      "endMs": 5400,
      "pageBreakAfter": true
    },
    {
      "word": "El",
      "startMs": 5400,
      "endMs": 5540,
      "pageBreakAfter": false
    },
    {
      "word": "conjunto",
      "startMs": 5540,
      "endMs": 5860,
      "pageBreakAfter": false
    },
    {
      "word": "fue",
      "startMs": 5860,
      "endMs": 6160,
      "pageBreakAfter": false
    },
    {
      "word": "depositado",
      "startMs": 6160,
      "endMs": 6700,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 6700,
      "endMs": 6840,
      "pageBreakAfter": true
    },
    {
      "word": "una",
      "startMs": 6840,
      "endMs": 6980,
      "pageBreakAfter": false
    },
    {
      "word": "fosa",
      "startMs": 6980,
      "endMs": 7280,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 7280,
      "endMs": 7400,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 7400,
      "endMs": 7500,
      "pageBreakAfter": false
    },
    {
      "word": "cima",
      "startMs": 7500,
      "endMs": 7720,
      "pageBreakAfter": true
    },
    {
      "word": "del",
      "startMs": 7720,
      "endMs": 7900,
      "pageBreakAfter": false
    },
    {
      "word": "monte",
      "startMs": 7900,
      "endMs": 8080,
      "pageBreakAfter": false
    },
    {
      "word": "Mittelberg,",
      "startMs": 8080,
      "endMs": 8960,
      "pageBreakAfter": true
    },
    {
      "word": "en",
      "startMs": 8960,
      "endMs": 9080,
      "pageBreakAfter": false
    },
    {
      "word": "algún",
      "startMs": 9080,
      "endMs": 9300,
      "pageBreakAfter": false
    },
    {
      "word": "momento,",
      "startMs": 9300,
      "endMs": 10000,
      "pageBreakAfter": true
    },
    {
      "word": "entre",
      "startMs": 10000,
      "endMs": 10220,
      "pageBreakAfter": false
    },
    {
      "word": "1600",
      "startMs": 10220,
      "endMs": 10520,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 10520,
      "endMs": 11140,
      "pageBreakAfter": false
    },
    {
      "word": "1500",
      "startMs": 11140,
      "endMs": 11560,
      "pageBreakAfter": false
    },
    {
      "word": "a. C.",
      "startMs": 11560,
      "endMs": 12490,
      "pageBreakAfter": true
    },
    {
      "word": "Junto",
      "startMs": 13620,
      "endMs": 13900,
      "pageBreakAfter": false
    },
    {
      "word": "al",
      "startMs": 13900,
      "endMs": 14000,
      "pageBreakAfter": false
    },
    {
      "word": "disco",
      "startMs": 14000,
      "endMs": 14240,
      "pageBreakAfter": false
    },
    {
      "word": "había",
      "startMs": 14240,
      "endMs": 14500,
      "pageBreakAfter": false
    },
    {
      "word": "dos",
      "startMs": 14500,
      "endMs": 14720,
      "pageBreakAfter": true
    },
    {
      "word": "espadas",
      "startMs": 14720,
      "endMs": 15100,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 15100,
      "endMs": 15280,
      "pageBreakAfter": false
    },
    {
      "word": "bronce",
      "startMs": 15280,
      "endMs": 15600,
      "pageBreakAfter": false
    },
    {
      "word": "con",
      "startMs": 15600,
      "endMs": 15780,
      "pageBreakAfter": false
    },
    {
      "word": "empuñaduras",
      "startMs": 15780,
      "endMs": 16340,
      "pageBreakAfter": true
    },
    {
      "word": "decoradas",
      "startMs": 16340,
      "endMs": 16840,
      "pageBreakAfter": false
    },
    {
      "word": "con",
      "startMs": 16840,
      "endMs": 17060,
      "pageBreakAfter": false
    },
    {
      "word": "oro.",
      "startMs": 17060,
      "endMs": 17740,
      "pageBreakAfter": true
    },
    {
      "word": "También",
      "startMs": 17740,
      "endMs": 18020,
      "pageBreakAfter": false
    },
    {
      "word": "encontraron",
      "startMs": 18020,
      "endMs": 18560,
      "pageBreakAfter": false
    },
    {
      "word": "dos",
      "startMs": 18560,
      "endMs": 18720,
      "pageBreakAfter": false
    },
    {
      "word": "hachas,",
      "startMs": 18720,
      "endMs": 19400,
      "pageBreakAfter": true
    },
    {
      "word": "un",
      "startMs": 19400,
      "endMs": 19500,
      "pageBreakAfter": false
    },
    {
      "word": "cincel",
      "startMs": 19480,
      "endMs": 19840,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 19840,
      "endMs": 20280,
      "pageBreakAfter": false
    },
    {
      "word": "dos",
      "startMs": 20280,
      "endMs": 20400,
      "pageBreakAfter": false
    },
    {
      "word": "brazaletes",
      "startMs": 20400,
      "endMs": 20860,
      "pageBreakAfter": true
    },
    {
      "word": "en",
      "startMs": 20860,
      "endMs": 21080,
      "pageBreakAfter": false
    },
    {
      "word": "espiral.",
      "startMs": 21080,
      "endMs": 21570,
      "pageBreakAfter": true
    },
    {
      "word": "Todo",
      "startMs": 22080,
      "endMs": 22280,
      "pageBreakAfter": false
    },
    {
      "word": "apunta",
      "startMs": 22280,
      "endMs": 22640,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 22640,
      "endMs": 22780,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 22780,
      "endMs": 22880,
      "pageBreakAfter": false
    },
    {
      "word": "depósito",
      "startMs": 22840,
      "endMs": 23240,
      "pageBreakAfter": true
    },
    {
      "word": "cerrado",
      "startMs": 23240,
      "endMs": 23660,
      "pageBreakAfter": false
    },
    {
      "word": "relacionado",
      "startMs": 23660,
      "endMs": 24380,
      "pageBreakAfter": false
    },
    {
      "word": "con",
      "startMs": 24380,
      "endMs": 24540,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 24540,
      "endMs": 24660,
      "pageBreakAfter": false
    },
    {
      "word": "cultura",
      "startMs": 24660,
      "endMs": 24920,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 24920,
      "endMs": 25140,
      "pageBreakAfter": false
    },
    {
      "word": "Unetice,",
      "startMs": 25140,
      "endMs": 25940,
      "pageBreakAfter": true
    },
    {
      "word": "una",
      "startMs": 25940,
      "endMs": 26120,
      "pageBreakAfter": false
    },
    {
      "word": "sociedad",
      "startMs": 26120,
      "endMs": 26400,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 26400,
      "endMs": 26620,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 26620,
      "endMs": 26720,
      "pageBreakAfter": false
    },
    {
      "word": "edad",
      "startMs": 26720,
      "endMs": 26960,
      "pageBreakAfter": true
    },
    {
      "word": "del",
      "startMs": 26960,
      "endMs": 27140,
      "pageBreakAfter": false
    },
    {
      "word": "bronce",
      "startMs": 27140,
      "endMs": 27440,
      "pageBreakAfter": false
    },
    {
      "word": "antigua.",
      "startMs": 27440,
      "endMs": 27880,
      "pageBreakAfter": true
    },
    {
      "word": "Pero",
      "startMs": 27880,
      "endMs": 28560,
      "pageBreakAfter": false
    },
    {
      "word": "hay",
      "startMs": 28560,
      "endMs": 29040,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 29040,
      "endMs": 29140,
      "pageBreakAfter": false
    },
    {
      "word": "detalle",
      "startMs": 29140,
      "endMs": 29440,
      "pageBreakAfter": false
    },
    {
      "word": "inquietante.",
      "startMs": 29440,
      "endMs": 30540,
      "pageBreakAfter": true
    },
    {
      "word": "Antes",
      "startMs": 30540,
      "endMs": 30800,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 30800,
      "endMs": 30980,
      "pageBreakAfter": false
    },
    {
      "word": "enterrarlo,",
      "startMs": 30980,
      "endMs": 31980,
      "pageBreakAfter": true
    },
    {
      "word": "alguien",
      "startMs": 31980,
      "endMs": 32320,
      "pageBreakAfter": false
    },
    {
      "word": "retiró",
      "startMs": 32320,
      "endMs": 32740,
      "pageBreakAfter": false
    },
    {
      "word": "intencionalmente",
      "startMs": 32740,
      "endMs": 33560,
      "pageBreakAfter": false
    },
    {
      "word": "uno",
      "startMs": 33560,
      "endMs": 33760,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 33760,
      "endMs": 33900,
      "pageBreakAfter": true
    },
    {
      "word": "los",
      "startMs": 33900,
      "endMs": 34000,
      "pageBreakAfter": false
    },
    {
      "word": "arcos",
      "startMs": 34000,
      "endMs": 34280,
      "pageBreakAfter": false
    },
    {
      "word": "dorados",
      "startMs": 34280,
      "endMs": 34660,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 34660,
      "endMs": 34840,
      "pageBreakAfter": false
    },
    {
      "word": "disco.",
      "startMs": 34840,
      "endMs": 35250,
      "pageBreakAfter": true
    },
    {
      "word": "Síguenos",
      "startMs": 35780,
      "endMs": 36220,
      "pageBreakAfter": false
    },
    {
      "word": "para",
      "startMs": 36220,
      "endMs": 36480,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 36480,
      "endMs": 36620,
      "pageBreakAfter": false
    },
    {
      "word": "parte",
      "startMs": 36620,
      "endMs": 36820,
      "pageBreakAfter": false
    },
    {
      "word": "4.",
      "startMs": 36820,
      "endMs": 37720,
      "pageBreakAfter": true
    },
    {
      "word": "¿Por",
      "startMs": 37720,
      "endMs": 37900,
      "pageBreakAfter": false
    },
    {
      "word": "qué",
      "startMs": 37900,
      "endMs": 38060,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 38060,
      "endMs": 38200,
      "pageBreakAfter": false
    },
    {
      "word": "disco",
      "startMs": 38200,
      "endMs": 38440,
      "pageBreakAfter": false
    },
    {
      "word": "no",
      "startMs": 38440,
      "endMs": 38600,
      "pageBreakAfter": true
    },
    {
      "word": "se",
      "startMs": 38600,
      "endMs": 38740,
      "pageBreakAfter": false
    },
    {
      "word": "fabricó",
      "startMs": 38740,
      "endMs": 39180,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 39180,
      "endMs": 39280,
      "pageBreakAfter": false
    },
    {
      "word": "una",
      "startMs": 39260,
      "endMs": 39400,
      "pageBreakAfter": false
    },
    {
      "word": "sola",
      "startMs": 39400,
      "endMs": 39600,
      "pageBreakAfter": true
    },
    {
      "word": "vez?",
      "startMs": 39600,
      "endMs": 39800,
      "pageBreakAfter": true
    }
  ],
  "audio": {
    "narration": {
      "src": "video005/shorts-audio/short3-narration.mp3",
      "volume": 1.7579
    },
    "music": {
      "src": "video005/shorts-audio/short3-music.mp3",
      "volume": 0.6839,
      "fadeInSeconds": 0.5,
      "fadeOutSeconds": 1.0,
      "loop": true
    }
  }
};


// ---------------------------------------------------------------------------
// Short 4 - "EL DISCO QUE CAMBIO" (Parte 4)
// Locucion: 005_DiscoNebra_Short4_Cambio.mp3 (40.672625s, integra, incluye el CTA final).
// ---------------------------------------------------------------------------
export const short4CambioFixture: ExplainerProps = {
  "cuts": [
    {
      "id": "f1",
      "source": "video005/video/plano-11-14-objeto-fases-construccion.mp4",
      "in_seconds": 0.0,
      "out_seconds": 11.1,
      "source_in_seconds": 0.0,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.6
      }
    },
    {
      "id": "f2",
      "source": "video005/video/plano-11-14-objeto-fases-construccion.mp4",
      "in_seconds": 11.1,
      "out_seconds": 17.3,
      "source_in_seconds": 12.9,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 2.0
      }
    },
    {
      "id": "f3",
      "source": "video005/video/plano-11-14-objeto-fases-construccion.mp4",
      "in_seconds": 17.3,
      "out_seconds": 23.3,
      "source_in_seconds": 18.7,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 2.0
      }
    },
    {
      "id": "f4",
      "source": "video005/video/plano-11-14-objeto-fases-construccion.mp4",
      "in_seconds": 23.3,
      "out_seconds": 28.6,
      "source_in_seconds": 24.7,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 2.0
      }
    },
    {
      "id": "recap",
      "source": "video005/video/plano-32-legado-recap-fases.mp4",
      "in_seconds": 28.6,
      "out_seconds": 35.8,
      "source_in_seconds": 4.0,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 2.0
      }
    },
    {
      "id": "cta",
      "source": "",
      "type": "cta_card",
      "in_seconds": 35.8,
      "out_seconds": 40.672625,
      "text": "SIGUENOS PARA PARTE 5"
    }
  ],
  "overlays": [],
  "watermarkSrc": WATERMARK,
  "brandBackground": true,
  "themeConfig": THEME,
  "captionsPhraseAware": true,
  "captions": [
    {
      "word": "El",
      "startMs": 0,
      "endMs": 200,
      "pageBreakAfter": false
    },
    {
      "word": "disco",
      "startMs": 200,
      "endMs": 460,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 460,
      "endMs": 600,
      "pageBreakAfter": false
    },
    {
      "word": "Nebra",
      "startMs": 600,
      "endMs": 820,
      "pageBreakAfter": false
    },
    {
      "word": "no",
      "startMs": 820,
      "endMs": 1160,
      "pageBreakAfter": true
    },
    {
      "word": "nació",
      "startMs": 1160,
      "endMs": 1400,
      "pageBreakAfter": false
    },
    {
      "word": "como",
      "startMs": 1400,
      "endMs": 1680,
      "pageBreakAfter": false
    },
    {
      "word": "lo",
      "startMs": 1680,
      "endMs": 1820,
      "pageBreakAfter": false
    },
    {
      "word": "vemos",
      "startMs": 1820,
      "endMs": 2000,
      "pageBreakAfter": false
    },
    {
      "word": "hoy,",
      "startMs": 2000,
      "endMs": 2480,
      "pageBreakAfter": true
    },
    {
      "word": "fue",
      "startMs": 2480,
      "endMs": 2580,
      "pageBreakAfter": false
    },
    {
      "word": "transformado",
      "startMs": 2580,
      "endMs": 3140,
      "pageBreakAfter": false
    },
    {
      "word": "varias",
      "startMs": 3140,
      "endMs": 3400,
      "pageBreakAfter": false
    },
    {
      "word": "veces.",
      "startMs": 3400,
      "endMs": 4280,
      "pageBreakAfter": true
    },
    {
      "word": "Al",
      "startMs": 4280,
      "endMs": 4400,
      "pageBreakAfter": false
    },
    {
      "word": "principio",
      "startMs": 4400,
      "endMs": 4720,
      "pageBreakAfter": false
    },
    {
      "word": "tenía",
      "startMs": 4720,
      "endMs": 5160,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 5160,
      "endMs": 5340,
      "pageBreakAfter": false
    },
    {
      "word": "fondo",
      "startMs": 5340,
      "endMs": 5540,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 5540,
      "endMs": 5720,
      "pageBreakAfter": false
    },
    {
      "word": "bronce,",
      "startMs": 5720,
      "endMs": 6460,
      "pageBreakAfter": true
    },
    {
      "word": "un",
      "startMs": 6460,
      "endMs": 6600,
      "pageBreakAfter": false
    },
    {
      "word": "gran",
      "startMs": 6600,
      "endMs": 6780,
      "pageBreakAfter": false
    },
    {
      "word": "círculo",
      "startMs": 6780,
      "endMs": 7240,
      "pageBreakAfter": false
    },
    {
      "word": "dorado,",
      "startMs": 7240,
      "endMs": 8000,
      "pageBreakAfter": true
    },
    {
      "word": "una",
      "startMs": 8000,
      "endMs": 8120,
      "pageBreakAfter": false
    },
    {
      "word": "luna",
      "startMs": 8120,
      "endMs": 8320,
      "pageBreakAfter": false
    },
    {
      "word": "creciente",
      "startMs": 8320,
      "endMs": 8880,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 8880,
      "endMs": 9260,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 9260,
      "endMs": 9400,
      "pageBreakAfter": true
    },
    {
      "word": "conjunto",
      "startMs": 9400,
      "endMs": 9820,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 9820,
      "endMs": 10080,
      "pageBreakAfter": false
    },
    {
      "word": "estrellas.",
      "startMs": 10080,
      "endMs": 11120,
      "pageBreakAfter": true
    },
    {
      "word": "Después",
      "startMs": 11120,
      "endMs": 11440,
      "pageBreakAfter": false
    },
    {
      "word": "añadieron",
      "startMs": 11440,
      "endMs": 11980,
      "pageBreakAfter": false
    },
    {
      "word": "dos",
      "startMs": 11980,
      "endMs": 12200,
      "pageBreakAfter": false
    },
    {
      "word": "arcos",
      "startMs": 12200,
      "endMs": 12440,
      "pageBreakAfter": false
    },
    {
      "word": "dorados",
      "startMs": 12440,
      "endMs": 12820,
      "pageBreakAfter": true
    },
    {
      "word": "en",
      "startMs": 12820,
      "endMs": 13000,
      "pageBreakAfter": false
    },
    {
      "word": "los",
      "startMs": 13000,
      "endMs": 13120,
      "pageBreakAfter": false
    },
    {
      "word": "laterales,",
      "startMs": 13120,
      "endMs": 13940,
      "pageBreakAfter": true
    },
    {
      "word": "relacionados",
      "startMs": 13940,
      "endMs": 14420,
      "pageBreakAfter": false
    },
    {
      "word": "con",
      "startMs": 14420,
      "endMs": 14640,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 14640,
      "endMs": 14780,
      "pageBreakAfter": false
    },
    {
      "word": "recorrido",
      "startMs": 14780,
      "endMs": 15220,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 15220,
      "endMs": 15400,
      "pageBreakAfter": true
    },
    {
      "word": "sol",
      "startMs": 15400,
      "endMs": 15640,
      "pageBreakAfter": false
    },
    {
      "word": "entre",
      "startMs": 15640,
      "endMs": 16060,
      "pageBreakAfter": false
    },
    {
      "word": "los",
      "startMs": 16060,
      "endMs": 16240,
      "pageBreakAfter": false
    },
    {
      "word": "solsticios.",
      "startMs": 16240,
      "endMs": 16870,
      "pageBreakAfter": true
    },
    {
      "word": "Más",
      "startMs": 17380,
      "endMs": 17620,
      "pageBreakAfter": false
    },
    {
      "word": "tarde",
      "startMs": 17620,
      "endMs": 17860,
      "pageBreakAfter": false
    },
    {
      "word": "incorporaron",
      "startMs": 17860,
      "endMs": 18600,
      "pageBreakAfter": false
    },
    {
      "word": "otro",
      "startMs": 18600,
      "endMs": 18780,
      "pageBreakAfter": false
    },
    {
      "word": "arco",
      "startMs": 18780,
      "endMs": 19080,
      "pageBreakAfter": true
    },
    {
      "word": "curvado",
      "startMs": 19080,
      "endMs": 19500,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 19500,
      "endMs": 19680,
      "pageBreakAfter": false
    },
    {
      "word": "estriado,",
      "startMs": 19680,
      "endMs": 20560,
      "pageBreakAfter": true
    },
    {
      "word": "interpretado",
      "startMs": 20560,
      "endMs": 21160,
      "pageBreakAfter": false
    },
    {
      "word": "generalmente",
      "startMs": 21160,
      "endMs": 21780,
      "pageBreakAfter": false
    },
    {
      "word": "como",
      "startMs": 21780,
      "endMs": 22020,
      "pageBreakAfter": false
    },
    {
      "word": "una",
      "startMs": 22020,
      "endMs": 22280,
      "pageBreakAfter": false
    },
    {
      "word": "barca",
      "startMs": 22280,
      "endMs": 22600,
      "pageBreakAfter": true
    },
    {
      "word": "solar.",
      "startMs": 22600,
      "endMs": 23440,
      "pageBreakAfter": true
    },
    {
      "word": "Y",
      "startMs": 23440,
      "endMs": 23580,
      "pageBreakAfter": false
    },
    {
      "word": "finalmente",
      "startMs": 23580,
      "endMs": 23840,
      "pageBreakAfter": false
    },
    {
      "word": "perforaron",
      "startMs": 23840,
      "endMs": 24660,
      "pageBreakAfter": false
    },
    {
      "word": "39",
      "startMs": 24660,
      "endMs": 25100,
      "pageBreakAfter": false
    },
    {
      "word": "agujeros",
      "startMs": 25100,
      "endMs": 25840,
      "pageBreakAfter": true
    },
    {
      "word": "alrededor",
      "startMs": 25840,
      "endMs": 26120,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 26120,
      "endMs": 26500,
      "pageBreakAfter": false
    },
    {
      "word": "borde,",
      "startMs": 26500,
      "endMs": 27160,
      "pageBreakAfter": true
    },
    {
      "word": "quizá",
      "startMs": 27160,
      "endMs": 27500,
      "pageBreakAfter": false
    },
    {
      "word": "para",
      "startMs": 27500,
      "endMs": 27680,
      "pageBreakAfter": false
    },
    {
      "word": "fijarlo",
      "startMs": 27680,
      "endMs": 28120,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 28120,
      "endMs": 28240,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 28240,
      "endMs": 28360,
      "pageBreakAfter": true
    },
    {
      "word": "soporte.",
      "startMs": 28360,
      "endMs": 28680,
      "pageBreakAfter": true
    },
    {
      "word": "No",
      "startMs": 28680,
      "endMs": 29540,
      "pageBreakAfter": false
    },
    {
      "word": "era",
      "startMs": 29540,
      "endMs": 29720,
      "pageBreakAfter": false
    },
    {
      "word": "solo",
      "startMs": 29720,
      "endMs": 29940,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 29940,
      "endMs": 30200,
      "pageBreakAfter": false
    },
    {
      "word": "objeto,",
      "startMs": 30200,
      "endMs": 30980,
      "pageBreakAfter": true
    },
    {
      "word": "era",
      "startMs": 30980,
      "endMs": 31280,
      "pageBreakAfter": false
    },
    {
      "word": "una",
      "startMs": 31280,
      "endMs": 31500,
      "pageBreakAfter": false
    },
    {
      "word": "herramienta",
      "startMs": 31500,
      "endMs": 32100,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 32100,
      "endMs": 32220,
      "pageBreakAfter": false
    },
    {
      "word": "varias",
      "startMs": 32220,
      "endMs": 32480,
      "pageBreakAfter": true
    },
    {
      "word": "generaciones",
      "startMs": 32480,
      "endMs": 33060,
      "pageBreakAfter": false
    },
    {
      "word": "adaptaron",
      "startMs": 33060,
      "endMs": 33640,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 33640,
      "endMs": 33740,
      "pageBreakAfter": false
    },
    {
      "word": "sus",
      "startMs": 33720,
      "endMs": 33860,
      "pageBreakAfter": false
    },
    {
      "word": "necesidades",
      "startMs": 33860,
      "endMs": 34480,
      "pageBreakAfter": true
    },
    {
      "word": "y",
      "startMs": 34480,
      "endMs": 34820,
      "pageBreakAfter": false
    },
    {
      "word": "creencias.",
      "startMs": 34820,
      "endMs": 35410,
      "pageBreakAfter": true
    },
    {
      "word": "Síguenos",
      "startMs": 35980,
      "endMs": 36380,
      "pageBreakAfter": false
    },
    {
      "word": "para",
      "startMs": 36380,
      "endMs": 36600,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 36600,
      "endMs": 36740,
      "pageBreakAfter": false
    },
    {
      "word": "parte",
      "startMs": 36740,
      "endMs": 36940,
      "pageBreakAfter": false
    },
    {
      "word": "5,",
      "startMs": 36940,
      "endMs": 37410,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 37860,
      "endMs": 37960,
      "pageBreakAfter": false
    },
    {
      "word": "dónde",
      "startMs": 37960,
      "endMs": 38080,
      "pageBreakAfter": false
    },
    {
      "word": "venían",
      "startMs": 38080,
      "endMs": 38480,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 38480,
      "endMs": 38640,
      "pageBreakAfter": false
    },
    {
      "word": "oro",
      "startMs": 38640,
      "endMs": 38820,
      "pageBreakAfter": true
    },
    {
      "word": "y",
      "startMs": 38820,
      "endMs": 39180,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 39180,
      "endMs": 39320,
      "pageBreakAfter": false
    },
    {
      "word": "cobre",
      "startMs": 39320,
      "endMs": 39620,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 39620,
      "endMs": 39780,
      "pageBreakAfter": false
    },
    {
      "word": "este",
      "startMs": 39780,
      "endMs": 39960,
      "pageBreakAfter": true
    },
    {
      "word": "disco.",
      "startMs": 39960,
      "endMs": 40240,
      "pageBreakAfter": true
    }
  ],
  "audio": {
    "narration": {
      "src": "video005/shorts-audio/short4-narration.mp3",
      "volume": 1.4791
    },
    "music": {
      "src": "video005/shorts-audio/short4-music.mp3",
      "volume": 0.6166,
      "fadeInSeconds": 0.5,
      "fadeOutSeconds": 1.0,
      "loop": true
    }
  }
};


// ---------------------------------------------------------------------------
// Short 5 - "EL ORO QUE CRUZO EUROPA" (Parte 5)
// Locucion: 005_DiscoNebra_Short5_Oro.mp3 (39.053063s, integra, incluye el CTA final).
// ---------------------------------------------------------------------------
export const short5OroFixture: ExplainerProps = {
  "cuts": [
    {
      "id": "A",
      "source": "video005/images/A.png",
      "in_seconds": 0.0,
      "out_seconds": 4.6,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "transform": {
        "scale": 1.5,
        "position": {
          "x": 48,
          "y": 35
        }
      }
    },
    {
      "id": "mapa-carnon",
      "source": "video005/video/plano-8a8b8c-mapa-origen-materiales.mp4",
      "in_seconds": 4.6,
      "out_seconds": 16.5,
      "source_in_seconds": 5.0,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.15
      }
    },
    {
      "id": "mapa-mitterberg",
      "source": "video005/video/plano-8a8b8c-mapa-origen-materiales.mp4",
      "in_seconds": 16.5,
      "out_seconds": 21.2,
      "source_in_seconds": 0.5,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.3
      }
    },
    {
      "id": "mapa-red",
      "source": "video005/video/plano-8a8b8c-mapa-origen-materiales.mp4",
      "in_seconds": 21.2,
      "out_seconds": 28.9,
      "source_in_seconds": 19.0,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.15
      }
    },
    {
      "id": "34d",
      "source": "video005/images/34d.png",
      "in_seconds": 28.9,
      "out_seconds": 34.6,
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5,
      "animation": "zoom-out",
      "backgroundColor": "transparent"
    },
    {
      "id": "cta",
      "source": "",
      "type": "cta_card",
      "in_seconds": 34.6,
      "out_seconds": 39.053063,
      "text": "SIGUENOS PARA PARTE 6"
    }
  ],
  "overlays": [
    {
      "type": "monumental_title",
      "in_seconds": 0.0,
      "out_seconds": 3.4,
      "position": "center",
      "text": "ORO DE\nINGLATERRA"
    },
    {
      "type": "rotulo",
      "in_seconds": 6.0,
      "out_seconds": 16.0,
      "position": "top-left",
      "variant": "label",
      "text": "RÍO CARNON, CORNUALLES",
      "subtitle": "Oro aluvial · a más de 1.000 km"
    },
    {
      "type": "rotulo",
      "in_seconds": 22.0,
      "out_seconds": 28.5,
      "position": "top-left",
      "variant": "label",
      "text": "REDES DE INTERCAMBIO",
      "subtitle": "Materiales a miles de km"
    },
    {
      "type": "monumental_title",
      "in_seconds": 29.5,
      "out_seconds": 33.6,
      "position": "center",
      "text": "EUROPA\nCONECTADA"
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
      "endMs": 200,
      "pageBreakAfter": false
    },
    {
      "word": "oro",
      "startMs": 200,
      "endMs": 300,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 300,
      "endMs": 480,
      "pageBreakAfter": false
    },
    {
      "word": "disco",
      "startMs": 480,
      "endMs": 780,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 780,
      "endMs": 920,
      "pageBreakAfter": true
    },
    {
      "word": "Nebra",
      "startMs": 920,
      "endMs": 1140,
      "pageBreakAfter": false
    },
    {
      "word": "no",
      "startMs": 1140,
      "endMs": 1460,
      "pageBreakAfter": false
    },
    {
      "word": "era",
      "startMs": 1460,
      "endMs": 1580,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 1580,
      "endMs": 1700,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 1700,
      "endMs": 1800,
      "pageBreakAfter": true
    },
    {
      "word": "zona",
      "startMs": 1800,
      "endMs": 2000,
      "pageBreakAfter": false
    },
    {
      "word": "donde",
      "startMs": 2000,
      "endMs": 2200,
      "pageBreakAfter": false
    },
    {
      "word": "apareció,",
      "startMs": 2200,
      "endMs": 3040,
      "pageBreakAfter": true
    },
    {
      "word": "procedía",
      "startMs": 3040,
      "endMs": 3500,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 3500,
      "endMs": 3640,
      "pageBreakAfter": false
    },
    {
      "word": "Inglaterra.",
      "startMs": 3640,
      "endMs": 4310,
      "pageBreakAfter": true
    },
    {
      "word": "Hace",
      "startMs": 4820,
      "endMs": 5360,
      "pageBreakAfter": false
    },
    {
      "word": "unos",
      "startMs": 5360,
      "endMs": 5560,
      "pageBreakAfter": false
    },
    {
      "word": "3.600",
      "startMs": 5560,
      "endMs": 6260,
      "pageBreakAfter": false
    },
    {
      "word": "años,",
      "startMs": 6260,
      "endMs": 7000,
      "pageBreakAfter": true
    },
    {
      "word": "alguien",
      "startMs": 7000,
      "endMs": 7300,
      "pageBreakAfter": false
    },
    {
      "word": "utilizó",
      "startMs": 7300,
      "endMs": 7820,
      "pageBreakAfter": false
    },
    {
      "word": "oro",
      "startMs": 7820,
      "endMs": 8120,
      "pageBreakAfter": false
    },
    {
      "word": "aluvial",
      "startMs": 8120,
      "endMs": 8520,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 8520,
      "endMs": 8720,
      "pageBreakAfter": true
    },
    {
      "word": "río",
      "startMs": 8720,
      "endMs": 8960,
      "pageBreakAfter": false
    },
    {
      "word": "Carnon",
      "startMs": 8960,
      "endMs": 9480,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 9480,
      "endMs": 9880,
      "pageBreakAfter": false
    },
    {
      "word": "Cornualles",
      "startMs": 9880,
      "endMs": 10420,
      "pageBreakAfter": false
    },
    {
      "word": "para",
      "startMs": 10420,
      "endMs": 11000,
      "pageBreakAfter": true
    },
    {
      "word": "decorar",
      "startMs": 11000,
      "endMs": 11420,
      "pageBreakAfter": false
    },
    {
      "word": "esta",
      "startMs": 11420,
      "endMs": 11600,
      "pageBreakAfter": false
    },
    {
      "word": "pieza,",
      "startMs": 11600,
      "endMs": 12360,
      "pageBreakAfter": true
    },
    {
      "word": "pero",
      "startMs": 12360,
      "endMs": 12640,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 12640,
      "endMs": 12780,
      "pageBreakAfter": false
    },
    {
      "word": "oro",
      "startMs": 12780,
      "endMs": 12960,
      "pageBreakAfter": false
    },
    {
      "word": "no",
      "startMs": 12960,
      "endMs": 13340,
      "pageBreakAfter": false
    },
    {
      "word": "fue",
      "startMs": 13340,
      "endMs": 13580,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 13580,
      "endMs": 13740,
      "pageBreakAfter": false
    },
    {
      "word": "único",
      "startMs": 13740,
      "endMs": 13980,
      "pageBreakAfter": false
    },
    {
      "word": "material",
      "startMs": 13980,
      "endMs": 14380,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 14380,
      "endMs": 14620,
      "pageBreakAfter": false
    },
    {
      "word": "recorrió",
      "startMs": 14620,
      "endMs": 15040,
      "pageBreakAfter": true
    },
    {
      "word": "largas",
      "startMs": 15040,
      "endMs": 15420,
      "pageBreakAfter": false
    },
    {
      "word": "distancias.",
      "startMs": 15420,
      "endMs": 16050,
      "pageBreakAfter": true
    },
    {
      "word": "El",
      "startMs": 16600,
      "endMs": 16800,
      "pageBreakAfter": false
    },
    {
      "word": "cobre",
      "startMs": 16800,
      "endMs": 17040,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 17040,
      "endMs": 17200,
      "pageBreakAfter": false
    },
    {
      "word": "bronce",
      "startMs": 17200,
      "endMs": 17560,
      "pageBreakAfter": false
    },
    {
      "word": "procede",
      "startMs": 17560,
      "endMs": 18100,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 18100,
      "endMs": 18200,
      "pageBreakAfter": false
    },
    {
      "word": "las",
      "startMs": 18200,
      "endMs": 18340,
      "pageBreakAfter": false
    },
    {
      "word": "minas",
      "startMs": 18340,
      "endMs": 18680,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 18680,
      "endMs": 18780,
      "pageBreakAfter": false
    },
    {
      "word": "Mitterberg",
      "startMs": 18780,
      "endMs": 19280,
      "pageBreakAfter": true
    },
    {
      "word": "en",
      "startMs": 19280,
      "endMs": 19780,
      "pageBreakAfter": false
    },
    {
      "word": "los",
      "startMs": 19780,
      "endMs": 19900,
      "pageBreakAfter": false
    },
    {
      "word": "Alpes",
      "startMs": 19900,
      "endMs": 20180,
      "pageBreakAfter": false
    },
    {
      "word": "austríacos.",
      "startMs": 20180,
      "endMs": 21400,
      "pageBreakAfter": true
    },
    {
      "word": "Eso",
      "startMs": 21400,
      "endMs": 21620,
      "pageBreakAfter": false
    },
    {
      "word": "significa",
      "startMs": 21620,
      "endMs": 21980,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 21980,
      "endMs": 22340,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 22340,
      "endMs": 22500,
      "pageBreakAfter": false
    },
    {
      "word": "disco",
      "startMs": 22500,
      "endMs": 22780,
      "pageBreakAfter": true
    },
    {
      "word": "reunió",
      "startMs": 22780,
      "endMs": 23220,
      "pageBreakAfter": false
    },
    {
      "word": "materiales",
      "startMs": 23220,
      "endMs": 23760,
      "pageBreakAfter": false
    },
    {
      "word": "procedentes",
      "startMs": 23760,
      "endMs": 24320,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 24320,
      "endMs": 24840,
      "pageBreakAfter": false
    },
    {
      "word": "regiones",
      "startMs": 24840,
      "endMs": 25240,
      "pageBreakAfter": true
    },
    {
      "word": "separadas",
      "startMs": 25240,
      "endMs": 25620,
      "pageBreakAfter": false
    },
    {
      "word": "por",
      "startMs": 25620,
      "endMs": 25860,
      "pageBreakAfter": false
    },
    {
      "word": "miles",
      "startMs": 25860,
      "endMs": 26060,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 26060,
      "endMs": 26220,
      "pageBreakAfter": false
    },
    {
      "word": "kilómetros.",
      "startMs": 26220,
      "endMs": 26640,
      "pageBreakAfter": true
    },
    {
      "word": "La",
      "startMs": 26640,
      "endMs": 27440,
      "pageBreakAfter": false
    },
    {
      "word": "Europa",
      "startMs": 27440,
      "endMs": 27700,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 27700,
      "endMs": 27900,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 27900,
      "endMs": 28000,
      "pageBreakAfter": false
    },
    {
      "word": "Edad",
      "startMs": 27980,
      "endMs": 28220,
      "pageBreakAfter": true
    },
    {
      "word": "del",
      "startMs": 28220,
      "endMs": 28320,
      "pageBreakAfter": false
    },
    {
      "word": "Bronce",
      "startMs": 28320,
      "endMs": 28680,
      "pageBreakAfter": false
    },
    {
      "word": "no",
      "startMs": 28680,
      "endMs": 29240,
      "pageBreakAfter": false
    },
    {
      "word": "era",
      "startMs": 29240,
      "endMs": 29380,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 29380,
      "endMs": 29540,
      "pageBreakAfter": true
    },
    {
      "word": "mundo",
      "startMs": 29540,
      "endMs": 29780,
      "pageBreakAfter": false
    },
    {
      "word": "aislado.",
      "startMs": 29780,
      "endMs": 30660,
      "pageBreakAfter": true
    },
    {
      "word": "Las",
      "startMs": 30660,
      "endMs": 30780,
      "pageBreakAfter": false
    },
    {
      "word": "materias",
      "startMs": 30780,
      "endMs": 31160,
      "pageBreakAfter": false
    },
    {
      "word": "primas",
      "startMs": 31160,
      "endMs": 31640,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 31640,
      "endMs": 31880,
      "pageBreakAfter": false
    },
    {
      "word": "las",
      "startMs": 31880,
      "endMs": 32020,
      "pageBreakAfter": true
    },
    {
      "word": "ideas",
      "startMs": 32020,
      "endMs": 32280,
      "pageBreakAfter": false
    },
    {
      "word": "ya",
      "startMs": 32280,
      "endMs": 32860,
      "pageBreakAfter": false
    },
    {
      "word": "viajaban",
      "startMs": 32860,
      "endMs": 33320,
      "pageBreakAfter": false
    },
    {
      "word": "por",
      "startMs": 33320,
      "endMs": 33520,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 33520,
      "endMs": 33620,
      "pageBreakAfter": true
    },
    {
      "word": "continente.",
      "startMs": 33620,
      "endMs": 34760,
      "pageBreakAfter": true
    },
    {
      "word": "Síguenos",
      "startMs": 34760,
      "endMs": 35140,
      "pageBreakAfter": false
    },
    {
      "word": "para",
      "startMs": 35140,
      "endMs": 35340,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 35340,
      "endMs": 35480,
      "pageBreakAfter": false
    },
    {
      "word": "parte",
      "startMs": 35480,
      "endMs": 35680,
      "pageBreakAfter": false
    },
    {
      "word": "6,",
      "startMs": 35680,
      "endMs": 36110,
      "pageBreakAfter": true
    },
    {
      "word": "si",
      "startMs": 36660,
      "endMs": 36760,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 36760,
      "endMs": 36860,
      "pageBreakAfter": false
    },
    {
      "word": "verdad",
      "startMs": 36860,
      "endMs": 37100,
      "pageBreakAfter": false
    },
    {
      "word": "estamos",
      "startMs": 37100,
      "endMs": 37420,
      "pageBreakAfter": false
    },
    {
      "word": "ante",
      "startMs": 37420,
      "endMs": 37760,
      "pageBreakAfter": true
    },
    {
      "word": "un",
      "startMs": 37760,
      "endMs": 37920,
      "pageBreakAfter": false
    },
    {
      "word": "mapa",
      "startMs": 37920,
      "endMs": 38160,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 38160,
      "endMs": 38360,
      "pageBreakAfter": false
    },
    {
      "word": "cielo.",
      "startMs": 38360,
      "endMs": 38560,
      "pageBreakAfter": true
    }
  ],
  "audio": {
    "narration": {
      "src": "video005/shorts-audio/short5-narration.mp3",
      "volume": 1.7378
    },
    "music": {
      "src": "video005/shorts-audio/short5-music.mp3",
      "volume": 0.6166,
      "fadeInSeconds": 0.5,
      "fadeOutSeconds": 1.0,
      "loop": true
    }
  }
};


// ---------------------------------------------------------------------------
// Short 6 - "QUE REPRESENTA REALMENTE?" (Parte 6, cierre)
// Locucion: 005_DiscoNebra_Short6_Significado.mp3 (53.524875s, integra, incluye el CTA final).
// ---------------------------------------------------------------------------
export const short6SignificadoFixture: ExplainerProps = {
  "cuts": [
    {
      "id": "26-open",
      "source": "video005/images/26.png",
      "in_seconds": 0.0,
      "out_seconds": 6.2,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "transform": {
        "scale": 1.14
      }
    },
    {
      "id": "pleyades",
      "source": "video005/video/plano-11-14-objeto-fases-construccion.mp4",
      "in_seconds": 6.2,
      "out_seconds": 13.4,
      "source_in_seconds": 5.6,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.6
      }
    },
    {
      "id": "34a",
      "source": "video005/images/34a.png",
      "in_seconds": 13.4,
      "out_seconds": 15.9,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in"
    },
    {
      "id": "horizonte",
      "source": "video005/video/plano-27a27b-angulo-horizonte.mp4",
      "in_seconds": 15.9,
      "out_seconds": 23.9,
      "source_in_seconds": 3.8,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.4
      }
    },
    {
      "id": "lunisolar",
      "source": "video005/video/plano-28b-mes-intercalar.mp4",
      "in_seconds": 23.9,
      "out_seconds": 30.3,
      "source_in_seconds": 0.6,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "carta",
      "source": "video005/video/plano-29b-disposicion-irregular.mp4",
      "in_seconds": 30.3,
      "out_seconds": 36.2,
      "source_in_seconds": 4.8,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.5
      }
    },
    {
      "id": "A",
      "source": "video005/images/A.png",
      "in_seconds": 36.2,
      "out_seconds": 38.3,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "ken-burns"
    },
    {
      "id": "tres-hipotesis",
      "source": "video005/video/plano-30-tres-hipotesis.mp4",
      "in_seconds": 38.3,
      "out_seconds": 42.7,
      "source_in_seconds": 0.0,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "playbackRate": 0.77,
      "transform": {
        "scale": 1.4
      }
    },
    {
      "id": "31-close",
      "source": "video005/images/31.png",
      "in_seconds": 42.7,
      "out_seconds": 45.5,
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5,
      "animation": "zoom-out",
      "backgroundColor": "transparent"
    },
    {
      "id": "cta",
      "source": "",
      "type": "cta_card",
      "in_seconds": 45.5,
      "out_seconds": 53.524875,
      "text": "SIGUENOS EN ARTILUGIO"
    }
  ],
  "overlays": [
    {
      "type": "monumental_title",
      "in_seconds": 0.6,
      "out_seconds": 4.6,
      "position": "center",
      "text": "¿MAPA O\nCALENDARIO?"
    },
    {
      "type": "monumental_title",
      "in_seconds": 42.9,
      "out_seconds": 45.4,
      "position": "center",
      "text": "EL CIELO\nEN BRONCE"
    }
  ],
  "watermarkSrc": WATERMARK,
  "brandBackground": true,
  "themeConfig": THEME,
  "captionsPhraseAware": true,
  "captions": [
    {
      "word": "Durante",
      "startMs": 0,
      "endMs": 380,
      "pageBreakAfter": false
    },
    {
      "word": "años",
      "startMs": 380,
      "endMs": 680,
      "pageBreakAfter": false
    },
    {
      "word": "se",
      "startMs": 680,
      "endMs": 1000,
      "pageBreakAfter": false
    },
    {
      "word": "ha",
      "startMs": 1000,
      "endMs": 1100,
      "pageBreakAfter": false
    },
    {
      "word": "dicho",
      "startMs": 1060,
      "endMs": 1260,
      "pageBreakAfter": true
    },
    {
      "word": "que",
      "startMs": 1260,
      "endMs": 1480,
      "pageBreakAfter": false
    },
    {
      "word": "este",
      "startMs": 1480,
      "endMs": 1680,
      "pageBreakAfter": false
    },
    {
      "word": "es",
      "startMs": 1680,
      "endMs": 1880,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 1880,
      "endMs": 2000,
      "pageBreakAfter": false
    },
    {
      "word": "mapa",
      "startMs": 2000,
      "endMs": 2180,
      "pageBreakAfter": true
    },
    {
      "word": "del",
      "startMs": 2180,
      "endMs": 2400,
      "pageBreakAfter": false
    },
    {
      "word": "cielo",
      "startMs": 2400,
      "endMs": 2600,
      "pageBreakAfter": false
    },
    {
      "word": "más",
      "startMs": 2600,
      "endMs": 2900,
      "pageBreakAfter": false
    },
    {
      "word": "antiguo",
      "startMs": 2900,
      "endMs": 3420,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 3420,
      "endMs": 3560,
      "pageBreakAfter": true
    },
    {
      "word": "mundo,",
      "startMs": 3560,
      "endMs": 4220,
      "pageBreakAfter": false
    },
    {
      "word": "pero",
      "startMs": 4220,
      "endMs": 4580,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 4580,
      "endMs": 4700,
      "pageBreakAfter": false
    },
    {
      "word": "historia",
      "startMs": 4700,
      "endMs": 4960,
      "pageBreakAfter": false
    },
    {
      "word": "es",
      "startMs": 4960,
      "endMs": 5280,
      "pageBreakAfter": true
    },
    {
      "word": "más",
      "startMs": 5280,
      "endMs": 5420,
      "pageBreakAfter": false
    },
    {
      "word": "compleja.",
      "startMs": 5420,
      "endMs": 6460,
      "pageBreakAfter": true
    },
    {
      "word": "La",
      "startMs": 6460,
      "endMs": 6580,
      "pageBreakAfter": false
    },
    {
      "word": "agrupación",
      "startMs": 6580,
      "endMs": 7100,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 7100,
      "endMs": 7260,
      "pageBreakAfter": false
    },
    {
      "word": "siete",
      "startMs": 7260,
      "endMs": 7500,
      "pageBreakAfter": false
    },
    {
      "word": "estrellas",
      "startMs": 7500,
      "endMs": 8060,
      "pageBreakAfter": true
    },
    {
      "word": "suele",
      "startMs": 8060,
      "endMs": 8340,
      "pageBreakAfter": false
    },
    {
      "word": "identificarse",
      "startMs": 8340,
      "endMs": 9040,
      "pageBreakAfter": false
    },
    {
      "word": "con",
      "startMs": 9040,
      "endMs": 9240,
      "pageBreakAfter": false
    },
    {
      "word": "las",
      "startMs": 9240,
      "endMs": 9400,
      "pageBreakAfter": false
    },
    {
      "word": "Pléyades,",
      "startMs": 9400,
      "endMs": 10200,
      "pageBreakAfter": true
    },
    {
      "word": "un",
      "startMs": 10200,
      "endMs": 10360,
      "pageBreakAfter": false
    },
    {
      "word": "conjunto",
      "startMs": 10360,
      "endMs": 10700,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 10700,
      "endMs": 10920,
      "pageBreakAfter": false
    },
    {
      "word": "estrellas",
      "startMs": 10920,
      "endMs": 11360,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 11360,
      "endMs": 11500,
      "pageBreakAfter": true
    },
    {
      "word": "pudo",
      "startMs": 11500,
      "endMs": 11860,
      "pageBreakAfter": false
    },
    {
      "word": "servir",
      "startMs": 11860,
      "endMs": 12140,
      "pageBreakAfter": false
    },
    {
      "word": "como",
      "startMs": 12140,
      "endMs": 12420,
      "pageBreakAfter": false
    },
    {
      "word": "referencia",
      "startMs": 12420,
      "endMs": 13000,
      "pageBreakAfter": false
    },
    {
      "word": "para",
      "startMs": 13000,
      "endMs": 13520,
      "pageBreakAfter": true
    },
    {
      "word": "organizar",
      "startMs": 13520,
      "endMs": 14060,
      "pageBreakAfter": false
    },
    {
      "word": "las",
      "startMs": 14060,
      "endMs": 14200,
      "pageBreakAfter": false
    },
    {
      "word": "tareas",
      "startMs": 14200,
      "endMs": 14560,
      "pageBreakAfter": false
    },
    {
      "word": "agrícolas.",
      "startMs": 14560,
      "endMs": 15270,
      "pageBreakAfter": true
    },
    {
      "word": "Los",
      "startMs": 16000,
      "endMs": 16160,
      "pageBreakAfter": false
    },
    {
      "word": "arcos",
      "startMs": 16160,
      "endMs": 16400,
      "pageBreakAfter": false
    },
    {
      "word": "dorados",
      "startMs": 16400,
      "endMs": 16720,
      "pageBreakAfter": false
    },
    {
      "word": "laterales",
      "startMs": 16720,
      "endMs": 17240,
      "pageBreakAfter": false
    },
    {
      "word": "abarcan",
      "startMs": 17240,
      "endMs": 17960,
      "pageBreakAfter": true
    },
    {
      "word": "unos",
      "startMs": 17960,
      "endMs": 18160,
      "pageBreakAfter": false
    },
    {
      "word": "83",
      "startMs": 18160,
      "endMs": 18620,
      "pageBreakAfter": false
    },
    {
      "word": "grados,",
      "startMs": 18620,
      "endMs": 19640,
      "pageBreakAfter": true
    },
    {
      "word": "aproximadamente",
      "startMs": 19640,
      "endMs": 20180,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 20180,
      "endMs": 20620,
      "pageBreakAfter": false
    },
    {
      "word": "desplazamiento",
      "startMs": 20620,
      "endMs": 21200,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 21200,
      "endMs": 21500,
      "pageBreakAfter": false
    },
    {
      "word": "sol",
      "startMs": 21500,
      "endMs": 21700,
      "pageBreakAfter": true
    },
    {
      "word": "en",
      "startMs": 21700,
      "endMs": 22020,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 22020,
      "endMs": 22120,
      "pageBreakAfter": false
    },
    {
      "word": "horizonte",
      "startMs": 22120,
      "endMs": 22540,
      "pageBreakAfter": false
    },
    {
      "word": "entre",
      "startMs": 22540,
      "endMs": 22800,
      "pageBreakAfter": false
    },
    {
      "word": "los",
      "startMs": 22800,
      "endMs": 22980,
      "pageBreakAfter": true
    },
    {
      "word": "solsticios.",
      "startMs": 22980,
      "endMs": 23590,
      "pageBreakAfter": true
    },
    {
      "word": "Por",
      "startMs": 24140,
      "endMs": 24320,
      "pageBreakAfter": false
    },
    {
      "word": "eso,",
      "startMs": 24320,
      "endMs": 24920,
      "pageBreakAfter": true
    },
    {
      "word": "algunos",
      "startMs": 24920,
      "endMs": 25240,
      "pageBreakAfter": false
    },
    {
      "word": "investigadores",
      "startMs": 25240,
      "endMs": 25900,
      "pageBreakAfter": false
    },
    {
      "word": "creen",
      "startMs": 25900,
      "endMs": 26320,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 26320,
      "endMs": 26440,
      "pageBreakAfter": false
    },
    {
      "word": "ayudaba",
      "startMs": 26440,
      "endMs": 26820,
      "pageBreakAfter": true
    },
    {
      "word": "a",
      "startMs": 26820,
      "endMs": 26960,
      "pageBreakAfter": false
    },
    {
      "word": "relacionar",
      "startMs": 26960,
      "endMs": 27400,
      "pageBreakAfter": false
    },
    {
      "word": "los",
      "startMs": 27400,
      "endMs": 27560,
      "pageBreakAfter": false
    },
    {
      "word": "ciclos",
      "startMs": 27560,
      "endMs": 27860,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 27860,
      "endMs": 28000,
      "pageBreakAfter": true
    },
    {
      "word": "la",
      "startMs": 28000,
      "endMs": 28100,
      "pageBreakAfter": false
    },
    {
      "word": "luna,",
      "startMs": 28100,
      "endMs": 28320,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 28320,
      "endMs": 28760,
      "pageBreakAfter": false
    },
    {
      "word": "sol",
      "startMs": 28760,
      "endMs": 29020,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 29020,
      "endMs": 29340,
      "pageBreakAfter": false
    },
    {
      "word": "las",
      "startMs": 29340,
      "endMs": 29520,
      "pageBreakAfter": false
    },
    {
      "word": "estaciones.",
      "startMs": 29520,
      "endMs": 30520,
      "pageBreakAfter": true
    },
    {
      "word": "Pero",
      "startMs": 30520,
      "endMs": 30780,
      "pageBreakAfter": false
    },
    {
      "word": "no",
      "startMs": 30780,
      "endMs": 30920,
      "pageBreakAfter": false
    },
    {
      "word": "es",
      "startMs": 30920,
      "endMs": 31040,
      "pageBreakAfter": false
    },
    {
      "word": "una",
      "startMs": 31040,
      "endMs": 31200,
      "pageBreakAfter": false
    },
    {
      "word": "carta",
      "startMs": 31200,
      "endMs": 31420,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 31420,
      "endMs": 31580,
      "pageBreakAfter": false
    },
    {
      "word": "navegación",
      "startMs": 31580,
      "endMs": 32060,
      "pageBreakAfter": false
    },
    {
      "word": "donde",
      "startMs": 32060,
      "endMs": 32280,
      "pageBreakAfter": false
    },
    {
      "word": "cada",
      "startMs": 32280,
      "endMs": 32620,
      "pageBreakAfter": false
    },
    {
      "word": "estrella",
      "startMs": 32620,
      "endMs": 33100,
      "pageBreakAfter": true
    },
    {
      "word": "corresponda",
      "startMs": 33100,
      "endMs": 33780,
      "pageBreakAfter": false
    },
    {
      "word": "exactamente",
      "startMs": 33780,
      "endMs": 34240,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 34240,
      "endMs": 34700,
      "pageBreakAfter": false
    },
    {
      "word": "una",
      "startMs": 34700,
      "endMs": 34820,
      "pageBreakAfter": false
    },
    {
      "word": "estrella",
      "startMs": 34820,
      "endMs": 35220,
      "pageBreakAfter": true
    },
    {
      "word": "real.",
      "startMs": 35220,
      "endMs": 35590,
      "pageBreakAfter": true
    },
    {
      "word": "Su",
      "startMs": 36240,
      "endMs": 36380,
      "pageBreakAfter": false
    },
    {
      "word": "función",
      "startMs": 36380,
      "endMs": 36640,
      "pageBreakAfter": false
    },
    {
      "word": "exacta",
      "startMs": 36640,
      "endMs": 37240,
      "pageBreakAfter": false
    },
    {
      "word": "sigue",
      "startMs": 37240,
      "endMs": 37520,
      "pageBreakAfter": false
    },
    {
      "word": "abierta.",
      "startMs": 37520,
      "endMs": 38560,
      "pageBreakAfter": true
    },
    {
      "word": "Pudo",
      "startMs": 38560,
      "endMs": 38760,
      "pageBreakAfter": false
    },
    {
      "word": "ser",
      "startMs": 38760,
      "endMs": 38980,
      "pageBreakAfter": false
    },
    {
      "word": "calendario,",
      "startMs": 38980,
      "endMs": 39880,
      "pageBreakAfter": true
    },
    {
      "word": "instrumento",
      "startMs": 39880,
      "endMs": 40480,
      "pageBreakAfter": false
    },
    {
      "word": "astronómico",
      "startMs": 40480,
      "endMs": 41060,
      "pageBreakAfter": false
    },
    {
      "word": "o",
      "startMs": 41060,
      "endMs": 41360,
      "pageBreakAfter": false
    },
    {
      "word": "símbolo",
      "startMs": 41360,
      "endMs": 41780,
      "pageBreakAfter": false
    },
    {
      "word": "religioso.",
      "startMs": 41780,
      "endMs": 42390,
      "pageBreakAfter": true
    },
    {
      "word": "Lo",
      "startMs": 42940,
      "endMs": 43040,
      "pageBreakAfter": false
    },
    {
      "word": "seguro",
      "startMs": 43040,
      "endMs": 43300,
      "pageBreakAfter": false
    },
    {
      "word": "es",
      "startMs": 43300,
      "endMs": 43520,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 43520,
      "endMs": 43660,
      "pageBreakAfter": false
    },
    {
      "word": "convirtió",
      "startMs": 43660,
      "endMs": 44220,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 44220,
      "endMs": 44320,
      "pageBreakAfter": false
    },
    {
      "word": "cielo",
      "startMs": 44320,
      "endMs": 44500,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 44500,
      "endMs": 44680,
      "pageBreakAfter": false
    },
    {
      "word": "bronce.",
      "startMs": 44680,
      "endMs": 45560,
      "pageBreakAfter": true
    },
    {
      "word": "Síguenos",
      "startMs": 45560,
      "endMs": 45860,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 45860,
      "endMs": 45980,
      "pageBreakAfter": false
    },
    {
      "word": "Artilugio",
      "startMs": 45980,
      "endMs": 46460,
      "pageBreakAfter": false
    },
    {
      "word": "para",
      "startMs": 46460,
      "endMs": 46720,
      "pageBreakAfter": false
    },
    {
      "word": "más",
      "startMs": 46720,
      "endMs": 46920,
      "pageBreakAfter": true
    },
    {
      "word": "objetos",
      "startMs": 46920,
      "endMs": 47280,
      "pageBreakAfter": false
    },
    {
      "word": "con",
      "startMs": 47280,
      "endMs": 47520,
      "pageBreakAfter": false
    },
    {
      "word": "historias",
      "startMs": 47520,
      "endMs": 47960,
      "pageBreakAfter": false
    },
    {
      "word": "así.",
      "startMs": 47960,
      "endMs": 48780,
      "pageBreakAfter": true
    },
    {
      "word": "Y",
      "startMs": 48780,
      "endMs": 48880,
      "pageBreakAfter": false
    },
    {
      "word": "cuéntanos",
      "startMs": 48880,
      "endMs": 49200,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 49200,
      "endMs": 49420,
      "pageBreakAfter": false
    },
    {
      "word": "comentarios.",
      "startMs": 49420,
      "endMs": 49950,
      "pageBreakAfter": true
    },
    {
      "word": "Calendario,",
      "startMs": 50480,
      "endMs": 51320,
      "pageBreakAfter": false
    },
    {
      "word": "instrumento",
      "startMs": 51320,
      "endMs": 51800,
      "pageBreakAfter": false
    },
    {
      "word": "astronómico",
      "startMs": 51800,
      "endMs": 52360,
      "pageBreakAfter": false
    },
    {
      "word": "o",
      "startMs": 52360,
      "endMs": 52720,
      "pageBreakAfter": false
    },
    {
      "word": "símbolo.",
      "startMs": 52720,
      "endMs": 53220,
      "pageBreakAfter": true
    }
  ],
  "audio": {
    "narration": {
      "src": "video005/shorts-audio/short6-narration.mp3",
      "volume": 1.6596
    },
    "music": {
      "src": "video005/shorts-audio/short6-music.mp3",
      "volume": 0.8128,
      "fadeInSeconds": 0.5,
      "fadeOutSeconds": 1.0,
      "loop": true
    }
  }
};
