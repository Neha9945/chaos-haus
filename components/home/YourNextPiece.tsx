'use client';

export default function YourNextPiece() {
  return (
    <section className="your-next-piece">

      {/* TOP BAR */}
      <div className="next-piece-topbar">

        <div className="next-piece-label">
          <span className="label-line" />
          <span>05 / DROP 001</span>
        </div>

        <div className="next-piece-monogram">
          CH®
        </div>

      </div>


      {/* BACKGROUND TEXT */}
      <div
        className="next-piece-bg"
        aria-hidden="true"
      >
        CHAOS
      </div>


      {/* MAIN CONTENT */}
      <div className="next-piece-main">

        {/* LEFT CONTENT */}
        <div className="next-piece-copy">

          <div className="next-piece-kicker">
            THE HAUS IS OPEN.
          </div>

          <h2>
            YOUR NEXT
            <br />

            <em>PIECE</em>

            <br />

            LIVES HERE<span>.</span>
          </h2>

          <div className="next-piece-meta">

            <span className="meta-line" />

            <p>
              DROP 001.
              <br />
              MADE TO BE WORN.
              <br />
              MADE TO STAY.
            </p>

          </div>

          <button className="next-piece-button">
            <span>ENTER THE SHOP</span>
            <span className="next-piece-arrow">→</span>
          </button>

        </div>


        {/* IMAGE */}
        <div className="next-piece-image">

          <div className="next-piece-image-number">
            001
          </div>

          <img
            src="/chaos-haus/images/final-drop.jpg"
            alt="Chaos Haus Drop 001"
          />

          <div className="next-piece-image-overlay" />

          <div className="next-piece-image-caption">
            CHAOS HAUS®
            <br />
            DROP 001
          </div>

        </div>

      </div>


      {/* FOOTER */}
      <div className="next-piece-footer">

        <span>CHAOS HAUS®</span>

        <span className="next-piece-footer-center">
          YOUR PIECE. YOUR WAY.
        </span>

        <span>05 / 06</span>

      </div>

    </section>
  );
}
