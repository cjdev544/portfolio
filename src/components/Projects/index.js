import React from 'react'
import SectionsTitle from '../SectionsTitle'
import ProjectItems from './ProjectItems'
import './Projects.scss'

const Projects = () => {
  return (
    <section className='projects'>
      <SectionsTitle title='PROYECTOS' color='#fff' />
      <p>
        Aqui podras encontrar mis ultimos prjecto. da click sobre alguno y veras
        mas información.
      </p>
      <ProjectItems />
    </section>
  )
}

export default Projects
