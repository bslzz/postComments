import { call, put, takeEvery } from '@redux-saga/core/effects'
import { addComments, deleteComments, getComments } from '../api/comments'
import {
  addCommentsFailed,
  addCommentsRequest,
  addCommentsSuccess
} from '../redux/commentSlices/addCommentsSlice'
import {
  deleteCommentsFailed,
  deleteCommentsRequest,
  deleteCommentsSuccess,
  getCommentsFailed,
  getCommentsRequest,
  getCommentsSuccess
} from '../redux/commentSlices/getCommentsSlice'

function* getCommentsSaga(action) {
  const id = action.payload

  try {
    const response = yield call(getComments, id)

    yield put(getCommentsSuccess(response.data))
  } catch (error) {
    if (error.response.data.errMsg) {
      yield put(getCommentsFailed(error.response.data.errMsg))
    } else {
      yield put(getCommentsFailed(error.message))
    }
  }
}

function* addCommentsSaga(action) {
  try {
    const response = yield call(
      addComments,
      action.payload,
      localStorage.getItem('accessToken')
    )
    yield put(addCommentsSuccess(response.data))
  } catch (error) {
    if (error.response.data.errMsg) {
      yield put(addCommentsFailed(error.response.data.errMsg))
    } else {
      yield put(addCommentsFailed(error.message))
    }
  }
}
function* deleteCommentsSaga(action) {
  console.log(action)
  try {
    const response = yield call(
      deleteComments,
      action.payload,
      localStorage.getItem('accessToken')
    )
    console.log(response)
    yield put(deleteCommentsSuccess(action.payload))
  } catch (error) {
    yield put(deleteCommentsFailed(error.message))
  }
}
export function* watchGetCommentsSaga() {
  yield takeEvery(getCommentsRequest.type, getCommentsSaga)
}
export function* watchAddCommentsSaga() {
  yield takeEvery(addCommentsRequest.type, addCommentsSaga)
}
export function* watchDeleteCommentsSaga() {
  yield takeEvery(deleteCommentsRequest.type, deleteCommentsSaga)
}
