import { ExplainerProps } from "../Explainer";

// Shorts del video 007 - "La daga de Tutankamon". Generado por
// projects/007-daga-tutankamon/shorts/_build_shorts.py -- no editar a mano,
// cambiar el script y regenerar. Fuente: guiones aprobados por Victor el 29
// sept 2026 ("10-Redes Sociales/007 - Shorts de la daga de Tutankamon.md",
// boveda Obsidian). Miniserie de 5 partes, tecnica "una pregunta, una
// respuesta" + regla del primer segundo (daga o personas en el fotograma 0).
//
// Banco de planos: SOLO imagenes y motion graphics ya aprobados del video
// largo (public/video007). Motion graphics en videoFit "contain" con zoom fijo.
//
// Audio: narracion -1.0dBFS de pico, musica -22.0dBFS (pistas originales por
// bloque). SFX: cues aislados del largo (assets/sfx), recortados por plano,
// fundidos y RMS con tope -43dBFS (solo reduce). Los motion graphics no llevan
// SFX (CLAUDE.md 35.1).
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
// Short 1 - "VALIA MAS QUE EL ORO" (Parte 1)
// Locucion: 007_DagaTutankamon_Short1_Oro.mp3 (34.45551s, integra, incluye el CTA final).
// Musica: 02-contexto.mp3 desde 0.0s (pista original del largo, sin editar).
// ---------------------------------------------------------------------------
export const short1OroFixture: ExplainerProps = {
  "cuts": [
    {
      "id": "4-open",
      "source": "video007/images/4.png",
      "in_seconds": 0.0,
      "out_seconds": 4.16,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video007/shorts-audio/sfx/processed/short1-sfx-4-open.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "6b",
      "source": "video007/images/6b.png",
      "in_seconds": 4.16,
      "out_seconds": 6.36,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video007/shorts-audio/sfx/processed/short1-sfx-6b.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "6c-edad",
      "source": "video007/video/plano-6c-edad-hierro-retimed.mp4",
      "in_seconds": 6.36,
      "out_seconds": 10.74,
      "source_in_seconds": 1.5,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      }
    },
    {
      "id": "7",
      "source": "video007/images/7.png",
      "in_seconds": 10.74,
      "out_seconds": 13.68,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "drift-up",
      "audioSrc": "video007/shorts-audio/sfx/processed/short1-sfx-7.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "8",
      "source": "video007/images/8.png",
      "in_seconds": 13.68,
      "out_seconds": 20.36,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "pan-left",
      "audioSrc": "video007/shorts-audio/sfx/processed/short1-sfx-8.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "1",
      "source": "video007/images/1.png",
      "in_seconds": 20.36,
      "out_seconds": 22.36,
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
      "audioSrc": "video007/shorts-audio/sfx/processed/short1-sfx-1.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "10d",
      "source": "video007/images/10d.png",
      "in_seconds": 22.36,
      "out_seconds": 26.1,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "pan-right"
    },
    {
      "id": "9",
      "source": "video007/images/9.png",
      "in_seconds": 26.1,
      "out_seconds": 30.18,
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
      "audioSrc": "video007/shorts-audio/sfx/processed/short1-sfx-9.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "11-cta",
      "source": "video007/images/11.png",
      "in_seconds": 30.18,
      "out_seconds": 32.06,
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
      "in_seconds": 32.06,
      "out_seconds": 34.45551,
      "text": "SIGUENOS PARA PARTE 2"
    }
  ],
  "overlays": [
    {
      "type": "monumental_title",
      "in_seconds": 0.0,
      "out_seconds": 3.0,
      "position": "center",
      "text": "VALÍA MÁS\nQUE EL ORO"
    }
  ],
  "watermarkSrc": WATERMARK,
  "brandBackground": true,
  "themeConfig": THEME,
  "captionsPhraseAware": true,
  "captions": [
    {
      "word": "En",
      "startMs": 0,
      "endMs": 200,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 200,
      "endMs": 280,
      "pageBreakAfter": false
    },
    {
      "word": "Egipto",
      "startMs": 280,
      "endMs": 660,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 660,
      "endMs": 800,
      "pageBreakAfter": false
    },
    {
      "word": "Tutankamón,",
      "startMs": 800,
      "endMs": 1420,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 1920,
      "endMs": 2020,
      "pageBreakAfter": false
    },
    {
      "word": "hierro",
      "startMs": 2020,
      "endMs": 2320,
      "pageBreakAfter": false
    },
    {
      "word": "era",
      "startMs": 2320,
      "endMs": 2500,
      "pageBreakAfter": false
    },
    {
      "word": "más",
      "startMs": 2500,
      "endMs": 2700,
      "pageBreakAfter": false
    },
    {
      "word": "valioso",
      "startMs": 2700,
      "endMs": 3040,
      "pageBreakAfter": true
    },
    {
      "word": "que",
      "startMs": 3040,
      "endMs": 3240,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 3240,
      "endMs": 3360,
      "pageBreakAfter": false
    },
    {
      "word": "oro.",
      "startMs": 3360,
      "endMs": 3500,
      "pageBreakAfter": true
    },
    {
      "word": "Allí",
      "startMs": 4160,
      "endMs": 4380,
      "pageBreakAfter": false
    },
    {
      "word": "nadie",
      "startMs": 4380,
      "endMs": 4520,
      "pageBreakAfter": false
    },
    {
      "word": "sabía",
      "startMs": 4520,
      "endMs": 4920,
      "pageBreakAfter": false
    },
    {
      "word": "obtenerlo",
      "startMs": 4920,
      "endMs": 5460,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 5460,
      "endMs": 5600,
      "pageBreakAfter": true
    },
    {
      "word": "mineral,",
      "startMs": 5600,
      "endMs": 5880,
      "pageBreakAfter": false
    },
    {
      "word": "una",
      "startMs": 6360,
      "endMs": 6540,
      "pageBreakAfter": false
    },
    {
      "word": "técnica",
      "startMs": 6540,
      "endMs": 6840,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 6840,
      "endMs": 7180,
      "pageBreakAfter": false
    },
    {
      "word": "no",
      "startMs": 7180,
      "endMs": 7320,
      "pageBreakAfter": true
    },
    {
      "word": "llegaría",
      "startMs": 7320,
      "endMs": 7720,
      "pageBreakAfter": false
    },
    {
      "word": "hasta",
      "startMs": 7720,
      "endMs": 8020,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 8020,
      "endMs": 8180,
      "pageBreakAfter": false
    },
    {
      "word": "siglo",
      "startMs": 8180,
      "endMs": 8360,
      "pageBreakAfter": false
    },
    {
      "word": "VI",
      "startMs": 8360,
      "endMs": 8680,
      "pageBreakAfter": true
    },
    {
      "word": "antes",
      "startMs": 8680,
      "endMs": 9200,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 9200,
      "endMs": 9360,
      "pageBreakAfter": false
    },
    {
      "word": "nuestra",
      "startMs": 9360,
      "endMs": 9540,
      "pageBreakAfter": false
    },
    {
      "word": "era.",
      "startMs": 9540,
      "endMs": 9880,
      "pageBreakAfter": true
    },
    {
      "word": "El",
      "startMs": 10740,
      "endMs": 10940,
      "pageBreakAfter": false
    },
    {
      "word": "poco",
      "startMs": 10940,
      "endMs": 11100,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 11100,
      "endMs": 11300,
      "pageBreakAfter": false
    },
    {
      "word": "circulaba",
      "startMs": 11300,
      "endMs": 11800,
      "pageBreakAfter": false
    },
    {
      "word": "procedía",
      "startMs": 11800,
      "endMs": 12340,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 12340,
      "endMs": 12500,
      "pageBreakAfter": false
    },
    {
      "word": "meteoritos.",
      "startMs": 12500,
      "endMs": 12980,
      "pageBreakAfter": true
    },
    {
      "word": "En",
      "startMs": 13680,
      "endMs": 13800,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 13800,
      "endMs": 13900,
      "pageBreakAfter": false
    },
    {
      "word": "tumba",
      "startMs": 13900,
      "endMs": 14200,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 14200,
      "endMs": 14320,
      "pageBreakAfter": false
    },
    {
      "word": "faraón",
      "startMs": 14320,
      "endMs": 14740,
      "pageBreakAfter": true
    },
    {
      "word": "aparecieron",
      "startMs": 14740,
      "endMs": 15300,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 15300,
      "endMs": 15460,
      "pageBreakAfter": false
    },
    {
      "word": "reposacabezas",
      "startMs": 15460,
      "endMs": 16380,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 16380,
      "endMs": 16600,
      "pageBreakAfter": false
    },
    {
      "word": "unos",
      "startMs": 16600,
      "endMs": 16780,
      "pageBreakAfter": true
    },
    {
      "word": "cinceles",
      "startMs": 16780,
      "endMs": 17220,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 17220,
      "endMs": 17400,
      "pageBreakAfter": false
    },
    {
      "word": "hierro,",
      "startMs": 17400,
      "endMs": 17740,
      "pageBreakAfter": true
    },
    {
      "word": "forjados",
      "startMs": 18100,
      "endMs": 18540,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 18540,
      "endMs": 18760,
      "pageBreakAfter": false
    },
    {
      "word": "frío",
      "startMs": 18760,
      "endMs": 19040,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 19040,
      "endMs": 19180,
      "pageBreakAfter": false
    },
    {
      "word": "muy",
      "startMs": 19180,
      "endMs": 19380,
      "pageBreakAfter": true
    },
    {
      "word": "toscos.",
      "startMs": 19380,
      "endMs": 19780,
      "pageBreakAfter": true
    },
    {
      "word": "Junto",
      "startMs": 20360,
      "endMs": 20680,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 20680,
      "endMs": 20780,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 20780,
      "endMs": 20860,
      "pageBreakAfter": false
    },
    {
      "word": "momia",
      "startMs": 20860,
      "endMs": 21200,
      "pageBreakAfter": false
    },
    {
      "word": "había",
      "startMs": 21200,
      "endMs": 21520,
      "pageBreakAfter": true
    },
    {
      "word": "además",
      "startMs": 21520,
      "endMs": 21920,
      "pageBreakAfter": false
    },
    {
      "word": "una",
      "startMs": 21920,
      "endMs": 22120,
      "pageBreakAfter": false
    },
    {
      "word": "daga",
      "startMs": 22120,
      "endMs": 22360,
      "pageBreakAfter": false
    },
    {
      "word": "con",
      "startMs": 22360,
      "endMs": 22580,
      "pageBreakAfter": false
    },
    {
      "word": "hoja",
      "startMs": 22580,
      "endMs": 22780,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 22780,
      "endMs": 22920,
      "pageBreakAfter": false
    },
    {
      "word": "hierro,",
      "startMs": 22920,
      "endMs": 23280,
      "pageBreakAfter": true
    },
    {
      "word": "empuñadura",
      "startMs": 23760,
      "endMs": 24200,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 24200,
      "endMs": 24440,
      "pageBreakAfter": false
    },
    {
      "word": "oro",
      "startMs": 24440,
      "endMs": 24620,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 24620,
      "endMs": 24960,
      "pageBreakAfter": false
    },
    {
      "word": "pomo",
      "startMs": 24960,
      "endMs": 25260,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 25260,
      "endMs": 25340,
      "pageBreakAfter": false
    },
    {
      "word": "cristal",
      "startMs": 25340,
      "endMs": 25740,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 25740,
      "endMs": 25840,
      "pageBreakAfter": false
    },
    {
      "word": "roca.",
      "startMs": 25840,
      "endMs": 26100,
      "pageBreakAfter": true
    },
    {
      "word": "Ninguna",
      "startMs": 26100,
      "endMs": 27060,
      "pageBreakAfter": false
    },
    {
      "word": "otra",
      "startMs": 27060,
      "endMs": 27260,
      "pageBreakAfter": false
    },
    {
      "word": "pieza",
      "startMs": 27260,
      "endMs": 27600,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 27600,
      "endMs": 27680,
      "pageBreakAfter": false
    },
    {
      "word": "hierro",
      "startMs": 27680,
      "endMs": 28000,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 28000,
      "endMs": 28080,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 28080,
      "endMs": 28180,
      "pageBreakAfter": false
    },
    {
      "word": "tumba",
      "startMs": 28180,
      "endMs": 28520,
      "pageBreakAfter": false
    },
    {
      "word": "está",
      "startMs": 28520,
      "endMs": 28860,
      "pageBreakAfter": false
    },
    {
      "word": "trabajada",
      "startMs": 28860,
      "endMs": 29380,
      "pageBreakAfter": true
    },
    {
      "word": "así.",
      "startMs": 29380,
      "endMs": 29620,
      "pageBreakAfter": true
    },
    {
      "word": "Síguenos",
      "startMs": 30180,
      "endMs": 30600,
      "pageBreakAfter": false
    },
    {
      "word": "para",
      "startMs": 30600,
      "endMs": 30840,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 30840,
      "endMs": 30960,
      "pageBreakAfter": false
    },
    {
      "word": "Parte",
      "startMs": 30960,
      "endMs": 31160,
      "pageBreakAfter": false
    },
    {
      "word": "2:",
      "startMs": 31160,
      "endMs": 31460,
      "pageBreakAfter": true
    },
    {
      "word": "cómo",
      "startMs": 32060,
      "endMs": 32240,
      "pageBreakAfter": false
    },
    {
      "word": "se",
      "startMs": 32240,
      "endMs": 32420,
      "pageBreakAfter": false
    },
    {
      "word": "demostró",
      "startMs": 32420,
      "endMs": 32860,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 32860,
      "endMs": 32980,
      "pageBreakAfter": false
    },
    {
      "word": "dónde",
      "startMs": 32980,
      "endMs": 33140,
      "pageBreakAfter": true
    },
    {
      "word": "salió",
      "startMs": 33140,
      "endMs": 33540,
      "pageBreakAfter": false
    },
    {
      "word": "ese",
      "startMs": 33540,
      "endMs": 33700,
      "pageBreakAfter": false
    },
    {
      "word": "hierro.",
      "startMs": 33700,
      "endMs": 34080,
      "pageBreakAfter": true
    }
  ],
  "audio": {
    "narration": {
      "src": "video007/shorts-audio/short1-narration.mp3",
      "volume": 1.7989
    },
    "music": {
      "src": "video007/shorts-audio/short1-music.mp3",
      "volume": 0.0977,
      "fadeInSeconds": 0.5,
      "fadeOutSeconds": 1.0,
      "loop": true
    }
  }
};


