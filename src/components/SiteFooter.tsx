import { site } from '@/data/content';

/**
 * 12 Footer.
 *
 * The supplied comps end at the form's send button, so there is no footer
 * artwork to copy. This is a deliberately minimal footer built only from
 * information that already appears in the comps (company name + head office
 * address), styled to match the page. Replace once footer artwork is supplied.
 */
export default function SiteFooter() {
  return (
    <footer className="bg-green-950 px-6 py-10 text-center text-white sm:px-8 lg:py-14">
      <p className="font-serif text-[19px] tracking-wide lg:text-2xl">{site.companyFull}</p>
      <p className="mt-3 text-[12px] text-white/75 lg:text-sm">{site.address}</p>

      <nav aria-label="フッター" className="mt-6 lg:mt-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] text-white/85 lg:text-sm">
          <li>
            <a href="#works" className="hover:text-white hover:underline">
              わたしたちの仕事
            </a>
          </li>
          <li>
            <a href="#jobs" className="hover:text-white hover:underline">
              募集要項
            </a>
          </li>
          <li>
            <a href="#faq" className="hover:text-white hover:underline">
              よくある質問
            </a>
          </li>
          <li>
            <a href="#entry" className="hover:text-white hover:underline">
              エントリー
            </a>
          </li>
        </ul>
      </nav>

      <p className="mt-8 text-[10px] tracking-wide text-white/55 lg:text-xs">
        © {new Date().getFullYear()} {site.companyFull}
      </p>
    </footer>
  );
}
