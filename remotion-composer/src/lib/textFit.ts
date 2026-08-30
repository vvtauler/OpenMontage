import { useMemo } from "react";

/**
 * Mide el ancho real (en px) de un texto con una fuente/peso concretos a un
 * tamaño de referencia, usando canvas — evita adivinar métricas a ojo.
 */
export function measureTextWidth(
  text: string,
  fontWeight: number,
  fontFamily: string,
  referenceFontSize = 100
): number {
  if (typeof document === "undefined") return 0;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return 0;
  ctx.font = `${fontWeight} ${referenceFontSize}px ${fontFamily}`;
  return ctx.measureText(text).width;
}

/**
 * Calcula el fontSize necesario para que `text` ocupe exactamente
 * `targetWidthPx`, midiendo con la fuente real ya cargada (en vez de
 * estirar el texto con textLength/letter-spacing, que deforma el tipo).
 * `letterSpacingEm` se suma como espacio extra entre caracteres si el
 * elemento también lleva letter-spacing en su CSS, para que el cálculo siga
 * siendo exacto.
 */
function fittedFontSize(
  text: string,
  fontFamily: string,
  fontWeight: number,
  targetWidthPx: number,
  letterSpacingEm = 0
): number {
  const ref = 100;
  const measured = measureTextWidth(text, fontWeight, fontFamily, ref);
  const naturalRatio = measured > 0 ? measured / ref : text.length * 0.55; // fallback si no hay canvas
  const gaps = Math.max(0, text.length - 1);
  const denom = naturalRatio + gaps * letterSpacingEm;
  return denom > 0 ? targetWidthPx / denom : ref;
}

export function useFittedFontSize(
  text: string,
  fontFamily: string,
  fontWeight: number,
  targetWidthPx: number,
  letterSpacingEm = 0
): number {
  return useMemo(
    () => fittedFontSize(text, fontFamily, fontWeight, targetWidthPx, letterSpacingEm),
    [text, fontFamily, fontWeight, targetWidthPx, letterSpacingEm]
  );
}
