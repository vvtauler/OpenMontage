import { ExplainerProps } from "../Explainer";

// Shorts del video 006 - "Ulfberht: la espada vikinga". Generado por
// projects/006-espada-ulfberht/shorts/_build_shorts.py -- no editar a mano,
// cambiar el script y regenerar. Fuente: guiones aprobados por Victor el 25
// sept 2026 ("10-Redes Sociales/006 - Shorts de la espada Ulfberht.md",
// boveda Obsidian). Miniserie de 5 partes, tecnica "una pregunta, una
// respuesta" + regla del primer segundo (espada o personas en el fotograma 0).
//
// Banco de planos: SOLO imagenes y motion graphics ya aprobados del video
// largo (public/video006). Motion graphics en videoFit "contain" con zoom fijo.
//
// Audio: narracion -1.0dBFS de pico, musica -25.0dBFS (pistas originales por
// bloque, no music-final.mp3, que es el montaje ya mezclado). SFX: cues
// aislados del largo (assets/sfx), recortados por plano, fundidos y RMS con
// tope -40dBFS (solo reduce). Los motion graphics no llevan SFX (CLAUDE.md 35.1).
//
// Subtitulos: faster-whisper (small, es) con correcciones manuales de nombres
// propios (Ulfberht, Kucypera, Jiri Hosek, Carlomagno, Rin, Weser...) en
// _fix_words.py.

const THEME = {
  captionHighlightColor: "#D49A46",
  captionBackgroundColor: "rgba(14, 14, 17, 0.78)",
  captionFontSize: 54,
  captionFontFamily: "Montserrat",
  captionFontWeight: 800,
} as const;

const WATERMARK = "social-clips/source/logo-isotipo-full.png";


