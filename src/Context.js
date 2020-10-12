import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, serCart] = useState([])

  const addToCart = element => {
    serCart([...cart, element])
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart
      }} >
      {children}
    </CartContext.Provider>
  )
}