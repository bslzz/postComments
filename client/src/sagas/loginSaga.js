import { call, put, takeEvery } from '@redux-saga/core/effects'
import { login } from '../api/users'
import history from '../history'
import {
  loginUserFailed,
  loginUserRequest,
  loginUserSuccess
} from '../redux/authSlices/loginSlices'

function* loginUsersSaga(action) {
  try {
    const response = yield call(login, action.payload)
    response.data && localStorage.setItem('accessToken', response.data)
    yield put(loginUserSuccess(response.data))
    history.push('/')
  } catch (error) {
    if (error.response.data.errMsg) {
      yield put(loginUserFailed(error.response.data.errMsg))
    } else {
      yield put(loginUserFailed(error.message))
    }
  }
}

export function* watchloginUsersSaga() {
  yield takeEvery(loginUserRequest.type, loginUsersSaga)
}