// ---------------------------------------------------------------------------
// Short 1 - "LA CRUZ QUE DELATA" (Parte 1)
// Locucion: 006_Ulfberht_Short1_Grafia.mp3 (35.604875s, integra, incluye el CTA final).
// Musica: 05-consecuencias.mp3 desde 0.0s (pista original del largo, sin editar).
// ---------------------------------------------------------------------------
export const short1GrafiaFixture: ExplainerProps = {
  "cuts": [
    {
      "id": "7-open",
      "source": "video006/images/7.png",
      "in_seconds": 0.0,
      "out_seconds": 1.7,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video006/shorts-audio/sfx/processed/short1-sfx-7-open.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "27",
      "source": "video006/images/27.png",
      "in_seconds": 1.7,
      "out_seconds": 4.08,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in"
    },
    {
      "id": "25-escritura",
      "source": "video006/video/plano-2526-inscripcion-forense-retimed.mp4",
      "in_seconds": 4.08,
      "out_seconds": 10.28,
      "source_in_seconds": 0.0,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.5
      }
    },
    {
      "id": "25-pureza",
      "source": "video006/video/plano-2526-inscripcion-forense-retimed.mp4",
      "in_seconds": 10.28,
      "out_seconds": 14.4,
      "source_in_seconds": 11.0,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.5
      }
    },
    {
      "id": "10-escoria",
      "source": "video006/video/plano-objeto-objeto-8-14-retimed.mp4",
      "in_seconds": 14.4,
      "out_seconds": 19.0,
      "source_in_seconds": 32.0,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.4
      }
    },
    {
      "id": "26-copia",
      "source": "video006/video/plano-2526-inscripcion-forense-retimed.mp4",
      "in_seconds": 19.0,
      "out_seconds": 26.3,
      "source_in_seconds": 22.9,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.05
      }
    },
    {
      "id": "23",
      "source": "video006/images/23.png",
      "in_seconds": 26.3,
      "out_seconds": 30.94,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "pan-right",
      "transform": {
        "position": {
          "x": 60,
          "y": 50
        }
      },
      "audioSrc": "video006/shorts-audio/sfx/processed/short1-sfx-23.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "A-cta",
      "source": "video006/images/A.png",
      "in_seconds": 30.94,
      "out_seconds": 32.7,
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5,
      "animation": "zoom-out",
      "backgroundColor": "transparent",
      "audioSrc": "video006/shorts-audio/sfx/processed/short1-sfx-A-cta.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "cta",
      "source": "",
      "type": "cta_card",
      "in_seconds": 32.7,
      "out_seconds": 35.604875,
      "text": "SIGUENOS PARA PARTE 2"
    }
  ],
  "overlays": [
    {
      "type": "monumental_title",
      "in_seconds": 0.0,
      "out_seconds": 3.0,
      "position": "center",
      "text": "UNA DE LAS\nDOS ES FALSA"
    },
    {
      "type": "rotulo",
      "in_seconds": 10.28,
      "out_seconds": 14.200000000000001,
      "position": "top-left",
      "variant": "label",
      "text": "WILLIAMS (2012)",
      "subtitle": "STALSBERG (2008)"
    },
    {
      "type": "rotulo",
      "in_seconds": 14.4,
      "out_seconds": 18.8,
      "position": "top-left",
      "variant": "label",
      "text": "≈170 ULFBERHT CONOCIDAS"
    }
  ],
  "watermarkSrc": WATERMARK,
  "brandBackground": true,
  "themeConfig": THEME,
  "captionsPhraseAware": true,
  "captions": [
    {
      "word": "Hoy,",
      "startMs": 0,
      "endMs": 260,
      "pageBreakAfter": false
    },
    {
      "word": "una",
      "startMs": 460,
      "endMs": 660,
      "pageBreakAfter": false
    },
    {
      "word": "Ulfberht",
      "startMs": 660,
      "endMs": 1080,
      "pageBreakAfter": false
    },
    {
      "word": "auténtica",
      "startMs": 1080,
      "endMs": 1700,
      "pageBreakAfter": false
    },
    {
      "word": "se",
      "startMs": 1700,
      "endMs": 1920,
      "pageBreakAfter": true
    },
    {
      "word": "reconoce",
      "startMs": 1920,
      "endMs": 2380,
      "pageBreakAfter": false
    },
    {
      "word": "por",
      "startMs": 2380,
      "endMs": 2560,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 2560,
      "endMs": 2680,
      "pageBreakAfter": false
    },
    {
      "word": "sitio",
      "startMs": 2680,
      "endMs": 2940,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 2940,
      "endMs": 3120,
      "pageBreakAfter": true
    },
    {
      "word": "una",
      "startMs": 3120,
      "endMs": 3260,
      "pageBreakAfter": false
    },
    {
      "word": "cruz.",
      "startMs": 3260,
      "endMs": 3600,
      "pageBreakAfter": true
    },
    {
      "word": "El",
      "startMs": 4080,
      "endMs": 4260,
      "pageBreakAfter": false
    },
    {
      "word": "nombre",
      "startMs": 4260,
      "endMs": 4520,
      "pageBreakAfter": false
    },
    {
      "word": "va",
      "startMs": 4520,
      "endMs": 4780,
      "pageBreakAfter": false
    },
    {
      "word": "soldado",
      "startMs": 4780,
      "endMs": 5120,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 5120,
      "endMs": 5300,
      "pageBreakAfter": true
    },
    {
      "word": "hierro",
      "startMs": 5300,
      "endMs": 5600,
      "pageBreakAfter": false
    },
    {
      "word": "entre",
      "startMs": 5600,
      "endMs": 5820,
      "pageBreakAfter": false
    },
    {
      "word": "dos",
      "startMs": 5820,
      "endMs": 6020,
      "pageBreakAfter": false
    },
    {
      "word": "cruces,",
      "startMs": 6020,
      "endMs": 6380,
      "pageBreakAfter": true
    },
    {
      "word": "una",
      "startMs": 6920,
      "endMs": 7100,
      "pageBreakAfter": false
    },
    {
      "word": "delante",
      "startMs": 7100,
      "endMs": 7480,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 7480,
      "endMs": 7920,
      "pageBreakAfter": false
    },
    {
      "word": "otra",
      "startMs": 7920,
      "endMs": 8120,
      "pageBreakAfter": false
    },
    {
      "word": "entre",
      "startMs": 8120,
      "endMs": 8400,
      "pageBreakAfter": true
    },
    {
      "word": "la",
      "startMs": 8400,
      "endMs": 8560,
      "pageBreakAfter": false
    },
    {
      "word": "H",
      "startMs": 8560,
      "endMs": 8780,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 8780,
      "endMs": 9120,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 9120,
      "endMs": 9240,
      "pageBreakAfter": false
    },
    {
      "word": "T",
      "startMs": 9240,
      "endMs": 9360,
      "pageBreakAfter": true
    },
    {
      "word": "final.",
      "startMs": 9360,
      "endMs": 9600,
      "pageBreakAfter": true
    },
    {
      "word": "Alan",
      "startMs": 10280,
      "endMs": 10500,
      "pageBreakAfter": false
    },
    {
      "word": "Williams",
      "startMs": 10500,
      "endMs": 10820,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 10820,
      "endMs": 11240,
      "pageBreakAfter": false
    },
    {
      "word": "Anne",
      "startMs": 11240,
      "endMs": 11420,
      "pageBreakAfter": false
    },
    {
      "word": "Stalsberg",
      "startMs": 11420,
      "endMs": 11960,
      "pageBreakAfter": true
    },
    {
      "word": "compararon",
      "startMs": 11960,
      "endMs": 12760,
      "pageBreakAfter": false
    },
    {
      "word": "esa",
      "startMs": 12760,
      "endMs": 12940,
      "pageBreakAfter": false
    },
    {
      "word": "grafía",
      "startMs": 12940,
      "endMs": 13320,
      "pageBreakAfter": false
    },
    {
      "word": "con",
      "startMs": 13320,
      "endMs": 13540,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 13540,
      "endMs": 13640,
      "pageBreakAfter": true
    },
    {
      "word": "análisis",
      "startMs": 13640,
      "endMs": 14020,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 14020,
      "endMs": 14200,
      "pageBreakAfter": false
    },
    {
      "word": "metal",
      "startMs": 14200,
      "endMs": 14400,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 14400,
      "endMs": 14980,
      "pageBreakAfter": false
    },
    {
      "word": "esas",
      "startMs": 14980,
      "endMs": 15140,
      "pageBreakAfter": true
    },
    {
      "word": "hojas",
      "startMs": 15140,
      "endMs": 15460,
      "pageBreakAfter": false
    },
    {
      "word": "resultaron",
      "startMs": 15460,
      "endMs": 16060,
      "pageBreakAfter": false
    },
    {
      "word": "ser",
      "startMs": 16060,
      "endMs": 16260,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 16260,
      "endMs": 16380,
      "pageBreakAfter": false
    },
    {
      "word": "acero",
      "startMs": 16380,
      "endMs": 16620,
      "pageBreakAfter": true
    },
    {
      "word": "muy",
      "startMs": 16620,
      "endMs": 16900,
      "pageBreakAfter": false
    },
    {
      "word": "puro,",
      "startMs": 16900,
      "endMs": 17320,
      "pageBreakAfter": true
    },
    {
      "word": "casi",
      "startMs": 17440,
      "endMs": 17680,
      "pageBreakAfter": false
    },
    {
      "word": "sin",
      "startMs": 17680,
      "endMs": 17940,
      "pageBreakAfter": false
    },
    {
      "word": "escoria.",
      "startMs": 17940,
      "endMs": 18300,
      "pageBreakAfter": true
    },
    {
      "word": "En",
      "startMs": 19000,
      "endMs": 19200,
      "pageBreakAfter": false
    },
    {
      "word": "las",
      "startMs": 19200,
      "endMs": 19300,
      "pageBreakAfter": false
    },
    {
      "word": "hojas",
      "startMs": 19300,
      "endMs": 19580,
      "pageBreakAfter": false
    },
    {
      "word": "analizadas,",
      "startMs": 19580,
      "endMs": 20120,
      "pageBreakAfter": true
    },
    {
      "word": "si",
      "startMs": 20480,
      "endMs": 20640,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 20640,
      "endMs": 20760,
      "pageBreakAfter": false
    },
    {
      "word": "cruz",
      "startMs": 20760,
      "endMs": 21000,
      "pageBreakAfter": false
    },
    {
      "word": "va",
      "startMs": 21000,
      "endMs": 21080,
      "pageBreakAfter": false
    },
    {
      "word": "detrás",
      "startMs": 21080,
      "endMs": 21380,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 21380,
      "endMs": 21480,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 21480,
      "endMs": 21580,
      "pageBreakAfter": false
    },
    {
      "word": "T",
      "startMs": 21580,
      "endMs": 21780,
      "pageBreakAfter": false
    },
    {
      "word": "o",
      "startMs": 21780,
      "endMs": 22140,
      "pageBreakAfter": false
    },
    {
      "word": "hay",
      "startMs": 22140,
      "endMs": 22300,
      "pageBreakAfter": true
    },
    {
      "word": "letras",
      "startMs": 22300,
      "endMs": 22560,
      "pageBreakAfter": false
    },
    {
      "word": "invertidas,",
      "startMs": 22560,
      "endMs": 23140,
      "pageBreakAfter": true
    },
    {
      "word": "la",
      "startMs": 23580,
      "endMs": 23700,
      "pageBreakAfter": false
    },
    {
      "word": "hoja",
      "startMs": 23700,
      "endMs": 23960,
      "pageBreakAfter": false
    },
    {
      "word": "es",
      "startMs": 23960,
      "endMs": 24080,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 24080,
      "endMs": 24180,
      "pageBreakAfter": false
    },
    {
      "word": "hierro",
      "startMs": 24180,
      "endMs": 24500,
      "pageBreakAfter": true
    },
    {
      "word": "pobre",
      "startMs": 24500,
      "endMs": 24780,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 24780,
      "endMs": 25060,
      "pageBreakAfter": false
    },
    {
      "word": "carbono",
      "startMs": 25060,
      "endMs": 25340,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 25340,
      "endMs": 25460,
      "pageBreakAfter": false
    },
    {
      "word": "cargado",
      "startMs": 25460,
      "endMs": 25800,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 25800,
      "endMs": 25940,
      "pageBreakAfter": false
    },
    {
      "word": "escoria.",
      "startMs": 25940,
      "endMs": 26300,
      "pageBreakAfter": true
    },
    {
      "word": "Eran",
      "startMs": 26300,
      "endMs": 27100,
      "pageBreakAfter": false
    },
    {
      "word": "imitaciones",
      "startMs": 27100,
      "endMs": 27560,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 27560,
      "endMs": 27720,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 27720,
      "endMs": 27800,
      "pageBreakAfter": false
    },
    {
      "word": "época,",
      "startMs": 27800,
      "endMs": 28020,
      "pageBreakAfter": true
    },
    {
      "word": "mucho",
      "startMs": 28420,
      "endMs": 28560,
      "pageBreakAfter": false
    },
    {
      "word": "más",
      "startMs": 28560,
      "endMs": 28720,
      "pageBreakAfter": false
    },
    {
      "word": "propensas",
      "startMs": 28720,
      "endMs": 29200,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 29200,
      "endMs": 29320,
      "pageBreakAfter": false
    },
    {
      "word": "doblarse",
      "startMs": 29320,
      "endMs": 29740,
      "pageBreakAfter": true
    },
    {
      "word": "o",
      "startMs": 29740,
      "endMs": 29840,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 29840,
      "endMs": 30060,
      "pageBreakAfter": false
    },
    {
      "word": "partirse.",
      "startMs": 30060,
      "endMs": 30280,
      "pageBreakAfter": true
    },
    {
      "word": "Síguenos",
      "startMs": 30940,
      "endMs": 31400,
      "pageBreakAfter": false
    },
    {
      "word": "para",
      "startMs": 31400,
      "endMs": 31640,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 31640,
      "endMs": 31760,
      "pageBreakAfter": false
    },
    {
      "word": "Parte",
      "startMs": 31760,
      "endMs": 31940,
      "pageBreakAfter": false
    },
    {
      "word": "2:",
      "startMs": 31940,
      "endMs": 32240,
      "pageBreakAfter": true
    },
    {
      "word": "cuánto",
      "startMs": 32700,
      "endMs": 33100,
      "pageBreakAfter": false
    },
    {
      "word": "pesaba",
      "startMs": 33100,
      "endMs": 33460,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 33460,
      "endMs": 33580,
      "pageBreakAfter": false
    },
    {
      "word": "verdad",
      "startMs": 33580,
      "endMs": 33840,
      "pageBreakAfter": false
    },
    {
      "word": "una",
      "startMs": 33840,
      "endMs": 34060,
      "pageBreakAfter": true
    },
    {
      "word": "Ulfberht",
      "startMs": 34060,
      "endMs": 34680,
      "pageBreakAfter": false
    },
    {
      "word": "genuina.",
      "startMs": 34680,
      "endMs": 35160,
      "pageBreakAfter": true
    }
  ],
  "audio": {
    "narration": {
      "src": "video006/shorts-audio/short1-narration.mp3",
      "volume": 1.5311
    },
    "music": {
      "src": "video006/shorts-audio/short1-music.mp3",
      "volume": 0.0596,
      "fadeInSeconds": 0.5,
      "fadeOutSeconds": 1.0,
      "loop": true
    }
  }
};


