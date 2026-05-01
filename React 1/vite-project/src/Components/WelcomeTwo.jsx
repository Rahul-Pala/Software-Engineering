import React from 'react'

function WelcomeTwo(props) {
  return (
<>
    <div>
      <h1>Hello {props.name}, how old are you? {props.age}</h1>
    </div>
</>
  )
}

export default WelcomeTwo
