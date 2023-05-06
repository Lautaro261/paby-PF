import { createSlice } from "@reduxjs/toolkit";

const initialState={
    historal:["holii"]
}


export const historySlice = createSlice({
    name:"history" ,
    initialState,
    reducers:{
        update:(state,action)=>{
            state.historal=action.payload;
            console.log(state.historal, "AA")
        }
    }
});

export const {update} =historySlice.actions;
export default historySlice.reducer;