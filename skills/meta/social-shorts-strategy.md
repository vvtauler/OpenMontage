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

**Levels — narration & music (confirmed through video 004, still
valid):** match the long-form video's own peak-dBFS targets, not an
arbitrary guess — narration -1.0dBFS, music -25.0dBFS (same targets
`_rebuild_narration_v2.py`/`_rebuild_music_v2.py` use in the long-form
project folder). Measure each short's raw source file with `ffmpeg -af
volumedetect` (`max_volume` line) and set the fixture's `audio.narration
.volume`/`audio.music.volume` to the linear gain
`10 ** ((target - measured_peak) / 20)` — same math those scripts'
`peak_normalize()` does, just applied as a Remotion playback gain
instead of baking a new file. If the short's music source is shorter
than the short itself (e.g. a per-block music bed reused from the
long-form video, video 004 short 1: 31.8s bed vs. a 46.8s short), set
`audio.music.loop: true` instead of trimming or leaving the tail
silent — `Explainer.tsx`'s fade-in/out envelope is computed against the
*composition's* absolute frame, not per loop iteration, so looping
doesn't introduce an audible fade at every repeat, only at the very
start/end of the short.

**Levels — SFX (superseded 6 sept 2026, video 004): normalize by RMS
with a reduce-only cap, not by peak.** The video-003-era method above
(match each cue's peak to -15dBFS) produces wildly inconsistent
*perceived* loudness once you actually check it, because different SFX
sources have very different crest factors (peak-to-RMS ratio): a
transient creak/hit has a high crest factor, so pushing its peak to
-15dBFS still leaves a quiet RMS; a continuous-texture bed (electronic
hum, museum ambience, tool ambience) has a low crest factor, so the
*same* peak target leaves its RMS 10-20dB hotter than a creak's — it
reads as "too present" / "annoying" even though the peak number looks
identical and correct on paper. Measured on video 004 short 4's plano
6b (`12-lab-electronic-hum.mp3`): peak-matched to -15dBFS put its RMS
at only -26.8dBFS while the narration's own RMS at that same on-screen
moment was -19.9dBFS — just 6dB of separation, audibly competing with
the voice.

**Correct process (do this per short, not once globally):**
1. For every `(short, plano, cue)` combo, cut the raw cue to the
   *plano's exact on-screen duration* first — this is a real file on
   disk (`<short>-sfx-<plano>.mp3`), not a shared file played through a
   generic `audioVolume` multiplier, because step 4 needs a duration to
   fade against. If the raw cue is shorter than that duration (loop
   `ffmpeg -stream_loop -1 -i cue.mp3 -t <duration>`) instead of letting
   the rest of the plano go silent.
2. Apply a 1.0s fade-in and 1.0s fade-out (`afade=t=in:d=1.0` /
   `afade=t=out:st=<duration-1.0>:d=1.0`) so the cue never starts/stops
   on a hard edge at the cut boundary. (Started at 0.25s, raised to
   1.0s in video 004 after it still read as an abrupt cut.)
3. Measure the trimmed+faded clip's **RMS**, not peak
   (`ffmpeg -af volumedetect` → `mean_volume` line, not `max_volume`).
4. Compute `delta = min(0, TARGET_RMS_DBFS - measured_rms)` — a cap,
   never a boost — and re-render the same trim+fade with
   `volume=<delta>dB` added to the filter chain. `TARGET_RMS_DBFS`
   around **-38 to -44dBFS** is the range that worked for video 004
   (start at -38, go lower — e.g. -44 — if it still reads as present
   once you do step 5). Set the fixture's `audioVolume` to `1.0`: the
   gain is already baked into the processed file, don't apply it twice.
5. **Verify with an actual scene-by-scene measurement, not track-level
   peaks in isolation.** Build the real mixdown per short — narration
   at its own gain, music with its full fade-in/out envelope over the
   *whole short's* duration (not per-cut), and every plano's SFX at its
   real offset — via an `ffmpeg amix` (narration + music + a silence
   track with each SFX clip `adelay`'d into place), then for every cut
   extract a ~0.5s window centered on `(in_seconds + out_seconds) / 2`
   from the narration-only, music-only, sfx-only and full-mix renders
   and read each one's `mean_volume`. This is what actually caught the
   6dB-of-separation problem above — the isolated-file peak numbers all
   looked correct in isolation. Target: SFX RMS at least ~15dB under
   narration RMS at that same instant, across every plano that has one.
   For video 004 this needed two passes (-38dBFS cap, then -44dBFS cap)
   before the gap was consistently 17-25dB everywhere.

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
- **Prefer 2-3 short lines over one long one** (video 003, Víctor).
  `MonumentalTitle.tsx`'s hook overlay auto-shrinks a single-line title
  to fit 90% of frame width — a long hook phrase forced onto one line
  ends up smaller, not more attention-grabbing. Passing `"\n"` in the
  `title` prop stacks it into 2-3 lines instead, and the component fits
  the font size against the *widest individual line* rather than the
  whole string, so it renders noticeably bigger. E.g. `"LLEVA\n1.600
  AÑOS\nOXIDÁNDOSE"` instead of `"LLEVA 1.600 AÑOS OXIDÁNDOSE"`. No
  `"\n"` keeps the old single-line behavior (other `MonumentalTitle`
  uses, e.g. the long-form "Gengis Kan" callout, are unaffected).
  Break lines at natural clause/phrase boundaries, not just to balance
  line length.
