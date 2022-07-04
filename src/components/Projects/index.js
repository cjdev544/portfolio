import React from 'react'
import SectionsTitle from '../SectionsTitle'
import ProjectItems from './ProjectItems'
import './Projects.scss'

const Projects = () => {
  return (
    <section className='project-container l-sections'>
      <div className='projects l-container'>
        <SectionsTitle title='PROYECTOS' color='#fff' />
        <p>
          Aqui podras encontrar mis ultimos pryectos. da click sobre alguno y
          podrás ver mas información.
        </p>
        <ProjectItems />
      </div>
    </section>
  )
}

export default Projects
