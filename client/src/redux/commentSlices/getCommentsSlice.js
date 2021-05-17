import { createSlice } from '@reduxjs/toolkit'

const getCommentsSlice = createSlice({
  name: 'getComments',
  initialState: {
    comments: [],
    loading: false,
    error: null
  },
  reducers: {
    getCommentsRequest(state) {
      state.loading = true
    },
    getCommentsSuccess(state, action) {
      console.log('getCommentsSuccess', action)
      state.loading = false
      state.comments = action.payload
      state.error = null
    },

    getCommentsFailed(state, action) {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const { getCommentsRequest, getCommentsSuccess, getCommentsFailed } =
  getCommentsSlice.actions
export default getCommentsSlice.reducer
