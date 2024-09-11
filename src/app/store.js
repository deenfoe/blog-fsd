import { configureStore } from '@reduxjs/toolkit'

import authFormReducer from '../features/auth/model/authFormSlice'
import articlesReducer from '../entities/article/model/articlesSlice'

const store = configureStore({
  reducer: {
    articles: articlesReducer,
    authForm: authFormReducer,
  },
})

export default store
