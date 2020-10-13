/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require('react')
const Layout = require('./src/components/layout').default
const { GlobalStyles } = require('./src/styles')
const { CartProvider } = require('./src/Context')

exports.wrapRootElement = ({ element }) => (
  <CartProvider >
    <GlobalStyles />
    <Layout>{element}</Layout>
  </CartProvider>
)
