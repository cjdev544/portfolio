import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage, StaticImage } from 'gatsby-plugin-image'

import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'
import './Hero.scss'

const HeroImage = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "hero.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )
  const image = getImage(placeholderImage)

  // Use like this:
  const bgImage = convertToBgImage(image)

  return (
    <BackgroundImage
      className='hero'
      Tag='section'
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      preserveStackingContext
    >
      <div className='hero-copy'>
        <StaticImage
          className='hero-copy__img'
          src='../../images/perfil 1.png'
          alt='Foto Jefferson Campos'
        />
        <div className='hero-copy__info'>
          <h1 className='title1'>Jefferson Campos</h1>
          <p className='title3'>Desarrollador Frontend</p>
        </div>
      </div>
    </BackgroundImage>
  )
}
export default HeroImage
