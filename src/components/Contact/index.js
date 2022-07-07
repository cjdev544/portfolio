import React from 'react'
import SectionsTitle from '../SectionsTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWhatsapp,
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import './Contact.scss'

const Contact = () => {
  return (
    <section id='contacto' className='contact-container l-sections'>
      <div className='contact l-container'>
        <SectionsTitle title='CONTACTO' color='#000' />
        <p>
          Comunicate conmigo por medio de estos medios y te contestare lo antes
          posible.
        </p>
        <div className='contact-items'>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <div className='item'>
              <FontAwesomeIcon
                icon={faWhatsapp}
                title='whatsapp'
                className='icon'
              />
              <p className='title3'>WhatsApp</p>
            </div>
          </a>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <div className='item'>
              <FontAwesomeIcon
                icon={faTwitter}
                title='twitter'
                className='icon'
              />
              <p className='title3'>Twitter</p>
            </div>
          </a>
          <a
            href='https://github.com/cjdev544'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='item'>
              <FontAwesomeIcon
                icon={faGithub}
                title='github'
                className='icon'
              />
              <p className='title3'>Github</p>
            </div>
          </a>
          <a
            href='https://www.linkedin.com/in/cjdev544/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='item'>
              <FontAwesomeIcon
                icon={faLinkedin}
                title='linkedin'
                className='icon'
              />
              <p className='title3'>Linkedin</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
