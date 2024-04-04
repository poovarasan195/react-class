import { useState } from 'react'
import Login from './components/login'
import Profile from './components/profile'
import Usercontextprovider from './components/usecontext/usercontextprovider'


function App() {
  return (
   <Usercontextprovider>
    <h1 className='flex justify-center gap-3 text-7xl text-pink-700'>the user contxt api</h1>
     <Login />
     <Profile />
   </Usercontextprovider>
  )
}

export default App
