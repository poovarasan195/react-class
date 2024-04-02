import { useState , useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setlength] = useState(8)
  const [number, setnumber] = useState(false)
  const [specal, setspecal] = useState(false)
  const [password, setpassword] = useState('')

  const passwordref = useRef(null)

  const copybord = ()=>{
    window.navigator.clipboard.writeText(password);
    passwordref.current?.select();
  }

    const genaratore = useCallback(()=>{
             let pass = "";
             let sri = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            
             if(number)  sri += '01234567890';
             if(specal)  sri += '*&^%$#@?';
              
             for (let i=1; i<length; i++){
               let char = Math.floor(Math.random() * sri.length)
               pass += sri.charAt(char)
             }
           
             setpassword(pass)
    },[length,specal,number])

    useEffect(()=>{
      genaratore ();
    },[length,number,specal]) // the depandeny array will entha value change pananu mo athu irukanu 

  return (
    
    <div className='flex  justify-center '>
  <div className='bg-slate-700 w-full max-w-md text-orange-400 shadow-md rounded-lg px-4 py-3'>
    <h1 className='text-white my-3 text-center'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input
        type="text"
        value={password}
        readOnly
        className='outline-none w-full h-10 bg-white text-black rounded-lg px-3 py-1'
        placeholder='Password'
        ref={passwordref}
      />
      <button className='outline-none shadow-lg bg-blue-500 rounded-lg px-3 py-0.5' onClick={copybord}>Copy</button>
    </div>
    <div className='flex text-sm gap-x-3'>
         <div className='flex items-center gap-x-1'>
              <input type="range"
                value={length}
                min={8}
                max={25}   
                className='cursor-pointer'
                onChange={(e)=>setlength(e.target.value)}           
                id="" />
                <label htmlFor="length">length : {length}</label>
                
                <input type="checkbox" 
                       defaultChecked ={number}
                       onChange={()=>{
                         setnumber((pass)=> !pass)
                       }}
                 />
                 <label htmlFor="numberallow">numberallow</label>

                <input type="checkbox" 
                       defaultChecked ={specal}
                       onChange={()=>{
                        setspecal((pass)=> !pass)
                       }}
                 />
                 <label htmlFor="character">character</label>
         </div>
    </div>
  </div>
</div>

  )
}

export default App
