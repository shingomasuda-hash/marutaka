'use client';

import { useState } from 'react';
import type { VideoSource } from '@/data/videos';
import { resolveVideo } from '@/lib/videoSource';

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
 * URLの種類（YouTube / Googleドライブ / 動画ファイル）で埋め込み方法が
 * 自動的に切り替わる。再生を押すまで iframe も <video> もマウントしないので、
 * ページロード時に動画・Cookie・外部スクリプトは一切読み込まれない。
 * 自動再生もしない（autoplay はクリック後のみ）。
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

  const resolved = resolveVideo(source.url, source.src);
  const [thumb, setThumb] = useState<string | undefined>(
    source.poster ?? (resolved?.kind === 'youtube' ? resolved.thumbnail : undefined),
  );

  const chip = labelTone === 'brown' ? 'bg-brown-600 text-white' : 'bg-green-800 text-white';
  const isEmbed = resolved?.kind === 'youtube' || resolved?.kind === 'drive';

  return (
    <div
      className={`relative aspect-[27/50] w-full overflow-hidden rounded-2xl bg-frame shadow-[0_10px_30px_rgba(0,0,0,0.10)] ${className}`}
    >
      {active && isEmbed ? (
        <iframe
          className="absolute inset-0 h-full w-full bg-black"
          src={resolved.embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : active && resolved?.kind === 'file' && !failed ? (
        <video
          className="absolute inset-0 h-full w-full bg-black object-cover"
          src={resolved.src}
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
          disabled={!resolved}
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
                  resolved?.kind === 'youtube' && current?.includes('maxresdefault')
                    ? `https://i.ytimg.com/vi/${resolved.id}/hqdefault.jpg`
                    : undefined,
                )
              }
            />
          ) : null}

          <span className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25 transition-opacity duration-300 group-hover:opacity-80" />

          {resolved ? (
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
          動画を読み込めませんでした。
          <br />
          <code>src/data/videos.ts</code> のURLをご確認ください。
        </p>
      ) : null}
    </div>
  );
}
