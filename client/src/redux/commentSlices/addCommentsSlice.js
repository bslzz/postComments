import { createSlice } from '@reduxjs/toolkit'

const addCommentsSlice = createSlice({
  name: 'addComments',
  initialState: {
    addedComments: [],
    loading: false,
    error: null
  },
  reducers: {
    addCommentsRequest(state) {
      state.loading = true
    },
    addCommentsSuccess(state, action) {
      state.loading = false
      state.addedComments = action.payload
      state.error = null
    },
    addCommentsFailed(state, action) {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const { addCommentsRequest, addCommentsSuccess, addCommentsFailed } =
  addCommentsSlice.actions
export default addCommentsSlice.reducer
