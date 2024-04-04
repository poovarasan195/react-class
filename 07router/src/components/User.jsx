import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {username} = useParams()
  return (
    <div>
      THE USER WILL NOT USER {username}
    </div>
  )
}

export default User
