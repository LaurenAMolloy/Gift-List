import { configureStore } from '@reduxjs/toolkit'
import { formReducer } from '../store/slices/formSlice'
import giftReducer from '../store/slices/giftSlice'
import { userReducer } from './slices/usersSlice'

export const store = configureStore({
    reducer: {
        users: userReducer,
        form: formReducer,
        gifts: giftReducer,
    }
});

export * from './thunks/addUser'
export * from './thunks/deleteUser'



