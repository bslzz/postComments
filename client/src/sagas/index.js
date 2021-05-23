import { all } from 'redux-saga/effects'
import {
  watchAddCommentsSaga,
  watchDeleteCommentsSaga,
  watchGetCommentsSaga
} from './commentSaga'
import { watchloginUsersSaga, watchlogOutSaga } from './loginSaga'
import {
  watchAddNewPostsSaga,
  watchGetAllPostsSaga,
  watchGetPostByIdSaga
} from './postSaga'
import { watchregisterUsersSaga } from './registerSaga'

export default function* rootSaga() {
  yield all([
    watchAddNewPostsSaga(),
    watchGetAllPostsSaga(),
    watchGetPostByIdSaga(),
    watchGetCommentsSaga(),
    watchAddCommentsSaga(),
    watchregisterUsersSaga(),
    watchloginUsersSaga(),
    watchlogOutSaga(),
    watchDeleteCommentsSaga()
  ])
}
