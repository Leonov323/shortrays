import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../'

interface LoadingState {
    value: boolean
}

const initialState: LoadingState = {
    value: true,
}

export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        loadingFalse: state => {
            state.value = false
        }
    }, 
})



export const { loadingFalse } = loadingSlice.actions 

export const selectValid = (state: RootState): boolean => state.loading.value 

export default loadingSlice.reducer