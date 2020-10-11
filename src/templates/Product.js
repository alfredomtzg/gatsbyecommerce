import React from 'react'
import { productDetail } from '../components'

export default function Product({ pageContext }) {
  return <productDetail {...pageContext} />
}
