import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFont as loadCinzel } from "@remotion/google-fonts/Cinzel";
import { loadFont as loadMontserrat } from "@remotion/google-fonts/Montserrat";
import { useFittedFontSize } from "../lib/textFit";

const { fontFamily: cinzel } = loadCinzel("normal", { weights: ["700"] });
const { fontFamily: montserrat } = loadMontserrat("normal", {
  weights: ["500"],
  subsets: ["latin"],
});

// Artilugio brand palette (ARTILUGIO - Manual de identidad visual (maestro) v2.4, §4, §5)
const BLANCO_ACERO = "#E2E8F0";
const BRONCE_FORJADO = "#C87A38";
const COBRE_CALIDO = "#D49A46";

// "El rótulo ocupa el 90% del ancho de pantalla" — el título se dimensiona
// para llenar ese ancho exacto (igual que ArtilugioMark/CtaText en
// SocialClip.tsx), en vez de un fontSize fijo que solo llenaba el 90% si el
// texto era lo bastante largo. El subtítulo escala proporcional al título,
// para no quedar desproporcionadamente pequeño cuando el título crece.
const TITLE_WIDTH_RATIO = 0.9;
const TITLE_LETTER_SPACING_EM = 0.12;
const SUBTITLE_TO_TITLE_RATIO = 24 / 84; // proporción original (subtítulo 24px / título 84px)
// Debe restarse del ancho objetivo: si no, el 90% se calcula para el texto
// solo y luego el padding del halo (48px 64px, más abajo) lo empuja fuera
// de ese 90% — el conjunto texto+halo acaba desbordando la pantalla.
const SCRIM_PADDING_X = 64;

export interface MonumentalTitleProps {
  /** Character or object name — set in Cinzel, uppercase, monumental
   * (manual §5). For introducing a person or a hero object shown large in
   * the background image, not for section titles (see SectionTitle). */
  title: string;
  /** Optional descriptor below the name — dates, role, etc. — in the
   * channel's technical sans-serif, per the manual's typographic contrast
   * rule (Cinzel = historia/monumentalidad, sans técnica = precisión). */
  subtitle?: string;
  position?: "center" | "bottom-center";
  /** Fracción del ancho de pantalla que debe ocupar el título (0-1). Por
   * defecto 0.9. */
  widthRatio?: number;
  /** Halo de fondo suave detrás del texto — por defecto true. Ponlo a
   * false sobre imágenes ya oscuras, donde el texto blanco ya tiene
   * contraste de sobra y el halo no aporta nada. */
  background?: boolean;
}

export const MonumentalTitle: React.FC<MonumentalTitleProps> = ({
  title,
  subtitle,
  position = "bottom-center",
  widthRatio = TITLE_WIDTH_RATIO,
  background = true,
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const isBottom = position === "bottom-center";
  // "bottom-center" tiene que quedar por encima de la zona de subtítulos
  // (CaptionOverlay reserva el 17% inferior + su propia caja, ~26% en
  // total) — si no, título y subtítulo se pisan en cuanto coinciden en el
  // tiempo, como pasaba con "Gengis Kan" sobre el corte 1b.
  const BOTTOM_PADDING_RATIO = 0.27;

  const titleFontSize = useFittedFontSize(
    // El título se pinta en mayúsculas (textTransform: uppercase) — hay que
    // medir esa misma versión, no el "title" tal cual llega, o el ancho
    // real desborda el ratio calculado (mayúsculas son más anchas).
    title.toUpperCase(),
    cinzel,
    700,
    width * widthRatio - 2 * SCRIM_PADDING_X,
    TITLE_LETTER_SPACING_EM
  );
  const subtitleFontSize = titleFontSize * SUBTITLE_TO_TITLE_RATIO;

  const reveal = spring({ frame, fps, config: { damping: 16, stiffness: 90 } });
  const opacity = reveal;
  // Empuje fijo hacia abajo solo en "center" — pedido explícito de bajarlo
  // un poco del centro exacto de la pantalla; "bottom-center" ya está
  // anclado abajo y no lo necesita.
  const CENTER_VERTICAL_OFFSET_PX = 90;
  const verticalOffset = isBottom ? 0 : CENTER_VERTICAL_OFFSET_PX;
  const translateY = interpolate(reveal, [0, 1], [isBottom ? 24 : 16, 0]) + verticalOffset;
  const scale = interpolate(reveal, [0, 1], [0.97, 1]);

  // Escalado con el título (proporción original: 220px bajo un título de
  // 84px) para no quedar como un trazo diminuto bajo un título ahora mucho
  // más grande.
  const underlineTargetPx = 220 * (titleFontSize / 84);
  const underlineWidth = interpolate(
    spring({ frame: frame - 8, fps, config: { damping: 16, stiffness: 70 } }),
    [0, 1],
    [0, underlineTargetPx]
  );

  // Non-directional (0,0-offset) blur layers instead of an offset drop
  // shadow — a soft radiant halo around the letterforms rather than a cast
  // shadow in one direction. Tight dark layer for edge contrast/legibility
  // against any background, wider warm layers for the "resplandor" glow.
  const glow = [
    "0 0 6px rgba(14,14,17,0.85)",
    "0 0 18px rgba(14,14,17,0.55)",
    `0 0 34px ${COBRE_CALIDO}99`,
    `0 0 70px ${BRONCE_FORJADO}66`,
  ].join(", ");

  return (
    <AbsoluteFill
      style={{
        justifyContent: isBottom ? "flex-end" : "center",
        alignItems: "center",
        // Sin padding horizontal fijo: el ancho objetivo del 90% ya se
        // calcula contra el ancho total de pantalla (menos el halo), así
        // que un padding extra aquí volvería a desbordar el conjunto.
        padding: isBottom ? `0 0 ${Math.round(height * BOTTOM_PADDING_RATIO)}px` : "0",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          opacity,
          transform: `translateY(${translateY}px) scale(${scale})`,
          textAlign: "center",
          maxWidth: `${widthRatio * 100}%`,
          // Fondo muy suave: sin él, el texto se pierde contra imágenes claras
          // (cielo, hierba) — un degradado radial, no una caja sólida, para no
          // volver a la estética de barra opaca del rótulo anterior. Sobre
          // imágenes ya oscuras (background=false) no hace falta.
          padding: `48px ${SCRIM_PADDING_X}px`,
          background: background
            ? "radial-gradient(ellipse at center, rgba(14,14,17,0.55) 0%, rgba(14,14,17,0.32) 55%, rgba(14,14,17,0) 80%)"
            : undefined,
        }}
      >
        <div
          style={{
            fontFamily: cinzel,
            fontWeight: 700,
            fontSize: titleFontSize,
            letterSpacing: `${TITLE_LETTER_SPACING_EM}em`,
            textTransform: "uppercase",
            color: BLANCO_ACERO,
            lineHeight: 1.15,
            textShadow: glow,
            // Sin esto, un título de dos o más palabras (p. ej. "Gengis
            // Kan") puede saltar de línea en el hueco si el fit no es
            // pixel-perfect — el ancho está pensado para una sola línea.
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </div>

        <div
          style={{
            margin: "18px auto 0",
            height: 3,
            width: underlineWidth,
            background: BRONCE_FORJADO,
            borderRadius: 2,
          }}
        />

        {subtitle && (
          <div
            style={{
              marginTop: 16,
              fontFamily: montserrat,
              fontWeight: 500,
              fontSize: subtitleFontSize,
              letterSpacing: "0.04em",
              color: COBRE_CALIDO,
              textShadow: "0 2px 10px rgba(0,0,0,0.7)",
            }}
          >
            {subtitle}
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};
