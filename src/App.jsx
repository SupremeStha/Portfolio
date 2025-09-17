import React from 'react'
import Navbar from './component/nav-links/navbar'
import HeroTitle from './component/hero/HeroTitle'
import Background from './component/Background'
import AboutMe from './component/about-me/AboutMe'
import Education from './component/Education/Education'
import Projects from './component/Projects/Projects'
import Contact from './component/contactme/ContactMe'
import Footer from './component/footer/Footer'
import ClickSpark from './component/ClickSpark '

const App = () => {
  return (
    <ClickSpark
      sparkColor='#fff'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}>
      <div style={{ position: 'relative' }}>
        <Background />

        <Navbar />
        <HeroTitle />
        <AboutMe />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div></ClickSpark>
  )
}

export default App