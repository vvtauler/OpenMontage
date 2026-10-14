import { ExplainerProps } from "../Explainer";

// Shorts del video 009 - "El reloj-elefante de Al-Jazari". Generado por
// projects/009-reloj-elefante/shorts/_build_shorts.py -- no editar a mano,
// cambiar el script y regenerar. Fuente: guiones aprobados por Victor el 14 oct
// 2026 ("10-Redes Sociales/009 - Shorts del reloj-elefante de Al-Jazari.md").
// Miniserie de 6 partes, mismo sistema que el 008: CTA SIN NARRAR, tarjeta de
// marca con el texto del CTA.
//
// Banco de planos: SOLO imagenes y motion graphics ya aprobados del video
// largo (public/video009). Los documentos reales van en composiciones
// verticales propias (*-v.png). Motion graphics en videoFit "contain".
//
// Audio: narracion -1.0dBFS de pico, musica -22.0dBFS (pistas originales por
// bloque). SFX: el cue de cada plano en el largo, recortado, con fundidos y RMS
// con tope -43dBFS (solo reduce) y -5 dB extra (008). Motion graphics sin SFX.
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
// Short 1 - "UN CUENCO CON UN AGUJERO" (Parte 1)
// Locucion: 009_RelojElefante_Short1_Cuenco.mp3 (38.687313s, sin CTA) + tarjeta CTA 3.0s = 41.687313s.
// Musica: 03-objeto.mp3 desde 5.0s (pista original del largo, sin editar).
// ---------------------------------------------------------------------------
export const short1CuencoFixture: ExplainerProps = {
  "cuts": [
    {
      "id": "3-open",
      "source": "video009/images/3.png",
      "in_seconds": 0.0,
      "out_seconds": 7.0,
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
      "audioSrc": "video009/shorts-audio/sfx/processed/short1-sfx-3-open.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "4-cuenco",
      "source": "video009/video/plano-4-cuenco-30-min-retimed.mp4",
      "in_seconds": 7.0,
      "out_seconds": 9.86,
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
      "id": "15-deposito",
      "source": "video009/video/plano-15-deposito-cuenco-retimed.mp4",
      "in_seconds": 9.86,
      "out_seconds": 14.82,
      "source_in_seconds": 6.11,
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
      "id": "16-hunde",
      "source": "video009/video/plano-16-cuenco-se-hunde-retimed.mp4",
      "in_seconds": 14.82,
      "out_seconds": 22.5,
      "source_in_seconds": 1.25,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      }
    },
    {
      "id": "17-escriba",
      "source": "video009/video/plano-17-polea-escriba-retimed.mp4",
      "in_seconds": 22.5,
      "out_seconds": 26.38,
      "source_in_seconds": 4.35,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      }
    },
    {
      "id": "18",
      "source": "video009/images/18.png",
      "in_seconds": 26.38,
      "out_seconds": 30.04,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video009/shorts-audio/sfx/processed/short1-sfx-18.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "19-canal",
      "source": "video009/video/plano-19-canal-de-bolas-retimed.mp4",
      "in_seconds": 30.04,
      "out_seconds": 38.687313,
      "source_in_seconds": 0.0,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      },
      "playbackRate": 0.925
    },
    {
      "id": "cta",
      "source": "",
      "type": "cta_card",
      "in_seconds": 38.687313,
      "out_seconds": 41.687313,
      "text": "Parte 2:\nadónde va\nesa bola\n\nSíguenos",
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
      "text": "UN CUENCO\nCON UN AGUJERO"
    },
    {
      "type": "rotulo",
      "in_seconds": 3.2,
      "out_seconds": 6.8,
      "position": "top-left",
      "variant": "label",
      "text": "RECREACIÓN"
    }
  ],
  "watermarkSrc": WATERMARK,
  "brandBackground": true,
  "themeConfig": THEME,
  "captionsPhraseAware": true,
  "captions": [
    {
      "word": "Todo",
      "startMs": 0,
      "endMs": 220,
      "pageBreakAfter": false
    },
    {
      "word": "lo",
      "startMs": 220,
      "endMs": 400,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 400,
      "endMs": 500,
      "pageBreakAfter": false
    },
    {
      "word": "se",
      "startMs": 500,
      "endMs": 620,
      "pageBreakAfter": false
    },
    {
      "word": "mueve",
      "startMs": 620,
      "endMs": 880,
      "pageBreakAfter": true
    },
    {
      "word": "en",
      "startMs": 880,
      "endMs": 1020,
      "pageBreakAfter": false
    },
    {
      "word": "este",
      "startMs": 1020,
      "endMs": 1220,
      "pageBreakAfter": false
    },
    {
      "word": "elefante",
      "startMs": 1220,
      "endMs": 1600,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 1600,
      "endMs": 1780,
      "pageBreakAfter": false
    },
    {
      "word": "cobre,",
      "startMs": 1780,
      "endMs": 2060,
      "pageBreakAfter": true
    },
    {
      "word": "un",
      "startMs": 2480,
      "endMs": 2660,
      "pageBreakAfter": false
    },
    {
      "word": "reloj",
      "startMs": 2660,
      "endMs": 2940,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 2940,
      "endMs": 3060,
      "pageBreakAfter": false
    },
    {
      "word": "agua",
      "startMs": 3060,
      "endMs": 3260,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 3260,
      "endMs": 3500,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 3500,
      "endMs": 3640,
      "pageBreakAfter": false
    },
    {
      "word": "ingeniero",
      "startMs": 3640,
      "endMs": 4060,
      "pageBreakAfter": false
    },
    {
      "word": "Al-Jazari",
      "startMs": 4060,
      "endMs": 4680,
      "pageBreakAfter": false
    },
    {
      "word": "describió",
      "startMs": 4680,
      "endMs": 5420,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 5420,
      "endMs": 5560,
      "pageBreakAfter": true
    },
    {
      "word": "1206,",
      "startMs": 5560,
      "endMs": 6560,
      "pageBreakAfter": false
    },
    {
      "word": "depende",
      "startMs": 7000,
      "endMs": 7320,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 7320,
      "endMs": 7540,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 7540,
      "endMs": 7700,
      "pageBreakAfter": false
    },
    {
      "word": "cuenco",
      "startMs": 7700,
      "endMs": 8060,
      "pageBreakAfter": true
    },
    {
      "word": "con",
      "startMs": 8060,
      "endMs": 8260,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 8260,
      "endMs": 8380,
      "pageBreakAfter": false
    },
    {
      "word": "agujero",
      "startMs": 8380,
      "endMs": 8740,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 8740,
      "endMs": 8860,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 8860,
      "endMs": 8960,
      "pageBreakAfter": true
    },
    {
      "word": "fondo.",
      "startMs": 8960,
      "endMs": 9180,
      "pageBreakAfter": true
    },
    {
      "word": "El",
      "startMs": 9860,
      "endMs": 9980,
      "pageBreakAfter": false
    },
    {
      "word": "elefante",
      "startMs": 9980,
      "endMs": 10320,
      "pageBreakAfter": false
    },
    {
      "word": "está",
      "startMs": 10320,
      "endMs": 10600,
      "pageBreakAfter": false
    },
    {
      "word": "hueco",
      "startMs": 10600,
      "endMs": 10940,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 10940,
      "endMs": 11180,
      "pageBreakAfter": true
    },
    {
      "word": "guarda",
      "startMs": 11180,
      "endMs": 11500,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 11500,
      "endMs": 11660,
      "pageBreakAfter": false
    },
    {
      "word": "depósito",
      "startMs": 11660,
      "endMs": 12100,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 12100,
      "endMs": 12240,
      "pageBreakAfter": false
    },
    {
      "word": "agua.",
      "startMs": 12240,
      "endMs": 12440,
      "pageBreakAfter": true
    },
    {
      "word": "En",
      "startMs": 12920,
      "endMs": 13080,
      "pageBreakAfter": false
    },
    {
      "word": "él",
      "startMs": 13080,
      "endMs": 13240,
      "pageBreakAfter": false
    },
    {
      "word": "flota",
      "startMs": 13240,
      "endMs": 13680,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 13680,
      "endMs": 13820,
      "pageBreakAfter": false
    },
    {
      "word": "cuenco.",
      "startMs": 13820,
      "endMs": 14140,
      "pageBreakAfter": true
    },
    {
      "word": "El",
      "startMs": 14820,
      "endMs": 14920,
      "pageBreakAfter": false
    },
    {
      "word": "agua",
      "startMs": 14920,
      "endMs": 15140,
      "pageBreakAfter": false
    },
    {
      "word": "entra",
      "startMs": 15140,
      "endMs": 15460,
      "pageBreakAfter": false
    },
    {
      "word": "poco",
      "startMs": 15460,
      "endMs": 15680,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 15680,
      "endMs": 15800,
      "pageBreakAfter": true
    },
    {
      "word": "poco",
      "startMs": 15800,
      "endMs": 15940,
      "pageBreakAfter": false
    },
    {
      "word": "por",
      "startMs": 15940,
      "endMs": 16200,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 16200,
      "endMs": 16300,
      "pageBreakAfter": false
    },
    {
      "word": "orificio",
      "startMs": 16300,
      "endMs": 16780,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 16780,
      "endMs": 16880,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 16880,
      "endMs": 16980,
      "pageBreakAfter": false
    },
    {
      "word": "cuenco",
      "startMs": 16980,
      "endMs": 17300,
      "pageBreakAfter": false
    },
    {
      "word": "se",
      "startMs": 17300,
      "endMs": 17460,
      "pageBreakAfter": false
    },
    {
      "word": "va",
      "startMs": 17460,
      "endMs": 17560,
      "pageBreakAfter": false
    },
    {
      "word": "hundiendo.",
      "startMs": 17560,
      "endMs": 17900,
      "pageBreakAfter": true
    },
    {
      "word": "Con",
      "startMs": 18560,
      "endMs": 18720,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 18720,
      "endMs": 18840,
      "pageBreakAfter": false
    },
    {
      "word": "agujero",
      "startMs": 18840,
      "endMs": 19200,
      "pageBreakAfter": false
    },
    {
      "word": "bien",
      "startMs": 19200,
      "endMs": 19400,
      "pageBreakAfter": false
    },
    {
      "word": "calibrado,",
      "startMs": 19400,
      "endMs": 19940,
      "pageBreakAfter": true
    },
    {
      "word": "tarda",
      "startMs": 20240,
      "endMs": 20460,
      "pageBreakAfter": false
    },
    {
      "word": "media",
      "startMs": 20460,
      "endMs": 20720,
      "pageBreakAfter": false
    },
    {
      "word": "hora",
      "startMs": 20720,
      "endMs": 21020,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 21020,
      "endMs": 21220,
      "pageBreakAfter": false
    },
    {
      "word": "llegar",
      "startMs": 21220,
      "endMs": 21360,
      "pageBreakAfter": true
    },
    {
      "word": "al",
      "startMs": 21360,
      "endMs": 21560,
      "pageBreakAfter": false
    },
    {
      "word": "fondo.",
      "startMs": 21560,
      "endMs": 21820,
      "pageBreakAfter": true
    },
    {
      "word": "Mientras",
      "startMs": 22500,
      "endMs": 22840,
      "pageBreakAfter": false
    },
    {
      "word": "baja,",
      "startMs": 22840,
      "endMs": 23100,
      "pageBreakAfter": true
    },
    {
      "word": "tira",
      "startMs": 23600,
      "endMs": 23680,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 23680,
      "endMs": 23800,
      "pageBreakAfter": false
    },
    {
      "word": "una",
      "startMs": 23800,
      "endMs": 23960,
      "pageBreakAfter": false
    },
    {
      "word": "cuerda",
      "startMs": 23960,
      "endMs": 24300,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 24300,
      "endMs": 24460,
      "pageBreakAfter": true
    },
    {
      "word": "hace",
      "startMs": 24460,
      "endMs": 24600,
      "pageBreakAfter": false
    },
    {
      "word": "girar",
      "startMs": 24600,
      "endMs": 24920,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 24920,
      "endMs": 25000,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 25000,
      "endMs": 25120,
      "pageBreakAfter": false
    },
    {
      "word": "escriba",
      "startMs": 25120,
      "endMs": 25480,
      "pageBreakAfter": true
    },
    {
      "word": "sentado",
      "startMs": 25480,
      "endMs": 25880,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 25880,
      "endMs": 26000,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 26000,
      "endMs": 26080,
      "pageBreakAfter": false
    },
    {
      "word": "torre.",
      "startMs": 26080,
      "endMs": 26380,
      "pageBreakAfter": true
    },
    {
      "word": "Su",
      "startMs": 26380,
      "endMs": 27160,
      "pageBreakAfter": false
    },
    {
      "word": "cálamo",
      "startMs": 27160,
      "endMs": 27520,
      "pageBreakAfter": false
    },
    {
      "word": "señala",
      "startMs": 27520,
      "endMs": 27900,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 27900,
      "endMs": 27980,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 27980,
      "endMs": 28100,
      "pageBreakAfter": true
    },
    {
      "word": "cuadrante",
      "startMs": 28100,
      "endMs": 28500,
      "pageBreakAfter": false
    },
    {
      "word": "los",
      "startMs": 28500,
      "endMs": 28640,
      "pageBreakAfter": false
    },
    {
      "word": "minutos",
      "startMs": 28640,
      "endMs": 28940,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 28940,
      "endMs": 29160,
      "pageBreakAfter": false
    },
    {
      "word": "han",
      "startMs": 29160,
      "endMs": 29280,
      "pageBreakAfter": true
    },
    {
      "word": "pasado.",
      "startMs": 29280,
      "endMs": 29560,
      "pageBreakAfter": true
    },
    {
      "word": "Cuando",
      "startMs": 30040,
      "endMs": 30220,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 30220,
      "endMs": 30380,
      "pageBreakAfter": false
    },
    {
      "word": "cuenco",
      "startMs": 30380,
      "endMs": 30680,
      "pageBreakAfter": false
    },
    {
      "word": "toca",
      "startMs": 30680,
      "endMs": 30860,
      "pageBreakAfter": false
    },
    {
      "word": "fondo,",
      "startMs": 31020,
      "endMs": 31180,
      "pageBreakAfter": true
    },
    {
      "word": "una",
      "startMs": 31620,
      "endMs": 31800,
      "pageBreakAfter": false
    },
    {
      "word": "cadena",
      "startMs": 31800,
      "endMs": 32140,
      "pageBreakAfter": false
    },
    {
      "word": "inclina",
      "startMs": 32140,
      "endMs": 32540,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 32540,
      "endMs": 32700,
      "pageBreakAfter": false
    },
    {
      "word": "canal",
      "startMs": 32700,
      "endMs": 32960,
      "pageBreakAfter": true
    },
    {
      "word": "en",
      "startMs": 32960,
      "endMs": 33080,
      "pageBreakAfter": false
    },
    {
      "word": "lo",
      "startMs": 33080,
      "endMs": 33180,
      "pageBreakAfter": false
    },
    {
      "word": "alto",
      "startMs": 33180,
      "endMs": 33380,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 33380,
      "endMs": 33500,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 33500,
      "endMs": 33600,
      "pageBreakAfter": true
    },
    {
      "word": "torre,",
      "startMs": 33600,
      "endMs": 33960,
      "pageBreakAfter": false
    },
    {
      "word": "donde",
      "startMs": 34160,
      "endMs": 34420,
      "pageBreakAfter": false
    },
    {
      "word": "esperan",
      "startMs": 34420,
      "endMs": 34860,
      "pageBreakAfter": false
    },
    {
      "word": "varias",
      "startMs": 34860,
      "endMs": 35060,
      "pageBreakAfter": false
    },
    {
      "word": "bolas",
      "startMs": 35060,
      "endMs": 35460,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 35460,
      "endMs": 35540,
      "pageBreakAfter": false
    },
    {
      "word": "metal.",
      "startMs": 35540,
      "endMs": 35740,
      "pageBreakAfter": true
    },
    {
      "word": "Sale",
      "startMs": 36380,
      "endMs": 36660,
      "pageBreakAfter": false
    },
    {
      "word": "una",
      "startMs": 36660,
      "endMs": 36920,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 36920,
      "endMs": 37100,
      "pageBreakAfter": false
    },
    {
      "word": "activa",
      "startMs": 37100,
      "endMs": 37460,
      "pageBreakAfter": false
    },
    {
      "word": "todo",
      "startMs": 37460,
      "endMs": 37680,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 37680,
      "endMs": 37860,
      "pageBreakAfter": false
    },
    {
      "word": "mecanismo.",
      "startMs": 37860,
      "endMs": 38300,
      "pageBreakAfter": true
    }
  ],
  "audio": {
    "narration": {
      "src": "video009/shorts-audio/short1-narration.mp3",
      "volume": 2.0184
    },
    "music": {
      "src": "video009/shorts-audio/short1-music.mp3",
      "volume": 0.1023,
      "fadeInSeconds": 0.5,
      "fadeOutSeconds": 1.0,
      "loop": true
    }
  }
};


