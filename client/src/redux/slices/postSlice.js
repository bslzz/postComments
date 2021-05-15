import { createSlice } from '@reduxjs/toolkit'

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    error: ''
  },
  reducers: {
    getAllPostsRequest(state) {
      state.loading = true
    },
    getAllPostsSuccess(state, action) {
      ;(state.loading = false), (state.posts = action.payload)
    },

    getAllPostsError(state, action) {
      state.error = action.payload
    },
    createPostRequest(state) {
      state.loading = true
    },
    createPostSuccess(state, action) {
      state.posts = action.payload
    },
    createPostError(state, action) {
      state.error = action.payload
    }
  }
})

export const {
  getAllPostsRequest,
  getAllPostsSuccess,
  getAllPostsError,
  createPostRequest,
  createPostSuccess,
  createPostError
} = postSlice.actions
export default postSlice.reducer
