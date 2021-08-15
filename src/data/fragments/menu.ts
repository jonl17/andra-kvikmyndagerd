import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment menuFragment on PrismicMenu {
    tags
    id
    data {
      links {
        link {
          url
        }
        label
      }
    }
  }
`
