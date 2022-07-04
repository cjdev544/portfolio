import React from 'react'
import './About.scss'
import AboutMy from './AboutMy'
import Skills from './Skills'

const About = () => {
  return (
    <section className='about-container'>
      <div className='about l-container'>
        <AboutMy />
        <Skills />
      </div>
    </section>
  )
}

export default About
