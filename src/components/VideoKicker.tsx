/** The "＼ 動画でチェック！ ／" lead-in above each video frame. */
export default function VideoKicker({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`flex items-center gap-0.5 text-[14px] font-bold tracking-wide lg:text-base ${className}`}>
      <span aria-hidden="true" className="leading-none">
        ＼
      </span>
      {children}
      <span aria-hidden="true" className="leading-none">
        ／
      </span>
    </p>
  );
}
