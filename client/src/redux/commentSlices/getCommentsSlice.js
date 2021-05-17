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
      return {
        ...state,
        loading: true,
        comments: [],
        error: null
      }
    },
    getCommentsSuccess(state, action) {
      console.log('getCommentsSuccess', action)
      return {
        ...state,
        loading: false,
        comments: action.payload,
        error: null
      }
    },
    getCommentsFailed(state, action) {
      return {
        ...state,
        loading: false,
        comments: [],
        error: action.payload
      }
    }
  }
})

export const { getCommentsRequest, getCommentsSuccess, getCommentsFailed } =
  getCommentsSlice.actions
export default getCommentsSlice.reducer
