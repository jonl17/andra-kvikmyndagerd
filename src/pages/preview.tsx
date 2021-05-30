import React from 'react'
import { withPrismicPreviewResolver } from 'gatsby-plugin-prismic-previews'
import linkResolver from '@src/data/resolvers/link'

const PreviewPage = () => {
  return (
    <div>
      <h1>Hleður gögn...</h1>
    </div>
  )
}

export default withPrismicPreviewResolver(PreviewPage, [
  {
    repositoryName: 'kristin-andrea',
    linkResolver,
  },
])
