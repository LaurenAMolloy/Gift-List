import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addUser = createAsyncThunk('users/add', async() => {
    const random = Math.floor(Math.random() * 100) + 1
    console.log(random)
    //Grab random  user from dummy JSON
    const response = await axios.get(`https://dummyjson.com/users/${random}`)
    const name = (response.data.firstName);
    console.log(name)

    //Send the response to json server
    const postResponse = await axios.post('http://localhost:3005/users', {
        name
    });

    return postResponse.data;
});

export { addUser }