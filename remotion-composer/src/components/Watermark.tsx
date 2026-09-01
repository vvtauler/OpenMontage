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
const SAFE_MARGIN_BOTTOM = 320; // mismo valor que SocialClip.tsx — evita el caption/UI nativo de la plataforma
const SAFE_MARGIN_SIDE = 64; // mismo valor que SocialClip.tsx

export const Watermark: React.FC<{ src: string }> = ({ src }) => (
  <CanvasImage
    src={resolveAsset(src)}
    style={{
      position: "absolute",
      bottom: SAFE_MARGIN_BOTTOM,
      right: SAFE_MARGIN_SIDE,
      width: WATERMARK_WIDTH,
      height: "auto",
      opacity: 0.2,
      zIndex: 5,
    }}
    from={-22}
  />
);
