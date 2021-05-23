import { call, put, takeEvery } from '@redux-saga/core/effects'
import { register } from '../api/users'
import history from '../history'
import {
  registerUserFailed,
  registerUserRequest,
  registerUserSuccess
} from '../redux/authSlices/registerSlice'

function* registerUsersSaga(action) {
  try {
    const response = yield call(register, action.payload)
    yield put(registerUserSuccess(response.data))
    history.push('/login')
  } catch (error) {
    if (error.response.data.errMsg) {
      yield put(registerUserFailed(error.response.data.errMsg))
    } else {
      if (error.response.data.errMsg) {
        yield put(registerUserFailed(error.response.data.errMsg))
      } else {
        yield put(registerUserFailed(error.message))
      }
    }
  }
}

export function* watchregisterUsersSaga() {
  yield takeEvery(registerUserRequest.type, registerUsersSaga)
}
