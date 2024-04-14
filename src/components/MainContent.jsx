import React from 'react'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'

function MainContent() {
  return (

    <>
        <div className="mian-content">
            <HeroSection/>
            <AboutSection/>
            <ContactSection/>
        </div>
    </>

  )
}

export default MainContent