// ---------------------------------------------------------------------------
// Short 2 - "EL DRAGON LO PONE A CERO" (Parte 2)
// Locucion: 009_RelojElefante_Short2_Dragon.mp3 (38.426122s, sin CTA) + tarjeta CTA 3.0s = 41.426122s.
// Musica: 03-objeto.mp3 desde 60.0s (pista original del largo, sin editar).
// ---------------------------------------------------------------------------
export const short2DragonFixture: ExplainerProps = {
  "cuts": [
    {
      "id": "48-open",
      "source": "video009/images/48.png",
      "in_seconds": 0.0,
      "out_seconds": 8.1,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video009/shorts-audio/sfx/processed/short2-sfx-48-open.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "20-rueda",
      "source": "video009/video/plano-20-rueda-pajaro-retimed.mp4",
      "in_seconds": 8.1,
      "out_seconds": 12.72,
      "source_in_seconds": 1.85,
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
      "id": "21-selector",
      "source": "video009/video/plano-21-selector-halconero-retimed.mp4",
      "in_seconds": 12.72,
      "out_seconds": 19.22,
      "source_in_seconds": 6.17,
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
      "id": "22",
      "source": "video009/images/22.png",
      "in_seconds": 19.22,
      "out_seconds": 24.74,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video009/shorts-audio/sfx/processed/short2-sfx-22.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "23-dragon",
      "source": "video009/video/plano-23-dragon-reinicio-retimed.mp4",
      "in_seconds": 24.74,
      "out_seconds": 29.56,
      "source_in_seconds": 6.15,
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
      "id": "24-cero",
      "source": "video009/video/plano-24-reloj-a-cero-retimed.mp4",
      "in_seconds": 29.56,
      "out_seconds": 32.34,
      "source_in_seconds": 4.29,
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
      "id": "25-mahut",
      "source": "video009/video/plano-25-jarron-mahut-retimed.mp4",
      "in_seconds": 32.34,
      "out_seconds": 35.86,
      "source_in_seconds": 8.18,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      }
    },
    {
      "id": "26",
      "source": "video009/images/26.png",
      "in_seconds": 35.86,
      "out_seconds": 38.426122,
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "transform": {
        "position": {
          "x": 60,
          "y": 50
        }
      },
      "backgroundColor": "transparent",
      "audioSrc": "video009/shorts-audio/sfx/processed/short2-sfx-26.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "cta",
      "source": "",
      "type": "cta_card",
      "in_seconds": 38.426122,
      "out_seconds": 41.426122,
      "text": "Parte 3:\n¿fue el primer robot\nde la historia?\n\nSíguenos",
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
      "text": "EL DRAGÓN\nLO PONE A CERO"
    }
  ],
  "watermarkSrc": WATERMARK,
  "brandBackground": true,
  "themeConfig": THEME,
  "captionsPhraseAware": true,
  "captions": [
    {
      "word": "Cada",
      "startMs": 0,
      "endMs": 220,
      "pageBreakAfter": false
    },
    {
      "word": "media",
      "startMs": 220,
      "endMs": 500,
      "pageBreakAfter": false
    },
    {
      "word": "hora,",
      "startMs": 500,
      "endMs": 780,
      "pageBreakAfter": true
    },
    {
      "word": "una",
      "startMs": 1160,
      "endMs": 1380,
      "pageBreakAfter": false
    },
    {
      "word": "bola",
      "startMs": 1380,
      "endMs": 1540,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 1540,
      "endMs": 1700,
      "pageBreakAfter": false
    },
    {
      "word": "metal",
      "startMs": 1700,
      "endMs": 1900,
      "pageBreakAfter": false
    },
    {
      "word": "baja",
      "startMs": 1900,
      "endMs": 2180,
      "pageBreakAfter": true
    },
    {
      "word": "por",
      "startMs": 2180,
      "endMs": 2460,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 2460,
      "endMs": 2580,
      "pageBreakAfter": false
    },
    {
      "word": "reloj-elefante,",
      "startMs": 2580,
      "endMs": 3280,
      "pageBreakAfter": true
    },
    {
      "word": "una",
      "startMs": 3800,
      "endMs": 4120,
      "pageBreakAfter": false
    },
    {
      "word": "máquina",
      "startMs": 4120,
      "endMs": 4340,
      "pageBreakAfter": false
    },
    {
      "word": "hidráulica",
      "startMs": 4340,
      "endMs": 4940,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 4940,
      "endMs": 5140,
      "pageBreakAfter": false
    },
    {
      "word": "ingeniero",
      "startMs": 5140,
      "endMs": 5620,
      "pageBreakAfter": true
    },
    {
      "word": "Al-Jazari,",
      "startMs": 5620,
      "endMs": 6340,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 6340,
      "endMs": 6660,
      "pageBreakAfter": false
    },
    {
      "word": "hace",
      "startMs": 6660,
      "endMs": 6820,
      "pageBreakAfter": false
    },
    {
      "word": "ocho",
      "startMs": 6820,
      "endMs": 7120,
      "pageBreakAfter": false
    },
    {
      "word": "siglos.",
      "startMs": 7120,
      "endMs": 7400,
      "pageBreakAfter": true
    },
    {
      "word": "Primero",
      "startMs": 8100,
      "endMs": 8560,
      "pageBreakAfter": false
    },
    {
      "word": "golpea",
      "startMs": 8560,
      "endMs": 9020,
      "pageBreakAfter": false
    },
    {
      "word": "una",
      "startMs": 9020,
      "endMs": 9160,
      "pageBreakAfter": false
    },
    {
      "word": "rueda",
      "startMs": 9160,
      "endMs": 9440,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 9440,
      "endMs": 9560,
      "pageBreakAfter": true
    },
    {
      "word": "palas",
      "startMs": 9560,
      "endMs": 9880,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 9880,
      "endMs": 10040,
      "pageBreakAfter": false
    },
    {
      "word": "hace",
      "startMs": 10040,
      "endMs": 10200,
      "pageBreakAfter": false
    },
    {
      "word": "girar",
      "startMs": 10200,
      "endMs": 10500,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 10500,
      "endMs": 10620,
      "pageBreakAfter": true
    },
    {
      "word": "pájaro",
      "startMs": 10620,
      "endMs": 10940,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 10940,
      "endMs": 11060,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 11060,
      "endMs": 11160,
      "pageBreakAfter": false
    },
    {
      "word": "cúpula,",
      "startMs": 11160,
      "endMs": 11500,
      "pageBreakAfter": true
    },
    {
      "word": "que",
      "startMs": 11800,
      "endMs": 11860,
      "pageBreakAfter": false
    },
    {
      "word": "silba.",
      "startMs": 11980,
      "endMs": 12220,
      "pageBreakAfter": true
    },
    {
      "word": "Después,",
      "startMs": 12720,
      "endMs": 13000,
      "pageBreakAfter": false
    },
    {
      "word": "una",
      "startMs": 13540,
      "endMs": 13640,
      "pageBreakAfter": false
    },
    {
      "word": "pieza",
      "startMs": 13640,
      "endMs": 13980,
      "pageBreakAfter": false
    },
    {
      "word": "parecida",
      "startMs": 13980,
      "endMs": 14300,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 14300,
      "endMs": 14520,
      "pageBreakAfter": true
    },
    {
      "word": "una",
      "startMs": 14520,
      "endMs": 14640,
      "pageBreakAfter": false
    },
    {
      "word": "aguja",
      "startMs": 14640,
      "endMs": 15020,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 15020,
      "endMs": 15160,
      "pageBreakAfter": false
    },
    {
      "word": "ferrocarril",
      "startMs": 15160,
      "endMs": 15700,
      "pageBreakAfter": false
    },
    {
      "word": "manda",
      "startMs": 15700,
      "endMs": 16320,
      "pageBreakAfter": true
    },
    {
      "word": "una",
      "startMs": 16320,
      "endMs": 16480,
      "pageBreakAfter": false
    },
    {
      "word": "bola",
      "startMs": 16480,
      "endMs": 16680,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 16680,
      "endMs": 16820,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 16820,
      "endMs": 16860,
      "pageBreakAfter": false
    },
    {
      "word": "izquierda",
      "startMs": 16860,
      "endMs": 17320,
      "pageBreakAfter": true
    },
    {
      "word": "y",
      "startMs": 17320,
      "endMs": 17480,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 17480,
      "endMs": 17580,
      "pageBreakAfter": false
    },
    {
      "word": "siguiente",
      "startMs": 17580,
      "endMs": 17820,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 17820,
      "endMs": 18100,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 18100,
      "endMs": 18160,
      "pageBreakAfter": true
    },
    {
      "word": "derecha.",
      "startMs": 18160,
      "endMs": 18520,
      "pageBreakAfter": true
    },
    {
      "word": "La",
      "startMs": 19220,
      "endMs": 19420,
      "pageBreakAfter": false
    },
    {
      "word": "bola",
      "startMs": 19420,
      "endMs": 19600,
      "pageBreakAfter": false
    },
    {
      "word": "asoma",
      "startMs": 19600,
      "endMs": 19960,
      "pageBreakAfter": false
    },
    {
      "word": "por",
      "startMs": 19960,
      "endMs": 20160,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 20160,
      "endMs": 20280,
      "pageBreakAfter": true
    },
    {
      "word": "pico",
      "startMs": 20280,
      "endMs": 20520,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 20520,
      "endMs": 20640,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 20640,
      "endMs": 20760,
      "pageBreakAfter": false
    },
    {
      "word": "halcón",
      "startMs": 20760,
      "endMs": 21080,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 21080,
      "endMs": 21500,
      "pageBreakAfter": true
    },
    {
      "word": "cae",
      "startMs": 21500,
      "endMs": 21760,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 21760,
      "endMs": 21880,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 21880,
      "endMs": 21980,
      "pageBreakAfter": false
    },
    {
      "word": "boca",
      "startMs": 21980,
      "endMs": 22160,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 22160,
      "endMs": 22320,
      "pageBreakAfter": true
    },
    {
      "word": "un",
      "startMs": 22320,
      "endMs": 22420,
      "pageBreakAfter": false
    },
    {
      "word": "dragón",
      "startMs": 22420,
      "endMs": 22800,
      "pageBreakAfter": false
    },
    {
      "word": "montado",
      "startMs": 22800,
      "endMs": 23460,
      "pageBreakAfter": false
    },
    {
      "word": "sobre",
      "startMs": 23460,
      "endMs": 23720,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 23720,
      "endMs": 23940,
      "pageBreakAfter": true
    },
    {
      "word": "eje.",
      "startMs": 23940,
      "endMs": 24080,
      "pageBreakAfter": true
    },
    {
      "word": "Con",
      "startMs": 24740,
      "endMs": 24980,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 24980,
      "endMs": 25100,
      "pageBreakAfter": false
    },
    {
      "word": "peso,",
      "startMs": 25100,
      "endMs": 25320,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 25860,
      "endMs": 25920,
      "pageBreakAfter": false
    },
    {
      "word": "dragón",
      "startMs": 25920,
      "endMs": 26200,
      "pageBreakAfter": false
    },
    {
      "word": "bascula",
      "startMs": 26200,
      "endMs": 26620,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 26620,
      "endMs": 27060,
      "pageBreakAfter": false
    },
    {
      "word": "tira",
      "startMs": 27060,
      "endMs": 27220,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 27220,
      "endMs": 27320,
      "pageBreakAfter": false
    },
    {
      "word": "una",
      "startMs": 27320,
      "endMs": 27480,
      "pageBreakAfter": false
    },
    {
      "word": "cadena",
      "startMs": 27480,
      "endMs": 27780,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 27780,
      "endMs": 27940,
      "pageBreakAfter": false
    },
    {
      "word": "saca",
      "startMs": 27940,
      "endMs": 28240,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 28240,
      "endMs": 28360,
      "pageBreakAfter": false
    },
    {
      "word": "cuenco",
      "startMs": 28360,
      "endMs": 28700,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 28700,
      "endMs": 28860,
      "pageBreakAfter": false
    },
    {
      "word": "agua.",
      "startMs": 28860,
      "endMs": 29020,
      "pageBreakAfter": true
    },
    {
      "word": "El",
      "startMs": 29560,
      "endMs": 29800,
      "pageBreakAfter": false
    },
    {
      "word": "cuenco",
      "startMs": 29800,
      "endMs": 30120,
      "pageBreakAfter": false
    },
    {
      "word": "se",
      "startMs": 30120,
      "endMs": 30240,
      "pageBreakAfter": false
    },
    {
      "word": "vacía",
      "startMs": 30240,
      "endMs": 30620,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 30620,
      "endMs": 30720,
      "pageBreakAfter": true
    },
    {
      "word": "vuelve",
      "startMs": 30720,
      "endMs": 31000,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 31000,
      "endMs": 31060,
      "pageBreakAfter": false
    },
    {
      "word": "empezar.",
      "startMs": 31060,
      "endMs": 31280,
      "pageBreakAfter": true
    },
    {
      "word": "Abajo,",
      "startMs": 32340,
      "endMs": 32740,
      "pageBreakAfter": false
    },
    {
      "word": "unos",
      "startMs": 32740,
      "endMs": 32980,
      "pageBreakAfter": false
    },
    {
      "word": "tubos",
      "startMs": 32980,
      "endMs": 33340,
      "pageBreakAfter": false
    },
    {
      "word": "ocultos",
      "startMs": 33340,
      "endMs": 33780,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 33780,
      "endMs": 33880,
      "pageBreakAfter": true
    },
    {
      "word": "llevan",
      "startMs": 33880,
      "endMs": 34180,
      "pageBreakAfter": false
    },
    {
      "word": "hasta",
      "startMs": 34180,
      "endMs": 34380,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 34380,
      "endMs": 34500,
      "pageBreakAfter": false
    },
    {
      "word": "conductor",
      "startMs": 34500,
      "endMs": 34860,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 34860,
      "endMs": 35060,
      "pageBreakAfter": true
    },
    {
      "word": "elefante,",
      "startMs": 35060,
      "endMs": 35480,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 35860,
      "endMs": 36040,
      "pageBreakAfter": false
    },
    {
      "word": "golpea",
      "startMs": 36040,
      "endMs": 36440,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 36440,
      "endMs": 36540,
      "pageBreakAfter": false
    },
    {
      "word": "lomo",
      "startMs": 36540,
      "endMs": 36740,
      "pageBreakAfter": true
    },
    {
      "word": "con",
      "startMs": 36740,
      "endMs": 36920,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 36920,
      "endMs": 37040,
      "pageBreakAfter": false
    },
    {
      "word": "martillo",
      "startMs": 37040,
      "endMs": 37480,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 37480,
      "endMs": 37640,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 37640,
      "endMs": 37720,
      "pageBreakAfter": true
    },
    {
      "word": "mazo.",
      "startMs": 37720,
      "endMs": 38040,
      "pageBreakAfter": true
    }
  ],
  "audio": {
    "narration": {
      "src": "video009/shorts-audio/short2-narration.mp3",
      "volume": 1.8621
    },
    "music": {
      "src": "video009/shorts-audio/short2-music.mp3",
      "volume": 0.0841,
      "fadeInSeconds": 0.5,
      "fadeOutSeconds": 1.0,
      "loop": true
    }
  }
};


