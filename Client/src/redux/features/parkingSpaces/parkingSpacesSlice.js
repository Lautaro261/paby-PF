import { createAsyncThunk, createAction, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const apiUrl = 'http://localhost:3001';

const initialState = {
    parkingLot: {},
    LevelsForThisParkingLot: [],
    ParkingSpacesForThisParkingLot: [],
    selectedParkingSpace: {},
    status: 'idle',
    error: null
};

export const getParkingLotById = createAsyncThunk(
    'parkingSpaces/getParkingLotById',
    async () => {
        const response = axios.get(`${ apiUrl }/parking/1`);
        return response.data;
    }
);

export const getLevelsByParkingLotId = createAsyncThunk(
    'parkingSpaces/getLevelsByParkingLotId',
    async () => {
        const response = axios.get(`${ apiUrl }/floors/1`);
        return response.data;
    }
);

// Pendiente la ruta para traer las zonas del parqueadero
export const getParkingSpacesByParkingLotId = createAsyncThunk(
    'parkingSpaces/getParkingSpacesByParkingLotId',
    async () => {
        const response = axios.get(`${ apiUrl }`);
        return response.data;
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
                state.LevelsForThisParkingLot = action.payload
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
                state.ParkingSpacesForThisParkingLot = action.payload
            })
            .addCase(getParkingSpacesByParkingLotId.rejected, (state, action) => {
                state.status = 'rejected',
                state.error = action.error.message;
            })
    }
});

export default parkingSpacesSlice.reducer;