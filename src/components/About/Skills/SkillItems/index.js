import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import './SkillItems.scss'

const SkillItems = () => {
  return (
    <div className='skill-items'>
      <div className='skill-item__element'>
        <StaticImage
          className='skill-items__img'
          src='../../../../images/HTML.svg'
          alt='HTML'
        />
        <h3>HTML</h3>
      </div>
      <div className='skill-item__element'>
        <StaticImage
          className='skill-items__img'
          src='../../../../images/CSS.svg'
          alt='CSS'
        />
        <h3>CSS</h3>
      </div>
      <div className='skill-item__element'>
        <StaticImage
          className='skill-items__img'
          src='../../../../images/JavaScript.svg'
          alt='JavaScript'
        />
        <h3>JavaScript</h3>
      </div>
      <div className='skill-item__element'>
        <StaticImage
          className='skill-items__img'
          src='../../../../images/Sass.svg'
          alt='Sass'
        />
        <h3>Sass</h3>
      </div>
      <div className='skill-item__element'>
        <StaticImage
          className='skill-items__img'
          src='../../../../images/React.svg'
          alt='React'
        />
        <h3>React</h3>
      </div>
      <div className='skill-item__element'>
        <StaticImage
          className='skill-items__img'
          src='../../../../images/Gatsby.svg'
          alt='Gatsby'
        />
        <h3>Gatsby</h3>
      </div>
      <div className='skill-item__element'>
        <StaticImage
          className='skill-items__img'
          src='../../../../images/NextJs.svg'
          alt='NextJs'
        />
        <h3>NextJs</h3>
      </div>
      <div className='skill-item__element'>
        <StaticImage
          className='skill-items__img'
          src='../../../../images/Redux.svg'
          alt='Redux'
        />
        <h3>Redux</h3>
      </div>
      <div className='skill-item__element'>
        <StaticImage
          className='skill-items__img'
          src='../../../../images/GraphQL.svg'
          alt='GraphQL'
        />
        <h3>GraphQL</h3>
      </div>
      <div className='skill-item__element'>
        <StaticImage
          className='skill-items__img'
          src='../../../../images/Firebase.svg'
          alt='Firebase'
        />
        <h3>Firebase</h3>
      </div>
      <div className='skill-item__element'>
        <StaticImage
          className='skill-items__img'
          src='../../../../images/Git.svg'
          alt='Git'
        />
        <h3>Git</h3>
      </div>
      <div className='skill-item__element'>
        <StaticImage
          className='skill-items__img'
          src='../../../../images/Electron.svg'
          alt='Electron'
        />
        <h3>Electron</h3>
      </div>
      <div className='skill-item__element'>
        <StaticImage
          className='skill-items__img'
          src='../../../../images/NodeJs.svg'
          alt='NodeJs'
        />
        <h3>NodeJs</h3>
      </div>
      <div className='skill-item__element'>
        <StaticImage
          className='skill-items__img'
          src='../../../../images/Express.svg'
          alt='Express'
        />
        <h3>Express</h3>
      </div>
      <div className='skill-item__element'>
        <StaticImage
          className='skill-items__img'
          src='../../../../images/MongoDB.svg'
          alt='MongoDB'
        />
        <h3>MongoDB</h3>
      </div>
    </div>
  )
}

export default SkillItems
