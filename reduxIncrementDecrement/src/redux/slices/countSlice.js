import { createSlice } from '@reduxjs/toolkit'

const countSlice = createSlice({
    name:"cart",
    initialState:0,
    reducers:{
        addItem:(state,action) => { 
            switch (action.payload.type) {
               case "INCREMENT_COUNT":
                 return state + 1;
               case "DECREMENT_COUNT":
                 return state - 1;
               default:
                 return state;
             }
        }
    }
})

export const  {addItem}  = countSlice.actions;

export default countSlice.reducer;