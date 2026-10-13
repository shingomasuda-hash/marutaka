import { daySchedule } from '@/data/content';
import Reveal from './Reveal';
import VideoPlayer from './VideoPlayer';
import { videoSources } from '@/data/videos';
import VideoKicker from './VideoKicker';
import WrapLines from './WrapLines';
import DotGrid from './decor/DotGrid';

/** 05 1日の流れ — 1日のスケジュール動画 */
export default function DaySchedule() {
  return (
    <section id="day" className="relative overflow-hidden bg-white pb-12 pt-8 lg:pb-28 lg:pt-16">
      <div className="relative mx-auto max-w-content px-6 sm:px-8 lg:px-10">
        {/* Works と同様、SP は「動画 → 見出し → 説明文」の縦並びにする。 */}
        <div className="flex flex-col items-center gap-7 lg:grid lg:grid-cols-[280px_minmax(0,560px)] lg:items-center lg:justify-center lg:gap-14">
          <Reveal className="w-[58%] min-w-[180px] max-w-[260px] lg:w-full lg:max-w-[280px]">
            <VideoKicker className="mb-3 text-ink lg:mb-4">{daySchedule.videoKicker}</VideoKicker>
            <div>
              <VideoPlayer
                source={videoSources.oneDay}
                label={daySchedule.videoLabel}
                title={daySchedule.videoLabel}
              />
            </div>
          </Reveal>

          <Reveal delay={90} className="w-full max-w-[520px] text-left lg:max-w-none">
            <h2 className="jp-head text-[clamp(20px,5vw,26px)] font-bold leading-[1.55] text-green-700 lg:text-[32px]">
              <WrapLines lines={daySchedule.headingLines} />
            </h2>
            <p className="jp-body mt-3 text-[13.5px] leading-[1.9] text-black/55 lg:mt-5 lg:text-[15px]">
              <WrapLines lines={daySchedule.bodyLines} />
            </p>
          </Reveal>
        </div>
      </div>

      <DotGrid
        rows={6}
        cols={9}
        gap={17}
        radius={5}
        className="pointer-events-none absolute bottom-4 -left-6 -z-10 text-green-300/60 lg:bottom-16 lg:left-2"
      />
    </section>
  );
}
