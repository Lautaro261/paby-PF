import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const apiUrl = 'http://localhost:3001';
const initialState = {
    allVehicles: [],
    searchedBrandName: [],
    status: 'idle',
    error: null,
}

export const getAllVehicles = createAsyncThunk (
    'vehicleBrand/getAllVehicles',
    async () => {
        try {
            const response = await axios.get('http://localhost:3001/users/vehicle');
            console.log(response.data && response.data.vehicleDB);
            return response.data && response.data.vehicleDB;
        } catch (error) {
            console.log(error);
        }
    }
);

export const searchVehicleBrandByName = createAsyncThunk(
    'vehicleBrand/searchVehicleBrandByName',
    async (car_brand) => {
        try {
            const response = await axios.get(`${apiUrl}/users/vehicle/search/${car_brand}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }
);

const vehicleBrandSlice = createSlice({
    name: 'vehicleBrand',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllVehicles.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllVehicles.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.allVehicles = action.payload;
            })
            .addCase(getAllVehicles.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })
            .addCase(searchVehicleBrandByName.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(searchVehicleBrandByName.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.searchedBrandName = [action.payload];
            })
            .addCase(searchVehicleBrandByName.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            });
    }
});

export default vehicleBrandSlice.reducer;
