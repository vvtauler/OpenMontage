import {Config} from '@remotion/cli/config';

// Headless Linux/WSL2 has no real GPU passthrough by default. Without
// forcing a software GL backend, Chromium's GPU process can crash/leak
// memory unpredictably inside Remotion's native compositor (observed here
// as `remotion::ffmpeg::extract_frame` panics that grew worse with higher
// --concurrency and climbed toward OOM even at concurrency=4).
Config.setChromiumOpenGlRenderer('swangle');
Config.setChromiumDisableWebSecurity(false);

// Keep memory bounded: don't let every browser tab hold a large decoded
// frame buffer concurrently. Tune down from the CPU-core default.
Config.setConcurrency(3);
