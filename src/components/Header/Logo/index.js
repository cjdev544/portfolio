import React from 'react'
import './Logo.scss'

const Logo = () => {
  const open = '<'
  const close = '/>'

  return (
    <a className='logo-main' href='#home'>
      <h2>
        <span>{open}</span>CjDev544 <span>{close}</span>
      </h2>
    </a>
  )
}

export default Logo
