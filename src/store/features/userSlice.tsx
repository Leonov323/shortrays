import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../'


interface UserState {
  value: []
}

const initialState: UserState = {
  value: [],
} as UserState

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    myUserId: (state, { payload }) => {
      state.value = payload
    },
  },
})

export const { myUserId } = userSlice.actions
export const selectUser = (state: RootState): [] => state.user.value

export default userSlice.reducer

