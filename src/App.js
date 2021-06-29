import React from 'react'
import { Tap } from './Tap.js'

export const App = () => {

  let inConsole = () => {
    console.log('This is first button')
  }
  let inAlert = () => {
    alert('This is second button')
  }
  let inConsoleWithArg = (element) => {
    console.log(element)
  }


  return (
    <div className="wrap">
      <Tap label="Console button" onClick={inConsole}/>
      <Tap label="Alert button" onClick={inAlert}/>
      <Tap label ="Label to console" onClick={() => inConsoleWithArg('This is third button')}/>
    </div>
    
  )
}


