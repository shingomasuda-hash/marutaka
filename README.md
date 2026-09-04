# 丸髙工業 採用LP（RECRUIT 2026）

支給デザイン（`PC.jpg` / `SP_LP`）をWebページとして再現した採用ランディングページです。

- Next.js 15（App Router）/ TypeScript / Tailwind CSS 3
- 静的プリレンダリング（`○ Static`）— Vercelへそのままデプロイ可能

## セットアップ

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 本番ビルド
npm run start   # 本番サーバ
npm run lint
```

## 構成

```
src/
  app/
    layout.tsx          フォント（Noto Sans JP / Noto Serif JP）・SEO・OGP
    page.tsx            セクションの並び（01〜12）
    globals.css         トークン・スクロールリビール・reduced-motion
  components/
    Hero.tsx            01 FV
    Problems.tsx        02 課題提起
    Reasons.tsx         03 選ばれる理由
    Works.tsx           04 わたしたちの仕事（事業内容紹介動画）
    DaySchedule.tsx     05 1日の流れ（1日の流れ動画）
    Philosophy.tsx      06 わたしたちの想い（社長メッセージ）
    Message.tsx         07 あなたへのメッセージ
    StaffVoice.tsx      08 スタッフの声（スタッフインタビュー動画）
    Jobs.tsx            09 募集要項（タブ切り替え）
    Faq.tsx             10 よくある質問（アコーディオン）
    EntrySection.tsx    11 エントリーCTA
    EntryForm.tsx       11 応募フォーム
    SiteFooter.tsx      12 Footer
    VideoPlayer.tsx     動画UI（サムネイル・再生アイコン・ラベル・角丸・オーバーレイ）
    decor/              装飾（曲線リボン・ドット・スカイライン）をSVGで再現
  data/content.ts       デザインから起こした全テキスト（変更はここだけ）
  lib/submitApplication.ts  フォーム送信アダプタ
```

**文言は `src/data/content.ts` に集約**しています。デザインからの転記なので、
クライアント確認なしに書き換えないでください。

## 素材の配置

未配置でもレイアウトは崩れません（グリーン系のフォールバックになります）。

- 画像 → [`public/assets/README.md`](public/assets/README.md)
- 動画 → [`public/videos/README.md`](public/videos/README.md)

## フォーム

送信先サービスが未指定のため、既定では**どこにも送信しません**。
`src/lib/submitApplication.ts` の1関数に閉じてあります。

- 環境変数 `NEXT_PUBLIC_ENTRY_ENDPOINT` にJSONをPOSTできるURLを設定する、または
- `submitApplication()` の中身を任意の実装（Route Handler / フォームサービス / CRM）に差し替える

UI側は `SubmitResult` の形だけを知っているため、他の変更は不要です。

## 環境変数

`.env.example` を参照してください。

| 変数 | 用途 |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | canonical / OGP の絶対URL生成 |
| `NEXT_PUBLIC_ENTRY_ENDPOINT` | 応募フォームの送信先（未設定なら送信しない） |

## デザイン再現について

- SPデザイン（`SP_LP`, 590px幅）は **590px幅ビューポートにほぼ1:1** で対応しています
  （本文15px / FAQ設問20px / FVの見出し65px）。各セクションの高さは実測で
  デザイン比 **±5%以内**、ページ全体で +2% 程度に収めています。
- 390px幅では、デザインの改行位置を保つために見出し・CTA・FVのリード文を
  ビューポート連動（`clamp()`）にしています。
- PC（1024px〜）は `PC_募集要項` に合わせ、募集要項を2カラムにしています。

