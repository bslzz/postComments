import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
  name: 'loginUsers',
  initialState: {
    token: [],
    loading: false,
    error: null
  },
  reducers: {
    loginUserRequest(state) {
      state.loading = true
      state.error = null
    },

    loginUserSuccess(state, action) {
      state.loading = false
      state.token = action.payload
    },
    loginUserFailed(state, action) {
      state.loading = false
      state.error = action.payload
    },
    validateUsersRequest(state) {
      state.loading = true
    },
    validateUsersSuccess(state, action) {
      console.log(action)
      state.loading = false
    },
    validateUsersFailed(state, action) {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const {
  loginUserRequest,
  loginUserSuccess,
  loginUserFailed,
  validateUsersRequest,
  validateUsersSuccess,
  validateUsersFailed
} = loginSlice.actions
export default loginSlice.reducer