// ---------------------------------------------------------------------------
// Short 3 - "EL PRIMER ROBOT" (Parte 3)
// Locucion: 009_RelojElefante_Short3_Robot.mp3 (41.9265s, sin CTA) + tarjeta CTA 3.0s = 44.9265s.
// Musica: 05-consecuencias.mp3 desde 0.0s (pista original del largo, sin editar).
// ---------------------------------------------------------------------------
export const short3RobotFixture: ExplainerProps = {
  "cuts": [
    {
      "id": "30-open",
      "source": "video009/images/30.png",
      "in_seconds": 0.0,
      "out_seconds": 9.18,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video009/shorts-audio/sfx/processed/short3-sfx-30-open.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "48-fuera",
      "source": "video009/images/48.png",
      "in_seconds": 9.18,
      "out_seconds": 18.94,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "transform": {
        "position": {
          "x": 50,
          "y": 70
        }
      },
      "audioSrc": "video009/shorts-audio/sfx/processed/short3-sfx-48-fuera.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "49-secuencial",
      "source": "video009/video/plano-49-control-secuencial-retimed.mp4",
      "in_seconds": 18.94,
      "out_seconds": 24.9,
      "source_in_seconds": 4.14,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      }
    },
    {
      "id": "50-retro",
      "source": "video009/video/plano-50-retroalimentacion-retimed.mp4",
      "in_seconds": 24.9,
      "out_seconds": 31.16,
      "source_in_seconds": 4.11,
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
      "id": "51-abierto",
      "source": "video009/video/plano-51-bucle-abierto-retimed.mp4",
      "in_seconds": 31.16,
      "out_seconds": 41.9265,
      "source_in_seconds": 4.67,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      },
      "playbackRate": 1.0
    },
    {
      "id": "cta",
      "source": "",
      "type": "cta_card",
      "in_seconds": 41.9265,
      "out_seconds": 44.9265,
      "text": "Parte 4:\nla máquina de Al-Jazari\nque sí se corregía\nsola\n\nSíguenos",
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
      "text": "¿EL PRIMER\nROBOT?"
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
      "endMs": 260,
      "pageBreakAfter": false
    },
    {
      "word": "internet,",
      "startMs": 260,
      "endMs": 660,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 1160,
      "endMs": 1280,
      "pageBreakAfter": false
    },
    {
      "word": "reloj-elefante,",
      "startMs": 1280,
      "endMs": 2060,
      "pageBreakAfter": true
    },
    {
      "word": "un",
      "startMs": 2520,
      "endMs": 2680,
      "pageBreakAfter": false
    },
    {
      "word": "autómata",
      "startMs": 2680,
      "endMs": 3060,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 3060,
      "endMs": 3260,
      "pageBreakAfter": false
    },
    {
      "word": "agua",
      "startMs": 3260,
      "endMs": 3440,
      "pageBreakAfter": false
    },
    {
      "word": "descrito",
      "startMs": 3440,
      "endMs": 3860,
      "pageBreakAfter": true
    },
    {
      "word": "por",
      "startMs": 3860,
      "endMs": 4140,
      "pageBreakAfter": false
    },
    {
      "word": "Al-Jazari",
      "startMs": 4140,
      "endMs": 4620,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 4620,
      "endMs": 5000,
      "pageBreakAfter": false
    },
    {
      "word": "1206,",
      "startMs": 5000,
      "endMs": 5920,
      "pageBreakAfter": true
    },
    {
      "word": "aparece",
      "startMs": 6440,
      "endMs": 6740,
      "pageBreakAfter": false
    },
    {
      "word": "como",
      "startMs": 6740,
      "endMs": 7100,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 7100,
      "endMs": 7260,
      "pageBreakAfter": false
    },
    {
      "word": "primer",
      "startMs": 7260,
      "endMs": 7540,
      "pageBreakAfter": false
    },
    {
      "word": "robot",
      "startMs": 7540,
      "endMs": 7840,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 7840,
      "endMs": 8020,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 8020,
      "endMs": 8100,
      "pageBreakAfter": false
    },
    {
      "word": "historia.",
      "startMs": 8100,
      "endMs": 8400,
      "pageBreakAfter": true
    },
    {
      "word": "La",
      "startMs": 9180,
      "endMs": 9360,
      "pageBreakAfter": false
    },
    {
      "word": "etiqueta",
      "startMs": 9360,
      "endMs": 9720,
      "pageBreakAfter": false
    },
    {
      "word": "sale",
      "startMs": 9720,
      "endMs": 9980,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 9980,
      "endMs": 10140,
      "pageBreakAfter": false
    },
    {
      "word": "lo",
      "startMs": 10140,
      "endMs": 10240,
      "pageBreakAfter": true
    },
    {
      "word": "que",
      "startMs": 10240,
      "endMs": 10340,
      "pageBreakAfter": false
    },
    {
      "word": "se",
      "startMs": 10340,
      "endMs": 10460,
      "pageBreakAfter": false
    },
    {
      "word": "ve",
      "startMs": 10460,
      "endMs": 10600,
      "pageBreakAfter": false
    },
    {
      "word": "desde",
      "startMs": 10600,
      "endMs": 10720,
      "pageBreakAfter": false
    },
    {
      "word": "fuera:",
      "startMs": 10720,
      "endMs": 11040,
      "pageBreakAfter": true
    },
    {
      "word": "sin",
      "startMs": 11560,
      "endMs": 11760,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 11760,
      "endMs": 11920,
      "pageBreakAfter": false
    },
    {
      "word": "nadie",
      "startMs": 11920,
      "endMs": 12100,
      "pageBreakAfter": false
    },
    {
      "word": "lo",
      "startMs": 12100,
      "endMs": 12280,
      "pageBreakAfter": false
    },
    {
      "word": "toque,",
      "startMs": 12280,
      "endMs": 12560,
      "pageBreakAfter": true
    },
    {
      "word": "hace",
      "startMs": 12980,
      "endMs": 13220,
      "pageBreakAfter": false
    },
    {
      "word": "silbar",
      "startMs": 13220,
      "endMs": 13520,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 13520,
      "endMs": 13680,
      "pageBreakAfter": false
    },
    {
      "word": "pájaro,",
      "startMs": 13680,
      "endMs": 14020,
      "pageBreakAfter": true
    },
    {
      "word": "mueve",
      "startMs": 14580,
      "endMs": 14760,
      "pageBreakAfter": false
    },
    {
      "word": "figuras,",
      "startMs": 14760,
      "endMs": 15140,
      "pageBreakAfter": true
    },
    {
      "word": "golpea",
      "startMs": 15660,
      "endMs": 16060,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 16060,
      "endMs": 16240,
      "pageBreakAfter": false
    },
    {
      "word": "lomo",
      "startMs": 16240,
      "endMs": 16400,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 16400,
      "endMs": 16600,
      "pageBreakAfter": false
    },
    {
      "word": "elefante",
      "startMs": 16600,
      "endMs": 16980,
      "pageBreakAfter": true
    },
    {
      "word": "y",
      "startMs": 16980,
      "endMs": 17440,
      "pageBreakAfter": false
    },
    {
      "word": "vuelve",
      "startMs": 17440,
      "endMs": 17760,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 17760,
      "endMs": 17840,
      "pageBreakAfter": false
    },
    {
      "word": "empezar.",
      "startMs": 17840,
      "endMs": 18120,
      "pageBreakAfter": true
    },
    {
      "word": "En",
      "startMs": 18940,
      "endMs": 19080,
      "pageBreakAfter": false
    },
    {
      "word": "ingeniería,",
      "startMs": 19080,
      "endMs": 19620,
      "pageBreakAfter": true
    },
    {
      "word": "es",
      "startMs": 20020,
      "endMs": 20160,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 20160,
      "endMs": 20260,
      "pageBreakAfter": false
    },
    {
      "word": "sistema",
      "startMs": 20260,
      "endMs": 20540,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 20540,
      "endMs": 20720,
      "pageBreakAfter": false
    },
    {
      "word": "control",
      "startMs": 20720,
      "endMs": 21020,
      "pageBreakAfter": true
    },
    {
      "word": "secuencial:",
      "startMs": 21020,
      "endMs": 21580,
      "pageBreakAfter": true
    },
    {
      "word": "acciones",
      "startMs": 22160,
      "endMs": 22500,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 22500,
      "endMs": 22720,
      "pageBreakAfter": false
    },
    {
      "word": "se",
      "startMs": 22720,
      "endMs": 22840,
      "pageBreakAfter": false
    },
    {
      "word": "disparan",
      "startMs": 22840,
      "endMs": 23260,
      "pageBreakAfter": false
    },
    {
      "word": "siempre",
      "startMs": 23260,
      "endMs": 23560,
      "pageBreakAfter": true
    },
    {
      "word": "en",
      "startMs": 23560,
      "endMs": 23740,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 23740,
      "endMs": 23860,
      "pageBreakAfter": false
    },
    {
      "word": "mismo",
      "startMs": 23860,
      "endMs": 24100,
      "pageBreakAfter": false
    },
    {
      "word": "orden.",
      "startMs": 24100,
      "endMs": 24360,
      "pageBreakAfter": true
    },
    {
      "word": "Un",
      "startMs": 24900,
      "endMs": 25140,
      "pageBreakAfter": false
    },
    {
      "word": "robot,",
      "startMs": 25140,
      "endMs": 25460,
      "pageBreakAfter": true
    },
    {
      "word": "para",
      "startMs": 25760,
      "endMs": 26000,
      "pageBreakAfter": false
    },
    {
      "word": "los",
      "startMs": 26000,
      "endMs": 26160,
      "pageBreakAfter": false
    },
    {
      "word": "ingenieros,",
      "startMs": 26160,
      "endMs": 26740,
      "pageBreakAfter": true
    },
    {
      "word": "mide",
      "startMs": 27160,
      "endMs": 27380,
      "pageBreakAfter": false
    },
    {
      "word": "algo",
      "startMs": 27380,
      "endMs": 27640,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 27640,
      "endMs": 27800,
      "pageBreakAfter": false
    },
    {
      "word": "su",
      "startMs": 27800,
      "endMs": 27920,
      "pageBreakAfter": false
    },
    {
      "word": "entorno",
      "startMs": 27920,
      "endMs": 28300,
      "pageBreakAfter": true
    },
    {
      "word": "y",
      "startMs": 28300,
      "endMs": 28740,
      "pageBreakAfter": false
    },
    {
      "word": "corrige",
      "startMs": 28740,
      "endMs": 29080,
      "pageBreakAfter": false
    },
    {
      "word": "lo",
      "startMs": 29080,
      "endMs": 29240,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 29240,
      "endMs": 29380,
      "pageBreakAfter": false
    },
    {
      "word": "hace",
      "startMs": 29380,
      "endMs": 29580,
      "pageBreakAfter": true
    },
    {
      "word": "a",
      "startMs": 29580,
      "endMs": 29720,
      "pageBreakAfter": false
    },
    {
      "word": "partir",
      "startMs": 29720,
      "endMs": 29940,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 29940,
      "endMs": 30160,
      "pageBreakAfter": false
    },
    {
      "word": "ese",
      "startMs": 30160,
      "endMs": 30320,
      "pageBreakAfter": false
    },
    {
      "word": "dato.",
      "startMs": 30320,
      "endMs": 30560,
      "pageBreakAfter": true
    },
    {
      "word": "El",
      "startMs": 31160,
      "endMs": 31360,
      "pageBreakAfter": false
    },
    {
      "word": "elefante",
      "startMs": 31360,
      "endMs": 31740,
      "pageBreakAfter": false
    },
    {
      "word": "no",
      "startMs": 31740,
      "endMs": 31940,
      "pageBreakAfter": false
    },
    {
      "word": "mide",
      "startMs": 31940,
      "endMs": 32180,
      "pageBreakAfter": false
    },
    {
      "word": "nada.",
      "startMs": 32180,
      "endMs": 32400,
      "pageBreakAfter": true
    },
    {
      "word": "Si",
      "startMs": 33060,
      "endMs": 33180,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 33180,
      "endMs": 33280,
      "pageBreakAfter": false
    },
    {
      "word": "orificio",
      "startMs": 33280,
      "endMs": 33700,
      "pageBreakAfter": false
    },
    {
      "word": "se",
      "startMs": 33700,
      "endMs": 33800,
      "pageBreakAfter": false
    },
    {
      "word": "ensuciaba",
      "startMs": 33800,
      "endMs": 34280,
      "pageBreakAfter": true
    },
    {
      "word": "o",
      "startMs": 34280,
      "endMs": 34520,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 34520,
      "endMs": 34620,
      "pageBreakAfter": false
    },
    {
      "word": "agua",
      "startMs": 34620,
      "endMs": 34800,
      "pageBreakAfter": false
    },
    {
      "word": "se",
      "startMs": 34800,
      "endMs": 34980,
      "pageBreakAfter": false
    },
    {
      "word": "evaporaba,",
      "startMs": 34980,
      "endMs": 35500,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 36020,
      "endMs": 36060,
      "pageBreakAfter": false
    },
    {
      "word": "cuenco",
      "startMs": 36060,
      "endMs": 36380,
      "pageBreakAfter": false
    },
    {
      "word": "tardaba",
      "startMs": 36380,
      "endMs": 36780,
      "pageBreakAfter": false
    },
    {
      "word": "más",
      "startMs": 36780,
      "endMs": 36920,
      "pageBreakAfter": false
    },
    {
      "word": "o",
      "startMs": 36920,
      "endMs": 37060,
      "pageBreakAfter": true
    },
    {
      "word": "menos",
      "startMs": 37060,
      "endMs": 37260,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 37260,
      "endMs": 37440,
      "pageBreakAfter": false
    },
    {
      "word": "hundirse",
      "startMs": 37440,
      "endMs": 37800,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 37800,
      "endMs": 38220,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 38220,
      "endMs": 38320,
      "pageBreakAfter": true
    },
    {
      "word": "reloj",
      "startMs": 38320,
      "endMs": 38680,
      "pageBreakAfter": false
    },
    {
      "word": "no",
      "startMs": 38680,
      "endMs": 38940,
      "pageBreakAfter": false
    },
    {
      "word": "lo",
      "startMs": 38940,
      "endMs": 39060,
      "pageBreakAfter": false
    },
    {
      "word": "notaba.",
      "startMs": 39060,
      "endMs": 39400,
      "pageBreakAfter": true
    },
    {
      "word": "Es",
      "startMs": 40040,
      "endMs": 40180,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 40180,
      "endMs": 40300,
      "pageBreakAfter": false
    },
    {
      "word": "sistema",
      "startMs": 40300,
      "endMs": 40640,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 40640,
      "endMs": 40820,
      "pageBreakAfter": false
    },
    {
      "word": "bucle",
      "startMs": 40820,
      "endMs": 41100,
      "pageBreakAfter": true
    },
    {
      "word": "abierto.",
      "startMs": 41100,
      "endMs": 41420,
      "pageBreakAfter": true
    }
  ],
  "audio": {
    "narration": {
      "src": "video009/shorts-audio/short3-narration.mp3",
      "volume": 2.2387
    },
    "music": {
      "src": "video009/shorts-audio/short3-music.mp3",
      "volume": 0.1202,
      "fadeInSeconds": 0.5,
      "fadeOutSeconds": 1.0,
      "loop": true
    }
  }
};


