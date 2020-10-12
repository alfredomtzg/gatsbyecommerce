import React from "react"
import { Link, graphql } from "gatsby"
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
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/thanks">Go to thanks</Link>
      <br></br>
      <Link to="/sorry">Go to Sorry</Link>
      <Product products={data.allStripePrice.edges} />
    </>
  )
}


export default IndexPage
