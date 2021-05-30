import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment pageFragmentFull on PrismicPage {
    data {
      body {
        ... on PrismicPageDataBodyVideo {
          ...videoSliceFragment
        }
        ... on PrismicPageDataBodyRichText {
          ...richTextSliceFragment
        }
        ... on PrismicPageDataBodyImages {
          ...imagesSliceFragment
        }
      }
    }
  }

  fragment imagesSliceFragment on PrismicPageDataBodyImages {
    slice_type
    items {
      image {
        alt
        url
      }
    }
  }

  fragment videoSliceFragment on PrismicPageDataBodyVideo {
    slice_type
    primary {
      video_link {
        url
      }
    }
  }

  fragment richTextSliceFragment on PrismicPageDataBodyRichText {
    slice_type
    primary {
      text {
        html
      }
    }
  }
`
