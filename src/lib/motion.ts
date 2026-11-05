// Shared motion presets so every animation feels like one system.
// Mirrors --ease-out / --dur-* in globals.css.
export const easeOut = [0.22, 1, 0.36, 1] as const;

export const dur = { fast: 0.18, base: 0.45, slow: 0.7 };

// Fade-and-rise for entrances; pair with a small per-item delay for staggers
export const rise = {
	initial: { opacity: 0, y: 24 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: dur.slow, ease: easeOut },
};
