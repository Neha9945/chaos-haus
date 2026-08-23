// Chaos Haus Design Tokens
export const COLORS = {
  black: '#252522',
  paper: '#F3EEE4',
  olive: '#7C8066',
  blue: '#7E8C91',
  clay: '#A57968',
} as const;

export const TYPOGRAPHY = {
  display: {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    letterSpacing: '-0.02em',
  },
  info: {
    fontFamily: 'var(--font-mono)',
    fontWeight: 500,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
  },
  body: {
    fontFamily: 'var(--font-body)',
    fontWeight: 400,
  },
} as const;

export const BREAKPOINTS = {
  mobile: 640,
  tablet: 1024,
  desktop: 1280,
} as const;

export const ANIMATION = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.2,
    cinematic: 2.0,
  },
  easing: {
    smooth: [0.4, 0, 0.2, 1],
    cinematic: [0.25, 0.46, 0.45, 0.94],
  },
} as const;

export const Z_INDEX = {
  background: 0,
  scene: 10,
  navigation: 40,
  modal: 50,
} as const;
