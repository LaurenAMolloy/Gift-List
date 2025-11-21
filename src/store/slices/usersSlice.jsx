import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUser";
import { addUser } from "../thunks/addUser";
import { deleteUser } from '../thunks/deleteUser'


const userSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    //Since we are grabbing users from an API we will only require extra
    extraReducers(builder) {
        builder.addCase(fetchUsers.pending, (state, action) => {
            //console.log('fetchUsers pending fired!');
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            //console.log('Payload:', action.payload);
            state.isLoading = false;
            state.data = action.payload
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        });
        builder.addCase(addUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(addUser.rejected, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(deleteUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = state.data.filter((user) => {
                return user.id !== action.payload.id
            })
        });
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.isLoading = false;
        });
    },
})

export const userReducer = userSlice.reducer

