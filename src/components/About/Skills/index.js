import React from 'react'
import SectionsTitle from '../../SectionsTitle'
import SkillItems from './SkillItems'
import './Skills.scss'

const Skills = () => {
  return (
    <div className='skills l-container l-sections'>
      <SectionsTitle title='TECNOLOGIAS' color='#fff' />
      <p>En esta sección se muestran las tecnologias que menejo.</p>
      <SkillItems />
    </div>
  )
}

export default Skills
