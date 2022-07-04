import React from 'react'
import SectionsTitle from '../../SectionsTitle'
import './AboutMy.scss'

const AboutMy = () => {
  return (
    <div className='about-my l-container l-sections'>
      <div className='about-my__container'>
        <SectionsTitle title='SOBRE MI' color='#fff' />
        <p>
          Un gusto poder saludarte, soy Jefferson Campos, vivo en Caracas
          Venezuela, electrónico de profesión y gran entusiasta de la
          tecnología. Programador, guitarrista afisionado y amante de los
          animales. Contactame y llevemos tus ideas a codigo.
        </p>
      </div>
    </div>
  )
}

export default AboutMy
