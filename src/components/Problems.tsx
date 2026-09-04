import { problems } from '@/data/content';
import Reveal from './Reveal';
import SectionChip from './SectionChip';
import { problemIcons, BulbIcon } from './Icons';
import Swoosh from './decor/Swoosh';
import CurveRibbons from './decor/CurveRibbons';

/** Renders a card line, bolding the runs the comp sets in green. */
function CardText({ parts }: { parts: readonly { t: string; strong?: boolean }[] }) {
  return (
    <p className="text-[clamp(11.5px,3.05vw,15px)] leading-[1.75] text-ink lg:text-base">
      {parts.map((part, i) => {
        const chunks = part.t.split('\n');
        return (
          <span key={i} className={part.strong ? 'font-bold text-green-700' : undefined}>
            {chunks.map((chunk, j) => (
              <span key={j}>
                {j > 0 ? <br /> : null}
                {chunk}
              </span>
            ))}
          </span>
        );
      })}
    </p>
  );
}

/** 02 課題提起 — こんな悩みありませんか？ */
export default function Problems() {
  return (
    <section id="problems" className="relative overflow-hidden bg-white pb-0 pt-14 lg:pt-24">
      <Swoosh className="pointer-events-none absolute -top-4 right-0 h-[190px] w-[56%] max-w-[420px] lg:h-[300px]" />

      <div className="relative mx-auto max-w-content px-6 sm:px-8 lg:px-10">
        <Reveal className="flex flex-col items-center text-center">
          <SectionChip tone="green">{problems.chip}</SectionChip>
          <h2 className="mt-5 text-[clamp(24px,5.9vw,35px)] font-bold leading-[1.45] text-green-700 lg:mt-7 lg:text-[42px]">
            {problems.headingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-9 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {problems.cards.map((card, i) => {
            const Icon = problemIcons[card.icon as keyof typeof problemIcons];
            return (
              <Reveal as="li" key={i} delay={i * 70}>
                <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-green-100 px-3 py-9 text-center shadow-[0_6px_18px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1 sm:px-5 sm:py-10 lg:px-7 lg:py-11">
                  <span className="mb-5 flex h-[68px] w-[68px] items-center justify-center rounded-full bg-green-800 text-white lg:mb-7 lg:h-[72px] lg:w-[72px]">
                    <Icon className="h-8 w-8 lg:h-9 lg:w-9" />
                  </span>
                  <CardText parts={card.parts} />
                </div>
              </Reveal>
            );
          })}

          {/* the closing dark-green card */}
          <Reveal as="li" delay={problems.cards.length * 70}>
            <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-green-800 px-3 py-9 text-center text-white shadow-[0_6px_18px_rgba(0,0,0,0.10)] sm:px-5 sm:py-10 lg:px-7 lg:py-11">
              <span className="mb-5 flex h-[68px] w-[68px] items-center justify-center rounded-full text-white lg:mb-7 lg:h-[72px] lg:w-[72px]">
                <BulbIcon className="h-9 w-9 lg:h-12 lg:w-12" />
              </span>
              <p className="text-[clamp(11.5px,3.05vw,15px)] leading-[1.75] lg:text-base">
                <span className="block">{problems.answerLines[0]}</span>
                <span className="block font-bold">{problems.answerLines[1]}</span>
              </p>
            </div>
          </Reveal>
        </ul>
      </div>

      <CurveRibbons className="mt-10 h-[110px] w-full lg:mt-16 lg:h-[190px]" />
    </section>
  );
}
