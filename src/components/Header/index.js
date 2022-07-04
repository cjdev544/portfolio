import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import './Header.scss'

const Header = () => {
  return (
    <header className='header-container'>
      <div className='header l-container'>
        <Logo />
        <Navbar />
      </div>
    </header>
  )
}

export default Header
