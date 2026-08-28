import ProductClient from './ProductClient';

const products = {
  'signature-tee': {
    name: 'CHAOS HAUS SIGNATURE TEE',
    subtitle: 'DROP 001 / SIGNATURE SERIES',
    price: '₹2,490',
    image: '/chaos-haus/images/product-01.jpg',
    description:
      'A premium oversized essential built with intention. Clean lines, structured weight, and the Chaos Haus signature.',
    fit: 'OVERSIZED FIT',
    fabric: 'PREMIUM COTTON',
  },

  'heavyweight-tee': {
    name: 'CHAOS HAUS HEAVYWEIGHT TEE',
    subtitle: 'DROP 001 / HEAVYWEIGHT SERIES',
    price: '₹2,790',
    image: '/chaos-haus/images/product-02.jpg',
    description:
      'A heavier, structured silhouette designed to hold its shape. Built for weight, comfort, and everyday wear.',
    fit: 'RELAXED OVERSIZED FIT',
    fabric: 'HEAVYWEIGHT PREMIUM COTTON',
  },

  'essential-tee': {
    name: 'CHAOS HAUS ESSENTIAL',
    subtitle: 'DROP 001 / ESSENTIAL SERIES',
    price: '₹2,490',
    image: '/chaos-haus/images/product-03.jpg',
    description:
      'The everyday Chaos Haus piece. Minimal, comfortable, and designed to become part of your rotation.',
    fit: 'EASY OVERSIZED FIT',
    fabric: 'PREMIUM COTTON',
  },
};

export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug,
  }));
}

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product =
    products[params.slug as keyof typeof products];

  if (!product) {
    return <div>PRODUCT NOT FOUND</div>;
  }

  return (
    <ProductClient
      product={product}
      slug={params.slug}
    />
  );
}
