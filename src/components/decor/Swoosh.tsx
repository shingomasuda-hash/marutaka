/**
 * The pale grey ribbon that sweeps out of the FV into the 課題提起 section
 * on the right-hand side.
 */
export default function Swoosh({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 340 300"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M40 0 C 150 90, 190 170, 130 300 L 340 300 L 340 0 Z" fill="#f0f0f0" />
      <path d="M120 0 C 235 100, 270 190, 215 300 L 340 300 L 340 0 Z" fill="#e6e7e6" />
    </svg>
  );
}
