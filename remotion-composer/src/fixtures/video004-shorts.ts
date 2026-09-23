import { ExplainerProps } from "../Explainer";

// Shorts del video 004 - "La barca solar de Keops". Fuente: guion tecnico
// "10-Redes Sociales/004 - Shorts de la barca solar de Keops.md" (boveda
// Obsidian, proyecto YouTube_Faceless), sistema v2 (ver ese documento
// §"Hilo narrativo de la serie" y skills/meta/social-shorts-strategy.md en
// este repo) -- mismo criterio que video003-shorts.ts.
//
// Locuciones grabadas de cero por Victor en ElevenLabs (no un recorte del
// guion largo) y clasificadas el 6 sept 2026 desde 09-Almacen/00-Sin
// clasificar a Assets/Audio/004 - La barca solar de Keops/Shorts/. El CTA
// de cada short va integrado en la ultima frase de la locucion (igual que
// 003) -- por eso el cta_card de cierre NO lleva audioSrc propio, sigue
// sonando audio.narration por debajo.
//
// Banco de planos: reutilizado del video largo ya aprobado (fixtures/
// video004.ts) -- mismas imagenes/motion graphics. Grafismos nuevos
// (monumental_title, rotulo, cta_card) construidos con los componentes ya
// existentes del repo, no imagenes generadas por IA -- no pasan por la
// Fase 6 del pipeline (CLAUDE.md §27), primer corte para revisar en
// Remotion Studio antes de aprobar (CLAUDE.md §33).
//
// Simplificacion editorial respecto al banco de planos listado en la ficha
// de redes: el Short 4 no usa 6c (excavacion 2011-2021) ni 6i (laboratorio
// moderno) -- el motion graphic 6e-6g (invasion mineral + hongos) y el
// grafico 6f (cristalinidad) ya cargan el peso "cientifico" del bloque, y
// meter 6c/6i habria dejado cortes de menos de 2s cada uno. Pendiente de
// que Victor lo confirme al revisar en Studio.
//
// Transcripcion real de las 4 locuciones con faster-whisper (modelo small,
// es) el 6 sept 2026. Correcciones manuales sobre errores de reconocimiento
// evidentes (no de contenido): "Kamal el Mayag" -> "Kamal el-Mallakh"
// (short1), "a drede" -> "adrede" (short1), "Hagg...Mustafa" -> "Hag...
// Moustafa" (short3), "puzzle" -> "puzle" y "artilugio" -> "Artilugio"
// (short4, nombre de marca).
//
// Niveles de audio (6 sept 2026): mismo metodo y mismos targets de pico
// que video003-shorts.ts -- narracion -1.0dBFS, musica -25.0dBFS, SFX
// -15.0dBFS (medido con `ffmpeg -af volumedetect` sobre cada fichero de
// origen, ganancia lineal 10^((target-pico)/20) aplicada como `volume`).
//
// SFX (añadido 6 sept 2026, instruccion explicita de Victor): NO se
// reutiliza sfx-final.mp3 del video largo (esa pista esta pre-mezclada
// para los 58 cortes del largo, con offsets que no coinciden con los
// cortes de los shorts). En su lugar, cada plano reutilizado lleva su
// propio cue aislado de los 14 ya licenciados y descargados para el
// video 004 (Assets/Audio/004 - La barca solar de Keops/SFX/, Pixabay
// Content License, mismo catalogo documentado en la ficha maestra §5 y en
// 06-Recursos/Copyright y licencias.md). Motion graphics siguen sin SFX
// propio (CLAUDE.md §35.1). El plano 6h no tiene cue documentado en la
// ficha maestra para ningun plano equivalente -- se deja sin SFX en vez
// de inventar uno.
//
// Revision de niveles (6 sept 2026, instruccion explicita de Victor): los
// cues usados se pre-procesan uno a uno con ffmpeg en
// public/video004/shorts-audio/sfx/processed/<short>-sfx-<plano>.mp3 --
// no se referencia el .mp3 crudo de la carpeta sfx/ directamente:
//   1. Recorte a la duracion exacta del corte que ocupan. Los cues mas
//      cortos que esa duracion (03-ancient-wood-creak, 4.08s;
//      06-woodworking-mallet-tools, 3.22s) se repiten con
//      `ffmpeg -stream_loop` hasta cubrirla, en vez de dejar el resto del
//      plano en silencio.
//   2. Fade in/out de 1.0s (afade, ampliado 6 sept 2026 desde los 0.25s
//      iniciales a peticion de Victor) para que no corten en seco al
//      entrar o salir del plano.
//   3. Ganancia por RMS con tope, no por pico (revision 6 sept 2026,
//      segunda pasada): la primera version igualaba el PICO de cada cue a
//      -15.0dBFS, pero medir escena a escena (narracion/musica/sfx en el
//      punto medio de cada plano, ver 10-Redes Sociales/004 - Shorts de
//      la barca solar de Keops.md) revelo que cues de textura continua
//      (12-lab-electronic-hum, 13-museum-ambience-murmur, tambien
//      06-woodworking-mallet-tools) tienen mucho menos rango dinamico que
//      un crujido/creak, asi que igualar su pico dejaba su RMS (volumen
//      percibido) 10-20dB mas alto que el resto -- de ahi que "molestaran"
//      en varios planos aunque el pico estuviera correcto. Corregido
//      normalizando por RMS (mean_volume) con un tope de -38.0dBFS que
//      SOLO reduce (nunca sube un cue ya mas silencioso que el tope), y
//      volviendo a verificar con `ffmpeg -af volumedetect` sobre el tramo
//      ya recortado y con fade.
// audioVolume queda en 1.0 en cada cut: la ganancia ya esta horneada en
// el archivo procesado, no se aplica dos veces.
//
// SFX de agua hirviendo quitado del Short 3 (6 sept 2026, instruccion
// explicita de Victor: "molestan"): los planos 4m y 4m-reprise se quedan
// sin audioSrc -- 10-boiling-water-steam ya no se usa en esta miniserie.
//
// Musica de fondo cubriendo todo el short (6 sept 2026, instruccion
// explicita de Victor): 03-objeto.mp3 (short2), 04-historia.mp3 (short3)
// y 06-legado-cta.mp3 (short4) ya duran mas que el short correspondiente,
// sin cambios. 01-hook.mp3 (short1) dura solo 31.79s frente a los 46.76s
// del short1 -- en vez de recortar o dejar el tramo final sin musica, usa
// `loop: true` (ya soportado por Explainer.tsx via <Audio loop>): el
// envolvente de fade in/out se calcula sobre el frame absoluto de toda la
// composicion, no por cada vuelta del bucle, asi que solo hay un fade in
// al principio y uno al final, no un fundido audible en cada repeticion.

