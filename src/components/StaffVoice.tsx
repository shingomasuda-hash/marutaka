import { staffVoice } from '@/data/content';
import Reveal from './Reveal';
import SectionChip from './SectionChip';
import VideoPlayer from './VideoPlayer';
import { videoSources } from '@/data/videos';
import VideoKicker from './VideoKicker';

/** 08 スタッフの声 — スタッフインタビュー動画 */
export default function StaffVoice() {
  return (
    <section id="staff" className="bg-white pb-16 pt-6 lg:pb-28 lg:pt-10">
      <div className="mx-auto max-w-content px-6 sm:px-8 lg:px-10">
        <Reveal className="flex flex-col items-center text-center">
          <SectionChip tone="brown">{staffVoice.chip}</SectionChip>
          <h2 className="mt-5 text-[clamp(25px,6.2vw,36px)] font-bold leading-[1.45] text-green-700 [text-shadow:1px_2px_0_rgba(0,0,0,0.10)] lg:mt-7 lg:text-[42px]">
            {staffVoice.headingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <VideoKicker className="mt-5 text-ink lg:mt-8">{staffVoice.videoKicker}</VideoKicker>
        </Reveal>

        <Reveal delay={80} className="mt-4 flex justify-center lg:mt-6">
          <div className="w-[52%] min-w-[180px] max-w-[285px]">
            <VideoPlayer
              source={videoSources.staffInterview}
              label={staffVoice.videoLabel}
              title={staffVoice.videoLabel}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