// ---------------------------------------------------------------------------
// Short 4 - "LA VALVULA DE 1206" (Parte 4)
// Locucion: 009_RelojElefante_Short4_Valvula.mp3 (40.724875s, sin CTA) + tarjeta CTA 3.0s = 43.724875s.
// Musica: 05-consecuencias.mp3 desde 60.0s (pista original del largo, sin editar).
// ---------------------------------------------------------------------------
export const short4ValvulaFixture: ExplainerProps = {
  "cuts": [
    {
      "id": "14-open",
      "source": "video009/images/14.png",
      "in_seconds": 0.0,
      "out_seconds": 11.06,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video009/shorts-audio/sfx/processed/short4-sfx-14-open.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "castillo",
      "source": "video009/images/reloj-castillo-v.png",
      "in_seconds": 11.06,
      "out_seconds": 16.64,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video009/shorts-audio/sfx/processed/short4-sfx-castillo.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "10",
      "source": "video009/images/10.png",
      "in_seconds": 16.64,
      "out_seconds": 21.34,
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
      "audioSrc": "video009/shorts-audio/sfx/processed/short4-sfx-10.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "53-valvula",
      "source": "video009/video/plano-53-valvula-flotador-retimed.mp4",
      "in_seconds": 21.34,
      "out_seconds": 33.1,
      "source_in_seconds": 0.0,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      },
      "playbackRate": 0.989
    },
    {
      "id": "54-cisterna",
      "source": "video009/video/plano-54-nivel-constante-cisterna-retimed.mp4",
      "in_seconds": 33.1,
      "out_seconds": 40.724875,
      "source_in_seconds": 1.84,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      }
    },
    {
      "id": "cta",
      "source": "",
      "type": "cta_card",
      "in_seconds": 40.724875,
      "out_seconds": 43.724875,
      "text": "Parte 5:\nel diente\nque no encajó\nen 2025\n\nSíguenos",
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
      "text": "LA VÁLVULA\nDE 1206"
    },
    {
      "type": "rotulo",
      "in_seconds": 11.26,
      "out_seconds": 16.44,
      "position": "top-left",
      "variant": "label",
      "text": "EL RELOJ DEL CASTILLO"
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
      "endMs": 180,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 180,
      "endMs": 280,
      "pageBreakAfter": false
    },
    {
      "word": "corte",
      "startMs": 280,
      "endMs": 500,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 500,
      "endMs": 680,
      "pageBreakAfter": false
    },
    {
      "word": "Amid,",
      "startMs": 680,
      "endMs": 960,
      "pageBreakAfter": true
    },
    {
      "word": "en",
      "startMs": 1340,
      "endMs": 1440,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 1440,
      "endMs": 1540,
      "pageBreakAfter": false
    },
    {
      "word": "actual",
      "startMs": 1540,
      "endMs": 1780,
      "pageBreakAfter": false
    },
    {
      "word": "sureste",
      "startMs": 1780,
      "endMs": 2200,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 2200,
      "endMs": 2340,
      "pageBreakAfter": true
    },
    {
      "word": "Turquía,",
      "startMs": 2340,
      "endMs": 2760,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 3280,
      "endMs": 3380,
      "pageBreakAfter": false
    },
    {
      "word": "ingeniero",
      "startMs": 3380,
      "endMs": 3800,
      "pageBreakAfter": false
    },
    {
      "word": "Al-Jazari",
      "startMs": 3800,
      "endMs": 4660,
      "pageBreakAfter": false
    },
    {
      "word": "diseñaba",
      "startMs": 4660,
      "endMs": 5420,
      "pageBreakAfter": true
    },
    {
      "word": "relojes",
      "startMs": 5420,
      "endMs": 5860,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 5860,
      "endMs": 6020,
      "pageBreakAfter": false
    },
    {
      "word": "agua.",
      "startMs": 6020,
      "endMs": 6180,
      "pageBreakAfter": true
    },
    {
      "word": "Uno",
      "startMs": 6740,
      "endMs": 6940,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 6940,
      "endMs": 7080,
      "pageBreakAfter": false
    },
    {
      "word": "ellos,",
      "startMs": 7080,
      "endMs": 7340,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 7520,
      "endMs": 7620,
      "pageBreakAfter": false
    },
    {
      "word": "reloj-elefante,",
      "startMs": 7620,
      "endMs": 8280,
      "pageBreakAfter": true
    },
    {
      "word": "no",
      "startMs": 8780,
      "endMs": 8900,
      "pageBreakAfter": false
    },
    {
      "word": "podía",
      "startMs": 8900,
      "endMs": 9200,
      "pageBreakAfter": false
    },
    {
      "word": "corregir",
      "startMs": 9200,
      "endMs": 9600,
      "pageBreakAfter": false
    },
    {
      "word": "sus",
      "startMs": 9600,
      "endMs": 9760,
      "pageBreakAfter": false
    },
    {
      "word": "errores.",
      "startMs": 9760,
      "endMs": 10160,
      "pageBreakAfter": true
    },
    {
      "word": "En",
      "startMs": 11060,
      "endMs": 11300,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 11300,
      "endMs": 11400,
      "pageBreakAfter": false
    },
    {
      "word": "libro",
      "startMs": 11400,
      "endMs": 11600,
      "pageBreakAfter": false
    },
    {
      "word": "donde",
      "startMs": 11600,
      "endMs": 11860,
      "pageBreakAfter": false
    },
    {
      "word": "lo",
      "startMs": 11860,
      "endMs": 12020,
      "pageBreakAfter": true
    },
    {
      "word": "describe",
      "startMs": 12020,
      "endMs": 12340,
      "pageBreakAfter": false
    },
    {
      "word": "hay",
      "startMs": 12340,
      "endMs": 12920,
      "pageBreakAfter": false
    },
    {
      "word": "otra",
      "startMs": 12920,
      "endMs": 13080,
      "pageBreakAfter": false
    },
    {
      "word": "máquina",
      "startMs": 13080,
      "endMs": 13400,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 13400,
      "endMs": 13720,
      "pageBreakAfter": true
    },
    {
      "word": "sí",
      "startMs": 13720,
      "endMs": 13900,
      "pageBreakAfter": false
    },
    {
      "word": "lo",
      "startMs": 13900,
      "endMs": 14060,
      "pageBreakAfter": false
    },
    {
      "word": "hacía:",
      "startMs": 14060,
      "endMs": 14300,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 14900,
      "endMs": 15020,
      "pageBreakAfter": false
    },
    {
      "word": "reloj",
      "startMs": 15020,
      "endMs": 15380,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 15380,
      "endMs": 15560,
      "pageBreakAfter": false
    },
    {
      "word": "castillo.",
      "startMs": 15560,
      "endMs": 16000,
      "pageBreakAfter": true
    },
    {
      "word": "Un",
      "startMs": 16640,
      "endMs": 16800,
      "pageBreakAfter": false
    },
    {
      "word": "reloj",
      "startMs": 16800,
      "endMs": 17080,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 17080,
      "endMs": 17180,
      "pageBreakAfter": false
    },
    {
      "word": "agua",
      "startMs": 17180,
      "endMs": 17360,
      "pageBreakAfter": false
    },
    {
      "word": "mide",
      "startMs": 17360,
      "endMs": 17680,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 17680,
      "endMs": 17800,
      "pageBreakAfter": false
    },
    {
      "word": "tiempo",
      "startMs": 17800,
      "endMs": 18080,
      "pageBreakAfter": false
    },
    {
      "word": "por",
      "startMs": 18080,
      "endMs": 18340,
      "pageBreakAfter": false
    },
    {
      "word": "su",
      "startMs": 18340,
      "endMs": 18500,
      "pageBreakAfter": false
    },
    {
      "word": "goteo,",
      "startMs": 18500,
      "endMs": 18920,
      "pageBreakAfter": true
    },
    {
      "word": "que",
      "startMs": 19160,
      "endMs": 19340,
      "pageBreakAfter": false
    },
    {
      "word": "depende",
      "startMs": 19340,
      "endMs": 19640,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 19640,
      "endMs": 19880,
      "pageBreakAfter": false
    },
    {
      "word": "nivel",
      "startMs": 19880,
      "endMs": 20080,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 20080,
      "endMs": 20280,
      "pageBreakAfter": true
    },
    {
      "word": "depósito.",
      "startMs": 20280,
      "endMs": 20680,
      "pageBreakAfter": true
    },
    {
      "word": "En",
      "startMs": 21340,
      "endMs": 21520,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 21520,
      "endMs": 21600,
      "pageBreakAfter": false
    },
    {
      "word": "reloj",
      "startMs": 21600,
      "endMs": 21860,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 21860,
      "endMs": 22000,
      "pageBreakAfter": false
    },
    {
      "word": "castillo,",
      "startMs": 22000,
      "endMs": 22460,
      "pageBreakAfter": true
    },
    {
      "word": "la",
      "startMs": 22840,
      "endMs": 23000,
      "pageBreakAfter": false
    },
    {
      "word": "entrada",
      "startMs": 23000,
      "endMs": 23240,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 23240,
      "endMs": 23440,
      "pageBreakAfter": false
    },
    {
      "word": "agua",
      "startMs": 23440,
      "endMs": 23640,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 23640,
      "endMs": 23780,
      "pageBreakAfter": true
    },
    {
      "word": "controla",
      "startMs": 23780,
      "endMs": 24200,
      "pageBreakAfter": false
    },
    {
      "word": "una",
      "startMs": 24200,
      "endMs": 24420,
      "pageBreakAfter": false
    },
    {
      "word": "válvula",
      "startMs": 24420,
      "endMs": 24780,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 24780,
      "endMs": 24940,
      "pageBreakAfter": false
    },
    {
      "word": "flotador",
      "startMs": 24940,
      "endMs": 25360,
      "pageBreakAfter": true
    },
    {
      "word": "con",
      "startMs": 25360,
      "endMs": 25560,
      "pageBreakAfter": false
    },
    {
      "word": "forma",
      "startMs": 25560,
      "endMs": 25880,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 25880,
      "endMs": 26040,
      "pageBreakAfter": false
    },
    {
      "word": "cono.",
      "startMs": 26040,
      "endMs": 26240,
      "pageBreakAfter": true
    },
    {
      "word": "Si",
      "startMs": 26740,
      "endMs": 26980,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 26980,
      "endMs": 27100,
      "pageBreakAfter": false
    },
    {
      "word": "nivel",
      "startMs": 27100,
      "endMs": 27280,
      "pageBreakAfter": false
    },
    {
      "word": "baja,",
      "startMs": 27280,
      "endMs": 27560,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 27960,
      "endMs": 28040,
      "pageBreakAfter": false
    },
    {
      "word": "flotador",
      "startMs": 28040,
      "endMs": 28480,
      "pageBreakAfter": false
    },
    {
      "word": "baja",
      "startMs": 28480,
      "endMs": 28740,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 28740,
      "endMs": 29080,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 29080,
      "endMs": 29200,
      "pageBreakAfter": true
    },
    {
      "word": "válvula",
      "startMs": 29200,
      "endMs": 29540,
      "pageBreakAfter": false
    },
    {
      "word": "se",
      "startMs": 29540,
      "endMs": 29740,
      "pageBreakAfter": false
    },
    {
      "word": "abre.",
      "startMs": 29740,
      "endMs": 29920,
      "pageBreakAfter": true
    },
    {
      "word": "Si",
      "startMs": 30620,
      "endMs": 30740,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 30740,
      "endMs": 30840,
      "pageBreakAfter": false
    },
    {
      "word": "nivel",
      "startMs": 30840,
      "endMs": 31020,
      "pageBreakAfter": false
    },
    {
      "word": "sube,",
      "startMs": 31020,
      "endMs": 31380,
      "pageBreakAfter": true
    },
    {
      "word": "la",
      "startMs": 31660,
      "endMs": 31780,
      "pageBreakAfter": false
    },
    {
      "word": "válvula",
      "startMs": 31780,
      "endMs": 32140,
      "pageBreakAfter": false
    },
    {
      "word": "se",
      "startMs": 32140,
      "endMs": 32300,
      "pageBreakAfter": false
    },
    {
      "word": "cierra.",
      "startMs": 32300,
      "endMs": 32600,
      "pageBreakAfter": true
    },
    {
      "word": "Así",
      "startMs": 33100,
      "endMs": 33320,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 33320,
      "endMs": 33540,
      "pageBreakAfter": false
    },
    {
      "word": "nivel",
      "startMs": 33540,
      "endMs": 33740,
      "pageBreakAfter": false
    },
    {
      "word": "se",
      "startMs": 33740,
      "endMs": 33920,
      "pageBreakAfter": false
    },
    {
      "word": "mantiene",
      "startMs": 33920,
      "endMs": 34280,
      "pageBreakAfter": true
    },
    {
      "word": "constante,",
      "startMs": 34280,
      "endMs": 34660,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 34660,
      "endMs": 35280,
      "pageBreakAfter": false
    },
    {
      "word": "con",
      "startMs": 35340,
      "endMs": 35440,
      "pageBreakAfter": false
    },
    {
      "word": "él,",
      "startMs": 35440,
      "endMs": 35600,
      "pageBreakAfter": true
    },
    {
      "word": "la",
      "startMs": 36000,
      "endMs": 36080,
      "pageBreakAfter": false
    },
    {
      "word": "velocidad",
      "startMs": 36080,
      "endMs": 36440,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 36440,
      "endMs": 36660,
      "pageBreakAfter": false
    },
    {
      "word": "goteo.",
      "startMs": 36660,
      "endMs": 37040,
      "pageBreakAfter": true
    },
    {
      "word": "Es",
      "startMs": 37560,
      "endMs": 37800,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 37800,
      "endMs": 37920,
      "pageBreakAfter": false
    },
    {
      "word": "mismo",
      "startMs": 37920,
      "endMs": 38120,
      "pageBreakAfter": false
    },
    {
      "word": "principio",
      "startMs": 38120,
      "endMs": 38500,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 38500,
      "endMs": 38800,
      "pageBreakAfter": true
    },
    {
      "word": "usa",
      "startMs": 38800,
      "endMs": 39020,
      "pageBreakAfter": false
    },
    {
      "word": "hoy",
      "startMs": 39020,
      "endMs": 39220,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 39220,
      "endMs": 39340,
      "pageBreakAfter": false
    },
    {
      "word": "cisterna",
      "startMs": 39340,
      "endMs": 39820,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 39820,
      "endMs": 39940,
      "pageBreakAfter": true
    },
    {
      "word": "un",
      "startMs": 39940,
      "endMs": 40040,
      "pageBreakAfter": false
    },
    {
      "word": "váter.",
      "startMs": 40040,
      "endMs": 40280,
      "pageBreakAfter": true
    }
  ],
  "audio": {
    "narration": {
      "src": "video009/shorts-audio/short4-narration.mp3",
      "volume": 2.2646
    },
    "music": {
      "src": "video009/shorts-audio/short4-music.mp3",
      "volume": 0.1189,
      "fadeInSeconds": 0.5,
      "fadeOutSeconds": 1.0,
      "loop": true
    }
  }
};


