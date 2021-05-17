import { createSlice } from '@reduxjs/toolkit'

const getAllPostsSlice = createSlice({
  name: 'allPosts',
  initialState: {
    allPosts: [],
    loading: false,
    error: null
  },
  reducers: {
    getAllPostsRequest(state) {
      return {
        ...state,
        loading: true,
        allPosts: [],
        error: null
      }
    },
    getAllPostsSuccess(state, action) {
      return {
        ...state,
        loading: false,
        allPosts: action.payload,
        error: null
      }
    },

    getAllPostsFailed(state, action) {
      return {
        ...state,
        loading: false,
        allPosts: [],
        error: action.payload
      }
    }
  }
})

export const { getAllPostsRequest, getAllPostsSuccess, getAllPostsFailed } =
  getAllPostsSlice.actions
export default getAllPostsSlice.reducer
