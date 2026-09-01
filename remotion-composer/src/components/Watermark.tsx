import { CanvasImage } from "remotion";
import { resolveAsset } from "../lib/resolveAsset";

// Isotipo del canal (ARTILUGIO) para el lienzo vertical 1080x1920 de los
// shorts — mismas medidas que en SocialClip.tsx (SAFE_MARGIN_BOTTOM/SIDE),
// factorizadas aquí para que cualquier composición de short (Explainer o
// SocialClip) use el mismo tamaño/posición sin duplicar los números
// mágicos.
//
// Corregido 1 sept 2026: esta versión había derivado (merge desde `main`)
// a un logo grande centrado arriba con opacidad 1 — exactamente el defecto
// de vídeo 001 que social-shorts-strategy.md §6 y el guion técnico de
// shorts (10-Redes Sociales/003 - ...) dan por corregido: "esquina
// inferior derecha, ~20% opacidad, sutil". Revertido a esa spec: tamaño
// base (11% del ancho, sin el x1.23x2 de ajuste manual que lo infló a
// ~27%), esquina inferior derecha con los mismos márgenes que
// SAFE_MARGIN_BOTTOM/SAFE_MARGIN_SIDE de SocialClip.tsx, opacidad 0.2.
const CANVAS_WIDTH = 1080;
const WATERMARK_WIDTH = CANVAS_WIDTH * 0.11; // ~119px, tamaño base — marca sutil, no protagonista
const SAFE_MARGIN_BOTTOM = 320; // mismo valor que SocialClip.tsx — punto de partida genérico
const SAFE_MARGIN_SIDE = 64; // mismo valor que SocialClip.tsx — punto de partida genérico

// Posición definitiva (ajustada a mano por Víctor en Remotion Studio, 1
// sept 2026): un poco más abajo y más a la izquierda que el margen
// genérico de arriba, para no quedar tapada por los iconos nativos de
// comentar/compartir/seguir que Instagram Reels y TikTok superponen en su
// propia esquina inferior derecha (esos iconos invaden más el margen
// "seguro" genérico de lo que SAFE_MARGIN_BOTTOM/SIDE por sí solos
// cubren). Sigue siendo la misma marca sutil (11% del ancho, 20%
// opacidad) — solo cambia dónde se ancla dentro de esa esquina.
const WATERMARK_BOTTOM = SAFE_MARGIN_BOTTOM - 122; // 320 - 122 = 198
const WATERMARK_RIGHT = SAFE_MARGIN_SIDE + 90; // 64 + 90 = 154

export const Watermark: React.FC<{ src: string }> = ({ src }) => (
  <CanvasImage
    src={resolveAsset(src)}
    style={{
      position: "absolute",
      bottom: WATERMARK_BOTTOM,
      right: WATERMARK_RIGHT,
      width: WATERMARK_WIDTH,
      height: "auto",
      opacity: 0.2,
      zIndex: 5,
    }}
    from={-22}
  />
);
