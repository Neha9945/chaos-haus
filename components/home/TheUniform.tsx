'use client';

const products = [
  {
    number: '01',
    name: 'THE CHAOS TEE',
    type: 'OVERSIZED / HEAVYWEIGHT',
    image: '/chaos-haus/images/product01.png',
  },
  {
    number: '02',
    name: 'THE HAUS HOODIE',
    type: 'PREMIUM / HEAVYWEIGHT',
    image: '/chaos-haus/images/product02.png',
  },
  {
    number: '03',
    name: 'CHAOS ESSENTIALS',
    type: 'DROP 001',
    image: '/chaos-haus/images/product03.png',
  },
];

export default function TheUniform() {
  return (
    <section className="the-uniform">

      {/* Top Label */}
      <div className="uniform-topbar">
        <div className="uniform-label">
          <span className="uniform-label-line" />
          02 / THE UNIFORM
        </div>

        <div className="uniform-season">
          CHAOS HAUS® — DROP 001
        </div>
      </div>


      {/* Main Heading */}
      <div className="uniform-heading">

        <p className="uniform-kicker">
          CLOTHING FOR A DIFFERENT PERSPECTIVE
        </p>

        <h2>
         THE THINGS
          <br />
          <span>WE MAKE.</span>
        </h2>

        <div className="uniform-intro">
          <span className="intro-line" />

          <p>
            NOT DESIGNED TO FIT IN.
            <br />
            DESIGNED TO FEEL LIKE YOU.
          </p>
        </div>

      </div>


      {/* Products */}
      <div className="uniform-products">

        {products.map((product) => (
          <article
            className="uniform-product"
            key={product.number}
          >

            <div className="product-image-wrap">

              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />

              <div className="product-number">
                {product.number}
              </div>

              <div className="product-hover">
                VIEW PIECE →
              </div>

            </div>


            <div className="product-info">

              <div>
                <h3>{product.name}</h3>

                <p>{product.type}</p>
              </div>

              <span className="product-arrow">
                ↗
              </span>

            </div>

          </article>
        ))}

      </div>


      {/* Bottom CTA */}
      <div className="uniform-footer">

        <div className="uniform-footer-text">
          <span>DROP 001</span>
          <span>COMING SOON</span>
        </div>


        <button className="uniform-button">
          <span>EXPLORE THE COLLECTION</span>

          <span className="uniform-button-arrow">
            →
          </span>
        </button>


        <div className="uniform-index">
          <span />
          <span />
          <span className="active" />
          <small>03 / 06</small>
        </div>

      </div>

    </section>
  );
}
