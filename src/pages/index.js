import React from "react"
import { graphql } from "gatsby"
import { Jumbo, SEO, Product } from "../components"


export const query = graphql`
query GET_DATA {
  allSite {
    edges {
      node {
        siteMetadata {
          description
        }
      }
    }
  }

  allStripePrice{
    edges{
      node{
        id
        unit_amount
        product{
          name
          metadata{
            img
            description
            wear
            color
          }      
        }
      }
    }
  }

}
`



const IndexPage = ({ data }) => {

  return (
    <>
      <SEO title="Home" />
      <Jumbo description={data.allSite.edges[0].node.siteMetadata.description} />
      <h1>Hi people</h1>
      <Product products={data.allStripePrice.edges} />
    </>
  )
}


export default IndexPage
