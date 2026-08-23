import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ch-black': '#252522',
        'ch-paper': '#F3EEE4',
        'ch-olive': '#7C8066',
        'ch-blue': '#7E8C91',
        'ch-clay': '#A57968',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        'display-lg': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'display-sm': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'info-lg': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.08em' }],
        'info-md': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.1em' }],
        'info-sm': ['0.625rem', { lineHeight: '1.4', letterSpacing: '0.12em' }],
      },
    },
  },
  plugins: [],
};

export default config;
