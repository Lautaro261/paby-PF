import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    historial:[],
    error:null,
    status:"idle"
}

export const Update = createAsyncThunk(
    'history/Update',
    async (id) => {
        try {
             const response = await axios.get(`/reservation/${id}`)
             if(!response){return ["error",["Ha ocurrido un error"]]}
             console.log(response.data, "lo que llegA")
             return response.data;
        } catch (error) {
            console.log(error)
        }
    }
)




export const historySlice = createSlice({
    name:"history" ,
    initialState,
        extraReducers: (builder)=>{
            builder
            .addCase(Update.pending, (state) => {
                state.status = 'loading'
                
            })
            .addCase(Update.fulfilled, (state, action) => {
                state.status = 'succeeded',
                state.historial = action.payload
                
            })
            .addCase(Update.rejected, (state, action) => {
                state.status = 'rejected',
                state.error = action.error.message 
            })
        
        
    }
});


export default historySlice.reducer;