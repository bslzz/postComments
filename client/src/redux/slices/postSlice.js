import { createSlice } from '@reduxjs/toolkit'

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    error: null
  },
  reducers: {
    getAllPostsRequest(state) {
      return {
        ...state,
        loading: true,
        posts: [],
        error: null
      }
    },
    getAllPostsSuccess(state, action) {
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: null
      }
    },

    getAllPostsFailed(state, action) {
      return {
        ...state,
        loading: false,
        posts: [],
        error: action.payload
      }
    },
    addPostsRequest(state) {
      return {
        ...state,
        loading: true,
        error: null
      }
    },
    addPostsSuccess(state, action) {
      const postData = action.payload
      return {
        ...state,
        loading: false,
        ...postData,
        error: null
      }
    },
    addPostsFailed(state, action) {
      return {
        ...state,
        loading: false,
        posts: [],
        error: action.payload
      }
    }
  }
})

export const {
  getAllPostsRequest,
  getAllPostsSuccess,
  getAllPostsFailed,
  addPostsRequest,
  addPostsSuccess,
  addPostsFailed
} = postSlice.actions
export default postSlice.reducer