// ---------------------------------------------------------------------------
// Short 5 - "UN DIENTE QUE NO ENCAJA" (Parte 5)
// Locucion: 009_RelojElefante_Short5_Diente.mp3 (40.80325s, sin CTA) + tarjeta CTA 3.0s = 43.80325s.
// Musica: 06-legado-cta.mp3 desde 0.0s (pista original del largo, sin editar).
// ---------------------------------------------------------------------------
export const short5DienteFixture: ExplainerProps = {
  "cuts": [
    {
      "id": "dubai-open",
      "source": "video009/images/replica-dubai-v.jpg",
      "in_seconds": 0.0,
      "out_seconds": 9.94,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in"
    },
    {
      "id": "59",
      "source": "video009/images/59.png",
      "in_seconds": 9.94,
      "out_seconds": 14.62,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video009/shorts-audio/sfx/processed/short5-sfx-59.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "60",
      "source": "video009/images/60.png",
      "in_seconds": 14.62,
      "out_seconds": 19.18,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video009/shorts-audio/sfx/processed/short5-sfx-60.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "61-esperado",
      "source": "video009/video/plano-61-anillo-esperado-retimed.mp4",
      "in_seconds": 19.18,
      "out_seconds": 26.76,
      "source_in_seconds": 2.95,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      }
    },
    {
      "id": "62-fallo",
      "source": "video009/video/plano-62-anillo-fallo-retimed.mp4",
      "in_seconds": 26.76,
      "out_seconds": 31.4,
      "source_in_seconds": 2.89,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      }
    },
    {
      "id": "63-causas",
      "source": "video009/video/plano-63-dos-causas-retimed.mp4",
      "in_seconds": 31.4,
      "out_seconds": 35.82,
      "source_in_seconds": 0.85,
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
      "id": "65-copias",
      "source": "video009/video/plano-65-dos-copias-cierre-retimed.mp4",
      "in_seconds": 35.82,
      "out_seconds": 40.80325,
      "source_in_seconds": 4.42,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0
      },
      "playbackRate": 0.999
    },
    {
      "id": "cta",
      "source": "",
      "type": "cta_card",
      "in_seconds": 40.80325,
      "out_seconds": 43.80325,
      "text": "Parte 6, la última:\nlos copistas\nque pintaron el reloj\n\nSíguenos",
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
      "text": "UN DIENTE\nQUE NO ENCAJA"
    },
    {
      "type": "rotulo",
      "in_seconds": 3.2,
      "out_seconds": 9.74,
      "position": "top-left",
      "variant": "label",
      "text": "RÉPLICA MODERNA · DUBÁI",
      "subtitle": "FOTO: JONATHAN BOWEN, CC BY-SA 3.0"
    },
    {
      "type": "rotulo",
      "in_seconds": 10.139999999999999,
      "out_seconds": 14.42,
      "position": "top-left",
      "variant": "label",
      "text": "AVI GOLAN",
      "subtitle": "ALJAZARIBOOK.COM (2025)"
    }
  ],
  "watermarkSrc": WATERMARK,
  "brandBackground": true,
  "themeConfig": THEME,
  "captionsPhraseAware": true,
  "captions": [
    {
      "word": "Al-Jazari",
      "startMs": 0,
      "endMs": 620,
      "pageBreakAfter": false
    },
    {
      "word": "describió",
      "startMs": 620,
      "endMs": 1320,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 1320,
      "endMs": 1460,
      "pageBreakAfter": false
    },
    {
      "word": "reloj-elefante,",
      "startMs": 1460,
      "endMs": 2200,
      "pageBreakAfter": true
    },
    {
      "word": "movido",
      "startMs": 2200,
      "endMs": 2760,
      "pageBreakAfter": false
    },
    {
      "word": "por",
      "startMs": 2760,
      "endMs": 2980,
      "pageBreakAfter": false
    },
    {
      "word": "agua",
      "startMs": 2980,
      "endMs": 3160,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 3160,
      "endMs": 3380,
      "pageBreakAfter": false
    },
    {
      "word": "hecho",
      "startMs": 3380,
      "endMs": 3560,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 3560,
      "endMs": 3660,
      "pageBreakAfter": false
    },
    {
      "word": "cobre,",
      "startMs": 3660,
      "endMs": 3980,
      "pageBreakAfter": true
    },
    {
      "word": "en",
      "startMs": 3980,
      "endMs": 4460,
      "pageBreakAfter": false
    },
    {
      "word": "1206.",
      "startMs": 4460,
      "endMs": 5480,
      "pageBreakAfter": true
    },
    {
      "word": "El",
      "startMs": 6180,
      "endMs": 6380,
      "pageBreakAfter": false
    },
    {
      "word": "ingeniero",
      "startMs": 6380,
      "endMs": 6840,
      "pageBreakAfter": false
    },
    {
      "word": "Avi",
      "startMs": 6840,
      "endMs": 7120,
      "pageBreakAfter": false
    },
    {
      "word": "Golan",
      "startMs": 7120,
      "endMs": 7400,
      "pageBreakAfter": false
    },
    {
      "word": "se",
      "startMs": 7400,
      "endMs": 7920,
      "pageBreakAfter": true
    },
    {
      "word": "propuso",
      "startMs": 7920,
      "endMs": 8260,
      "pageBreakAfter": false
    },
    {
      "word": "reconstruirlo",
      "startMs": 8260,
      "endMs": 9040,
      "pageBreakAfter": false
    },
    {
      "word": "siguiendo",
      "startMs": 9040,
      "endMs": 9500,
      "pageBreakAfter": false
    },
    {
      "word": "ese",
      "startMs": 9500,
      "endMs": 9680,
      "pageBreakAfter": false
    },
    {
      "word": "libro",
      "startMs": 9680,
      "endMs": 9940,
      "pageBreakAfter": true
    },
    {
      "word": "lo",
      "startMs": 9940,
      "endMs": 10220,
      "pageBreakAfter": false
    },
    {
      "word": "más",
      "startMs": 10220,
      "endMs": 10400,
      "pageBreakAfter": false
    },
    {
      "word": "al",
      "startMs": 10400,
      "endMs": 10540,
      "pageBreakAfter": false
    },
    {
      "word": "pie",
      "startMs": 10540,
      "endMs": 10700,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 10700,
      "endMs": 10820,
      "pageBreakAfter": true
    },
    {
      "word": "la",
      "startMs": 10820,
      "endMs": 10900,
      "pageBreakAfter": false
    },
    {
      "word": "letra",
      "startMs": 10900,
      "endMs": 11140,
      "pageBreakAfter": false
    },
    {
      "word": "posible,",
      "startMs": 11140,
      "endMs": 11520,
      "pageBreakAfter": true
    },
    {
      "word": "con",
      "startMs": 11860,
      "endMs": 12120,
      "pageBreakAfter": false
    },
    {
      "word": "modelos",
      "startMs": 12120,
      "endMs": 12480,
      "pageBreakAfter": false
    },
    {
      "word": "digitales",
      "startMs": 12480,
      "endMs": 13160,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 13160,
      "endMs": 13340,
      "pageBreakAfter": false
    },
    {
      "word": "piezas",
      "startMs": 13340,
      "endMs": 13680,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 13680,
      "endMs": 13820,
      "pageBreakAfter": false
    },
    {
      "word": "Lego.",
      "startMs": 13820,
      "endMs": 14040,
      "pageBreakAfter": true
    },
    {
      "word": "En",
      "startMs": 14620,
      "endMs": 14860,
      "pageBreakAfter": false
    },
    {
      "word": "2025",
      "startMs": 14860,
      "endMs": 15360,
      "pageBreakAfter": false
    },
    {
      "word": "contó",
      "startMs": 15360,
      "endMs": 16140,
      "pageBreakAfter": false
    },
    {
      "word": "su",
      "startMs": 16140,
      "endMs": 16260,
      "pageBreakAfter": false
    },
    {
      "word": "problema",
      "startMs": 16260,
      "endMs": 16580,
      "pageBreakAfter": true
    },
    {
      "word": "con",
      "startMs": 16580,
      "endMs": 16820,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 16820,
      "endMs": 16940,
      "pageBreakAfter": false
    },
    {
      "word": "mecanismo",
      "startMs": 16940,
      "endMs": 17380,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 17380,
      "endMs": 17580,
      "pageBreakAfter": false
    },
    {
      "word": "hace",
      "startMs": 17580,
      "endMs": 17740,
      "pageBreakAfter": true
    },
    {
      "word": "avanzar",
      "startMs": 17740,
      "endMs": 18180,
      "pageBreakAfter": false
    },
    {
      "word": "las",
      "startMs": 18180,
      "endMs": 18340,
      "pageBreakAfter": false
    },
    {
      "word": "horas.",
      "startMs": 18340,
      "endMs": 18520,
      "pageBreakAfter": true
    },
    {
      "word": "En",
      "startMs": 19180,
      "endMs": 19340,
      "pageBreakAfter": false
    },
    {
      "word": "su",
      "startMs": 19340,
      "endMs": 19480,
      "pageBreakAfter": false
    },
    {
      "word": "modelo,",
      "startMs": 19480,
      "endMs": 19760,
      "pageBreakAfter": true
    },
    {
      "word": "un",
      "startMs": 20080,
      "endMs": 20140,
      "pageBreakAfter": false
    },
    {
      "word": "eslabón",
      "startMs": 20140,
      "endMs": 20560,
      "pageBreakAfter": false
    },
    {
      "word": "empuja",
      "startMs": 20560,
      "endMs": 21140,
      "pageBreakAfter": false
    },
    {
      "word": "un",
      "startMs": 21140,
      "endMs": 21300,
      "pageBreakAfter": false
    },
    {
      "word": "anillo",
      "startMs": 21300,
      "endMs": 21560,
      "pageBreakAfter": true
    },
    {
      "word": "dentado",
      "startMs": 21560,
      "endMs": 22020,
      "pageBreakAfter": false
    },
    {
      "word": "para",
      "startMs": 22020,
      "endMs": 22240,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 22240,
      "endMs": 22400,
      "pageBreakAfter": false
    },
    {
      "word": "avance,",
      "startMs": 22400,
      "endMs": 22700,
      "pageBreakAfter": true
    },
    {
      "word": "y",
      "startMs": 22700,
      "endMs": 23380,
      "pageBreakAfter": false
    },
    {
      "word": "luego",
      "startMs": 23380,
      "endMs": 23600,
      "pageBreakAfter": false
    },
    {
      "word": "debe",
      "startMs": 23600,
      "endMs": 23800,
      "pageBreakAfter": false
    },
    {
      "word": "caer",
      "startMs": 23800,
      "endMs": 24160,
      "pageBreakAfter": false
    },
    {
      "word": "por",
      "startMs": 24160,
      "endMs": 24300,
      "pageBreakAfter": true
    },
    {
      "word": "su",
      "startMs": 24300,
      "endMs": 24520,
      "pageBreakAfter": false
    },
    {
      "word": "propio",
      "startMs": 24520,
      "endMs": 24700,
      "pageBreakAfter": false
    },
    {
      "word": "peso",
      "startMs": 24700,
      "endMs": 25020,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 25020,
      "endMs": 25180,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 25180,
      "endMs": 25280,
      "pageBreakAfter": true
    },
    {
      "word": "hueco",
      "startMs": 25280,
      "endMs": 25520,
      "pageBreakAfter": false
    },
    {
      "word": "entre",
      "startMs": 25520,
      "endMs": 25720,
      "pageBreakAfter": false
    },
    {
      "word": "dos",
      "startMs": 25720,
      "endMs": 25940,
      "pageBreakAfter": false
    },
    {
      "word": "dientes.",
      "startMs": 25940,
      "endMs": 26180,
      "pageBreakAfter": true
    },
    {
      "word": "No",
      "startMs": 26760,
      "endMs": 26980,
      "pageBreakAfter": false
    },
    {
      "word": "cae",
      "startMs": 26980,
      "endMs": 27260,
      "pageBreakAfter": false
    },
    {
      "word": "ahí.",
      "startMs": 27260,
      "endMs": 27440,
      "pageBreakAfter": true
    },
    {
      "word": "Se",
      "startMs": 27440,
      "endMs": 28140,
      "pageBreakAfter": false
    },
    {
      "word": "engancha",
      "startMs": 28140,
      "endMs": 28540,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 28540,
      "endMs": 28660,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 28660,
      "endMs": 28760,
      "pageBreakAfter": false
    },
    {
      "word": "diente",
      "startMs": 28760,
      "endMs": 28960,
      "pageBreakAfter": true
    },
    {
      "word": "siguiente",
      "startMs": 28960,
      "endMs": 29260,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 29260,
      "endMs": 29760,
      "pageBreakAfter": false
    },
    {
      "word": "lo",
      "startMs": 29760,
      "endMs": 29840,
      "pageBreakAfter": false
    },
    {
      "word": "empuja",
      "startMs": 29840,
      "endMs": 30240,
      "pageBreakAfter": false
    },
    {
      "word": "hacia",
      "startMs": 30240,
      "endMs": 30400,
      "pageBreakAfter": true
    },
    {
      "word": "atrás.",
      "startMs": 30400,
      "endMs": 30660,
      "pageBreakAfter": true
    },
    {
      "word": "Golan",
      "startMs": 31400,
      "endMs": 31720,
      "pageBreakAfter": false
    },
    {
      "word": "no",
      "startMs": 31720,
      "endMs": 31880,
      "pageBreakAfter": false
    },
    {
      "word": "sabe",
      "startMs": 31880,
      "endMs": 32140,
      "pageBreakAfter": false
    },
    {
      "word": "si",
      "startMs": 32140,
      "endMs": 32340,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 32340,
      "endMs": 32440,
      "pageBreakAfter": true
    },
    {
      "word": "fallo",
      "startMs": 32440,
      "endMs": 32780,
      "pageBreakAfter": false
    },
    {
      "word": "es",
      "startMs": 32780,
      "endMs": 32920,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 32920,
      "endMs": 33040,
      "pageBreakAfter": false
    },
    {
      "word": "diseño",
      "startMs": 33040,
      "endMs": 33420,
      "pageBreakAfter": false
    },
    {
      "word": "original",
      "startMs": 33420,
      "endMs": 33860,
      "pageBreakAfter": true
    },
    {
      "word": "o",
      "startMs": 33860,
      "endMs": 34240,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 34240,
      "endMs": 34320,
      "pageBreakAfter": false
    },
    {
      "word": "su",
      "startMs": 34320,
      "endMs": 34440,
      "pageBreakAfter": false
    },
    {
      "word": "construcción.",
      "startMs": 34440,
      "endMs": 35100,
      "pageBreakAfter": true
    },
    {
      "word": "El",
      "startMs": 35820,
      "endMs": 36000,
      "pageBreakAfter": false
    },
    {
      "word": "reloj",
      "startMs": 36000,
      "endMs": 36300,
      "pageBreakAfter": false
    },
    {
      "word": "original",
      "startMs": 36300,
      "endMs": 36660,
      "pageBreakAfter": false
    },
    {
      "word": "no",
      "startMs": 36660,
      "endMs": 37140,
      "pageBreakAfter": false
    },
    {
      "word": "se",
      "startMs": 37140,
      "endMs": 37260,
      "pageBreakAfter": true
    },
    {
      "word": "conserva:",
      "startMs": 37260,
      "endMs": 37800,
      "pageBreakAfter": true
    },
    {
      "word": "solo",
      "startMs": 38100,
      "endMs": 38300,
      "pageBreakAfter": false
    },
    {
      "word": "quedan",
      "startMs": 38300,
      "endMs": 38680,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 38680,
      "endMs": 38780,
      "pageBreakAfter": false
    },
    {
      "word": "texto",
      "startMs": 38780,
      "endMs": 39060,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 39060,
      "endMs": 39340,
      "pageBreakAfter": true
    },
    {
      "word": "los",
      "startMs": 39340,
      "endMs": 39460,
      "pageBreakAfter": false
    },
    {
      "word": "dibujos",
      "startMs": 39460,
      "endMs": 39880,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 39880,
      "endMs": 39960,
      "pageBreakAfter": false
    },
    {
      "word": "las",
      "startMs": 39960,
      "endMs": 40060,
      "pageBreakAfter": false
    },
    {
      "word": "copias.",
      "startMs": 40060,
      "endMs": 40380,
      "pageBreakAfter": true
    }
  ],
  "audio": {
    "narration": {
      "src": "video009/shorts-audio/short5-narration.mp3",
      "volume": 2.0184
    },
    "music": {
      "src": "video009/shorts-audio/short5-music.mp3",
      "volume": 0.1059,
      "fadeInSeconds": 0.5,
      "fadeOutSeconds": 1.0,
      "loop": true
    }
  }
};


