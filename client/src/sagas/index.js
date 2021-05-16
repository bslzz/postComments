import { all } from 'redux-saga/effects'
import {
  watchAddNewPostsSaga,
  watchGetAllPostsSaga,
  watchGetPostByIdSaga
} from './postSaga'

export default function* rootSaga() {
  yield all([
    watchAddNewPostsSaga(),
    watchGetAllPostsSaga(),
    watchGetPostByIdSaga()
  ])
}
