# Social Shorts Strategy (Artilugio)

## When To Use

Producing the native Instagram Reels / TikTok shorts that accompany each
Artilugio long-form video, **from video 003 onward**. Read this before
building any `SocialClip` composition (`remotion-composer/src/components/SocialClip.tsx`)
or writing short-form narration.

**Scope:** videos 003+ only. Videos 001 (trebuchet) and 002 (Mongol
composite bow) already have their 4 shorts published or scheduled —
do not retroactively re-cut them under this process; the corrections
below apply going forward, not backward.

This supersedes the video-001 approach (ffmpeg `auto_reframe` +
letterbox, single audio trim from the long-form master). That pass is
archived at `renders/social-clips/_archive/ffmpeg-pass1/` inside the
`maquina-medieval-muralla` project — do not replicate it.

## Canonical source of truth

The Artilugio Obsidian vault note `01-Estrategia/Plan de recortes y
cadencia (redes sociales)` holds the live, evolving record: exact
publish dates, copy drafts, Metricool post IDs, per-video timestamps.
This skill holds the reproducible *process*. When either changes,
update both.

## Why this exists

Video 001 shipped with a large centered logo (~27% of frame width,
persistent), black letterbox bars from a fit-inside-9:16 crop, a
static "place + date" title card as the opening frame, and two clips
(65.7s, 56.6s) at roughly double their own duration budget — despite
the original plan for 001 already specifying a corner watermark, no
letterbox, and per-beat duration caps. An external audit of
`@artilugiohistoria` (Aug 2026) flagged exactly these symptoms
independently of this project's own notes, which is what forced this
rewrite.

Most of the fixes below are not new opinions — they were already the
intended spec for video 001 and simply weren't enforced at render
time. The genuinely new decisions, introduced for 003+, are: fresh
per-short narration (previously a straight trim of the long-form
master), a native-platform CTA (previously a funnel to the YouTube
video), and a tightened 50s ceiling (previously up to 60s for the
Revelación clip).

## Process

### 1. Four shorts per video, one per narrative beat

Cadence: 4 clips per long video, published within **1 week** (day
0/2/4/6), same day on Instagram and TikTok. Check
`getBestTimeToPostByNetwork` for the current brand before scheduling —
don't assume a prior video's best slots still hold once more history
has accumulated.

| Beat | Covers |
|---|---|
| Hook | Opening curiosity/stakes |
| Mecanismo | How the object/technique works |
| Clímax | The most visually striking moment |
| Revelación | The payoff that resolves the title's question |

### 2. Assets: reuse footage, rebuild graphics

- **Reuse**: the images and motion-graphics clips already generated
  for the long-form video. Treat them as a shot bank, not as a locked
  timeline — pick whatever plano/cut best matches the short's own
  narration, regardless of where it sits in the long-form edit.
- **Rebuild from zero**: every graphic overlay, title card, and CTA
  card. Do not carry over the long-form video's overlays into a short.

### 3. Narration: written and recorded fresh

Each short gets its own narration script — using the long-form script
as reference material, not as a source to slice — and its own
TTS/voice pass. Do not cut audio out of the long-form narration
master; wording and pacing are short-specific.

**Consequence for composition:** a short is no longer "one trim window
of one master file." Build it the way `SocialClip.tsx`'s
`backgroundCuts` prop already assembles background VFX — a list of
`{source, inSeconds, outSeconds, animation}` entries against the
short's own timeline — but extend that same assembly pattern to the
**foreground** layer too, driven by the new narration's timing. The
current `trimStartSeconds`/`trimEndSeconds` window into one `videoSrc`
only fits the old single-master-trim approach and needs to become one
case of a more general multi-cut foreground, not the only case.

### 4. Hook rules (0-3s)

- On-screen hook text: short, uppercase, a counterintuitive claim or
  question. Never a place+date title card. Never a repeat of the
  video's own title.
- No static shot for more than ~2s at the very start — cut, zoom, or
  motion from frame 0.
- Any text card burned into the long-form master must sit inside the
  safe center third (see `SAFE_MARGIN_TOP`/`SAFE_MARGIN_SIDE` in
  `SocialClip.tsx`) so a 9:16 center-crop never clips it. This is a
  constraint on the long-form video's own `visual` stage, not just on
  the short — flag it to whoever is directing that stage.

### 5. Frame and crop

`cropMode: "center"` — full-bleed 9:16, no letterbox bars. Do not fall
back to the old `auto_reframe` + letterbox path; that combination
produced the "dark bars" defect the audit flagged in video 001.

### 6. Watermark

Bottom-right corner, subtle (~20% opacity, per `ARTILUGIO - Manual de
identidad visual (maestro)` §10), visible through the whole clip
including the CTA card. Not a large centered top badge — that was a
video-001 execution deviation, never the spec.

### 7. Duration

Hard ceiling **50s** per clip, with the actual target sitting ~10s
under that. Target varies by beat (Hook shortest; Clímax/Revelación
can use more of the buffer) — set per-clip when drafting the short's
script, not hardcoded per beat type.

### 8. Subtitles

Dynamic, large, centered, high-contrast. Montserrat ExtraBold — stays
inside the existing brand type system (Cinzel for the wordmark,
Montserrat for CTA/body) instead of introducing an unrelated face like
Bebas Neue.

### 9. CTA (~28-30s mark)

Native engagement close (ask a question, invite comments, "sigue para
la Parte 2") — not "vídeo completo en YouTube, enlace en bio". TikTok
doesn't support a working bio link for this account yet, so a funnel
CTA there is currently non-functional, not just suboptimal.

Revisit once TikTok's bio-link feature is enabled for the account.
When that happens, log it as a new `decision_log` entry reusing this
same category/subject rather than silently swapping the copy (see
AGENT_GUIDE.md → "Re-log Changed Decisions").

## Common pitfalls

- Reusing the long-form video's overlays/title cards verbatim in a
  short instead of rebuilding them for the vertical frame.
- Trimming short-form audio out of the long-form narration master
  instead of recording fresh narration.
- Letting the watermark grow past a subtle corner mark "because it
  reads better centered" — that reasoning is exactly what produced the
  video-001 defect this strategy replaces.
- Publishing a short over the 50s ceiling because "it needs more
  setup" — cut the setup, don't extend the clip.
- Treating a short as a canvas/aspect-ratio variant of the long-form
  `edit_decisions` (the `documentary-montage` pipeline's default
  `social_short` handling) — that only works for a straight
  same-timeline crop, which is no longer this project's approach.
