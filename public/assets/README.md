# 画像素材の配置

支給デザイン（PC.jpg / SP_LP）の写真は、完成デザイン画像にテキストが
焼き込まれた状態のため、そこから切り出して使うことができません。
（切り出すと文字が二重になるため）

そのため、以下のファイルを配置してください。未配置の場合は、
デザインに近いグリーン系のグラデーションにフォールバックします
（レイアウトは崩れません）。

```
public/assets/images/hero.jpg            FV背景写真（SP基準・縦長トリミング）
public/assets/images/hero-pc.jpg         FV背景写真（PC基準・横長トリミング / 任意）
public/assets/images/reasons-bg.jpg      03 選ばれる理由 の背景写真（グリーンのオーバーレイが乗ります）
public/assets/images/philosophy-bg.jpg   06 わたしたちの想い の背景写真（同上）
public/assets/images/ogp.jpg             OGP画像 1200x630
public/favicon.ico                       ファビコン（app/icon.png でも可）
```

## 推奨

- 横幅 2400px 程度の JPEG を置けば、Next.js 側で AVIF / WebP に最適化されます。
- `reasons-bg.jpg` / `philosophy-bg.jpg` は上から濃いグリーンの半透明レイヤーが
  重なるため、明るめの建築写真が向いています。
- FV写真はデザイン上、下半分に白文字が乗ります。下側が暗めのカットを選ぶか、
  すでに実装済みの暗めグラデーションに任せてください。
