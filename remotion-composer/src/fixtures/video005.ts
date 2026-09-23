import { ExplainerProps } from "../Explainer";

// Video 005 -- "El disco de Nebra". Fase 8 (Montaje). Fade a negro real
// (themeConfig #000000), cortes cuantizados a fotograma exacto, SFX y
// musica a -21 dBFS cada uno (20 dB por debajo del pico de narracion a
// -1 dBFS), sin el ambiente de hojas/bosque en el Hook, intro de canal con
// su propio audio, clip 11-14 retimado, musica de Consecuencias sustituida,
// rotulos arriba (no tapados por subtitulos), rotulo 20a y sfx 21c
// eliminados, polaroids reales (Gebhard/Krause/Pernicka, licencia en cada
// overlay) sin foto de Hansen (no hay ninguna con licencia libre). Cierre
// sin wordmark ARTILUGIO. brandBackground quitado -- causaba que el fondo
// de marca (engranajes) se viera tanto en el hueco de 1 frame entre cortes
// como en el fade final a negro (el fade revela lo que hay detras del
// corte, y brandBackground estaba detras de todo); sin el, el fade termina
// en negro real y coincide con el patron de video004.ts, que tampoco lo usa.
// Planos 10b/35a: fondo Ref B (rótulos en inglés + typo "Crecenc' moon",
// nunca debía insertarse en el vídeo final, CLAUDE.md §27 Fase 6.1)
// sustituido. 10b usa un diagrama HyperFrames propio del disco (mismo
// estilo que los otros 13 planos HyperFrames de este vídeo -- AZUL_TECNICO/
// BRONCE_FORJADO de mg_style.py/ListReveal.tsx -- con la geometría real
// tomada de Ref A: disco solar/lunar, luna creciente, Pléyades, estrellas
// sueltas, un solo arco de horizonte superviviente, barca solar estriada.
// Fuente: MotionGraphics/_source/hyperframes/plano-10b-diagrama-disco.html.
// 35a reutiliza en su lugar la imagen 2 (Hook -- disco examinado en la
// habitación del hotel de Basilea, con lupa), a petición de Víctor (15 sept
// 2026) -- cierre en bucle con el arranque del vídeo, y el diagrama del
// disco queda exclusivo de 10b (de ahí el nombre de archivo sin "35a").
// 10b ya tenía su list_reveal correcto; a 35a se le añadió el list_reveal
// que faltaba (categorías del canal en vez de las siluetas de otros
// Artilugios del guion técnico 027, que habrían requerido generar assets
// nuevos). Pendiente de aprobación final de Víctor.
export const video005Fixture: ExplainerProps = {
  "cuts": [
    {
      "id": "1a",
      "source": "video005/images/1a.png",
      "in_seconds": 0.0,
      "out_seconds": 9.533333,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "fade_black",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "1b",
      "source": "video005/images/1b.png",
      "in_seconds": 9.533333,
      "out_seconds": 14.9,
      "source_in_seconds": 0,
      "animation": "pan-right",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "2",
      "source": "video005/images/2.png",
      "in_seconds": 14.9,
      "out_seconds": 25.933333,
      "source_in_seconds": 0,
      "animation": "drift-up",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "3",
      "source": "video005/images/3.png",
      "in_seconds": 25.933333,
      "out_seconds": 35.366667,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "intro",
      "source": "video005/video/Artilugio_Intro.mp4",
      "in_seconds": 35.366667,
      "out_seconds": 40.366667,
      "source_in_seconds": 0,
      "muted": true,
      "audioSrc": "video005/audio/intro-sfx.mp3",
      "audioVolume": 1.0,
      "transition_in": "fade_black",
      "transition_out": "fade_black",
      "transition_duration": 0.5
    },
    {
      "id": "4a",
      "source": "video005/images/4a.png",
      "in_seconds": 40.366667,
      "out_seconds": 50.366667,
      "source_in_seconds": 0,
      "animation": "pan-left",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "4b",
      "source": "video005/video/plano-4b-ciclos-calendario.mp4",
      "in_seconds": 50.366667,
      "out_seconds": 67.4,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "5a",
      "source": "video005/images/5a.png",
      "in_seconds": 67.4,
      "out_seconds": 69.4,
      "source_in_seconds": 0,
      "animation": "static",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "5b",
      "source": "video005/images/5b.png",
      "in_seconds": 69.4,
      "out_seconds": 87.533333,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "6",
      "source": "video005/images/6.png",
      "in_seconds": 87.533333,
      "out_seconds": 90.666667,
      "source_in_seconds": 0,
      "animation": "pan-right",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "7a",
      "source": "video005/video/plano-7a-disco-dimensiones.mp4",
      "in_seconds": 90.666667,
      "out_seconds": 97.866667,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "7b",
      "source": "video005/video/plano-7b-corte-transversal-grosor.mp4",
      "in_seconds": 97.866667,
      "out_seconds": 101.266667,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "8a-8c",
      "source": "video005/video/plano-8a8b8c-mapa-origen-materiales.mp4",
      "in_seconds": 101.266667,
      "out_seconds": 128.533333,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "9",
      "source": "video005/images/9.png",
      "in_seconds": 128.533333,
      "out_seconds": 131.666667,
      "source_in_seconds": 0,
      "animation": "drift-up",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "10a",
      "source": "video005/images/10a.png",
      "in_seconds": 131.666667,
      "out_seconds": 143.733333,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "10b",
      "source": "video005/video/plano-10b-diagrama-disco.mp4",
      "in_seconds": 143.733333,
      "out_seconds": 152.433333,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "11-14",
      "source": "video005/video/plano-11-14-objeto-fases-construccion-retimed.mp4",
      "in_seconds": 152.433333,
      "out_seconds": 198.6,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "15a",
      "source": "video005/images/15a.png",
      "in_seconds": 198.6,
      "out_seconds": 213.733333,
      "source_in_seconds": 0,
      "animation": "pan-left",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "15b",
      "source": "video005/video/plano-15b-no-celta-no-vikingo.mp4",
      "in_seconds": 213.733333,
      "out_seconds": 220.533333,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "15c",
      "source": "video005/images/15c.png",
      "in_seconds": 220.533333,
      "out_seconds": 233.4,
      "source_in_seconds": 0,
      "animation": "static",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "16",
      "source": "video005/images/16.png",
      "in_seconds": 233.4,
      "out_seconds": 239.8,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "17",
      "source": "video005/images/17.png",
      "in_seconds": 239.8,
      "out_seconds": 253.933333,
      "source_in_seconds": 0,
      "animation": "pan-right",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "18a",
      "source": "video005/images/18a.png",
      "in_seconds": 253.933333,
      "out_seconds": 258.866667,
      "source_in_seconds": 0,
      "animation": "drift-up",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "18b",
      "source": "video005/images/18b.png",
      "in_seconds": 258.866667,
      "out_seconds": 263.766667,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "18c",
      "source": "video005/images/18c.png",
      "in_seconds": 263.766667,
      "out_seconds": 274.5,
      "source_in_seconds": 0,
      "animation": "pan-left",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "19",
      "source": "video005/images/19.png",
      "in_seconds": 274.5,
      "out_seconds": 285.133333,
      "source_in_seconds": 0,
      "animation": "static",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "20a",
      "source": "video005/images/20a.png",
      "in_seconds": 285.133333,
      "out_seconds": 295.3,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "20b",
      "source": "video005/images/20b.png",
      "in_seconds": 295.3,
      "out_seconds": 303.466667,
      "source_in_seconds": 0,
      "animation": "pan-right",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "20c",
      "source": "video005/images/20c.png",
      "in_seconds": 303.466667,
      "out_seconds": 311.666667,
      "source_in_seconds": 0,
      "animation": "drift-up",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "20d",
      "source": "video005/video/plano-20d-comparacion-suelo.mp4",
      "in_seconds": 311.666667,
      "out_seconds": 318.366667,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "21a",
      "source": "video005/images/21a.png",
      "in_seconds": 318.366667,
      "out_seconds": 324.533333,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "21b",
      "source": "video005/video/plano-21b-corte-enterrado-corrosion.mp4",
      "in_seconds": 324.533333,
      "out_seconds": 334.866667,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "21c",
      "source": "video005/images/21c.png",
      "in_seconds": 334.866667,
      "out_seconds": 347.633333,
      "source_in_seconds": 0,
      "animation": "pan-left",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "22",
      "source": "video005/video/plano-22-timeline-2002-2020.mp4",
      "in_seconds": 347.633333,
      "out_seconds": 352.766667,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "23",
      "source": "video005/images/23.png",
      "in_seconds": 352.766667,
      "out_seconds": 375.233333,
      "source_in_seconds": 0,
      "animation": "static",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "24a",
      "source": "video005/images/24a.png",
      "in_seconds": 375.233333,
      "out_seconds": 394.866667,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "24b",
      "source": "video005/video/plano-24b-firma-quimica.mp4",
      "in_seconds": 394.866667,
      "out_seconds": 408.066667,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "25",
      "source": "video005/video/plano-25-metodo-cientifico.mp4",
      "in_seconds": 408.066667,
      "out_seconds": 429.5,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "26",
      "source": "video005/images/26.png",
      "in_seconds": 429.5,
      "out_seconds": 436.866667,
      "source_in_seconds": 0,
      "animation": "pan-right",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "27a-27b",
      "source": "video005/video/plano-27a27b-angulo-horizonte.mp4",
      "in_seconds": 436.866667,
      "out_seconds": 465.2,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "28a",
      "source": "video005/images/28a.png",
      "in_seconds": 465.2,
      "out_seconds": 468.9,
      "source_in_seconds": 0,
      "animation": "drift-up",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "28b",
      "source": "video005/video/plano-28b-mes-intercalar.mp4",
      "in_seconds": 468.9,
      "out_seconds": 484.166667,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "29a",
      "source": "video005/images/29a.png",
      "in_seconds": 484.166667,
      "out_seconds": 496.133333,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "29b",
      "source": "video005/video/plano-29b-disposicion-irregular.mp4",
      "in_seconds": 496.133333,
      "out_seconds": 512.9,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "30",
      "source": "video005/video/plano-30-tres-hipotesis.mp4",
      "in_seconds": 512.9,
      "out_seconds": 516.266667,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "31",
      "source": "video005/images/31.png",
      "in_seconds": 516.266667,
      "out_seconds": 520.0,
      "source_in_seconds": 0,
      "animation": "pan-left",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "32",
      "source": "video005/video/plano-32-legado-recap-fases.mp4",
      "in_seconds": 520.0,
      "out_seconds": 538.933333,
      "source_in_seconds": 0,
      "muted": true,
      "videoFit": "contain",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "33",
      "source": "video005/images/33.png",
      "in_seconds": 538.933333,
      "out_seconds": 559.1,
      "source_in_seconds": 0,
      "animation": "static",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "34a",
      "source": "video005/images/34a.png",
      "in_seconds": 559.1,
      "out_seconds": 567.2,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "34b",
      "source": "video005/images/34b.png",
      "in_seconds": 567.2,
      "out_seconds": 575.333333,
      "source_in_seconds": 0,
      "animation": "pan-right",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "34c",
      "source": "video005/images/34c.png",
      "in_seconds": 575.333333,
      "out_seconds": 580.033333,
      "source_in_seconds": 0,
      "animation": "drift-up",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "34d",
      "source": "video005/images/34d.png",
      "in_seconds": 580.033333,
      "out_seconds": 593.166667,
      "source_in_seconds": 0,
      "animation": "zoom-out",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "35a",
      "source": "video005/images/2.png",
      "in_seconds": 593.166667,
      "out_seconds": 605.533333,
      "source_in_seconds": 0,
      "animation": "zoom-in",
      "transition_in": "cut",
      "transition_out": "cut",
      "transition_duration": 0.5
    },
    {
      "id": "35b",
      "source": "video005/images/34d.png",
      "in_seconds": 605.533333,
      "out_seconds": 616.866667,
      "source_in_seconds": 0,
      "animation": "pan-left",
      "transition_in": "cut",
      "transition_out": "fade_black",
      "transition_duration": 0.5
    },
    {
      "id": "end-black",
      "source": "video005/images/black.png",
      "in_seconds": 616.866667,
      "out_seconds": 617.367,
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
      "in_seconds": 239.8,
      "out_seconds": 253.933333,
      "text": "4 de julio de 1999",
      "variant": "label",
      "position": "top-left"
    },
    {
      "type": "rotulo",
      "in_seconds": 253.933333,
      "out_seconds": 258.866667,
      "text": "~3 años en el mercado negro",
      "variant": "label",
      "position": "top-left"
    },
    {
      "type": "rotulo",
      "in_seconds": 263.766667,
      "out_seconds": 274.5,
      "text": "23 de febrero de 2002 - Basilea",
      "variant": "label",
      "position": "top-left"
    },
    {
      "type": "rotulo",
      "in_seconds": 334.866667,
      "out_seconds": 347.633333,
      "text": "Sin pátina = daño reciente (1999)",
      "variant": "label",
      "position": "top-left"
    },
    {
      "type": "rotulo",
      "in_seconds": 352.766667,
      "out_seconds": 375.233333,
      "text": "¿Edad del Hierro?",
      "variant": "label",
      "position": "top-left"
    },
    {
      "type": "rotulo",
      "in_seconds": 375.233333,
      "out_seconds": 394.866667,
      "text": "Equipo de 13 científicos - Ernst Pernicka",
      "variant": "label",
      "position": "top-left"
    },
    {
      "type": "rotulo",
      "in_seconds": 465.2,
      "out_seconds": 468.9,
      "text": "Rahlf Hansen",
      "variant": "label",
      "position": "top-left"
    },
    {
      "type": "rotulo",
      "in_seconds": 484.166667,
      "out_seconds": 496.133333,
      "text": "Emília Pásztor - Curt Roslund",
      "variant": "label",
      "position": "top-left"
    },
    {
      "type": "rotulo",
      "in_seconds": 227.61,
      "out_seconds": 233.4,
      "text": "Datación C-14: 1600-1500 a.C.",
      "variant": "label",
      "position": "top-left"
    },
    {
      "type": "list_reveal",
      "in_seconds": 143.733333,
      "out_seconds": 152.433333,
      "items": [
        {
          "text": "1. Disco original",
          "at_seconds": 0.5
        },
        {
          "text": "2. Arcos de horizonte",
          "at_seconds": 1.8
        },
        {
          "text": "3. Barca solar",
          "at_seconds": 3.1
        },
        {
          "text": "4. Perforaciones",
          "at_seconds": 4.4
        },
        {
          "text": "5. Arco arrancado",
          "at_seconds": 5.7
        }
      ],
      "position": "left"
    },
    {
      "type": "list_reveal",
      "in_seconds": 593.166667,
      "out_seconds": 605.533333,
      "items": [
        {
          "text": "Armas históricas",
          "at_seconds": 0.5
        },
        {
          "text": "Máquinas de guerra",
          "at_seconds": 2.2
        },
        {
          "text": "Arqueología",
          "at_seconds": 3.9
        },
        {
          "text": "Tecnología militar",
          "at_seconds": 5.6
        }
      ],
      "position": "left"
    },
    {
      "type": "rotulo",
      "in_seconds": 605.533333,
      "out_seconds": 616.866667,
      "text": "SUSCRÍBETE",
      "variant": "cta",
      "iconSrc": "video005/images/isotipo.png",
      "position": "top-left"
    },
    {
      "type": "rotulo",
      "in_seconds": 605.533333,
      "out_seconds": 616.866667,
      "text": "¿Cuál de las 3 hipótesis te parece más convincente?",
      "variant": "label",
      "position": "center"
    },
    {
      "type": "photo_insert",
      "in_seconds": 354.56,
      "out_seconds": 365.12,
      "source": "video005/images/rupert-gebhard.jpg",
      "caption": "Rupert Gebhard",
      "attribution": "Didi43, CC BY-SA 4.0, Wikimedia Commons",
      "position": "left"
    },
    {
      "type": "photo_insert",
      "in_seconds": 355.91,
      "out_seconds": 365.12,
      "source": "video005/images/rudiger-krause.jpg",
      "caption": "Rüdiger Krause",
      "attribution": "Uwe Detmar, CC BY 4.0, Wikimedia Commons",
      "position": "right"
    },
    {
      "type": "photo_insert",
      "in_seconds": 380.73,
      "out_seconds": 388.0,
      "source": "video005/images/ernst-pernicka.jpg",
      "caption": "Ernst Pernicka",
      "attribution": "Oliver Fink, CC BY-SA 4.0, Wikimedia Commons",
      "position": "left"
    }
  ],
  "captions": [],
  "audio": {
    "narration": {
      "src": "video005/audio/narration-final.mp3",
      "volume": 1.0
    },
    "sfx": {
      "src": "video005/audio/sfx-final.mp3",
      "volume": 1.0
    },
    "music": {
      "src": "video005/audio/music-final.mp3",
      "volume": 1.0
    }
  },
  "themeConfig": {
    "backgroundColor": "#000000"
  }
};
