import { IGatsbyImageData, GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

type Props = {
  image: {
    url: string
    alt: string
    gatsbyImageData: IGatsbyImageData
  }
}

const Banner = ({ image }: Props) => {
  const img = getImage(image.gatsbyImageData)
  return (
    <div className='banner'>
      {img && (
        <GatsbyImage className='h-100 w-100' image={img} alt={image.alt} />
      )}
    </div>
  )
}

export default Banner
