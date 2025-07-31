import React from 'react'

const Hero = () => {
  return (
    <section className="section-hero-compact">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            The Gateway to Bitcoin DeFi
          </h1>
          <p className="hero-subtitle">
            Treeroot is the only trading platform you'll ever need.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary btn-large">
              Start Trading
            </button>
          </div>
          
          {/* Backed by section - more compact */}
          <div className="hero-backed">
            <div className="backed-logos">
              <span className="backed-item">⚡ Lightning Network</span>
              <span className="backed-item">🟠 Taproot Assets</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
