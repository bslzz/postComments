import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
  name: 'loginUsers',
  initialState: {
    users: [],
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
      state.users = action.payload
    },
    loginUserFailed(state, action) {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const { loginUserRequest, loginUserSuccess, loginUserFailed } =
  loginSlice.actions
export default loginSlice.reducer