// ---------------------------------------------------------------------------
// Short 2 - "10,8 % DE NIQUEL" (Parte 2)
// Locucion: 007_DagaTutankamon_Short2_Niquel.mp3 (36.179563s, integra, incluye el CTA final).
// Musica: 03-objeto.mp3 desde 5.0s (pista original del largo, sin editar).
// ---------------------------------------------------------------------------
export const short2NiquelFixture: ExplainerProps = {
  "cuts": [
    {
      "id": "13a-open",
      "source": "video007/images/13a.png",
      "in_seconds": 0.0,
      "out_seconds": 3.56,
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
      "audioSrc": "video007/shorts-audio/sfx/processed/short2-sfx-13a-open.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "13a",
      "source": "video007/images/13a.png",
      "in_seconds": 3.56,
      "out_seconds": 9.72,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "transform": {
        "position": {
          "x": 58,
          "y": 45
        },
        "scale": 1.35
      },
      "audioSrc": "video007/shorts-audio/sfx/processed/short2-sfx-13a.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "13b-niquel",
      "source": "video007/video/plano-13-niquel-retimed.mp4",
      "in_seconds": 9.72,
      "out_seconds": 11.28,
      "source_in_seconds": 3.0,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.15
      }
    },
    {
      "id": "13cd-rango",
      "source": "video007/video/plano-13-niquel-retimed.mp4",
      "in_seconds": 11.28,
      "out_seconds": 17.2,
      "source_in_seconds": 8.5,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.1
      }
    },
    {
      "id": "13e",
      "source": "video007/images/13e.png",
      "in_seconds": 17.2,
      "out_seconds": 20.86,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video007/shorts-audio/sfx/processed/short2-sfx-13e.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "13f-widm",
      "source": "video007/video/plano-13f-widmanstatten-retimed.mp4",
      "in_seconds": 20.86,
      "out_seconds": 25.58,
      "source_in_seconds": 1.5,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.15
      }
    },
    {
      "id": "13g-asteroide",
      "source": "video007/video/plano-13f-widmanstatten-retimed.mp4",
      "in_seconds": 25.58,
      "out_seconds": 31.68,
      "source_in_seconds": 10.8,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.15
      },
      "playbackRate": 0.77
    },
    {
      "id": "28a-cta",
      "source": "video007/images/28a.png",
      "in_seconds": 31.68,
      "out_seconds": 33.56,
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5,
      "animation": "zoom-out",
      "backgroundColor": "transparent",
      "audioSrc": "video007/shorts-audio/sfx/processed/short2-sfx-28a-cta.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "cta",
      "source": "",
      "type": "cta_card",
      "in_seconds": 33.56,
      "out_seconds": 36.179563,
      "text": "SIGUENOS PARA PARTE 3"
    }
  ],
  "overlays": [
    {
      "type": "monumental_title",
      "in_seconds": 0.0,
      "out_seconds": 3.0,
      "position": "center",
      "text": "10,8 %\nDE NÍQUEL"
    },
    {
      "type": "rotulo",
      "in_seconds": 3.7600000000000002,
      "out_seconds": 9.520000000000001,
      "position": "top-left",
      "variant": "label",
      "text": "COMELLI ET AL.",
      "subtitle": "2016"
    },
    {
      "type": "rotulo",
      "in_seconds": 17.4,
      "out_seconds": 20.66,
      "position": "top-left",
      "variant": "label",
      "text": "MATSUI ET AL.",
      "subtitle": "2022"
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
      "word": "primera",
      "startMs": 180,
      "endMs": 400,
      "pageBreakAfter": false
    },
    {
      "word": "prueba",
      "startMs": 400,
      "endMs": 700,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 700,
      "endMs": 920,
      "pageBreakAfter": false
    },
    {
      "word": "origen",
      "startMs": 920,
      "endMs": 1260,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 1260,
      "endMs": 1400,
      "pageBreakAfter": false
    },
    {
      "word": "esta",
      "startMs": 1400,
      "endMs": 1600,
      "pageBreakAfter": false
    },
    {
      "word": "hoja",
      "startMs": 1600,
      "endMs": 1920,
      "pageBreakAfter": false
    },
    {
      "word": "está",
      "startMs": 1920,
      "endMs": 2360,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 2360,
      "endMs": 2520,
      "pageBreakAfter": true
    },
    {
      "word": "su",
      "startMs": 2520,
      "endMs": 2620,
      "pageBreakAfter": false
    },
    {
      "word": "níquel.",
      "startMs": 2620,
      "endMs": 2880,
      "pageBreakAfter": true
    },
    {
      "word": "En",
      "startMs": 3560,
      "endMs": 3720,
      "pageBreakAfter": false
    },
    {
      "word": "2016,",
      "startMs": 3720,
      "endMs": 4360,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 4840,
      "endMs": 5000,
      "pageBreakAfter": false
    },
    {
      "word": "equipo",
      "startMs": 5000,
      "endMs": 5220,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 5220,
      "endMs": 5400,
      "pageBreakAfter": false
    },
    {
      "word": "Daniela",
      "startMs": 5400,
      "endMs": 5760,
      "pageBreakAfter": false
    },
    {
      "word": "Comelli",
      "startMs": 5760,
      "endMs": 6080,
      "pageBreakAfter": true
    },
    {
      "word": "la",
      "startMs": 6080,
      "endMs": 6460,
      "pageBreakAfter": false
    },
    {
      "word": "analizó",
      "startMs": 6460,
      "endMs": 6840,
      "pageBreakAfter": false
    },
    {
      "word": "con",
      "startMs": 6840,
      "endMs": 7020,
      "pageBreakAfter": false
    },
    {
      "word": "fluorescencia",
      "startMs": 7020,
      "endMs": 7680,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 7680,
      "endMs": 7820,
      "pageBreakAfter": true
    },
    {
      "word": "rayos",
      "startMs": 7820,
      "endMs": 8120,
      "pageBreakAfter": false
    },
    {
      "word": "X,",
      "startMs": 8120,
      "endMs": 8340,
      "pageBreakAfter": true
    },
    {
      "word": "sin",
      "startMs": 8580,
      "endMs": 8760,
      "pageBreakAfter": false
    },
    {
      "word": "dañarla:",
      "startMs": 8760,
      "endMs": 9160,
      "pageBreakAfter": true
    },
    {
      "word": "un",
      "startMs": 9720,
      "endMs": 9900,
      "pageBreakAfter": false
    },
    {
      "word": "10,8",
      "startMs": 9900,
      "endMs": 10590,
      "pageBreakAfter": false
    },
    {
      "word": "%.",
      "startMs": 10590,
      "endMs": 11280,
      "pageBreakAfter": true
    },
    {
      "word": "El",
      "startMs": 11280,
      "endMs": 11860,
      "pageBreakAfter": false
    },
    {
      "word": "hierro",
      "startMs": 11860,
      "endMs": 12120,
      "pageBreakAfter": false
    },
    {
      "word": "terrestre",
      "startMs": 12120,
      "endMs": 12560,
      "pageBreakAfter": false
    },
    {
      "word": "rara",
      "startMs": 12560,
      "endMs": 12800,
      "pageBreakAfter": false
    },
    {
      "word": "vez",
      "startMs": 12800,
      "endMs": 13020,
      "pageBreakAfter": true
    },
    {
      "word": "pasa",
      "startMs": 13020,
      "endMs": 13240,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 13240,
      "endMs": 13440,
      "pageBreakAfter": false
    },
    {
      "word": "4.",
      "startMs": 13440,
      "endMs": 13660,
      "pageBreakAfter": true
    },
    {
      "word": "Los",
      "startMs": 14320,
      "endMs": 14480,
      "pageBreakAfter": false
    },
    {
      "word": "meteoritos",
      "startMs": 14480,
      "endMs": 14920,
      "pageBreakAfter": false
    },
    {
      "word": "metálicos",
      "startMs": 14920,
      "endMs": 15460,
      "pageBreakAfter": false
    },
    {
      "word": "van",
      "startMs": 15460,
      "endMs": 15680,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 15680,
      "endMs": 15840,
      "pageBreakAfter": true
    },
    {
      "word": "5",
      "startMs": 15840,
      "endMs": 16140,
      "pageBreakAfter": false
    },
    {
      "word": "al",
      "startMs": 16140,
      "endMs": 16260,
      "pageBreakAfter": false
    },
    {
      "word": "30.",
      "startMs": 16260,
      "endMs": 16480,
      "pageBreakAfter": true
    },
    {
      "word": "En",
      "startMs": 17200,
      "endMs": 17400,
      "pageBreakAfter": false
    },
    {
      "word": "2022,",
      "startMs": 17400,
      "endMs": 17960,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 18540,
      "endMs": 18720,
      "pageBreakAfter": false
    },
    {
      "word": "equipo",
      "startMs": 18720,
      "endMs": 18940,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 18940,
      "endMs": 19120,
      "pageBreakAfter": false
    },
    {
      "word": "Takafumi",
      "startMs": 19120,
      "endMs": 19540,
      "pageBreakAfter": false
    },
    {
      "word": "Matsui",
      "startMs": 19540,
      "endMs": 19900,
      "pageBreakAfter": true
    },
    {
      "word": "confirmó",
      "startMs": 19900,
      "endMs": 20440,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 20440,
      "endMs": 20560,
      "pageBreakAfter": false
    },
    {
      "word": "cifra",
      "startMs": 20560,
      "endMs": 20860,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 20860,
      "endMs": 21360,
      "pageBreakAfter": false
    },
    {
      "word": "encontró",
      "startMs": 21360,
      "endMs": 21800,
      "pageBreakAfter": true
    },
    {
      "word": "bajo",
      "startMs": 21800,
      "endMs": 21940,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 21940,
      "endMs": 22100,
      "pageBreakAfter": false
    },
    {
      "word": "superficie",
      "startMs": 22100,
      "endMs": 22700,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 22700,
      "endMs": 22980,
      "pageBreakAfter": false
    },
    {
      "word": "bandeado",
      "startMs": 22980,
      "endMs": 23420,
      "pageBreakAfter": true
    },
    {
      "word": "en",
      "startMs": 23420,
      "endMs": 23600,
      "pageBreakAfter": false
    },
    {
      "word": "diagonal,",
      "startMs": 23600,
      "endMs": 23920,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 24280,
      "endMs": 24460,
      "pageBreakAfter": false
    },
    {
      "word": "patrón",
      "startMs": 24460,
      "endMs": 24800,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 24800,
      "endMs": 24920,
      "pageBreakAfter": false
    },
    {
      "word": "Widmanstätten.",
      "startMs": 24920,
      "endMs": 25580,
      "pageBreakAfter": true
    },
    {
      "word": "Solo",
      "startMs": 25580,
      "endMs": 26380,
      "pageBreakAfter": false
    },
    {
      "word": "se",
      "startMs": 26380,
      "endMs": 26540,
      "pageBreakAfter": false
    },
    {
      "word": "forma",
      "startMs": 26540,
      "endMs": 26780,
      "pageBreakAfter": false
    },
    {
      "word": "cuando",
      "startMs": 26780,
      "endMs": 27060,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 27060,
      "endMs": 27260,
      "pageBreakAfter": true
    },
    {
      "word": "hierro",
      "startMs": 27260,
      "endMs": 27580,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 27580,
      "endMs": 27700,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 27700,
      "endMs": 27800,
      "pageBreakAfter": false
    },
    {
      "word": "níquel",
      "startMs": 27800,
      "endMs": 28080,
      "pageBreakAfter": false
    },
    {
      "word": "se",
      "startMs": 28080,
      "endMs": 28300,
      "pageBreakAfter": true
    },
    {
      "word": "enfrían",
      "startMs": 28300,
      "endMs": 28680,
      "pageBreakAfter": false
    },
    {
      "word": "durante",
      "startMs": 28680,
      "endMs": 28940,
      "pageBreakAfter": false
    },
    {
      "word": "millones",
      "startMs": 28940,
      "endMs": 29320,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 29320,
      "endMs": 29640,
      "pageBreakAfter": false
    },
    {
      "word": "años",
      "startMs": 29640,
      "endMs": 29900,
      "pageBreakAfter": true
    },
    {
      "word": "dentro",
      "startMs": 29900,
      "endMs": 30180,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 30180,
      "endMs": 30440,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 30440,
      "endMs": 30560,
      "pageBreakAfter": false
    },
    {
      "word": "asteroide.",
      "startMs": 30560,
      "endMs": 31040,
      "pageBreakAfter": true
    },
    {
      "word": "Síguenos",
      "startMs": 31680,
      "endMs": 32160,
      "pageBreakAfter": false
    },
    {
      "word": "para",
      "startMs": 32160,
      "endMs": 32400,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 32400,
      "endMs": 32540,
      "pageBreakAfter": false
    },
    {
      "word": "Parte",
      "startMs": 32540,
      "endMs": 32720,
      "pageBreakAfter": false
    },
    {
      "word": "3:",
      "startMs": 32720,
      "endMs": 33040,
      "pageBreakAfter": true
    },
    {
      "word": "cómo",
      "startMs": 33560,
      "endMs": 33740,
      "pageBreakAfter": false
    },
    {
      "word": "se",
      "startMs": 33740,
      "endMs": 33880,
      "pageBreakAfter": false
    },
    {
      "word": "trabaja",
      "startMs": 33880,
      "endMs": 34280,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 34280,
      "endMs": 34380,
      "pageBreakAfter": false
    },
    {
      "word": "metal",
      "startMs": 34380,
      "endMs": 34660,
      "pageBreakAfter": true
    },
    {
      "word": "sin",
      "startMs": 34660,
      "endMs": 34980,
      "pageBreakAfter": false
    },
    {
      "word": "llegar",
      "startMs": 34980,
      "endMs": 35220,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 35220,
      "endMs": 35320,
      "pageBreakAfter": false
    },
    {
      "word": "fundirlo.",
      "startMs": 35320,
      "endMs": 35800,
      "pageBreakAfter": true
    }
  ],
  "audio": {
    "narration": {
      "src": "video007/shorts-audio/short2-narration.mp3",
      "volume": 1.9275
    },
    "music": {
      "src": "video007/shorts-audio/short2-music.mp3",
      "volume": 0.1109,
      "fadeInSeconds": 0.5,
      "fadeOutSeconds": 1.0,
      "loop": true
    }
  }
};


