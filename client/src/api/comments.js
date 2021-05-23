import axios from 'axios'

const commentsInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API}/comments`
})

export const getComments = (commentId) =>
  commentsInstance.request({
    method: 'GET',
    url: `/${commentId}`
  })

export const addComments = (comments, token) =>
  commentsInstance.request({
    method: 'POST',
    data: comments,
    headers: { accesstoken: token }
  })

export const deleteComments = (commentId, token) =>
  commentsInstance.request({
    method: 'DELETE',
    url: `/${commentId}`,
    headers: { accesstoken: token }
  })
