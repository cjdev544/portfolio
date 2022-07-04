import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPalette,
  faCode,
  faMobileAlt,
  faTachometerAlt,
  faGlobe,
  faLink,
} from '@fortawesome/free-solid-svg-icons'

import SectionsTitle from '../SectionsTitle'
import './Services.scss'
// <FontAwesomeIcon icon={faCoffee} size="1x" />

const Services = () => {
  return (
    <section className='services'>
      <SectionsTitle title='SERVICIOS' color='#000' />
      <p>
        Aqui puedes ver los servicios que ofrezco. Si tienes alguna pregunta, no
        dudes en ponerte en contacto.
      </p>
      <div className='services-container'>
        <div className='services-container__item'>
          <FontAwesomeIcon icon={faPalette} className='faicons' />
          <h3 className='title3'>UI / UX</h3>
          <p>
            Diseño enfocado en la usabilidad y experencia de usuario, para hacer
            del proyecto muy intuitivo.
          </p>
        </div>
        <div className='services-container__item'>
          <FontAwesomeIcon icon={faCode} className='faicons' />
          <h3 className='title3'>PROGRAMACIÓN</h3>
          <p>
            Desarrollo de sitios web, Apps web y Apps de escritorio con
            tecnologías web.
          </p>
        </div>
        <div className='services-container__item'>
          <FontAwesomeIcon icon={faMobileAlt} className='faicons' />
          <h3 className='title3'>DISEÑO RESPONSIVO</h3>
          <p>
            Diseño totalmente adaptable a cualquier dispositivo, mobil, tablet y
            escritorio.
          </p>
        </div>
        <div className='services-container__item'>
          <FontAwesomeIcon icon={faGlobe} className='faicons' />
          <h3 className='title3'>SEO</h3>
          <p>
            Codigo enfocado para poder pocicionarse en los motores de busquedas
            y tener mas alcance.
          </p>
        </div>
        <div className='services-container__item'>
          <FontAwesomeIcon icon={faTachometerAlt} className='faicons' />
          <h3 className='title3'>PERFORMANCE</h3>
          <p>
            Mejores practicas en el desarrollo para obtimisar la velocidad de
            carga mejorando la experiencia de usuario.
          </p>
        </div>
        <div className='services-container__item'>
          <FontAwesomeIcon icon={faLink} className='faicons' />
          <h3 className='title3'>INTEGRACIÓN DE REDES SOCIALES</h3>
          <p>
            Integración de las redes sociales para tener mas alcance con los
            potenciales clientes.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
