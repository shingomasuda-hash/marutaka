# 動画の設定

## 推奨: YouTube で公開する

動画4本は合計約850MBあり、Vercelの静的アセットに置くのは容量・帯域の面で
不利です。YouTube に公開して埋め込むのが最も簡単で、このリポジトリには
**ファイルを一切置かずに済みます**。

1. 4本を YouTube にアップロード（**限定公開／Unlisted でも埋め込み再生できます**。
   非公開／Private は埋め込めません）
2. YouTube Studio の［動画の詳細］→［すべて表示］→ 「埋め込みを許可する」がONか確認
3. 各動画のIDを `src/data/videos.ts` に記入するだけ

```
https://www.youtube.com/watch?v=XXXXXXXXXXX  →  'XXXXXXXXXXX'
https://youtu.be/XXXXXXXXXXX                 →  'XXXXXXXXXXX'
https://www.youtube.com/shorts/XXXXXXXXXXX   →  'XXXXXXXXXXX'
```

| `src/data/videos.ts` のキー | 元ファイル | セクション |
| --- | --- | --- |
| `companyTour` | 社内ツアー.mp4 | 04 わたしたちの仕事 |
| `oneDay` | 1日のスケジュール.mp4 | 05 1日の流れ |
| `ceoMessage` | 代表挨拶.mp4 | 06 わたしたちの想い |
| `staffInterview` | スタッフインタビュー.mp4 | 08 スタッフの声 |

サムネイルは YouTube から自動取得するため、poster の用意は不要です。
再生ボタンを押すまで iframe を読み込まないので、ページ表示速度にも
Cookie にも影響しません（`youtube-nocookie.com` を使用）。

**動画の縦横比について**: デザインの動画枠は縦長（27:50）です。
縦向きの動画をアップロードすれば枠いっぱいに表示されます。
横向き（16:9）の動画の場合は上下に黒帯が出るため、その際はご連絡ください。

---

## 代替: 自前でホスティングする

`src/data/videos.ts` の `youtubeId` を空のままにすると、以下のファイルを参照します。

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
  自前ホスティングの場合は外部ストレージ（S3 / Cloudflare R2 / Mux 等）に置き、
  `src/data/videos.ts` の `src` をそのURLに差し替える運用を推奨します。
- 動画は自動再生しません。再生ボタンを押すまで `<video>` / iframe を
  マウントしないため、ページロード時に動画は一切読み込まれません。
- 動画枠の縦横比はデザインに合わせて **27:50（縦長）** に固定しています。
