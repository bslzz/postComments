import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getAllPostsRequest } from '../redux/slices/allPostsSlice'

const DashboardComponent = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllPostsRequest())
  }, [dispatch])

  const posts = useSelector((state) => state.allPosts.allPosts)
  console.log(posts)
  return (
    <div>
      <h1>Posts</h1>

      {posts.map((post, i) => {
        return (
          <div
            style={{
              border: '2px solid #666',
              maxWidth: '450px',
              marginBottom: '10px',
              padding: '10px',
              cursor: 'pointer'
            }}
            key={i}
            onClick={() => history.push(`/post/${post.id}`)}
          >
            <h3>Username: {post.username}</h3>
            <h4>Title: {post.title}</h4>
            <h5>Message: {post.postText}</h5>
          </div>
        )
      })}
    </div>
  )
}

export default DashboardComponent
