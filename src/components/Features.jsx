import React from 'react'

const Features = () => {
  const features = [
    {
      icon: '🔄',
      title: 'Main DEX',
      description: 'Trade with confidence using our AMM with 0.5% fees.'
    },
    {
      icon: '🏪',
      title: 'Merchant Gateway',
      description: 'Accept payments globally with $0.01 minimum fees.'
    },
    {
      icon: '🚀',
      title: 'Launchpad',
      description: 'Launch tokens with automatic liquidity and price discovery.'
    },
    {
      icon: '📈',
      title: 'Earn Yield',
      description: 'Provide liquidity and earn from trading fees.'
    }
  ]

  const [activeTab, setActiveTab] = React.useState('order-execution')

  const tabs = [
    {
      id: 'order-execution',
      title: 'Order Execution Engine',
      subtitle: 'Trade with confidence.',
      description: 'Our limit order execution engine is the fastest in the market.',
      detail: 'With our proprietary order execution engine and colocated nodes, our limit orders land in ≤1 block.'
    },
    {
      id: 'wallet-tracker',
      title: 'Wallet and Twitter Tracker',
      subtitle: 'Trade and track all in one place.',
      description: 'Monitor wallets and social signals for better trading decisions.',
      detail: 'Track whale movements and social sentiment to stay ahead of the market.'
    },
    {
      id: 'hyperliquid-perps',
      title: 'Hyperliquid Perpetuals',
      subtitle: 'Trade leveraged Perps.',
      description: 'Access leveraged perpetual contracts with deep liquidity.',
      detail: 'Trade with up to 50x leverage on major Bitcoin and altcoin pairs.'
    },
    {
      id: 'yield',
      title: 'Yield',
      subtitle: 'Earn while you sleep.',
      description: 'Generate passive income through our yield strategies.',
      detail: 'Automated yield farming and staking strategies optimized for Bitcoin DeFi.'
    }
  ]

  return (
    <section className="section features">
      <div className="container">
        <div className="text-center mb-3">
          <h2>Advanced Features to Optimize Your Trading</h2>
          <p>From wallet tracking to real-time analytics, we've got you covered.</p>
        </div>

        {/* Feature Grid - more compact */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Tab Navigation - more compact */}
        <div className="tab-nav-compact">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn-compact ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content - more compact */}
        <div className="tab-content-minimal">
          {tabs.map((tab) => (
            activeTab === tab.id && (
              <div key={tab.id} className="tab-panel-minimal">
                <div className="tab-info-minimal">
                  <h3>{tab.title}</h3>
                  <h4>{tab.subtitle}</h4>
                  <p className="tab-description">{tab.description}</p>
                  <p className="tab-detail">{tab.detail}</p>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
