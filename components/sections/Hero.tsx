import CrystalTrailBackground from "@/components/ui/crystal-trail-background";

export default function Hero() {
  const glow = "0 0 5px #c084fc, 0 0 10px #c084fc";
  return (
    <main>
      <CrystalTrailBackground>
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center select-none text-center">
          <div className="p-8 sm:p-12">
            <h1
              className="m-0 font-bold uppercase tracking-widest text-5xl sm:text-7xl text-purple-200"
              style={{ textShadow: glow }}
            >
              Louis Cornu
            </h1>
            <h2 className="m-0 mt-2 font-sans uppercase tracking-[.2em] text-lg sm:text-2xl text-purple-200/70">
              Développeur Web Full Stack
            </h2>
          </div>
          <a
            href="#about"
            aria-label="Découvrir la section à propos"
            className="absolute bottom-15 flex flex-col items-center gap-3 px-4 text-sm font-mono text-purple-200/40 transition-colors hover:text-purple-200"
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-10 animate-bounce stroke-emerald-300 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
        </div>
      </CrystalTrailBackground>
    </main>
  );
}