- **Dark halo around the letters** (`MonumentalTitle.tsx`'s `glow`
  `textShadow`, not the background scrim): as of video 003 it's 3 dark
  layers (`10px@0.95`, `26px@0.85`, `48px@0.65`) plus the warm brand
  glow layers, deliberately darker/wider than the original 2-layer
  version so the title reads clearly over busy or pale backgrounds
  (pale sky was the case that showed the old halo was too thin). Don't
  thin this back out without checking against a pale-background plano.

### 5. Frame and crop

`cropMode: "center"` — full-bleed 9:16, no letterbox bars. Do not fall
back to the old `auto_reframe` + letterbox path; that combination
produced the "dark bars" defect the audit flagged in video 001.

### 6. Watermark

Bottom-right corner, subtle (~20% opacity, per `ARTILUGIO - Manual de
identidad visual (maestro)` §10), visible through the whole clip
including the CTA card. Not a large centered top badge — that was a
video-001 execution deviation, never the spec.

**Enforced in code as of video 003** (`Watermark.tsx`, shared by both
`Explainer` and `SocialClip` shorts) — check this file hasn't drifted
again before assuming the spec above is what actually renders; it has
regressed once already (see Common pitfalls). Current values:
`WATERMARK_WIDTH = CANVAS_WIDTH * 0.11` (~119px, base size — do not
reapply the old `x1.23x2` "manual adjustment" that inflated it to
~27%), `opacity: 0.2`. Position is **not** the generic
`SAFE_MARGIN_BOTTOM`/`SAFE_MARGIN_SIDE` (320/64) that `SocialClip.tsx`
uses elsewhere — Instagram Reels/TikTok's own comment/share/follow
icons eat further into that corner than those generic margins account
for, so the watermark needs its own, larger offset:
`WATERMARK_BOTTOM = 198`, `WATERMARK_RIGHT = 154` (both measured by eye
in Remotion Studio against the actual platform chrome, not derived
from a formula — if the native UI changes, re-measure, don't guess).

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

**Enforced in code as of video 003.** `CaptionOverlay.tsx`'s own
default is still Space Grotesk/700 (untouched, other Explainer-based
projects in this repo rely on it) — for an Artilugio short, request the
brand font explicitly on the fixture's `themeConfig`:
`captionFontFamily: "Montserrat"`, `captionFontWeight: 800`. Before
video 003 `Explainer.tsx` never forwarded `fontFamily`/`fontWeight` to
`CaptionOverlay` at all, so this had **no effect even when set** — that
wiring now exists (`Explainer.tsx` → `theme.captionFontFamily` /
`theme.captionFontWeight` → `CaptionOverlay`'s `fontFamily`/`fontWeight`
props), and Montserrat weight 800 is loaded in `CaptionOverlay.tsx`
itself so it's actually available, not just named. If a future short's
captions render in Space Grotesk, check the fixture's `themeConfig`
first before assuming the engine is broken again.

### 9. CTA (~28-30s mark)

Native engagement close (ask a question, invite comments, "sigue para
la Parte 2") — not "vídeo completo en YouTube, enlace en bio". TikTok
doesn't support a working bio link for this account yet, so a funnel
CTA there is currently non-functional, not just suboptimal.

Revisit once TikTok's bio-link feature is enabled for the account.
When that happens, log it as a new `decision_log` entry reusing this
same category/subject rather than silently swapping the copy (see
AGENT_GUIDE.md → "Re-log Changed Decisions").

**Copy convention (video 003, Víctor):** "Síguenos" (plural), not
"Sígueme" — the channel voice, not one person. Spell out "para"
instead of an em-dash separator: `"SÍGUENOS PARA PARTE 2"`, not
`"SÍGUEME — PARTE 2"`. On the miniserie's last short, the generic
catalog reference uses the brand name per CLAUDE.md §35:
`"SÍGUENOS EN ARTILUGIO"`.

**Brand lockup on the cta_card** (`ArtilugioCta.tsx`, video 003): the
full isotipo (`social-clips/source/logo-isotipo-full.png`, the same
asset as the corner `Watermark`, but at full opacity — not the
watermark's 20%) sits centered directly above the "ARTILUGIO" wordmark,
`gap: 24`. Width is computed in pixels via `useVideoConfig().width *
0.26` — a CSS `%` width doesn't work here because the wordmark's own
wrapper is an absolutely-positioned, auto-sized flex column (no
explicit width for a percentage to resolve against). There's also a
`marginTop: 56` between the wordmark and the CTA text line below it —
they read as one cramped block without it.

### 10. Mid-short data rótulos (`Rotulo.tsx`, `bottom-*` positions)

The `rotulo` overlay type (data-card callouts like "50 MICRAS" or
"1739", distinct from the Hook's `monumental_title`) was built for the
16:9 long-form frame, where a flat 90px bottom margin is fine. In a
1080x1920 short that same 90px lands the rótulo inside the same band
`CaptionOverlay` reserves for subtitles — and, if the plano behind it
is a reused motion graphic at `videoFit:"contain"`, potentially inside
the graphic's own letterboxed content too.

`Rotulo.tsx` is vertical-aware as of video 003 (`isVertical = height >
width`, same pattern as `CaptionOverlay.tsx`): `bottom-*` positions use
`VERTICAL_SAFE_MARGIN_BOTTOM_RATIO = 540/1920` (~540px) instead of the
generic 90px. **Mind the direction** if this ever needs re-tuning:
raising the ratio pushes the rótulo *up* (further from the frame's
bottom edge) — if it's already colliding with a motion graphic above
it, raising the margin drives it further into the graphic, not away
from it; if it's colliding with the caption below it, raising the
margin is what clears that. 540px was measured directly in Studio
against the worst case that matters for both directions at once: a
16:9 motion graphic at `videoFit:"contain"` (bottom edge ~656px above
the frame's bottom on a 1280x720 clip) with a genuine 2-line caption
active underneath the rótulo. Re-measure by eye in Studio if either
constraint changes (a differently-shaped motion graphic, a caption
font-size change) rather than guessing a new ratio from formulas alone
— see Common pitfalls below for why the formula-only approach failed
twice here.

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
- **Shared-component regressions from merging in `main`'s engine
  work.** `Watermark.tsx` reverted to the exact video-001 defect (large,
  centered, opaque) via a "reconcile main's engine work" merge, months
  after this doc says it was fixed — the fix lives in code shared with
  other projects in this repo, so it can silently drift back. Don't
  trust this doc's prose alone; check the actual component before
  assuming the spec is what renders (§6, §8, §10 above all note what to
  check).
- **Fixing a margin/position purely from a formula, without a visual
  check in Studio.** The rótulo bottom-margin fix (§10) needed two
  follow-up rounds after the first formula-derived value (a generic
  ratio of frame height) turned out right for the caption but wrong for
  a motion graphic behind it, then a second attempt overcorrected in
  the wrong direction entirely. The value that actually worked came
  from measuring the real conflict in Studio, not from computing it in
  the abstract.
- Forcing a hook title onto one line "because it's a title" when it's
  long enough to shrink below where it's easy to read at a glance — see
  §4's multi-line note; more lines at a bigger size beats one line
  auto-shrunk to fit.
