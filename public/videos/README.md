# 動画の設定

## 現在の設定: YouTube（限定公開・Shorts）

4本とも YouTube に設定済みです（`src/data/videos.ts`）。

| セクション | 動画 | URL |
| --- | --- | --- |
| 04 わたしたちの仕事 | 社内ツアー | https://youtube.com/shorts/NJzs513y3CA |
| 05 1日の流れ | 1日のスケジュール | https://youtube.com/shorts/hZNpuIZch0w |
| 06 わたしたちの想い | 代表挨拶 | https://youtube.com/shorts/EgmHQ7Mz8eQ |
| 08 スタッフの声 | スタッフインタビュー | https://youtube.com/shorts/Vlpj_j015Vg |

差し替えは `src/data/videos.ts` の `url` を書き換えるか、
対応する環境変数を設定してください（**環境変数が優先されます**）。

---

## 推奨: YouTube で公開する

動画4本は合計約850MBあり、Vercelの静的アセットに置くのは容量・帯域の面で
不利です。YouTube に公開して埋め込むのが最も簡単で、このリポジトリには
**ファイルを一切置かずに済みます**。

1. 4本を YouTube にアップロード（**限定公開／Unlisted でも埋め込み再生できます**。
   非公開／Private は埋め込めません）
2. YouTube Studio の［動画の詳細］→［すべて表示］→ 「埋め込みを許可する」がONか確認
3. 「共有」で取得したURLを `src/data/videos.ts` の `url` に**そのまま貼るだけ**
   （IDを抜き出す必要はありません）

```
https://www.youtube.com/watch?v=XXXXXXXXXXX
https://youtu.be/XXXXXXXXXXX
https://youtube.com/shorts/XXXXXXXXXXX
```

コードを触らずに差し替える場合は、Vercelの環境変数でも指定できます
（設定されていればコード側の値より優先されます）。

```
NEXT_PUBLIC_VIDEO_COMPANY_TOUR=https://youtube.com/shorts/XXXXXXXXXXX
NEXT_PUBLIC_VIDEO_ONE_DAY=...
NEXT_PUBLIC_VIDEO_CEO_MESSAGE=...
NEXT_PUBLIC_VIDEO_STAFF_INTERVIEW=...
```

> **アップロード時の注意**
> - 公開設定は「限定公開」。**「非公開」は埋め込みでは再生できません**
> - 「視聴者：子ども向けです」を選ぶと**埋め込みが禁止されます**。
>   「子ども向けではありません」を選んでください

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
