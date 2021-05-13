import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment pageFragmentFull on PrismicPage {
    data {
      body {
        ... on PrismicPageBodyVideo {
          ...videoSliceFragment
        }
        ... on PrismicPageBodyRichText {
          ...richTextSliceFragment
        }
        ... on PrismicPageBodyImages {
          ...imagesSliceFragment
        }
      }
    }
  }

  fragment imagesSliceFragment on PrismicPageBodyImages {
    slice_type
    items {
      image {
        alt
        url
      }
    }
  }

  fragment videoSliceFragment on PrismicPageBodyVideo {
    slice_type
    primary {
      video_link {
        url
      }
    }
  }

  fragment richTextSliceFragment on PrismicPageBodyRichText {
    slice_type
    primary {
      text {
        html
      }
    }
  }
`
