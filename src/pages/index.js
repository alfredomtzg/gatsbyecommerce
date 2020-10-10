import React from "react"
import { Link } from "gatsby"

import { Jumbo, Layout, SEO } from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbo />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/thanks">Go to thanks</Link>
  </Layout>
)

export default IndexPage
