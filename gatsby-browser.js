/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const React = require('react')
const Layout = require('./src/components/layout').default
const { GlobalStyles } = require('./src/styles/index')
import { CartProvider } from './src/Context'

exports.wrapRootElement = ({ element }) =>
  <CartProvider >
    <GlobalStyles />
    <Layout>{element}</Layout>
  </CartProvider>
