import { createSlice } from '@reduxjs/toolkit'

const getPostSlice = createSlice({
  name: 'getPost',
  initialState: {
    post: [],
    loading: false,
    error: null
  },
  reducers: {
    getPostByIdRequest(state) {
      state.loading = true
    },
    getPostByIdSuccess(state, action) {
      state.loading = false
      state.post = action.payload
    },
    getPostByIdFailed(state, action) {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const { getPostByIdRequest, getPostByIdSuccess, getPostByIdFailed } =
  getPostSlice.actions
export default getPostSlice.reducer
