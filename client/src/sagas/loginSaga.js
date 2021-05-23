import { call, put, takeEvery } from '@redux-saga/core/effects'
import { login, validateUsers } from '../api/users'
import history from '../history'
import {
  loginUserFailed,
  loginUserRequest,
  loginUserSuccess,
  logOutFailed,
  logOutRequest,
  logOutSuccess,
  validateUsersFailed,
  validateUsersSuccess
} from '../redux/authSlices/loginSlices'

function* loginUsersSaga(action) {
  try {
    const response = yield call(login, action.payload)
    response.data && localStorage.setItem('accessToken', response.data)
    yield put(loginUserSuccess(response.data))

    const res = yield call(validateUsers, response.data)
    if (res.data) {
      yield put(validateUsersSuccess(res.data.username))
    } else {
      yield put(validateUsersFailed(res.data.errMsg))
    }

    history.push('/')
  } catch (error) {
    if (error.response.data.errMsg) {
      yield put(loginUserFailed(error.response.data.errMsg))
    } else {
      yield put(loginUserFailed(error.message))
    }
  }
}
function* logOutSaga() {
  try {
    localStorage.removeItem('accessToken')
    yield put(logOutSuccess())
    history.push('/')
  } catch (error) {
    yield put(logOutFailed(error.message))
  }
}
export function* watchloginUsersSaga() {
  yield takeEvery(loginUserRequest.type, loginUsersSaga)
}
export function* watchlogOutSaga() {
  yield takeEvery(logOutRequest.type, logOutSaga)
}
