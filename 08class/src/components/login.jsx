import React, { useState, useContext } from 'react';
import Usercontext from './usecontext/usercontext';

function Login() {
  const [password, setpassword] = useState(' ')
  const [username, setusername] = useState(' ')
    
  const {setuser} =useContext(Usercontext)

  const handelclick = ()=>{

    setuser({ username, password });
  }

  return (
    <div className='flex justify-center gap-3
    '>
     <input type="text"
       value={username}
       onChange={(e) => setusername(e.target.value)}
       placeholder='username...'
       className='bg-gray-600 text-pink-800 mt-5'
     />{" "}
     <input type="password"
       value={password}
       onChange={(e) => setpassword(e.target.value)}
       placeholder='password...'
       className='bg-gray-600 text-pink-800 mt-5'
     />
     <button onClick={handelclick} className='mt-5'>submit</button>
    </div>
  )
}

export default Login
