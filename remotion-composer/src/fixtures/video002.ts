import { ExplainerProps } from "../Explainer";

// Video 002 — "El arco compuesto que convirtio a los mongoles en un imperio".
// Baked-in defaultProps for a dedicated composition (see Root.tsx "Video002") so a
// render triggered from the Studio GUI always resolves the real cuts/audio, instead
// of falling back to the generic Explainer composition defaultProps ({cuts: []}),
// which is what produced "durationInFrames evaluated to be 1800" on render.
export const video002Fixture: ExplainerProps = {
  "cuts": [
    {
      "id": "1a",
      "source": "video002/images/1a.png",
      "in_seconds": 0.0,
      "out_seconds": 12.0,
      "source_in_seconds": 0,
      "transition_in": "fade_black",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "drift-up"
    },
    {
      "id": "1b",
      "source": "video002/images/1b.png",
      "in_seconds": 12.0,
      "out_seconds": 28.921,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5,
      "animation": "zoom-in"
    },
    {
      "id": "intro",
      "source": "video002/video/Artilugio_Intro.mp4",
      "in_seconds": 28.921,
      "out_seconds": 34.42,
      "source_in_seconds": 0,
      "transition_in": "fade_black",
      "transition_out": "fade_black",
      "transition_duration": 0.5
    },
    {
      "id": "2a",
      "source": "video002/images/2a.png",
      "in_seconds": 34.42,
      "out_seconds": 39.74,
      "source_in_seconds": 0,
      "transition_in": "fade_black",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "pan-right"
    },
    {
      "id": "2b",
      "source": "video002/images/2b.png",
      "in_seconds": 39.74,
      "out_seconds": 44.9,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "pan-left"
    },
    {
      "id": "2c",
      "source": "video002/images/2c.png",
      "in_seconds": 44.9,
      "out_seconds": 48.3,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "static"
    },
    {
      "id": "3a",
      "source": "video002/images/3a.png",
      "in_seconds": 48.3,
      "out_seconds": 51.14,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "static"
    },
    {
      "id": "3b",
      "source": "video002/images/3b.png",
      "in_seconds": 51.14,
      "out_seconds": 57.52,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in"
    },
    {
      "id": "3c",
      "source": "video002/images/3c.png",
      "in_seconds": 57.52,
      "out_seconds": 63.06,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in"
    },
    {
      "id": "3d",
      "source": "video002/images/3d.png",
      "in_seconds": 63.06,
      "out_seconds": 69.41,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "pan-left"
    },
    {
      "id": "4",
      "source": "video002/images/4.png",
      "in_seconds": 69.41,
      "out_seconds": 79.18,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5,
      "animation": "static"
    },
    {
      "id": "5",
      "source": "video002/video/plano-5-contorno.mp4",
      "in_seconds": 79.18,
      "out_seconds": 86.5,
      "source_in_seconds": 0,
      "transition_in": "fade_black",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "vignette": false
    },
    {
      "id": "6a",
      "source": "video002/video/plano-6a-nucleo.mp4",
      "in_seconds": 86.5,
      "out_seconds": 92.28,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "vignette": false
    },
    {
      "id": "6b",
      "source": "video002/video/plano-6b-asta-compresion.mp4",
      "in_seconds": 92.28,
      "out_seconds": 99.26,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "vignette": false
    },
    {
      "id": "6c",
      "source": "video002/video/plano-6c-tendon-tension.mp4",
      "in_seconds": 99.26,
      "out_seconds": 103.64,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "vignette": false
    },
    {
      "id": "6d",
      "source": "video002/video/plano-6d-cola-curado.mp4",
      "in_seconds": 103.64,
      "out_seconds": 115.08,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "vignette": false
    },
    {
      "id": "7a",
      "source": "video002/video/plano-7a-energia.mp4",
      "in_seconds": 115.08,
      "out_seconds": 123.18,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "vignette": false
    },
    {
      "id": "7b",
      "source": "video002/video/plano-7b-muelle.mp4",
      "in_seconds": 123.18,
      "out_seconds": 133.45,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "vignette": false
    },
    {
      "id": "8a",
      "source": "video002/video/plano-8a-sin-placas.mp4",
      "in_seconds": 133.45,
      "out_seconds": 145.41,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "vignette": false
    },
    {
      "id": "8b",
      "source": "video002/video/plano-8b-arco-huno.mp4",
      "in_seconds": 145.41,
      "out_seconds": 150.57,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "vignette": false
    },
    {
      "id": "8c",
      "source": "video002/video/plano-8c-comparacion.mp4",
      "in_seconds": 150.57,
      "out_seconds": 158.71,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "vignette": false
    },
    {
      "id": "8d",
      "source": "video002/images/8d.png",
      "in_seconds": 158.71,
      "out_seconds": 165.29,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in"
    },
    {
      "id": "9a",
      "source": "video002/video/plano-9a-escala-vacia.mp4",
      "in_seconds": 165.29,
      "out_seconds": 170.69,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "vignette": false
    },
    {
      "id": "9b",
      "source": "video002/video/plano-9b-cifra-166.mp4",
      "in_seconds": 170.69,
      "out_seconds": 179.99,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "vignette": false
    },
    {
      "id": "9c",
      "source": "video002/video/plano-9c-horquilla.mp4",
      "in_seconds": 179.99,
      "out_seconds": 188.59,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "vignette": false
    },
    {
      "id": "9d",
      "source": "video002/video/plano-9d-extremos.mp4",
      "in_seconds": 188.59,
      "out_seconds": 192.31,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5,
      "vignette": false
    },
    {
      "id": "10a",
      "source": "video002/images/10a.png",
      "in_seconds": 192.31,
      "out_seconds": 198.23,
      "source_in_seconds": 0,
      "transition_in": "fade_black",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "drift-up"
    },
    {
      "id": "10b",
      "source": "video002/images/10b.png",
      "in_seconds": 198.23,
      "out_seconds": 209.05,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in"
    },
    {
      "id": "10c",
      "source": "video002/images/10c.png",
      "in_seconds": 209.05,
      "out_seconds": 218.62,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in"
    },
    {
      "id": "11",
      "source": "video002/images/11.png",
      "in_seconds": 218.62,
      "out_seconds": 233.56,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "static"
    },
    {
      "id": "12a",
      "source": "video002/images/12a.png",
      "in_seconds": 233.56,
      "out_seconds": 245.68,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in"
    },
    {
      "id": "12b",
      "source": "video002/images/12b.png",
      "in_seconds": 245.68,
      "out_seconds": 264.84,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "pan-right"
    },
    {
      "id": "13a",
      "source": "video002/images/13a.png",
      "in_seconds": 264.84,
      "out_seconds": 270.78,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "static"
    },
    {
      "id": "13b",
      "source": "video002/images/13b.png",
      "in_seconds": 270.78,
      "out_seconds": 283.49,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5,
      "animation": "zoom-in"
    },
    {
      "id": "14",
      "source": "video002/images/14.png",
      "in_seconds": 283.49,
      "out_seconds": 297.13,
      "source_in_seconds": 0,
      "transition_in": "fade_black",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "ken-burns"
    },
    {
      "id": "15a",
      "source": "video002/images/15a.png",
      "in_seconds": 297.13,
      "out_seconds": 303.35,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in"
    },
    {
      "id": "15b",
      "source": "video002/images/15b.png",
      "in_seconds": 303.35,
      "out_seconds": 312.97,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "pan-right"
    },
    {
      "id": "15c",
      "source": "video002/images/15c.png",
      "in_seconds": 312.97,
      "out_seconds": 325.24,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in"
    },
    {
      "id": "16a",
      "source": "video002/images/16a.png",
      "in_seconds": 325.24,
      "out_seconds": 333.14,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in"
    },
    {
      "id": "16b",
      "source": "video002/images/16b.png",
      "in_seconds": 333.14,
      "out_seconds": 340.64,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "static"
    },
    {
      "id": "16c",
      "source": "video002/images/16c.png",
      "in_seconds": 340.64,
      "out_seconds": 357.11,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "pan-left"
    },
    {
      "id": "17a",
      "source": "video002/images/17a.png",
      "in_seconds": 357.11,
      "out_seconds": 364.25,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "drift-up"
    },
    {
      "id": "17b",
      "source": "video002/video/plano-17b-piramide-decimal.mp4",
      "in_seconds": 364.25,
      "out_seconds": 371.29,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "vignette": false
    },
    {
      "id": "17c",
      "source": "video002/images/17c.png",
      "in_seconds": 371.29,
      "out_seconds": 378.19,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in"
    },
    {
      "id": "17d",
      "source": "video002/images/17d.png",
      "in_seconds": 378.19,
      "out_seconds": 386.45,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5,
      "animation": "pan-right"
    },
    {
      "id": "18a",
      "source": "video002/images/18a.png",
      "in_seconds": 386.45,
      "out_seconds": 389.69,
      "source_in_seconds": 0,
      "transition_in": "fade_black",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "static"
    },
    {
      "id": "18b",
      "source": "video002/images/18b.png",
      "in_seconds": 389.69,
      "out_seconds": 403.02,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "pan-left"
    },
    {
      "id": "19a",
      "source": "video002/images/19a.png",
      "in_seconds": 403.02,
      "out_seconds": 408.92,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in"
    },
    {
      "id": "19b",
      "source": "video002/images/19b.png",
      "in_seconds": 408.92,
      "out_seconds": 421.06,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "static"
    },
    {
      "id": "19c",
      "source": "video002/images/19c.png",
      "in_seconds": 421.06,
      "out_seconds": 427.22,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-in"
    },
    {
      "id": "19d",
      "source": "video002/images/19d.png",
      "in_seconds": 427.22,
      "out_seconds": 437.63,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "drift-up"
    },
    {
      "id": "20a",
      "source": "video002/images/20a.png",
      "in_seconds": 437.63,
      "out_seconds": 447.88,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "static"
    },
    {
      "id": "20b",
      "source": "video002/images/20b.png",
      "in_seconds": 447.88,
      "out_seconds": 454.27,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "static"
    },
    {
      "id": "20c",
      "source": "video002/images/20c.png",
      "in_seconds": 454.27,
      "out_seconds": 466.09,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "zoom-out"
    },
    {
      "id": "21",
      "source": "video002/images/21.png",
      "in_seconds": 466.09,
      "out_seconds": 476.97,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5,
      "animation": "static"
    },
    {
      "id": "22",
      "source": "video002/images/22.png",
      "in_seconds": 476.97,
      "out_seconds": 485.68,
      "source_in_seconds": 0,
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5,
      "animation": "static"
    }
  ],
  // Vídeo 002 ya publicado con estos 12 rótulos de corrección en pantalla
  // (estilo "Rotulo" descartado para vídeos futuros — no se reintroduce en
  // la base compartida). Se retiran de este fixture porque Explainer nunca
  // llegó a soportar type:"rotulo"; no afecta al vídeo ya publicado.
  "overlays": [],
  "captions": [],
  "audio": {
    "narration": {
      "src": "video002/audio/narration-final.mp3",
      "volume": 1.0
    },
    "sfx": {
      "src": "video002/audio/sfx-final.mp3",
      "volume": 1.0
    },
    "music": {
      "src": "video002/music/music-final.mp3",
      "volume": 1.0
    }
  }
};
