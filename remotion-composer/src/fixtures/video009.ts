import { ExplainerProps } from "../Explainer";

// Video 009 -- "El reloj-elefante de Al-Jazari". Fase 8 (Montaje), primer corte
// generado por Claude a partir del guion tecnico 041 + narracion (30 archivos,
// 0,5 s entre archivos, 5,0 s en el limite Hook->Contexto para la intro de canal)
// + sfx-final (26 cues Pixabay, -26 dBFS pico, fade 0,6 s) + music-final
// (6 bloques Pixabay, -26 dBFS pico; Objeto -10 dB, Historia y Legado -5 dB)
// + 29 clips de Motion Graphics (18 ManimCE, 11 HyperFrames) retimados a su hueco.
// Generado por projects/009-reloj-elefante/_build_fixture.py -- no editar a mano.
// Pendiente de aprobacion de Victor.
export const video009Fixture: ExplainerProps = {
  "cuts": [
    {
      "id": "1",
      "source": "video009/images/folio-met-1315.png",
      "in_seconds": 0.0,
      "out_seconds": 6.56,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "fade_black",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.197
      }
    },
    {
      "id": "2",
      "source": "video009/images/folio-met-1315.png",
      "in_seconds": 6.56,
      "out_seconds": 13.27,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "startScale": 1.5,
        "scale": 1.6,
        "zoomOrigin": "52% 40%"
      }
    },
    {
      "id": "3",
      "source": "video009/images/3.png",
      "in_seconds": 13.27,
      "out_seconds": 18.57,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.159
      }
    },
    {
      "id": "4",
      "source": "video009/video/plano-4-cuenco-30-min-retimed.mp4",
      "in_seconds": 18.57,
      "out_seconds": 33.21,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "5",
      "source": "video009/images/5.png",
      "in_seconds": 33.21,
      "out_seconds": 41.646,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.253
      }
    },
    {
      "id": "intro",
      "source": "video009/video/Artilugio_Intro.mp4",
      "in_seconds": 41.646,
      "out_seconds": 46.65,
      "source_in_seconds": 0,
      "muted": true,
      "audioSrc": "video009/audio/intro-sfx.mp3",
      "audioVolume": 1.0,
      "transition_in": "fade_black",
      "transition_out": "fade_black",
      "transition_duration": 0.5
    },
    {
      "id": "6",
      "source": "video009/images/6.png",
      "in_seconds": 46.65,
      "out_seconds": 56.81,
      "source_in_seconds": 0,
      "animation": "pan-right",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "7",
      "source": "video009/video/plano-7-mapa-amid-tigris-retimed.mp4",
      "in_seconds": 56.81,
      "out_seconds": 64.78,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "8",
      "source": "video009/video/plano-8-mapa-mayyafariqin-retimed.mp4",
      "in_seconds": 64.78,
      "out_seconds": 76.28,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "9",
      "source": "video009/images/9.png",
      "in_seconds": 76.28,
      "out_seconds": 83.7,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.223
      }
    },
    {
      "id": "10",
      "source": "video009/images/10.png",
      "in_seconds": 83.7,
      "out_seconds": 93.98,
      "source_in_seconds": 0,
      "animation": "pan-left",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "11",
      "source": "video009/images/11.png",
      "in_seconds": 93.98,
      "out_seconds": 99.79,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.174
      }
    },
    {
      "id": "12",
      "source": "video009/images/12.png",
      "in_seconds": 99.79,
      "out_seconds": 107.45,
      "source_in_seconds": 0,
      "animation": "drift-up",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "13",
      "source": "video009/images/folio-met-diseno.png",
      "in_seconds": 107.45,
      "out_seconds": 114.84,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.222
      }
    },
    {
      "id": "14",
      "source": "video009/images/14.png",
      "in_seconds": 114.84,
      "out_seconds": 117.54,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.081
      }
    },
    {
      "id": "15",
      "source": "video009/video/plano-15-deposito-cuenco-retimed.mp4",
      "in_seconds": 117.54,
      "out_seconds": 128.5,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "16",
      "source": "video009/video/plano-16-cuenco-se-hunde-retimed.mp4",
      "in_seconds": 128.5,
      "out_seconds": 137.34,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "17",
      "source": "video009/video/plano-17-polea-escriba-retimed.mp4",
      "in_seconds": 137.34,
      "out_seconds": 145.46,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "18",
      "source": "video009/images/18.png",
      "in_seconds": 145.46,
      "out_seconds": 150.69,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.157
      }
    },
    {
      "id": "19",
      "source": "video009/video/plano-19-canal-de-bolas-retimed.mp4",
      "in_seconds": 150.69,
      "out_seconds": 158.59,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "20",
      "source": "video009/video/plano-20-rueda-pajaro-retimed.mp4",
      "in_seconds": 158.59,
      "out_seconds": 164.95,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "21",
      "source": "video009/video/plano-21-selector-halconero-retimed.mp4",
      "in_seconds": 164.95,
      "out_seconds": 177.51,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "22",
      "source": "video009/images/22.png",
      "in_seconds": 177.51,
      "out_seconds": 183.27,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.173
      }
    },
    {
      "id": "23",
      "source": "video009/video/plano-23-dragon-reinicio-retimed.mp4",
      "in_seconds": 183.27,
      "out_seconds": 194.13,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "24",
      "source": "video009/video/plano-24-reloj-a-cero-retimed.mp4",
      "in_seconds": 194.13,
      "out_seconds": 201.09,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "25",
      "source": "video009/video/plano-25-jarron-mahut-retimed.mp4",
      "in_seconds": 201.09,
      "out_seconds": 212.69,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "26",
      "source": "video009/images/26.png",
      "in_seconds": 212.69,
      "out_seconds": 219.56,
      "source_in_seconds": 0,
      "animation": "pan-left",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "27",
      "source": "video009/video/plano-27-quince-ventanas-retimed.mp4",
      "in_seconds": 219.56,
      "out_seconds": 225.42,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "28",
      "source": "video009/video/plano-28-ventanas-horas-retimed.mp4",
      "in_seconds": 225.42,
      "out_seconds": 232.41,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "30",
      "source": "video009/images/30.png",
      "in_seconds": 232.41,
      "out_seconds": 235.69,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.098
      }
    },
    {
      "id": "31",
      "source": "video009/video/plano-31-simbolismo-retimed.mp4",
      "in_seconds": 235.69,
      "out_seconds": 249.65,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "32",
      "source": "video009/images/32.png",
      "in_seconds": 249.65,
      "out_seconds": 258.36,
      "source_in_seconds": 0,
      "animation": "drift-up",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "33",
      "source": "video009/images/33.png",
      "in_seconds": 258.36,
      "out_seconds": 265.02,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.2
      }
    },
    {
      "id": "34",
      "source": "video009/video/plano-34-bomba-biela-retimed.mp4",
      "in_seconds": 265.02,
      "out_seconds": 273.36,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "35",
      "source": "video009/video/plano-35-biela-manivela-retimed.mp4",
      "in_seconds": 273.36,
      "out_seconds": 280.12,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "36",
      "source": "video009/video/plano-36-arbol-de-levas-retimed.mp4",
      "in_seconds": 280.12,
      "out_seconds": 285.84,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "37",
      "source": "video009/images/37.png",
      "in_seconds": 285.84,
      "out_seconds": 290.1,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.128
      }
    },
    {
      "id": "38",
      "source": "video009/images/38.png",
      "in_seconds": 290.1,
      "out_seconds": 303.09,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.28
      }
    },
    {
      "id": "39",
      "source": "video009/images/39.png",
      "in_seconds": 303.09,
      "out_seconds": 308.43,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.16
      }
    },
    {
      "id": "40",
      "source": "video009/images/40.png",
      "in_seconds": 308.43,
      "out_seconds": 319.17,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.28
      }
    },
    {
      "id": "41",
      "source": "video009/images/topkapi-palacio.png",
      "in_seconds": 319.17,
      "out_seconds": 325.76,
      "source_in_seconds": 0,
      "animation": "pan-right",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "42",
      "source": "video009/images/42.png",
      "in_seconds": 325.76,
      "out_seconds": 334.08,
      "source_in_seconds": 0,
      "animation": "drift-up",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "43",
      "source": "video009/images/43.png",
      "in_seconds": 334.08,
      "out_seconds": 339.92,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.175
      }
    },
    {
      "id": "44",
      "source": "video009/images/bodleian.png",
      "in_seconds": 339.92,
      "out_seconds": 343.76,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.115
      }
    },
    {
      "id": "45",
      "source": "video009/images/folio-met-1315.png",
      "in_seconds": 343.76,
      "out_seconds": 350.94,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.215
      }
    },
    {
      "id": "46",
      "source": "video009/video/plano-46-dos-copias-retimed.mp4",
      "in_seconds": 350.94,
      "out_seconds": 359.12,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "47",
      "source": "video009/images/47.png",
      "in_seconds": 359.12,
      "out_seconds": 370.65,
      "source_in_seconds": 0,
      "animation": "pan-right",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "48",
      "source": "video009/images/48.png",
      "in_seconds": 370.65,
      "out_seconds": 383.25,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.28
      }
    },
    {
      "id": "49",
      "source": "video009/video/plano-49-control-secuencial-retimed.mp4",
      "in_seconds": 383.25,
      "out_seconds": 393.25,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "50",
      "source": "video009/video/plano-50-retroalimentacion-retimed.mp4",
      "in_seconds": 393.25,
      "out_seconds": 403.53,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "51",
      "source": "video009/video/plano-51-bucle-abierto-retimed.mp4",
      "in_seconds": 403.53,
      "out_seconds": 418.85,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "52",
      "source": "video009/images/reloj-castillo.png",
      "in_seconds": 418.85,
      "out_seconds": 427.73,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.266
      }
    },
    {
      "id": "53",
      "source": "video009/video/plano-53-valvula-flotador-retimed.mp4",
      "in_seconds": 427.73,
      "out_seconds": 439.25,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "54",
      "source": "video009/video/plano-54-nivel-constante-cisterna-retimed.mp4",
      "in_seconds": 439.25,
      "out_seconds": 448.61,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "55",
      "source": "video009/video/plano-55-bola-y-levas-retimed.mp4",
      "in_seconds": 448.61,
      "out_seconds": 461.67,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "56",
      "source": "video009/images/replica-dubai.png",
      "in_seconds": 461.67,
      "out_seconds": 473.03,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.28
      }
    },
    {
      "id": "58",
      "source": "video009/images/58.png",
      "in_seconds": 473.03,
      "out_seconds": 479.15,
      "source_in_seconds": 0,
      "animation": "pan-left",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "59",
      "source": "video009/images/59.png",
      "in_seconds": 479.15,
      "out_seconds": 488.03,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.266
      }
    },
    {
      "id": "60",
      "source": "video009/images/60.png",
      "in_seconds": 488.03,
      "out_seconds": 493.76,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.172
      }
    },
    {
      "id": "61",
      "source": "video009/video/plano-61-anillo-esperado-retimed.mp4",
      "in_seconds": 493.76,
      "out_seconds": 504.2,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "62",
      "source": "video009/video/plano-62-anillo-fallo-retimed.mp4",
      "in_seconds": 504.2,
      "out_seconds": 511.63,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "63",
      "source": "video009/video/plano-63-dos-causas-retimed.mp4",
      "in_seconds": 511.63,
      "out_seconds": 516.81,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "65",
      "source": "video009/video/plano-65-dos-copias-cierre-retimed.mp4",
      "in_seconds": 516.81,
      "out_seconds": 526.11,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "67",
      "source": "video009/images/folio-met-1315.png",
      "in_seconds": 526.11,
      "out_seconds": 546.07,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.28
      }
    },
    {
      "id": "68",
      "source": "video009/images/3.png",
      "in_seconds": 546.07,
      "out_seconds": 556.91,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.28
      }
    },
    {
      "id": "69",
      "source": "video009/images/14.png",
      "in_seconds": 556.91,
      "out_seconds": 573.933,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5,
      "transform": {
        "scale": 1.28
      }
    }
  ],
  "overlays": [
    {
      "type": "rotulo",
      "in_seconds": 0.4,
      "out_seconds": 6.36,
      "text": "The Metropolitan Museum of Art",
      "variant": "label",
      "position": "top-left",
      "subtitle": "Folio 57.51.23 · 1315"
    },
    {
      "type": "monumental_title",
      "in_seconds": 47.05,
      "out_seconds": 50.65,
      "text": "AL-JAZARI",
      "subtitle": "c. 1174 - 1206",
      "position": "bottom-center",
      "background": true,
      "widthRatio": 0.42
    },
    {
      "type": "rotulo",
      "in_seconds": 107.85,
      "out_seconds": 114.64,
      "text": "The Metropolitan Museum of Art",
      "variant": "label",
      "position": "top-left",
      "subtitle": "Folio 55.121.13 · 1315"
    },
    {
      "type": "list_reveal",
      "in_seconds": 258.36,
      "out_seconds": 265.02,
      "position": "left",
      "items": [
        {
          "text": "Relojes de agua",
          "at_seconds": 1.6
        },
        {
          "text": "Autómatas musicales",
          "at_seconds": 2.7
        },
        {
          "text": "Bombas",
          "at_seconds": 4.2
        },
        {
          "text": "Cerraduras",
          "at_seconds": 5.4
        }
      ]
    },
    {
      "type": "rotulo",
      "in_seconds": 319.57,
      "out_seconds": 325.56,
      "text": "Palacio de Topkapı, Estambul",
      "variant": "label",
      "position": "top-left",
      "subtitle": "Foto: Dennis G. Jarvis · CC BY-SA 2.0"
    },
    {
      "type": "rotulo",
      "in_seconds": 340.32,
      "out_seconds": 343.56,
      "text": "Bodleian Library, Oxford",
      "variant": "label",
      "position": "top-left",
      "subtitle": "Foto: APK · CC BY 4.0"
    },
    {
      "type": "rotulo",
      "in_seconds": 344.16,
      "out_seconds": 350.74,
      "text": "The Metropolitan Museum of Art",
      "variant": "label",
      "position": "top-left",
      "subtitle": "Folio 57.51.23 · 1315"
    },
    {
      "type": "rotulo",
      "in_seconds": 359.52,
      "out_seconds": 370.45,
      "text": "Donald R. Hill",
      "variant": "label",
      "position": "top-left",
      "subtitle": "The Book of Knowledge of Ingenious Mechanical Devices, 1974"
    },
    {
      "type": "rotulo",
      "in_seconds": 462.07,
      "out_seconds": 472.83,
      "text": "Ibn Battuta Mall, Dubái",
      "variant": "label",
      "position": "top-left",
      "subtitle": "Foto: Jonathan Bowen · CC BY-SA 3.0"
    },
    {
      "type": "rotulo",
      "in_seconds": 479.55,
      "out_seconds": 487.83,
      "text": "Avi Golan",
      "variant": "label",
      "position": "top-left",
      "subtitle": "aljazaribook.com · 2025"
    },
    {
      "type": "rotulo",
      "in_seconds": 526.51,
      "out_seconds": 545.87,
      "text": "The Metropolitan Museum of Art",
      "variant": "label",
      "position": "top-left",
      "subtitle": "Folio 57.51.23 · 1315"
    },
    {
      "type": "rotulo",
      "in_seconds": 556.91,
      "out_seconds": 573.933,
      "text": "SUSCRÍBETE",
      "variant": "cta",
      "position": "top-left",
      "iconSrc": "video009/images/isotipo.png"
    },
    {
      "type": "rotulo",
      "in_seconds": 563.71,
      "out_seconds": 573.333,
      "text": "¿Dibujos de las copias o texto de Al-Jazari?",
      "variant": "label",
      "position": "bottom-center"
    }
  ],
  "captions": [],
  "audio": {
    "narration": {
      "src": "video009/audio/narration-final.mp3",
      "volume": 1.0
    },
    "sfx": {
      "src": "video009/audio/sfx-final.mp3",
      "volume": 1.0
    },
    "music": {
      "src": "video009/audio/music-final.mp3",
      "volume": 1.0
    }
  },
  "themeConfig": {
    "backgroundColor": "#000000"
  }
};
