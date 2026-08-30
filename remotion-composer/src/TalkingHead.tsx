import {
  AbsoluteFill,
  OffthreadVideo,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { CaptionOverlay, WordCaption } from "./components/CaptionOverlay";
import { TextCard } from "./components/TextCard";
import { StatCard } from "./components/StatCard";
import { CalloutBox } from "./components/CalloutBox";
import { ComparisonCard } from "./components/ComparisonCard";
import { BarChart } from "./components/charts/BarChart";
import { LineChart } from "./components/charts/LineChart";
import { PieChart } from "./components/charts/PieChart";
import { KPIGrid } from "./components/charts/KPIGrid";
import { HeroTitle } from "./components/HeroTitle";
import { SectionTitle } from "./components/SectionTitle";
import { StatReveal } from "./components/StatReveal";

// ---------------------------------------------------------------------------
// Overlay types for talking-head video
// ---------------------------------------------------------------------------

export interface TalkingHeadOverlay {
  id?: string;
  type: string;
  in_seconds: number;
  out_seconds: number;
  position?:
    | "lower_third"
    | "upper_third"
    | "title_band"
    | "left_panel"
    | "right_panel"
    | "full_overlay";
  // Component-specific props (same as Explainer Cut)
  text?: string;
  stat?: string;
  subtitle?: string;
  callout_type?: "info" | "warning" | "tip" | "quote";
  title?: string;
  leftLabel?: string;
  rightLabel?: string;
  leftValue?: string;
  rightValue?: string;
  chartData?: any[];
  chartSeries?: any[];
  chartColors?: string[];
  chartAnimation?: string;
  donut?: boolean;
  centerLabel?: string;
  centerValue?: string;
  showGrid?: boolean;
  showValues?: boolean;
  showLegend?: boolean;
  showMarkers?: boolean;
  columns?: 2 | 3 | 4;
  // Styling
  backgroundColor?: string;
  color?: string;
  accentColor?: string;
  fontSize?: number;
}

// ---------------------------------------------------------------------------
// Position presets for 9:16 (1080x1920) frame
// ---------------------------------------------------------------------------

const POSITION_STYLES: Record<string, React.CSSProperties> = {
  lower_third: {
    position: "absolute",
    bottom: 320, // Above caption area (~1600px)
    left: 40,
    right: 40,
    height: 480,
  },
  upper_third: {
    position: "absolute",
    top: 80,
    left: 40,
    right: 40,
    height: 480,
  },
  // Band directly under a letterboxed video (video occupies roughly y:80-688
  // at the standard 1080-wide/16:9-source letterbox used by clip-factory
  // exports) — for the fixed hook-title treatment approved for this batch.
  title_band: {
    position: "absolute",
    top: 700,
    left: 60,
    right: 60,
    height: 280,
  },
  left_panel: {
    position: "absolute",
    top: 200,
    left: 40,
    width: 480,
    bottom: 400,
  },
  right_panel: {
    position: "absolute",
    top: 200,
    right: 40,
    width: 480,
    bottom: 400,
  },
  full_overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
};

// ---------------------------------------------------------------------------
// Title pill — compact rounded title chip over full-bleed video, matching
// the channel's existing Shorts (dark translucent pill, thin border, bold
// centered caps text) instead of a full-width/full-height solid card.
// ---------------------------------------------------------------------------

const TitlePill: React.FC<{ text: string; accentColor?: string; fontSize?: number }> = ({
  text,
  accentColor = "#4ADC82",
  fontSize = 30,
}) => (
  <AbsoluteFill style={{ justifyContent: "flex-start", alignItems: "center" }}>
    <div
      style={{
        marginTop: 8,
        padding: "16px 26px",
        borderRadius: 10,
        backgroundColor: "rgba(20, 24, 28, 0.82)",
        border: `1.5px solid ${accentColor}99`,
        maxWidth: "94%",
      }}
    >
      <div
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          fontWeight: 800,
          fontSize,
          color: "#FFFFFF",
          textAlign: "center",
          textTransform: "uppercase",
          lineHeight: 1.25,
        }}
      >
        {text}
      </div>
    </div>
  </AbsoluteFill>
);

// ---------------------------------------------------------------------------
// Overlay component dispatcher — maps overlay type to Remotion component
// ---------------------------------------------------------------------------

