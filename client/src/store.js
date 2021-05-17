import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import allPostsReducer from './redux/postSlices/allPostsSlice'
import getPostReducer from './redux/postSlices/getPostSlice'
import addPostReducer from './redux/postSlices/addPostSlice'
import getCommentReducer from './redux/commentSlices/getCommentsSlice'
import addCommentsReducer from './redux/commentSlices/addCommentsSlice'
import registerReducer from './redux/authSlices/registerSlice'
import loginReducer from './redux/authSlices/loginSlices'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
  allPosts: allPostsReducer,
  getPost: getPostReducer,
  addPost: addPostReducer,
  getComments: getCommentReducer,
  addComments: addCommentsReducer,
  registerUser: registerReducer,
  loginUser: loginReducer
})

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export default store
