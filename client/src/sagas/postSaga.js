import { call, put, takeEvery, takeLeading } from '@redux-saga/core/effects'
import {
  getAllPostsRequest,
  getAllPostsSuccess,
  getAllPostsFailed,
  addPostsRequest,
  addPostsSuccess,
  addPostsFailed
} from '../redux/slices/postSlice'
import axios from 'axios'

function* addNewPostsSaga(action) {
  try {
    const response = yield call(
      axios.post,
      'http://localhost:5000/posts',
      action.payload
    )
    yield put(addPostsSuccess(response.data))
  } catch (error) {
    if (error.response.data.msg) {
      yield put(addPostsFailed(error.response.data.msg))
    } else {
      yield put(addPostsFailed(error.message))
    }
  }
}

function* getAllPostsSaga() {
  try {
    const response = yield call(axios.get, 'http://localhost:5000/posts')
    yield put(getAllPostsSuccess(response.data))
  } catch (error) {
    yield put(getAllPostsFailed(error.message))
  }
}

export function* watchAddNewPostsSaga() {
  yield takeLeading(addPostsRequest.type, addNewPostsSaga)
}

export function* watchGetAllPostsSaga() {
  yield takeEvery(getAllPostsRequest.type, getAllPostsSaga)
}