const OverlayContent: React.FC<{ overlay: TalkingHeadOverlay }> = ({
  overlay,
}) => {
  const bgColor = overlay.backgroundColor || "#0F172A";

  if (overlay.type === "title_pill" && overlay.text) {
    return (
      <TitlePill
        text={overlay.text}
        accentColor={overlay.accentColor}
        fontSize={overlay.fontSize}
      />
    );
  }
  if (overlay.type === "glow_text" && overlay.text) {
    return (
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontWeight: 800,
            fontSize: overlay.fontSize || 60,
            color: overlay.color || overlay.accentColor || "#4ADC82",
            textAlign: "center",
            textTransform: "uppercase",
            lineHeight: 1.2,
            whiteSpace: "pre-line",
            textShadow: `0 0 24px ${(overlay.color || overlay.accentColor || "#4ADC82")}99, 0 2px 10px rgba(0,0,0,0.8)`,
            maxWidth: "88%",
          }}
        >
          {overlay.text}
        </div>
      </AbsoluteFill>
    );
  }
  if (overlay.type === "text_card" && overlay.text) {
    return (
      <TextCard
        text={overlay.text}
        fontSize={overlay.fontSize}
        color={overlay.color}
        backgroundColor={bgColor}
      />
    );
  }
  if (overlay.type === "stat_card" && overlay.stat) {
    return (
      <StatCard
        stat={overlay.stat}
        subtitle={overlay.subtitle}
        accentColor={overlay.accentColor}
        backgroundColor={bgColor}
      />
    );
  }
  if (overlay.type === "callout" && overlay.text) {
    return (
      <CalloutBox
        text={overlay.text}
        type={overlay.callout_type}
        title={overlay.title}
        borderColor={overlay.accentColor}
        backgroundColor={overlay.backgroundColor}
        textColor={overlay.color}
        containerBackgroundColor={bgColor}
      />
    );
  }
  if (
    overlay.type === "comparison" &&
    overlay.leftLabel &&
    overlay.rightLabel
  ) {
    return (
      <ComparisonCard
        leftLabel={overlay.leftLabel}
        rightLabel={overlay.rightLabel}
        leftValue={overlay.leftValue || ""}
        rightValue={overlay.rightValue || ""}
        title={overlay.title}
        backgroundColor={bgColor}
        textColor={overlay.color}
      />
    );
  }
  if (overlay.type === "bar_chart" && overlay.chartData) {
    return (
      <BarChart
        data={overlay.chartData}
        title={overlay.title}
        colors={overlay.chartColors}
        animationStyle={(overlay.chartAnimation as any) || "grow-up"}
        showValues={overlay.showValues}
        backgroundColor={bgColor}
      />
    );
  }
  if (overlay.type === "line_chart" && overlay.chartSeries) {
    return (
      <LineChart
        series={overlay.chartSeries}
        title={overlay.title}
        colors={overlay.chartColors}
        animationStyle={(overlay.chartAnimation as any) || "draw"}
        showGrid={overlay.showGrid}
        showMarkers={overlay.showMarkers}
        showLegend={overlay.showLegend}
        backgroundColor={bgColor}
      />
    );
  }
  if (overlay.type === "pie_chart" && overlay.chartData) {
    return (
      <PieChart
        data={overlay.chartData}
        title={overlay.title}
        colors={overlay.chartColors}
        animationStyle={(overlay.chartAnimation as any) || "expand"}
        donut={overlay.donut}
        centerLabel={overlay.centerLabel}
        centerValue={overlay.centerValue}
        showLegend={overlay.showLegend}
        backgroundColor={bgColor}
      />
    );
  }
  if (overlay.type === "kpi_grid" && overlay.chartData) {
    return (
      <KPIGrid
        metrics={overlay.chartData}
        title={overlay.title}
        columns={overlay.columns}
        colors={overlay.chartColors}
        animationStyle={(overlay.chartAnimation as any) || "count-up"}
        backgroundColor={bgColor}
      />
    );
  }
  if (overlay.type === "hero_title" && overlay.text) {
    return <HeroTitle title={overlay.text} subtitle={overlay.subtitle} />;
  }
  if (overlay.type === "section_title" && overlay.text) {
    return (
      <SectionTitle
        title={overlay.text}
        subtitle={overlay.subtitle}
        accentColor={overlay.accentColor}
        position="top-left"
      />
    );
  }
  if (overlay.type === "stat_reveal" && overlay.text) {
    return (
      <StatReveal
        stat={overlay.text}
        label={overlay.subtitle}
        accentColor={overlay.accentColor}
        position="bottom-right"
      />
    );
  }
  return null;
};

// ---------------------------------------------------------------------------
// Positioned overlay wrapper — handles position + fade in/out
// ---------------------------------------------------------------------------

