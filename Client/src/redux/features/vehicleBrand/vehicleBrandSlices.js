import { createAsyncThunk, createSlice, } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:3001';

const initialState = {
    searchedBrandName: {},
    status: 'idle',
    error: null,
}

export const searchVehicleBrandByName = createAsyncThunk(
    'vehicleBrand/searchVehicleBrandByName',
    async (car_brand) => {
        try {
            const response = await axios.get(`${apiUrl}/users/vehicle/search/${car_brand}`)
            console.log(response.data);
            return response.data
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }
)

const vehicleBrandSlice = createSlice({
    name: 'vehicleBrand',
    initialState,
    extraReducers: (builder) => {
        builder

            .addCase(searchVehicleBrandByName.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(searchVehicleBrandByName.fulfilled, (state, action) => {
                state.status = 'succeeded',
                    state.searchedBrandName= action.payload
            })
            .addCase(searchVehicleBrandByName.rejected, (state, action) => {
                state.status = 'rejected',
                    state.error = action.error.message
            })

    }
})


export default vehicleBrandSlice.reducer 