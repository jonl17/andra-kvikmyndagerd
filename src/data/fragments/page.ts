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
        ... on PrismicPageDataBodyBanner {
          ...bannerSliceFragment
        }
      }
    }
  }

  fragment bannerSliceFragment on PrismicPageDataBodyBanner {
    slice_type
    id
    primary {
      image {
        url
        alt
        gatsbyImageData
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
