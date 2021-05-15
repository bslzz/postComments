import { call, put, takeEvery } from '@redux-saga/core/effects'
import {
  getAllPostsRequest,
  getAllPostsSuccess,
  getAllPostsError,
  createPostRequest,
  createPostSuccess,
  createPostError
} from '../redux/slices/postSlice'
import axios from 'axios'
import { fetchAllPosts } from '../utils/api'

function* createNewPostsSaga(action) {
  try {
    yield call(axios.post, 'http://localhost:5000/posts', action.payload)
    yield put(createPostSuccess())
  } catch (error) {
    yield put(createPostError(error.response.data.msg))
  }
}

function* getAllPostsSaga() {
  try {
    const response = yield call(fetchAllPosts)
    yield put(getAllPostsSuccess(response))
  } catch (error) {
    yield put(getAllPostsError(error.response.data.msg))
  }
}

export function* watchcreateNewPostsSaga() {
  yield takeEvery(createPostRequest.type, createNewPostsSaga)
}

export function* watchGetAllPostsSaga() {
  yield takeEvery(getAllPostsRequest.type, getAllPostsSaga)
}
