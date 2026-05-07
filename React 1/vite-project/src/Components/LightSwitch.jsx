import { useState } from "react";

function LightSwitch() {

  const [light, setLight] = useState('OFF');

  const handleTurnOn = () => {
    setLight('ON');
  }

  const handleTurnOff = () => {
    setLight('OFF');
  }

  return (
    <div>
      <h1>Light is {light}</h1>

      <button onClick={handleTurnOn}>
        Turn On
      </button>

      <button onClick={handleTurnOff}>
        Turn Off
      </button>
    </div>
  )
}

export default LightSwitch;