// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-cart-js": () => import("./../../../src/pages/cart.js" /* webpackChunkName: "component---src-pages-cart-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-sorry-js": () => import("./../../../src/pages/sorry.js" /* webpackChunkName: "component---src-pages-sorry-js" */),
  "component---src-pages-thanks-js": () => import("./../../../src/pages/thanks.js" /* webpackChunkName: "component---src-pages-thanks-js" */),
  "component---src-templates-product-js": () => import("./../../../src/templates/Product.js" /* webpackChunkName: "component---src-templates-product-js" */)
}

