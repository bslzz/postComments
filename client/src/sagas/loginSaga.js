import { call, put, takeEvery } from '@redux-saga/core/effects'

import axios from 'axios'
import history from '../history'
import {
  loginUserFailed,
  loginUserRequest,
  loginUserSuccess
} from '../redux/authSlices/loginSlices'

function* loginUsersSaga(action) {
  try {
    const response = yield call(
      axios.post,
      'http://localhost:5000/users/login',
      action.payload
    )
    yield put(loginUserSuccess(response.data))

    history.push('/')
  } catch (error) {
    if (error.response.data.msg) {
      yield put(loginUserFailed(error.response.data.msg))
    } else {
      yield put(loginUserFailed(error.message))
    }
  }
}

export function* watchloginUsersSaga() {
  yield takeEvery(loginUserRequest.type, loginUsersSaga)
}
