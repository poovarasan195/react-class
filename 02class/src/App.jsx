import { useState } from 'react';
import './App.css'

function App() {
    const [counter, setcounter] = useState(10)
  
  const addvalue = ()=>{
    // setcounter (counter + 1); it will increase 1 value u exesiste the line multiple time the out put will same
    setcounter ((count)=>count+1) // but this line exesiste the multiple time the state change an simelar modificatin and also it is an callback function
    setcounter ((count)=>count+1)
    setcounter ((count)=>count+1)
      
  }
  const lessvalue = ()=>{
    // setcounter (counter - 1);
    setcounter ((count)=>count-1)
    setcounter ((count)=>count-1)
    setcounter ((count)=>count-1)
}

  return (
    <>
      <h1>the react course with poovarasan</h1>
      <h2>counter value :{counter}</h2>
     <button onClick={addvalue}>add value</button>
     <button onClick={lessvalue}>less value</button>
     <p>
      footer:
      </p>      
    </>
  )
}

export default App