// ---------------------------------------------------------------------------
// Short 2 - "SOLO 3 MM" (Parte 2)
// Locucion: 006_Ulfberht_Short2_Peso.mp3 (34.08975s, integra, incluye el CTA final).
// Musica: 03-objeto.mp3 desde 0.0s (pista original del largo, sin editar).
// ---------------------------------------------------------------------------
export const short2PesoFixture: ExplainerProps = {
  "cuts": [
    {
      "id": "2-open",
      "source": "video006/images/2.png",
      "in_seconds": 0.0,
      "out_seconds": 4.2,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video006/shorts-audio/sfx/processed/short2-sfx-2-open.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "8-medidas",
      "source": "video006/video/plano-objeto-objeto-8-14-retimed.mp4",
      "in_seconds": 4.2,
      "out_seconds": 13.08,
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
      "id": "24",
      "source": "video006/images/24.png",
      "in_seconds": 13.08,
      "out_seconds": 17.3,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "drift-up",
      "audioSrc": "video006/shorts-audio/sfx/processed/short2-sfx-24.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "9-corte",
      "source": "video006/video/plano-objeto-objeto-8-14-retimed.mp4",
      "in_seconds": 17.3,
      "out_seconds": 25.08,
      "source_in_seconds": 16.3,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.4
      }
    },
    {
      "id": "B",
      "source": "video006/images/B.png",
      "in_seconds": 25.08,
      "out_seconds": 29.5,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video006/shorts-audio/sfx/processed/short2-sfx-B.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "15-cta",
      "source": "video006/images/15.png",
      "in_seconds": 29.5,
      "out_seconds": 31.4,
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5,
      "animation": "zoom-out",
      "backgroundColor": "transparent",
      "audioSrc": "video006/shorts-audio/sfx/processed/short2-sfx-15-cta.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "cta",
      "source": "",
      "type": "cta_card",
      "in_seconds": 31.4,
      "out_seconds": 34.08975,
      "text": "SIGUENOS PARA PARTE 3"
    }
  ],
  "overlays": [
    {
      "type": "monumental_title",
      "in_seconds": 0.0,
      "out_seconds": 3.0,
      "position": "center",
      "text": "SOLO 3 MM\nEN EL CENTRO"
    },
    {
      "type": "rotulo",
      "in_seconds": 9.26,
      "out_seconds": 12.88,
      "position": "top-left",
      "variant": "label",
      "text": "TIPO X DE OAKESHOTT"
    },
    {
      "type": "rotulo",
      "in_seconds": 13.28,
      "out_seconds": 17.1,
      "position": "top-left",
      "variant": "label",
      "text": "GROSSENWIEDEN",
      "subtitle": "ALEMANIA"
    }
  ],
  "watermarkSrc": WATERMARK,
  "brandBackground": true,
  "themeConfig": THEME,
  "captionsPhraseAware": true,
  "captions": [
    {
      "word": "De",
      "startMs": 0,
      "endMs": 220,
      "pageBreakAfter": false
    },
    {
      "word": "media,",
      "startMs": 220,
      "endMs": 440,
      "pageBreakAfter": true
    },
    {
      "word": "una",
      "startMs": 820,
      "endMs": 940,
      "pageBreakAfter": false
    },
    {
      "word": "Ulfberht",
      "startMs": 940,
      "endMs": 1540,
      "pageBreakAfter": false
    },
    {
      "word": "pesaba",
      "startMs": 1540,
      "endMs": 2120,
      "pageBreakAfter": false
    },
    {
      "word": "1.200",
      "startMs": 2120,
      "endMs": 2880,
      "pageBreakAfter": false
    },
    {
      "word": "gramos.",
      "startMs": 2880,
      "endMs": 4100,
      "pageBreakAfter": true
    },
    {
      "word": "En",
      "startMs": 4200,
      "endMs": 4460,
      "pageBreakAfter": false
    },
    {
      "word": "ese",
      "startMs": 4460,
      "endMs": 4600,
      "pageBreakAfter": false
    },
    {
      "word": "peso",
      "startMs": 4600,
      "endMs": 4860,
      "pageBreakAfter": false
    },
    {
      "word": "cabían",
      "startMs": 4860,
      "endMs": 5220,
      "pageBreakAfter": false
    },
    {
      "word": "91",
      "startMs": 5220,
      "endMs": 5620,
      "pageBreakAfter": true
    },
    {
      "word": "centímetros",
      "startMs": 5620,
      "endMs": 6380,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 6380,
      "endMs": 6620,
      "pageBreakAfter": false
    },
    {
      "word": "hoja,",
      "startMs": 6620,
      "endMs": 6900,
      "pageBreakAfter": true
    },
    {
      "word": "unos",
      "startMs": 7360,
      "endMs": 7480,
      "pageBreakAfter": false
    },
    {
      "word": "5",
      "startMs": 7480,
      "endMs": 7760,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 7760,
      "endMs": 7940,
      "pageBreakAfter": false
    },
    {
      "word": "ancho",
      "startMs": 7940,
      "endMs": 8200,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 8200,
      "endMs": 8300,
      "pageBreakAfter": true
    },
    {
      "word": "la",
      "startMs": 8300,
      "endMs": 8420,
      "pageBreakAfter": false
    },
    {
      "word": "base",
      "startMs": 8420,
      "endMs": 8640,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 8640,
      "endMs": 9260,
      "pageBreakAfter": false
    },
    {
      "word": "dos",
      "startMs": 9260,
      "endMs": 9440,
      "pageBreakAfter": false
    },
    {
      "word": "filos",
      "startMs": 9440,
      "endMs": 9720,
      "pageBreakAfter": true
    },
    {
      "word": "paralelos",
      "startMs": 9720,
      "endMs": 10240,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 10240,
      "endMs": 10380,
      "pageBreakAfter": false
    },
    {
      "word": "se",
      "startMs": 10380,
      "endMs": 10520,
      "pageBreakAfter": false
    },
    {
      "word": "estrechan",
      "startMs": 10520,
      "endMs": 10960,
      "pageBreakAfter": false
    },
    {
      "word": "ligeramente",
      "startMs": 10960,
      "endMs": 11560,
      "pageBreakAfter": true
    },
    {
      "word": "hacia",
      "startMs": 11560,
      "endMs": 11720,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 11720,
      "endMs": 11880,
      "pageBreakAfter": false
    },
    {
      "word": "punta.",
      "startMs": 11880,
      "endMs": 12180,
      "pageBreakAfter": true
    },
    {
      "word": "Un",
      "startMs": 13080,
      "endMs": 13300,
      "pageBreakAfter": false
    },
    {
      "word": "ejemplar",
      "startMs": 13300,
      "endMs": 13680,
      "pageBreakAfter": false
    },
    {
      "word": "recuperado",
      "startMs": 13680,
      "endMs": 14180,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 14180,
      "endMs": 14380,
      "pageBreakAfter": false
    },
    {
      "word": "río",
      "startMs": 14380,
      "endMs": 14600,
      "pageBreakAfter": true
    },
    {
      "word": "Weser",
      "startMs": 14600,
      "endMs": 15040,
      "pageBreakAfter": false
    },
    {
      "word": "pasó",
      "startMs": 15040,
      "endMs": 15520,
      "pageBreakAfter": false
    },
    {
      "word": "por",
      "startMs": 15520,
      "endMs": 15800,
      "pageBreakAfter": false
    },
    {
      "word": "una",
      "startMs": 15800,
      "endMs": 15940,
      "pageBreakAfter": false
    },
    {
      "word": "tomografía.",
      "startMs": 15940,
      "endMs": 16560,
      "pageBreakAfter": true
    },
    {
      "word": "Bajo",
      "startMs": 17300,
      "endMs": 17500,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 17500,
      "endMs": 17620,
      "pageBreakAfter": false
    },
    {
      "word": "canal",
      "startMs": 17620,
      "endMs": 17840,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 17840,
      "endMs": 18000,
      "pageBreakAfter": false
    },
    {
      "word": "recorre",
      "startMs": 18000,
      "endMs": 18400,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 18400,
      "endMs": 18540,
      "pageBreakAfter": false
    },
    {
      "word": "centro",
      "startMs": 18540,
      "endMs": 18800,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 18800,
      "endMs": 18980,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 18980,
      "endMs": 19100,
      "pageBreakAfter": false
    },
    {
      "word": "hoja,",
      "startMs": 19100,
      "endMs": 19400,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 19960,
      "endMs": 20040,
      "pageBreakAfter": false
    },
    {
      "word": "metal",
      "startMs": 20040,
      "endMs": 20240,
      "pageBreakAfter": false
    },
    {
      "word": "mide",
      "startMs": 20240,
      "endMs": 20560,
      "pageBreakAfter": false
    },
    {
      "word": "solo",
      "startMs": 20560,
      "endMs": 20980,
      "pageBreakAfter": false
    },
    {
      "word": "3",
      "startMs": 20980,
      "endMs": 21300,
      "pageBreakAfter": true
    },
    {
      "word": "milímetros",
      "startMs": 21300,
      "endMs": 21740,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 21740,
      "endMs": 21920,
      "pageBreakAfter": false
    },
    {
      "word": "grosor,",
      "startMs": 21920,
      "endMs": 22300,
      "pageBreakAfter": true
    },
    {
      "word": "sin",
      "startMs": 22520,
      "endMs": 22780,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 22780,
      "endMs": 22900,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 22900,
      "endMs": 23000,
      "pageBreakAfter": false
    },
    {
      "word": "espada",
      "startMs": 23000,
      "endMs": 23320,
      "pageBreakAfter": false
    },
    {
      "word": "pierda",
      "startMs": 23320,
      "endMs": 23900,
      "pageBreakAfter": true
    },
    {
      "word": "resistencia.",
      "startMs": 23900,
      "endMs": 24540,
      "pageBreakAfter": true
    },
    {
      "word": "Para",
      "startMs": 25080,
      "endMs": 25300,
      "pageBreakAfter": false
    },
    {
      "word": "quien",
      "startMs": 25300,
      "endMs": 25460,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 25460,
      "endMs": 25640,
      "pageBreakAfter": false
    },
    {
      "word": "empuñaba,",
      "startMs": 25640,
      "endMs": 26080,
      "pageBreakAfter": true
    },
    {
      "word": "eso",
      "startMs": 26340,
      "endMs": 26440,
      "pageBreakAfter": false
    },
    {
      "word": "significaba",
      "startMs": 26440,
      "endMs": 26960,
      "pageBreakAfter": false
    },
    {
      "word": "cansarse",
      "startMs": 26960,
      "endMs": 27460,
      "pageBreakAfter": false
    },
    {
      "word": "mucho",
      "startMs": 27460,
      "endMs": 27700,
      "pageBreakAfter": false
    },
    {
      "word": "menos",
      "startMs": 27700,
      "endMs": 27980,
      "pageBreakAfter": true
    },
    {
      "word": "en",
      "startMs": 27980,
      "endMs": 28180,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 28180,
      "endMs": 28300,
      "pageBreakAfter": false
    },
    {
      "word": "combate",
      "startMs": 28300,
      "endMs": 28680,
      "pageBreakAfter": false
    },
    {
      "word": "largo.",
      "startMs": 28680,
      "endMs": 28920,
      "pageBreakAfter": true
    },
    {
      "word": "Síguenos",
      "startMs": 29500,
      "endMs": 29960,
      "pageBreakAfter": false
    },
    {
      "word": "para",
      "startMs": 29960,
      "endMs": 30180,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 30180,
      "endMs": 30300,
      "pageBreakAfter": false
    },
    {
      "word": "Parte",
      "startMs": 30300,
      "endMs": 30500,
      "pageBreakAfter": false
    },
    {
      "word": "3:",
      "startMs": 30500,
      "endMs": 30800,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 31400,
      "endMs": 31480,
      "pageBreakAfter": false
    },
    {
      "word": "origen",
      "startMs": 31480,
      "endMs": 31840,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 31840,
      "endMs": 31940,
      "pageBreakAfter": false
    },
    {
      "word": "este",
      "startMs": 31940,
      "endMs": 32120,
      "pageBreakAfter": false
    },
    {
      "word": "acero",
      "startMs": 32120,
      "endMs": 32460,
      "pageBreakAfter": true
    },
    {
      "word": "que",
      "startMs": 32460,
      "endMs": 32800,
      "pageBreakAfter": false
    },
    {
      "word": "aún",
      "startMs": 32800,
      "endMs": 33000,
      "pageBreakAfter": false
    },
    {
      "word": "se",
      "startMs": 33000,
      "endMs": 33200,
      "pageBreakAfter": false
    },
    {
      "word": "discute.",
      "startMs": 33200,
      "endMs": 33640,
      "pageBreakAfter": true
    }
  ],
  "audio": {
    "narration": {
      "src": "video006/shorts-audio/short2-narration.mp3",
      "volume": 1.4962
    },
    "music": {
      "src": "video006/shorts-audio/short2-music.mp3",
      "volume": 0.0562,
      "fadeInSeconds": 0.5,
      "fadeOutSeconds": 1.0,
      "loop": true
    }
  }
};


