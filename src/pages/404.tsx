import React from 'react'
import {
  withPrismicUnpublishedPreview,
  componentResolverFromMap,
} from 'gatsby-plugin-prismic-previews'
import linkResolver from '@src/data/resolvers/link'
import PageTemplate from '@cmp/templates/Page/Page'

const NotFoundPage = () => <p className='mt-5'>Page not found</p>

export default withPrismicUnpublishedPreview(NotFoundPage, [
  {
    repositoryName: 'kristin-andrea',
    linkResolver,
    componentResolver: componentResolverFromMap({
      page: PageTemplate,
    }),
  },
])
