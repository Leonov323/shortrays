import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../..'

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
        valid: state => {
            state.value = false
        },
        invalid: state => {
            state.value = true
        },
        validationOnState: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload
        },
    },
})

export const { valid, invalid, validationOnState } = validationSlice.actions

export const selectValid = (state: RootState): boolean => state.validation.value

export default validationSlice.reducer