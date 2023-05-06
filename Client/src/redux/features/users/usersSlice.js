import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    userProfile: {},
    status: 'idle',
    error: null,
}

export const getProfile = createAsyncThunk(
    'users/getProfile',
    async (sub) => {
        try {
            const response = await axios.get(`http://localhost:3001/users/${sub}`)
            console.log(response.data)
            
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getProfile.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.userProfile = action.payload;
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.status = 'rejected';
                state.status = action.error.message;
            })
    }
})

export default usersSlice.reducer;