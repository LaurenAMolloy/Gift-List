import { configureStore } from '@reduxjs/toolkit'
import { formReducer } from '../store/slices/formSlice'
import giftReducer from '../store/slices/giftSlice'
import { userReducer } from './slices/usersSlice'
import { giftsApi } from './api/giftsApi';
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        users: userReducer,
        form: formReducer,
        gifts: giftReducer,
        //Add api to store
        [giftsApi.reducerPath]:  giftsApi.reducer
    },
    //Add middleware
    //Required by RTK to handle request deduplication and automatic refetching
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        //Adding RTK QUERY Middleware on top
        .concat(giftsApi.middleware)
    }
});

setupListeners(store.dispatch)

export * from './thunks/fetchUser'
export * from './thunks/addUser'
export * from './thunks/deleteUser'
export { useFetchGiftsQuery } from './api/giftsApi'



