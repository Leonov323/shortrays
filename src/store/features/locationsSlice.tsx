import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../'


interface LocationsState {
  value: []
}

const initialState: LocationsState = {
  value: []
} as LocationsState

export const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    myLocations: (state, { payload }) => {
      state.value = payload
    },
  },
})

export const { myLocations } = locationsSlice.actions
export const selectLocations = (state: RootState): [] => state.locations.value

export default locationsSlice.reducer

