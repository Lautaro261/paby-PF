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

// Cambiar el id alfanumérico por el id del parqueadero que tiene en su tabla. Luego, vuelva
// a cargar el sitio web desde el landing page. La opción buscar parqueadero se implementará después
export const getParkingLotById = createAsyncThunk(
    'parkingSpaces/getParkingLotById',
    async () => {
        try {
            const response = await axios.get(`${ apiUrl }/parking/ae376455-85c7-45c2-a866-fdc126a851ff`);
            return response.data;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }
);

// Cambiar el id alfanumérico por el id del parqueadero que tiene en su tabla. Luego, vuelva
// a cargar el sitio web desde el landing page. La opción buscar parqueadero se implementará después
export const getLevelsByParkingLotId = createAsyncThunk(
    'parkingSpaces/getLevelsByParkingLotId',
    async () => {
        try {
            const response = await axios.get(`${ apiUrl }/floors/ae376455-85c7-45c2-a866-fdc126a851ff`);
            return response.data;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }
);

// Cambiar el id alfanumérico por el id del parqueadero que tiene en su tabla. Luego, vuelva
// a cargar el sitio web desde el landing page. La opción buscar parqueadero se implementará después
export const getParkingSpacesByParkingLotId = createAsyncThunk(
    'parkingSpaces/getParkingSpacesByParkingLotId',
    async () => {
        try {
            const response = await axios.get(`${ apiUrl }/zones/ae376455-85c7-45c2-a866-fdc126a851ff`);
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