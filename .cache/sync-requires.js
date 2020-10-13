const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/alfredo/Documents/alfredo/gatsbyecommerce/src/pages/404.js"))),
  "component---src-pages-cart-js": hot(preferDefault(require("/Users/alfredo/Documents/alfredo/gatsbyecommerce/src/pages/cart.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/alfredo/Documents/alfredo/gatsbyecommerce/src/pages/index.js"))),
  "component---src-pages-sorry-js": hot(preferDefault(require("/Users/alfredo/Documents/alfredo/gatsbyecommerce/src/pages/sorry.js"))),
  "component---src-pages-thanks-js": hot(preferDefault(require("/Users/alfredo/Documents/alfredo/gatsbyecommerce/src/pages/thanks.js"))),
  "component---src-templates-product-js": hot(preferDefault(require("/Users/alfredo/Documents/alfredo/gatsbyecommerce/src/templates/Product.js")))
}

