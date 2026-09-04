'use client';

import { useState } from 'react';
import type { VideoSource } from '@/data/videos';

export type VideoPlayerProps = {
  source: VideoSource;
  /** The label chip baked into the comp, e.g. 事業内容紹介動画 */
  label: string;
  /** Chip colour: green for most frames, brown for 社長メッセージ */
  labelTone?: 'green' | 'brown';
  /** Accessible name for the play control */
  title: string;
  className?: string;
};

/**
 * Video frame as drawn in the comp: rounded grey plate, thumbnail, a soft
 * overlay, a centred play button and the label chip pinned bottom-left.
 *
 * Nothing is fetched until the visitor presses play — neither the YouTube
 * iframe (and its cookies/scripts) nor a self-hosted file. Nothing autoplays
 * on page load; the autoplay parameter below only applies after the click.
 */
export default function VideoPlayer({
  source,
  label,
  labelTone = 'green',
  title,
  className = '',
}: VideoPlayerProps) {
  const [active, setActive] = useState(false);
  const [failed, setFailed] = useState(false);

  const youtubeId = source.youtubeId?.trim() || undefined;
  const [thumb, setThumb] = useState<string | undefined>(
    source.poster ?? (youtubeId ? `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg` : undefined),
  );

  const configured = Boolean(youtubeId || source.src);
  const chip = labelTone === 'brown' ? 'bg-brown-600 text-white' : 'bg-green-800 text-white';

  return (
    <div
      className={`relative aspect-[27/50] w-full overflow-hidden rounded-2xl bg-frame shadow-[0_10px_30px_rgba(0,0,0,0.10)] ${className}`}
    >
      {active && youtubeId ? (
        <iframe
          className="absolute inset-0 h-full w-full bg-black"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&playsinline=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : active && source.src && !failed ? (
        <video
          className="absolute inset-0 h-full w-full bg-black object-cover"
          src={source.src}
          poster={source.poster}
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
          disabled={!configured}
          aria-label={`${title}を再生する`}
          className="group absolute inset-0 h-full w-full cursor-pointer disabled:cursor-default"
        >
          {thumb ? (
            /* A plain <img> keeps this a single lazy request and lets us fall
               back through YouTube's thumbnail sizes. next/image would add an
               optimiser round-trip for an image we never resize. */
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={thumb}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
              onError={() =>
                setThumb((current) =>
                  youtubeId && current?.includes('maxresdefault')
                    ? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`
                    : undefined,
                )
              }
            />
          ) : null}

          <span className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25 transition-opacity duration-300 group-hover:opacity-80" />

          {configured ? (
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110 sm:h-[72px] sm:w-[72px]">
              <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 text-green-800" aria-hidden="true">
                <path d="M8 5.4v13.2L19 12z" fill="currentColor" />
              </svg>
            </span>
          ) : null}

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
          <code className="break-all">{source.src}</code> を配置するか、
          <code>src/data/videos.ts</code> に YouTube ID を設定してください。
        </p>
      ) : null}
    </div>
  );
}
