import axios from 'axios'

const userInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API}/users`
})

export const login = (user) =>
  userInstance.request({
    method: 'POST',
    data: user,
    url: '/login'
  })

export const register = (user) =>
  userInstance.request({
    method: 'POST',
    data: user,
    url: '/register'
  })

export const validateUsers = (token) =>
  userInstance.request({
    method: 'GET',
    data: token,
    url: '/auth'
  })
