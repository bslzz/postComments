import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [authState, setAuthState] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      setAuthState(true)
    }
  }, [])

  return (
    <div>
      {!authState && (
        <>
          <Link to='/register'>Register</Link>
          <Link to='/login'>Login</Link>
        </>
      )}
      <Link to='/'>Dashboard</Link>
      <Link to='/createpost'>CreatePost</Link>
    </div>
  )
}

export default Navbar