const THEME = {
  captionHighlightColor: "#D49A46",
  captionBackgroundColor: "rgba(14, 14, 17, 0.78)",
  captionFontSize: 54,
  captionFontFamily: "Montserrat",
  captionFontWeight: 800,
} as const;

const WATERMARK = "social-clips/source/logo-isotipo-full.png";


// ---------------------------------------------------------------------------
// Short 1 - Hook - "1.224 PIEZAS Y NINGUN PLANO"
// Locucion: short1-narration.mp3 (46.759125s, integra, incluye el CTA final).
// ---------------------------------------------------------------------------
export const short1HookFixture: ExplainerProps = {
  cuts: [
    // Bloque de piedra caliza levantandose sobre el foso sur (Ref C).
    {
      id: "1a",
      source: "video004/images/1a.png",
      in_seconds: 0.0,
      out_seconds: 12.1,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "zoom-in",
      transform: { scale: 1.14 },
      audioSrc: "video004/shorts-audio/sfx/processed/short1-sfx-1a.mp3",
      audioVolume: 1.0,
    },
    // "El olor del tiempo" -- reordenado fuera de su timeline original del guion largo.
    {
      id: "4g",
      source: "video004/images/4g.png",
      in_seconds: 12.1,
      out_seconds: 18.74,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "drift-up",
    },
    // Zoom al foso: piezas apiladas en 13 capas (Ref B).
    {
      id: "1b",
      source: "video004/images/1b.png",
      in_seconds: 18.74,
      out_seconds: 24.54,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "pan-left",
      audioSrc: "video004/shorts-audio/sfx/processed/short1-sfx-1b.mp3",
      audioVolume: 1.0,
    },
    {
      id: "1c",
      source: "video004/images/1c.png",
      in_seconds: 24.54,
      out_seconds: 32.04,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "ken-burns",
      audioSrc: "video004/shorts-audio/sfx/processed/short1-sfx-1c.mp3",
      audioVolume: 1.0,
    },
    // Disolucion de las piezas apiladas hacia la silueta completa de la barca (Ref B -> A).
    {
      id: "1d",
      source: "video004/images/1d.png",
      in_seconds: 32.04,
      out_seconds: 39.6,
      transition_in: "cut",
      transition_out: "fade_black",
      transition_duration: 0.5,
      animation: "zoom-out",
      transform: { scale: 1.14 },
      backgroundColor: "transparent",
    },
    {
      id: "cta",
      source: "",
      type: "cta_card",
      in_seconds: 39.6,
      out_seconds: 46.759125,
      text: "SIGUENOS PARA PARTE 2",
    }
  ],
  overlays: [
    {
      type: "monumental_title",
      in_seconds: 0,
      out_seconds: 3.0,
      position: "center",
      text: "1.224 PIEZAS\nNINGUN PLANO",
    },
    {
      type: "rotulo",
      in_seconds: 19.5,
      out_seconds: 24.5,
      position: "bottom-center",
      variant: "label",
      text: "1.224 PIEZAS",
      subtitle: "13 capas, 4.500 años",
    }
  ],
  watermarkSrc: WATERMARK,
  brandBackground: true,
  themeConfig: THEME,
  captions: [
    { word: "Un", startMs: 0, endMs: 180 },
    { word: "bloque", startMs: 180, endMs: 380 },
    { word: "de", startMs: 380, endMs: 600 },
    { word: "piedra", startMs: 600, endMs: 880 },
    { word: "caliza", startMs: 880, endMs: 1260 },
    { word: "de", startMs: 1260, endMs: 1400 },
    { word: "16", startMs: 1400, endMs: 1840 },
    { word: "toneladas", startMs: 1840, endMs: 2360 },
    { word: "llevaba", startMs: 2360, endMs: 3080 },
    { word: "sellando", startMs: 3080, endMs: 3540 },
    { word: "un", startMs: 3540, endMs: 3720 },
    { word: "foso", startMs: 3720, endMs: 3980 },
    { word: "junto", startMs: 3980, endMs: 4240 },
    { word: "a", startMs: 4240, endMs: 4460 },
    { word: "la", startMs: 4460, endMs: 4540 },
    { word: "gran", startMs: 4540, endMs: 4720 },
    { word: "pirámide", startMs: 4720, endMs: 5220 },
    { word: "desde", startMs: 5220, endMs: 5780 },
    { word: "hacía", startMs: 5780, endMs: 6120 },
    { word: "4.500", startMs: 6120, endMs: 7060 },
    { word: "años.", startMs: 7060, endMs: 7600 },
    { word: "En", startMs: 8260, endMs: 8440 },
    { word: "1954", startMs: 8440, endMs: 9180 },
    { word: "un", startMs: 9180, endMs: 10580 },
    { word: "equipo", startMs: 10580, endMs: 10800 },
    { word: "egipcio", startMs: 10800, endMs: 11240 },
    { word: "logró", startMs: 11240, endMs: 11560 },
    { word: "perforarlo.", startMs: 11560, endMs: 12100 },
    { word: "El", startMs: 12960, endMs: 13200 },
    { word: "arquitecto", startMs: 13200, endMs: 13700 },
    { word: "Kamal", startMs: 13700, endMs: 14060 },
    { word: "el-Mallakh", startMs: 14060, endMs: 14520 },
    { word: "resumió", startMs: 14520, endMs: 15140 },
    { word: "lo", startMs: 15140, endMs: 15300 },
    { word: "que", startMs: 15300, endMs: 15420 },
    { word: "salió", startMs: 15420, endMs: 15700 },
    { word: "por", startMs: 15700, endMs: 15900 },
    { word: "ese", startMs: 15900, endMs: 16060 },
    { word: "agujero", startMs: 16060, endMs: 16440 },
    { word: "en", startMs: 16440, endMs: 16580 },
    { word: "una", startMs: 16580, endMs: 16720 },
    { word: "frase,", startMs: 16720, endMs: 16940 },
    { word: "el", startMs: 17840, endMs: 17980 },
    { word: "olor", startMs: 17980, endMs: 18240 },
    { word: "del", startMs: 18240, endMs: 18420 },
    { word: "tiempo.", startMs: 18420, endMs: 18740 },
    { word: "Debajo", startMs: 19860, endMs: 20240 },
    { word: "había", startMs: 20240, endMs: 20460 },
    { word: "1.224", startMs: 20460, endMs: 21880 },
    { word: "piezas", startMs: 21880, endMs: 22320 },
    { word: "de", startMs: 22320, endMs: 22480 },
    { word: "madera", startMs: 22480, endMs: 22780 },
    { word: "ordenadas", startMs: 22780, endMs: 23600 },
    { word: "en", startMs: 23600, endMs: 23880 },
    { word: "13", startMs: 23880, endMs: 24040 },
    { word: "capas.", startMs: 24040, endMs: 24540 },
    { word: "Era", startMs: 25040, endMs: 25360 },
    { word: "un", startMs: 25360, endMs: 25540 },
    { word: "barco", startMs: 25540, endMs: 25820 },
    { word: "real,", startMs: 25820, endMs: 26160 },
    { word: "desarmado", startMs: 26420, endMs: 26860 },
    { word: "adrede", startMs: 26860, endMs: 27240 },
    { word: "para", startMs: 27240, endMs: 27420 },
    { word: "que", startMs: 27420, endMs: 27560 },
    { word: "su", startMs: 27560, endMs: 27700 },
    { word: "dueño", startMs: 27700, endMs: 28060 },
    { word: "lo", startMs: 28060, endMs: 28460 },
    { word: "reconstruyera", startMs: 28460, endMs: 29160 },
    { word: "en", startMs: 29160, endMs: 29280 },
    { word: "la", startMs: 29280, endMs: 29380 },
    { word: "otra", startMs: 29380, endMs: 29560 },
    { word: "vida.", startMs: 29560, endMs: 29800 },
    { word: "Pero", startMs: 30360, endMs: 30540 },
    { word: "nadie", startMs: 30540, endMs: 30740 },
    { word: "dejó", startMs: 30740, endMs: 31060 },
    { word: "escrito", startMs: 31060, endMs: 31380 },
    { word: "cómo", startMs: 31380, endMs: 31700 },
    { word: "hacerlo,", startMs: 31700, endMs: 32040 },
    { word: "ningún", startMs: 32540, endMs: 32860 },
    { word: "plano", startMs: 32860, endMs: 33260 },
    { word: "sobrevivió.", startMs: 33260, endMs: 33920 },
    { word: "El", startMs: 34460, endMs: 34640 },
    { word: "restaurador", startMs: 34640, endMs: 35160 },
    { word: "que", startMs: 35160, endMs: 35300 },
    { word: "se", startMs: 35300, endMs: 35400 },
    { word: "hizo", startMs: 35400, endMs: 35620 },
    { word: "cargo", startMs: 35620, endMs: 35900 },
    { word: "tardó", startMs: 35900, endMs: 36420 },
    { word: "15", startMs: 36420, endMs: 36680 },
    { word: "años", startMs: 36680, endMs: 37020 },
    { word: "en", startMs: 37020, endMs: 37200 },
    { word: "resolver", startMs: 37200, endMs: 37540 },
    { word: "ese", startMs: 37540, endMs: 37780 },
    { word: "rompecabezas", startMs: 37780, endMs: 38560 },
    { word: "pieza", startMs: 38560, endMs: 39140 },
    { word: "a", startMs: 39140, endMs: 39260 },
    { word: "pieza.", startMs: 39260, endMs: 39600 },
    { word: "Síguenos", startMs: 40340, endMs: 40860 },
    { word: "para", startMs: 40860, endMs: 41080 },
    { word: "la", startMs: 41080, endMs: 41200 },
    { word: "parte", startMs: 41200, endMs: 41400 },
    { word: "2.", startMs: 41400, endMs: 41700 },
    { word: "¿Cómo", startMs: 42220, endMs: 42380 },
    { word: "aguanta", startMs: 42380, endMs: 42840 },
    { word: "unido", startMs: 42840, endMs: 43160 },
    { word: "un", startMs: 43160, endMs: 43340 },
    { word: "barco", startMs: 43340, endMs: 43640 },
    { word: "de", startMs: 43640, endMs: 43740 },
    { word: "45", startMs: 43740, endMs: 44500 },
    { word: "toneladas", startMs: 44500, endMs: 45120 },
    { word: "sin", startMs: 45120, endMs: 45480 },
    { word: "un", startMs: 45480, endMs: 45680 },
    { word: "solo", startMs: 45680, endMs: 45980 },
    { word: "clavo?", startMs: 45980, endMs: 46360 },
  ],
  audio: {
    narration: { src: "video004/shorts-audio/short1-narration.mp3", volume: 1.4454 },
    music: {
      src: "video004/shorts-audio/short1-music.mp3",
      volume: 0.1622,
      fadeInSeconds: 0.5,
      fadeOutSeconds: 1.0,
      loop: true,
    },
  },
};


