'use client';

import Link from 'next/link';
import { useState } from 'react';

type Product = {
  name: string;
  subtitle: string;
  price: string;
  image: string;
  description: string;
  fit: string;
  fabric: string;
};

export default function ProductClient({
  product,
  slug,
}: {
  product: Product;
  slug: string;
}) {
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const sizes = ['S', 'M', 'L', 'XL'];

  const handleAddToBag = () => {
    if (!selectedSize) {
      alert('PLEASE SELECT A SIZE.');
      return;
    }

    alert(
      `${product.name} / SIZE ${selectedSize} / QTY ${quantity} ADDED TO BAG`
    );
  };

  return (
    <main className="product-page">

      <div className="product-back">
        <Link href="/shop">
          ← BACK TO SHOP
        </Link>

        <span>
          DROP 001 / {slug.toUpperCase()}
        </span>
      </div>

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


        {/* DETAILS */}
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
            <p>{product.description}</p>
          </div>


          {/* SPECS */}
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

              <button type="button">
                SIZE GUIDE
              </button>
            </div>

            <div className="size-options">

              {sizes.map((size) => (
                <button
                  type="button"
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
                type="button"
                onClick={() =>
                  setQuantity(Math.max(1, quantity - 1))
                }
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                type="button"
                onClick={() =>
                  setQuantity(quantity + 1)
                }
              >
                +
              </button>

            </div>

          </div>


          {/* ADD TO BAG */}
          <button
            type="button"
            className="add-to-bag"
            onClick={handleAddToBag}
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


      {/* MARQUEE */}
      <div className="product-marquee">

        <span>CHAOS HAUS®</span>
        <span>BUILT DIFFERENTLY</span>
        <span>DROP 001</span>
        <span>CHAOS HAUS®</span>

      </div>

    </main>
  );
}
