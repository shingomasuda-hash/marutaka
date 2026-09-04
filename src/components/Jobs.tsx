'use client';

import { useId, useState } from 'react';
import { jobs, jobsSection, type JobRow } from '@/data/content';
import Reveal from './Reveal';
import SectionChip from './SectionChip';
import DotGrid from './decor/DotGrid';

function Row({ row }: { row: JobRow }) {
  return (
    <div className="grid grid-cols-[86px_1fr] gap-x-3 border-b border-black/[0.08] py-4 last:border-b-0 lg:grid-cols-[150px_1fr] lg:gap-5 lg:py-6">
      <dt className="text-[13.5px] font-bold leading-[1.5] text-ink lg:text-[17px]">{row.label}</dt>
      <dd className="min-w-0">
        {row.lead ? (
          <p className="text-[15px] font-bold leading-[1.5] text-ink lg:text-[19px]">{row.lead}</p>
        ) : null}
        {row.blocks.map((block, i) => (
          <div key={i} className={row.lead || i > 0 ? 'mt-1.5 lg:mt-2.5' : ''}>
            {block.map((line) => (
              <p key={line} className="text-[13.5px] leading-[1.5] text-black/65 lg:text-[15px]">
                {line}
              </p>
            ))}
          </div>
        ))}
      </dd>
    </div>
  );
}

/** 09 募集要項 — tabbed between 空間クリエイター / マイスター事業部 */
export default function Jobs() {
  const [activeId, setActiveId] = useState(jobs[0].id);
  const baseId = useId();
  const active = jobs.find((job) => job.id === activeId) ?? jobs[0];

  return (
    <section id="jobs" className="relative overflow-hidden bg-green-100 pb-14 pt-14 lg:pb-24 lg:pt-24">
      <DotGrid
        rows={5}
        cols={8}
        gap={18}
        radius={5}
        className="pointer-events-none absolute right-4 top-[13%] text-green-300/70"
      />
      <DotGrid
        rows={5}
        cols={5}
        gap={18}
        radius={5}
        className="pointer-events-none absolute -left-6 bottom-[18%] text-green-300/50"
      />

      <div className="relative mx-auto max-w-content px-6 sm:px-8 lg:px-10">
        <Reveal className="flex flex-col items-center text-center">
          <SectionChip tone="brown">{jobsSection.chip}</SectionChip>
          <h2 className="mt-5 text-[clamp(25px,6.3vw,37px)] font-bold leading-[1.45] text-ink [text-shadow:1px_2px_0_rgba(0,0,0,0.10)] lg:mt-7 lg:text-[42px]">
            <span className="block">{jobsSection.headingLines[0]}</span>
            <span className="block">
              <span className="text-green-600">ポジション</span>を探してください
            </span>
          </h2>
        </Reveal>

        {/* tabs */}
        <div
          role="tablist"
          aria-label="募集職種"
          className="mt-8 grid grid-cols-2 gap-3 lg:mt-12 lg:mx-auto lg:max-w-[620px] lg:gap-5"
        >
          {jobs.map((job) => {
            const selected = job.id === activeId;
            return (
              <button
                key={job.id}
                type="button"
                role="tab"
                id={`${baseId}-tab-${job.id}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel-${job.id}`}
                onClick={() => setActiveId(job.id)}
                className={`rounded-lg px-3 py-4 text-[clamp(16px,4.2vw,22px)] font-bold text-white transition-colors duration-200 lg:py-5 lg:text-xl ${
                  selected
                    ? 'bg-[linear-gradient(100deg,#01913a_0%,#157c47_100%)] shadow-md'
                    : 'bg-green-300 hover:bg-green-400'
                }`}
              >
                {job.tab}
              </button>
            );
          })}
        </div>

        {/* panel */}
        <Reveal delay={60}>
          <div
            role="tabpanel"
            id={`${baseId}-panel-${active.id}`}
            aria-labelledby={`${baseId}-tab-${active.id}`}
            className="mt-6 rounded-2xl bg-white px-5 py-7 shadow-[0_10px_30px_rgba(0,0,0,0.06)] lg:mt-9 lg:px-14 lg:py-12"
          >
            <h3 className="text-[clamp(26px,5.6vw,32px)] font-bold text-ink [text-shadow:1px_2px_0_rgba(0,0,0,0.10)] lg:text-[36px]">
              {active.title}
            </h3>
            <p className="mt-1 text-[14px] font-bold text-ink lg:text-[19px]">{active.subtitle}</p>

            <dl className="mt-6 lg:mt-9">
              {/* 仕事内容 runs full width; the remaining rows sit in two
                  columns on desktop, as in PC_募集要項. */}
              <Row row={active.rows[0]} />
              <div className="lg:grid lg:grid-cols-2 lg:gap-x-14">
                {active.rows.slice(1).map((row) => (
                  <Row key={`${active.id}-${row.label}`} row={row} />
                ))}
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
