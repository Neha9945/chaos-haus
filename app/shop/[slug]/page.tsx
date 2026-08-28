'use client';

import Link from 'next/link';
import { useState } from 'react';

const products = {
  'signature-tee': {
    name: 'CHAOS HAUS SIGNATURE TEE',
    subtitle: 'DROP 001 / SIGNATURE SERIES',
    price: '₹2,490',
    image: '/chaos-haus/images/product01.png',
    description:
      'A premium oversized essential built with intention. Clean lines, structured weight, and the Chaos Haus signature.',
    fit: 'OVERSIZED FIT',
    fabric: 'PREMIUM COTTON',
  },

  'heavyweight-tee': {
    name: 'CHAOS HAUS HEAVYWEIGHT TEE',
    subtitle: 'DROP 001 / HEAVYWEIGHT SERIES',
    price: '₹2,790',
    image: '/chaos-haus/images/product02.png',
    description:
      'A heavier, structured silhouette designed to hold its shape. Built for weight, comfort, and everyday wear.',
    fit: 'RELAXED OVERSIZED FIT',
    fabric: 'HEAVYWEIGHT PREMIUM COTTON',
  },

  'essential-tee': {
    name: 'CHAOS HAUS ESSENTIAL',
    subtitle: 'DROP 001 / ESSENTIAL SERIES',
    price: '₹2,490',
    image: '/chaos-haus/images/product03.png',
    description:
      'The everyday Chaos Haus piece. Minimal, comfortable, and designed to become part of your rotation.',
    fit: 'EASY OVERSIZED FIT',
    fabric: 'PREMIUM COTTON',
  },
};

type ProductKey = keyof typeof products;

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = products[params.slug as ProductKey];

  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="product-not-found">
        <h1>PIECE NOT FOUND.</h1>

        <Link href="/shop">
          RETURN TO SHOP →
        </Link>
      </main>
    );
  }

  const sizes = ['S', 'M', 'L', 'XL'];

  return (
    <main className="product-page">

      {/* BACK */}
      <div className="product-back">
        <Link href="/shop">
          ← BACK TO SHOP
        </Link>

        <span>DROP 001 / {params.slug.toUpperCase()}</span>
      </div>


      {/* MAIN PRODUCT */}
      <section className="product-main">

        {/* IMAGE */}
        <div className="product-gallery">

          <div className="product-image-main">
            <span className="product-gallery-number">
              01 / 03
            </span>

            <img
              src={product.image}
              alt={product.name}
            />

            <span className="product-image-brand">
              CHAOS HAUS®
            </span>
          </div>

        </div>


        {/* PRODUCT DETAILS */}
        <div className="product-details">

          <div className="product-details-top">

            <p className="product-subtitle">
              {product.subtitle}
            </p>

            <h1>{product.name}</h1>

            <span className="product-page-price">
              {product.price}
            </span>

          </div>


          <div className="product-description">

            <p>
              {product.description}
            </p>

          </div>


          {/* DETAILS */}
          <div className="product-specs">

            <div>
              <span>FIT</span>
              <p>{product.fit}</p>
            </div>

            <div>
              <span>FABRIC</span>
              <p>{product.fabric}</p>
            </div>

            <div>
              <span>DROP</span>
              <p>DROP 001 / CHAOS HAUS®</p>
            </div>

          </div>


          {/* SIZE */}
          <div className="product-size-section">

            <div className="product-option-header">
              <span>SELECT SIZE</span>

              <button>
                SIZE GUIDE
              </button>
            </div>

            <div className="size-options">

              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={
                    selectedSize === size
                      ? 'size-option active'
                      : 'size-option'
                  }
                >
                  {size}
                </button>
              ))}

            </div>

          </div>


          {/* QUANTITY */}
          <div className="product-quantity-section">

            <span>QUANTITY</span>

            <div className="quantity-selector">

              <button
                onClick={() =>
                  setQuantity(Math.max(1, quantity - 1))
                }
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>

            </div>

          </div>


          {/* ADD TO BAG */}
          <button
            className="add-to-bag"
            onClick={() => {
              if (!selectedSize) {
                alert('PLEASE SELECT A SIZE.');
                return;
              }

              alert(
                `${product.name} / SIZE ${selectedSize} ADDED TO BAG`
              );
            }}
          >
            <span>ADD TO BAG</span>

            <span>
              {product.price} →
            </span>
          </button>


          <div className="product-note">
            SELECT YOUR SIZE BEFORE ADDING TO BAG.
          </div>

        </div>

      </section>


      {/* PRODUCT MARQUEE */}
      <div className="product-marquee">

        <span>
          CHAOS HAUS®
        </span>

        <span>
          BUILT DIFFERENTLY
        </span>

        <span>
          DROP 001
        </span>

        <span>
          CHAOS HAUS®
        </span>

      </div>

    </main>
  );
}
