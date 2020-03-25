import React from 'react'
import Attribute from './Attribute'

function Superhero(props) {
  return (
    <div>
      <p>Below is a Superhero!</p>
      <Attribute name='Superhero' value={props.name} />
      <Attribute name='Franchise' value={props.franchise} />
      <Attribute name='Powers' value={props.powers} />
    </div>
  )
}

export default Superhero