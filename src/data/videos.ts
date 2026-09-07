/**
 * 動画ソースの設定。ここだけ編集すれば4本すべて差し替わります。
 *
 * URLの種類で埋め込み方法が自動的に切り替わります（白木建設案件と同じ方式）。
 *
 *   YouTube          -> youtube-nocookie の iframe（推奨）
 *   Googleドライブ    -> ドライブの preview iframe
 *   .mp4 等のURL/パス -> <video controls>
 *
 * ■ YouTube で公開する場合（推奨・白木建設案件と同じ方式）
 *
 *   YouTubeに「限定公開（Unlisted）」でアップロードし、URLを下の `url` に
 *   **そのまま貼るだけ**です。IDを抜き出す必要はありません。
 *
 *     https://www.youtube.com/watch?v=XXXXXXXXXXX
 *     https://youtu.be/XXXXXXXXXXX
 *     https://youtube.com/shorts/XXXXXXXXXXX
 *
 *   - サムネイルはYouTubeから自動取得するので、poster の用意は不要です。
 *   - 「限定公開（Unlisted）」で埋め込み再生できます。「非公開（Private）」は不可。
 *   - YouTube Studio の［詳細］で「埋め込みを許可する」がONである必要があります。
 *   - コードを触らずに差し替えたい場合は、下の環境変数を設定してください
 *     （設定されていれば `url` より優先されます）。
 *
 * ■ 自前ホスティングの場合
 *   url を空のままにして `src` のファイルを配置してください。
 *   詳細は public/videos/README.md を参照。
 *
 * どちらも未設定の場合は、デザイン通りのグレーのプレートが表示されます。
 */
export type VideoSource = {
  /** YouTube の URL または動画ID。環境変数が設定されていればそちらが優先。 */
  url?: string;
  /** 自前ホスティング時のMP4パス。 */
  src?: string;
  /** サムネイルを明示指定したい場合のみ。省略時はYouTubeのサムネイルを使用。 */
  poster?: string;
};

export const videoSources = {
  /** 04 わたしたちの仕事 ← 社内ツアー.mp4 */
  companyTour: {
    url:
      process.env.NEXT_PUBLIC_VIDEO_COMPANY_TOUR ??
      'https://youtube.com/shorts/zs65qU4Lfi4',
    src: '/videos/web/company-tour.mp4',
  },
  /** 05 1日の流れ ← 1日のスケジュール.mp4 */
  oneDay: {
    url:
      process.env.NEXT_PUBLIC_VIDEO_ONE_DAY ??
      'https://youtube.com/shorts/2HHO-DdtScM',
    src: '/videos/web/one-day.mp4',
  },
  /** 06 わたしたちの想い ← 代表挨拶.mp4 */
  ceoMessage: {
    url:
      process.env.NEXT_PUBLIC_VIDEO_CEO_MESSAGE ??
      'https://youtube.com/shorts/y59-luPqGIE',
    src: '/videos/web/ceo-message.mp4',
  },
  /** 08 スタッフの声 ← スタッフインタビュー.mp4 */
  staffInterview: {
    url:
      process.env.NEXT_PUBLIC_VIDEO_STAFF_INTERVIEW ??
      'https://youtube.com/shorts/-gQHJ7nbWLU',
    src: '/videos/web/staff-interview.mp4',
  },
} satisfies Record<string, VideoSource>;
