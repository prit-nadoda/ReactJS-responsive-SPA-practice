import React from 'react'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import Footer from './Footer'

function MainContent() {
  return (

    <>
        <div className="mian-content">
            <HeroSection/>
            <AboutSection/>
            <ContactSection/>
            <Footer/>
        </div>
    </>

  )
}

export default MainContent