// ---------------------------------------------------------------------------
// Short 2 - Mecanismo - "UN BARCO COSIDO, NO CLAVADO"
// Locucion: short2-narration.mp3 (30.693875s, integra, incluye el CTA final).
// ---------------------------------------------------------------------------
export const short2MecanismoFixture: ExplainerProps = {
  cuts: [
    // Macro de veta de cedro.
    {
      id: "3b",
      source: "video004/images/3b.png",
      in_seconds: 0.0,
      out_seconds: 4.56,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "pan-edge-left-to-right",
      audioSrc: "video004/shorts-audio/sfx/processed/short2-sfx-3b.mp3",
      audioVolume: 1.0,
    },
    // Macro del casco cosido, cuerdas de esparto visibles (Ref E).
    {
      id: "3c",
      source: "video004/images/3c.png",
      in_seconds: 4.56,
      out_seconds: 9.56,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "ken-burns",
      audioSrc: "video004/shorts-audio/sfx/processed/short2-sfx-3c.mp3",
      audioVolume: 1.0,
    },
    // Motion graphic ManimCE (36.5s totales) -- entra en el minuto 16.5, saltando la talla de los agujeros en V (ya mostrada en 3c) para ir directo a hinchado/contraccion/sellado, que es lo que narra este tramo.
    {
      id: "3d3e3f",
      source: "video004/video/plano-3d3e3f-costura-hinchado-desmontable.mp4",
      in_seconds: 9.56,
      out_seconds: 21.02,
      source_in_seconds: 16.5,
      videoFit: "contain",
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
    },
    {
      id: "cta",
      source: "",
      type: "cta_card",
      in_seconds: 21.02,
      out_seconds: 30.693875,
      text: "SIGUENOS PARA PARTE 3",
    }
  ],
  overlays: [
    {
      type: "monumental_title",
      in_seconds: 0,
      out_seconds: 3.0,
      position: "center",
      text: "COSIDO\nNO CLAVADO",
    },
    {
      type: "rotulo",
      in_seconds: 10.5,
      out_seconds: 15.5,
      position: "bottom-center",
      variant: "label",
      text: "0 CLAVOS",
      subtitle: "45 toneladas, solo cuerda y madera",
    }
  ],
  watermarkSrc: WATERMARK,
  brandBackground: true,
  themeConfig: THEME,
  captions: [
    { word: "Nada", startMs: 0, endMs: 240 },
    { word: "en", startMs: 240, endMs: 440 },
    { word: "esta", startMs: 440, endMs: 620 },
    { word: "barca", startMs: 620, endMs: 920 },
    { word: "está", startMs: 920, endMs: 1140 },
    { word: "clavado", startMs: 1140, endMs: 1580 },
    { word: "ni", startMs: 1580, endMs: 1720 },
    { word: "soldado.", startMs: 1720, endMs: 2140 },
    { word: "Cada", startMs: 2600, endMs: 2780 },
    { word: "tabla", startMs: 2780, endMs: 3060 },
    { word: "de", startMs: 3060, endMs: 3180 },
    { word: "cedro", startMs: 3180, endMs: 3500 },
    { word: "se", startMs: 3500, endMs: 3920 },
    { word: "une", startMs: 3920, endMs: 4100 },
    { word: "a", startMs: 4100, endMs: 4220 },
    { word: "la", startMs: 4220, endMs: 4300 },
    { word: "siguiente", startMs: 4300, endMs: 4560 },
    { word: "con", startMs: 4560, endMs: 4920 },
    { word: "una", startMs: 4920, endMs: 5080 },
    { word: "gruesa", startMs: 5080, endMs: 5480 },
    { word: "cuerda", startMs: 5480, endMs: 5820 },
    { word: "de", startMs: 5820, endMs: 5940 },
    { word: "esparto", startMs: 5940, endMs: 6400 },
    { word: "pasada", startMs: 6400, endMs: 7040 },
    { word: "por", startMs: 7040, endMs: 7240 },
    { word: "agujeros", startMs: 7240, endMs: 7660 },
    { word: "que", startMs: 7660, endMs: 7880 },
    { word: "ni", startMs: 7880, endMs: 8020 },
    { word: "siquiera", startMs: 8020, endMs: 8300 },
    { word: "llegan", startMs: 8300, endMs: 8600 },
    { word: "a", startMs: 8600, endMs: 8700 },
    { word: "atravesar", startMs: 8700, endMs: 9140 },
    { word: "la", startMs: 9140, endMs: 9280 },
    { word: "madera.", startMs: 9280, endMs: 9560 },
    { word: "Las", startMs: 10120, endMs: 10320 },
    { word: "juntas", startMs: 10320, endMs: 10660 },
    { word: "quedan", startMs: 10660, endMs: 10940 },
    { word: "calafateadas", startMs: 10940, endMs: 11560 },
    { word: "con", startMs: 11560, endMs: 11800 },
    { word: "papiro.", startMs: 11800, endMs: 12120 },
    { word: "Cuanto", startMs: 12720, endMs: 12940 },
    { word: "más", startMs: 12940, endMs: 13160 },
    { word: "tiempo", startMs: 13160, endMs: 13380 },
    { word: "pasa", startMs: 13380, endMs: 13720 },
    { word: "el", startMs: 13720, endMs: 13900 },
    { word: "casco", startMs: 13900, endMs: 14200 },
    { word: "en", startMs: 14200, endMs: 14320 },
    { word: "el", startMs: 14320, endMs: 14420 },
    { word: "agua,", startMs: 14420, endMs: 14640 },
    { word: "mejor", startMs: 15100, endMs: 15400 },
    { word: "funciona.", startMs: 15400, endMs: 15900 },
    { word: "La", startMs: 16380, endMs: 16480 },
    { word: "madera", startMs: 16480, endMs: 16740 },
    { word: "se", startMs: 16740, endMs: 16920 },
    { word: "hincha,", startMs: 16920, endMs: 17220 },
    { word: "la", startMs: 17740, endMs: 17840 },
    { word: "cuerda", startMs: 17840, endMs: 18160 },
    { word: "se", startMs: 18160, endMs: 18300 },
    { word: "encoge", startMs: 18300, endMs: 18700 },
    { word: "y", startMs: 18700, endMs: 19400 },
    { word: "la", startMs: 19400, endMs: 19520 },
    { word: "unión", startMs: 19520, endMs: 19920 },
    { word: "aprieta", startMs: 19920, endMs: 20780 },
    { word: "sola.", startMs: 20780, endMs: 21020 },
    { word: "Síguenos", startMs: 21620, endMs: 22020 },
    { word: "para", startMs: 22020, endMs: 22260 },
    { word: "la", startMs: 22260, endMs: 22380 },
    { word: "parte", startMs: 22380, endMs: 22580 },
    { word: "3.", startMs: 22580, endMs: 22920 },
    { word: "¿Qué", startMs: 23540, endMs: 23620 },
    { word: "hicieron", startMs: 23620, endMs: 23980 },
    { word: "cuando", startMs: 23980, endMs: 24220 },
    { word: "esa", startMs: 24220, endMs: 24580 },
    { word: "misma", startMs: 24580, endMs: 24840 },
    { word: "madera,", startMs: 24840, endMs: 25180 },
    { word: "después", startMs: 25600, endMs: 25860 },
    { word: "de", startMs: 25860, endMs: 26060 },
    { word: "4.500", startMs: 26060, endMs: 26860 },
    { word: "años", startMs: 26860, endMs: 27300 },
    { word: "bajo", startMs: 27300, endMs: 27540 },
    { word: "tierra,", startMs: 27540, endMs: 27880 },
    { word: "se", startMs: 28240, endMs: 28460 },
    { word: "había", startMs: 28460, endMs: 28660 },
    { word: "quedado", startMs: 28660, endMs: 29120 },
    { word: "completamente", startMs: 29120, endMs: 29580 },
    { word: "rígida?", startMs: 29580, endMs: 30320 },
  ],
  audio: {
    narration: { src: "video004/shorts-audio/short2-narration.mp3", volume: 1.8836 },
    music: {
      src: "video004/shorts-audio/short2-music.mp3",
      volume: 0.0569,
      fadeInSeconds: 0.5,
      fadeOutSeconds: 1.0,
    },
  },
};