// ---------------------------------------------------------------------------
// Short 3 - "NUNCA SE FUNDIO" (Parte 3)
// Locucion: 007_DagaTutankamon_Short3_Forja.mp3 (36.623673s, integra, incluye el CTA final).
// Musica: 05-consecuencias.mp3 desde 0.0s (pista original del largo, sin editar).
// ---------------------------------------------------------------------------
export const short3ForjaFixture: ExplainerProps = {
  "cuts": [
    {
      "id": "15-open",
      "source": "video007/images/15.png",
      "in_seconds": 0.0,
      "out_seconds": 6.16,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "transform": {
        "position": {
          "x": 55,
          "y": 50
        }
      },
      "audioSrc": "video007/shorts-audio/sfx/processed/short3-sfx-15-open.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "11",
      "source": "video007/images/11.png",
      "in_seconds": 6.16,
      "out_seconds": 9.8,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video007/shorts-audio/sfx/processed/short3-sfx-11.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "2",
      "source": "video007/images/2.png",
      "in_seconds": 9.8,
      "out_seconds": 13.92,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video007/shorts-audio/sfx/processed/short3-sfx-2.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "11-troilita",
      "source": "video007/images/11.png",
      "in_seconds": 13.92,
      "out_seconds": 20.54,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "transform": {
        "position": {
          "x": 55,
          "y": 50
        },
        "scale": 2.0,
        "startScale": 1.6
      }
    },
    {
      "id": "14c-700",
      "source": "video007/video/plano-14c-ventana-forjado-retimed.mp4",
      "in_seconds": 20.54,
      "out_seconds": 23.56,
      "source_in_seconds": 1.5,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.15
      },
      "playbackRate": 0.993
    },
    {
      "id": "13g-950",
      "source": "video007/video/plano-13f-widmanstatten-retimed.mp4",
      "in_seconds": 23.56,
      "out_seconds": 29.72,
      "source_in_seconds": 15.5,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.15
      }
    },
    {
      "id": "14c-margen",
      "source": "video007/video/plano-14c-ventana-forjado-retimed.mp4",
      "in_seconds": 29.72,
      "out_seconds": 32.42,
      "source_in_seconds": 4.5,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.15
      }
    },
    {
      "id": "27-cta",
      "source": "video007/images/27.png",
      "in_seconds": 32.42,
      "out_seconds": 34.22,
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5,
      "animation": "zoom-out",
      "transform": {
        "position": {
          "x": 80,
          "y": 50
        }
      },
      "backgroundColor": "transparent",
      "audioSrc": "video007/shorts-audio/sfx/processed/short3-sfx-27-cta.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "cta",
      "source": "",
      "type": "cta_card",
      "in_seconds": 34.22,
      "out_seconds": 36.623673,
      "text": "SIGUENOS PARA PARTE 4"
    }
  ],
  "overlays": [
    {
      "type": "monumental_title",
      "in_seconds": 0.0,
      "out_seconds": 3.0,
      "position": "center",
      "text": "NUNCA\nSE FUNDIÓ"
    },
    {
      "type": "rotulo",
      "in_seconds": 10.0,
      "out_seconds": 13.72,
      "position": "top-left",
      "variant": "label",
      "text": "HARRY BURTON",
      "subtitle": "1925"
    },
    {
      "type": "rotulo",
      "in_seconds": 14.12,
      "out_seconds": 20.34,
      "position": "top-left",
      "variant": "label",
      "text": "TROILITA (FeS)"
    }
  ],
  "watermarkSrc": WATERMARK,
  "brandBackground": true,
  "themeConfig": THEME,
  "captionsPhraseAware": true,
  "captions": [
    {
      "word": "Esta",
      "startMs": 0,
      "endMs": 260,
      "pageBreakAfter": false
    },
    {
      "word": "hoja",
      "startMs": 260,
      "endMs": 540,
      "pageBreakAfter": false
    },
    {
      "word": "se",
      "startMs": 540,
      "endMs": 700,
      "pageBreakAfter": false
    },
    {
      "word": "forjó",
      "startMs": 700,
      "endMs": 1000,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 1000,
      "endMs": 1120,
      "pageBreakAfter": true
    },
    {
      "word": "caliente,",
      "startMs": 1120,
      "endMs": 1480,
      "pageBreakAfter": false
    },
    {
      "word": "pero",
      "startMs": 1800,
      "endMs": 2000,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 2000,
      "endMs": 2140,
      "pageBreakAfter": false
    },
    {
      "word": "metal",
      "startMs": 2140,
      "endMs": 2340,
      "pageBreakAfter": false
    },
    {
      "word": "nunca",
      "startMs": 2340,
      "endMs": 2920,
      "pageBreakAfter": true
    },
    {
      "word": "llegó",
      "startMs": 2920,
      "endMs": 3300,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 3300,
      "endMs": 3500,
      "pageBreakAfter": false
    },
    {
      "word": "fundirse.",
      "startMs": 3500,
      "endMs": 3860,
      "pageBreakAfter": true
    },
    {
      "word": "Lo",
      "startMs": 4400,
      "endMs": 4640,
      "pageBreakAfter": false
    },
    {
      "word": "delatan",
      "startMs": 4640,
      "endMs": 4920,
      "pageBreakAfter": false
    },
    {
      "word": "dos",
      "startMs": 4920,
      "endMs": 5220,
      "pageBreakAfter": false
    },
    {
      "word": "detalles.",
      "startMs": 5220,
      "endMs": 5560,
      "pageBreakAfter": true
    },
    {
      "word": "Las",
      "startMs": 6160,
      "endMs": 6280,
      "pageBreakAfter": false
    },
    {
      "word": "manchas",
      "startMs": 6280,
      "endMs": 6640,
      "pageBreakAfter": false
    },
    {
      "word": "oscuras",
      "startMs": 6640,
      "endMs": 7040,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 7040,
      "endMs": 7200,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 7200,
      "endMs": 7300,
      "pageBreakAfter": true
    },
    {
      "word": "hoja",
      "startMs": 7300,
      "endMs": 7560,
      "pageBreakAfter": false
    },
    {
      "word": "se",
      "startMs": 7560,
      "endMs": 7740,
      "pageBreakAfter": false
    },
    {
      "word": "tomaron",
      "startMs": 7740,
      "endMs": 8060,
      "pageBreakAfter": false
    },
    {
      "word": "durante",
      "startMs": 8060,
      "endMs": 8360,
      "pageBreakAfter": false
    },
    {
      "word": "décadas",
      "startMs": 8360,
      "endMs": 8760,
      "pageBreakAfter": true
    },
    {
      "word": "por",
      "startMs": 8760,
      "endMs": 9000,
      "pageBreakAfter": false
    },
    {
      "word": "daño",
      "startMs": 9000,
      "endMs": 9220,
      "pageBreakAfter": false
    },
    {
      "word": "moderno,",
      "startMs": 9220,
      "endMs": 9700,
      "pageBreakAfter": true
    },
    {
      "word": "aunque",
      "startMs": 9800,
      "endMs": 9940,
      "pageBreakAfter": false
    },
    {
      "word": "ya",
      "startMs": 9940,
      "endMs": 10140,
      "pageBreakAfter": false
    },
    {
      "word": "salen",
      "startMs": 10140,
      "endMs": 10460,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 10460,
      "endMs": 10560,
      "pageBreakAfter": false
    },
    {
      "word": "las",
      "startMs": 10560,
      "endMs": 10680,
      "pageBreakAfter": true
    },
    {
      "word": "fotos",
      "startMs": 10680,
      "endMs": 10880,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 10880,
      "endMs": 11080,
      "pageBreakAfter": false
    },
    {
      "word": "Harry",
      "startMs": 11080,
      "endMs": 11300,
      "pageBreakAfter": false
    },
    {
      "word": "Burton",
      "startMs": 11300,
      "endMs": 11640,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 11640,
      "endMs": 11880,
      "pageBreakAfter": true
    },
    {
      "word": "1925.",
      "startMs": 11880,
      "endMs": 13040,
      "pageBreakAfter": true
    },
    {
      "word": "Son",
      "startMs": 13920,
      "endMs": 14180,
      "pageBreakAfter": false
    },
    {
      "word": "restos",
      "startMs": 14180,
      "endMs": 14540,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 14540,
      "endMs": 14680,
      "pageBreakAfter": false
    },
    {
      "word": "troilita,",
      "startMs": 14680,
      "endMs": 15100,
      "pageBreakAfter": true
    },
    {
      "word": "un",
      "startMs": 15640,
      "endMs": 15800,
      "pageBreakAfter": false
    },
    {
      "word": "sulfuro",
      "startMs": 15800,
      "endMs": 16160,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 16160,
      "endMs": 16300,
      "pageBreakAfter": false
    },
    {
      "word": "hierro",
      "startMs": 16300,
      "endMs": 16620,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 16620,
      "endMs": 16760,
      "pageBreakAfter": true
    },
    {
      "word": "propio",
      "startMs": 16760,
      "endMs": 17020,
      "pageBreakAfter": false
    },
    {
      "word": "meteorito,",
      "startMs": 17020,
      "endMs": 17640,
      "pageBreakAfter": true
    },
    {
      "word": "y",
      "startMs": 18000,
      "endMs": 18240,
      "pageBreakAfter": false
    },
    {
      "word": "han",
      "startMs": 18240,
      "endMs": 18360,
      "pageBreakAfter": false
    },
    {
      "word": "perdido",
      "startMs": 18360,
      "endMs": 18720,
      "pageBreakAfter": false
    },
    {
      "word": "buena",
      "startMs": 18720,
      "endMs": 18920,
      "pageBreakAfter": false
    },
    {
      "word": "parte",
      "startMs": 18920,
      "endMs": 19240,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 19240,
      "endMs": 19420,
      "pageBreakAfter": false
    },
    {
      "word": "su",
      "startMs": 19420,
      "endMs": 19540,
      "pageBreakAfter": false
    },
    {
      "word": "azufre.",
      "startMs": 19540,
      "endMs": 19880,
      "pageBreakAfter": true
    },
    {
      "word": "Eso",
      "startMs": 20540,
      "endMs": 20760,
      "pageBreakAfter": false
    },
    {
      "word": "solo",
      "startMs": 20760,
      "endMs": 20960,
      "pageBreakAfter": false
    },
    {
      "word": "ocurre",
      "startMs": 20960,
      "endMs": 21380,
      "pageBreakAfter": false
    },
    {
      "word": "por",
      "startMs": 21380,
      "endMs": 21540,
      "pageBreakAfter": false
    },
    {
      "word": "encima",
      "startMs": 21540,
      "endMs": 21840,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 21840,
      "endMs": 22000,
      "pageBreakAfter": false
    },
    {
      "word": "700",
      "startMs": 22000,
      "endMs": 22320,
      "pageBreakAfter": false
    },
    {
      "word": "grados.",
      "startMs": 22320,
      "endMs": 22940,
      "pageBreakAfter": true
    },
    {
      "word": "El",
      "startMs": 23560,
      "endMs": 23820,
      "pageBreakAfter": false
    },
    {
      "word": "patrón",
      "startMs": 23820,
      "endMs": 24160,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 24160,
      "endMs": 24240,
      "pageBreakAfter": false
    },
    {
      "word": "Widmanstätten,",
      "startMs": 24240,
      "endMs": 25000,
      "pageBreakAfter": true
    },
    {
      "word": "en",
      "startMs": 25200,
      "endMs": 25260,
      "pageBreakAfter": false
    },
    {
      "word": "cambio,",
      "startMs": 25260,
      "endMs": 25560,
      "pageBreakAfter": true
    },
    {
      "word": "sigue",
      "startMs": 26020,
      "endMs": 26280,
      "pageBreakAfter": false
    },
    {
      "word": "ahí,",
      "startMs": 26280,
      "endMs": 26580,
      "pageBreakAfter": true
    },
    {
      "word": "y",
      "startMs": 27080,
      "endMs": 27120,
      "pageBreakAfter": false
    },
    {
      "word": "se",
      "startMs": 27120,
      "endMs": 27240,
      "pageBreakAfter": false
    },
    {
      "word": "borra",
      "startMs": 27240,
      "endMs": 27500,
      "pageBreakAfter": false
    },
    {
      "word": "por",
      "startMs": 27500,
      "endMs": 27640,
      "pageBreakAfter": false
    },
    {
      "word": "encima",
      "startMs": 27640,
      "endMs": 27960,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 27960,
      "endMs": 28100,
      "pageBreakAfter": false
    },
    {
      "word": "950.",
      "startMs": 28100,
      "endMs": 28860,
      "pageBreakAfter": true
    },
    {
      "word": "El",
      "startMs": 29720,
      "endMs": 29860,
      "pageBreakAfter": false
    },
    {
      "word": "herrero",
      "startMs": 29860,
      "endMs": 30120,
      "pageBreakAfter": false
    },
    {
      "word": "trabajó",
      "startMs": 30120,
      "endMs": 30580,
      "pageBreakAfter": false
    },
    {
      "word": "siempre",
      "startMs": 30580,
      "endMs": 30780,
      "pageBreakAfter": false
    },
    {
      "word": "dentro",
      "startMs": 30780,
      "endMs": 31140,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 31140,
      "endMs": 31320,
      "pageBreakAfter": false
    },
    {
      "word": "ese",
      "startMs": 31320,
      "endMs": 31460,
      "pageBreakAfter": false
    },
    {
      "word": "margen.",
      "startMs": 31460,
      "endMs": 31840,
      "pageBreakAfter": true
    },
    {
      "word": "Síguenos",
      "startMs": 32420,
      "endMs": 32760,
      "pageBreakAfter": false
    },
    {
      "word": "para",
      "startMs": 32760,
      "endMs": 32960,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 32960,
      "endMs": 33100,
      "pageBreakAfter": false
    },
    {
      "word": "Parte",
      "startMs": 33100,
      "endMs": 33260,
      "pageBreakAfter": false
    },
    {
      "word": "4:",
      "startMs": 33260,
      "endMs": 33560,
      "pageBreakAfter": true
    },
    {
      "word": "la",
      "startMs": 34220,
      "endMs": 34300,
      "pageBreakAfter": false
    },
    {
      "word": "pista",
      "startMs": 34300,
      "endMs": 34520,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 34520,
      "endMs": 34680,
      "pageBreakAfter": false
    },
    {
      "word": "apunta",
      "startMs": 34680,
      "endMs": 34960,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 34960,
      "endMs": 35060,
      "pageBreakAfter": true
    },
    {
      "word": "un",
      "startMs": 35060,
      "endMs": 35140,
      "pageBreakAfter": false
    },
    {
      "word": "taller",
      "startMs": 35140,
      "endMs": 35320,
      "pageBreakAfter": false
    },
    {
      "word": "fuera",
      "startMs": 35320,
      "endMs": 35640,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 35640,
      "endMs": 35820,
      "pageBreakAfter": false
    },
    {
      "word": "Egipto.",
      "startMs": 35820,
      "endMs": 36160,
      "pageBreakAfter": true
    }
  ],
  "audio": {
    "narration": {
      "src": "video007/shorts-audio/short3-narration.mp3",
      "volume": 1.6032
    },
    "music": {
      "src": "video007/shorts-audio/short3-music.mp3",
      "volume": 0.1096,
      "fadeInSeconds": 0.5,
      "fadeOutSeconds": 1.0,
      "loop": true
    }
  }
};


