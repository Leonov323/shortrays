import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '..'

interface Type {
  email: string
  password: string
  RepeatPassword: string
} 

const initialState: Type = {
  email: '',
  password: '',
  RepeatPassword: ''
}
 
export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    email: (state, { payload }) => {
      state.email = payload
    },
    password: (state, { payload }) => {
      state.password = payload
    },
    RepeatPassword: (state, { payload } ) => {
      state.RepeatPassword = payload
    }
  },
})

export const { email, password, RepeatPassword } = registrationSlice.actions

export const selectEmail = (state: RootState): string => state.registration.email

export const selectPassword = (state: RootState): string => state.registration.password

export const selectRepeatPassword = (state: RootState): string => state.registration.RepeatPassword

export default registrationSlice.reducer 