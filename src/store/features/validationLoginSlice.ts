import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '..'

interface ValidationState {
    value: boolean
}

const initialState: ValidationState = {
    value: false,
} as ValidationState

export const validationSlice = createSlice({
    name: 'validation',
    initialState,
    reducers: {
        incorrect: state => {
            state.value = false
        },
        correct: state => {
            state.value = true
        }
    }, 
})

export const { incorrect, correct } = validationSlice.actions 

export const selectValidation = (state: RootState): boolean => state.validation.value

export default validationSlice.reducer