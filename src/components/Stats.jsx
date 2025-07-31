import React from 'react'

const Stats = () => {
  const stats = [
    {
      number: '≤1',
      label: 'Block',
      description: 'Land in ≤1 Block'
    },
    {
      number: '0.5%',
      label: 'Fees',
      description: 'Low trading fees'
    },
    {
      number: '24/7',
      label: 'Uptime',
      description: 'Always available'
    },
    {
      number: '∞',
      label: 'Liquidity',
      description: 'Deep liquidity pools'
    }
  ]

  const architecture = {
    integrations: {
      title: 'Integrations',
      description: 'Treeroot integrates all the different protocols and applications you use, giving you a seamless trading experience.',
      icons: ['🔵', '🟢', '⚫', '🟠', '🔴', '📡']
    },
    nonCustodial: {
      title: 'Non-Custodial',
      description: 'The Treeroot wallet is fully non-custodial, secured by Bitcoin\'s infrastructure. With air-gapped architecture, it ensures robust security and seamless recovery.',
      features: ['Secure', 'User Control', 'Air-gapped']
    }
  }

  return (
    <section className="section">
      <div className="container">
        {/* Stats Grid */}
        <div className="stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
              <p style={{ 
                color: 'var(--text-muted)', 
                fontSize: '0.8rem', 
                marginTop: '0.5rem' 
              }}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Architecture Section */}
        <div style={{ marginTop: '2rem' }}>
          <div className="text-center mb-3">
            <h2>Architecture</h2>
          </div>
          
          <div className="grid grid-2" style={{ gap: '2rem' }}>
            {/* Integrations */}
            <div className="card">
              <h3 className="card-title">{architecture.integrations.title}</h3>
              <p className="card-description" style={{ marginBottom: '2rem' }}>
                {architecture.integrations.description}
              </p>
              
              {/* Integration Icons */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'var(--gradient-primary)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem'
                }}>
                  🌳
                </div>
              </div>
              
              {/* Connected Services */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap'
              }}>
                {architecture.integrations.icons.map((icon, index) => (
                  <div key={index} style={{
                    width: '40px',
                    height: '40px',
                    background: 'var(--bg-tertiary)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem'
                  }}>
                    {icon}
                  </div>
                ))}
              </div>
              
              {/* Connection Lines */}
              <div style={{
                position: 'relative',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '20%',
                  right: '20%',
                  height: '2px',
                  background: 'var(--gradient-primary)',
                  opacity: 0.5
                }}></div>
                <div style={{
                  position: 'absolute',
                  top: '30%',
                  left: '30%',
                  right: '30%',
                  height: '2px',
                  background: 'var(--gradient-primary)',
                  opacity: 0.3
                }}></div>
                <div style={{
                  position: 'absolute',
                  top: '70%',
                  left: '25%',
                  right: '25%',
                  height: '2px',
                  background: 'var(--gradient-primary)',
                  opacity: 0.3
                }}></div>
              </div>
            </div>

            {/* Non-Custodial */}
            <div className="card">
              <h3 className="card-title">{architecture.nonCustodial.title}</h3>
              <p className="card-description" style={{ marginBottom: '2rem' }}>
                {architecture.nonCustodial.description}
              </p>
              
              {/* Security Diagram */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '2rem',
                position: 'relative'
              }}>
                {/* Secure Box */}
                <div style={{
                  width: '120px',
                  height: '80px',
                  border: '3px solid var(--bitcoin-orange)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--bg-tertiary)',
                  position: 'relative'
                }}>
                  <span style={{ fontSize: '2rem' }}>🔒</span>
                  
                  {/* Secure Label */}
                  <div style={{
                    position: 'absolute',
                    top: '-25px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--bitcoin-orange)',
                    color: 'var(--bg-primary)',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.7rem',
                    fontWeight: '600'
                  }}>
                    Secure
                  </div>
                </div>
                
                {/* User Icon */}
                <div style={{
                  position: 'absolute',
                  right: '-40px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '60px',
                  height: '60px',
                  background: 'var(--accent-green)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem'
                }}>
                  👤
                </div>
                
                {/* Connection Line */}
                <div style={{
                  position: 'absolute',
                  right: '-20px',
                  top: '50%',
                  width: '40px',
                  height: '2px',
                  background: 'var(--accent-green)',
                  transform: 'translateY(-50%)'
                }}></div>
                
                {/* User Label */}
                <div style={{
                  position: 'absolute',
                  right: '-60px',
                  bottom: '-25px',
                  background: 'var(--accent-green)',
                  color: 'var(--bg-primary)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.7rem',
                  fontWeight: '600'
                }}>
                  User
                </div>
              </div>
              
              {/* Features */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                gap: '1rem'
              }}>
                {architecture.nonCustodial.features.map((feature, index) => (
                  <div key={index} style={{
                    textAlign: 'center',
                    padding: '0.5rem',
                    background: 'var(--bg-tertiary)',
                    borderRadius: '6px',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
