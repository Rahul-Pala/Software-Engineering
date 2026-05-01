import { Children, Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserInfo from './Components/UserInfo'
import Welcome from './Components/Welcome'
import PropsDisplayer from './Components/PropsDisplayer'
import WelcomeTwo from './Components/WelcomeTwo'
import City from './Components/City'


function App() {
  
const jsxcode = <p>My second paragraph</p>
const idname = 'paragraph'

function handleButtonClick() {
  //To Do
}

const spiderman = { name: 'Spiderman', alterEgo: 'Peter Parker', catchPhrase: 'With great power comes great responsibility' }

const spideyJSX = (<div>
<h3>{spiderman.name}</h3>
<blockquote>{spiderman.catchPhrase}</blockquote><cite>{spiderman.alterEgo}</cite>
</div>);

const divStyle = { background: 'lightblue', padding: '1em', fontWeight: 'bold' };

  return (
<>
 <div>
  <h3 style={{color: 'blue', textTransform: 'uppercase'}}>Welcome!</h3> {/* style object directly in JSX */}
    <br></br>

<div style={divStyle}>This is a styled div.</div> {/* style object as a variable - neater and re-usable */}

    <h1>My first React App</h1> 
    <h2>Hello Rahul</h2>
    <p id ='p1'> Paragraph in the react application</p>
    {jsxcode}
    <p id = {idname}>New paragraph
      <button onClick={handleButtonClick}>ClickMe</button>
    </p>
    {spideyJSX}
    <UserInfo firstName='Superman' lastName='Batman'>
<p>Paragraph sent to UserInfo</p>
<h2>Heading 2 sent to UserInfo</h2>

    </UserInfo>

   <Welcome name = 'Rahul, the Genius'>
    <>This is a welcome message for you</>
    
    </Welcome>
 </div>

 <div>
  <WelcomeTwo name="Rahul" age={36}></WelcomeTwo>

 </div>

 <City name="Rahul" state="VIC" country = "Australia">
<p>This is child content. Rahul lives in Australia</p>
 </City>

</>
 )
}

export default App


