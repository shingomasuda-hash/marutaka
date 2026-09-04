# 画像素材の配置

## 配置済み

FVと背景の建築写真は、デザイナーから支給された**写真レイヤーそのもの**を
配置済みです（Figma書き出しの `Rectangle.png` / `Clip path group.png`）。
文字が焼き込まれていない素材なので、デザイン通りのトリミングで表示されます。

| ファイル | 元 | 解像度 |
| --- | --- | --- |
| `hero.jpg` | Clip path group.png（SP用トリミング） | 393×763 |
| `hero-pc.jpg` | Rectangle.png（PC用トリミング） | 1280×784 |
| `reasons-bg.jpg` | Rectangle.png の上部を切り出し | 1280×560 |
| `philosophy-bg.jpg` | Rectangle.png の下部を切り出し | 1280×604 |

`hero.jpg` は 1024px 未満、`hero-pc.jpg` は 1024px 以上で使われます。

高解像度ディスプレイでさらに精細にしたい場合のみ、より大きな書き出しを
同じファイル名で上書きしてください（2倍程度あれば十分です）。

## 差し替え / 配置するファイル

未配置のものはデザインに近いグリーン系のグラデーションにフォールバックします
（レイアウトは崩れません）。

```
public/assets/images/hero.jpg            FV背景写真（SP基準・縦長トリミング）配置済み
public/assets/images/hero-pc.jpg         FV背景写真（PC基準・横長トリミング）配置済み
                                         ※PC(1024px〜)でのみ hero.jpg より優先されます
public/assets/images/reasons-bg.jpg      03 選ばれる理由 の背景写真（グリーンのオーバーレイが乗ります）配置済み
public/assets/images/philosophy-bg.jpg   06 わたしたちの想い の背景写真（同上）配置済み
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
- PCでの写真の見え方は `.hero-photo` の `background-position` で調整できます。
