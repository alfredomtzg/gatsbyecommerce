import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { Button, StyledCart } from '../styles/components'
import priceFormat from '../utils/priceFormat'
import { CartContext } from '../Context'

export default function Cart() {
  const { cart } = useContext(CartContext)
  return (
    <StyledCart>
      <h2> Carito de Compras</h2>
      <table>
        <tbody>
          <tr>
            <th> Product</th>
            <th> Price</th>
            <th> Cantidad</th>
            <th> Total</th>
          </tr>
        </tbody>
      </table>
    </StyledCart>
  )
}
