import React from "react"
import { Link } from "gatsby"

import { Jumbo, SEO } from "../components"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Jumbo />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/thanks">Go to thanks</Link>
    <br></br>
    <Link to="/sorry">Go to Sorry</Link>
  </>
)

export default IndexPage
