import { createAsyncThunk, createAction, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const apiUrl = 'http://localhost:3001';

const initialState = {
    parkingLot: {},
    levelsForThisParkingLot: [],
    parkingSpacesForThisParkingLot: [],
    selectedParkingSpace: {},
    status: 'idle',
    error: null
};

export const getParkingLotById = createAsyncThunk(
    'parkingSpaces/getParkingLotById',
    async () => {
        try {
            const response = await axios.get(`${ apiUrl }/parking/386f7e09-15c1-4930-9d0d-db37962a649a`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }
);

export const getLevelsByParkingLotId = createAsyncThunk(
    'parkingSpaces/getLevelsByParkingLotId',
    async () => {
        try {
            const response = await axios.get(`${ apiUrl }/floors/386f7e09-15c1-4930-9d0d-db37962a649a`);
            return response.data;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }
);

// Pendiente la ruta para traer las zonas del parqueadero
export const getParkingSpacesByParkingLotId = createAsyncThunk(
    'parkingSpaces/getParkingSpacesByParkingLotId',
    async () => {
        try {
            const response = await axios.get(`${ apiUrl }/zones`);
            return response.data;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }
);

export const setSelectedParkingSpace = createAction('parkingSpaces/setSelectedParkingSpace');

const parkingSpacesSlice = createSlice({
    name: 'parkingSpaces',
    initialState,
    reducers: {
        setSelectedParkingSpace: (state, action) => {
            state.selectedParkingSpace = action.payload
        }
    },
    extraReducers: (builder) => {
        builder

            .addCase(getParkingLotById.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getParkingLotById.fulfilled, (state, action) => {
                state.status = 'succeeded',
                state.parkingLot = action.payload
            })
            .addCase(getParkingLotById.rejected, (state, action) => {
                state.status = 'rejected',
                state.error = action.error.message 
            })

            .addCase(getLevelsByParkingLotId.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getLevelsByParkingLotId.fulfilled, (state, action) => {
                state.status = 'succeeded',
                state.levelsForThisParkingLot = action.payload
            })
            .addCase(getLevelsByParkingLotId.rejected, (state, action) => {
                state.status = 'rejected',
                state.error = action.error.message
            })

            .addCase(getParkingSpacesByParkingLotId.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getParkingSpacesByParkingLotId.fulfilled, (state, action) => {
                state.status = 'succeeded',
                state.parkingSpacesForThisParkingLot = action.payload
            })
            .addCase(getParkingSpacesByParkingLotId.rejected, (state, action) => {
                state.status = 'rejected',
                state.error = action.error.message;
            })
    }
});

export default parkingSpacesSlice.reducer;