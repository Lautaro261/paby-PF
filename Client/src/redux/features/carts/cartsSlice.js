import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    cart:[],
    cartId:[],
    error:null,
    status:"idle",
}

export const Fill = createAsyncThunk(
    'carts/Fill',
    async (id) => {
        try {
             const response = await axios.get(`/reservation/${id}/carts`)
             console.log(response.data, "lo que llega")
             if(response.data.message==="El usuario no tiene carrito"){
                axios.post("/reservation/createcart",{
                    "userSub":id,
                    "quantity":"0",
                    "cart_amount": 0,
                    "cart_status": "Vacio"
                  })
                
             }else{
                console.log(response.data.cartId, "datarda")
                const fill = await axios.get(`reservation/${response.data.cartId}/reservations`)
                console.log(fill.data, "cosas")

                return fill.data;
             }
        } catch (error) {
            console.log(error)
        }
    }
)




export const cartsSlice = createSlice({
    name:"carts" ,
    initialState,
        extraReducers: (builder)=>{
            builder
            .addCase(Fill.pending, (state) => {
                state.status = 'loading'
                
            })
            .addCase(Fill.fulfilled, (state, action) => {
                state.status = 'succeeded',
                state.cart = action.payload
                
            })
            .addCase(Fill.rejected, (state, action) => {
                state.status = 'rejected',
                state.error = action.error.message 
            })
        
        
    }
});


export default cartsSlice.reducer;