import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid';

export const giftSlice = createSlice({
    //name
    //initial state
    //reducers 
    name: "gifts",
    initialState: {
        searchTerm: "",
        data: []
    },
    reducers: {
        addGift: (state, action) => {
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid(),
            })
        },
        removeGift: (state, action) => {
            const filteredGifts = state.data.filter((gift) =>{
                return gift.id !== action.payload
            });
            state.data = filteredGifts
        },
        changeSearchTerm: (state, action) => {
            state.searchTerm = action.payload
        },
    },
});

export const {
    addGift,
    removeGift,
    changeSearchTerm
} = giftSlice.actions;
export default giftSlice.reducer;


