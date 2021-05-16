import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import allPostsReducer from './redux/slices/allPostsSlice'
import getPostReducer from './redux/slices/getPostSlice'
import addPostReducer from './redux/slices/addPostSlice'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
  allPosts: allPostsReducer,
  getPost: getPostReducer,
  addPost: addPostReducer
})

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export default store