// ---------------------------------------------------------------------------
// Short 3 - "ACERO DE ASIA O DEL RIN" (Parte 3)
// Locucion: 006_Ulfberht_Short3_Acero.mp3 (38.687313s, integra, incluye el CTA final).
// Musica: 02-contexto.mp3 desde 0.0s (pista original del largo, sin editar).
// ---------------------------------------------------------------------------
export const short3AceroFixture: ExplainerProps = {
  "cuts": [
    {
      "id": "6c-open",
      "source": "video006/images/6c.png",
      "in_seconds": 0.0,
      "out_seconds": 4.1,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "transform": {
        "position": {
          "x": 45,
          "y": 50
        }
      },
      "audioSrc": "video006/shorts-audio/sfx/processed/short3-sfx-6c-open.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "12a-volga",
      "source": "video006/video/plano-12a-ruta-volga-retimed.mp4",
      "in_seconds": 4.1,
      "out_seconds": 12.02,
      "source_in_seconds": 0.0,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.5
      }
    },
    {
      "id": "12b-horno",
      "source": "video006/video/plano-objeto-objeto-8-14-retimed.mp4",
      "in_seconds": 12.02,
      "out_seconds": 16.86,
      "source_in_seconds": 52.0,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.5
      }
    },
    {
      "id": "D",
      "source": "video006/images/D.png",
      "in_seconds": 16.86,
      "out_seconds": 21.44,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video006/shorts-audio/sfx/processed/short3-sfx-D.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "13-cementacion",
      "source": "video006/video/plano-objeto-objeto-8-14-retimed.mp4",
      "in_seconds": 21.44,
      "out_seconds": 26.82,
      "source_in_seconds": 64.3,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.5
      }
    },
    {
      "id": "11-debate",
      "source": "video006/video/plano-objeto-objeto-8-14-retimed.mp4",
      "in_seconds": 26.82,
      "out_seconds": 29.32,
      "source_in_seconds": 45.5,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.8
      }
    },
    {
      "id": "7",
      "source": "video006/images/7.png",
      "in_seconds": 29.32,
      "out_seconds": 33.86,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "transform": {
        "scale": 1.3
      },
      "audioSrc": "video006/shorts-audio/sfx/processed/short3-sfx-7.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "16-cta",
      "source": "video006/images/16.png",
      "in_seconds": 33.86,
      "out_seconds": 35.74,
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "backgroundColor": "transparent",
      "audioSrc": "video006/shorts-audio/sfx/processed/short3-sfx-16-cta.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "cta",
      "source": "",
      "type": "cta_card",
      "in_seconds": 35.74,
      "out_seconds": 38.687313,
      "text": "SIGUENOS PARA PARTE 4"
    }
  ],
  "overlays": [
    {
      "type": "monumental_title",
      "in_seconds": 0.0,
      "out_seconds": 3.0,
      "position": "center",
      "text": "¿ACERO DE ASIA\nO DEL RIN?"
    },
    {
      "type": "rotulo",
      "in_seconds": 6.64,
      "out_seconds": 11.82,
      "position": "top-left",
      "variant": "label",
      "text": "HASTA UN 1,5 %",
      "subtitle": "DE CARBONO"
    }
  ],
  "watermarkSrc": WATERMARK,
  "brandBackground": true,
  "themeConfig": THEME,
  "captionsPhraseAware": true,
  "captions": [
    {
      "word": "Hay",
      "startMs": 0,
      "endMs": 220,
      "pageBreakAfter": false
    },
    {
      "word": "dos",
      "startMs": 220,
      "endMs": 340,
      "pageBreakAfter": false
    },
    {
      "word": "respuestas",
      "startMs": 340,
      "endMs": 820,
      "pageBreakAfter": false
    },
    {
      "word": "serias",
      "startMs": 820,
      "endMs": 1200,
      "pageBreakAfter": false
    },
    {
      "word": "sobre",
      "startMs": 1200,
      "endMs": 1540,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 1540,
      "endMs": 1680,
      "pageBreakAfter": false
    },
    {
      "word": "origen",
      "startMs": 1680,
      "endMs": 1980,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 1980,
      "endMs": 2160,
      "pageBreakAfter": false
    },
    {
      "word": "acero",
      "startMs": 2160,
      "endMs": 2420,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 2420,
      "endMs": 2520,
      "pageBreakAfter": true
    },
    {
      "word": "las",
      "startMs": 2520,
      "endMs": 2640,
      "pageBreakAfter": false
    },
    {
      "word": "mejores",
      "startMs": 2640,
      "endMs": 2940,
      "pageBreakAfter": false
    },
    {
      "word": "Ulfberht.",
      "startMs": 2940,
      "endMs": 3660,
      "pageBreakAfter": true
    },
    {
      "word": "Alan",
      "startMs": 4100,
      "endMs": 4360,
      "pageBreakAfter": false
    },
    {
      "word": "Williams",
      "startMs": 4360,
      "endMs": 4680,
      "pageBreakAfter": false
    },
    {
      "word": "propone",
      "startMs": 4680,
      "endMs": 5280,
      "pageBreakAfter": false
    },
    {
      "word": "una",
      "startMs": 5280,
      "endMs": 5500,
      "pageBreakAfter": false
    },
    {
      "word": "importación:",
      "startMs": 5500,
      "endMs": 6080,
      "pageBreakAfter": true
    },
    {
      "word": "lingotes",
      "startMs": 6640,
      "endMs": 7120,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 7120,
      "endMs": 7380,
      "pageBreakAfter": false
    },
    {
      "word": "acero",
      "startMs": 7380,
      "endMs": 7620,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 7620,
      "endMs": 7760,
      "pageBreakAfter": false
    },
    {
      "word": "crisol,",
      "startMs": 7760,
      "endMs": 8200,
      "pageBreakAfter": true
    },
    {
      "word": "ya",
      "startMs": 8460,
      "endMs": 8640,
      "pageBreakAfter": false
    },
    {
      "word": "purificados,",
      "startMs": 8640,
      "endMs": 9240,
      "pageBreakAfter": true
    },
    {
      "word": "llegados",
      "startMs": 9700,
      "endMs": 10060,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 10060,
      "endMs": 10280,
      "pageBreakAfter": false
    },
    {
      "word": "Asia",
      "startMs": 10280,
      "endMs": 10420,
      "pageBreakAfter": false
    },
    {
      "word": "Central",
      "startMs": 10420,
      "endMs": 10780,
      "pageBreakAfter": false
    },
    {
      "word": "por",
      "startMs": 10780,
      "endMs": 11080,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 11080,
      "endMs": 11180,
      "pageBreakAfter": false
    },
    {
      "word": "Volga.",
      "startMs": 11180,
      "endMs": 11440,
      "pageBreakAfter": true
    },
    {
      "word": "Ningún",
      "startMs": 12020,
      "endMs": 12360,
      "pageBreakAfter": false
    },
    {
      "word": "horno",
      "startMs": 12360,
      "endMs": 12580,
      "pageBreakAfter": false
    },
    {
      "word": "europeo",
      "startMs": 12580,
      "endMs": 13080,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 13080,
      "endMs": 13180,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 13180,
      "endMs": 13280,
      "pageBreakAfter": true
    },
    {
      "word": "época,",
      "startMs": 13280,
      "endMs": 13500,
      "pageBreakAfter": false
    },
    {
      "word": "argumenta,",
      "startMs": 13780,
      "endMs": 14340,
      "pageBreakAfter": true
    },
    {
      "word": "fundía",
      "startMs": 14760,
      "endMs": 15120,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 15120,
      "endMs": 15320,
      "pageBreakAfter": false
    },
    {
      "word": "todo",
      "startMs": 15320,
      "endMs": 15540,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 15540,
      "endMs": 15760,
      "pageBreakAfter": false
    },
    {
      "word": "hierro.",
      "startMs": 15760,
      "endMs": 16100,
      "pageBreakAfter": true
    },
    {
      "word": "Ingo",
      "startMs": 16860,
      "endMs": 17140,
      "pageBreakAfter": false
    },
    {
      "word": "Petri,",
      "startMs": 17140,
      "endMs": 17480,
      "pageBreakAfter": true
    },
    {
      "word": "P.",
      "startMs": 17660,
      "endMs": 17760,
      "pageBreakAfter": false
    },
    {
      "word": "Kucypera",
      "startMs": 17760,
      "endMs": 18340,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 18340,
      "endMs": 18560,
      "pageBreakAfter": false
    },
    {
      "word": "Jiří",
      "startMs": 18560,
      "endMs": 18820,
      "pageBreakAfter": false
    },
    {
      "word": "Hošek",
      "startMs": 18820,
      "endMs": 19340,
      "pageBreakAfter": true
    },
    {
      "word": "creen",
      "startMs": 19340,
      "endMs": 19780,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 19780,
      "endMs": 19900,
      "pageBreakAfter": false
    },
    {
      "word": "bastaba",
      "startMs": 19900,
      "endMs": 20260,
      "pageBreakAfter": false
    },
    {
      "word": "con",
      "startMs": 20260,
      "endMs": 20460,
      "pageBreakAfter": false
    },
    {
      "word": "mineral",
      "startMs": 20460,
      "endMs": 20720,
      "pageBreakAfter": true
    },
    {
      "word": "europeo,",
      "startMs": 20720,
      "endMs": 21320,
      "pageBreakAfter": false
    },
    {
      "word": "trabajado",
      "startMs": 21440,
      "endMs": 21880,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 21880,
      "endMs": 22000,
      "pageBreakAfter": false
    },
    {
      "word": "talleres",
      "startMs": 22000,
      "endMs": 22300,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 22300,
      "endMs": 22540,
      "pageBreakAfter": true
    },
    {
      "word": "Rin,",
      "startMs": 22540,
      "endMs": 22800,
      "pageBreakAfter": false
    },
    {
      "word": "con",
      "startMs": 23180,
      "endMs": 23340,
      "pageBreakAfter": false
    },
    {
      "word": "forja",
      "startMs": 23340,
      "endMs": 23660,
      "pageBreakAfter": false
    },
    {
      "word": "repetida",
      "startMs": 23660,
      "endMs": 24160,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 24160,
      "endMs": 24260,
      "pageBreakAfter": true
    },
    {
      "word": "cementación,",
      "startMs": 24260,
      "endMs": 24780,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 25260,
      "endMs": 25340,
      "pageBreakAfter": false
    },
    {
      "word": "carga",
      "startMs": 25340,
      "endMs": 25580,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 25580,
      "endMs": 25760,
      "pageBreakAfter": false
    },
    {
      "word": "carbono",
      "startMs": 25760,
      "endMs": 26080,
      "pageBreakAfter": true
    },
    {
      "word": "la",
      "startMs": 26080,
      "endMs": 26240,
      "pageBreakAfter": false
    },
    {
      "word": "superficie.",
      "startMs": 26240,
      "endMs": 26820,
      "pageBreakAfter": true
    },
    {
      "word": "El",
      "startMs": 26820,
      "endMs": 27440,
      "pageBreakAfter": false
    },
    {
      "word": "debate",
      "startMs": 27440,
      "endMs": 27660,
      "pageBreakAfter": false
    },
    {
      "word": "sigue",
      "startMs": 27660,
      "endMs": 28040,
      "pageBreakAfter": false
    },
    {
      "word": "sin",
      "startMs": 28040,
      "endMs": 28240,
      "pageBreakAfter": false
    },
    {
      "word": "consenso.",
      "startMs": 28240,
      "endMs": 28780,
      "pageBreakAfter": true
    },
    {
      "word": "Lo",
      "startMs": 29320,
      "endMs": 29460,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 29460,
      "endMs": 29580,
      "pageBreakAfter": false
    },
    {
      "word": "sí",
      "startMs": 29580,
      "endMs": 29700,
      "pageBreakAfter": false
    },
    {
      "word": "queda",
      "startMs": 29700,
      "endMs": 29940,
      "pageBreakAfter": false
    },
    {
      "word": "descartado",
      "startMs": 29940,
      "endMs": 30560,
      "pageBreakAfter": true
    },
    {
      "word": "es",
      "startMs": 30560,
      "endMs": 30840,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 30840,
      "endMs": 30960,
      "pageBreakAfter": false
    },
    {
      "word": "fuera",
      "startMs": 30960,
      "endMs": 31200,
      "pageBreakAfter": false
    },
    {
      "word": "una",
      "startMs": 31200,
      "endMs": 31400,
      "pageBreakAfter": false
    },
    {
      "word": "tecnología",
      "startMs": 31400,
      "endMs": 31920,
      "pageBreakAfter": true
    },
    {
      "word": "imposible",
      "startMs": 31920,
      "endMs": 32500,
      "pageBreakAfter": false
    },
    {
      "word": "para",
      "startMs": 32500,
      "endMs": 32700,
      "pageBreakAfter": false
    },
    {
      "word": "su",
      "startMs": 32700,
      "endMs": 32860,
      "pageBreakAfter": false
    },
    {
      "word": "época.",
      "startMs": 32860,
      "endMs": 33100,
      "pageBreakAfter": true
    },
    {
      "word": "Síguenos",
      "startMs": 33860,
      "endMs": 34300,
      "pageBreakAfter": false
    },
    {
      "word": "para",
      "startMs": 34300,
      "endMs": 34500,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 34500,
      "endMs": 34620,
      "pageBreakAfter": false
    },
    {
      "word": "Parte",
      "startMs": 34620,
      "endMs": 34800,
      "pageBreakAfter": false
    },
    {
      "word": "4:",
      "startMs": 34800,
      "endMs": 35120,
      "pageBreakAfter": true
    },
    {
      "word": "cómo",
      "startMs": 35740,
      "endMs": 35900,
      "pageBreakAfter": false
    },
    {
      "word": "llegaban",
      "startMs": 35900,
      "endMs": 36320,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 36320,
      "endMs": 36400,
      "pageBreakAfter": false
    },
    {
      "word": "los",
      "startMs": 36400,
      "endMs": 36520,
      "pageBreakAfter": false
    },
    {
      "word": "vikingos",
      "startMs": 36520,
      "endMs": 37000,
      "pageBreakAfter": true
    },
    {
      "word": "unas",
      "startMs": 37000,
      "endMs": 37260,
      "pageBreakAfter": false
    },
    {
      "word": "espadas",
      "startMs": 37260,
      "endMs": 37700,
      "pageBreakAfter": false
    },
    {
      "word": "prohibidas.",
      "startMs": 37700,
      "endMs": 38240,
      "pageBreakAfter": true
    }
  ],
  "audio": {
    "narration": {
      "src": "video006/shorts-audio/short3-narration.mp3",
      "volume": 1.4962
    },
    "music": {
      "src": "video006/shorts-audio/short3-music.mp3",
      "volume": 0.2344,
      "fadeInSeconds": 0.5,
      "fadeOutSeconds": 1.0,
      "loop": true
    }
  }
};


