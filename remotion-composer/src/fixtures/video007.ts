import { ExplainerProps } from "../Explainer";

// Video 007 -- "La daga de Tutankamon que cayo del cielo". Fase 8 (Montaje),
// primer corte generado por Claude a partir del guion tecnico 032 + narracion
// (30 archivos, 0,5 s entre archivos, 5,0 s en el limite Hook->Contexto para
// la intro de canal) + sfx-final (cues Pixabay, -26 dBFS pico, fade 0,6 s al
// final de cada plano) + music-final (6 bloques Pixabay, -26 dBFS pico;
// Objeto -10 dB, Historia y Legado -5 dB, mismos niveles aprobados en el 006)
// + 15 clips de Motion Graphics retimados por tramos a su hueco. Generado por
// projects/007-daga-tutankamon/_build_fixture.py -- no editar a mano.
// Pendiente de aprobacion de Victor.
export const video007Fixture: ExplainerProps = {
  "cuts": [
    {
      "id": "1",
      "source": "video007/images/1.png",
      "in_seconds": 0.0,
      "out_seconds": 13.897,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "fade_black",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "2",
      "source": "video007/images/2.png",
      "in_seconds": 13.897,
      "out_seconds": 16.435,
      "source_in_seconds": 0,
      "animation": "pan-right",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "3",
      "source": "video007/images/3-split.png",
      "in_seconds": 16.435,
      "out_seconds": 21.976,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "4",
      "source": "video007/images/4.png",
      "in_seconds": 21.976,
      "out_seconds": 26.84,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5
    },
    {
      "id": "intro",
      "source": "video007/video/Artilugio_Intro.mp4",
      "in_seconds": 26.84,
      "out_seconds": 31.809,
      "source_in_seconds": 0,
      "muted": true,
      "audioSrc": "video007/audio/intro-sfx.mp3",
      "audioVolume": 1.0,
      "transition_in": "fade_black",
      "transition_out": "fade_black",
      "transition_duration": 0.5
    },
    {
      "id": "5",
      "source": "video007/images/5.png",
      "in_seconds": 31.809,
      "out_seconds": 40.694,
      "source_in_seconds": 0,
      "animation": "pan-left",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "6b",
      "source": "video007/images/6b.png",
      "in_seconds": 40.694,
      "out_seconds": 47.694,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "6a",
      "source": "video007/video/plano-6a-fusion-hierro-retimed.mp4",
      "in_seconds": 47.694,
      "out_seconds": 57.064,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "6c",
      "source": "video007/video/plano-6c-edad-hierro-retimed.mp4",
      "in_seconds": 57.064,
      "out_seconds": 63.509,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "7",
      "source": "video007/images/7.png",
      "in_seconds": 63.509,
      "out_seconds": 73.988,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "8",
      "source": "video007/images/8.png",
      "in_seconds": 73.988,
      "out_seconds": 85.381,
      "source_in_seconds": 0,
      "animation": "pan-right",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "9",
      "source": "video007/images/9.png",
      "in_seconds": 85.381,
      "out_seconds": 88.232,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "10ab",
      "source": "video007/video/plano-10-medidas-seccion-retimed.mp4",
      "in_seconds": 88.232,
      "out_seconds": 101.57,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "10c",
      "source": "video007/images/10c.png",
      "in_seconds": 101.57,
      "out_seconds": 105.13,
      "source_in_seconds": 0,
      "animation": "pan-left",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "10d",
      "source": "video007/images/10d.png",
      "in_seconds": 105.13,
      "out_seconds": 114.856,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "11",
      "source": "video007/images/11.png",
      "in_seconds": 114.856,
      "out_seconds": 127.19,
      "source_in_seconds": 0,
      "animation": "drift-down",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "12",
      "source": "video007/images/11.png",
      "in_seconds": 127.19,
      "out_seconds": 128.656,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "startScale": 1.8,
        "scale": 1.9,
        "zoomOrigin": "56% 58%"
      }
    },
    {
      "id": "13a",
      "source": "video007/images/13a.png",
      "in_seconds": 128.656,
      "out_seconds": 136.356,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "13bcd",
      "source": "video007/video/plano-13-niquel-retimed.mp4",
      "in_seconds": 136.356,
      "out_seconds": 151.87,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "13e",
      "source": "video007/images/13e.png",
      "in_seconds": 151.87,
      "out_seconds": 161.15,
      "source_in_seconds": 0,
      "animation": "pan-right",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "13f14a",
      "source": "video007/video/plano-13f-widmanstatten-retimed.mp4",
      "in_seconds": 161.15,
      "out_seconds": 185.437,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "14b",
      "source": "video007/images/11.png",
      "in_seconds": 185.437,
      "out_seconds": 197.057,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "startScale": 1.4,
        "scale": 1.5,
        "zoomOrigin": "45% 35%"
      }
    },
    {
      "id": "14c",
      "source": "video007/video/plano-14c-ventana-forjado-retimed.mp4",
      "in_seconds": 197.057,
      "out_seconds": 205.594,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "15",
      "source": "video007/images/15.png",
      "in_seconds": 205.594,
      "out_seconds": 210.352,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "16a",
      "source": "video007/images/16a.png",
      "in_seconds": 210.352,
      "out_seconds": 215.97,
      "source_in_seconds": 0,
      "animation": "pan-right",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "16b",
      "source": "video007/images/16b.png",
      "in_seconds": 215.97,
      "out_seconds": 220.29,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "16c",
      "source": "video007/images/16c.png",
      "in_seconds": 220.29,
      "out_seconds": 224.23,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "16d",
      "source": "video007/images/16d.png",
      "in_seconds": 224.23,
      "out_seconds": 228.93,
      "source_in_seconds": 0,
      "animation": "pan-left",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "16e",
      "source": "video007/images/16e-split.png",
      "in_seconds": 228.93,
      "out_seconds": 236.057,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "17",
      "source": "video007/images/17.png",
      "in_seconds": 236.057,
      "out_seconds": 240.397,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "18a",
      "source": "video007/images/10d.png",
      "in_seconds": 240.397,
      "out_seconds": 244.19,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "startScale": 1.6,
        "scale": 1.7,
        "zoomOrigin": "38% 62%"
      }
    },
    {
      "id": "18b",
      "source": "video007/images/18b.png",
      "in_seconds": 244.19,
      "out_seconds": 252.73,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "18c",
      "source": "video007/video/plano-18c-cal-yeso-retimed.mp4",
      "in_seconds": 252.73,
      "out_seconds": 255.357,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "18d",
      "source": "video007/images/18d.png",
      "in_seconds": 255.357,
      "out_seconds": 266.05,
      "source_in_seconds": 0,
      "animation": "pan-left",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "18e",
      "source": "video007/video/plano-18e-ptolemaico-retimed.mp4",
      "in_seconds": 266.05,
      "out_seconds": 272.505,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "19",
      "source": "video007/images/19.png",
      "in_seconds": 272.505,
      "out_seconds": 283.219,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "20a",
      "source": "video007/images/20a.png",
      "in_seconds": 283.219,
      "out_seconds": 288.53,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "20b",
      "source": "video007/images/20b.png",
      "in_seconds": 288.53,
      "out_seconds": 298.25,
      "source_in_seconds": 0,
      "animation": "pan-right",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "20c",
      "source": "video007/images/29.png",
      "in_seconds": 298.25,
      "out_seconds": 306.655,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "21a",
      "source": "video007/video/plano-21a-tres-pistas-retimed.mp4",
      "in_seconds": 306.655,
      "out_seconds": 318.19,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "21b",
      "source": "video007/images/17.png",
      "in_seconds": 318.19,
      "out_seconds": 324.81,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "startScale": 1.35,
        "scale": 1.45,
        "zoomOrigin": "50% 45%"
      }
    },
    {
      "id": "21c",
      "source": "video007/video/plano-21c-correlacion-retimed.mp4",
      "in_seconds": 324.81,
      "out_seconds": 332.833,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "22a",
      "source": "video007/images/22a.png",
      "in_seconds": 332.833,
      "out_seconds": 336.29,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "22b",
      "source": "video007/video/plano-22b-siderurgia-retimed.mp4",
      "in_seconds": 336.29,
      "out_seconds": 340.45,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "22c",
      "source": "video007/images/22c.png",
      "in_seconds": 340.45,
      "out_seconds": 352.141,
      "source_in_seconds": 0,
      "animation": "pan-left",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "23a",
      "source": "video007/images/23a.png",
      "in_seconds": 352.141,
      "out_seconds": 364.15,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "23b",
      "source": "video007/images/23b.png",
      "in_seconds": 364.15,
      "out_seconds": 371.47,
      "source_in_seconds": 0,
      "animation": "pan-right",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "23c",
      "source": "video007/images/7.png",
      "in_seconds": 371.47,
      "out_seconds": 381.579,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "startScale": 1.4,
        "scale": 1.5,
        "zoomOrigin": "70% 30%"
      }
    },
    {
      "id": "24a",
      "source": "video007/images/24a_fondo.png",
      "in_seconds": 381.579,
      "out_seconds": 392.63,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "24b",
      "source": "video007/video/plano-24b-gebel-kamil-retimed.mp4",
      "in_seconds": 392.63,
      "out_seconds": 396.299,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "24c",
      "source": "video007/images/7.png",
      "in_seconds": 396.299,
      "out_seconds": 407.855,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "startScale": 1.25,
        "scale": 1.35,
        "zoomOrigin": "30% 55%"
      }
    },
    {
      "id": "25",
      "source": "video007/images/25.png",
      "in_seconds": 407.855,
      "out_seconds": 419.065,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "26a",
      "source": "video007/images/26a.png",
      "in_seconds": 419.065,
      "out_seconds": 422.65,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "26b",
      "source": "video007/images/26b.png",
      "in_seconds": 422.65,
      "out_seconds": 434.645,
      "source_in_seconds": 0,
      "animation": "pan-left",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "26cd",
      "source": "video007/video/plano-26-gerzeh-tutankamon-retimed.mp4",
      "in_seconds": 434.645,
      "out_seconds": 443.178,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "27",
      "source": "video007/images/27.png",
      "in_seconds": 443.178,
      "out_seconds": 450.072,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "28a",
      "source": "video007/images/28a.png",
      "in_seconds": 450.072,
      "out_seconds": 454.85,
      "source_in_seconds": 0,
      "animation": "pan-right",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "28a-ajuar",
      "source": "video007/images/1.png",
      "in_seconds": 454.85,
      "out_seconds": 468.439,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.35,
        "zoomOrigin": "55% 55%"
      }
    },
    {
      "id": "29",
      "source": "video007/images/29.png",
      "in_seconds": 468.439,
      "out_seconds": 478.082,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "30",
      "source": "video007/images/30.png",
      "in_seconds": 478.082,
      "out_seconds": 504.804,
      "source_in_seconds": 0,
      "animation": "static",
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5
    },
    {
      "id": "end-black",
      "source": "video007/images/black.png",
      "in_seconds": 504.804,
      "out_seconds": 505.304,
      "source_in_seconds": 0,
      "animation": "static",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    }
  ],
  "overlays": [
    {
      "type": "video_inset",
      "in_seconds": 272.505,
      "out_seconds": 283.219,
      "source": "video007/video/plano-map19-mapa-mitanni-retimed.mp4",
      "position": "top-right",
      "width": 600
    },
    {
      "type": "video_inset",
      "in_seconds": 407.855,
      "out_seconds": 419.065,
      "source": "video007/video/plano-map25-mapa-ruta-retimed.mp4",
      "position": "top-right",
      "width": 520
    },
    {
      "type": "rotulo",
      "in_seconds": 283.619,
      "out_seconds": 288.33,
      "text": "Carta de Amarna EA 22",
      "variant": "label",
      "position": "bottom-left"
    },
    {
      "type": "list_reveal",
      "in_seconds": 298.25,
      "out_seconds": 306.655,
      "position": "left",
      "items": [
        {
          "text": "Daga con hoja de hierro",
          "at_seconds": 1.59
        },
        {
          "text": "Guarda de oro grabada",
          "at_seconds": 2.95
        },
        {
          "text": "Empuñadura con lapislázuli",
          "at_seconds": 4.57
        }
      ]
    },
    {
      "type": "rotulo",
      "in_seconds": 360.9,
      "out_seconds": 363.95,
      "text": "biȝ-n-pt",
      "subtitle": "«hierro del cielo»",
      "variant": "label",
      "position": "bottom-left"
    },
    {
      "type": "photo_insert",
      "in_seconds": 152.27,
      "out_seconds": 161.05,
      "source": "video007/images/13e_Takafumi-Matsui_CC-BY-SA-4.0.jpg",
      "caption": "Takafumi Matsui",
      "attribution": "Joichi Ito, CC BY-SA 4.0, Wikimedia Commons",
      "position": "top-left",
      "width": 380
    },
    {
      "type": "photo_insert",
      "in_seconds": 381.979,
      "out_seconds": 392.53,
      "source": "video007/images/24a_Meteorito-Gebel-Kamil-60g_CC-BY-3.0.jpg",
      "caption": "Fragmento del meteorito Gebel Kamil",
      "attribution": "Ala'a H. Jawad, CC BY 3.0, Wikimedia Commons",
      "position": "right",
      "width": 460
    },
    {
      "type": "rotulo",
      "in_seconds": 423.05,
      "out_seconds": 434.445,
      "text": "Gerzeh, c. 3200 a. C.",
      "variant": "label",
      "position": "bottom-left"
    },
    {
      "type": "rotulo",
      "in_seconds": 478.082,
      "out_seconds": 504.804,
      "text": "SUSCRÍBETE",
      "variant": "cta",
      "position": "top-left",
      "iconSrc": "video007/images/isotipo.png"
    },
    {
      "type": "rotulo",
      "in_seconds": 496.9,
      "out_seconds": 504.804,
      "text": "¿Metal del espacio o regalo diplomático escondido en una tumba?",
      "variant": "label",
      "position": "bottom-center"
    }
  ],
  "captions": [],
  "audio": {
    "narration": {
      "src": "video007/audio/narration-final.mp3",
      "volume": 1.0
    },
    "sfx": {
      "src": "video007/audio/sfx-final.mp3",
      "volume": 1.0
    },
    "music": {
      "src": "video007/audio/music-final.mp3",
      "volume": 1.0
    }
  },
  "themeConfig": {
    "backgroundColor": "#000000"
  }
};
