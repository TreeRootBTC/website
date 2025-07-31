import React, { useState } from 'react'

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set())

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  const faqItems = [
    {
      question: 'What is Treeroot?',
      answer: 'Treeroot is a trading platform designed to be the only application you need to trade onchain. We offer a suite of integrations that allow you to trade the hottest assets, all in one place.'
    },
    {
      question: 'How secure is Treeroot?',
      answer: 'Treeroot is built on Bitcoin\'s Lightning Network with non-custodial architecture. Your funds remain under your control at all times, secured by Bitcoin\'s proven security model.'
    },
    {
      question: 'Can I buy crypto on Treeroot?',
      answer: 'Yes, you can trade various cryptocurrencies on Treeroot through our integrated DEX and trading interfaces. We support major Bitcoin and altcoin pairs with deep liquidity.'
    },
    {
      question: 'How does Treeroot offer yield?',
      answer: 'Treeroot provides automated yield farming and staking strategies optimized for Bitcoin DeFi. You can earn passive income through our yield products while you sleep.'
    },
    {
      question: 'Is Treeroot decentralized?',
      answer: 'Yes, Treeroot operates on Bitcoin\'s decentralized infrastructure using Lightning Network and Taproot Assets. Users maintain full custody of their assets while accessing our trading tools.'
    }
  ]

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-4">
          <h2>FAQ</h2>
          <p>Everything you need to know about TreeRoot and Bitcoin DeFi.</p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <div 
                className="faq-question"
                onClick={() => toggleItem(index)}
              >
                <span>{item.question}</span>
                <span style={{
                  transform: openItems.has(index) ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  fontSize: '1.2rem'
                }}>
                  ▼
                </span>
              </div>
              {openItems.has(index) && (
                <div className="faq-answer">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center" style={{ marginTop: '3rem' }}>
          <h2>Optimize Your Trades with the Right Tools</h2>
          <button className="btn btn-primary btn-large">
            Launch Treeroot
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQ
