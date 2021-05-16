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
        addedPosts: [],
        error: action.payload
      }
    }
  }
})

export const { addPostsRequest, addPostsSuccess, addPostsFailed } =
  addPostSlice.actions
export default addPostSlice.reducer
