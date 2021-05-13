import React from 'react'
import SliceMapping from '@cmp/slices/sliceMapping'
import { graphql } from 'gatsby'
import '@src/data/fragments/page'

type Props = {
  data: any
}

const Page = ({ data }: Props) => {
  return (
    <div className='page container py-4'>
      {data.prismicPage.data.body.map((slice: any, i: number) => (
        <SliceMapping key={i} slice={slice} />
      ))}
    </div>
  )
}

export default Page

export const query = graphql`
  query($id: String) {
    prismicPage(id: { eq: $id }) {
      ...pageFragmentFull
    }
  }
`
