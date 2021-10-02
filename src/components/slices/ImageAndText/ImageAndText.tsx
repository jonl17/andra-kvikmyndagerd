import { IGatsbyImageData, GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

type Props = {
  image: {
    url: string
    alt: string
    gatsbyImageData: IGatsbyImageData
  }
  text: {
    html: string
  }
}

const ImageAndText = ({ image, text }: Props) => {
  const img = getImage(image.gatsbyImageData)
  return (
    <div className='d-lg-flex'>
      {img && (
        <div className='col-lg-5 pe-lg-4 mb-4 mb-lg-0'>
          <GatsbyImage className='h-100 w-100' image={img} alt={image.alt} />
        </div>
      )}
      <div
        className='rich-text col-lg-6 ps-lg-4 mt-lg-4'
        dangerouslySetInnerHTML={{ __html: text.html }}
      />
    </div>
  )
}

export default ImageAndText
