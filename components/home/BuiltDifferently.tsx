'use client';

export default function BuiltDifferently() {
  return (
    <section className="built-differently">

      {/* TOP BAR */}
      <div className="built-topbar">
        <div className="built-section-label">
          <span className="label-line" />
          <span>03 / BUILT DIFFERENTLY</span>
        </div>

        <div className="built-monogram">
          CH®
        </div>
      </div>


      {/* LEFT TITLE */}
      <div className="built-title">
        <h2>
          <span>BUILT</span>
          <em>DIFFERENTLY.</em>
        </h2>

        <div className="title-detail">
          <span />
          <p>
            THE WEIGHT.
            <br />
            THE CUT.
            <br />
            THE DETAILS.
          </p>
        </div>
      </div>


      {/* IMAGE 01 */}
      <div className="built-image built-image-one">
        <span className="image-number">01</span>

        <img
          src="chaos-haus/images/detail01.jpeg"
          alt="Chaos Haus garment embroidery detail"
        />
      </div>


      {/* TEXT 01 */}
      <div className="built-note built-note-one">
        <span>01 / THE FABRIC</span>

        <div className="note-line" />

        <p>
          HEAVYWEIGHT.
          <br />
          MADE TO HOLD ITS SHAPE.
        </p>
      </div>


      {/* TEXT 02 */}
      <div className="built-note built-note-two">
        <span>02 / THE FIT</span>

        <div className="note-line" />

        <p>
          OVERSIZED.
          <br />
          INTENTIONAL.
        </p>
      </div>


      {/* IMAGE 02 */}
      <div className="built-image built-image-two">
        <span className="image-number">02</span>

        <img
          src="chaos-haus/images/detail02.jpg"
          alt="Chaos Haus collar construction"
        />
      </div>


      {/* IMAGE 03 */}
      <div className="built-image built-image-three">
        <span className="image-number">03</span>

        <img
          src="chaos-haus/public/images/detail03.jpg"
          alt="Chaos Haus garment label"
        />
      </div>


      {/* TEXT 03 */}
      <div className="built-note built-note-three">
        <span>03 / THE MARK</span>

        <div className="note-line" />

        <p>
          THE DETAILS THAT
          <br />
          MAKE IT CHAOS HAUS®.
        </p>
      </div>


      {/* FOOTER */}
      <div className="built-footer">

        <span>CHAOS HAUS®</span>

        <span className="built-footer-center">
          DROP 001 / CONSTRUCTION NOTES
        </span>

        <span>03 / 06</span>

      </div>

    </section>
  );
}
