'use client';

import { useState } from 'react';

type ProductGalleryProps = {
  images: string[];
  productName: string;
};

export default function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(0);

  const previousImage = () => {
    setActiveImage((current) =>
      current === 0
        ? images.length - 1
        : current - 1
    );
  };

  const nextImage = () => {
    setActiveImage((current) =>
      current === images.length - 1
        ? 0
        : current + 1
    );
  };

  return (
    <section className="productgallery">

      <div className="productgallerymain">

        <img
          key={images[activeImage]}
          src={images[activeImage]}
          alt={`${productName} view ${activeImage + 1}`}
        />

        <div className="productimagecount">
          {String(activeImage + 1).padStart(2, '0')}
          <span> / </span>
          {String(images.length).padStart(2, '0')}
        </div>

        <button
          type="button"
          className="galleryarrow galleryprev"
          onClick={previousImage}
          aria-label="Previous image"
        >
          ←
        </button>

        <button
          type="button"
          className="galleryarrow gallerynext"
          onClick={nextImage}
          aria-label="Next image"
        >
          →
        </button>

      </div>


      <div className="productgallerythumbnails">

        {images.map((image, index) => (

          <button
            key={image}
            type="button"
            className={`productthumbnail ${
              activeImage === index
                ? 'active'
                : ''
            }`}
            onClick={() => setActiveImage(index)}
            aria-label={`View image ${index + 1}`}
          >

            <img
              src={image}
              alt={`${productName} thumbnail ${index + 1}`}
            />

            <span>
              {String(index + 1).padStart(2, '0')}
            </span>

          </button>

        ))}

      </div>

    </section>
  );
}
