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
          {cart.map(swag => (
            <tr key={swag.id}>
              <td>
                <img src={swag.metadata.img} alt={swag.name} />
              </td>
              <td>USD {priceFormat(swag.unit_amount)}</td>
              <td>{swag.quantity}</td>
              <td>{priceFormat(swag.quantity * swag.unit_amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <div>
          <h3> Subtotal: </h3>
          <small>Total</small>
        </div>
        <div>
          <Link to='/'>
            <Button type='outline' >Volver</Button>
          </Link>
          <Button>Buy</Button>
        </div>
      </nav>
    </StyledCart>
  )
}
