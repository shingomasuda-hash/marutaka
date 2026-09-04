/**
 * Inline SVG versions of the round icons used in the 課題提起 / わたしたちの仕事
 * cards. Drawn as paths so they stay crisp and cost no extra requests.
 */
type IconProps = { className?: string };

const box = '0 0 24 24';

export function CrossIcon({ className }: IconProps) {
  return (
    <svg viewBox={box} className={className} fill="none" aria-hidden="true">
      <path d="M7 7l10 10M17 7L7 17" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

export function SkillIcon({ className }: IconProps) {
  return (
    <svg viewBox={box} className={className} fill="none" aria-hidden="true">
      <path
        d="M6 3.6h8.4L18.4 7.6V20.4H6z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M9.2 12.4l2 2 4-4.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LeafIcon({ className }: IconProps) {
  return (
    <svg viewBox={box} className={className} fill="none" aria-hidden="true">
      <path
        d="M18.5 5.5c0 7.2-4.2 11.4-9.6 11.4-1.4 0-2.6-.3-3.4-.7 0-7.2 4.2-11.4 9.6-11.4 1.4 0 2.6.3 3.4.7z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M6 19.2c2.6-3.8 5.6-6.4 9-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ListIcon({ className }: IconProps) {
  return (
    <svg viewBox={box} className={className} fill="none" aria-hidden="true">
      <path d="M11 7h8M11 12h8M11 17h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M4.6 6.9l1.3 1.3 2.3-2.4M4.6 11.9l1.3 1.3 2.3-2.4M4.6 16.9l1.3 1.3 2.3-2.4"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ThumbIcon({ className }: IconProps) {
  return (
    <svg viewBox={box} className={className} fill="none" aria-hidden="true">
      <path
        d="M9 10.6l3.4-6.2c1.4 0 2.3.9 2.3 2.3v3h3.4c1.2 0 2 1 1.8 2.1l-1.1 5.6c-.2 1-1 1.7-2 1.7H9z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect x="4" y="10.6" width="3.4" height="8.5" rx="1" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function BulbIcon({ className }: IconProps) {
  return (
    <svg viewBox={box} className={className} fill="none" aria-hidden="true">
      <path
        d="M12 3.2a6 6 0 0 0-3.4 10.9c.5.4.8 1 .8 1.6v.6h5.2v-.6c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 3.2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M9.8 19h4.4M10.4 21h3.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function BankIcon({ className }: IconProps) {
  return (
    <svg viewBox={box} className={className} fill="none" aria-hidden="true">
      <path d="M3.4 9.4L12 4.6l8.6 4.8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M6.4 11v6.4M10.1 11v6.4M13.9 11v6.4M17.6 11v6.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 19.6h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function PaletteIcon({ className }: IconProps) {
  return (
    <svg viewBox={box} className={className} fill="none" aria-hidden="true">
      <path
        d="M12 3.6a8.4 8.4 0 1 0 0 16.8c1.2 0 1.9-.8 1.9-1.7 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.7 1.9-1.7h1.5a4.1 4.1 0 0 0 4.1-4.1c0-3.8-3.7-6.9-8.4-6.9z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="8.1" cy="10" r="1.3" fill="currentColor" />
      <circle cx="12" cy="7.9" r="1.3" fill="currentColor" />
      <circle cx="15.9" cy="10" r="1.3" fill="currentColor" />
    </svg>
  );
}

export function GearIcon({ className }: IconProps) {
  return (
    <svg viewBox={box} className={className} fill="none" aria-hidden="true">
      <path
        d="M12 8.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M10.6 3h2.8l.4 2.3 1.9.8 1.9-1.3 2 2-1.3 1.9.8 1.9 2.3.4v2.8l-2.3.4-.8 1.9 1.3 1.9-2 2-1.9-1.3-1.9.8-.4 2.3h-2.8l-.4-2.3-1.9-.8-1.9 1.3-2-2 1.3-1.9-.8-1.9L3 13.4v-2.8l2.3-.4.8-1.9L4.8 6.4l2-2 1.9 1.3 1.9-.8z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox={box} className={className} fill="none" aria-hidden="true">
      <path d="M6 12.4l4 4 8-8.6" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox={box} className={className} fill="none" aria-hidden="true">
      <path d="M4 12h15m-5.5-5.5L19 12l-5.5 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const problemIcons = {
  cross: CrossIcon,
  skill: SkillIcon,
  leaf: LeafIcon,
  list: ListIcon,
  thumb: ThumbIcon,
  bulb: BulbIcon,
} as const;

export const workIcons = { bank: BankIcon, palette: PaletteIcon, gear: GearIcon } as const;
