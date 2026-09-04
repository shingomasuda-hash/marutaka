import { entry } from '@/data/content';
import Reveal from './Reveal';
import EntryForm from './EntryForm';

/** 11 エントリーCTA + フォーム */
export default function EntrySection() {
  return (
    <section
      id="entry"
      className="bg-[linear-gradient(135deg,#12a05c_0%,#149658_38%,#12793f_100%)] pb-16 pt-16 lg:pb-24 lg:pt-24"
    >
      <div className="mx-auto max-w-narrow px-6 sm:px-8 lg:px-10">
        <Reveal className="flex flex-col items-center text-center text-white">
          <span className="chip-outline border-white/70 bg-transparent text-white">{entry.chip}</span>
          <h2 className="mt-6 text-[clamp(23px,5.4vw,32px)] font-bold leading-[1.5] lg:mt-8 lg:text-[40px]">
            {entry.headingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-4 text-[11.5px] leading-[1.9] text-white/85 sm:text-sm lg:mt-6 lg:text-base">
            {entry.leadLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-8 lg:mt-12">
          <div className="mx-auto grid w-full max-w-[510px] grid-cols-2 gap-[8%] lg:max-w-[620px] lg:gap-6">
            <a
              href="#entry-form"
              className="flex items-center justify-center rounded-2xl bg-white whitespace-nowrap px-3 py-4 font-serif text-[clamp(15px,4.3vw,19px)] font-semibold text-green-800 shadow-lg transition-transform duration-200 hover:-translate-y-0.5 lg:py-5 lg:text-xl"
            >
              {entry.primaryCta}
            </a>
            <a
              href="#entry-form"
              className="flex items-center justify-center rounded-2xl border border-white/70 whitespace-nowrap px-3 py-4 font-serif text-[clamp(15px,4.3vw,19px)] font-semibold text-white transition-colors duration-200 hover:bg-white/10 lg:py-5 lg:text-xl"
            >
              {entry.secondaryCta}
            </a>
          </div>
          <p className="mt-5 text-center text-[11px] text-white/80 lg:mt-7 lg:text-sm">{entry.note}</p>
        </Reveal>

        <div id="entry-form" className="scroll-mt-8">
          <h3 className="sr-only">応募フォーム</h3>
          <EntryForm />
        </div>
      </div>
    </section>
  );
}
