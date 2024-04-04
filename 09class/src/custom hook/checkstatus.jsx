import React from 'react'
import { Onlineorofline } from './Onlineorofline'

function Checkstatus() {
    const isonline = Onlineorofline()

    function printer(){
        console.log("the user is working")
    }
  return (
    <div>
        <h1>{isonline ? 'online':' disconnect'}</h1>
      <button disabled ={!isonline} onClick={printer}>{isonline ? 'save':'check internet...'}</button>
    </div>
  )
}

export default Checkstatus
