import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUserRequest } from '../../redux/authSlices/loginSlices'

const LoginComponent = () => {
  const [users, setUsers] = useState({
    username: '',
    password: ''
  })
  const { username, password } = users

  const dispatch = useDispatch()

  const loginHandler = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value })
  }

  const submitForm = (e) => {
    e.preventDefault()
    dispatch(loginUserRequest(users))
  }
  return (
    <form onSubmit={submitForm}>
      <div>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          name='username'
          value={username}
          onChange={loginHandler}
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          value={password}
          onChange={loginHandler}
        />
      </div>
      <div>
        <button type='submit'>Sign in</button>
      </div>
    </form>
  )
}

export default LoginComponent
