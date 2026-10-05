import { ExplainerProps } from "../Explainer";

// Video 008 -- "El fuego griego". Fase 8 (Montaje), primer corte generado por
// Claude a partir del guion tecnico 038 + narracion (30 archivos, 0,5 s entre
// archivos, 5,0 s en el limite Hook->Contexto para la intro de canal) +
// sfx-final (cues Pixabay, -26 dBFS pico, fade 0,6 s al final de cada plano)
// + music-final (6 bloques Pixabay, -26 dBFS pico; Objeto -10 dB, Historia y
// Legado -5 dB) + 28 clips de Motion Graphics retimados a su hueco. Generado
// por projects/008-fuego-griego/_build_fixture.py -- no editar a mano.
// Pendiente de aprobacion de Victor.
export const video008Fixture: ExplainerProps = {
  "cuts": [
    {
      "id": "1",
      "source": "video008/images/1.png",
      "in_seconds": 0.0,
      "out_seconds": 2.78,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "fade_black",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "2a",
      "source": "video008/images/2a.png",
      "in_seconds": 2.78,
      "out_seconds": 7.3,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "2b",
      "source": "video008/images/2b.png",
      "in_seconds": 7.3,
      "out_seconds": 12.44,
      "source_in_seconds": 0,
      "animation": "pan-right",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "3",
      "source": "video008/images/3.png",
      "in_seconds": 12.44,
      "out_seconds": 20.36,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "4a",
      "source": "video008/images/4a.png",
      "in_seconds": 20.36,
      "out_seconds": 23.4,
      "source_in_seconds": 0,
      "animation": "pan-left",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "4b",
      "source": "video008/images/4b.png",
      "in_seconds": 23.4,
      "out_seconds": 27.44,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "5",
      "source": "video008/images/5.png",
      "in_seconds": 27.44,
      "out_seconds": 34.24,
      "source_in_seconds": 0,
      "animation": "drift-down",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "6",
      "source": "video008/images/6.png",
      "in_seconds": 34.24,
      "out_seconds": 39.273,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5
    },
    {
      "id": "intro",
      "source": "video008/video/Artilugio_Intro.mp4",
      "in_seconds": 39.273,
      "out_seconds": 44.27,
      "source_in_seconds": 0,
      "muted": true,
      "audioSrc": "video008/audio/intro-sfx.mp3",
      "audioVolume": 1.0,
      "transition_in": "fade_black",
      "transition_out": "fade_black",
      "transition_duration": 0.5
    },
    {
      "id": "7",
      "source": "video008/video/plano-7-expansion-omeya-retimed.mp4",
      "in_seconds": 44.27,
      "out_seconds": 48.47,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "8",
      "source": "video008/video/plano-8-constantinopla-frentes-retimed.mp4",
      "in_seconds": 48.47,
      "out_seconds": 58.46,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "9",
      "source": "video008/images/9.png",
      "in_seconds": 58.46,
      "out_seconds": 67.14,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "10",
      "source": "video008/images/10.png",
      "in_seconds": 67.14,
      "out_seconds": 74.5,
      "source_in_seconds": 0,
      "animation": "pan-right",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "11",
      "source": "video008/images/11.png",
      "in_seconds": 74.5,
      "out_seconds": 81.4,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "12",
      "source": "video008/images/12.png",
      "in_seconds": 81.4,
      "out_seconds": 85.66,
      "source_in_seconds": 0,
      "animation": "pan-left",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "13a",
      "source": "video008/video/plano-13a-ruta-kalinico-retimed.mp4",
      "in_seconds": 85.66,
      "out_seconds": 91.8,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "13b",
      "source": "video008/images/13b.png",
      "in_seconds": 91.8,
      "out_seconds": 99.98,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "14",
      "source": "video008/video/plano-14-nombres-retimed.mp4",
      "in_seconds": 99.98,
      "out_seconds": 104.47,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "15",
      "source": "video008/images/15.png",
      "in_seconds": 104.47,
      "out_seconds": 109.91,
      "source_in_seconds": 0,
      "animation": "drift-down",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "16a",
      "source": "video008/images/16a.png",
      "in_seconds": 109.91,
      "out_seconds": 116.3,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "16b",
      "source": "video008/video/plano-16b-pivote-retimed.mp4",
      "in_seconds": 116.3,
      "out_seconds": 122.79,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "17",
      "source": "video008/video/plano-17-componentes-retimed.mp4",
      "in_seconds": 122.79,
      "out_seconds": 135.17,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "18",
      "source": "video008/video/plano-18-conexiones-retimed.mp4",
      "in_seconds": 135.17,
      "out_seconds": 139.65,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "19",
      "source": "video008/video/plano-19-bomba-retimed.mp4",
      "in_seconds": 139.65,
      "out_seconds": 149.81,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "20",
      "source": "video008/video/plano-20-ctesibio-retimed.mp4",
      "in_seconds": 149.81,
      "out_seconds": 160.91,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "21a",
      "source": "video008/images/21a.png",
      "in_seconds": 160.91,
      "out_seconds": 171.75,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "22",
      "source": "video008/images/22.png",
      "in_seconds": 171.75,
      "out_seconds": 178.45,
      "source_in_seconds": 0,
      "animation": "pan-right",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "23",
      "source": "video008/images/23.png",
      "in_seconds": 178.45,
      "out_seconds": 186.88,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "24",
      "source": "video008/images/24.png",
      "in_seconds": 186.88,
      "out_seconds": 194.2,
      "source_in_seconds": 0,
      "animation": "pan-left",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "25a",
      "source": "video008/images/25a.png",
      "in_seconds": 194.2,
      "out_seconds": 199.5,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "25b",
      "source": "video008/images/25b.png",
      "in_seconds": 199.5,
      "out_seconds": 208.09,
      "source_in_seconds": 0,
      "animation": "drift-down",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "26a",
      "source": "video008/video/plano-26a-asedio-674-retimed.mp4",
      "in_seconds": 208.09,
      "out_seconds": 216.31,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "26b",
      "source": "video008/images/26b.png",
      "in_seconds": 216.31,
      "out_seconds": 222.15,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "27a",
      "source": "video008/video/plano-27a-asedio-717-retimed.mp4",
      "in_seconds": 222.15,
      "out_seconds": 229.81,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "27b",
      "source": "video008/images/27b.png",
      "in_seconds": 229.81,
      "out_seconds": 237.28,
      "source_in_seconds": 0,
      "animation": "pan-right",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "28",
      "source": "video008/images/28.png",
      "in_seconds": 237.28,
      "out_seconds": 241.42,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "29",
      "source": "video008/video/plano-29-tres-grupos-retimed.mp4",
      "in_seconds": 241.42,
      "out_seconds": 257.32,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "31",
      "source": "video008/images/31.png",
      "in_seconds": 257.32,
      "out_seconds": 261.38,
      "source_in_seconds": 0,
      "animation": "pan-left",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "32",
      "source": "video008/images/32.png",
      "in_seconds": 261.38,
      "out_seconds": 273.96,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "33a",
      "source": "video008/images/33a.png",
      "in_seconds": 273.96,
      "out_seconds": 281.5,
      "source_in_seconds": 0,
      "animation": "drift-down",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "33b",
      "source": "video008/images/33b.png",
      "in_seconds": 281.5,
      "out_seconds": 289.16,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "34a",
      "source": "video008/images/34a.png",
      "in_seconds": 289.16,
      "out_seconds": 295.0,
      "source_in_seconds": 0,
      "animation": "pan-right",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "34b",
      "source": "video008/images/34b.png",
      "in_seconds": 295.0,
      "out_seconds": 301.52,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "35",
      "source": "video008/images/35.png",
      "in_seconds": 301.52,
      "out_seconds": 304.64,
      "source_in_seconds": 0,
      "animation": "pan-left",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "36",
      "source": "video008/video/plano-36-flotas-retimed.mp4",
      "in_seconds": 304.64,
      "out_seconds": 311.72,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "37",
      "source": "video008/images/37.png",
      "in_seconds": 311.72,
      "out_seconds": 320.77,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "38",
      "source": "video008/images/38.png",
      "in_seconds": 320.77,
      "out_seconds": 331.31,
      "source_in_seconds": 0,
      "animation": "drift-down",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "39",
      "source": "video008/images/39.png",
      "in_seconds": 331.31,
      "out_seconds": 335.67,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "40",
      "source": "video008/video/plano-40-rus-941-retimed.mp4",
      "in_seconds": 335.67,
      "out_seconds": 345.87,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "41",
      "source": "video008/images/41.png",
      "in_seconds": 345.87,
      "out_seconds": 354.31,
      "source_in_seconds": 0,
      "animation": "pan-right",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "42a",
      "source": "video008/images/42a.png",
      "in_seconds": 354.31,
      "out_seconds": 358.5,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "42b",
      "source": "video008/images/42b.png",
      "in_seconds": 358.5,
      "out_seconds": 363.23,
      "source_in_seconds": 0,
      "animation": "pan-left",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "43a",
      "source": "video008/images/43a.png",
      "in_seconds": 363.23,
      "out_seconds": 366.5,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "43b",
      "source": "video008/video/plano-43b-cuatro-sifones-retimed.mp4",
      "in_seconds": 366.5,
      "out_seconds": 370.34,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "44a",
      "source": "video008/images/44a.png",
      "in_seconds": 370.34,
      "out_seconds": 373.5,
      "source_in_seconds": 0,
      "animation": "drift-down",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "44b",
      "source": "video008/images/44b.png",
      "in_seconds": 373.5,
      "out_seconds": 377.48,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "45",
      "source": "video008/images/45.png",
      "in_seconds": 377.48,
      "out_seconds": 386.52,
      "source_in_seconds": 0,
      "animation": "pan-right",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "46a",
      "source": "video008/video/plano-46a-campana-941-retimed.mp4",
      "in_seconds": 386.52,
      "out_seconds": 390.0,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "46b",
      "source": "video008/images/46b.png",
      "in_seconds": 390.0,
      "out_seconds": 394.89,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "47",
      "source": "video008/images/47.png",
      "in_seconds": 394.89,
      "out_seconds": 404.45,
      "source_in_seconds": 0,
      "animation": "pan-left",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "48",
      "source": "video008/images/48.png",
      "in_seconds": 404.45,
      "out_seconds": 413.73,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "49",
      "source": "video008/video/plano-49-viento-retimed.mp4",
      "in_seconds": 413.73,
      "out_seconds": 418.51,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "50",
      "source": "video008/video/plano-50-alcance-retimed.mp4",
      "in_seconds": 418.51,
      "out_seconds": 426.33,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "51",
      "source": "video008/video/plano-51-flancos-retimed.mp4",
      "in_seconds": 426.33,
      "out_seconds": 435.26,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "52",
      "source": "video008/images/52.png",
      "in_seconds": 435.26,
      "out_seconds": 441.42,
      "source_in_seconds": 0,
      "animation": "drift-down",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "53",
      "source": "video008/video/plano-53-creta-sicilia-tasos-retimed.mp4",
      "in_seconds": 441.42,
      "out_seconds": 457.06,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "54",
      "source": "video008/images/54.png",
      "in_seconds": 457.06,
      "out_seconds": 462.54,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "55",
      "source": "video008/video/plano-55-dos-explicaciones-retimed.mp4",
      "in_seconds": 462.54,
      "out_seconds": 470.2,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "56",
      "source": "video008/video/plano-56-riesgo-retimed.mp4",
      "in_seconds": 470.2,
      "out_seconds": 480.07,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "57",
      "source": "video008/images/57.png",
      "in_seconds": 480.07,
      "out_seconds": 489.24,
      "source_in_seconds": 0,
      "animation": "pan-right",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "58",
      "source": "video008/images/58.png",
      "in_seconds": 489.24,
      "out_seconds": 499.06,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "59",
      "source": "video008/images/59.png",
      "in_seconds": 499.06,
      "out_seconds": 510.46,
      "source_in_seconds": 0,
      "animation": "pan-left",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "60",
      "source": "video008/images/60.png",
      "in_seconds": 510.46,
      "out_seconds": 515.37,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "61a",
      "source": "video008/video/plano-61a-roland-retimed.mp4",
      "in_seconds": 515.37,
      "out_seconds": 519.59,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "61b",
      "source": "video008/video/plano-61b-cadena-rota-retimed.mp4",
      "in_seconds": 519.59,
      "out_seconds": 532.83,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "62a",
      "source": "video008/video/plano-62a-petroleo-retimed.mp4",
      "in_seconds": 532.83,
      "out_seconds": 538.0,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "62b",
      "source": "video008/images/62b.png",
      "in_seconds": 538.0,
      "out_seconds": 544.23,
      "source_in_seconds": 0,
      "animation": "drift-down",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "63",
      "source": "video008/images/63.png",
      "in_seconds": 544.23,
      "out_seconds": 550.04,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "64",
      "source": "video008/video/plano-64-quimica-retimed.mp4",
      "in_seconds": 550.04,
      "out_seconds": 558.26,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "65",
      "source": "video008/images/65.png",
      "in_seconds": 558.26,
      "out_seconds": 567.02,
      "source_in_seconds": 0,
      "animation": "pan-right",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "66",
      "source": "video008/video/plano-66-proporciones-retimed.mp4",
      "in_seconds": 567.02,
      "out_seconds": 571.78,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "67",
      "source": "video008/video/plano-67-salitre-retimed.mp4",
      "in_seconds": 571.78,
      "out_seconds": 583.63,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "68",
      "source": "video008/images/68.png",
      "in_seconds": 583.63,
      "out_seconds": 591.41,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "69",
      "source": "video008/images/69.png",
      "in_seconds": 591.41,
      "out_seconds": 598.0,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "70",
      "source": "video008/images/4b.png",
      "in_seconds": 598.0,
      "out_seconds": 615.192,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5
    },
    {
      "id": "end-black",
      "source": "video008/images/black.png",
      "in_seconds": 615.192,
      "out_seconds": 615.692,
      "source_in_seconds": 0,
      "animation": "static",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    }
  ],
  "overlays": [
    {
      "type": "rotulo",
      "in_seconds": 20.76,
      "out_seconds": 23.2,
      "text": "Crónica de Néstor",
      "variant": "label",
      "position": "top-left"
    },
    {
      "type": "monumental_title",
      "in_seconds": 34.54,
      "out_seconds": 39.073,
      "text": "EL FUEGO GRIEGO",
      "position": "center",
      "background": false
    },
    {
      "type": "rotulo",
      "in_seconds": 81.8,
      "out_seconds": 85.46,
      "text": "Teófanes, Cronografía",
      "variant": "label",
      "position": "top-left"
    },
    {
      "type": "photo_insert",
      "in_seconds": 166.2,
      "out_seconds": 171.65,
      "source": "video008/images/21b_Skylitzes-Madrid-fol34v_PD.jpg",
      "caption": "Skylitzes de Madrid, s. XII",
      "attribution": "Biblioteca Nacional de España · ilustra un episodio del s. IX",
      "position": "right",
      "width": 820
    },
    {
      "type": "list_reveal",
      "in_seconds": 178.45,
      "out_seconds": 186.88,
      "position": "left",
      "items": [
        {
          "text": "Vinagre",
          "at_seconds": 3.5
        },
        {
          "text": "Arena",
          "at_seconds": 4.3
        },
        {
          "text": "Pieles empapadas",
          "at_seconds": 5.0
        },
        {
          "text": "Orina",
          "at_seconds": 6.8
        }
      ]
    },
    {
      "type": "rotulo",
      "in_seconds": 274.36,
      "out_seconds": 288.96,
      "text": "Leyenda oficial",
      "variant": "label",
      "position": "top-left",
      "subtitle": "De administrando imperio, cap. 13"
    },
    {
      "type": "rotulo",
      "in_seconds": 346.27,
      "out_seconds": 354.11,
      "text": "Liudprando de Cremona",
      "variant": "label",
      "position": "top-left",
      "subtitle": "Antapodosis"
    },
    {
      "type": "rotulo",
      "in_seconds": 404.85,
      "out_seconds": 413.53,
      "text": "«…calmó los vientos y las olas, porque de otro modo a los griegos les habría costado lanzar su fuego»",
      "variant": "label",
      "position": "bottom-center",
      "subtitle": "Liudprando de Cremona, Antapodosis V.15"
    },
    {
      "type": "rotulo",
      "in_seconds": 558.66,
      "out_seconds": 566.82,
      "text": "Ana Comnena",
      "variant": "label",
      "position": "top-left",
      "subtitle": "Alexíada (s. XII)"
    },
    {
      "type": "rotulo",
      "in_seconds": 598.0,
      "out_seconds": 615.192,
      "text": "SUSCRÍBETE",
      "variant": "cta",
      "position": "top-left",
      "iconSrc": "video008/images/isotipo.png"
    },
    {
      "type": "rotulo",
      "in_seconds": 606.02,
      "out_seconds": 615.192,
      "text": "¿Repartir los sifones entre las provincias o guardarlos en la capital?",
      "variant": "label",
      "position": "bottom-center"
    }
  ],
  "captions": [],
  "audio": {
    "narration": {
      "src": "video008/audio/narration-final.mp3",
      "volume": 1.0
    },
    "sfx": {
      "src": "video008/audio/sfx-final.mp3",
      "volume": 1.0
    },
    "music": {
      "src": "video008/audio/music-final.mp3",
      "volume": 1.0
    }
  },
  "themeConfig": {
    "backgroundColor": "#000000"
  }
};
