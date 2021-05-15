import { all } from 'redux-saga/effects'

import { watchGetAllPostsSaga } from './postSaga'

export default function* rootSaga() {
  yield all([watchGetAllPostsSaga()])
}
