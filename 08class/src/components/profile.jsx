import React from 'react'
import { useContext } from 'react'
import Usercontext from './usecontext/usercontext'

function Profile() {
    const {user} = useContext(Usercontext)

    if(!user) return <h1>don not select</h1>
  return (
    <div>
       <h1>the username : {user.username}</h1>
       <h2>the password : {user.password}</h2>
       <p>this is the coman facter</p>
    </div>
  )
}

export default Profile
