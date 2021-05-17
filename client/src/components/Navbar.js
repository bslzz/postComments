import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to='/'>Dashboard</Link>
      <Link to='/createpost'>CreatePost</Link>
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link>
    </div>
  )
}

export default Navbar
