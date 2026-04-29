import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
const jsxcode = <p>My second paragraph</p>
const idname = 'paragraph'

function handleButtonClick() {
  //To Do
}
  return (
 <div>
    <h1>My first React App</h1> 
    <h2>Hello Rahul</h2>
    <p id ='p1'> Paragraph in the react application</p>
    {jsxcode}
    <p id = {idname}>New paragraph
      <button onClick={handleButtonClick}>ClickMe</button>
    </p>
 </div>
  )
}

export default App


