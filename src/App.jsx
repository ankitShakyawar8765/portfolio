import React from 'react'
import Navbar from './component/Navbar'
import Home from './section/Home'
import About from './section/About'
import Skills from './section/Skills'
import Project from './section/Project'
import Experience from './section/Experience'
import Testomonial from './section/Testomonial'
import Contact from './section/Contact'
import Footer from './section/Footer'
import CustomCursor from './component/CustomCursor'
import IntroAnimation from './component/IntroAnimation'

function App() {
  const [introDone, setIntroDone] = React.useState(false)

  return (
    <>
      {!introDone && (
        <IntroAnimation onFinish={() => setIntroDone(true)} />
      )}

      {introDone && (
        <div className='relative gradient text-white'>
          <CustomCursor />
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Project />
          <Experience />
          <Testomonial />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
 