// ---------------------------------------------------------------------------
// Short 4 - "PROHIBIDO VENDERSELAS" (Parte 4)
// Locucion: 006_Ulfberht_Short4_Embargo.mp3 (37.564063s, integra, incluye el CTA final).
// Musica: 04-historia.mp3 desde 0.0s (pista original del largo, sin editar).
// ---------------------------------------------------------------------------
export const short4EmbargoFixture: ExplainerProps = {
  "cuts": [
    {
      "id": "5-open",
      "source": "video006/images/5.png",
      "in_seconds": 0.0,
      "out_seconds": 3.66,
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
      "audioSrc": "video006/shorts-audio/sfx/processed/short4-sfx-5-open.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "16",
      "source": "video006/images/16.png",
      "in_seconds": 3.66,
      "out_seconds": 15.9,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-out",
      "audioSrc": "video006/shorts-audio/sfx/processed/short4-sfx-16.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "17-candado",
      "source": "video006/video/plano-17-embargo-candado-retimed.mp4",
      "in_seconds": 15.9,
      "out_seconds": 17.68,
      "source_in_seconds": 0.0,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.5
      },
      "playbackRate": 2.5
    },
    {
      "id": "18ab-rutas",
      "source": "video006/video/plano-18a19-mapa-rutas-retimed.mp4",
      "in_seconds": 17.68,
      "out_seconds": 27.26,
      "source_in_seconds": 0.0,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.5
      }
    },
    {
      "id": "18c-baltico-caspio",
      "source": "video006/video/plano-18a19-mapa-rutas-retimed.mp4",
      "in_seconds": 27.26,
      "out_seconds": 32.7,
      "source_in_seconds": 14.09,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.35
      }
    },
    {
      "id": "21-cta",
      "source": "video006/images/21.png",
      "in_seconds": 32.7,
      "out_seconds": 34.06,
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
      "in_seconds": 34.06,
      "out_seconds": 37.564063,
      "text": "SIGUENOS PARA PARTE 5"
    }
  ],
  "overlays": [
    {
      "type": "monumental_title",
      "in_seconds": 0.0,
      "out_seconds": 3.0,
      "position": "center",
      "text": "PROHIBIDO\nVENDÉRSELAS"
    },
    {
      "type": "rotulo",
      "in_seconds": 3.8600000000000003,
      "out_seconds": 12.4,
      "position": "top-left",
      "variant": "label",
      "text": "CAPITULARES",
      "subtitle": "800-864"
    },
    {
      "type": "photo_insert",
      "in_seconds": 4.52,
      "out_seconds": 12.6,
      "source": "video006/images/carlomagno-busto.jpg",
      "caption": "Busto de Carlomagno",
      "attribution": "Beckstet, CC BY-SA 3.0, Wikimedia Commons",
      "position": "top-right",
      "width": 520
    }
  ],
  "watermarkSrc": WATERMARK,
  "brandBackground": true,
  "themeConfig": THEME,
  "captionsPhraseAware": true,
  "captions": [
    {
      "word": "Vender",
      "startMs": 0,
      "endMs": 340,
      "pageBreakAfter": false
    },
    {
      "word": "una",
      "startMs": 340,
      "endMs": 540,
      "pageBreakAfter": false
    },
    {
      "word": "espada",
      "startMs": 540,
      "endMs": 820,
      "pageBreakAfter": false
    },
    {
      "word": "franca",
      "startMs": 820,
      "endMs": 1200,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 1200,
      "endMs": 1340,
      "pageBreakAfter": true
    },
    {
      "word": "un",
      "startMs": 1340,
      "endMs": 1420,
      "pageBreakAfter": false
    },
    {
      "word": "extranjero",
      "startMs": 1420,
      "endMs": 1920,
      "pageBreakAfter": false
    },
    {
      "word": "podía",
      "startMs": 1920,
      "endMs": 2260,
      "pageBreakAfter": false
    },
    {
      "word": "costar",
      "startMs": 2260,
      "endMs": 2740,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 2740,
      "endMs": 2860,
      "pageBreakAfter": true
    },
    {
      "word": "vida.",
      "startMs": 2860,
      "endMs": 3020,
      "pageBreakAfter": true
    },
    {
      "word": "Las",
      "startMs": 3660,
      "endMs": 3860,
      "pageBreakAfter": false
    },
    {
      "word": "Capitulares",
      "startMs": 3860,
      "endMs": 4300,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 4300,
      "endMs": 4520,
      "pageBreakAfter": false
    },
    {
      "word": "Carlomagno",
      "startMs": 4520,
      "endMs": 5060,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 5060,
      "endMs": 5340,
      "pageBreakAfter": true
    },
    {
      "word": "sus",
      "startMs": 5340,
      "endMs": 5460,
      "pageBreakAfter": false
    },
    {
      "word": "herederos",
      "startMs": 5460,
      "endMs": 5920,
      "pageBreakAfter": false
    },
    {
      "word": "prohibían",
      "startMs": 5920,
      "endMs": 6440,
      "pageBreakAfter": false
    },
    {
      "word": "vender",
      "startMs": 6440,
      "endMs": 6720,
      "pageBreakAfter": false
    },
    {
      "word": "espadas,",
      "startMs": 6720,
      "endMs": 7100,
      "pageBreakAfter": true
    },
    {
      "word": "lanzas",
      "startMs": 7500,
      "endMs": 7860,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 7860,
      "endMs": 8180,
      "pageBreakAfter": false
    },
    {
      "word": "cotas",
      "startMs": 8180,
      "endMs": 8480,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 8480,
      "endMs": 8600,
      "pageBreakAfter": false
    },
    {
      "word": "malla",
      "startMs": 8600,
      "endMs": 8860,
      "pageBreakAfter": true
    },
    {
      "word": "a",
      "startMs": 8860,
      "endMs": 9120,
      "pageBreakAfter": false
    },
    {
      "word": "extranjeros,",
      "startMs": 9120,
      "endMs": 9800,
      "pageBreakAfter": true
    },
    {
      "word": "sobre",
      "startMs": 9900,
      "endMs": 10040,
      "pageBreakAfter": false
    },
    {
      "word": "todo",
      "startMs": 10040,
      "endMs": 10320,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 10320,
      "endMs": 10690,
      "pageBreakAfter": false
    },
    {
      "word": "nórdicos",
      "startMs": 10690,
      "endMs": 11060,
      "pageBreakAfter": false
    },
    {
      "word": "paganos",
      "startMs": 11060,
      "endMs": 11500,
      "pageBreakAfter": true
    },
    {
      "word": "y",
      "startMs": 11500,
      "endMs": 11680,
      "pageBreakAfter": false
    },
    {
      "word": "eslavos.",
      "startMs": 11680,
      "endMs": 12080,
      "pageBreakAfter": true
    },
    {
      "word": "El",
      "startMs": 12600,
      "endMs": 12740,
      "pageBreakAfter": false
    },
    {
      "word": "castigo,",
      "startMs": 12740,
      "endMs": 13120,
      "pageBreakAfter": true
    },
    {
      "word": "la",
      "startMs": 13560,
      "endMs": 13640,
      "pageBreakAfter": false
    },
    {
      "word": "confiscación",
      "startMs": 13640,
      "endMs": 14180,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 14180,
      "endMs": 14320,
      "pageBreakAfter": false
    },
    {
      "word": "bienes",
      "startMs": 14320,
      "endMs": 14700,
      "pageBreakAfter": false
    },
    {
      "word": "o",
      "startMs": 14700,
      "endMs": 14940,
      "pageBreakAfter": true
    },
    {
      "word": "la",
      "startMs": 14940,
      "endMs": 15020,
      "pageBreakAfter": false
    },
    {
      "word": "muerte.",
      "startMs": 15020,
      "endMs": 15280,
      "pageBreakAfter": true
    },
    {
      "word": "No",
      "startMs": 15900,
      "endMs": 16120,
      "pageBreakAfter": false
    },
    {
      "word": "frenaron",
      "startMs": 16120,
      "endMs": 16500,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 16500,
      "endMs": 16660,
      "pageBreakAfter": false
    },
    {
      "word": "contrabando.",
      "startMs": 16660,
      "endMs": 17120,
      "pageBreakAfter": true
    },
    {
      "word": "La",
      "startMs": 17680,
      "endMs": 17820,
      "pageBreakAfter": false
    },
    {
      "word": "mayoría",
      "startMs": 17820,
      "endMs": 18120,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 18120,
      "endMs": 18300,
      "pageBreakAfter": false
    },
    {
      "word": "las",
      "startMs": 18300,
      "endMs": 18420,
      "pageBreakAfter": false
    },
    {
      "word": "Ulfberht",
      "startMs": 18420,
      "endMs": 18920,
      "pageBreakAfter": true
    },
    {
      "word": "conocidas",
      "startMs": 18920,
      "endMs": 19540,
      "pageBreakAfter": false
    },
    {
      "word": "ha",
      "startMs": 19540,
      "endMs": 19840,
      "pageBreakAfter": false
    },
    {
      "word": "aparecido",
      "startMs": 19840,
      "endMs": 20260,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 20260,
      "endMs": 20420,
      "pageBreakAfter": false
    },
    {
      "word": "Escandinavia",
      "startMs": 20420,
      "endMs": 21020,
      "pageBreakAfter": true
    },
    {
      "word": "y",
      "startMs": 21020,
      "endMs": 21380,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 21380,
      "endMs": 21500,
      "pageBreakAfter": false
    },
    {
      "word": "este",
      "startMs": 21500,
      "endMs": 21700,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 21700,
      "endMs": 21840,
      "pageBreakAfter": false
    },
    {
      "word": "Europa.",
      "startMs": 21840,
      "endMs": 22080,
      "pageBreakAfter": true
    },
    {
      "word": "Tres,",
      "startMs": 22800,
      "endMs": 23020,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 23620,
      "endMs": 23780,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 23780,
      "endMs": 23880,
      "pageBreakAfter": false
    },
    {
      "word": "antigua",
      "startMs": 23880,
      "endMs": 24280,
      "pageBreakAfter": false
    },
    {
      "word": "Bulgaria",
      "startMs": 24280,
      "endMs": 24620,
      "pageBreakAfter": true
    },
    {
      "word": "del",
      "startMs": 24620,
      "endMs": 24900,
      "pageBreakAfter": false
    },
    {
      "word": "Volga,",
      "startMs": 24900,
      "endMs": 25220,
      "pageBreakAfter": true
    },
    {
      "word": "a",
      "startMs": 25480,
      "endMs": 25560,
      "pageBreakAfter": false
    },
    {
      "word": "miles",
      "startMs": 25560,
      "endMs": 25700,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 25700,
      "endMs": 25880,
      "pageBreakAfter": false
    },
    {
      "word": "kilómetros",
      "startMs": 25880,
      "endMs": 26260,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 26260,
      "endMs": 26520,
      "pageBreakAfter": true
    },
    {
      "word": "Rin.",
      "startMs": 26520,
      "endMs": 26780,
      "pageBreakAfter": true
    },
    {
      "word": "Viajaron",
      "startMs": 27260,
      "endMs": 27660,
      "pageBreakAfter": false
    },
    {
      "word": "por",
      "startMs": 27660,
      "endMs": 27860,
      "pageBreakAfter": false
    },
    {
      "word": "los",
      "startMs": 27860,
      "endMs": 28020,
      "pageBreakAfter": false
    },
    {
      "word": "ríos",
      "startMs": 28020,
      "endMs": 28260,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 28260,
      "endMs": 28400,
      "pageBreakAfter": true
    },
    {
      "word": "Este,",
      "startMs": 28400,
      "endMs": 28600,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 28940,
      "endMs": 29020,
      "pageBreakAfter": false
    },
    {
      "word": "red",
      "startMs": 29020,
      "endMs": 29180,
      "pageBreakAfter": false
    },
    {
      "word": "comercial",
      "startMs": 29180,
      "endMs": 29620,
      "pageBreakAfter": false
    },
    {
      "word": "entre",
      "startMs": 29620,
      "endMs": 29860,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 29860,
      "endMs": 30000,
      "pageBreakAfter": false
    },
    {
      "word": "Báltico",
      "startMs": 30000,
      "endMs": 30400,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 30400,
      "endMs": 30660,
      "pageBreakAfter": false
    },
    {
      "word": "los",
      "startMs": 30660,
      "endMs": 30780,
      "pageBreakAfter": false
    },
    {
      "word": "mercados",
      "startMs": 30780,
      "endMs": 31140,
      "pageBreakAfter": true
    },
    {
      "word": "islámicos",
      "startMs": 31140,
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
      "word": "Caspio.",
      "startMs": 31820,
      "endMs": 32260,
      "pageBreakAfter": true
    },
    {
      "word": "Síguenos",
      "startMs": 32700,
      "endMs": 33220,
      "pageBreakAfter": false
    },
    {
      "word": "para",
      "startMs": 33220,
      "endMs": 33440,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 33440,
      "endMs": 33560,
      "pageBreakAfter": false
    },
    {
      "word": "Parte",
      "startMs": 33560,
      "endMs": 33760,
      "pageBreakAfter": false
    },
    {
      "word": "5:",
      "startMs": 33760,
      "endMs": 34060,
      "pageBreakAfter": true
    },
    {
      "word": "por",
      "startMs": 34060,
      "endMs": 34680,
      "pageBreakAfter": false
    },
    {
      "word": "qué",
      "startMs": 34680,
      "endMs": 34800,
      "pageBreakAfter": false
    },
    {
      "word": "Noruega",
      "startMs": 34800,
      "endMs": 35200,
      "pageBreakAfter": false
    },
    {
      "word": "tiene",
      "startMs": 35200,
      "endMs": 35400,
      "pageBreakAfter": false
    },
    {
      "word": "tantas",
      "startMs": 35400,
      "endMs": 35900,
      "pageBreakAfter": true
    },
    {
      "word": "y",
      "startMs": 35900,
      "endMs": 36060,
      "pageBreakAfter": false
    },
    {
      "word": "Francia",
      "startMs": 36060,
      "endMs": 36460,
      "pageBreakAfter": false
    },
    {
      "word": "casi",
      "startMs": 36460,
      "endMs": 36720,
      "pageBreakAfter": false
    },
    {
      "word": "ninguna.",
      "startMs": 36720,
      "endMs": 37020,
      "pageBreakAfter": true
    }
  ],
  "audio": {
    "narration": {
      "src": "video006/shorts-audio/short4-narration.mp3",
      "volume": 1.7989
    },
    "music": {
      "src": "video006/shorts-audio/short4-music.mp3",
      "volume": 0.0562,
      "fadeInSeconds": 0.5,
      "fadeOutSeconds": 1.0,
      "loop": true
    }
  }
};


