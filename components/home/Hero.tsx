'use client';

import { useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className={`chaos-hero ${loaded ? 'hero-loaded' : ''}`}>
      
      {/* Background Image */}
      <div className="hero-image-wrap">
        <img
          src="/chaos-haus/images/chaos-hero.png"
          alt="Chaos Haus streetwear campaign"
          className="hero-image"
          onLoad={() => setLoaded(true)}
        />

        <div className="hero-overlay" />
      </div>

      {/* Left Brand Content */}
      <div className="hero-content">

        <div className="hero-eyebrow">
          <span className="hero-line" />
          CHAOS HAUS® / DROP 001
        </div>

        <h1>
          CHAOS
          <br />
          HAS A HOME<span>.</span>
        </h1>

        <p className="hero-description">
          NOT FOR EVERYONE.
          <br />
          MADE FOR YOU.
        </p>

        <button className="hero-button">
          <span>EXPLORE THE HAUS</span>
          <span className="hero-arrow">→</span>
        </button>

      </div>

      {/* Top Right */}
      <div className="hero-top-text">
        CHAOS IS A PERSPECTIVE.
      </div>

      {/* Bottom Left */}
      <div className="hero-community">
        <div className="community-icon">◎</div>

        <div>
          <span>WORLDWIDE</span>
          <span>CHAOS COMMUNITY</span>
        </div>
      </div>

      {/* Bottom Centre */}
      <div className="hero-index">
        <span className="active" />
        <span />
        <span />
        <span />
        <small>01</small>
      </div>

      {/* Bottom Right */}
      <div className="hero-drop">
        <span>NEW DROP</span>
        <span>CHAOS DROP 001</span>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll">
        <span />
        SCROLL TO ENTER
      </div>

    </section>
  );
}