// ---------------------------------------------------------------------------
// Short 4 - "LA HIZO EGIPTO" (Parte 4)
// Locucion: 007_DagaTutankamon_Short4_Mitanni.mp3 (41.613061s, integra, incluye el CTA final).
// Musica: 04-historia.mp3 desde 0.0s (pista original del largo, sin editar).
// ---------------------------------------------------------------------------
export const short4MitanniFixture: ExplainerProps = {
  "cuts": [
    {
      "id": "25-open",
      "source": "video007/images/25.png",
      "in_seconds": 0.0,
      "out_seconds": 3.48,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "transform": {
        "position": {
          "x": 55,
          "y": 50
        }
      },
      "audioSrc": "video007/shorts-audio/sfx/processed/short4-sfx-25-open.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "10d-engastes",
      "source": "video007/images/10d.png",
      "in_seconds": 3.48,
      "out_seconds": 7.2,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "transform": {
        "position": {
          "x": 50,
          "y": 50
        },
        "scale": 1.5
      }
    },
    {
      "id": "18b",
      "source": "video007/images/18b.png",
      "in_seconds": 7.2,
      "out_seconds": 11.1,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video007/shorts-audio/sfx/processed/short4-sfx-18b.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "18c-cal",
      "source": "video007/video/plano-18c-cal-yeso-retimed.mp4",
      "in_seconds": 11.1,
      "out_seconds": 12.48,
      "source_in_seconds": 0.8,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.15
      }
    },
    {
      "id": "18e-ptolemaico",
      "source": "video007/video/plano-18e-ptolemaico-retimed.mp4",
      "in_seconds": 12.48,
      "out_seconds": 16.42,
      "source_in_seconds": 2.5,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      }
    },
    {
      "id": "19",
      "source": "video007/images/19.png",
      "in_seconds": 16.42,
      "out_seconds": 21.66,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "pan-right",
      "audioSrc": "video007/shorts-audio/sfx/processed/short4-sfx-19.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "20b",
      "source": "video007/images/20b.png",
      "in_seconds": 21.66,
      "out_seconds": 27.68,
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
      "audioSrc": "video007/shorts-audio/sfx/processed/short4-sfx-20b.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "29-lista",
      "source": "video007/images/29.png",
      "in_seconds": 27.68,
      "out_seconds": 33.7,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "transform": {
        "position": {
          "x": 30,
          "y": 50
        }
      }
    },
    {
      "id": "21c-correlacion",
      "source": "video007/video/plano-21c-correlacion-retimed.mp4",
      "in_seconds": 33.7,
      "out_seconds": 37.0,
      "source_in_seconds": 2.0,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      }
    },
    {
      "id": "23a-cta",
      "source": "video007/images/23a.png",
      "in_seconds": 37.0,
      "out_seconds": 38.98,
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
      "in_seconds": 38.98,
      "out_seconds": 41.613061,
      "text": "SIGUENOS PARA PARTE 5"
    }
  ],
  "overlays": [
    {
      "type": "monumental_title",
      "in_seconds": 0.0,
      "out_seconds": 3.0,
      "position": "center",
      "text": "¿LA HIZO\nEGIPTO?"
    },
    {
      "type": "video_inset",
      "in_seconds": 16.42,
      "out_seconds": 21.66,
      "source": "video007/video/plano-map19-mapa-mitanni-retimed.mp4",
      "position": "top-right",
      "width": 940
    },
    {
      "type": "rotulo",
      "in_seconds": 21.86,
      "out_seconds": 27.48,
      "position": "top-left",
      "variant": "label",
      "text": "CARTA EA 22",
      "subtitle": "TUSHRATTA → AMENHOTEP III"
    },
    {
      "type": "list_reveal",
      "in_seconds": 27.68,
      "out_seconds": 33.7,
      "position": "left",
      "items": [
        {
          "text": "Daga con hoja de hierro",
          "at_seconds": 1.56
        },
        {
          "text": "Guarda de oro",
          "at_seconds": 3.04
        },
        {
          "text": "Empuñadura con lapislázuli",
          "at_seconds": 3.66
        }
      ]
    }
  ],
  "watermarkSrc": WATERMARK,
  "brandBackground": true,
  "themeConfig": THEME,
  "captionsPhraseAware": true,
  "captions": [
    {
      "word": "Es",
      "startMs": 0,
      "endMs": 180,
      "pageBreakAfter": false
    },
    {
      "word": "posible",
      "startMs": 180,
      "endMs": 500,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 500,
      "endMs": 700,
      "pageBreakAfter": false
    },
    {
      "word": "esta",
      "startMs": 700,
      "endMs": 920,
      "pageBreakAfter": false
    },
    {
      "word": "daga",
      "startMs": 920,
      "endMs": 1120,
      "pageBreakAfter": true
    },
    {
      "word": "llegara",
      "startMs": 1120,
      "endMs": 1460,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 1460,
      "endMs": 1580,
      "pageBreakAfter": false
    },
    {
      "word": "Egipto",
      "startMs": 1580,
      "endMs": 1900,
      "pageBreakAfter": false
    },
    {
      "word": "como",
      "startMs": 1900,
      "endMs": 2080,
      "pageBreakAfter": false
    },
    {
      "word": "regalo",
      "startMs": 2080,
      "endMs": 2440,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 2440,
      "endMs": 2600,
      "pageBreakAfter": false
    },
    {
      "word": "otro",
      "startMs": 2600,
      "endMs": 2780,
      "pageBreakAfter": false
    },
    {
      "word": "rey.",
      "startMs": 2780,
      "endMs": 3100,
      "pageBreakAfter": true
    },
    {
      "word": "La",
      "startMs": 3480,
      "endMs": 3700,
      "pageBreakAfter": false
    },
    {
      "word": "pista",
      "startMs": 3700,
      "endMs": 3920,
      "pageBreakAfter": false
    },
    {
      "word": "está",
      "startMs": 3920,
      "endMs": 4200,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 4200,
      "endMs": 4340,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 4340,
      "endMs": 4440,
      "pageBreakAfter": true
    },
    {
      "word": "adhesivo",
      "startMs": 4440,
      "endMs": 4800,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 4800,
      "endMs": 4940,
      "pageBreakAfter": false
    },
    {
      "word": "sujeta",
      "startMs": 4940,
      "endMs": 5320,
      "pageBreakAfter": false
    },
    {
      "word": "las",
      "startMs": 5320,
      "endMs": 5480,
      "pageBreakAfter": false
    },
    {
      "word": "piedras",
      "startMs": 5480,
      "endMs": 5820,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 5820,
      "endMs": 5960,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 5960,
      "endMs": 6040,
      "pageBreakAfter": false
    },
    {
      "word": "empuñadura.",
      "startMs": 6040,
      "endMs": 6520,
      "pageBreakAfter": true
    },
    {
      "word": "El",
      "startMs": 7200,
      "endMs": 7380,
      "pageBreakAfter": false
    },
    {
      "word": "análisis",
      "startMs": 7380,
      "endMs": 7760,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 7760,
      "endMs": 7920,
      "pageBreakAfter": false
    },
    {
      "word": "2022",
      "startMs": 7920,
      "endMs": 8520,
      "pageBreakAfter": false
    },
    {
      "word": "encontró",
      "startMs": 8520,
      "endMs": 9320,
      "pageBreakAfter": true
    },
    {
      "word": "calcio",
      "startMs": 9320,
      "endMs": 9700,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 9700,
      "endMs": 9860,
      "pageBreakAfter": false
    },
    {
      "word": "nada",
      "startMs": 9860,
      "endMs": 10040,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 10040,
      "endMs": 10180,
      "pageBreakAfter": false
    },
    {
      "word": "azufre:",
      "startMs": 10180,
      "endMs": 10540,
      "pageBreakAfter": true
    },
    {
      "word": "es",
      "startMs": 11100,
      "endMs": 11340,
      "pageBreakAfter": false
    },
    {
      "word": "cal.",
      "startMs": 11340,
      "endMs": 11540,
      "pageBreakAfter": true
    },
    {
      "word": "En",
      "startMs": 12480,
      "endMs": 12800,
      "pageBreakAfter": false
    },
    {
      "word": "Egipto",
      "startMs": 12800,
      "endMs": 13180,
      "pageBreakAfter": false
    },
    {
      "word": "esa",
      "startMs": 13180,
      "endMs": 13420,
      "pageBreakAfter": false
    },
    {
      "word": "técnica",
      "startMs": 13420,
      "endMs": 13720,
      "pageBreakAfter": false
    },
    {
      "word": "no",
      "startMs": 13720,
      "endMs": 13940,
      "pageBreakAfter": true
    },
    {
      "word": "se",
      "startMs": 13940,
      "endMs": 14060,
      "pageBreakAfter": false
    },
    {
      "word": "documenta",
      "startMs": 14060,
      "endMs": 14580,
      "pageBreakAfter": false
    },
    {
      "word": "hasta",
      "startMs": 14580,
      "endMs": 14760,
      "pageBreakAfter": false
    },
    {
      "word": "más",
      "startMs": 14760,
      "endMs": 14980,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 14980,
      "endMs": 15100,
      "pageBreakAfter": true
    },
    {
      "word": "mil",
      "startMs": 15100,
      "endMs": 15220,
      "pageBreakAfter": false
    },
    {
      "word": "años",
      "startMs": 15220,
      "endMs": 15460,
      "pageBreakAfter": false
    },
    {
      "word": "después.",
      "startMs": 15460,
      "endMs": 15740,
      "pageBreakAfter": true
    },
    {
      "word": "En",
      "startMs": 16420,
      "endMs": 16600,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 16600,
      "endMs": 16700,
      "pageBreakAfter": false
    },
    {
      "word": "norte",
      "startMs": 16700,
      "endMs": 16860,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 16860,
      "endMs": 17060,
      "pageBreakAfter": false
    },
    {
      "word": "Siria,",
      "startMs": 17060,
      "endMs": 17380,
      "pageBreakAfter": true
    },
    {
      "word": "donde",
      "startMs": 17460,
      "endMs": 17600,
      "pageBreakAfter": false
    },
    {
      "word": "estaba",
      "startMs": 17600,
      "endMs": 17940,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 17940,
      "endMs": 18140,
      "pageBreakAfter": false
    },
    {
      "word": "reino",
      "startMs": 18140,
      "endMs": 18380,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 18380,
      "endMs": 18520,
      "pageBreakAfter": true
    },
    {
      "word": "Mitanni,",
      "startMs": 18520,
      "endMs": 18860,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 18860,
      "endMs": 19420,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 19420,
      "endMs": 19560,
      "pageBreakAfter": false
    },
    {
      "word": "Anatolia,",
      "startMs": 19560,
      "endMs": 19980,
      "pageBreakAfter": true
    },
    {
      "word": "ya",
      "startMs": 20360,
      "endMs": 20480,
      "pageBreakAfter": false
    },
    {
      "word": "era",
      "startMs": 20480,
      "endMs": 20660,
      "pageBreakAfter": false
    },
    {
      "word": "corriente.",
      "startMs": 20660,
      "endMs": 21080,
      "pageBreakAfter": true
    },
    {
      "word": "En",
      "startMs": 21660,
      "endMs": 21820,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 21820,
      "endMs": 21920,
      "pageBreakAfter": false
    },
    {
      "word": "carta",
      "startMs": 21920,
      "endMs": 22140,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 22140,
      "endMs": 22340,
      "pageBreakAfter": false
    },
    {
      "word": "Amarna",
      "startMs": 22340,
      "endMs": 22660,
      "pageBreakAfter": true
    },
    {
      "word": "EA",
      "startMs": 22660,
      "endMs": 23220,
      "pageBreakAfter": false
    },
    {
      "word": "22,",
      "startMs": 23220,
      "endMs": 23520,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 24220,
      "endMs": 24440,
      "pageBreakAfter": false
    },
    {
      "word": "rey",
      "startMs": 24440,
      "endMs": 24640,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 24640,
      "endMs": 24720,
      "pageBreakAfter": false
    },
    {
      "word": "Mitanni",
      "startMs": 24720,
      "endMs": 25100,
      "pageBreakAfter": false
    },
    {
      "word": "enumera",
      "startMs": 25100,
      "endMs": 25800,
      "pageBreakAfter": true
    },
    {
      "word": "sus",
      "startMs": 25800,
      "endMs": 25980,
      "pageBreakAfter": false
    },
    {
      "word": "regalos",
      "startMs": 25980,
      "endMs": 26380,
      "pageBreakAfter": false
    },
    {
      "word": "para",
      "startMs": 26380,
      "endMs": 26580,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 26580,
      "endMs": 26700,
      "pageBreakAfter": false
    },
    {
      "word": "abuelo",
      "startMs": 26700,
      "endMs": 27000,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 27000,
      "endMs": 27100,
      "pageBreakAfter": false
    },
    {
      "word": "Tutankamón.",
      "startMs": 27100,
      "endMs": 27680,
      "pageBreakAfter": true
    },
    {
      "word": "Entre",
      "startMs": 27680,
      "endMs": 28480,
      "pageBreakAfter": false
    },
    {
      "word": "ellos,",
      "startMs": 28480,
      "endMs": 28800,
      "pageBreakAfter": true
    },
    {
      "word": "una",
      "startMs": 29240,
      "endMs": 29400,
      "pageBreakAfter": false
    },
    {
      "word": "daga",
      "startMs": 29400,
      "endMs": 29600,
      "pageBreakAfter": false
    },
    {
      "word": "con",
      "startMs": 29600,
      "endMs": 29800,
      "pageBreakAfter": false
    },
    {
      "word": "hoja",
      "startMs": 29800,
      "endMs": 30040,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 30040,
      "endMs": 30140,
      "pageBreakAfter": true
    },
    {
      "word": "hierro,",
      "startMs": 30140,
      "endMs": 30500,
      "pageBreakAfter": false
    },
    {
      "word": "guarda",
      "startMs": 30720,
      "endMs": 31060,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 31060,
      "endMs": 31180,
      "pageBreakAfter": false
    },
    {
      "word": "oro",
      "startMs": 31180,
      "endMs": 31340,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 31340,
      "endMs": 31680,
      "pageBreakAfter": true
    },
    {
      "word": "empuñadura",
      "startMs": 31680,
      "endMs": 32220,
      "pageBreakAfter": false
    },
    {
      "word": "con",
      "startMs": 32220,
      "endMs": 32440,
      "pageBreakAfter": false
    },
    {
      "word": "lapislázuli.",
      "startMs": 32440,
      "endMs": 33100,
      "pageBreakAfter": true
    },
    {
      "word": "Que",
      "startMs": 33700,
      "endMs": 33780,
      "pageBreakAfter": false
    },
    {
      "word": "sea",
      "startMs": 33780,
      "endMs": 33980,
      "pageBreakAfter": false
    },
    {
      "word": "exactamente",
      "startMs": 33980,
      "endMs": 34440,
      "pageBreakAfter": false
    },
    {
      "word": "esta",
      "startMs": 34440,
      "endMs": 34800,
      "pageBreakAfter": false
    },
    {
      "word": "daga",
      "startMs": 34800,
      "endMs": 35080,
      "pageBreakAfter": true
    },
    {
      "word": "no",
      "startMs": 35080,
      "endMs": 35460,
      "pageBreakAfter": false
    },
    {
      "word": "se",
      "startMs": 35460,
      "endMs": 35620,
      "pageBreakAfter": false
    },
    {
      "word": "ha",
      "startMs": 35620,
      "endMs": 35700,
      "pageBreakAfter": false
    },
    {
      "word": "podido",
      "startMs": 35700,
      "endMs": 36020,
      "pageBreakAfter": false
    },
    {
      "word": "demostrar.",
      "startMs": 36020,
      "endMs": 36540,
      "pageBreakAfter": true
    },
    {
      "word": "Síguenos",
      "startMs": 37000,
      "endMs": 37440,
      "pageBreakAfter": false
    },
    {
      "word": "para",
      "startMs": 37440,
      "endMs": 37680,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 37680,
      "endMs": 37800,
      "pageBreakAfter": false
    },
    {
      "word": "Parte",
      "startMs": 37800,
      "endMs": 37980,
      "pageBreakAfter": false
    },
    {
      "word": "5:",
      "startMs": 37980,
      "endMs": 38300,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 38980,
      "endMs": 39080,
      "pageBreakAfter": false
    },
    {
      "word": "nombre",
      "startMs": 39080,
      "endMs": 39320,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 39320,
      "endMs": 39540,
      "pageBreakAfter": false
    },
    {
      "word": "dieron",
      "startMs": 39540,
      "endMs": 39860,
      "pageBreakAfter": false
    },
    {
      "word": "los",
      "startMs": 39860,
      "endMs": 40040,
      "pageBreakAfter": true
    },
    {
      "word": "egipcios",
      "startMs": 40040,
      "endMs": 40540,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 40540,
      "endMs": 40700,
      "pageBreakAfter": false
    },
    {
      "word": "este",
      "startMs": 40700,
      "endMs": 40860,
      "pageBreakAfter": false
    },
    {
      "word": "metal.",
      "startMs": 40860,
      "endMs": 41140,
      "pageBreakAfter": true
    }
  ],
  "audio": {
    "narration": {
      "src": "video007/shorts-audio/short4-narration.mp3",
      "volume": 1.9055
    },
    "music": {
      "src": "video007/shorts-audio/short4-music.mp3",
      "volume": 0.1462,
      "fadeInSeconds": 0.5,
      "fadeOutSeconds": 1.0,
      "loop": true
    }
  }
};


