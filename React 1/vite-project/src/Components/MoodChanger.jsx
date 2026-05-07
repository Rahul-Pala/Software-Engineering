import { useState } from "react";

// save in MoodChanger.jsx
function MoodChanger() {
const [mood, setMood] = useState('happy');

const handleWinLotto = () => {
  setMood('ecstatic')
}

const handleGoMelbourne = () => {
    setMood('Best day')
}


return (
<div className="MoodChanger componentBox">
<p> Current Mood: {mood}</p>

<button 
    onClick={() => setMood('Awesome')}>Change mood
</button>

<button
onClick={() => setMood('tired')}>
Stay Up Late
</button>

<button
onClick={() => setMood('hungry')}>
Skip Lunch
</button>

<button onClick={handleWinLotto}>
  Win Lotto
</button>

<button onClick={handleGoMelbourne}> Go Melbourne

</button>

</div>
)
}
export default MoodChanger;