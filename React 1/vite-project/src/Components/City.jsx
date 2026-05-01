import React from 'react'

function City({ name, state = "VIC", country = "Australia", children}) {
  return (
    <div>
      <p>{name} is in {state}, {country}</p>
      {children}
    </div>
  )
}

export default City
