import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '..'

interface ValidationRegistrationState {
    value: boolean
}

const initialState: ValidationRegistrationState = {
    value: false,
}

export const validationRegistrationSlice = createSlice({
    name: 'validationRegistration',
    initialState,
    reducers: {
        incorrect2: state => {
            state.value = false
        },
        correct2: state => {
            state.value = true
        }
    }, 
})

export const { incorrect2, correct2 } = validationRegistrationSlice.actions 

export const selectValidationRegistration = (state: RootState): boolean => state.validationRegistration.value

export default validationRegistrationSlice.reducer