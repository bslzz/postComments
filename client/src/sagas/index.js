import { all } from 'redux-saga/effects'
import { watchcreateNewPostsSaga, watchGetAllPostsSaga } from './postSaga'

export default function* rootSaga() {
  yield all([watchcreateNewPostsSaga(), watchGetAllPostsSaga()])
}
