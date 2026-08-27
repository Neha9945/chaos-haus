'use client';

export default function BuiltDifferently() {
  return (
    <section className="built-differently">

      {/* Section header */}
      <div className="built-label">
        <span className="built-label-line" />
        03 / BUILT DIFFERENTLY
      </div>

      {/* Main headline */}
      <div className="built-heading">
        <h2>
          BUILT
          <br />
          <em>DIFFERENTLY.</em>
        </h2>

        <div className="built-intro">
          <span>THE WEIGHT.</span>
          <span>THE CUT.</span>
          <span>THE DETAILS.</span>
        </div>
      </div>

      {/* Main visual */}
      <div className="built-main-image">
        <img
          src="/chaos-haus/images/detail-01.jpg"
          alt="Chaos Haus garment detail"
        />

        <div className="image-number">
          01
        </div>
      </div>

      {/* Detail 01 */}
      <div className="built-detail detail-one">
        <span className="detail-number">01 / THE FABRIC</span>

        <p>
          HEAVYWEIGHT.
          <br />
          MADE TO HOLD ITS SHAPE.
        </p>
      </div>

      {/* Detail 02 */}
      <div className="built-detail detail-two">
        <span className="detail-number">02 / THE FIT</span>

        <p>
          OVERSIZED.
          <br />
          INTENTIONAL.
        </p>
      </div>

      {/* Secondary image */}
      <div className="built-small-image">
        <img
          src="/chaos-haus/images/detail-02.jpg"
          alt="Chaos Haus clothing construction"
        />
      </div>

      {/* Detail 03 */}
      <div className="built-detail detail-three">
        <span className="detail-number">03 / THE MARK</span>

        <p>
          THE DETAILS THAT
          <br />
          MAKE IT CHAOS HAUS®.
        </p>
      </div>

      {/* Decorative signature */}
      <div className="built-signature">
        CH®
      </div>

      {/* Footer */}
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