// ---------------------------------------------------------------------------
// Short 5 - "HECHAS EN EL RIN, HALLADAS EN NORUEGA" (Parte 5)
// Locucion: 006_Ulfberht_Short5_Tumbas.mp3 (34.925688s, integra, incluye el CTA final).
// Musica: 06-legado-cta.mp3 desde 20.0s (pista original del largo, sin editar).
// ---------------------------------------------------------------------------
export const short5TumbasFixture: ExplainerProps = {
  "cuts": [
    {
      "id": "F-open",
      "source": "video006/images/F.png",
      "in_seconds": 0.0,
      "out_seconds": 2.46,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video006/shorts-audio/sfx/processed/short5-sfx-F-open.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "19-hallazgos",
      "source": "video006/video/plano-18a19-mapa-rutas-retimed.mp4",
      "in_seconds": 2.46,
      "out_seconds": 8.2,
      "source_in_seconds": 20.0,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.5
      }
    },
    {
      "id": "F",
      "source": "video006/images/F.png",
      "in_seconds": 8.2,
      "out_seconds": 16.26,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-out",
      "transform": {
        "position": {
          "x": 62,
          "y": 50
        }
      },
      "audioSrc": "video006/shorts-audio/sfx/processed/short5-sfx-F.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "20c",
      "source": "video006/images/20c.png",
      "in_seconds": 16.26,
      "out_seconds": 21.28,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "pan-left"
    },
    {
      "id": "20d",
      "source": "video006/images/20d.png",
      "in_seconds": 21.28,
      "out_seconds": 25.24,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-out",
      "audioSrc": "video006/shorts-audio/sfx/processed/short5-sfx-20d.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "15",
      "source": "video006/images/15.png",
      "in_seconds": 25.24,
      "out_seconds": 30.2,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "pan-right",
      "audioSrc": "video006/shorts-audio/sfx/processed/short5-sfx-15.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "A-cta",
      "source": "video006/images/A.png",
      "in_seconds": 30.2,
      "out_seconds": 32.72,
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
      "in_seconds": 32.72,
      "out_seconds": 34.925688,
      "text": "SIGUENOS EN ARTILUGIO"
    }
  ],
  "overlays": [
    {
      "type": "monumental_title",
      "in_seconds": 0.0,
      "out_seconds": 3.0,
      "position": "center",
      "text": "HECHAS EN EL RIN\nHALLADAS\nEN NORUEGA"
    },
    {
      "type": "rotulo",
      "in_seconds": 2.76,
      "out_seconds": 7.999999999999999,
      "position": "top-left",
      "variant": "label",
      "text": "SUECIA 17",
      "subtitle": "FINLANDIA 14-31"
    }
  ],
  "watermarkSrc": WATERMARK,
  "brandBackground": true,
  "themeConfig": THEME,
  "captionsPhraseAware": true,
  "captions": [
    {
      "word": "Si",
      "startMs": 0,
      "endMs": 180,
      "pageBreakAfter": false
    },
    {
      "word": "las",
      "startMs": 180,
      "endMs": 320,
      "pageBreakAfter": false
    },
    {
      "word": "forjaban",
      "startMs": 320,
      "endMs": 680,
      "pageBreakAfter": false
    },
    {
      "word": "talleres",
      "startMs": 680,
      "endMs": 1080,
      "pageBreakAfter": false
    },
    {
      "word": "francos,",
      "startMs": 1080,
      "endMs": 1540,
      "pageBreakAfter": true
    },
    {
      "word": "¿por",
      "startMs": 1940,
      "endMs": 1960,
      "pageBreakAfter": false
    },
    {
      "word": "qué",
      "startMs": 1960,
      "endMs": 2080,
      "pageBreakAfter": false
    },
    {
      "word": "Noruega",
      "startMs": 2080,
      "endMs": 2460,
      "pageBreakAfter": false
    },
    {
      "word": "ha",
      "startMs": 2460,
      "endMs": 2620,
      "pageBreakAfter": false
    },
    {
      "word": "dado",
      "startMs": 2620,
      "endMs": 2760,
      "pageBreakAfter": true
    },
    {
      "word": "44",
      "startMs": 2760,
      "endMs": 3240,
      "pageBreakAfter": false
    },
    {
      "word": "Ulfberht",
      "startMs": 3240,
      "endMs": 4020,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 4020,
      "endMs": 4520,
      "pageBreakAfter": false
    },
    {
      "word": "Francia",
      "startMs": 4520,
      "endMs": 4940,
      "pageBreakAfter": false
    },
    {
      "word": "una",
      "startMs": 4940,
      "endMs": 5160,
      "pageBreakAfter": true
    },
    {
      "word": "o",
      "startMs": 5160,
      "endMs": 5340,
      "pageBreakAfter": false
    },
    {
      "word": "dos?",
      "startMs": 5340,
      "endMs": 5540,
      "pageBreakAfter": true
    },
    {
      "word": "La",
      "startMs": 6160,
      "endMs": 6440,
      "pageBreakAfter": false
    },
    {
      "word": "respuesta",
      "startMs": 6440,
      "endMs": 6760,
      "pageBreakAfter": false
    },
    {
      "word": "está",
      "startMs": 6760,
      "endMs": 7100,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 7100,
      "endMs": 7240,
      "pageBreakAfter": false
    },
    {
      "word": "las",
      "startMs": 7240,
      "endMs": 7360,
      "pageBreakAfter": true
    },
    {
      "word": "tumbas.",
      "startMs": 7360,
      "endMs": 7680,
      "pageBreakAfter": true
    },
    {
      "word": "En",
      "startMs": 8200,
      "endMs": 8320,
      "pageBreakAfter": false
    },
    {
      "word": "Escandinavia,",
      "startMs": 8320,
      "endMs": 8900,
      "pageBreakAfter": true
    },
    {
      "word": "un",
      "startMs": 9120,
      "endMs": 9200,
      "pageBreakAfter": false
    },
    {
      "word": "guerrero",
      "startMs": 9200,
      "endMs": 9480,
      "pageBreakAfter": false
    },
    {
      "word": "pagano",
      "startMs": 9480,
      "endMs": 9860,
      "pageBreakAfter": false
    },
    {
      "word": "era",
      "startMs": 9860,
      "endMs": 10200,
      "pageBreakAfter": false
    },
    {
      "word": "enterrado",
      "startMs": 10200,
      "endMs": 10640,
      "pageBreakAfter": true
    },
    {
      "word": "con",
      "startMs": 10640,
      "endMs": 10820,
      "pageBreakAfter": false
    },
    {
      "word": "sus",
      "startMs": 10820,
      "endMs": 10980,
      "pageBreakAfter": false
    },
    {
      "word": "armas",
      "startMs": 10980,
      "endMs": 11240,
      "pageBreakAfter": false
    },
    {
      "word": "bajo",
      "startMs": 11240,
      "endMs": 11800,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 11800,
      "endMs": 12020,
      "pageBreakAfter": true
    },
    {
      "word": "túmulo",
      "startMs": 12020,
      "endMs": 12380,
      "pageBreakAfter": false
    },
    {
      "word": "o",
      "startMs": 12380,
      "endMs": 12660,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 12660,
      "endMs": 12760,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 12760,
      "endMs": 12880,
      "pageBreakAfter": false
    },
    {
      "word": "barco,",
      "startMs": 12880,
      "endMs": 13200,
      "pageBreakAfter": true
    },
    {
      "word": "costumbre",
      "startMs": 13580,
      "endMs": 14080,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 14080,
      "endMs": 14220,
      "pageBreakAfter": false
    },
    {
      "word": "duró",
      "startMs": 14220,
      "endMs": 14480,
      "pageBreakAfter": false
    },
    {
      "word": "hasta",
      "startMs": 14480,
      "endMs": 14680,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 14680,
      "endMs": 14860,
      "pageBreakAfter": true
    },
    {
      "word": "siglo",
      "startMs": 14860,
      "endMs": 15060,
      "pageBreakAfter": false
    },
    {
      "word": "XI.",
      "startMs": 15060,
      "endMs": 15340,
      "pageBreakAfter": true
    },
    {
      "word": "Al",
      "startMs": 16260,
      "endMs": 16480,
      "pageBreakAfter": false
    },
    {
      "word": "sur,",
      "startMs": 16480,
      "endMs": 16680,
      "pageBreakAfter": true
    },
    {
      "word": "en",
      "startMs": 16840,
      "endMs": 16920,
      "pageBreakAfter": false
    },
    {
      "word": "tierra",
      "startMs": 16920,
      "endMs": 17080,
      "pageBreakAfter": false
    },
    {
      "word": "cristiana,",
      "startMs": 17080,
      "endMs": 17600,
      "pageBreakAfter": true
    },
    {
      "word": "meter",
      "startMs": 18040,
      "endMs": 18180,
      "pageBreakAfter": false
    },
    {
      "word": "armas",
      "startMs": 18180,
      "endMs": 18460,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 18460,
      "endMs": 18620,
      "pageBreakAfter": false
    },
    {
      "word": "una",
      "startMs": 18620,
      "endMs": 18740,
      "pageBreakAfter": false
    },
    {
      "word": "tumba",
      "startMs": 18740,
      "endMs": 19040,
      "pageBreakAfter": true
    },
    {
      "word": "estaba",
      "startMs": 19040,
      "endMs": 19320,
      "pageBreakAfter": false
    },
    {
      "word": "prohibido",
      "startMs": 19320,
      "endMs": 19800,
      "pageBreakAfter": false
    },
    {
      "word": "desde",
      "startMs": 19800,
      "endMs": 19980,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 19980,
      "endMs": 20220,
      "pageBreakAfter": false
    },
    {
      "word": "siglo",
      "startMs": 20220,
      "endMs": 20400,
      "pageBreakAfter": true
    },
    {
      "word": "VII.",
      "startMs": 20400,
      "endMs": 20700,
      "pageBreakAfter": true
    },
    {
      "word": "Las",
      "startMs": 21280,
      "endMs": 21480,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 21480,
      "endMs": 21620,
      "pageBreakAfter": false
    },
    {
      "word": "quedan",
      "startMs": 21620,
      "endMs": 21880,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 21880,
      "endMs": 22000,
      "pageBreakAfter": false
    },
    {
      "word": "allí",
      "startMs": 22000,
      "endMs": 22200,
      "pageBreakAfter": true
    },
    {
      "word": "se",
      "startMs": 22200,
      "endMs": 22380,
      "pageBreakAfter": false
    },
    {
      "word": "perdieron",
      "startMs": 22380,
      "endMs": 22740,
      "pageBreakAfter": false
    },
    {
      "word": "por",
      "startMs": 22740,
      "endMs": 22940,
      "pageBreakAfter": false
    },
    {
      "word": "accidente",
      "startMs": 22940,
      "endMs": 23460,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 23460,
      "endMs": 23580,
      "pageBreakAfter": true
    },
    {
      "word": "algún",
      "startMs": 23580,
      "endMs": 23780,
      "pageBreakAfter": false
    },
    {
      "word": "río",
      "startMs": 23780,
      "endMs": 24060,
      "pageBreakAfter": false
    },
    {
      "word": "o",
      "startMs": 24060,
      "endMs": 24220,
      "pageBreakAfter": false
    },
    {
      "word": "ciénaga.",
      "startMs": 24220,
      "endMs": 24520,
      "pageBreakAfter": true
    },
    {
      "word": "Alemania",
      "startMs": 25240,
      "endMs": 25580,
      "pageBreakAfter": false
    },
    {
      "word": "tiene",
      "startMs": 25580,
      "endMs": 25860,
      "pageBreakAfter": false
    },
    {
      "word": "trece,",
      "startMs": 25860,
      "endMs": 26280,
      "pageBreakAfter": true
    },
    {
      "word": "en",
      "startMs": 26620,
      "endMs": 26760,
      "pageBreakAfter": false
    },
    {
      "word": "su",
      "startMs": 26760,
      "endMs": 26840,
      "pageBreakAfter": false
    },
    {
      "word": "mayoría",
      "startMs": 26840,
      "endMs": 27100,
      "pageBreakAfter": false
    },
    {
      "word": "recuperadas",
      "startMs": 27100,
      "endMs": 27700,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 27700,
      "endMs": 27860,
      "pageBreakAfter": true
    },
    {
      "word": "ríos",
      "startMs": 27860,
      "endMs": 28160,
      "pageBreakAfter": false
    },
    {
      "word": "como",
      "startMs": 28160,
      "endMs": 28380,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 28380,
      "endMs": 28520,
      "pageBreakAfter": false
    },
    {
      "word": "Rin",
      "startMs": 28520,
      "endMs": 28800,
      "pageBreakAfter": false
    },
    {
      "word": "o",
      "startMs": 28800,
      "endMs": 29080,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 29080,
      "endMs": 29200,
      "pageBreakAfter": false
    },
    {
      "word": "Weser.",
      "startMs": 29200,
      "endMs": 29580,
      "pageBreakAfter": true
    },
    {
      "word": "¿Qué",
      "startMs": 30200,
      "endMs": 30360,
      "pageBreakAfter": false
    },
    {
      "word": "otro",
      "startMs": 30360,
      "endMs": 30540,
      "pageBreakAfter": false
    },
    {
      "word": "Artilugio",
      "startMs": 30540,
      "endMs": 31040,
      "pageBreakAfter": false
    },
    {
      "word": "quieres",
      "startMs": 31040,
      "endMs": 31340,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 31340,
      "endMs": 31540,
      "pageBreakAfter": true
    },
    {
      "word": "investiguemos?",
      "startMs": 31540,
      "endMs": 32180,
      "pageBreakAfter": true
    },
    {
      "word": "Cuéntanoslo",
      "startMs": 32720,
      "endMs": 33280,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 33280,
      "endMs": 33380,
      "pageBreakAfter": false
    },
    {
      "word": "comentarios",
      "startMs": 33380,
      "endMs": 33780,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 33780,
      "endMs": 34060,
      "pageBreakAfter": false
    },
    {
      "word": "síguenos.",
      "startMs": 34060,
      "endMs": 34440,
      "pageBreakAfter": true
    }
  ],
  "audio": {
    "narration": {
      "src": "video006/shorts-audio/short5-narration.mp3",
      "volume": 1.3646
    },
    "music": {
      "src": "video006/shorts-audio/short5-music.mp3",
      "volume": 0.0589,
      "fadeInSeconds": 0.5,
      "fadeOutSeconds": 1.0,
      "loop": true
    }
  }
};
