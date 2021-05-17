import { call, put, takeEvery } from '@redux-saga/core/effects'

import axios from 'axios'
import {
  addCommentsFailed,
  addCommentsRequest,
  addCommentsSuccess
} from '../redux/commentSlices/addCommentsSlice'
import {
  getCommentsFailed,
  getCommentsRequest,
  getCommentsSuccess
} from '../redux/commentSlices/getCommentsSlice'

function* getCommentsSaga(action) {
  const id = action.payload

  try {
    const response = yield call(
      axios.get,
      `http://localhost:5000/comments/${id}`
    )
    yield put(getCommentsSuccess(response.data))
  } catch (error) {
    yield put(getCommentsFailed(error.message))
  }
}

function* addCommentsSaga(action) {
  try {
    const response = yield call(
      axios.post,
      'http://localhost:5000/comments',
      action.payload
    )
    yield put(addCommentsSuccess(response.data))
  } catch (error) {
    yield put(addCommentsFailed(error.message))
  }
}

export function* watchGetCommentsSaga() {
  yield takeEvery(getCommentsRequest.type, getCommentsSaga)
}
export function* watchAddCommentsSaga() {
  yield takeEvery(addCommentsRequest.type, addCommentsSaga)
}
