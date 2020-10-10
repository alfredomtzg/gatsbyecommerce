import React from 'react'
import { SEO } from '../components'
import { Button, Purchase } from '../styles/components'
import { Link } from 'gatsby'

export default function sorry() {
  return (
    <div>
      <SEO title='Failed purchase' />
      <Purchase>
        <h2> Failed purchase</h2>
        <p>Something strange happened with the purchase and it was not possible to carry out</p>
        <p>Your swag will continue to wait for you to acquire it and wear it with prideand remember "No pares de aprender" </p>
        <span role='img' aria-label='emoji' >😭</span>
        <Link to='/'>
          <Button>
            Back to Catalogue
          </Button>
        </Link>
      </Purchase>
    </div>
  )
}
