import { reasons } from '@/data/content';
import Reveal from './Reveal';
import SectionChip from './SectionChip';
import Skyline from './decor/Skyline';

/**
 * 03 選ばれる理由.
 *
 * Full-bleed photograph under a deep-green wash, as in the comp. Supply the
 * background photograph at /public/assets/images/reasons-bg.jpg.
 */
export default function Reasons() {
  return (
    <section id="reasons" className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/images/reasons-bg.jpg'), linear-gradient(160deg,#1d6a4a 0%,#12613f 55%,#0d4f34 100%)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(22,96,73,0.94)_0%,rgba(18,110,72,0.88)_38%,rgba(10,105,60,0.90)_100%)]" />

      <div className="relative mx-auto max-w-content px-6 pb-24 pt-14 sm:px-8 lg:px-10 lg:pb-36 lg:pt-24">
        <Reveal className="flex flex-col items-center text-center text-white">
          <SectionChip tone="light">{reasons.chip}</SectionChip>
          <h2 className="mt-5 text-[clamp(26px,6.2vw,36px)] font-bold leading-[1.45] lg:mt-7 lg:text-[44px]">
            {reasons.headingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-4 text-[12px] tracking-wide text-white/85 lg:mt-6 lg:text-base">
            {reasons.lead}
          </p>
        </Reveal>

        <ol className="mt-10 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-x-14">
          {reasons.items.map((item, i) => (
            <Reveal
              as="li"
              key={item.no}
              delay={i * 60}
              className={`border-t border-white/20 py-7 first:border-t-0 lg:py-9 ${
                i === reasons.items.length - 1 ? 'lg:col-span-2 lg:max-w-[calc(50%-1.75rem)]' : ''
              } ${i < 2 ? 'lg:border-t-0' : ''}`}
            >
              <div className="flex gap-4 lg:gap-7">
                <span className="font-serif text-[38px] leading-none text-white/45 lg:text-[54px]">
                  {item.no}
                </span>
                <div className="flex-1 pt-1">
                  <h3 className="text-[17px] font-bold leading-[1.45] text-white sm:text-xl lg:text-[23px]">
                    {item.titleLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-[1.85] text-white/90 lg:mt-4 lg:text-[15px]">
                    {item.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>

      <Skyline className="pointer-events-none absolute bottom-0 left-0 h-[80px] w-full lg:h-[130px]" />
    </section>
  );
}
