import React from 'react'
import './Logo.scss'

const Logo = ({ setIsActive }) => {
  const open = '<'
  const close = '/>'

  return (
    <a className='logo-main' href='#inicio' onClick={() => setIsActive('logo')}>
      <h2>
        <span>{open}</span>CjDev544 <span>{close}</span>
      </h2>
    </a>
  )
}

export default Logo
