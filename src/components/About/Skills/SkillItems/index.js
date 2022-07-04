import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import './SkillItems.scss'

const SkillItems = () => {
  return (
    <div className='skill-items'>
      <div className='skill-items__element'>
        <div className='img-container'>
          <StaticImage
            className='img-container__img'
            src='../../../../images/HTML.svg'
            alt='HTML'
          />
        </div>
        <h3 className='base'>HTML</h3>
      </div>
      <div className='skill-items__element'>
        <div className='img-container'>
          <StaticImage
            className='img-container__img'
            src='../../../../images/CSS.svg'
            alt='CSS'
          />
        </div>
        <h3 className='base'>CSS</h3>
      </div>
      <div className='skill-items__element'>
        <div className='img-container'>
          <StaticImage
            className='img-container__img'
            src='../../../../images/JavaScript.svg'
            alt='JavaScript'
          />
        </div>
        <h3 className='base'>JavaScript</h3>
      </div>
      <div className='skill-items__element'>
        <div className='img-container'>
          <StaticImage
            className='img-container__img'
            src='../../../../images/Sass.svg'
            alt='Sass'
          />
        </div>
        <h3 className='base'>Sass</h3>
      </div>
      <div className='skill-items__element'>
        <div className='img-container'>
          <StaticImage
            className='img-container__img'
            src='../../../../images/React.svg'
            alt='React'
          />
        </div>
        <h3 className='base'>React</h3>
      </div>
      <div className='skill-items__element'>
        <div className='img-container'>
          <StaticImage
            className='img-container__img'
            src='../../../../images/Gatsby.svg'
            alt='Gatsby'
          />
        </div>
        <h3 className='base'>Gatsby</h3>
      </div>
      <div className='skill-items__element'>
        <div className='img-container'>
          <StaticImage
            className='img-container__img'
            src='../../../../images/NextJs.svg'
            alt='NextJs'
          />
        </div>
        <h3 className='base'>NextJs</h3>
      </div>
      <div className='skill-items__element'>
        <div className='img-container'>
          <StaticImage
            className='img-container__img'
            src='../../../../images/Redux.svg'
            alt='Redux'
          />
        </div>
        <h3 className='base'>Redux</h3>
      </div>
      <div className='skill-items__element'>
        <div className='img-container'>
          <StaticImage
            className='img-container__img'
            src='../../../../images/GraphQL.svg'
            alt='GraphQL'
          />
        </div>
        <h3 className='base'>GraphQL</h3>
      </div>
      <div className='skill-items__element'>
        <div className='img-container'>
          <StaticImage
            className='img-container__img'
            src='../../../../images/Firebase.svg'
            alt='Firebase'
          />
        </div>
        <h3 className='base'>Firebase</h3>
      </div>
      <div className='skill-items__element'>
        <div className='img-container'>
          <StaticImage
            className='img-container__img'
            src='../../../../images/Git.svg'
            alt='Git'
          />
        </div>
        <h3 className='base'>Git</h3>
      </div>
      <div className='skill-items__element'>
        <div className='img-container'>
          <StaticImage
            className='img-container__img'
            src='../../../../images/Electron.svg'
            alt='Electron'
          />
        </div>
        <h3 className='base'>Electron</h3>
      </div>
      <div className='skill-items__element'>
        <div className='img-container'>
          <StaticImage
            className='img-container__img'
            src='../../../../images/NodeJs.svg'
            alt='NodeJs'
          />
        </div>
        <h3 className='base'>NodeJs</h3>
      </div>
      <div className='skill-items__element'>
        <div className='img-container'>
          <StaticImage
            className='img-container__img'
            src='../../../../images/Express.svg'
            alt='Express'
          />
        </div>
        <h3 className='base'>Express</h3>
      </div>
      <div className='skill-items__element'>
        <div className='img-container'>
          <StaticImage
            className='img-container__img-mongo'
            src='../../../../images/MongoDB.svg'
            alt='MongoDB'
          />
        </div>
        <h3 className='base'>MongoDB</h3>
      </div>
    </div>
  )
}

export default SkillItems
