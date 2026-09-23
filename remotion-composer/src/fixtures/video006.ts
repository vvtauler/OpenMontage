import { ExplainerProps } from "../Explainer";

// Video 006 -- "Ulfberht: la espada vikinga que no era vikinga". Fase 8
// (Montaje), primer corte generado por Claude a partir del guion tecnico
// 028 (45 planos) + narracion-final (32 archivos, gaps 0.5s entre archivos,
// 5.0s en el limite Hook->Contexto para la intro de canal) + sfx-final (17
// cues Pixabay, -16dBFS pico) + music-final (6 bloques Pixabay, -26dBFS
// pico, uno por bloque narrativo) + 9 clips de Motion Graphics retimados
// (setpts) para encajar exactos en su hueco de guion tecnico. Bloque Objeto
// (8-14) y bloque mapa (18a-19) llevan un plano intercalado (12a y 18d
// respectivamente) partiendo el clip de fondo en dos segmentos via
// source_in_seconds. Ref A reutilizada en 1a/31/32, Ref F en 20a/20b/30b,
// (Ref B ya no se reutiliza en 3a: unificado con el plano 2) -- todas con transform.position/scale distintos para no
// repetir el mismo encuadre. Pendiente de aprobacion de Victor.
export const video006Fixture: ExplainerProps = {
  "cuts": [
    {
      "id": "1b",
      "source": "video006/images/1b.png",
      "in_seconds": 0.0,
      "out_seconds": 10.567,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "fade_black",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.15
      }
    },
    {
      "id": "1a",
      "source": "video006/images/A.png",
      "in_seconds": 6.0,
      "out_seconds": 10.567,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "crossfadeIn": 0.5,
        "startScale": 1.4,
        "scale": 1.5,
        "position": {
          "x": 50,
          "y": 60
        }
      }
    },
    {
      "id": "2",
      "source": "video006/images/B.png",
      "in_seconds": 10.567,
      "out_seconds": 18.033,
      "source_in_seconds": 0,
      "animation": "pan-right",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "3b",
      "source": "video006/video/plano-3b-contador-falsificaciones-retimed.mp4",
      "in_seconds": 18.033,
      "out_seconds": 24.667,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "4",
      "source": "video006/video/plano-4-split-inscripciones-hook-retimed.mp4",
      "in_seconds": 24.667,
      "out_seconds": 30.6,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5
    },
    {
      "id": "intro",
      "source": "video006/video/Artilugio_Intro.mp4",
      "in_seconds": 30.6,
      "out_seconds": 35.6,
      "source_in_seconds": 0,
      "muted": true,
      "audioSrc": "video006/audio/intro-sfx.mp3",
      "audioVolume": 1.0,
      "transition_in": "fade_black",
      "transition_out": "fade_black",
      "transition_duration": 0.5
    },
    {
      "id": "5",
      "source": "video006/images/5.png",
      "in_seconds": 35.6,
      "out_seconds": 42.033,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "6a",
      "source": "video006/images/6a.png",
      "in_seconds": 42.033,
      "out_seconds": 47.967,
      "source_in_seconds": 0,
      "animation": "pan-left",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "6b",
      "source": "video006/video/plano-6b-soldadura-patron-retimed.mp4",
      "in_seconds": 47.967,
      "out_seconds": 57.9,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "6c",
      "source": "video006/images/6c.png",
      "in_seconds": 57.9,
      "out_seconds": 66.8,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "7",
      "source": "video006/images/7.png",
      "in_seconds": 66.8,
      "out_seconds": 79.767,
      "source_in_seconds": 0,
      "animation": "drift-up",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "8-11",
      "source": "video006/video/plano-objeto-objeto-8-14-retimed.mp4",
      "in_seconds": 79.767,
      "out_seconds": 129.2,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "12a",
      "source": "video006/video/plano-12a-ruta-volga-retimed.mp4",
      "in_seconds": 129.2,
      "out_seconds": 139.0,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "12a-xfade-12b14",
      "source": "video006/video/xfade-12a-to-8to14.mp4",
      "in_seconds": 139.0,
      "out_seconds": 139.567,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "cover",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "12b-14",
      "source": "video006/video/plano-objeto-objeto-8-14-retimed.mp4",
      "in_seconds": 139.567,
      "out_seconds": 185.667,
      "source_in_seconds": 51.432,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "15",
      "source": "video006/images/15.png",
      "in_seconds": 185.667,
      "out_seconds": 195.8,
      "source_in_seconds": 0,
      "animation": "pan-right",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "16",
      "source": "video006/images/16.png",
      "in_seconds": 195.8,
      "out_seconds": 210.467,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "17",
      "source": "video006/video/plano-17-embargo-candado-retimed.mp4",
      "in_seconds": 210.467,
      "out_seconds": 215.2,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "18a-18c",
      "source": "video006/video/plano-18a19-mapa-rutas-retimed.mp4",
      "in_seconds": 215.2,
      "out_seconds": 234.7,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "18d",
      "source": "video006/images/18d.png",
      "in_seconds": 234.7,
      "out_seconds": 246.0,
      "source_in_seconds": 0,
      "animation": "static",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "19",
      "source": "video006/video/plano-18a19-mapa-rutas-retimed.mp4",
      "in_seconds": 246.0,
      "out_seconds": 256.767,
      "source_in_seconds": 18.867,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "20a",
      "source": "video006/images/F.png",
      "in_seconds": 256.767,
      "out_seconds": 259.567,
      "source_in_seconds": 0,
      "animation": "static",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0,
        "position": "center"
      }
    },
    {
      "id": "20b",
      "source": "video006/images/F.png",
      "in_seconds": 259.567,
      "out_seconds": 272.033,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.1,
        "position": {
          "x": 50,
          "y": 40
        }
      }
    },
    {
      "id": "20c",
      "source": "video006/images/20c.png",
      "in_seconds": 272.033,
      "out_seconds": 279.433,
      "source_in_seconds": 0,
      "animation": "pan-left",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "20d",
      "source": "video006/images/20d.png",
      "in_seconds": 279.433,
      "out_seconds": 286.367,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "21",
      "source": "video006/images/21.png",
      "in_seconds": 286.367,
      "out_seconds": 292.067,
      "source_in_seconds": 0,
      "animation": "static",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "22",
      "source": "video006/images/22.png",
      "in_seconds": 292.067,
      "out_seconds": 305.0,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "23",
      "source": "video006/images/23.png",
      "in_seconds": 305.0,
      "out_seconds": 324.3,
      "source_in_seconds": 0,
      "animation": "pan-right",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "24",
      "source": "video006/images/24.png",
      "in_seconds": 324.3,
      "out_seconds": 334.633,
      "source_in_seconds": 0,
      "animation": "drift-up",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "25-26",
      "source": "video006/video/plano-2526-inscripcion-forense-retimed.mp4",
      "in_seconds": 334.633,
      "out_seconds": 373.0,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "27",
      "source": "video006/images/27.png",
      "in_seconds": 373.0,
      "out_seconds": 388.2,
      "source_in_seconds": 0,
      "animation": "static",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "28a",
      "source": "video006/video/plano-28a-linea-temporal-retimed.mp4",
      "in_seconds": 388.2,
      "out_seconds": 395.7,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "28b",
      "source": "video006/images/28b.png",
      "in_seconds": 395.7,
      "out_seconds": 411.6,
      "source_in_seconds": 0,
      "animation": "drift-up",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "29",
      "source": "video006/images/29.png",
      "in_seconds": 411.6,
      "out_seconds": 427.367,
      "source_in_seconds": 0,
      "animation": "sweep-right",
      "transform": {
        "scale": 1.4
      },
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "30a",
      "source": "video006/images/30a.png",
      "in_seconds": 427.367,
      "out_seconds": 440.667,
      "source_in_seconds": 0,
      "animation": "pan-left",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "30b",
      "source": "video006/images/F.png",
      "in_seconds": 440.667,
      "out_seconds": 449.733,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.25,
        "position": {
          "x": 60,
          "y": 55
        }
      }
    },
    {
      "id": "31",
      "source": "video006/images/7.png",
      "in_seconds": 449.733,
      "out_seconds": 459.1,
      "source_in_seconds": 0,
      "animation": "pan-left",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.0,
        "position": "center"
      }
    },
    {
      "id": "32",
      "source": "video006/images/A.png",
      "in_seconds": 459.1,
      "out_seconds": 485.833,
      "source_in_seconds": 0,
      "animation": "static",
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.15,
        "position": {
          "x": 25,
          "y": 50
        }
      }
    },
    {
      "id": "end-black",
      "source": "video006/images/black.png",
      "in_seconds": 485.833,
      "out_seconds": 486.333,
      "source_in_seconds": 0,
      "animation": "static",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    }
  ],
  "overlays": [
    {
      "type": "photo_insert",
      "in_seconds": 195.8,
      "out_seconds": 205.5,
      "source": "video006/images/carlomagno-busto.jpg",
      "caption": "Busto de Carlomagno",
      "attribution": "Beckstet, CC BY-SA 3.0, Wikimedia Commons",
      "position": "top-left",
      "width": 590
    },
    {
      "type": "rotulo",
      "in_seconds": 139.567,
      "out_seconds": 151.9,
      "text": "1.538 °C",
      "variant": "label",
      "position": "top-left"
    },
    {
      "type": "rotulo",
      "in_seconds": 152.4,
      "out_seconds": 171.867,
      "text": "Hipótesis 2 — cementación local, talleres del Rin",
      "variant": "label",
      "position": "top-left"
    },
    {
      "type": "rotulo",
      "in_seconds": 324.3,
      "out_seconds": 334.133,
      "text": "Williams · Stalsberg",
      "variant": "label",
      "position": "top-left"
    },
    {
      "type": "rotulo",
      "in_seconds": 459.1,
      "out_seconds": 485.833,
      "text": "SUSCRÍBETE",
      "variant": "cta",
      "position": "top-left",
      "iconSrc": "video006/images/isotipo.png"
    },
    {
      "type": "rotulo",
      "in_seconds": 477.0,
      "out_seconds": 485.833,
      "text": "¿Falsificación de marca hace 1.100 años, o la mejor espada vikinga no la hicieron los vikingos?",
      "variant": "label",
      "position": "bottom-center"
    }
  ],
  "captions": [],
  "audio": {
    "narration": {
      "src": "video006/audio/narration-final.mp3",
      "volume": 1.0
    },
    "sfx": {
      "src": "video006/audio/sfx-final.mp3",
      "volume": 1.0
    },
    "music": {
      "src": "video006/audio/music-final.mp3",
      "volume": 1.0
    }
  },
  "themeConfig": {
    "backgroundColor": "#000000"
  }
};
