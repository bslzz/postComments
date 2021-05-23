import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
  name: 'loginUsers',
  initialState: {
    token: '',
    loading: false,
    error: null,
    auth: false,
    user: null
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

    validateUsersSuccess(state, action) {
      state.loading = false
      const username = action.payload

      username !== ' ' || username !== 'undefined'
        ? (state.auth = true)
        : (state.auth = false)
      state.user = username
    },
    validateUsersFailed(state, action) {
      console.log(action.payload)
      state.loading = false
      state.error = action.payload
    },
    logOutRequest(state) {
      state.loading = true
    },
    logOutSuccess(state) {
      state.loading = false
      state.token = []
      state.error = null
      state.auth = false
    },
    logOutFailed(state, action) {
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
  validateUsersFailed,
  logOutRequest,
  logOutSuccess,
  logOutFailed
} = loginSlice.actions
export default loginSlice.reducer
