import { configureStore } from '@reduxjs/toolkit'
import validationReducer from './features/validation/validationSlice'
import counterReducer from './features/counter/counterSlice'


export const store = configureStore({
  reducer: {
    validation: validationReducer,
    counter: counterReducer
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch