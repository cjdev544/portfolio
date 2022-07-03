import React from 'react'
import SectionsTitle from '../../SectionsTitle'
import SkillItems from './SkillItems'
import './Skills.scss'

const Skills = () => {
  return (
    <div className='skills'>
      <SectionsTitle title='TECNOLOGIAS' color='#fff' />
      <SkillItems />
    </div>
  )
}

export default Skills
