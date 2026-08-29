export const products = {
  signaturetee: {
    slug: 'signaturetee',
    name: 'CHAOS HAUS SIGNATURE TEE',
    subtitle: 'DROP 001 / SIGNATURE SERIES',
    price: '₹2,490',

    description:
      'A premium oversized essential built with intention. Clean lines, structured weight, and the Chaos Haus signature.',

    fit: 'OVERSIZED FIT',
    fabric: 'PREMIUM HEAVYWEIGHT COTTON',

    images: [
      '/images/product01.png',
      '/images/product01back.png',
      '/images/product01detail01.png',
      '/images/product01detail02.png',
    ],
  },

  heavyweighttee: {
    slug: 'heavyweighttee',
    name: 'CHAOS HAUS HEAVYWEIGHT TEE',
    subtitle: 'DROP 001 / HEAVYWEIGHT SERIES',
    price: '₹2,790',

    description:
      'A heavyweight oversized piece designed to hold its shape. Structured, comfortable, and built for everyday wear.',

    fit: 'RELAXED OVERSIZED FIT',
    fabric: 'HEAVYWEIGHT PREMIUM COTTON',

    images: [
      '/images/product02.png',
      '/images/product02back.png',
      '/images/product02detail01.png',
      '/images/product02detail02.png',
    ],
  },

  essentialtee: {
    slug: 'essentialtee',
    name: 'CHAOS HAUS ESSENTIAL TEE',
    subtitle: 'DROP 001 / ESSENTIAL SERIES',
    price: '₹2,490',

    description:
      'A clean everyday Chaos Haus piece. Minimal in appearance, intentional in construction, and made to be worn repeatedly.',

    fit: 'EASY OVERSIZED FIT',
    fabric: 'PREMIUM COTTON',

    images: [
      '/images/product03.png',
      '/images/product03back.png',
      '/images/product03detail01.png',
      '/images/product03detail02.png',
    ],
  },
} as const;
