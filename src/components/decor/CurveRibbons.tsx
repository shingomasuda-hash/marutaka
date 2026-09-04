/**
 * The overlapping arc ribbons that bridge 課題提起 → 選ばれる理由.
 * Three offset strokes in the comp's mint / slate / grey.
 */
export default function CurveRibbons({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 590 240"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M-40 240 C 60 40, 240 40, 330 240" fill="none" stroke="#c7dfd2" strokeWidth="34" strokeLinecap="round" opacity="0.85" />
      <path d="M0 240 C 96 52, 268 52, 356 240" fill="none" stroke="#8fb3a8" strokeWidth="26" strokeLinecap="round" opacity="0.65" />
      <path d="M96 240 C 190 96, 330 96, 420 240" fill="none" stroke="#d9dcda" strokeWidth="30" strokeLinecap="round" opacity="0.9" />
      <path d="M150 240 C 250 120, 380 120, 470 240" fill="none" stroke="#eceeed" strokeWidth="24" strokeLinecap="round" />
    </svg>
  );
}