// ---------------------------------------------------------------------------
// Short 3 - Climax - "AGUA HIRVIENDO SOBRE MADERA DE 4.500 AÑOS"
// Locucion: short3-narration.mp3 (43.128125s, integra, incluye el CTA final).
// ---------------------------------------------------------------------------
export const short3ClimaxFixture: ExplainerProps = {
  cuts: [
    // Macro de un tablon deshidratado y agrietado, antes del tratamiento.
    {
      id: "4l",
      source: "video004/images/4l.png",
      in_seconds: 0.0,
      out_seconds: 6.06,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "ken-burns",
      audioSrc: "video004/shorts-audio/sfx/processed/short3-sfx-4l.mp3",
      audioVolume: 1.0,
    },
    // Retrato de Moustafa en su taller (Ref D).
    {
      id: "4h",
      source: "video004/images/4h.png",
      in_seconds: 6.06,
      out_seconds: 12.16,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "drift-up",
      audioSrc: "video004/shorts-audio/sfx/processed/short3-sfx-4h.mp3",
      audioVolume: 1.0,
    },
    // Moustafa vertiendo agua hirviendo sobre el cedro -- plano hero candidato a Video IA en el guion largo, NO autorizado; se usa como imagen fija tambien aqui. SFX de agua hirviendo quitado el 6 sept 2026 (instruccion explicita de Victor: molestaba) -- sin audioSrc.
    {
      id: "4m",
      source: "video004/images/4m.png",
      in_seconds: 12.16,
      out_seconds: 22.2,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "zoom-in",
      transform: { scale: 1.1 },
    },
    // Macro de las marcas jeroglificas de cuadrante.
    {
      id: "4n",
      source: "video004/images/4n.png",
      in_seconds: 22.2,
      out_seconds: 29.88,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "pan-right",
      audioSrc: "video004/shorts-audio/sfx/processed/short3-sfx-4n.mp3",
      audioVolume: 1.0,
    },
    // Reprise del mismo plano 4m como remate de "la barca volvio a tener la forma" -- mismo recurso de bookend que 001/003. SFX de agua hirviendo quitado el 6 sept 2026 (instruccion explicita de Victor: molestaba) -- sin audioSrc.
    {
      id: "4m-reprise",
      source: "video004/images/4m.png",
      in_seconds: 29.88,
      out_seconds: 37.46,
      transition_in: "cut",
      transition_out: "fade_black",
      transition_duration: 0.5,
      animation: "ken-burns",
      backgroundColor: "transparent",
    },
    {
      id: "cta",
      source: "",
      type: "cta_card",
      in_seconds: 37.46,
      out_seconds: 43.128125,
      text: "SIGUENOS PARA PARTE 4",
    }
  ],
  overlays: [
    {
      type: "monumental_title",
      in_seconds: 0,
      out_seconds: 3.0,
      position: "center",
      text: "AGUA HIRVIENDO\nSOBRE MADERA\nDE 4.500 AÑOS",
    },
    {
      type: "rotulo",
      in_seconds: 30.5,
      out_seconds: 35.5,
      position: "bottom-center",
      variant: "label",
      text: "15 AÑOS",
      subtitle: "sin un solo plano",
    }
  ],
  watermarkSrc: WATERMARK,
  brandBackground: true,
  themeConfig: THEME,
  captions: [
    { word: "Esa", startMs: 0, endMs: 300 },
    { word: "misma", startMs: 300, endMs: 480 },
    { word: "madera,", startMs: 480, endMs: 840 },
    { word: "después", startMs: 1220, endMs: 1540 },
    { word: "de", startMs: 1540, endMs: 1720 },
    { word: "4.500", startMs: 1720, endMs: 2480 },
    { word: "años", startMs: 2480, endMs: 2940 },
    { word: "bajo", startMs: 2940, endMs: 3160 },
    { word: "tierra,", startMs: 3160, endMs: 3500 },
    { word: "se", startMs: 4060, endMs: 4180 },
    { word: "había", startMs: 4180, endMs: 4380 },
    { word: "quedado", startMs: 4380, endMs: 4740 },
    { word: "deshidratada", startMs: 4740, endMs: 5420 },
    { word: "y", startMs: 5420, endMs: 5580 },
    { word: "sin", startMs: 5580, endMs: 5760 },
    { word: "curva.", startMs: 5760, endMs: 6060 },
    { word: "El", startMs: 6940, endMs: 7220 },
    { word: "restaurador", startMs: 7220, endMs: 7680 },
    { word: "Hag", startMs: 7680, endMs: 8160 },
    { word: "Ahmed", startMs: 8160, endMs: 8460 },
    { word: "Youssef", startMs: 8460, endMs: 8940 },
    { word: "Moustafa", startMs: 8940, endMs: 9380 },
    { word: "afrontó", startMs: 9380, endMs: 10080 },
    { word: "el", startMs: 10080, endMs: 10180 },
    { word: "problema", startMs: 10180, endMs: 10460 },
    { word: "calentando", startMs: 10460, endMs: 11060 },
    { word: "agua", startMs: 11060, endMs: 11400 },
    { word: "hasta", startMs: 11400, endMs: 11660 },
    { word: "hervirla.", startMs: 11660, endMs: 12160 },
    { word: "La", startMs: 12740, endMs: 12900 },
    { word: "dejaba", startMs: 12900, endMs: 13200 },
    { word: "caer", startMs: 13200, endMs: 13580 },
    { word: "poco", startMs: 13580, endMs: 13860 },
    { word: "a", startMs: 13860, endMs: 14060 },
    { word: "poco", startMs: 14060, endMs: 14260 },
    { word: "sobre", startMs: 14260, endMs: 14880 },
    { word: "cada", startMs: 14880, endMs: 15160 },
    { word: "tablón", startMs: 15160, endMs: 15520 },
    { word: "de", startMs: 15520, endMs: 15660 },
    { word: "cedro,", startMs: 15660, endMs: 16000 },
    { word: "mientras", startMs: 16360, endMs: 16700 },
    { word: "un", startMs: 16700, endMs: 16960 },
    { word: "mecanismo", startMs: 16960, endMs: 17460 },
    { word: "empujaba", startMs: 17460, endMs: 17940 },
    { word: "la", startMs: 17940, endMs: 18080 },
    { word: "madera", startMs: 18080, endMs: 18400 },
    { word: "hacia", startMs: 18400, endMs: 18660 },
    { word: "su", startMs: 18660, endMs: 18840 },
    { word: "forma", startMs: 18840, endMs: 19100 },
    { word: "original.", startMs: 19100, endMs: 19580 },
    { word: "Nadie", startMs: 20260, endMs: 20520 },
    { word: "había", startMs: 20520, endMs: 20760 },
    { word: "probado", startMs: 20760, endMs: 21140 },
    { word: "antes", startMs: 21140, endMs: 21440 },
    { word: "ese", startMs: 21440, endMs: 21680 },
    { word: "tratamiento.", startMs: 21680, endMs: 22200 },
    { word: "Cada", startMs: 22920, endMs: 23100 },
    { word: "pieza", startMs: 23100, endMs: 23440 },
    { word: "llevaba,", startMs: 23440, endMs: 23760 },
    { word: "además,", startMs: 23980, endMs: 24200 },
    { word: "su", startMs: 24760, endMs: 24880 },
    { word: "propia", startMs: 24880, endMs: 25140 },
    { word: "marca.", startMs: 25140, endMs: 25440 },
    { word: "Símbolos", startMs: 25440, endMs: 26480 },
    { word: "jeroglíficos", startMs: 26480, endMs: 27140 },
    { word: "tallados", startMs: 27140, endMs: 27540 },
    { word: "que", startMs: 27540, endMs: 27740 },
    { word: "indicaban", startMs: 27740, endMs: 28180 },
    { word: "en", startMs: 28180, endMs: 28360 },
    { word: "qué", startMs: 28360, endMs: 28500 },
    { word: "cuadrante", startMs: 28500, endMs: 28980 },
    { word: "del", startMs: 28980, endMs: 29140 },
    { word: "casco", startMs: 29140, endMs: 29480 },
    { word: "encajaba.", startMs: 29480, endMs: 29880 },
    { word: "15", startMs: 30540, endMs: 30820 },
    { word: "años", startMs: 30820, endMs: 31100 },
    { word: "después,", startMs: 31100, endMs: 31500 },
    { word: "sin", startMs: 32000, endMs: 32120 },
    { word: "haber", startMs: 32120, endMs: 32280 },
    { word: "tenido", startMs: 32280, endMs: 32560 },
    { word: "nunca", startMs: 32560, endMs: 32840 },
    { word: "un", startMs: 32840, endMs: 33060 },
    { word: "plano", startMs: 33060, endMs: 33280 },
    { word: "en", startMs: 33280, endMs: 33440 },
    { word: "las", startMs: 33440, endMs: 33560 },
    { word: "manos,", startMs: 33560, endMs: 33820 },
    { word: "la", startMs: 34400, endMs: 34480 },
    { word: "barca", startMs: 34480, endMs: 34740 },
    { word: "volvió", startMs: 34740, endMs: 35080 },
    { word: "a", startMs: 35080, endMs: 35140 },
    { word: "tener", startMs: 35140, endMs: 35320 },
    { word: "la", startMs: 35320, endMs: 35520 },
    { word: "forma", startMs: 35520, endMs: 35760 },
    { word: "con", startMs: 35760, endMs: 36000 },
    { word: "la", startMs: 36000, endMs: 36120 },
    { word: "que", startMs: 36120, endMs: 36220 },
    { word: "se", startMs: 36220, endMs: 36360 },
    { word: "enterró.", startMs: 36360, endMs: 36800 },
    { word: "¿Conoces", startMs: 37460, endMs: 37840 },
    { word: "otro", startMs: 37840, endMs: 38080 },
    { word: "objeto", startMs: 38080, endMs: 38400 },
    { word: "histórico", startMs: 38400, endMs: 38920 },
    { word: "que", startMs: 38920, endMs: 39100 },
    { word: "haya", startMs: 39100, endMs: 39260 },
    { word: "tardado", startMs: 39260, endMs: 39660 },
    { word: "tanto", startMs: 39660, endMs: 39900 },
    { word: "en", startMs: 39900, endMs: 40080 },
    { word: "reconstruirse?", startMs: 40080, endMs: 40760 },
    { word: "Cuéntanoslo", startMs: 41500, endMs: 42040 },
    { word: "en", startMs: 42040, endMs: 42140 },
    { word: "comentarios.", startMs: 42140, endMs: 42520 },
  ],
  audio: {
    narration: { src: "video004/shorts-audio/short3-narration.mp3", volume: 1.5668 },
    music: {
      src: "video004/shorts-audio/short3-music.mp3",
      volume: 0.0776,
      fadeInSeconds: 0.5,
      fadeOutSeconds: 1.0,
    },
  },
};


