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
    },
    deleteCommentsRequest(state) {
      state.loading = true
    },
    deleteCommentsSuccess(state, action) {
      const id = action.payload
      state.loading = false
      state.error = null
      state.comments = state.comments.filter((value) => {
        return value.id != id
      })
    },

    deleteCommentsFailed(state, action) {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const {
  getCommentsRequest,
  getCommentsSuccess,
  getCommentsFailed,
  deleteCommentsRequest,
  deleteCommentsSuccess,
  deleteCommentsFailed
} = getCommentsSlice.actions
export default getCommentsSlice.reducer
