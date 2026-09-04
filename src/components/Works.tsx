import { works } from '@/data/content';
import Reveal from './Reveal';
import SectionChip from './SectionChip';
import VideoPlayer from './VideoPlayer';
import VideoKicker from './VideoKicker';
import DotGrid from './decor/DotGrid';
import { workIcons } from './Icons';

/** 04 わたしたちの仕事 — 事業紹介 + 社内ツアー動画 */
export default function Works() {
  return (
    <section id="works" className="relative overflow-hidden bg-white pt-14 lg:pt-24">
      <div className="relative mx-auto max-w-content px-6 sm:px-8 lg:px-10">
        <Reveal className="flex flex-col items-center text-center">
          <SectionChip tone="brown">{works.chip}</SectionChip>
          <h2 className="mt-5 text-[clamp(24px,5.6vw,33px)] font-bold leading-[1.45] text-green-700 [text-shadow:1px_2px_0_rgba(0,0,0,0.10)] lg:mt-7 lg:text-[42px]">
            {works.headingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        {/* video + side copy */}
        <div className="mt-9 flex items-start gap-5 pl-[6%] lg:mt-16 lg:pl-0 lg:grid lg:grid-cols-[300px_minmax(0,600px)] lg:items-center lg:justify-center lg:gap-16">
          <Reveal className="w-[46%] min-w-[168px] max-w-[240px] shrink-0 lg:w-full lg:max-w-[300px]">
            <VideoKicker className="mb-3 text-ink lg:mb-4">{works.videoKicker}</VideoKicker>
            <div>
              <VideoPlayer
                src="/videos/web/company-tour.mp4"
                poster="/videos/posters/company-tour.jpg"
                label={works.videoLabel}
                title={works.videoLabel}
              />
            </div>
          </Reveal>

          <Reveal delay={90} className="flex-1 pt-8 text-right lg:pt-0 lg:text-left">
            <h3 className="text-[clamp(15px,3.3vw,20px)] font-bold leading-[1.7] text-green-700 lg:text-[26px]">
              {works.sideHeadingLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h3>
            <p className="mt-3 text-[11.5px] text-black/55 lg:mt-5 lg:text-[15px]">
              {works.sideNote}
            </p>
          </Reveal>
        </div>

        {/* business cards */}
        <ul className="relative mx-auto mt-12 w-[80%] max-w-[440px] space-y-9 lg:mt-20 lg:grid lg:w-full lg:max-w-none lg:grid-cols-3 lg:gap-7 lg:space-y-0">
          <DotGrid
            rows={9}
            cols={7}
            gap={17}
            radius={6}
            variant="halftone"
            from="top-right"
            className="pointer-events-none absolute -right-14 top-[18%] -z-10 hidden text-green-300/70 lg:block"
          />
          {works.cards.map((card, i) => {
            const Icon = workIcons[card.icon as keyof typeof workIcons];
            return (
              <Reveal as="li" key={card.title} delay={i * 80}>
                <div className="flex h-full flex-col items-center rounded-3xl bg-green-100 px-6 py-9 text-center shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1 lg:px-7 lg:py-12">
                  <span className="mb-6 flex h-[68px] w-[68px] items-center justify-center rounded-full bg-green-800 text-white lg:h-[76px] lg:w-[76px]">
                    <Icon className="h-8 w-8 lg:h-10 lg:w-10" />
                  </span>
                  <h3 className="text-[clamp(20px,4.6vw,27px)] font-bold tracking-[0.04em] text-ink [text-shadow:1px_2px_0_rgba(0,0,0,0.12)] lg:text-[22px]">
                    {card.title}
                  </h3>
                  <p className="mt-4 flex-1 text-[14.5px] leading-[1.9] text-black/70 lg:mt-6 lg:text-[15px]">
                    {card.body}
                  </p>
                  <span className="mt-6 self-start rounded-md bg-green-400 px-4 py-1.5 text-[12px] font-medium text-white sm:text-sm lg:mt-8">
                    {card.chip}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>

      <DotGrid
        rows={11}
        cols={6}
        gap={17}
        radius={6}
        variant="halftone"
        from="top-left"
        className="pointer-events-none absolute -left-8 top-[30%] -z-10 text-green-300/70 lg:hidden"
      />
    </section>
  );
}
