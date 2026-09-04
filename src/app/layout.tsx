import type { Metadata, Viewport } from 'next';
import { Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google';
import { getSiteUrl } from '@/lib/siteUrl';
import './globals.css';

const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
  preload: true,
});

const notoSerifJp = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-noto-serif-jp',
  preload: false,
});

/**
 * Set NEXT_PUBLIC_SITE_URL in Vercel to pin canonical / OGP URLs to the real
 * domain. If it is missing or blank we fall back to the Vercel-provided host,
 * so the build never fails on a misconfigured variable.
 */
const siteUrl = getSiteUrl();

const title = '空間に、あなたの仕事を。｜丸髙工業 採用サイト RECRUIT 2026';
const description =
  '有名百貨店・スーパーブランド・商業空間・ホテル——プロとして「考えながら働ける」場所がここにある。丸髙工業の空間クリエイター／マイスター事業部の採用情報です。未経験歓迎・経験者優遇。';

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title,
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: '/',
    siteName: '丸髙工業 採用サイト',
    title,
    description,
    images: [{ url: '/assets/images/ogp.jpg', width: 1200, height: 630, alt: '丸髙工業 採用サイト' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/assets/images/ogp.jpg'] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#157c47',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${notoSansJp.variable} ${notoSerifJp.variable}`}>
      <head>
        {/* Without JS the scroll-reveal never runs, so make sure content is visible. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
