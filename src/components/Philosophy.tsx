import { philosophy } from '@/data/content';
import Reveal from './Reveal';
import SectionChip from './SectionChip';
import VideoPlayer from './VideoPlayer';

/**
 * 06 わたしたちの想い.
 *
 * Full-bleed photograph under a green wash, with the 代表挨拶 video sitting
 * on top. Supply the background photograph at
 * /public/assets/images/philosophy-bg.jpg.
 */
export default function Philosophy() {
  return (
    <section id="philosophy" className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/images/philosophy-bg.jpg'), linear-gradient(170deg,#1a6b4c 0%,#12734a 50%,#0c5c3a 100%)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(13,92,58,0.93)_0%,rgba(12,120,68,0.86)_45%,rgba(9,110,60,0.92)_100%)]" />

      <div className="relative mx-auto max-w-narrow px-6 pb-14 pt-14 text-white sm:px-8 lg:px-10 lg:pb-24 lg:pt-24">
        <Reveal className="flex flex-col items-center text-center">
          <SectionChip tone="light">{philosophy.chip}</SectionChip>
          <h2 className="mt-5 text-[clamp(23px,5.4vw,32px)] font-bold leading-[1.5] [text-shadow:1px_2px_6px_rgba(0,0,0,0.25)] lg:mt-7 lg:text-[40px]">
            {philosophy.headingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        <Reveal delay={80} className="prose-green mx-auto mt-8 max-w-[500px] text-center lg:mt-12 lg:max-w-none">
          {philosophy.body.map((para) => (
            <p key={para.slice(0, 12)} className="mb-5 text-[14.5px] text-white/95 lg:text-[16px]">
              {para}
            </p>
          ))}
        </Reveal>

        <Reveal delay={140}>
          <blockquote className="mx-auto mt-6 max-w-[560px] border-l-2 border-white/45 pl-5 text-left lg:mt-10 lg:pl-7">
            {philosophy.quoteLines.map((line) => (
              <p key={line} className="text-[14px] leading-[1.95] text-white lg:text-[16px]">
                {line}
              </p>
            ))}
          </blockquote>
        </Reveal>

        <Reveal delay={180} className="mt-10 flex justify-center lg:mt-16">
          <div className="w-[54%] min-w-[190px] max-w-[315px]">
            <VideoPlayer
              src="/videos/web/ceo-message.mp4"
              poster="/videos/posters/ceo-message.jpg"
              label={philosophy.videoLabel}
              labelTone="brown"
              title={philosophy.videoLabel}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
