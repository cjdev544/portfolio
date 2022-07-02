import React from 'react'
import Logo from './Logo'
import './Header.scss'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='header-container'>
      <div className='header'>
        <Logo />
        <Navbar />
      </div>
    </header>
  )
}

export default Header
