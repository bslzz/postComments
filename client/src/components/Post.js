import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPostByIdRequest } from '../redux/postSlices/getPostSlice'
import {
  deleteCommentsRequest,
  getCommentsRequest
} from '../redux/commentSlices/getCommentsSlice'
import { addCommentsRequest } from '../redux/commentSlices/addCommentsSlice'

const PostComponent = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const post = useSelector((state) => state.getPost.post)
  const comments = useSelector((state) => state.getComments.comments)
  const user = useSelector((state) => state.loginUser.user)
  console.log(user)

  const [comment, setNewComment] = useState('')

  useEffect(() => {
    dispatch(getPostByIdRequest(id))
  }, [])

  useEffect(() => {
    dispatch(getCommentsRequest(id))
  }, [])

  const submitComment = () => {
    dispatch(addCommentsRequest({ commentBody: comment, PostId: id }))
    setNewComment('')
  }

  return (
    <div style={{ textAlign: '-webkit-center' }}>
      <h1>Post</h1>
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

      <div>
        <textarea
          style={{ width: '450px', height: '60px' }}
          value={comment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <div>
          <button
            style={{ cursor: 'pointer' }}
            type='submit'
            onClick={submitComment}
          >
            Comment
          </button>
        </div>
      </div>
      <h4>Comments</h4>
      {comments.map((comment, i) => {
        return (
          <div key={i}>
            <div
              style={{
                border: '1px solid #666',
                maxWidth: '450px',
                marginBottom: '5px',
                padding: '10px'
              }}
            >
              <b> {comment.username} :</b> {comment.commentBody}
              {user == comment.username ? (
                <button
                  onClick={() => dispatch(deleteCommentsRequest(comment.id))}
                >
                  X
                </button>
              ) : (
                ''
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PostComponent
