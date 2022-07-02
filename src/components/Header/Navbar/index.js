import React, { useRef } from 'react'
import './Navbar.scss'

const Navbar = () => {
  const toggle = useRef()
  const panel = useRef()

  const toggleMenu = () => {
    toggle.current.classList.toggle('is-active')
    panel.current.classList.toggle('is-active')
  }

  return (
    <>
      <button
        ref={toggle}
        onClick={toggleMenu}
        className='navbar-button hamburger hamburger--spin'
        type='button'
      >
        <span className='hamburger-box'>
          <span className='hamburger-inner' />
        </span>
      </button>

      <aside ref={panel} className='panel'>
        <nav className='menu'>
          <ul className='menu__items'>
            <li className='menu__item'>
              <a href='#inicio' className='menu__link'>
                INICIO
              </a>
            </li>
            <li className='menu__item'>
              <a href='#sobre_mi' className='menu__link'>
                SOBRE MÍ
              </a>
            </li>
            <li className='menu__item'>
              <a href='#servicios' className='menu__link'>
                SERVICIOS
              </a>
            </li>
            <li className='menu__item'>
              <a href='#proyectos' className='menu__link'>
                PROYECTOS
              </a>
            </li>
            <li className='menu__item'>
              <a href='#contacto' className='menu__link'>
                CONTACTO
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default Navbar
