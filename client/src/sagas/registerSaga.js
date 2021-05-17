import { call, put, takeEvery } from '@redux-saga/core/effects'

import axios from 'axios'
import history from '../history'
import {
  registerUserFailed,
  registerUserRequest,
  registerUserSuccess
} from '../redux/authSlices/registerSlice'

function* registerUsersSaga(action) {
  try {
    const response = yield call(
      axios.post,
      'http://localhost:5000/users/register',
      action.payload
    )
    yield put(registerUserSuccess(response.data))

    history.push('/login')
  } catch (error) {
    if (error.response.data.msg) {
      yield put(registerUserFailed(error.response.data.msg))
    } else {
      yield put(registerUserFailed(error.message))
    }
  }
}

export function* watchregisterUsersSaga() {
  yield takeEvery(registerUserRequest.type, registerUsersSaga)
}
