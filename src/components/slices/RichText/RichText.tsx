import React from 'react'

type Props = {
  html: string
}

const RichText = ({ html }: Props) => {
  return (
    <div
      className='rich-text col-lg-8  m-auto'
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default RichText
