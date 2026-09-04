import { message } from '@/data/content';
import Reveal from './Reveal';
import SectionChip from './SectionChip';
import { CheckIcon, ArrowRightIcon } from './Icons';

/** 07 あなたへのメッセージ — 未経験 / 経験者 */
export default function Message() {
  return (
    <section id="message" className="bg-white pb-16 pt-14 lg:pb-24 lg:pt-24">
      <div className="mx-auto max-w-content px-6 sm:px-8 lg:px-10">
        <Reveal className="flex flex-col items-center text-center">
          <SectionChip tone="brown">{message.chip}</SectionChip>
          <h2 className="mt-5 text-[clamp(21px,5.3vw,31px)] font-bold leading-[1.45] text-green-700 lg:mt-7 lg:text-[40px]">
            {message.heading}
          </h2>
        </Reveal>

        <div className="mx-auto mt-10 w-[92%] max-w-[480px] space-y-9 lg:mt-16 lg:grid lg:w-full lg:max-w-none lg:grid-cols-2 lg:gap-9 lg:space-y-0">
          {message.columns.map((col, i) => (
            <Reveal key={col.title} delay={i * 90}>
              <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.10)]">
                <div className="bg-[linear-gradient(100deg,#014a26_0%,#00873f_58%,#01913a_100%)] px-6 py-8 text-center text-white lg:py-10">
                  <h3 className="font-serif text-[24px] font-semibold lg:text-[30px]">{col.title}</h3>
                  <p className="mt-2 text-[12px] text-white/85 lg:text-sm">{col.subtitle}</p>
                </div>

                <ul className="flex-1 px-5 py-2 lg:px-7 lg:py-4">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 border-b border-black/[0.07] py-4 last:border-b-0 lg:gap-4 lg:py-5"
                    >
                      <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-ink text-white lg:h-6 lg:w-6">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-[13.5px] leading-[1.7] text-black/75 lg:text-[14.5px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#jobs"
                  className="flex items-center justify-center gap-4 bg-[#d5dfd7] px-6 py-5 text-[14px] font-bold text-ink transition-colors duration-200 hover:bg-[#c6d3c9] sm:text-base lg:py-6 lg:text-lg"
                >
                  {col.cta}
                  <ArrowRightIcon className="h-5 w-5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
