import { createAsyncThunk, createSlice, createAction } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    allVehicles: [],
    searchedBrandName: [],
    vehiclePhotoForCreationURL: null,
    createVehicleStatus: 'idle',
    status: 'idle',
    error: null,
}

//Crear un vehiculo para un usuario:
export const createVehicle = createAsyncThunk(
    'vehicles/createVehicle',
    async (values) => {
        try {

            const response = await axios.post('/user/vehicle/create', values);
            return response.data && response.data.message;
        } catch(error) {
            console.error(error.message);
            throw error;

        }
    }
);

export const getAllVehicles = createAsyncThunk(
    'vehicles/getAllVehicles',
    async (sub) => {
        try {
            const response = await axios.get(`/user/${sub}/vehicles`);
            // console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const searchVehicleBrandByName = createAsyncThunk(
    'vehicles/searchVehicleBrandByName',
    async (car_brand) => {
        try {
            const response = await axios.get(`/user/vehicle/search/${car_brand}`);
            // console.log(response.data);
            return response.data;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }
);

export const setVehiclePhotoForCreationURL = createAction('vehicles/setVehiclePhotoForCreationURL');

const vehiclesSlice = createSlice({
    name: 'vehicles',
    initialState,
    reducers: {
        setVehiclePhotoForCreationUR: (state, action) => {
            state.vehiclePhotoForCreationURL = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createVehicle.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(createVehicle.fulfilled, (state, action) => {
                state.status = 'succeeded',
                state.vehicleCreationNotification = action.payload
                state.allVehicles = [];
                state.error = null;
            })
            .addCase(createVehicle.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message;
            })
            .addCase(getAllVehicles.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllVehicles.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.allVehicles = action.payload;
                state.error = null;
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
                state.error = null;
            })
            .addCase(searchVehicleBrandByName.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            });
    }
});

export default vehiclesSlice.reducer;