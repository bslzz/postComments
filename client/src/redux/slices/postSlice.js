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
      // eslint-disable-next-line
      ;(state.loading = true), (state.posts = []), (state.error = '')
    },
    getAllPostsSuccess(state, action) {
      // eslint-disable-next-line
      ;(state.loading = false),
        (state.posts = action.payload),
        (state.error = '')
    },

    getAllPostsError(state, action) {
      // eslint-disable-next-line
      ;(state.error = action.payload), (state.loading = false)
    },
    createPostRequest(state) {
      // eslint-disable-next-line
      ;(state.loading = true), (state.posts = []), (state.error = '')
    },
    createPostSuccess(state) {
      // eslint-disable-next-line
      ;(state.loading = false), (state.error = '')
    },
    createPostError(state, action) {
      // eslint-disable-next-line
      ;(state.error = action.payload), (state.loading = false)
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
