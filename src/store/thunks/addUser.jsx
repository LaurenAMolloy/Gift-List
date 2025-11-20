import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addUser = createAsyncThunk('users/add', async() => {
    //Grab user from dummy JSON
    const response = await axios.get('https://dummyjson.com/users/1')
    const name = (response.data.firstName);
    console.log(name)

    //Send the response to json server
    const postResponse = await axios.post('http://localhost:3005/users', {
        name
    });

    return postResponse.data;
});

export { addUser }