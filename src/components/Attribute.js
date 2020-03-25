import React from 'react'

function Attribute(props) {
  console.log(props)

  return (
    <p><b>{props.name}:</b> {props.value}</p>
  )
}

export default Attribute