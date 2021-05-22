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
      axios.post,
      'http://localhost:5000/comments',
      action.payload,
      {
        headers: {
          accessToken: sessionStorage.getItem('accessToken')
        }
      }
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

export function* watchGetCommentsSaga() {
  yield takeEvery(getCommentsRequest.type, getCommentsSaga)
}
export function* watchAddCommentsSaga() {
  yield takeEvery(addCommentsRequest.type, addCommentsSaga)
}
