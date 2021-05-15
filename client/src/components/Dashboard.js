import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPostsRequest } from '../redux/slices/postSlice'

const DashboardComponent = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllPostsRequest())
  }, [dispatch])

  const posts = useSelector((state) => state.posts.posts)
  return (
    <div>
      <h1>Posts</h1>
      <hr />
      {posts.map((post, i) => {
        return (
          <div key={i}>
            <h3>Username: {post.username}</h3>
            <h4>Title: {post.title}</h4>
            <h5>Message: {post.postText}</h5>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default DashboardComponent
