import React from 'react'
import SliceMapping from '@cmp/slices/sliceMapping'
import { graphql } from 'gatsby'
import '@src/data/fragments/page'
import linkResolver from '@src/data/resolvers/link'

type Props = {
  data: any
}

const Page = ({ data }: Props) => {
  return (
    <div className='page container'>
      {data.prismicPage.data.body.map((slice: any, i: number) => (
        <SliceMapping key={i} slice={slice} />
      ))}
    </div>
  )
}

export default Page

export const query = graphql`
  query ($id: String) {
    prismicPage(id: { eq: $id }) {
      ...pageFragmentFull
    }
  }
`