// ---------------------------------------------------------------------------
// Short 4 - Revelacion - "DOS BARCAS GEMELAS, DOS DESTINOS OPUESTOS"
// Locucion: short4-narration.mp3 (51.565714s, integra, incluye el CTA final).
// ---------------------------------------------------------------------------
export const short4RevelacionFixture: ExplainerProps = {
  cuts: [
    // Los dos fosos gemelos, uno abierto (Barca I) y otro sellado.
    {
      id: "6a",
      source: "video004/images/6a.png",
      in_seconds: 0.0,
      out_seconds: 4.62,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "pan-left",
      audioSrc: "video004/shorts-audio/sfx/processed/short4-sfx-6a.mp3",
      audioVolume: 1.0,
    },
    // Microcamara de 1987.
    {
      id: "6b",
      source: "video004/images/6b.png",
      in_seconds: 4.62,
      out_seconds: 12.3,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "ken-burns",
      audioSrc: "video004/shorts-audio/sfx/processed/short4-sfx-6b.mp3",
      audioVolume: 1.0,
    },
    // Motion graphic ManimCE (23.1s totales) -- primer tramo, invasion mineral.
    {
      id: "6e6g-p1",
      source: "video004/video/plano-6e6g-invasion-mineral-hongos.mp4",
      in_seconds: 12.3,
      out_seconds: 18.2,
      source_in_seconds: 0.0,
      videoFit: "contain",
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
    },
    // Motion graphic HyperFrames -- grafico de cristalinidad 40-60% vs 13%.
    {
      id: "6f",
      source: "video004/video/plano-6f-cristalinidad.mp4",
      in_seconds: 18.2,
      out_seconds: 25.74,
      source_in_seconds: 0.0,
      videoFit: "contain",
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
    },
    // Mismo motion graphic, retoma en el segundo 5.9 (donde se quedo antes del corte a 6f) para la parte de hongos.
    {
      id: "6e6g-p2",
      source: "video004/video/plano-6e6g-invasion-mineral-hongos.mp4",
      in_seconds: 25.74,
      out_seconds: 29.46,
      source_in_seconds: 5.9,
      videoFit: "contain",
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
    },
    // Contraste emocional: Barca I intacta junto a fragmento de Barca II. Sin SFX propio -- no esta en el catalogo de 14 cues de la ficha maestra para ningun plano equivalente, no se inventa uno.
    {
      id: "6h",
      source: "video004/images/6h.png",
      in_seconds: 29.46,
      out_seconds: 34.4,
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
      animation: "drift-up",
    },
    // Motion graphic ManimCE -- fragmento intacto (Ref A) vs degradado (Ref F).
    {
      id: "6d",
      source: "video004/video/plano-6d-intacta-vs-degradada.mp4",
      in_seconds: 34.4,
      out_seconds: 40.26,
      source_in_seconds: 0.0,
      videoFit: "contain",
      transition_in: "cut",
      transition_out: "cut",
      transition_duration: 0.5,
    },
    // Montaje en directo de la Barca II en el Gran Museo Egipcio (Ref G).
    {
      id: "6j",
      source: "video004/images/6j.png",
      in_seconds: 40.26,
      out_seconds: 43.18,
      transition_in: "cut",
      transition_out: "fade_black",
      transition_duration: 0.5,
      animation: "ken-burns",
      audioSrc: "video004/shorts-audio/sfx/processed/short4-sfx-6j.mp3",
      audioVolume: 1.0,
      backgroundColor: "transparent",
    },
    {
      id: "cta",
      source: "",
      type: "cta_card",
      in_seconds: 43.18,
      out_seconds: 51.565714,
      text: "SIGUENOS EN ARTILUGIO",
    }
  ],
  overlays: [
    {
      type: "monumental_title",
      in_seconds: 0,
      out_seconds: 3.0,
      position: "center",
      text: "DOS BARCAS GEMELAS\nDOS DESTINOS OPUESTOS",
    },
    {
      type: "rotulo",
      in_seconds: 18.7,
      out_seconds: 25.2,
      position: "bottom-center",
      variant: "label",
      text: "40-60% -> 13%",
      subtitle: "indice de cristalinidad de la celulosa",
    }
  ],
  watermarkSrc: WATERMARK,
  brandBackground: true,
  themeConfig: THEME,
  captions: [
    { word: "Junto", startMs: 0, endMs: 340 },
    { word: "al", startMs: 340, endMs: 480 },
    { word: "primer", startMs: 480, endMs: 700 },
    { word: "foso", startMs: 700, endMs: 1020 },
    { word: "hay", startMs: 1020, endMs: 1200 },
    { word: "un", startMs: 1200, endMs: 1340 },
    { word: "segundo", startMs: 1340, endMs: 1740 },
    { word: "gemelo.", startMs: 1740, endMs: 2180 },
    { word: "No", startMs: 3000, endMs: 3200 },
    { word: "se", startMs: 3200, endMs: 3340 },
    { word: "abrió", startMs: 3340, endMs: 3580 },
    { word: "hasta", startMs: 3580, endMs: 3840 },
    { word: "1987,", startMs: 3840, endMs: 4620 },
    { word: "cuando", startMs: 5680, endMs: 6000 },
    { word: "una", startMs: 6000, endMs: 6260 },
    { word: "microcámara", startMs: 6260, endMs: 6880 },
    { word: "entró", startMs: 6880, endMs: 7240 },
    { word: "por", startMs: 7240, endMs: 7420 },
    { word: "un", startMs: 7420, endMs: 7540 },
    { word: "pequeño", startMs: 7540, endMs: 7800 },
    { word: "orificio", startMs: 7800, endMs: 8480 },
    { word: "y", startMs: 8480, endMs: 8640 },
    { word: "grabó,", startMs: 8640, endMs: 8980 },
    { word: "por", startMs: 9240, endMs: 9320 },
    { word: "primera", startMs: 9320, endMs: 9600 },
    { word: "vez", startMs: 9600, endMs: 9860 },
    { word: "en", startMs: 9860, endMs: 10100 },
    { word: "tres", startMs: 10100, endMs: 10280 },
    { word: "milenios,", startMs: 10280, endMs: 10720 },
    { word: "la", startMs: 11120, endMs: 11260 },
    { word: "madera", startMs: 11260, endMs: 11500 },
    { word: "que", startMs: 11500, endMs: 11680 },
    { word: "había", startMs: 11680, endMs: 11940 },
    { word: "debajo.", startMs: 11940, endMs: 12300 },
    { word: "Minerales", startMs: 13140, endMs: 13660 },
    { word: "del", startMs: 13660, endMs: 13780 },
    { word: "propio", startMs: 13780, endMs: 14040 },
    { word: "foso", startMs: 14040, endMs: 14360 },
    { word: "se", startMs: 14360, endMs: 14600 },
    { word: "habían", startMs: 14600, endMs: 14880 },
    { word: "colado", startMs: 14880, endMs: 15280 },
    { word: "hasta", startMs: 15280, endMs: 15540 },
    { word: "el", startMs: 15540, endMs: 15720 },
    { word: "interior", startMs: 15720, endMs: 16060 },
    { word: "de", startMs: 16060, endMs: 16260 },
    { word: "cada", startMs: 16260, endMs: 16400 },
    { word: "célula", startMs: 16400, endMs: 16800 },
    { word: "de", startMs: 16800, endMs: 17000 },
    { word: "esa", startMs: 17000, endMs: 17180 },
    { word: "madera.", startMs: 17180, endMs: 17500 },
    { word: "Su", startMs: 18200, endMs: 18400 },
    { word: "celulosa,", startMs: 18400, endMs: 18860 },
    { word: "con", startMs: 18940, endMs: 19040 },
    { word: "una", startMs: 19040, endMs: 19180 },
    { word: "cristalinidad", startMs: 19180, endMs: 19860 },
    { word: "que,", startMs: 19860, endMs: 20100 },
    { word: "en", startMs: 20160, endMs: 20240 },
    { word: "un", startMs: 20240, endMs: 20320 },
    { word: "ejemplar", startMs: 20320, endMs: 20740 },
    { word: "sano,", startMs: 20740, endMs: 21020 },
    { word: "ronda", startMs: 21320, endMs: 21540 },
    { word: "el", startMs: 21540, endMs: 21680 },
    { word: "40-60%,", startMs: 21680, endMs: 23520 },
    { word: "apenas", startMs: 23520, endMs: 24060 },
    { word: "llegaba", startMs: 24060, endMs: 24500 },
    { word: "al", startMs: 24500, endMs: 24740 },
    { word: "13%.", startMs: 24740, endMs: 25740 },
    { word: "Catorce", startMs: 25740, endMs: 26520 },
    { word: "especies", startMs: 26520, endMs: 26920 },
    { word: "de", startMs: 26920, endMs: 27080 },
    { word: "hongos", startMs: 27080, endMs: 27460 },
    { word: "llevaban", startMs: 27460, endMs: 27940 },
    { word: "siglos", startMs: 27940, endMs: 28320 },
    { word: "alimentándose", startMs: 28320, endMs: 29120 },
    { word: "de", startMs: 29120, endMs: 29260 },
    { word: "ella.", startMs: 29260, endMs: 29460 },
    { word: "Las", startMs: 30100, endMs: 30260 },
    { word: "dos", startMs: 30260, endMs: 30420 },
    { word: "barcas", startMs: 30420, endMs: 30780 },
    { word: "se", startMs: 30780, endMs: 30960 },
    { word: "construyeron", startMs: 30960, endMs: 31620 },
    { word: "a", startMs: 31620, endMs: 31720 },
    { word: "la", startMs: 31720, endMs: 31760 },
    { word: "vez,", startMs: 31760, endMs: 32000 },
    { word: "con", startMs: 32360, endMs: 32500 },
    { word: "la", startMs: 32500, endMs: 32620 },
    { word: "misma", startMs: 32620, endMs: 32840 },
    { word: "madera", startMs: 32840, endMs: 33240 },
    { word: "y", startMs: 33240, endMs: 33520 },
    { word: "por", startMs: 33520, endMs: 33680 },
    { word: "las", startMs: 33680, endMs: 33820 },
    { word: "mismas", startMs: 33820, endMs: 34180 },
    { word: "manos.", startMs: 34180, endMs: 34400 },
    { word: "Una", startMs: 35040, endMs: 35240 },
    { word: "sigue", startMs: 35240, endMs: 35500 },
    { word: "casi", startMs: 35500, endMs: 35800 },
    { word: "como", startMs: 35800, endMs: 36120 },
    { word: "el", startMs: 36120, endMs: 36240 },
    { word: "primer", startMs: 36240, endMs: 36480 },
    { word: "día,", startMs: 36480, endMs: 36720 },
    { word: "la", startMs: 37240, endMs: 37420 },
    { word: "otra", startMs: 37420, endMs: 37660 },
    { word: "quedó", startMs: 37660, endMs: 38040 },
    { word: "reducida", startMs: 38040, endMs: 38480 },
    { word: "a", startMs: 38480, endMs: 38620 },
    { word: "un", startMs: 38620, endMs: 38740 },
    { word: "puzle", startMs: 38740, endMs: 38980 },
    { word: "de", startMs: 38980, endMs: 39160 },
    { word: "fragmentos", startMs: 39160, endMs: 39740 },
    { word: "degradados.", startMs: 39740, endMs: 40260 },
    { word: "Hoy", startMs: 40780, endMs: 40940 },
    { word: "se", startMs: 40940, endMs: 41100 },
    { word: "exhiben", startMs: 41100, endMs: 41460 },
    { word: "juntas", startMs: 41460, endMs: 41880 },
    { word: "en", startMs: 41880, endMs: 42000 },
    { word: "el", startMs: 42000, endMs: 42100 },
    { word: "Gran", startMs: 42100, endMs: 42260 },
    { word: "Museo", startMs: 42260, endMs: 42720 },
    { word: "Egipcio.", startMs: 42720, endMs: 43180 },
    { word: "¿Tú", startMs: 43880, endMs: 44040 },
    { word: "crees", startMs: 44040, endMs: 44260 },
    { word: "que", startMs: 44260, endMs: 44400 },
    { word: "esta", startMs: 44400, endMs: 44580 },
    { word: "barca", startMs: 44580, endMs: 44900 },
    { word: "llegó", startMs: 44900, endMs: 45100 },
    { word: "a", startMs: 45100, endMs: 45300 },
    { word: "navegar", startMs: 45300, endMs: 45680 },
    { word: "de", startMs: 45680, endMs: 45760 },
    { word: "verdad", startMs: 45760, endMs: 46020 },
    { word: "o", startMs: 46020, endMs: 46500 },
    { word: "fue", startMs: 46500, endMs: 46680 },
    { word: "un", startMs: 46680, endMs: 46800 },
    { word: "objeto", startMs: 46800, endMs: 47080 },
    { word: "puramente", startMs: 47080, endMs: 47720 },
    { word: "ritual?", startMs: 47720, endMs: 48020 },
    { word: "Síguenos", startMs: 48700, endMs: 49140 },
    { word: "en", startMs: 49140, endMs: 49280 },
    { word: "Artilugio", startMs: 49280, endMs: 49780 },
    { word: "si", startMs: 49780, endMs: 49940 },
    { word: "quieres", startMs: 49940, endMs: 50220 },
    { word: "más", startMs: 50220, endMs: 50400 },
    { word: "historias", startMs: 50400, endMs: 50900 },
    { word: "así.", startMs: 50900, endMs: 51100 },
  ],
  audio: {
    narration: { src: "video004/shorts-audio/short4-narration.mp3", volume: 1.5311 },
    music: {
      src: "video004/shorts-audio/short4-music.mp3",
      volume: 0.0562,
      fadeInSeconds: 0.5,
      fadeOutSeconds: 1.0,
    },
  },
};
