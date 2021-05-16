import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPostsRequest } from '../redux/slices/postSlice'

const CreatePostsComponent = () => {
  const [post, setPost] = useState({
    title: '',
    postText: '',
    username: ''
  })
  const { title, postText, username } = post

  const dispatch = useDispatch()

  const postHandler = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  const submitPost = (e) => {
    e.preventDefault()
    dispatch(addPostsRequest(post))
  }

  console.log('post', post)
  return (
    <div>
      <form onSubmit={submitPost}>
        <div>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            name='username'
            value={username}
            onChange={postHandler}
          />
        </div>
        <div>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            value={title}
            onChange={postHandler}
          />
        </div>
        <div>
          <label htmlFor='postText'>Message</label>
          <textarea
            type='text'
            name='postText'
            value={postText}
            onChange={postHandler}
          />
        </div>
        <div>
          <button type='submit'>Save</button>
        </div>
      </form>
    </div>
  )
}

export default CreatePostsComponent
