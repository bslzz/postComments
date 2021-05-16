import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPostByIdRequest } from '../redux/slices/getPostSlice'

const PostComponent = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const post = useSelector((state) => state.getPost.post)

  useEffect(() => {
    dispatch(getPostByIdRequest(id))
  }, [])
  return (
    <div>
      <h1>{post.title}</h1>
      <div
        style={{
          border: '2px solid #666',
          maxWidth: '450px',
          marginBottom: '10px',
          padding: '10px',
          cursor: 'pointer'
        }}
      >
        <h3>Username: {post.username}</h3>
        <h4>Title: {post.title}</h4>
        <h5>Message: {post.postText}</h5>
      </div>
    </div>
  )
}

export default PostComponent
