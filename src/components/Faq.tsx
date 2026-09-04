'use client';

import { useRef, useState } from 'react';
import { faq } from '@/data/content';
import Reveal from './Reveal';
import SectionChip from './SectionChip';

function Item({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  return (
    <li className="overflow-hidden rounded-xl bg-paper">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`faq-panel-${index}`}
          id={`faq-button-${index}`}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center gap-4 px-4 py-5 text-left lg:gap-6 lg:px-8 lg:py-7"
        >
          <span
            aria-hidden="true"
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-700 font-serif text-[13px] text-white lg:h-9 lg:w-9 lg:text-base"
          >
            Q
          </span>
          <span className="flex-1 text-[15.5px] font-medium leading-[1.6] text-ink lg:text-[19px]">
            {q}
          </span>
          <span
            aria-hidden="true"
            className="relative h-4 w-4 shrink-0 text-ink/70 lg:h-5 lg:w-5"
          >
            <span className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-current" />
            <span
              className={`absolute left-1/2 top-0 h-full w-[1.5px] -translate-x-1/2 bg-current transition-transform duration-300 ${
                open ? 'scale-y-0' : 'scale-y-100'
              }`}
            />
          </span>
        </button>
      </h3>

      <div
        ref={panelRef}
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-button-${index}`}
        hidden={!open}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="px-4 pb-6 pl-[52px] text-[13.5px] leading-[1.9] text-black/70 lg:px-8 lg:pb-8 lg:pl-[86px] lg:text-[15px]">
            {a}
          </p>
        </div>
      </div>
    </li>
  );
}

/** 10 よくある質問 — accordion */
export default function Faq() {
  return (
    <section id="faq" className="bg-white pb-16 pt-14 lg:pb-24 lg:pt-24">
      <div className="mx-auto max-w-narrow px-6 sm:px-8 lg:px-10">
        <Reveal className="flex flex-col items-center text-center">
          <SectionChip tone="brown">{faq.chip}</SectionChip>
          <h2 className="mt-5 text-[clamp(26px,6.4vw,38px)] font-bold leading-[1.45] text-green-700 [text-shadow:1px_2px_0_rgba(0,0,0,0.12)] lg:mt-7 lg:text-[42px]">
            {faq.headingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        <ul className="mt-9 space-y-3 lg:mt-14 lg:space-y-4">
          {faq.items.map((item, i) => (
            <Item key={item.q} q={item.q} a={item.a} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
