'use client';

import Link from 'next/link';

const products = [
  {
    id: '01',
    name: 'CHAOS HAUS SIGNATURE TEE',
    type: 'OVERSIZED T-SHIRT',
    price: '₹2,490',
    image: '/chaos-haus/images/product01.png',
    slug: 'signature-tee',
  },
  {
    id: '02',
    name: 'CHAOS HAUS HEAVYWEIGHT TEE',
    type: 'PREMIUM OVERSIZED T-SHIRT',
    price: '₹2,790',
    image: '/chaos-haus/images/product02.png',
    slug: 'heavyweight-tee',
  },
  {
    id: '03',
    name: 'CHAOS HAUS ESSENTIAL',
    type: 'EVERYDAY OVERSIZED T-SHIRT',
    price: '₹2,490',
    image: '/chaos-haus/images/product03.png',
    slug: 'essential-tee',
  },
];

export default function ShopPage() {
  return (
    <main className="shop-page">

      {/* HERO */}
      <section className="shop-hero">

        <div className="shop-hero-top">
          <div className="shop-label">
            <span />
            SHOP / DROP 001
          </div>

          <span className="shop-count">
            03 PIECES
          </span>
        </div>

        <div className="shop-hero-content">
          <p className="shop-kicker">
            CHAOS HAUS® COLLECTION
          </p>

          <h1>
            FIND YOUR
            <br />
            <em>PIECE.</em>
          </h1>
        </div>

        <div className="shop-hero-bottom">
          <span>
            DROP 001
          </span>

          <p>
            DESIGNED WITH INTENTION.
            <br />
            MADE TO BE WORN YOUR WAY.
          </p>
        </div>

      </section>


      {/* COLLECTION */}
      <section className="shop-collection">

        <div className="shop-collection-header">
          <span>DROP 001 / AVAILABLE NOW</span>

          <span>ALL PIECES</span>
        </div>


        <div className="product-grid">

          {products.map((product) => (
            <Link
              href={`/shop/${product.slug}`}
              className="product-card"
              key={product.id}
            >

              <div className="product-image-wrap">

                <span className="product-number">
                  {product.id}
                </span>

                <img
                  src={product.image}
                  alt={product.name}
                />

                <div className="product-hover">
                  <span>VIEW PIECE</span>
                  <span>↗</span>
                </div>

              </div>


              <div className="product-info">

                <div>
                  <h2>{product.name}</h2>

                  <p>{product.type}</p>
                </div>

                <span className="product-price">
                  {product.price}
                </span>

              </div>

            </Link>
          ))}

        </div>

      </section>


      {/* SHOP FOOTER */}
      <section className="shop-manifesto">

        <span className="manifesto-label">
          CHAOS HAUS® / DROP 001
        </span>

        <h2>
          NOT MADE TO
          <br />
          <em>DISAPPEAR.</em>
        </h2>

      </section>

    </main>
  );
}
