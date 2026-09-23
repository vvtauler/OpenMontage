import {
  AbsoluteFill,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFont as loadMontserrat } from "@remotion/google-fonts/Montserrat";

// Registra el peso 800 (ExtraBold) para que exista de verdad cuando algún
// caller pida fontFamily="Montserrat" (p. ej. los shorts de Artilugio,
// manual de identidad visual §8 / social-shorts-strategy.md §8). No cambia
// el fontFamily por defecto de este componente (Space Grotesk) — otros
// proyectos que usan CaptionOverlay sin pasar fontFamily no se ven
// afectados, solo se añade la fuente como disponible.
loadMontserrat("normal", { weights: ["800"] });

// Word-level caption for TikTok-style highlight display
export interface WordCaption {
  word: string;
  startMs: number;
  endMs: number;
  /** phraseAware mode only (see below) — marks this word as the last one of
   * a caption page. Computed upstream from punctuation (sentence end always
   * breaks; a comma breaks once the running page has >=2 words, so a page
   * never starts or ends mid-phrase) — this component does not parse text,
   * it only reads the flag, so callers stay in full control of where a
   * clause is "long enough" to break. */
  pageBreakAfter?: boolean;
}

type CaptionOverlayProps = {
  words: WordCaption[];
  // How many words to show at once in a "page"
  wordsPerPage?: number;
  /** When true, ignores wordsPerPage and pages instead break exactly where
   * words[].pageBreakAfter is set — every page then starts and ends on a
   * real phrase/clause boundary instead of a fixed word count (video005
   * shorts, 23 sept 2026: fixed-count pages were cutting mid-sentence).
   * Default false keeps the original wordsPerPage behavior for every
   * caller that doesn't set this (001/003/004/video005 largo, ...). */
  phraseAware?: boolean;
  fontSize?: number;
  color?: string;
  highlightColor?: string;
  backgroundColor?: string;
  fontFamily?: string;
  /** Optional — undefined keeps this component's own default (700). Pass
   * 800 for Montserrat ExtraBold (Artilugio shorts brand spec). */
  fontWeight?: number;
  /** "bottom" (default) — safe-zone-aware bottom anchor, see below. "top" —
   * anchors under a letterboxed video (TalkingHead's clip-factory shorts),
   * clear of the lower_third overlay zone. */
  position?: "top" | "bottom";
  /** Extra manual vertical nudge in px, on top of the position anchor. */
  verticalOffsetPx?: number;
};

interface CaptionPage {
  words: WordCaption[];
  startMs: number;
  endMs: number;
}

function buildPages(words: WordCaption[], wordsPerPage: number): CaptionPage[] {
  const pages: CaptionPage[] = [];
  for (let i = 0; i < words.length; i += wordsPerPage) {
    const pageWords = words.slice(i, i + wordsPerPage);
    if (pageWords.length === 0) continue;
    pages.push({
      words: pageWords,
      startMs: pageWords[0].startMs,
      endMs: pageWords[pageWords.length - 1].endMs,
    });
  }
  return pages;
}

function buildPhrasePages(words: WordCaption[]): CaptionPage[] {
  const pages: CaptionPage[] = [];
  let current: WordCaption[] = [];
  for (const w of words) {
    current.push(w);
    if (w.pageBreakAfter) {
      pages.push({
        words: current,
        startMs: current[0].startMs,
        endMs: current[current.length - 1].endMs,
      });
      current = [];
    }
  }
  if (current.length > 0) {
    pages.push({
      words: current,
      startMs: current[0].startMs,
      endMs: current[current.length - 1].endMs,
    });
  }
  return pages;
}

// Zona segura de plataforma en vertical (TikTok/Reels/Shorts cubren ~17% de
// la altura con su propia UI nativa: caption/usuario/iconos de interacción)
// — mismo criterio ya documentado en SocialClip.tsx (SAFE_MARGIN_BOTTOM,
// 320px de 1920), pero nunca aplicado aquí: el paddingBottom fijo de 80px
// dejaba los subtítulos dentro de esa zona prohibida en todo vídeo vertical.
// Corrección repetida en los shorts del vídeo 001 — se fija aquí, en el
// componente compartido, para que no haga falta repetirla en cada short.
const VERTICAL_SAFE_BOTTOM_RATIO = 320 / 1920;
const HORIZONTAL_BOTTOM_PADDING = 80;

