/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Content, Footer } from '../styles/components'

import Header from "./header"

const Layout = ({ children }) => (

  <>
    <Header />
    <Content>
      <main>{children}</main>
      <Footer>
        © This page is building whit
        <span role='img' aria-label='Emoji' > 💚 </span>
        for
        <a href="https://github.com/alfredomtzg"> Alfredo Martinez</a>
      </Footer>
    </Content>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
