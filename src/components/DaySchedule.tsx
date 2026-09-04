import { daySchedule } from '@/data/content';
import Reveal from './Reveal';
import VideoPlayer from './VideoPlayer';
import { videoSources } from '@/data/videos';
import VideoKicker from './VideoKicker';
import DotGrid from './decor/DotGrid';

/** 05 1日の流れ — 1日のスケジュール動画 */
export default function DaySchedule() {
  return (
    <section id="day" className="relative overflow-hidden bg-white pb-12 pt-8 lg:pb-28 lg:pt-16">
      <div className="relative mx-auto max-w-content px-6 sm:px-8 lg:px-10">
        <div className="flex items-end gap-5 pl-[6%] lg:pl-0 lg:grid lg:grid-cols-[300px_minmax(0,600px)] lg:items-center lg:justify-center lg:gap-16">
          <Reveal className="w-[46%] min-w-[168px] max-w-[240px] shrink-0 lg:w-full lg:max-w-[300px]">
            <VideoKicker className="mb-3 text-ink lg:mb-4">{daySchedule.videoKicker}</VideoKicker>
            <div>
              <VideoPlayer
                source={videoSources.oneDay}
                label={daySchedule.videoLabel}
                title={daySchedule.videoLabel}
              />
            </div>
          </Reveal>

          <Reveal delay={90} className="flex-1 pb-6 text-right lg:pb-0 lg:text-left">
            <h2 className="text-[clamp(19px,4.6vw,28px)] font-bold leading-[1.6] text-green-700 lg:text-[32px]">
              {daySchedule.headingLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-3 text-[11.5px] leading-[1.85] text-black/55 lg:mt-5 lg:text-[15px]">
              {daySchedule.bodyLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
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
