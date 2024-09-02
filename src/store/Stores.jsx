import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './Reducers/movieReducer'
import peopleReducer from './Reducers/peopleReducer'
import tvReducer from './Reducers/tvReducer'

export const Store = configureStore({
  reducer: {
    movie:movieReducer,
    people:peopleReducer,
    tv:tvReducer
  },
})