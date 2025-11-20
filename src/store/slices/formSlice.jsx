//Create Slice
import { createSlice } from '@reduxjs/toolkit'
import { addGift } from './giftSlice';


const formSlice = createSlice({
    name: 'form',
    //What state do we need?
    //name and cost
    initialState: {
        name: '',
        cost: 0 
    },
    //What reducers do we need?
    //What actions are we listening for?
    reducers: {
        changeName(state, action) {
            state.name = action .payload
        },
        changeCost(state, action) {
            state.cost = action.payload
        },
    },
    //What extra reducers do we need?
    //When a car is added reset the inputs!
    extraReducers(builder) {
        builder.addCase(addGift, (state, action) => {
            state.name = "";
            state.cost = 0;
        })
    }
});

//Export
export const { changeName, changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer







