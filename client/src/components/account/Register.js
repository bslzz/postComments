import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUserRequest } from '../../redux/authSlices/registerSlice'

const RegisterComponent = () => {
  const [users, setUsers] = useState({
    username: '',
    password: ''
  })
  const { username, password } = users

  const dispatch = useDispatch()

  const registerHandler = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value })
  }

  const submitForm = (e) => {
    e.preventDefault()
    dispatch(registerUserRequest(users))
  }
  return (
    <form onSubmit={submitForm}>
      <div>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          name='username'
          value={username}
          onChange={registerHandler}
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          value={password}
          onChange={registerHandler}
        />
      </div>
      <div>
        <button type='submit'>Sign up</button>
      </div>
    </form>
  )
}

export default RegisterComponent
