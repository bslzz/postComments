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
      return {
        ...state,
        loading: true,
        addedComments: [],
        error: null
      }
    },
    addCommentsSuccess(state, action) {
      const commentsData = action.payload
      return {
        ...state,
        loading: false,
        addedComments: commentsData,
        error: null
      }
    },
    addCommentsFailed(state, action) {
      return {
        ...state,
        loading: false,
        addedComments: [],
        error: action.payload
      }
    }
  }
})

export const { addCommentsRequest, addCommentsSuccess, addCommentsFailed } =
  addCommentsSlice.actions
export default addCommentsSlice.reducer
