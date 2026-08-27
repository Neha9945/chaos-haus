'use client';

export default function TheHausCode() {
  return (
    <section className="haus-code">

      {/* BACKGROUND BRAND */}
      <div className="haus-code-bg" aria-hidden="true">
        CHAOS HAUS
      </div>

      {/* TOP BAR */}
      <div className="haus-code-topbar">
        <div className="haus-code-label">
          <span className="label-line" />
          <span>04 / THE HAUS CODE</span>
        </div>

        <div className="haus-code-monogram">
          CH®
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="haus-code-main">

        {/* LEFT */}
        <div className="haus-code-left">

          <div className="haus-code-kicker">
            CLOTHING. YOUR WAY.
          </div>

          <h2>
            WEAR IT
            <br />

            <em>YOUR WAY.</em>
          </h2>

          <div className="haus-code-signature">
            <span className="signature-dot" />
            <span>CHAOS HAUS APPROVED</span>
          </div>

        </div>


        {/* RIGHT */}
        <div className="haus-code-right">

          <div className="haus-code-principle">
            <span className="principle-number">01</span>

            <div>
              <span className="principle-label">
                YOUR FIT
              </span>

              <p>
                OVERSIZED OR EASY.
                <br />
                MAKE THE PIECE YOURS.
              </p>
            </div>
          </div>


          <div className="haus-code-principle">
            <span className="principle-number">02</span>

            <div>
              <span className="principle-label">
                YOUR STYLE
              </span>

              <p>
                SAME PIECE.
                <br />
                DIFFERENT PERSON.
              </p>
            </div>
          </div>


          <button className="haus-code-button">
            <span>EXPLORE THE COLLECTION</span>
            <span className="haus-code-arrow">↗</span>
          </button>

        </div>

      </div>


      {/* FOOTER */}
      <div className="haus-code-footer">

        <span>CHAOS HAUS®</span>

        <span className="haus-code-est">
          EST. 2026
        </span>

        <span>04 / 06</span>

      </div>

    </section>
  );
}