// ---------------------------------------------------------------------------
// Short 5 - "HIERRO DEL CIELO" (Parte 5)
// Locucion: 007_DagaTutankamon_Short5_Cielo.mp3 (41.273438s, integra, incluye el CTA final).
// Musica: 06-legado-cta.mp3 desde 5.0s (pista original del largo, sin editar).
// ---------------------------------------------------------------------------
export const short5CieloFixture: ExplainerProps = {
  "cuts": [
    {
      "id": "26b-open",
      "source": "video007/images/26b.png",
      "in_seconds": 0.0,
      "out_seconds": 6.7,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "transform": {
        "position": {
          "x": 55,
          "y": 50
        }
      },
      "audioSrc": "video007/shorts-audio/sfx/processed/short5-sfx-26b-open.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "26cd-gerzeh",
      "source": "video007/video/plano-26-gerzeh-tutankamon-retimed.mp4",
      "in_seconds": 6.7,
      "out_seconds": 12.68,
      "source_in_seconds": 3.0,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      },
      "playbackRate": 0.92
    },
    {
      "id": "23a",
      "source": "video007/images/23a.png",
      "in_seconds": 12.68,
      "out_seconds": 19.68,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "pan-right",
      "transform": {
        "position": {
          "x": 40,
          "y": 50
        }
      },
      "audioSrc": "video007/shorts-audio/sfx/processed/short5-sfx-23a.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "23b",
      "source": "video007/images/23b.png",
      "in_seconds": 19.68,
      "out_seconds": 23.9,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "transform": {
        "position": {
          "x": 94,
          "y": 50
        },
        "scale": 1.04
      },
      "audioSrc": "video007/shorts-audio/sfx/processed/short5-sfx-23b.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "24a",
      "source": "video007/images/24a_fondo.png",
      "in_seconds": 23.9,
      "out_seconds": 31.42,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video007/shorts-audio/sfx/processed/short5-sfx-24a.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "24b-kamil",
      "source": "video007/video/plano-24b-gebel-kamil-retimed.mp4",
      "in_seconds": 31.42,
      "out_seconds": 33.28,
      "source_in_seconds": 1.0,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.1
      }
    },
    {
      "id": "7",
      "source": "video007/images/7.png",
      "in_seconds": 33.28,
      "out_seconds": 36.68,
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
      "audioSrc": "video007/shorts-audio/sfx/processed/short5-sfx-7.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "30-cta",
      "source": "video007/images/30.png",
      "in_seconds": 36.68,
      "out_seconds": 39.24,
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5,
      "animation": "zoom-out",
      "transform": {
        "position": {
          "x": 70,
          "y": 50
        }
      },
      "backgroundColor": "transparent"
    },
    {
      "id": "cta",
      "source": "",
      "type": "cta_card",
      "in_seconds": 39.24,
      "out_seconds": 41.273438,
      "text": "SIGUENOS EN ARTILUGIO"
    }
  ],
  "overlays": [
    {
      "type": "monumental_title",
      "in_seconds": 0.0,
      "out_seconds": 3.0,
      "position": "center",
      "text": "HIERRO\nDEL CIELO"
    },
    {
      "type": "rotulo",
      "in_seconds": 3.2,
      "out_seconds": 6.5,
      "position": "top-left",
      "variant": "label",
      "text": "RECREACIÓN"
    },
    {
      "type": "rotulo",
      "in_seconds": 12.879999999999999,
      "out_seconds": 19.48,
      "position": "top-left",
      "variant": "label",
      "text": "biȝ-n-pt",
      "subtitle": "«HIERRO DEL CIELO»"
    },
    {
      "type": "rotulo",
      "in_seconds": 24.099999999999998,
      "out_seconds": 31.220000000000002,
      "position": "top-left",
      "variant": "label",
      "text": "GEBEL KAMIL",
      "subtitle": "CRÁTER DE 45 M"
    },
    {
      "type": "photo_insert",
      "in_seconds": 23.9,
      "out_seconds": 31.42,
      "source": "video007/images/24a_Meteorito-Gebel-Kamil-60g_CC-BY-3.0.jpg",
      "caption": "Fragmento del meteorito Gebel Kamil",
      "attribution": "Ala'a H. Jawad, CC BY 3.0, Wikimedia Commons",
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
      "word": "Estas",
      "startMs": 0,
      "endMs": 280,
      "pageBreakAfter": false
    },
    {
      "word": "cuentas",
      "startMs": 280,
      "endMs": 640,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 640,
      "endMs": 760,
      "pageBreakAfter": false
    },
    {
      "word": "collar",
      "startMs": 760,
      "endMs": 940,
      "pageBreakAfter": false
    },
    {
      "word": "se",
      "startMs": 940,
      "endMs": 1200,
      "pageBreakAfter": true
    },
    {
      "word": "hicieron",
      "startMs": 1200,
      "endMs": 1540,
      "pageBreakAfter": false
    },
    {
      "word": "con",
      "startMs": 1540,
      "endMs": 1780,
      "pageBreakAfter": false
    },
    {
      "word": "láminas",
      "startMs": 1780,
      "endMs": 2220,
      "pageBreakAfter": false
    },
    {
      "word": "finísimas",
      "startMs": 2220,
      "endMs": 2720,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 2720,
      "endMs": 2880,
      "pageBreakAfter": true
    },
    {
      "word": "hierro",
      "startMs": 2880,
      "endMs": 3160,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 3160,
      "endMs": 3260,
      "pageBreakAfter": false
    },
    {
      "word": "meteorito,",
      "startMs": 3260,
      "endMs": 3780,
      "pageBreakAfter": true
    },
    {
      "word": "martilladas",
      "startMs": 4000,
      "endMs": 4540,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 4540,
      "endMs": 4860,
      "pageBreakAfter": false
    },
    {
      "word": "enrolladas",
      "startMs": 4860,
      "endMs": 5260,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 5260,
      "endMs": 5480,
      "pageBreakAfter": false
    },
    {
      "word": "pequeños",
      "startMs": 5480,
      "endMs": 5840,
      "pageBreakAfter": true
    },
    {
      "word": "tubos.",
      "startMs": 5840,
      "endMs": 6220,
      "pageBreakAfter": true
    },
    {
      "word": "Aparecieron",
      "startMs": 6700,
      "endMs": 7240,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 7240,
      "endMs": 7420,
      "pageBreakAfter": false
    },
    {
      "word": "Gerzeh,",
      "startMs": 7420,
      "endMs": 7760,
      "pageBreakAfter": true
    },
    {
      "word": "al",
      "startMs": 8060,
      "endMs": 8280,
      "pageBreakAfter": false
    },
    {
      "word": "norte",
      "startMs": 8280,
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
      "word": "Egipto,",
      "startMs": 8700,
      "endMs": 9100,
      "pageBreakAfter": true
    },
    {
      "word": "y",
      "startMs": 9500,
      "endMs": 9560,
      "pageBreakAfter": false
    },
    {
      "word": "son",
      "startMs": 9560,
      "endMs": 9720,
      "pageBreakAfter": false
    },
    {
      "word": "casi",
      "startMs": 9720,
      "endMs": 9940,
      "pageBreakAfter": false
    },
    {
      "word": "2.000",
      "startMs": 9940,
      "endMs": 10400,
      "pageBreakAfter": false
    },
    {
      "word": "años",
      "startMs": 10400,
      "endMs": 10720,
      "pageBreakAfter": true
    },
    {
      "word": "anteriores",
      "startMs": 10720,
      "endMs": 11300,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 11300,
      "endMs": 11480,
      "pageBreakAfter": false
    },
    {
      "word": "Tutankamón.",
      "startMs": 11480,
      "endMs": 12060,
      "pageBreakAfter": true
    },
    {
      "word": "Hacia",
      "startMs": 12680,
      "endMs": 12880,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 12880,
      "endMs": 13080,
      "pageBreakAfter": false
    },
    {
      "word": "1300",
      "startMs": 13080,
      "endMs": 13420,
      "pageBreakAfter": false
    },
    {
      "word": "antes",
      "startMs": 13420,
      "endMs": 14080,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 14080,
      "endMs": 14260,
      "pageBreakAfter": true
    },
    {
      "word": "nuestra",
      "startMs": 14260,
      "endMs": 14480,
      "pageBreakAfter": false
    },
    {
      "word": "era,",
      "startMs": 14480,
      "endMs": 14780,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 15220,
      "endMs": 15380,
      "pageBreakAfter": false
    },
    {
      "word": "egipcio",
      "startMs": 15380,
      "endMs": 15740,
      "pageBreakAfter": false
    },
    {
      "word": "empieza",
      "startMs": 15740,
      "endMs": 16060,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 16060,
      "endMs": 16220,
      "pageBreakAfter": false
    },
    {
      "word": "llamar",
      "startMs": 16220,
      "endMs": 16520,
      "pageBreakAfter": true
    },
    {
      "word": "al",
      "startMs": 16520,
      "endMs": 16640,
      "pageBreakAfter": false
    },
    {
      "word": "hierro",
      "startMs": 16640,
      "endMs": 16940,
      "pageBreakAfter": false
    },
    {
      "word": "biȝ-n-pt:",
      "startMs": 16940,
      "endMs": 17660,
      "pageBreakAfter": true
    },
    {
      "word": "hierro",
      "startMs": 18160,
      "endMs": 18560,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 18560,
      "endMs": 18700,
      "pageBreakAfter": false
    },
    {
      "word": "cielo.",
      "startMs": 18700,
      "endMs": 18920,
      "pageBreakAfter": true
    },
    {
      "word": "La",
      "startMs": 19680,
      "endMs": 19820,
      "pageBreakAfter": false
    },
    {
      "word": "palabra",
      "startMs": 19820,
      "endMs": 20080,
      "pageBreakAfter": false
    },
    {
      "word": "acabó",
      "startMs": 20080,
      "endMs": 20480,
      "pageBreakAfter": false
    },
    {
      "word": "sirviendo",
      "startMs": 20480,
      "endMs": 20880,
      "pageBreakAfter": false
    },
    {
      "word": "para",
      "startMs": 20880,
      "endMs": 21120,
      "pageBreakAfter": true
    },
    {
      "word": "cualquier",
      "startMs": 21120,
      "endMs": 21440,
      "pageBreakAfter": false
    },
    {
      "word": "hierro,",
      "startMs": 21440,
      "endMs": 21980,
      "pageBreakAfter": true
    },
    {
      "word": "caído",
      "startMs": 22220,
      "endMs": 22540,
      "pageBreakAfter": false
    },
    {
      "word": "o",
      "startMs": 22540,
      "endMs": 22720,
      "pageBreakAfter": false
    },
    {
      "word": "forjado.",
      "startMs": 22720,
      "endMs": 23160,
      "pageBreakAfter": true
    },
    {
      "word": "En",
      "startMs": 23900,
      "endMs": 24080,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 24080,
      "endMs": 24200,
      "pageBreakAfter": false
    },
    {
      "word": "sur",
      "startMs": 24200,
      "endMs": 24340,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 24340,
      "endMs": 24500,
      "pageBreakAfter": false
    },
    {
      "word": "país,",
      "startMs": 24500,
      "endMs": 24760,
      "pageBreakAfter": true
    },
    {
      "word": "un",
      "startMs": 25260,
      "endMs": 25400,
      "pageBreakAfter": false
    },
    {
      "word": "meteorito",
      "startMs": 25400,
      "endMs": 25880,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 25880,
      "endMs": 25960,
      "pageBreakAfter": false
    },
    {
      "word": "hierro",
      "startMs": 25960,
      "endMs": 26280,
      "pageBreakAfter": false
    },
    {
      "word": "abrió",
      "startMs": 26280,
      "endMs": 26580,
      "pageBreakAfter": true
    },
    {
      "word": "hace",
      "startMs": 26580,
      "endMs": 26760,
      "pageBreakAfter": false
    },
    {
      "word": "menos",
      "startMs": 26760,
      "endMs": 27000,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 27000,
      "endMs": 27200,
      "pageBreakAfter": false
    },
    {
      "word": "5.000",
      "startMs": 27200,
      "endMs": 27620,
      "pageBreakAfter": false
    },
    {
      "word": "años",
      "startMs": 27620,
      "endMs": 27900,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 27900,
      "endMs": 28220,
      "pageBreakAfter": false
    },
    {
      "word": "cráter",
      "startMs": 28220,
      "endMs": 28580,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 28580,
      "endMs": 28700,
      "pageBreakAfter": false
    },
    {
      "word": "Gebel",
      "startMs": 28700,
      "endMs": 28980,
      "pageBreakAfter": false
    },
    {
      "word": "Kamil,",
      "startMs": 28980,
      "endMs": 29400,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 29400,
      "endMs": 29780,
      "pageBreakAfter": false
    },
    {
      "word": "45",
      "startMs": 29780,
      "endMs": 30260,
      "pageBreakAfter": false
    },
    {
      "word": "metros.",
      "startMs": 30260,
      "endMs": 30760,
      "pageBreakAfter": true
    },
    {
      "word": "Nada",
      "startMs": 31420,
      "endMs": 31700,
      "pageBreakAfter": false
    },
    {
      "word": "lo",
      "startMs": 31700,
      "endMs": 31900,
      "pageBreakAfter": false
    },
    {
      "word": "vincula",
      "startMs": 31900,
      "endMs": 32320,
      "pageBreakAfter": false
    },
    {
      "word": "con",
      "startMs": 32320,
      "endMs": 32440,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 32440,
      "endMs": 32580,
      "pageBreakAfter": true
    },
    {
      "word": "daga,",
      "startMs": 32580,
      "endMs": 32820,
      "pageBreakAfter": false
    },
    {
      "word": "pero",
      "startMs": 33280,
      "endMs": 33400,
      "pageBreakAfter": false
    },
    {
      "word": "muestra",
      "startMs": 33400,
      "endMs": 33740,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 33740,
      "endMs": 33920,
      "pageBreakAfter": false
    },
    {
      "word": "esas",
      "startMs": 33920,
      "endMs": 34120,
      "pageBreakAfter": true
    },
    {
      "word": "caídas",
      "startMs": 34120,
      "endMs": 34580,
      "pageBreakAfter": false
    },
    {
      "word": "también",
      "startMs": 34580,
      "endMs": 34860,
      "pageBreakAfter": false
    },
    {
      "word": "ocurrían",
      "startMs": 34860,
      "endMs": 35420,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 35420,
      "endMs": 35520,
      "pageBreakAfter": false
    },
    {
      "word": "Egipto.",
      "startMs": 35520,
      "endMs": 35940,
      "pageBreakAfter": true
    },
    {
      "word": "Escríbenos",
      "startMs": 36680,
      "endMs": 37220,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 37220,
      "endMs": 37360,
      "pageBreakAfter": false
    },
    {
      "word": "comentarios",
      "startMs": 37360,
      "endMs": 37760,
      "pageBreakAfter": false
    },
    {
      "word": "qué",
      "startMs": 37760,
      "endMs": 38120,
      "pageBreakAfter": false
    },
    {
      "word": "otro",
      "startMs": 38120,
      "endMs": 38380,
      "pageBreakAfter": true
    },
    {
      "word": "Artilugio",
      "startMs": 38380,
      "endMs": 38940,
      "pageBreakAfter": false
    },
    {
      "word": "quieres",
      "startMs": 38940,
      "endMs": 39240,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 39240,
      "endMs": 39440,
      "pageBreakAfter": false
    },
    {
      "word": "investiguemos,",
      "startMs": 39440,
      "endMs": 40120,
      "pageBreakAfter": true
    },
    {
      "word": "y",
      "startMs": 40120,
      "endMs": 40440,
      "pageBreakAfter": false
    },
    {
      "word": "síguenos.",
      "startMs": 40440,
      "endMs": 40820,
      "pageBreakAfter": true
    }
  ],
  "audio": {
    "narration": {
      "src": "video007/shorts-audio/short5-narration.mp3",
      "volume": 1.6982
    },
    "music": {
      "src": "video007/shorts-audio/short5-music.mp3",
      "volume": 0.1059,
      "fadeInSeconds": 0.5,
      "fadeOutSeconds": 1.0,
      "loop": true
    }
  }
};
