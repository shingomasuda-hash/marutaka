import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        /* sampled directly from the supplied comps */
        green: {
          50: '#f6faf8',
          100: '#eff5f1',
          200: '#e1eee7',
          300: '#7ab393',
          400: '#44956a',
          500: '#149658',
          600: '#01913a',
          700: '#187546',
          800: '#157c47',
          900: '#0b5233',
          950: '#06412a',
        },
        brown: {
          300: '#c7b5a1',
          600: '#6f5544',
          700: '#6b3906',
        },
        amber: { 500: '#f5b23d', 600: '#e5a12c' },
        ink: '#231816',
        paper: '#f1eee9',
        frame: '#dddddd',
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)', 'Hiragino Kaku Gothic ProN', 'Meiryo', 'sans-serif'],
        serif: ['var(--font-noto-serif-jp)', 'Hiragino Mincho ProN', 'Yu Mincho', 'serif'],
      },
      maxWidth: { content: '1120px', narrow: '960px' },
      keyframes: {
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'none' } },
        scrollLine: { '0%': { transform: 'scaleY(0)', transformOrigin: 'top' }, '50%': { transform: 'scaleY(1)', transformOrigin: 'top' }, '51%': { transform: 'scaleY(1)', transformOrigin: 'bottom' }, '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' } },
      },
      animation: { scrollLine: 'scrollLine 2.2s ease-in-out infinite' },
    },
  },
  plugins: [],
};

export default config;
