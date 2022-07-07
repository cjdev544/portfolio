import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import './ProjectItems.scss'

const ProjectsItems = () => {
  return (
    <div className='projects-items'>
      <div className='item'>
        <div className='item-container'>
          <a href='#'>
            <StaticImage
              src='../../../images/centralfoodmalaga 1.jpg'
              alt='HTML'
              placeholder='tracedSVG'
              imgClassName='item__img'
            />
            <div className='item-info'>
              <div className='item-info-text'>
                <p className='title3'>Ver más</p>
                <p>Ver especificaciones y enlaces.</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className='item'>
        <div className='item-container'>
          <StaticImage
            src='../../../images/cf-admin 3.jpg'
            alt='HTML'
            placeholder='tracedSVG'
            imgClassName='item__img'
          />
          <div className='item-info'>
            <div className='item-info-text'>
              <p className='title3'>Ver más</p>
              <p>Ver especificaciones y enlaces.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='item'>
        <div className='item-container'>
          <StaticImage
            src='../../../images/cf-admin 3.jpg'
            alt='HTML'
            placeholder='tracedSVG'
            imgClassName='item__img'
          />
          <div className='item-info'>
            <div className='item-info-text'>
              <p className='title3'>Ver más</p>
              <p>Ver especificaciones y enlaces.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='item'>
        <div className='item-container'>
          <StaticImage
            src='../../../images/centralfoodmalaga 1.jpg'
            alt='HTML'
            placeholder='tracedSVG'
            imgClassName='item__img'
          />
          <div className='item-info'>
            <div className='item-info-text'>
              <p className='title3'>Ver más</p>
              <p>Ver especificaciones y enlaces.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsItems
