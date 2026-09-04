'use client';

import { useRef, useState } from 'react';

export type VideoPlayerProps = {
  /** Web-optimised MP4 under /public/videos/web/ */
  src: string;
  /** Poster frame under /public/videos/posters/ */
  poster?: string;
  /** The label chip baked into the comp, e.g. 事業内容紹介動画 */
  label: string;
  /** Chip colour: green for most frames, brown for 社長メッセージ */
  labelTone?: 'green' | 'brown';
  /** Accessible name for the play control */
  title: string;
  className?: string;
};

/**
 * Video frame as drawn in the comp: rounded grey plate, poster image, a soft
 * overlay, a centred play button and the label chip pinned bottom-left.
 *
 * The <video> element is only mounted once the visitor presses play, so no
 * media bytes are fetched during page load. Nothing here ever autoplays.
 */
export default function VideoPlayer({
  src,
  poster,
  label,
  labelTone = 'green',
  title,
  className = '',
}: VideoPlayerProps) {
  const [active, setActive] = useState(false);
  const [failed, setFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const chip =
    labelTone === 'brown'
      ? 'bg-brown-600 text-white'
      : 'bg-green-800 text-white';

  return (
    <div
      className={`relative aspect-[27/50] w-full overflow-hidden rounded-2xl bg-frame shadow-[0_10px_30px_rgba(0,0,0,0.10)] ${className}`}
    >
      {active && !failed ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full bg-black object-cover"
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          preload="metadata"
          onError={() => setFailed(true)}
        >
          <p className="p-4 text-sm text-white">
            お使いのブラウザは動画の再生に対応していません。
          </p>
        </video>
      ) : (
        <button
          type="button"
          onClick={() => {
            setFailed(false);
            setActive(true);
          }}
          aria-label={`${title}を再生する`}
          className="group absolute inset-0 h-full w-full cursor-pointer"
        >
          {/* Poster as a background layer: if the file has not been generated
              yet the frame simply stays the comp's grey plate, with no broken
              image icon and no layout shift. */}
          {poster ? (
            <span
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${poster}')` }}
            />
          ) : null}

          <span className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25 transition-opacity duration-300 group-hover:opacity-80" />

          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110 sm:h-[72px] sm:w-[72px]">
            <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 text-green-800" aria-hidden="true">
              <path d="M8 5.4v13.2L19 12z" fill="currentColor" />
            </svg>
          </span>

          <span
            className={`absolute bottom-4 left-4 rounded-md px-3 py-1.5 text-[11px] font-bold tracking-wide sm:px-4 sm:py-2 sm:text-sm ${chip}`}
          >
            {label}
          </span>
        </button>
      )}

      {failed ? (
        <p className="absolute inset-x-0 bottom-0 bg-black/70 p-3 text-center text-xs leading-relaxed text-white">
          動画ファイルが見つかりません。
          <br />
          <code className="break-all">{src}</code> を配置してください。
        </p>
      ) : null}
    </div>
  );
}
