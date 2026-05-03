import React from 'react'

function Greeting({name, children}) {

    let displayName = "World"
    
    if (name) {
        displayName = name;
    }
  return (
    <div>
      <p>Hello {displayName}</p>
      {children}
      {children && <p>{children}</p>}
    </div>
  )
}

export default Greeting
