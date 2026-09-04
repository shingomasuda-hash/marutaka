'use client';

import { useEffect, useRef, type ElementType, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  /** stagger in ms */
  delay?: number;
  className?: string;
  as?: ElementType;
};

/**
 * Small fade-up on first scroll into view. Honours prefers-reduced-motion
 * through the CSS in globals.css, so no JS branch is needed for that.
 */
export default function Reveal({ children, delay = 0, className, as }: Props) {
  const Tag = (as ?? 'div') as ElementType;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-reveal', 'in');
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined}
      className={className}
    >
      {children}
    </Tag>
  );
}
