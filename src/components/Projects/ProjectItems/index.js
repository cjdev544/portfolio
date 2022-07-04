import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const ProjectsItems = () => {
  return (
    <div className='projects-items'>
      <div className='item'>
        <StaticImage
          className='skill-items__img'
          src='../../../images/centralfoodmalaga 1.jpg'
          alt='HTML'
        />
      </div>
      <div className='item'>
        <StaticImage
          className='skill-items__img'
          src='../../../images/cf-admin 3.jpg'
          alt='HTML'
        />
      </div>
      <div className='item'>
        <StaticImage
          className='skill-items__img'
          src='../../../images/cf-admin 3.jpg'
          alt='HTML'
        />
      </div>
      <div className='item'>
        <StaticImage
          className='skill-items__img'
          src='../../../images/centralfoodmalaga 1.jpg'
          alt='HTML'
        />
      </div>
    </div>
  )
}

export default ProjectsItems
