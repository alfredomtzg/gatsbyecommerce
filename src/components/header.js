import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { CartContext } from "../Context"
import { MenuItem, StyledHeader } from '../styles/components'


const Header = ({ siteTitle }) => {
  const { cart } = useContext(CartContext)
  return (
    <StyledHeader>
      <Link to='/'>
        <img src='https://i.postimg.cc/6q3pg48v/Logo.png' alt='Logo Platzi' />
      </Link>
      <nav>
        <ul>
          <MenuItem margin>
            <Link to='/'>
              Productos
          </Link>
          </MenuItem>
          <MenuItem margin>
            <a href="https://alfredomtzg.github.io/challenge-platzi-master/">Alfredo Platzi Master</a>
          </MenuItem>
          <MenuItem>
            <Link to='/cart'>
              <span>
                <img
                  src='https://i.postimg.cc/L6wpMxLt/cart.png'
                  alt='LogoCart'
                />
                {cart.length}
              </span>
            </Link>
          </MenuItem>
        </ul>
      </nav>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
