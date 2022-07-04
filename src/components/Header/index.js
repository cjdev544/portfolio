import React, { useState } from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import './Header.scss'

const Header = () => {
  const [isActive, setIsActive] = useState(null)

  return (
    <header className='header-container'>
      <div className='header l-container'>
        <Logo setIsActive={setIsActive} />
        <Navbar isActive={isActive} setIsActive={setIsActive} />
      </div>
    </header>
  )
}

export default Header
