/**
 * The thin architectural skyline outline that runs along the bottom of the
 * 選ばれる理由 section.
 */
export default function Skyline({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 590 130"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0 128 L0 112 L18 112 L18 98 L38 98 L38 74 L52 74 L52 60 L66 60 L66 74 L80 74 L80 96 L94 96 L94 84 L104 84 L104 30 L108 30 L108 12 L112 12 L112 30 L116 30 L116 84 L140 84 L140 128
           M140 128 L140 96 L162 96 L162 108 L176 108 L176 88 L188 88 L188 74 L206 74 L206 62 L224 62 L224 96 L238 96 L238 108 L252 108 L252 92 L262 92 L262 68 L272 68 L272 92 L282 92 L282 108 L300 108 L300 128
           M300 128 L300 96 L318 96 L318 82 L346 82 L346 104 L372 104 L372 88 L392 88 L392 66 L410 66 L410 44 L416 44 L416 30 L420 30 L420 44 L426 44 L426 66 L442 66 L442 100 L458 100 L458 116 L474 116 L474 128
           M474 128 L474 104 L492 104 L492 78 L512 78 L512 104 L528 104 L528 92 L548 92 L548 110 L568 110 L568 122 L590 122"
        fill="none"
        stroke="#0f1c16"
        strokeWidth="3.2"
        strokeLinejoin="round"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}
