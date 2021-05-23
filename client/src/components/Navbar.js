import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { isAuthorized } from '../utils/auth'

const Navbar = () => {
  const [authState, setAuthState] = useState(false)

  useEffect(() => {
    if (isAuthorized()) {
      setAuthState(true)
    } else {
      setAuthState(false)
    }
  }, [])

  return (
    <div>
      <Link to='/'>Dashboard</Link>
      <Link to='/createpost'>CreatePost</Link>

      {!authState ? (
        <>
          <Link to='/register'>Register</Link>
          <Link to='/login'>Login</Link>
        </>
      ) : (
        <Link to='/logout'>Logout</Link>
      )}
    </div>
  )
}

export default Navbar
