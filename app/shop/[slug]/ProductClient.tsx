'use client';

import Link from 'next/link';
import { useState } from 'react';

import ProductGallery from './ProductGallery';


type Product = {
  slug: string;

  name: string;

  subtitle: string;

  price: string;

  description: string;

  fit: string;

  fabric: string;

  images: string[];
};


export default function ProductClient({
  product,
}: {
  product: Product;
}) {
  const [selectedSize, setSelectedSize] =
    useState('');

  const [quantity, setQuantity] =
    useState(1);

  const sizes = [
    'S',
    'M',
    'L',
    'XL',
  ];


  const handleAddToBag = () => {
    if (!selectedSize) {
      alert('PLEASE SELECT A SIZE.');
      return;
    }

    alert(
      `${product.name} / SIZE ${selectedSize} / QUANTITY ${quantity} ADDED TO BAG`
    );
  };


  return (
    <main className="productpage">

      {/* BACK BAR */}

      <div className="productback">

        <Link href="/shop">
          ← BACK TO SHOP
        </Link>

        <span>
          DROP 001 / {product.slug.toUpperCase()}
        </span>

      </div>


      {/* MAIN PRODUCT AREA */}

      <section className="productmain">

        {/* PRODUCT GALLERY */}

        <ProductGallery
          images={product.images}
          productName={product.name}
        />


        {/* PRODUCT DETAILS */}

        <div className="productdetails">


          <div className="productdetailstop">

            <p className="productsubtitle">
              {product.subtitle}
            </p>


            <h1>
              {product.name}
            </h1>


            <span className="productpageprice">
              {product.price}
            </span>

          </div>


          {/* DESCRIPTION */}

          <div className="productdescription">

            <p>
              {product.description}
            </p>

          </div>


          {/* SPECS */}

          <div className="productspecs">

            <div>

              <span>
                FIT
              </span>

              <p>
                {product.fit}
              </p>

            </div>


            <div>

              <span>
                FABRIC
              </span>

              <p>
                {product.fabric}
              </p>

            </div>


            <div>

              <span>
                DROP
              </span>

              <p>
                DROP 001 / CHAOS HAUS®
              </p>

            </div>

          </div>


          {/* SIZE */}

          <div className="productsizesection">

            <div className="productoptionheader">

              <span>
                SELECT SIZE
              </span>

              <button
                type="button"
              >
                SIZE GUIDE
              </button>

            </div>


            <div className="sizeoptions">

              {sizes.map((size) => (

                <button
                  type="button"
                  key={size}

                  onClick={() =>
                    setSelectedSize(size)
                  }

                  className={
                    selectedSize === size
                      ? 'sizeoption active'
                      : 'sizeoption'
                  }
                >
                  {size}
                </button>

              ))}

            </div>

          </div>


          {/* QUANTITY */}

          <div className="productquantitysection">

            <span>
              QUANTITY
            </span>


            <div className="quantityselector">

              <button
                type="button"

                onClick={() =>
                  setQuantity(
                    Math.max(
                      1,
                      quantity - 1
                    )
                  )
                }
              >
                −
              </button>


              <span>
                {quantity}
              </span>


              <button
                type="button"

                onClick={() =>
                  setQuantity(
                    quantity + 1
                  )
                }
              >
                +
              </button>

            </div>

          </div>


          {/* ADD TO BAG */}

          <button
            type="button"

            className="addtobag"

            onClick={handleAddToBag}
          >

            <span>
              ADD TO BAG
            </span>


            <span>
              {product.price} →
            </span>

          </button>


          <div className="productnote">

            SELECT YOUR SIZE BEFORE ADDING TO BAG.

          </div>

        </div>

      </section>


      {/* BOTTOM BRAND BAR */}

      <div className="productmarquee">

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
