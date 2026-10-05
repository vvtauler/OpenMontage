import {
  AbsoluteFill,
  CanvasImage,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { resolveAsset } from "../lib/resolveAsset";
import { useFittedFontSize } from "../lib/textFit";
import { loadFont as loadCinzel } from "@remotion/google-fonts/Cinzel";
import { loadFont as loadMontserrat } from "@remotion/google-fonts/Montserrat";

// Tarjeta de cierre ARTILUGIO — extraída de SocialClip.tsx (los shorts del
// vídeo 001 la usan tal cual) para que cualquier short, sea SocialClip o un
// short de Explainer, cierre con la misma tarjeta exacta en vez de
// reinventarla cada vez.

const { fontFamily: cinzelFontFamily } = loadCinzel("normal", {
  weights: ["600"],
});
const { fontFamily: montserratFontFamily } = loadMontserrat("normal", {
  weights: ["600"],
});

// 4 líneas explícitas, la 3ª en blanco a propósito (espaciado entre
// "YouTube" y la instrucción final).
export const DEFAULT_CTA_TEXT = "Vídeo completo en\nYouTube\n\nenlace en la bio";
export const CTA_DURATION_SECONDS = 2.5;

const ARTILUGIO_MARK = "ARTILUGIO";
const ARTILUGIO_LETTER_SPACING_EM = 0.22;
const ARTILUGIO_ISOTIPE_SRC = "social-clips/source/logo-isotipo-full.png";
// Momento de marca del cierre: isotipo completo (no el watermark sutil de
// esquina) centrado justo encima del wordmark — decisión de Víctor (1 sept
// 2026) para asociar la marca a la imagen en el instante del CTA. Distinto
// tratamiento del Watermark persistente (20% opacidad, esquina): aquí va a
// opacidad plena, como parte de la propia tarjeta.
const ARTILUGIO_ISOTIPE_WIDTH_RATIO = 0.26;

/** Wordmark "ARTILUGIO", elemento independiente, justo debajo del isotipo. */
const ArtilugioMark: React.FC = () => {
  const { width } = useVideoConfig();
  const fontSize = useFittedFontSize(
    ARTILUGIO_MARK,
    cinzelFontFamily,
    600,
    width * 0.8, // 80% del ancho de pantalla
    ARTILUGIO_LETTER_SPACING_EM
  );

  return (
    <div
      style={{
        fontFamily: cinzelFontFamily,
        fontWeight: 600,
        fontSize,
        letterSpacing: `${ARTILUGIO_LETTER_SPACING_EM}em`,
        color: "#E2E8F0", // Blanco Acero
        textShadow: "0 2px 16px rgba(0,0,0,0.7)",
        whiteSpace: "nowrap",
      }}
    >
      {ARTILUGIO_MARK}
    </div>
  );
};

/** CTA, elemento independiente: N líneas explícitas (separadas por \n en el
 * texto), todas al mismo fontSize — el que hace que la línea más larga
 * ocupe exactamente el 75% del ancho. Una línea vacía solo aporta el hueco
 * vertical de una línea, sin texto. */
// Estilo opcional del CTA (shorts del 008): textTop ancla el texto bajo el
// wordmark en vez de centrarlo; maxFontSize limita el tamano cuando la linea
// mas larga es corta; lastLineColor distingue la ultima linea ("Siguenos") del
// resto. En este modo las lineas en blanco si ocupan su hueco (con un espacio
// normal el navegador las colapsa a altura cero).
export type CtaStyle = {
  textTop?: number;
  maxFontSize?: number;
  lastLineColor?: string;
};

const CtaText: React.FC<{ text: string; ctaStyle?: CtaStyle }> = ({ text, ctaStyle }) => {
  const { width } = useVideoConfig();
  const lines = text.split("\n");
  const longestLine = lines.reduce((a, b) => (b.length > a.length ? b : a), "");
  const fittedFontSize = useFittedFontSize(
    longestLine,
    montserratFontFamily,
    600,
    width * 0.75
  );
  const fontSize = ctaStyle?.maxFontSize
    ? Math.min(fittedFontSize, ctaStyle.maxFontSize)
    : fittedFontSize;
  const lastIndex = lines.length - 1;

  return (
    // marginTop: separación pedida por Víctor (1 sept 2026) respecto al
    // wordmark ARTILUGIO de encima — antes quedaban demasiado pegados.
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 56,
      }}
    >
      {lines.map((line, i) => (
        <div
          key={i}
          style={{
            fontFamily: montserratFontFamily,
            fontWeight: 600,
            fontSize,
            lineHeight: 1.35,
            color:
              ctaStyle?.lastLineColor && i === lastIndex
                ? ctaStyle.lastLineColor
                : "#C87A38", // Bronce Forjado
            textAlign: "center",
            whiteSpace: "nowrap",
            textShadow: line ? "0 2px 10px rgba(0,0,0,0.7)" : undefined,
          }}
        >
          {line || (ctaStyle ? "\u00A0" : " ") /* línea en blanco: solo el hueco vertical */}
        </div>
      ))}
    </div>
  );
};