const PositionedOverlay: React.FC<{ overlay: TalkingHeadOverlay }> = ({
  overlay,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Fade in over 8 frames (~0.27s), fade out over 8 frames
  const fadeIn = interpolate(frame, [0, 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 8, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const opacity = fadeIn * fadeOut;

  const position = overlay.position || "lower_third";
  const posStyle = POSITION_STYLES[position] || POSITION_STYLES.lower_third;
  const isFullOverlay = position === "full_overlay";
  // title_pill and glow_text are self-contained (their own pill/no chrome at
  // all) — they must NOT get the generic card shadow/rounded-corner/overflow
  // clip, which otherwise paints a visible ghost rectangle the size of the
  // whole position zone behind a small pill or borderless glow text.
  const isChromeless = overlay.type === "title_pill" || overlay.type === "glow_text";

  return (
    <div
      style={{
        ...posStyle,
        opacity,
        overflow: isChromeless ? "visible" : "hidden",
        borderRadius: isFullOverlay || isChromeless ? 0 : 16,
        boxShadow: isFullOverlay || isChromeless
          ? "none"
          : "0 8px 32px rgba(0, 0, 0, 0.4)",
      }}
    >
      {isFullOverlay && (
        <AbsoluteFill style={{ background: "rgba(0, 0, 0, 0.7)" }} />
      )}
      <OverlayContent overlay={overlay} />
    </div>
  );
};

// ---------------------------------------------------------------------------
// Main TalkingHead composition
// ---------------------------------------------------------------------------

export interface TalkingHeadProps {
  [key: string]: unknown;
  videoSrc: string;
  captions: WordCaption[];
  overlays?: TalkingHeadOverlay[];
  wordsPerPage?: number;
  fontSize?: number;
  highlightColor?: string;
  /** Clip duration in seconds — required for calculateTalkingHeadMetadata to size the composition to the actual clip instead of a fixed placeholder. */
  durationSeconds?: number;
  /** Caption anchor. Defaults to "bottom" (legacy). Use "top" to pin captions directly under a letterboxed video, keeping the lower_third overlay zone clear (avoids the two overlapping). */
  captionPosition?: "top" | "bottom";
  /** Extra vertical nudge for captions, passed straight to CaptionOverlay. */
  captionVerticalOffsetPx?: number;
}

/**
 * Sizes the composition to the clip's real duration. TalkingHead is used
 * for independently-trimmed social clips (clip-factory pipeline) whose
 * length varies per clip — without this, every render would use the
 * Root.tsx placeholder duration (300s) regardless of actual content length.
 */
export function calculateTalkingHeadMetadata({
  props,
}: {
  props: TalkingHeadProps;
}) {
  const fps = 30;
  const fallbackSeconds = 30;
  const seconds =
    typeof props.durationSeconds === "number" && props.durationSeconds > 0
      ? props.durationSeconds
      : fallbackSeconds;
  return {
    durationInFrames: Math.max(1, Math.round(seconds * fps)),
    fps,
    width: 1080,
    height: 1920,
  };
}

export const TalkingHead: React.FC<TalkingHeadProps> = ({
  videoSrc,
  captions,
  overlays,
  wordsPerPage = 4,
  fontSize = 52,
  highlightColor = "#22D3EE",
  captionPosition = "bottom",
  captionVerticalOffsetPx,
}) => {
  const { fps } = useVideoConfig();

  // Local public-relative paths (e.g. "bmbtv-clinic-ataque-51/clip-03.mp4")
  // must go through staticFile() to resolve under the served public dir.
  // Remote URLs pass through unchanged. OffthreadVideo rejects file:// URIs,
  // so plain absolute paths are intentionally NOT supported here.
  const resolvedVideoSrc = /^(https?:|data:)/.test(videoSrc)
    ? videoSrc
    : staticFile(videoSrc);

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      {/* Layer 1: Video background */}
      <OffthreadVideo
        src={resolvedVideoSrc}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />

      {/* Layer 2: Overlays (charts, stats, callouts, etc.) */}
      {overlays?.map((overlay, i) => {
        const from = Math.round(overlay.in_seconds * fps);
        const duration = Math.round(
          (overlay.out_seconds - overlay.in_seconds) * fps
        );
        return (
          <Sequence
            key={overlay.id || `overlay-${i}`}
            from={from}
            durationInFrames={duration}
          >
            <PositionedOverlay overlay={overlay} />
          </Sequence>
        );
      })}

      {/* Layer 3: Captions (topmost — always visible above overlays) */}
      <CaptionOverlay
        words={captions}
        wordsPerPage={wordsPerPage}
        fontSize={fontSize}
        highlightColor={highlightColor}
        backgroundColor="rgba(0, 0, 0, 0.65)"
        color="#FFFFFF"
        position={captionPosition}
        verticalOffsetPx={captionVerticalOffsetPx}
      />
    </AbsoluteFill>
  );
};
