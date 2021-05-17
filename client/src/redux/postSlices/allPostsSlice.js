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
      state.loading = true
    },
    getAllPostsSuccess(state, action) {
      state.loading = false
      state.allPosts = action.payload
    },

    getAllPostsFailed(state, action) {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const { getAllPostsRequest, getAllPostsSuccess, getAllPostsFailed } =
  getAllPostsSlice.actions
export default getAllPostsSlice.reducer
