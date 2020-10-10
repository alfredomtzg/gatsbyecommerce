import React from 'react'
import { SEO } from '../components'
import { Button, Purchase } from '../styles/components'
import { Link } from 'gatsby'

export default function thanks() {
  return (
    <div>
      <SEO title='Successful purchase' />
      <Purchase>
        <h2> Successful purchase</h2>
        <p>I hope you enjoy your swag, wear it with pride</p>
        <p>We wait for you back and remember "No pares de aprender" </p>
        <span role='img' aria-label='emoji' >💚</span>
        <Link to='/'>
          <Button>
            Back to Catalogue
          </Button>
        </Link>
      </Purchase>
    </div>
  )
}
