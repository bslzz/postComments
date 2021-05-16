import { all } from 'redux-saga/effects'
import { watchAddNewPostsSaga, watchGetAllPostsSaga } from './postSaga'

export default function* rootSaga() {
  yield all([watchAddNewPostsSaga(), watchGetAllPostsSaga()])
}
