import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <Features />
            <Stats />
            <FAQ />
          </>
        )
      case 'static':
        return (
          <div className="section">
            <div className="container">
              <div className="text-center">
                <h1>Static Page</h1>
                <p>This is a placeholder for your static content page.</p>
              </div>
            </div>
          </div>
        )
      default:
        return (
          <>
            <Hero />
            <Features />
            <Stats />
            <FAQ />
          </>
        )
    }
  }

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App
