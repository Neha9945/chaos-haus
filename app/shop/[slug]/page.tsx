import ProductClient from './ProductClient';
import { products } from '@/lib/products';

export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug,
  }));
}

export default function ProductPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const product =
    products[params.slug as keyof typeof products];

  if (!product) {
    return (
      <main
        style={{
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          fontFamily: 'monospace',
        }}
      >
        PRODUCT NOT FOUND
      </main>
    );
  }

  return <ProductClient product={product} />;
}
