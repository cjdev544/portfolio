import * as React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroImage from '../components/Hero'
import Projects from '../components/Projects'
import Services from '../components/Services'
import '../scss/index.scss'

const IndexPage = () => {
  return (
    <>
      <Header />
      <main>
        <HeroImage />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default IndexPage
