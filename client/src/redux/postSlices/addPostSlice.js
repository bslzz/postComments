import { createSlice } from '@reduxjs/toolkit'

const addPostSlice = createSlice({
  name: 'addPosts',
  initialState: {
    addedPosts: [],
    loading: false,
    error: null
  },
  reducers: {
    addPostsRequest(state) {
      state.loading = true
    },
    addPostsSuccess(state, action) {
      state.loading = false
      state.addedPosts = action.payload
    },
    addPostsFailed(state, action) {
      state.loading = true
      state.error = action.payload
    }
  }
})

export const { addPostsRequest, addPostsSuccess, addPostsFailed } =
  addPostSlice.actions
export default addPostSlice.reducer
