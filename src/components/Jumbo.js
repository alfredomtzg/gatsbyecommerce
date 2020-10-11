import React from 'react'
import { StyledJumbo } from '../styles/components'
import { Image } from './'

export default function Jumbo({ description }) {
  return (
    <StyledJumbo>
      <div>
        <h2>Get the best exclusive and special swag from Platzi.</h2>
        <small>Stylish pieces for top students.</small>
        <br />
        <small>{description} </small>
      </div>
      <Image name='icon' />

    </StyledJumbo>
  )
}
