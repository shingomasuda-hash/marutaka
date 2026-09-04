type Props = {
  rows: number;
  cols: number;
  /** spacing between dot centres, in svg units */
  gap?: number;
  /** max dot radius, in svg units */
  radius?: number;
  /**
   * 'uniform'  – every dot the same size (募集要項 / 1日の流れ)
   * 'halftone' – dots shrink towards the given corner (わたしたちの仕事)
   */
  variant?: 'uniform' | 'halftone';
  from?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  color?: string;
};

/**
 * The dotted pattern blocks that sit behind the cards in several sections.
 * Rendered as SVG rather than a bitmap so it stays sharp at any DPR.
 */
export default function DotGrid({
  rows,
  cols,
  gap = 16,
  radius = 5,
  variant = 'uniform',
  from = 'bottom-right',
  className = '',
  color = 'currentColor',
}: Props) {
  const w = (cols - 1) * gap + radius * 2;
  const h = (rows - 1) * gap + radius * 2;
  const dots = [];

  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      let scale = 1;

      if (variant === 'halftone') {
        const fx = from.includes('right') ? c / (cols - 1) : 1 - c / (cols - 1);
        const fy = from.includes('bottom') ? r / (rows - 1) : 1 - r / (rows - 1);
        // distance from the dense corner, normalised
        const d = Math.sqrt(fx * fx + fy * fy) / Math.SQRT2;
        scale = Math.max(0.16, 1 - d);
      }

      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={radius + c * gap}
          cy={radius + r * gap}
          r={radius * scale}
          fill={color}
        />,
      );
    }
  }

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width={w}
      height={h}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {dots}
    </svg>
  );
}
