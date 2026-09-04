/**
 * 動画URLの種類を判定し、埋め込み方法を決める。
 * 白木建設案件（shiraki-kensetsu）と同じ方針で、
 * YouTube / Googleドライブ / 直接の動画ファイル を自動で切り替える。
 *
 * URLが空・未設定・解釈できない場合は undefined を返し、
 * 壊れたプレーヤーを出さずデザイン通りのグレーのプレートを表示する。
 */
export type ResolvedVideo =
  | { kind: 'youtube'; id: string; embedUrl: string; thumbnail: string }
  | { kind: 'drive'; embedUrl: string }
  | { kind: 'file'; src: string };

const YT_ID = /^[A-Za-z0-9_-]{11}$/;

const YOUTUBE_HOSTS = new Set([
  'youtube.com',
  'www.youtube.com',
  'm.youtube.com',
  'youtube-nocookie.com',
  'www.youtube-nocookie.com',
]);

/** YouTube の URL / ID から動画IDを取り出す。 */
export function parseYouTubeId(input?: string): string | undefined {
  const value = input?.trim();
  if (!value) return undefined;
  if (YT_ID.test(value)) return value;

  let url: URL;
  try {
    url = new URL(value.startsWith('http') ? value : `https://${value}`);
  } catch {
    return undefined;
  }

  const host = url.hostname.toLowerCase();

  if (host === 'youtu.be') {
    const id = url.pathname.slice(1).split('/')[0];
    return YT_ID.test(id) ? id : undefined;
  }
  if (!YOUTUBE_HOSTS.has(host)) return undefined;

  const v = url.searchParams.get('v');
  if (v && YT_ID.test(v)) return v;

  // /shorts/ID, /embed/ID, /live/ID
  const id = url.pathname.split('/').filter(Boolean)[1];
  return id && YT_ID.test(id) ? id : undefined;
}

/** Googleドライブの共有URLからファイルIDを取り出す。 */
export function parseDriveId(input?: string): string | undefined {
  const value = input?.trim();
  if (!value) return undefined;

  let url: URL;
  try {
    url = new URL(value.startsWith('http') ? value : `https://${value}`);
  } catch {
    return undefined;
  }
  if (!url.hostname.toLowerCase().endsWith('drive.google.com')) return undefined;

  // /file/d/<id>/view
  const segments = url.pathname.split('/').filter(Boolean);
  const dIndex = segments.indexOf('d');
  if (dIndex >= 0 && segments[dIndex + 1]) return segments[dIndex + 1];

  // /open?id=<id>
  const id = url.searchParams.get('id');
  return id ?? undefined;
}

export function resolveVideo(url?: string, fallbackFile?: string): ResolvedVideo | undefined {
  const youtubeId = parseYouTubeId(url);
  if (youtubeId) {
    return {
      kind: 'youtube',
      id: youtubeId,
      embedUrl: `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&playsinline=1&rel=0&modestbranding=1`,
      thumbnail: `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`,
    };
  }

  const driveId = parseDriveId(url);
  if (driveId) {
    return { kind: 'drive', embedUrl: `https://drive.google.com/file/d/${driveId}/preview` };
  }

  const trimmed = url?.trim();
  if (trimmed && /^(https?:)?\/\//.test(trimmed)) return { kind: 'file', src: trimmed };
  if (fallbackFile) return { kind: 'file', src: fallbackFile };

  return undefined;
}
