import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

//Create Thunk
const fetchUsers = createAsyncThunk(
    'users/fetch',
    async() => {
        const response = await axios.get('http://localhost:3005/users')
        return response.data
    }
)

export { fetchUsers }