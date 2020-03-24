import React from 'react'
import Attribute from './Attribute'

function Superhero(props) {
  return (
    <div>
      <p><b>Superhero:</b> {props.name}</p>
      <p><b>Franchise:</b> {props.franchise}</p>
      <p><b>Powers:</b> {props.powers}</p>
    </div>
  )
}

export default Superhero