export const CtaCard: React.FC<{ text?: string; ctaStyle?: CtaStyle }> = ({
  text = DEFAULT_CTA_TEXT,
  ctaStyle,
}) => {
  const textTop = ctaStyle?.textTop;
  const frame = useCurrentFrame();
  const { fps, width } = useVideoConfig();
  const opacity = interpolate(frame, [0, Math.round(0.4 * fps)], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ zIndex: 4 }}>
      {/* Isotipo completo + ARTILUGIO — lockup de marca centrado, el icono
          justo encima del wordmark. El wordmark se queda anclado en la
          misma zona segura de siempre (justo por debajo de donde caía
          top:460 antes de añadir el icono); el icono ocupa el hueco por
          encima. */}
      <div
        style={{
          opacity,
          position: "absolute",
          top: 460,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
        }}
      >
        <CanvasImage
          src={resolveAsset(ARTILUGIO_ISOTIPE_SRC)}
          style={{ width: width * ARTILUGIO_ISOTIPE_WIDTH_RATIO, height: "auto" }}
        />
        <ArtilugioMark />
      </div>
      {/* CTA — elemento independiente, centrado en toda la pantalla */}
      <AbsoluteFill
        style={
          textTop === undefined
            ? { opacity, justifyContent: "center", alignItems: "center" }
            : { opacity, justifyContent: "flex-start", alignItems: "center", paddingTop: textTop }
        }
      >
        <CtaText text={text} ctaStyle={ctaStyle} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

/** Escena de cierre lista para usar como cut (`type: "cta_card"`) en
 * Explainer — fondo de marca + tarjeta CTA. El isotipo no se duplica aquí:
 * sigue viniendo de la capa `Watermark` persistente de Explainer. */
/** Solo el fondo de marca, sin la tarjeta — separado de CtaScene para poder
 * premontarlo unos frames antes de que el corte "cta_card" empiece de
 * verdad (ver Explainer.tsx, "pre-mount del fondo del CTA"): así la imagen
 * ya está decodificada cuando le toca hacerse visible, en vez de dejar un
 * frame en blanco mientras el <CanvasImage> carga por primera vez. */
export const CtaBackground: React.FC = () => (
  <CanvasImage
    src={resolveAsset("social-clips/source/fondo-limpio.jpg")}
    style={{
      position: "absolute",
      top: 0,
      left: "50%",
      transform: "translateX(-50%)",
      height: "100%",
      width: "auto",
      zIndex: 0,
    }}
  />
);

export const CtaScene: React.FC<{ text?: string; ctaStyle?: CtaStyle }> = ({ text, ctaStyle }) => (
  <AbsoluteFill style={{ backgroundColor: "#0E0E11" }}>
    <CtaBackground />
    <CtaCard text={text} ctaStyle={ctaStyle} />
  </AbsoluteFill>
);
