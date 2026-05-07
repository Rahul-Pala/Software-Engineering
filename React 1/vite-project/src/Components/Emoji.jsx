import React from 'react'
import { useState } from 'react'
function Emoji() {
    const  [Emoji, setEmoji] = useState('Happy')

    const handleKiss = () => {setEmoji('😙')}
    const handleLove = () => {setEmoji('🥰')}

  return (
    <div>
      Mood: {Emoji}

      <button onClick={handleKiss}> Kiss</button>
      <button onClick={handleLove}> Love</button>
    </div>
  )
}

export default Emoji
