import { createSlice } from '@reduxjs/toolkit'

const registerSlice = createSlice({
  name: 'registerUsers',
  initialState: {
    users: [],
    loading: false,
    error: null
  },
  reducers: {
    registerUserRequest(state) {
      state.loading = true
      state.error = null
    },

    registerUserSuccess(state, action) {
      state.loading = false
      state.users = action.payload
    },
    registerUserFailed(state, action) {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const { registerUserRequest, registerUserSuccess, registerUserFailed } =
  registerSlice.actions
export default registerSlice.reducer
