import React from 'react'
import SectionsTitle from '../SectionsTitle'
import ProjectItems from './ProjectItems'
import './Projects.scss'

const Projects = () => {
  return (
    <section id='proyectos' className='project-container l-sections'>
      <div className='projects l-container'>
        <SectionsTitle title='PROYECTOS' color='#fff' />
        <p>
          Ultimos pryectos. da click sobre alguno y podrás ver mas información.
        </p>
        <ProjectItems />
      </div>
    </section>
  )
}

export default Projects
