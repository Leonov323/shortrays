import { configureStore } from '@reduxjs/toolkit'
import validationReducer from './features/validationLoginSlice'
import counterReducer from './features/counterSlice'
import locationsReducer from './features/locationsSlice'
import tablesReducer from './features/tablesSlice'
import userReducer from './features/userSlice'
import loginReducer from './features/loginSlice'
import registrationReducer from './features/registrationSlice'
import loadingReducer from './features/loadingSlice'
import titlesReducer from './features/titlesSlice'
import validationRegistrationReducer from './features/validationRegistrationSlice'


export const store = configureStore({

  reducer: {
    validation: validationReducer,
    validationRegistration: validationRegistrationReducer,
 
    counter: counterReducer,
    loading: loadingReducer,

    user: userReducer,
    locations: locationsReducer,
    tables: tablesReducer,
    
    login: loginReducer,
    registration: registrationReducer,

    locTitle: titlesReducer,
    tabTitle: titlesReducer,
    
  }
  
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch