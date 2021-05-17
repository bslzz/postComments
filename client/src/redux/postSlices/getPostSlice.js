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
      return {
        ...state,
        loading: true,
        post: [],
        error: null
      }
    },
    getPostByIdSuccess(state, action) {
      return {
        ...state,
        loading: false,
        post: action.payload,
        error: null
      }
    },
    getPostByIdFailed(state, action) {
      return {
        ...state,
        loading: false,
        post: [],
        error: action.payload
      }
    }
  }
})

export const { getPostByIdRequest, getPostByIdSuccess, getPostByIdFailed } =
  getPostSlice.actions
export default getPostSlice.reducer
