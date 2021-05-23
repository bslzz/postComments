import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { logOutRequest } from '../redux/authSlices/loginSlices'
import { isAuthorized } from '../utils/auth'
import { useDispatch } from 'react-redux'

const Navbar = () => {
  const [authState, setAuthState] = useState(false)

  const dispatch = useDispatch()

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
        <Link onClick={() => dispatch(logOutRequest())} to='/logout'>
          Logout
        </Link>
      )}
    </div>
  )
}

export default Navbar
