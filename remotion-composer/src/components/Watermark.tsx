import { CanvasImage } from "remotion";
import { resolveAsset } from "../lib/resolveAsset";

// Isotipo del canal (ARTILUGIO) para el lienzo vertical 1080x1920 de los
// shorts — mismas medidas que en SocialClip.tsx, factorizadas aquí para que
// cualquier composición de short (Explainer o SocialClip) use el mismo
// tamaño/posición sin duplicar los números mágicos.
const CANVAS_WIDTH = 1080;
const WATERMARK_WIDTH = CANVAS_WIDTH * 0.11 * 1.23 * 2; // tamaño base x ajuste manual x2
const WATERMARK_MARGIN = 283; // 40 (margen top) + 243 (bajado a mano en Studio, zona segura)

export const Watermark: React.FC<{ src: string }> = ({ src }) => (
  <CanvasImage
    src={resolveAsset(src)}
    style={{
      position: "absolute",
      top: WATERMARK_MARGIN,
      left: "50%",
      transform: "translateX(-50%)",
      width: WATERMARK_WIDTH,
      height: "auto",
      opacity: 1,
      zIndex: 5,
      translate: "0px -146px",
    }}
    from={-22}
  />
);
