import React from 'react'
import { Box } from '@material-ui/core'
import { RichText } from 'prismic-reactjs'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layouts'

// Query for the Home content in Prismic
export const query = graphql`
  {
    prismic {
      allShop_homes {
        edges {
          node {
            shop_title
            wide_image
            shop_now
            _linkType
            body {
              ... on PRISMIC_Shop_homeBodySide_image_and_text {
                type
                label
                primary {
                  image_side_selector
                  optional_title
                  side_image
                  side_text
                }
              }
            }
          }
        }
      }
    }
  }
`

// Using the queried Home document data, we render the top section
const Home = ({ home }) => {  
  
  return (
    <Box>
      <Img fluid />
    </Box>
  );
};

export default ({ data }) => {
  // Define the Blog Home & Blog Post content returned from Prismic
  // const doc = data.prismic.allBlog_homes.edges.slice(0,1).pop();
  // const posts = data.prismic.allPosts.edges;

  // if(!doc) return null;

  return(
    <Layout>
      <Home />
    </Layout>
  )
}
