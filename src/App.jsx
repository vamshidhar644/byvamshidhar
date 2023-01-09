import React from 'react'
import Home from './PortfolioContainer/Home'
import Nav from './PortfolioContainer/nav'
import About from './PortfolioContainer/Aboutme/About'
import Resume from './PortfolioContainer/resume'
import Contact from './PortfolioContainer/Contactme/contact'
import Footer from './PortfolioContainer/footer'

const App = () => {
  return (
    <>
    <Home/>
    <Nav/>
    <About />
    <Resume/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App