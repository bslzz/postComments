import { call, put, takeEvery } from '@redux-saga/core/effects'

import axios from 'axios'
import history from '../history'
import {
  addPostsFailed,
  addPostsRequest,
  addPostsSuccess
} from '../redux/postSlices/addPostSlice'
import {
  getAllPostsFailed,
  getAllPostsRequest,
  getAllPostsSuccess
} from '../redux/postSlices/allPostsSlice'
import {
  getPostByIdFailed,
  getPostByIdRequest,
  getPostByIdSuccess
} from '../redux/postSlices/getPostSlice'

function* addNewPostsSaga(action) {
  try {
    const response = yield call(
      axios.post,
      'http://localhost:5000/posts',
      action.payload
    )
    yield put(addPostsSuccess(response.data))

    history.push('/')
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

function* getPostByIdSaga(action) {
  const id = action.payload
  try {
    const response = yield call(axios.get, `http://localhost:5000/posts/${id}`)
    yield put(getPostByIdSuccess(response.data))
  } catch (error) {
    yield put(getPostByIdFailed(error.message))
  }
}

export function* watchAddNewPostsSaga() {
  yield takeEvery(addPostsRequest.type, addNewPostsSaga)
}

export function* watchGetAllPostsSaga() {
  yield takeEvery(getAllPostsRequest.type, getAllPostsSaga)
}

export function* watchGetPostByIdSaga() {
  yield takeEvery(getPostByIdRequest.type, getPostByIdSaga)
}
