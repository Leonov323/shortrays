import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '..'

interface Type {
  locTitle: string
  tabTitle: string
} 

const initialState: Type = {
  locTitle: '',
  tabTitle: '',
}

export const titlesSlice = createSlice({
  name: 'titles',
  initialState,
  reducers: {
    locTitle: (state, { payload }) => {
      state.locTitle = payload
    },
    tabTitle: (state, { payload } ) => {
      state.tabTitle = payload
    }
   
  },
})

export const { locTitle, tabTitle } = titlesSlice.actions


export const selectLocTitle = (state: RootState): string => state.locTitle.locTitle

export const selectTabTitle = (state: RootState): string => state.tabTitle.tabTitle

export default titlesSlice.reducer 