// ---------------------------------------------------------------------------
// Short 6 - "PINTARON LO QUE LEIAN" (Parte 6)
// Locucion: 009_RelojElefante_Short6_Copias.mp3 (41.691375s, sin CTA) + tarjeta CTA 5.0s = 46.691375s.
// Musica: 01-hook.mp3 desde 0.0s (pista original del largo, sin editar).
// ---------------------------------------------------------------------------
export const short6CopiasFixture: ExplainerProps = {
  "cuts": [
    {
      "id": "met-open",
      "source": "video009/images/folio-met-1315-v.png",
      "in_seconds": 0.0,
      "out_seconds": 5.26,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video009/shorts-audio/sfx/processed/short6-sfx-met-open.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "39",
      "source": "video009/images/39.png",
      "in_seconds": 5.26,
      "out_seconds": 10.02,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video009/shorts-audio/sfx/processed/short6-sfx-39.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "40",
      "source": "video009/images/40.png",
      "in_seconds": 10.02,
      "out_seconds": 17.64,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video009/shorts-audio/sfx/processed/short6-sfx-40.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "topkapi",
      "source": "video009/images/topkapi-folio-v.png",
      "in_seconds": 17.64,
      "out_seconds": 20.74,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video009/shorts-audio/sfx/processed/short6-sfx-topkapi.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "43",
      "source": "video009/images/43.png",
      "in_seconds": 20.74,
      "out_seconds": 24.36,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video009/shorts-audio/sfx/processed/short6-sfx-43.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "46-copias",
      "source": "video009/video/plano-46-dos-copias-retimed.mp4",
      "in_seconds": 24.36,
      "out_seconds": 28.7,
      "source_in_seconds": 3.93,
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
      "id": "met-hoja",
      "source": "video009/images/folio-met-1315-v.png",
      "in_seconds": 28.7,
      "out_seconds": 35.76,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in",
      "audioSrc": "video009/shorts-audio/sfx/processed/short6-sfx-met-hoja.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "40-cierre",
      "source": "video009/images/40.png",
      "in_seconds": 35.76,
      "out_seconds": 41.691375,
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5,
      "animation": "zoom-out",
      "transform": {
        "position": {
          "x": 60,
          "y": 50
        }
      },
      "backgroundColor": "transparent",
      "audioSrc": "video009/shorts-audio/sfx/processed/short6-sfx-40-cierre.mp3",
      "audioVolume": 1.0
    },
    {
      "id": "cta",
      "source": "",
      "type": "cta_card",
      "in_seconds": 41.691375,
      "out_seconds": 46.691375,
      "text": "Si tuvieras que reconstruirlo,\n¿te fiarías más\ndel texto o\nde los dibujos?\n\nCuéntanoslo y síguenos",
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
      "text": "PINTARON\nLO QUE LEÍAN"
    },
    {
      "type": "rotulo",
      "in_seconds": 5.46,
      "out_seconds": 9.82,
      "position": "top-left",
      "variant": "label",
      "text": "16 DE ENERO DE 1206"
    },
    {
      "type": "rotulo",
      "in_seconds": 10.219999999999999,
      "out_seconds": 17.44,
      "position": "top-left",
      "variant": "label",
      "text": "10 DE ABRIL DE 1206",
      "subtitle": "MUHAMMAD AL-HASKAFI"
    },
    {
      "type": "rotulo",
      "in_seconds": 17.84,
      "out_seconds": 20.639999999999997,
      "position": "top-left",
      "variant": "label",
      "text": "TOPKAPI",
      "subtitle": "MS AHMET III 3472"
    },
    {
      "type": "rotulo",
      "in_seconds": 28.9,
      "out_seconds": 35.559999999999995,
      "position": "top-left",
      "variant": "label",
      "text": "FARRUKH IBN ABD AL-LATIF",
      "subtitle": "1315"
    }
  ],
  "watermarkSrc": WATERMARK,
  "brandBackground": true,
  "themeConfig": THEME,
  "captionsPhraseAware": true,
  "captions": [
    {
      "word": "Del",
      "startMs": 0,
      "endMs": 200,
      "pageBreakAfter": false
    },
    {
      "word": "reloj-elefante",
      "startMs": 200,
      "endMs": 1000,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 1000,
      "endMs": 1200,
      "pageBreakAfter": false
    },
    {
      "word": "diseñó",
      "startMs": 1200,
      "endMs": 1620,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 1620,
      "endMs": 1760,
      "pageBreakAfter": true
    },
    {
      "word": "ingeniero",
      "startMs": 1760,
      "endMs": 2220,
      "pageBreakAfter": false
    },
    {
      "word": "Al-Jazari",
      "startMs": 2220,
      "endMs": 2940,
      "pageBreakAfter": false
    },
    {
      "word": "solo",
      "startMs": 3300,
      "endMs": 3540,
      "pageBreakAfter": false
    },
    {
      "word": "quedan",
      "startMs": 3540,
      "endMs": 3860,
      "pageBreakAfter": false
    },
    {
      "word": "las",
      "startMs": 3860,
      "endMs": 4040,
      "pageBreakAfter": true
    },
    {
      "word": "copias",
      "startMs": 4040,
      "endMs": 4380,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 4380,
      "endMs": 4520,
      "pageBreakAfter": false
    },
    {
      "word": "su",
      "startMs": 4520,
      "endMs": 4640,
      "pageBreakAfter": false
    },
    {
      "word": "libro.",
      "startMs": 4640,
      "endMs": 4860,
      "pageBreakAfter": true
    },
    {
      "word": "Lo",
      "startMs": 5260,
      "endMs": 5400,
      "pageBreakAfter": false
    },
    {
      "word": "terminó",
      "startMs": 5400,
      "endMs": 5780,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 5780,
      "endMs": 5900,
      "pageBreakAfter": false
    },
    {
      "word": "16",
      "startMs": 5900,
      "endMs": 6280,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 6280,
      "endMs": 6520,
      "pageBreakAfter": true
    },
    {
      "word": "enero",
      "startMs": 6520,
      "endMs": 6780,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 6780,
      "endMs": 6920,
      "pageBreakAfter": false
    },
    {
      "word": "1206",
      "startMs": 6920,
      "endMs": 7840,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 7840,
      "endMs": 8260,
      "pageBreakAfter": false
    },
    {
      "word": "murió",
      "startMs": 8260,
      "endMs": 8560,
      "pageBreakAfter": true
    },
    {
      "word": "poco",
      "startMs": 8560,
      "endMs": 8900,
      "pageBreakAfter": false
    },
    {
      "word": "después.",
      "startMs": 8900,
      "endMs": 9400,
      "pageBreakAfter": true
    },
    {
      "word": "El",
      "startMs": 10020,
      "endMs": 10180,
      "pageBreakAfter": false
    },
    {
      "word": "10",
      "startMs": 10180,
      "endMs": 10360,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 10360,
      "endMs": 10500,
      "pageBreakAfter": false
    },
    {
      "word": "abril",
      "startMs": 10500,
      "endMs": 10760,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 10760,
      "endMs": 10940,
      "pageBreakAfter": true
    },
    {
      "word": "ese",
      "startMs": 10940,
      "endMs": 11120,
      "pageBreakAfter": false
    },
    {
      "word": "mismo",
      "startMs": 11120,
      "endMs": 11340,
      "pageBreakAfter": false
    },
    {
      "word": "año,",
      "startMs": 11340,
      "endMs": 11660,
      "pageBreakAfter": true
    },
    {
      "word": "el",
      "startMs": 12040,
      "endMs": 12160,
      "pageBreakAfter": false
    },
    {
      "word": "copista",
      "startMs": 12160,
      "endMs": 12540,
      "pageBreakAfter": false
    },
    {
      "word": "Muhammad",
      "startMs": 12540,
      "endMs": 13140,
      "pageBreakAfter": false
    },
    {
      "word": "al-Haskafi",
      "startMs": 13140,
      "endMs": 14040,
      "pageBreakAfter": false
    },
    {
      "word": "acabó",
      "startMs": 14040,
      "endMs": 14720,
      "pageBreakAfter": true
    },
    {
      "word": "una",
      "startMs": 14720,
      "endMs": 14900,
      "pageBreakAfter": false
    },
    {
      "word": "copia",
      "startMs": 14900,
      "endMs": 15260,
      "pageBreakAfter": false
    },
    {
      "word": "ilustrada",
      "startMs": 15260,
      "endMs": 15740,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 15740,
      "endMs": 15960,
      "pageBreakAfter": false
    },
    {
      "word": "ya",
      "startMs": 15960,
      "endMs": 16100,
      "pageBreakAfter": true
    },
    {
      "word": "lo",
      "startMs": 16100,
      "endMs": 16200,
      "pageBreakAfter": false
    },
    {
      "word": "nombra",
      "startMs": 16200,
      "endMs": 16500,
      "pageBreakAfter": false
    },
    {
      "word": "como",
      "startMs": 16500,
      "endMs": 16720,
      "pageBreakAfter": false
    },
    {
      "word": "fallecido.",
      "startMs": 16720,
      "endMs": 17280,
      "pageBreakAfter": true
    },
    {
      "word": "Esa",
      "startMs": 17640,
      "endMs": 17840,
      "pageBreakAfter": false
    },
    {
      "word": "copia",
      "startMs": 17840,
      "endMs": 18100,
      "pageBreakAfter": false
    },
    {
      "word": "está",
      "startMs": 18100,
      "endMs": 18340,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 18340,
      "endMs": 18520,
      "pageBreakAfter": false
    },
    {
      "word": "Topkapi,",
      "startMs": 18520,
      "endMs": 19040,
      "pageBreakAfter": true
    },
    {
      "word": "en",
      "startMs": 19340,
      "endMs": 19400,
      "pageBreakAfter": false
    },
    {
      "word": "Estambul.",
      "startMs": 19400,
      "endMs": 19720,
      "pageBreakAfter": true
    },
    {
      "word": "Durante",
      "startMs": 20740,
      "endMs": 21040,
      "pageBreakAfter": false
    },
    {
      "word": "siglos,",
      "startMs": 21040,
      "endMs": 21380,
      "pageBreakAfter": true
    },
    {
      "word": "cada",
      "startMs": 21380,
      "endMs": 21620,
      "pageBreakAfter": false
    },
    {
      "word": "copista",
      "startMs": 21620,
      "endMs": 22040,
      "pageBreakAfter": false
    },
    {
      "word": "volvió",
      "startMs": 22040,
      "endMs": 22380,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 22380,
      "endMs": 22440,
      "pageBreakAfter": false
    },
    {
      "word": "dibujar",
      "startMs": 22440,
      "endMs": 22800,
      "pageBreakAfter": true
    },
    {
      "word": "las",
      "startMs": 22800,
      "endMs": 22960,
      "pageBreakAfter": false
    },
    {
      "word": "máquinas",
      "startMs": 22960,
      "endMs": 23320,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 23320,
      "endMs": 23460,
      "pageBreakAfter": false
    },
    {
      "word": "su",
      "startMs": 23460,
      "endMs": 23560,
      "pageBreakAfter": false
    },
    {
      "word": "manera.",
      "startMs": 23560,
      "endMs": 23820,
      "pageBreakAfter": true
    },
    {
      "word": "De",
      "startMs": 24360,
      "endMs": 24560,
      "pageBreakAfter": false
    },
    {
      "word": "una",
      "startMs": 24560,
      "endMs": 24700,
      "pageBreakAfter": false
    },
    {
      "word": "copia",
      "startMs": 24700,
      "endMs": 25000,
      "pageBreakAfter": false
    },
    {
      "word": "a",
      "startMs": 25000,
      "endMs": 25080,
      "pageBreakAfter": false
    },
    {
      "word": "otra",
      "startMs": 25080,
      "endMs": 25260,
      "pageBreakAfter": true
    },
    {
      "word": "cambian",
      "startMs": 25260,
      "endMs": 25900,
      "pageBreakAfter": false
    },
    {
      "word": "las",
      "startMs": 25900,
      "endMs": 26080,
      "pageBreakAfter": false
    },
    {
      "word": "figuras",
      "startMs": 26080,
      "endMs": 26460,
      "pageBreakAfter": false
    },
    {
      "word": "y",
      "startMs": 26460,
      "endMs": 26760,
      "pageBreakAfter": false
    },
    {
      "word": "algunos",
      "startMs": 26760,
      "endMs": 27000,
      "pageBreakAfter": true
    },
    {
      "word": "detalles",
      "startMs": 27000,
      "endMs": 27400,
      "pageBreakAfter": false
    },
    {
      "word": "mecánicos.",
      "startMs": 27400,
      "endMs": 27940,
      "pageBreakAfter": true
    },
    {
      "word": "La",
      "startMs": 28700,
      "endMs": 29060,
      "pageBreakAfter": false
    },
    {
      "word": "hoja",
      "startMs": 29060,
      "endMs": 29300,
      "pageBreakAfter": false
    },
    {
      "word": "del",
      "startMs": 29300,
      "endMs": 29460,
      "pageBreakAfter": false
    },
    {
      "word": "Museo",
      "startMs": 29460,
      "endMs": 29860,
      "pageBreakAfter": false
    },
    {
      "word": "Metropolitano",
      "startMs": 29860,
      "endMs": 30520,
      "pageBreakAfter": true
    },
    {
      "word": "de",
      "startMs": 30520,
      "endMs": 30620,
      "pageBreakAfter": false
    },
    {
      "word": "Nueva",
      "startMs": 30620,
      "endMs": 30860,
      "pageBreakAfter": false
    },
    {
      "word": "York",
      "startMs": 30860,
      "endMs": 31120,
      "pageBreakAfter": false
    },
    {
      "word": "la",
      "startMs": 31120,
      "endMs": 31560,
      "pageBreakAfter": false
    },
    {
      "word": "caligrafió",
      "startMs": 31560,
      "endMs": 32120,
      "pageBreakAfter": true
    },
    {
      "word": "Farrukh",
      "startMs": 32120,
      "endMs": 32640,
      "pageBreakAfter": false
    },
    {
      "word": "ibn",
      "startMs": 32640,
      "endMs": 32973,
      "pageBreakAfter": false
    },
    {
      "word": "Abd",
      "startMs": 32973,
      "endMs": 33307,
      "pageBreakAfter": false
    },
    {
      "word": "al-Latif",
      "startMs": 33307,
      "endMs": 33640,
      "pageBreakAfter": false
    },
    {
      "word": "en",
      "startMs": 33640,
      "endMs": 34040,
      "pageBreakAfter": true
    },
    {
      "word": "1315.",
      "startMs": 34040,
      "endMs": 35140,
      "pageBreakAfter": true
    },
    {
      "word": "No",
      "startMs": 35760,
      "endMs": 36040,
      "pageBreakAfter": false
    },
    {
      "word": "hay",
      "startMs": 36040,
      "endMs": 36180,
      "pageBreakAfter": false
    },
    {
      "word": "constancia",
      "startMs": 36180,
      "endMs": 36680,
      "pageBreakAfter": false
    },
    {
      "word": "de",
      "startMs": 36680,
      "endMs": 36820,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 36820,
      "endMs": 36940,
      "pageBreakAfter": true
    },
    {
      "word": "ningún",
      "startMs": 36940,
      "endMs": 37160,
      "pageBreakAfter": false
    },
    {
      "word": "copista",
      "startMs": 37160,
      "endMs": 37660,
      "pageBreakAfter": false
    },
    {
      "word": "viera",
      "startMs": 37660,
      "endMs": 37940,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 37940,
      "endMs": 38100,
      "pageBreakAfter": false
    },
    {
      "word": "reloj",
      "startMs": 38100,
      "endMs": 38400,
      "pageBreakAfter": true
    },
    {
      "word": "construido.",
      "startMs": 38400,
      "endMs": 38980,
      "pageBreakAfter": true
    },
    {
      "word": "Pintaron",
      "startMs": 39620,
      "endMs": 40060,
      "pageBreakAfter": false
    },
    {
      "word": "lo",
      "startMs": 40060,
      "endMs": 40220,
      "pageBreakAfter": false
    },
    {
      "word": "que",
      "startMs": 40220,
      "endMs": 40360,
      "pageBreakAfter": false
    },
    {
      "word": "el",
      "startMs": 40360,
      "endMs": 40500,
      "pageBreakAfter": false
    },
    {
      "word": "texto",
      "startMs": 40500,
      "endMs": 40720,
      "pageBreakAfter": true
    },
    {
      "word": "describía.",
      "startMs": 40720,
      "endMs": 41280,
      "pageBreakAfter": true
    }
  ],
  "audio": {
    "narration": {
      "src": "video009/shorts-audio/short6-narration.mp3",
      "volume": 2.0893
    },
    "music": {
      "src": "video009/shorts-audio/short6-music.mp3",
      "volume": 0.1,
      "fadeInSeconds": 0.5,
      "fadeOutSeconds": 1.0,
      "loop": true
    }
  }
};
