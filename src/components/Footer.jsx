import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-minimal">
      <div className="container">
        <div className="footer-minimal-content">
          <div className="footer-brand">
            <img 
              src="/logo.png" 
              alt="Treeroot" 
              className="logo"
            />
            <span className="brand-name">Treeroot</span>
            <span className="copyright">© {currentYear} Treeroot. All rights reserved.</span>
          </div>
          
          <div className="footer-links">
            <a href="#">Contact</a>
            <a href="#">Docs</a>
            <a href="#">𝕏</a>
            <a href="#">💬</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
