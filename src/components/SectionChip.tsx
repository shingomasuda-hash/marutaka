type Tone = 'brown' | 'green' | 'light';

const tones: Record<Tone, string> = {
  brown: 'border-brown-300 text-brown-700 bg-white',
  green: 'border-green-700/40 text-green-700 bg-white',
  light: 'border-white/60 text-white bg-transparent',
};

/** The rounded outline pill that sits above nearly every section heading. */
export default function SectionChip({
  children,
  tone = 'brown',
  className = '',
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return <span className={`chip-outline ${tones[tone]} ${className}`}>{children}</span>;
}
