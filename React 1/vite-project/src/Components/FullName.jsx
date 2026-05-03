import React from 'react'
import NamePart from './NamePart'

function FullName(props) {
  return (
    <div>
      Full name: <NamePart value = {props.first}></NamePart>
    </div>
  )
}

export default FullName
