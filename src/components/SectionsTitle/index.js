import React from 'react'
import './SectionsTitle.scss'

const SectionsTitle = ({ title, color }) => {
  return (
    <h2 className='title2 title-section' style={{ color: color }}>
      <span>{title}</span>
    </h2>
  )
}

export default SectionsTitle
