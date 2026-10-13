/**
 * 意味のまとまりごとに折り返すための組版ヘルパー。
 *
 * 原稿の「行」を <br> で強制改行するのではなく、各行を inline-block の
 * セグメントとして並べる。こうすると
 *
 *   - 横幅に余裕があれば、そのまま 1 行に収まる（PC）
 *   - 足りなければ、まとまりの境目で改行される（SP）
 *
 * となり、画面幅に応じて自然な位置で折り返る。親要素に .jp-head /
 * .jp-body を併せて指定すると、セグメント内部の折り返しも文節単位になる。
 */
export default function WrapLines({ lines }: { lines: readonly string[] }) {
  return (
    <>
      {lines.map((line) => (
        <span key={line} className="jp-seg">
          {line}
        </span>
      ))}
    </>
  );
}
