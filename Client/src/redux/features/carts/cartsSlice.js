import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    cart:[],
    payment:"",
    total:"",
    error:null,
    status:"idle",
}


export const Fill = createAsyncThunk(
    'carts/Fill',
    async (id) => {
        try {
             const response = await axios.get(`/reservation/${id}/carts`)

             console.log(response.data, "lo que llega")
             if(response.data.message   ==="El usuario no tiene carrito"){
                axios.post("/reservation/createcart",{
                    "userSub":id
                  })
                
             }else{
                const index=(response.data.length-1)
                console.log(index)
                const id2=(response.data[index].cartId)
                console.log(response.data[index].cartId, "cart ID")
                console.log(response.data[index].cart_amount, "precio")
                const fill = await axios.get(`reservation/${id2}/reservations`)
                
                console.log(fill.data, "fill")
                const link = await axios.post(`reservation/${id2}/payment`)
                console.log(link.data, "link")
                console.log(fill.data, "reservaciones", link.data,"link")
                return ([fill.data, link.data, response.data[index].cart_amount ]);
             }
        } catch (error) {
            console.log(error)
        }
    }
)

export const Delete = createAsyncThunk(
    'carts/Delete',
    async (data) => {
        try {console.log("user: ",data[0], ", reserv: ", data[1], "toto")
             await axios.put(`/reservation/${data[1]}/remove`, {
                "sub": data[0]
            })
             console.log("eliminada")
             const response = await axios.get(`/reservation/${data[0]}/carts`)
             const index=(response.data.length-1)
             return response.data[index].cart_amount
        } catch (error) {
            console.log(error)
        }
    }
)

export const Price = createAsyncThunk(
    'carts/Price',
    async (Id) => {
        try {const response = await axios.get(`/reservation/${Id}/carts`)
        const index=(response.data.length-1)
        return response.data[index].cart_amount
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
                console.log(action.payload, "toda la data")
                state.cart = action.payload[0]
                state.payment=action.payload[1] 
                state.total=action.payload[2]
            })
            .addCase(Fill.rejected, (state, action) => {
                state.status = 'rejected',
                state.error = action.error.message 
            })
            .addCase(Delete.pending, (state) => {
                state.status = 'loading'
                
            })
            .addCase(Delete.fulfilled, (state, action) => {
                state.status = 'succeeded',
                state.total=action.payload
                
            })
            .addCase(Delete.rejected, (state, action) => {
                state.status = 'rejected',
                state.error = action.error.message 
            })
            .addCase(Price.pending, (state) => {
                state.status = 'loading'
                
            })
            .addCase(Price.fulfilled, (state, action) => {
                state.status = 'succeeded',
                state.total=action.payload
                
            })
            .addCase(Price.rejected, (state, action) => {
                state.status = 'rejected',
                state.error = action.error.message 
            })
        
        
        
    }
});


export default cartsSlice.reducer;