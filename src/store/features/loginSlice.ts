import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '..'

interface Type {
  email: string
  password: string
} 

const initialState: Type = {
  email: '',
  password: ''
}
 
export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    email: (state, { payload }) => {
      state.email = payload
    },
    password: (state, { payload }) => {
      state.password = payload
    }
  },
})


export const { email, password } = loginSlice.actions

export const selectEmail = (state: RootState): string => state.login.email
export const selectPassword = (state: RootState): string => state.login.password

export default loginSlice.reducer 