import React, { useReducer } from 'react'

  function usered (state , action){
    switch (action.type) {
        case 'increment':  
        return {count : state.count +1}; 
    case 'decrement':
        return {count : state.count - 1}  
        default:
            return  "error";
            
    }
  }



function Usereduce() {
 const [state , dispatch]  = useReducer( usered , {count : 0})

  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>{dispatch({type :"increment"})}}>inc</button> {" "}
        <button onClick={()=>{dispatch({type :"decrement"})}}>decc</button>
    </div>
  )
}

export default Usereduce
