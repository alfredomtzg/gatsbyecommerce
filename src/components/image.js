import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = ({ name }) => {
  const data = useStaticQuery(graphql`
    query GET_IMAGE {
      images: allImageSharp {
        edges {
          node {
            fluid(maxWidth: 500) {
              originalName
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const img = data.images.edges.find((edge) => edge.node.fluid.originalName.split('.')[0] === name)
  return img ? <Img fluid={img.node.fluid} /> : null
}

export default Image