import React, { useEffect, useState } from 'react'


function Hello() {
  
  const [emoji, setEmoji] = useState('😊')

  const handleChangeMood = () => {

    if (emoji === '😊') {
      setEmoji('😢')
    } else {
      setEmoji('😊')
    }

  }

  return (
    <div>
      <h1>{emoji}</h1>

      <button onClick={handleChangeMood}>
        Change Mood
      </button>
    </div>
  )
} 

export default Hello
