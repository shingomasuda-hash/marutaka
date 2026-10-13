import { works } from '@/data/content';
import Reveal from './Reveal';
import SectionChip from './SectionChip';
import VideoPlayer from './VideoPlayer';
import { videoSources } from '@/data/videos';
import VideoKicker from './VideoKicker';
import WrapLines from './WrapLines';
import DotGrid from './decor/DotGrid';
import { workIcons } from './Icons';

/** 04 わたしたちの仕事 — 事業紹介 + 社内ツアー動画 */
export default function Works() {
  return (
    <section id="works" className="relative overflow-hidden bg-white pt-14 lg:pt-24">
      <div className="relative mx-auto max-w-content px-6 sm:px-8 lg:px-10">
        <Reveal className="flex flex-col items-center text-center">
          <SectionChip tone="brown">{works.chip}</SectionChip>
          <h2 className="jp-head mt-5 text-[clamp(24px,5.6vw,33px)] font-bold leading-[1.45] text-green-700 [text-shadow:1px_2px_0_rgba(0,0,0,0.10)] lg:mt-7 lg:text-[42px]">
            <WrapLines lines={works.headingLines} />
          </h2>
        </Reveal>

        {/*
          動画 + 説明文。
          SP は横幅が足りないので「動画 → 見出し → 説明文」の縦並び、
          PC だけ横並びにする。
        */}
        <div className="mt-9 flex flex-col items-center gap-7 lg:mt-16 lg:grid lg:grid-cols-[280px_minmax(0,560px)] lg:items-center lg:justify-center lg:gap-14">
          <Reveal className="w-[58%] min-w-[180px] max-w-[260px] lg:w-full lg:max-w-[280px]">
            <VideoKicker className="mb-3 text-ink lg:mb-4">{works.videoKicker}</VideoKicker>
            <div>
              <VideoPlayer
                source={videoSources.companyTour}
                label={works.videoLabel}
                title={works.videoLabel}
              />
            </div>
          </Reveal>

          <Reveal delay={90} className="w-full max-w-[520px] text-left lg:max-w-none">
            <h3 className="jp-head text-[clamp(17px,4.4vw,22px)] font-bold leading-[1.6] text-green-700 lg:text-[26px]">
              <WrapLines lines={works.sideHeadingLines} />
            </h3>
            <p className="jp-body mt-3 text-[13.5px] leading-[1.9] text-black/55 lg:mt-5 lg:text-[15px]">
              {works.sideNote}
            </p>
          </Reveal>
        </div>

        {/* business cards */}
        <ul className="relative mx-auto mt-12 w-full max-w-[520px] space-y-7 lg:mt-20 lg:max-w-none lg:grid lg:grid-cols-3 lg:items-start lg:gap-7 lg:space-y-0">
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
                <div className="flex flex-col items-center rounded-3xl bg-green-100 px-7 py-9 shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1 sm:px-9 lg:px-7 lg:py-11">
                  <span className="mb-6 flex h-[68px] w-[68px] items-center justify-center rounded-full bg-green-800 text-white lg:h-[76px] lg:w-[76px]">
                    <Icon className="h-8 w-8 lg:h-10 lg:w-10" />
                  </span>
                  <h3 className="jp-head text-center text-[clamp(20px,4.6vw,27px)] font-bold tracking-[0.04em] text-ink [text-shadow:1px_2px_0_rgba(0,0,0,0.12)] lg:text-[22px]">
                    {card.title}
                  </h3>
                  {/* 長文なので左揃え。中央揃えの長文は行頭が揃わず読みにくい。 */}
                  <p className="jp-body mt-4 self-stretch text-left text-[14.5px] leading-[1.95] text-black/70 lg:mt-6 lg:text-[15px]">
                    {card.body}
                  </p>
                  <span className="mt-6 self-start rounded-md bg-green-400 px-4 py-1.5 text-[12px] font-medium text-white sm:text-sm lg:mt-7">
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
