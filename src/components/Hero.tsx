import { hero } from '@/data/content';

/**
 * 01 FV.
 *
 * The photograph is applied as a layered CSS background so that a missing
 * file degrades to the comp's sky/green tone instead of a broken <img>.
 * Drop the supplied photograph at /public/assets/images/hero.jpg
 * (and optionally a wider PC crop at hero-pc.jpg) and it appears here.
 */
export default function Hero() {
  return (
    <section
      id="fv"
      aria-label="丸髙工業 採用 2026"
      className="relative isolate min-h-[min(193vw,1150px)] w-full overflow-hidden bg-green-900 lg:min-h-[780px]"
    >
      {/* photograph */}
      <div className="hero-photo absolute inset-0 -z-10" />
      {/* the comp darkens the lower half so the copy holds */}
      <div className="hero-scrim absolute inset-0 -z-10" />

      {/* 30+ 年の実績 */}
      <div className="absolute right-[7.6%] top-[6%] z-10 lg:right-10 lg:top-10">
        <div className="flex aspect-[146/140] w-[24.6vw] max-w-[146px] flex-col items-center justify-center rounded-[3px] bg-[linear-gradient(135deg,#0f7a37_0%,#23a83c_52%,#0d6f33_100%)] text-white shadow-lg lg:w-[146px]">
          <span className="font-serif text-[clamp(30px,8.8vw,52px)] font-semibold leading-none">
            {hero.badgeNumber}
          </span>
          <span className="mt-1.5 font-serif text-[clamp(12px,3.2vw,19px)] tracking-[0.14em]">
            {hero.badgeLabel}
          </span>
        </div>
      </div>

      {/* copy block, anchored to the lower part of the frame as in the comp */}
      <div className="relative z-10 mx-auto flex min-h-[min(193vw,1150px)] w-full max-w-content flex-col justify-end px-6 pb-8 pt-32 sm:px-8 lg:min-h-[820px] lg:max-w-[1360px] lg:px-10 lg:pb-14">
        <p className="mb-4 flex items-center gap-2 text-[13px] font-medium tracking-[0.22em] text-white/95 lg:absolute lg:left-10 lg:top-12 lg:mb-0 lg:text-[15px]">
          <span aria-hidden="true">—</span>
          {hero.eyebrow}
          <span aria-hidden="true">—</span>
        </p>

        <h1 className="font-serif text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.35)]">
          {hero.titleLines.map((line) => (
            <span
              key={line}
              className="block whitespace-nowrap text-[clamp(30px,10.2vw,65px)] font-medium leading-[1.19] lg:text-[72px]"
            >
              {line}
            </span>
          ))}
        </h1>

        <p className="mt-4 text-[clamp(12px,3.35vw,15px)] leading-[1.55] text-white/95 lg:mt-6 lg:text-[17px]">
          {hero.leadLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>

        {/* two-column feature strip exactly as laid out in the comp */}
        <div className="mt-6 grid grid-cols-[41%_1fr] gap-y-2 whitespace-nowrap text-[clamp(11px,3.1vw,13px)] text-white lg:mt-14 lg:flex lg:items-center lg:gap-7 lg:text-[15px]">
          <p>・{hero.points[0]}</p>
          <p className="lg:order-3">
            <span className="inline-block rounded-[3px] bg-green-800/90 px-2.5 py-1 font-medium tracking-wide">
              {hero.tag}
            </span>
          </p>
          <p className="lg:order-2">・{hero.points[2]}</p>
          <p className="lg:order-4">・{hero.points[1]}</p>
        </div>

        <div className="mx-auto mt-7 grid w-full max-w-[478px] grid-cols-2 gap-[7%] lg:mx-0 lg:mt-7 lg:max-w-[452px] lg:gap-5">
          <a
            href="#entry"
            className="flex items-center justify-center rounded-xl bg-green-800 whitespace-nowrap px-3 py-4 font-serif text-[clamp(15px,4.3vw,19px)] font-semibold text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:bg-green-700 lg:py-5 lg:text-2xl"
          >
            {hero.primaryCta}
          </a>
          <a
            href="#jobs"
            className="flex items-center justify-center rounded-xl bg-white whitespace-nowrap px-3 py-4 font-serif text-[clamp(15px,4.3vw,19px)] font-semibold text-green-800 shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:bg-green-50 lg:py-5 lg:text-2xl"
          >
            {hero.secondaryCta}
          </a>
        </div>
      </div>

      {/* SCROLL cue — desktop only, where the comp has room for it */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="text-[10px] font-medium tracking-[0.3em] text-white/85">{hero.scroll}</span>
        <span className="block h-14 w-px animate-scrollLine bg-white/80" />
      </div>
    </section>
  );
}
