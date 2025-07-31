import React from 'react'

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav-brand" onClick={() => setCurrentPage('home')} style={{ cursor: 'pointer' }}>
            <img 
              src="/logo.png" 
              alt="Treeroot" 
              className="logo"
            />
            <span className="brand-name">Treeroot</span>
          </div>
          
          <div className="nav-actions">
            <button className="btn btn-secondary">
              Dashboard
            </button>
            <button className="btn btn-primary">
              Download
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
