import { call, put, takeEvery } from '@redux-saga/core/effects'
import {
  getAllPostsRequest,
  getAllPostsSuccess,
  getAllPostsError
} from '../redux/slices/postSlice'
// import axios from 'axios'
import { fetchAllPosts } from '../utils/api'

// function* createNewPostsSaga(action) {
//   try {
//     function* requestCreatePost() {
//       return yield axios.post('http://localhost:5000/posts')
//     }
//     const data = yield call(requestCreatePost, action.payload)
//     console.log('data', data)
//     yield put(createPostSuccess(data.result))
//   } catch (error) {
//     console.warn(error)
//   }
// }

function* getAllPostsSaga() {
  try {
    const response = yield call(fetchAllPosts)
    yield put(getAllPostsSuccess(response))
  } catch (error) {
    console.log(error)
    yield put(getAllPostsError(error.response.data.msg))
  }
}

// export function* watchcreateNewPostsSaga() {
//   yield takeEvery(createPostRequest.type, createNewPostsSaga)
// }

export function* watchGetAllPostsSaga() {
  yield takeEvery(getAllPostsRequest.type, getAllPostsSaga)
}
