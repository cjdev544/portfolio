import React from 'react'
import './About.scss'
import AboutMy from './AboutMy'
import Skills from './Skills'

const About = () => {
  return (
    <section className='about'>
      <AboutMy />
      <Skills />
    </section>
  )
}

export default About
