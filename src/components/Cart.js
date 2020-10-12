import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { Button, StyledCart } from '../styles/components'
import priceFormat from '../utils/priceFormat'
import { CartContext } from '../Context'


export default function Cart() {
  const { cart } = useContext(CartContext)
  const [total, setTotal] = useState(0)
  const [stripe, setStripe] = useState()

  const getTotal = () => {
    setTotal(
      cart.reduce((acc, current) => acc + current.unit_amount * current.quantity, 0)
    )
  }

  useEffect(() => {
    setStripe(
      window.stripe(process.env.STRIPE_PK, { betas: ['checkout_beta_4'] })
    )
    getTotal()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()

    const { error } = await stripe.redirectToCheckout({
      item: cart.map(({ id, quantity }) => ({ id, quantity })),
      successUrl: process.env.SUCCESS_REDIRECT,
      cancelUrl: process.env.CANCEL_REDIRECT
    })
    if (error) {
      throw error
    }

  }

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
            <tr key={swag.id}  >
              <td>
                <img src={swag.img} alt={swag.name} />
              </td>
              <td>USD {priceFormat(swag.unit_amount)}</td>
              <td>{swag.quantity}  </td>
              <td>{priceFormat(swag.quantity * swag.unit_amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <div>
          <h3> Subtotal: </h3>
          <small>USD {priceFormat(total)}</small>
        </div>
        <div>
          <Link to='/'>
            <Button type='outline' >Volver</Button>
          </Link>
          <Button onClick={() => handleSubmit()} disabled={cart.length === 0} >Buy</Button>
        </div>
      </nav>
    </StyledCart>
  )
}