const PageRenderer: React.FC<{
  page: CaptionPage;
  fontSize: number;
  color: string;
  highlightColor: string;
  backgroundColor: string;
  fontFamily: string;
  fontWeight: number;
  position: "top" | "bottom";
  verticalOffsetPx: number;
}> = ({
  page,
  fontSize,
  color,
  highlightColor,
  backgroundColor,
  fontFamily,
  fontWeight,
  position,
  verticalOffsetPx,
}) => {
  const frame = useCurrentFrame();
  const { fps, height, width } = useVideoConfig();

  const currentMs = page.startMs + (frame / fps) * 1000;

  // Spring entrance
  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 120 },
  });

  const isVertical = height > width;
  const containerStyle: React.CSSProperties =
    position === "top"
      ? { justifyContent: "flex-start", alignItems: "center", paddingTop: 460 }
      : {
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: isVertical
            ? Math.round(height * VERTICAL_SAFE_BOTTOM_RATIO)
            : HORIZONTAL_BOTTOM_PADDING,
        };

  return (
    <AbsoluteFill
      style={{
        ...containerStyle,
        transform: verticalOffsetPx ? `translateY(${verticalOffsetPx}px)` : undefined,
      }}
    >
      <div
        style={{
          opacity: entrance,
          transform: `translateY(${interpolate(entrance, [0, 1], [20, 0])}px)`,
          backgroundColor,
          borderRadius: 12,
          padding: "14px 28px",
          maxWidth: "80%",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontSize,
            fontWeight,
            fontFamily,
            lineHeight: 1.4,
            whiteSpace: "pre-wrap",
          }}
        >
          {page.words.map((w, i) => {
            const isActive = w.startMs <= currentMs && w.endMs > currentMs;
            const isPast = w.endMs <= currentMs;
            return (
              <span
                key={`${w.startMs}-${i}`}
                style={{
                  color: isActive ? highlightColor : isPast ? color : `${color}99`,
                  transition: "none", // CSS transitions forbidden in Remotion
                  textShadow: isActive
                    ? `0 0 20px ${highlightColor}66, 0 2px 4px rgba(0,0,0,0.5)`
                    : "0 2px 4px rgba(0,0,0,0.5)",
                }}
              >
                {w.word}{i < page.words.length - 1 ? " " : ""}
              </span>
            );
          })}
        </span>
      </div>
    </AbsoluteFill>
  );
};

export const CaptionOverlay: React.FC<CaptionOverlayProps> = ({
  words,
  wordsPerPage = 6,
  phraseAware = false,
  fontSize = 42,
  color = "#F8FAFC",
  highlightColor = "#22D3EE",
  backgroundColor = "rgba(15, 23, 42, 0.75)",
  fontFamily = "Space Grotesk, Inter, system-ui, sans-serif",
  fontWeight = 700,
  position = "bottom",
  verticalOffsetPx = 0,
}) => {
  const { fps } = useVideoConfig();
  const pages = phraseAware ? buildPhrasePages(words) : buildPages(words, wordsPerPage);

  return (
    <AbsoluteFill>
      {pages.map((page, i) => {
        const fromFrame = Math.round((page.startMs / 1000) * fps);
        const nextStart = pages[i + 1]?.startMs ?? page.endMs + 500;
        const duration = Math.max(
          1,
          Math.round(((nextStart - page.startMs) / 1000) * fps)
        );

        return (
          <Sequence key={i} from={fromFrame} durationInFrames={duration}>
            <PageRenderer
              page={page}
              fontSize={fontSize}
              color={color}
              highlightColor={highlightColor}
              backgroundColor={backgroundColor}
              fontFamily={fontFamily}
              fontWeight={fontWeight}
              position={position}
              verticalOffsetPx={verticalOffsetPx}
            />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
