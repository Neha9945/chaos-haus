'use client';

export default function EnterTheHaus() {
  return (
    <section className="enter-haus">

      {/* IMAGE SIDE */}
      <div className="enter-haus-image">
        <img
          src="/chaos-haus/images/enter-the-haus.JPG"
          alt="The Chaos Haus otter"
        />

        <div className="image-grain" />
      </div>

      {/* CONTENT SIDE */}
      <div className="enter-haus-content">

        <div className="enter-haus-number">
          <span />
          01 / INSIDE CHAOS
        </div>

        <div className="enter-haus-copy">

          <div className="enter-haus-line" />

          <h2>
            ENTER
            <br />
            THE
            <br />
            <em>HAUS</em><span>.</span>
          </h2>

          <p>
  SOMEWHERE BETWEEN
  <br />
  ORDER AND CHAOS,
  <br />
  WE BUILT A HOME.
</p>

          <button className="enter-haus-button">
            <span>DISCOVER OUR WORLD</span>
            <span className="enter-arrow">→</span>
          </button>

        </div>

        {/* Brand stamp */}
       <div className="chaos-mark">
  <span className="chaos-mark-top">CHAOS HAUS®</span>

  <strong>CH</strong>

  <span className="chaos-mark-bottom">
    AUTHENTIC / 001
  </span>
</div>

        {/* Decorative plus */}
        <div className="enter-haus-plus">＋</div>

      </div>

      {/* Bottom signature */}
      <div className="enter-haus-footer">
        <span>CHAOS HAUS®</span>

        <div className="footer-divider" />

        <span>PERSPECTIVE. NOT PERFECTION.</span>

        <div className="enter-dots">
          <span />
          <span className="active" />
          <span />
        </div>
      </div>

    </section>
  );
}
