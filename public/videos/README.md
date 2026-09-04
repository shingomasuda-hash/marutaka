# 動画ファイルの配置

このセッションからは Google Drive の動画（各約200MB）を取得できませんでした。
組織のegressポリシーで `drive.google.com` が遮断されており、Drive MCP 経由の
ダウンロードにも 10MB の上限があるためです。

以下の手順でファイルを配置してください。

## 1. 元動画をそのまま置く（削除しないこと）

```
public/videos/original/社内ツアー.mp4
public/videos/original/1日のスケジュール.mp4
public/videos/original/代表挨拶.mp4
public/videos/original/スタッフインタビュー.mp4
```

## 2. Web配信用に最適化して web/ へ書き出す

このコンテナには ffmpeg が入っていないため、変換は未実施です。
ローカル等で以下を実行してください（H.264 / faststart / 縦動画想定）。

```bash
cd public/videos

convert () {
  ffmpeg -i "original/$1" \
    -vf "scale=-2:1280" \
    -c:v libx264 -profile:v high -preset slow -crf 24 \
    -c:a aac -b:a 128k \
    -movflags +faststart \
    "web/$2"
}

convert "社内ツアー.mp4"           company-tour.mp4
convert "1日のスケジュール.mp4"     one-day.mp4
convert "代表挨拶.mp4"             ceo-message.mp4
convert "スタッフインタビュー.mp4"   staff-interview.mp4
```

出力ファイル名はコード側で参照している名前と一致させてください。

| 出力ファイル | 使用セクション |
| --- | --- |
| `web/company-tour.mp4` | 04 わたしたちの仕事（事業内容紹介動画） |
| `web/one-day.mp4` | 05 1日の流れ（1日の流れ動画） |
| `web/ceo-message.mp4` | 06 わたしたちの想い（社長メッセージ） |
| `web/staff-interview.mp4` | 08 スタッフの声（スタッフインタビュー動画） |

## 3. poster画像を書き出す

```bash
poster () { ffmpeg -ss 00:00:02 -i "web/$1" -frames:v 1 -q:v 3 "posters/$2"; }

poster company-tour.mp4    company-tour.jpg
poster one-day.mp4         one-day.jpg
poster ceo-message.mp4     ceo-message.jpg
poster staff-interview.mp4 staff-interview.jpg
```

## 注意

- `original/` と `web/` は `.gitignore` 済みです（リポジトリを肥大化させないため）。
  Vercelへデプロイする場合は、動画は外部ストレージ（S3 / Cloudflare R2 / Mux 等）に
  置き、`src/components/*.tsx` の `src` をそのURLに差し替える運用を推奨します。
  Vercelの静的アセットには容量・帯域の制限があります。
- 動画は自動再生しません。`preload="metadata"` で、再生ボタンを押すまで
  `<video>` 要素自体をマウントしません。
- 動画枠の縦横比はデザインに合わせて **27:50（縦長）** に固定しています。
