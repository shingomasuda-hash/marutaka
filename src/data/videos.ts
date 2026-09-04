/**
 * 動画ソースの設定。ここだけ編集すれば4本すべて差し替わります。
 *
 * ■ YouTube で公開する場合（推奨）
 *   YouTube の動画IDを `youtubeId` に入れてください。
 *   例) https://www.youtube.com/watch?v=dQw4w9WgXcQ  → 'dQw4w9WgXcQ'
 *       https://youtu.be/dQw4w9WgXcQ                 → 'dQw4w9WgXcQ'
 *       https://www.youtube.com/shorts/dQw4w9WgXcQ   → 'dQw4w9WgXcQ'
 *
 *   - サムネイルは YouTube から自動取得するので、poster の用意は不要です。
 *   - 「限定公開（Unlisted）」でも埋め込み再生できます。「非公開（Private）」は不可。
 *   - YouTube Studio の［詳細］で「埋め込みを許可する」がONである必要があります。
 *
 * ■ 自前ホスティングの場合
 *   youtubeId を空のままにして `src` のファイルを配置してください。
 *   詳細は public/videos/README.md を参照。
 *
 * どちらも未設定の場合は、デザイン通りのグレーのプレートが表示されます。
 */
export type VideoSource = {
  /** YouTube 動画ID。設定されている場合はこちらが優先されます。 */
  youtubeId?: string;
  /** 自前ホスティング時のMP4パス。 */
  src?: string;
  /** サムネイルを明示指定したい場合のみ。省略時はYouTubeのサムネイルを使用。 */
  poster?: string;
};

export const videoSources = {
  /** 04 わたしたちの仕事 ← 社内ツアー.mp4 */
  companyTour: {
    youtubeId: '',
    src: '/videos/web/company-tour.mp4',
  },
  /** 05 1日の流れ ← 1日のスケジュール.mp4 */
  oneDay: {
    youtubeId: '',
    src: '/videos/web/one-day.mp4',
  },
  /** 06 わたしたちの想い ← 代表挨拶.mp4 */
  ceoMessage: {
    youtubeId: '',
    src: '/videos/web/ceo-message.mp4',
  },
  /** 08 スタッフの声 ← スタッフインタビュー.mp4 */
  staffInterview: {
    youtubeId: '',
    src: '/videos/web/staff-interview.mp4',
  },
} satisfies Record<string, VideoSource>;
