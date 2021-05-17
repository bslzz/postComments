import { all } from 'redux-saga/effects'
import { watchAddCommentsSaga, watchGetCommentsSaga } from './commentSaga'
import {
  watchAddNewPostsSaga,
  watchGetAllPostsSaga,
  watchGetPostByIdSaga
} from './postSaga'

export default function* rootSaga() {
  yield all([
    watchAddNewPostsSaga(),
    watchGetAllPostsSaga(),
    watchGetPostByIdSaga(),
    watchGetCommentsSaga(),
    watchAddCommentsSaga()
  ])
}
