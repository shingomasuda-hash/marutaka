# 画像素材の配置

## ⚠️ 現在配置されているのは「暫定素材」です

`hero.jpg` / `reasons-bg.jpg` / `philosophy-bg.jpg` は、支給デザイン
`SP_LP` の中で**文字が焼き込まれていない帯（y=190〜615）だけを切り出したもの**です。
デザイナーの実際の写真ではありますが、

- 横幅が **590px しかない**（PCでは2.4倍に引き伸ばされて粗くなります）
- 空の部分や軒下の部分が含まれていない（トリミングがデザインと異なります）

ため、**元の建築写真が入手でき次第、必ず差し替えてください。**
同じファイル名で上書きするだけで反映されます。

## 差し替え / 配置するファイル

未配置のものはデザインに近いグリーン系のグラデーションにフォールバックします
（レイアウトは崩れません）。

```
public/assets/images/hero.jpg            FV背景写真（SP基準・縦長トリミング）★暫定素材が入っています
public/assets/images/hero-pc.jpg         FV背景写真（PC基準・横長トリミング / 任意）
                                         ※置くとPC(1024px〜)でのみ hero.jpg より優先されます
public/assets/images/reasons-bg.jpg      03 選ばれる理由 の背景写真（グリーンのオーバーレイが乗ります）★暫定素材
public/assets/images/philosophy-bg.jpg   06 わたしたちの想い の背景写真（同上）★暫定素材
public/assets/images/ogp.jpg             OGP画像 1200x630
public/favicon.ico                       ファビコン（app/icon.png でも可）
```

## 推奨

- 横幅 2400px 程度の JPEG を置けば、Next.js 側で AVIF / WebP に最適化されます。
- `reasons-bg.jpg` / `philosophy-bg.jpg` は上から濃いグリーンの半透明レイヤーが
  重なるため、明るめの建築写真が向いています。
- FV写真はデザイン上、下半分に白文字が乗ります。下側が暗めのカットを選んでください。
  白文字を読ませるためのスクリム（`.hero-scrim` in `src/app/globals.css`）は
  実装済みで、デザインの輝度を実測して合わせてあります。
  差し替え後に濃さが合わなければ、そこだけ調整してください。
- PCでの写真の見え方は `.hero-photo` の `background-position`（現在 `center 72%`）で
  調整できます。暫定素材のトリミングに合わせた値なので、差し替え時に見直してください。
