import { createAsyncThunk, createAction, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const apiUrl = 'http://localhost:3001';

const initialState = {
    allParkingLots: [],
    parkingLot: {},
    levelsForThisParkingLot: [],
    parkingSpacesForThisParkingLot: [],
    selectedParkingSpace: {},
    selectedParkingSpaceResponse: {},
    parkingSpaceStatusFromFilter: '',
    vehicleTypeFromFilter: '',
    status: 'idle',
    error: null
};

export const getAllParkingLots = createAsyncThunk(
    'parkingSpaces/getAllParkingLots',
    async () => {
        try {
            const response = await axios.get(`${ apiUrl }/parking/alls`);
            return response.data;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }
);

export const getParkingLotById = createAsyncThunk(
    'parkingSpaces/getParkingLotById',
    async (id) => {
        try {
            const response = await axios.get(`${ apiUrl }/parking/${ id }`);
            return response.data;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }
);

export const getLevelsByParkingLotId = createAsyncThunk(
    'parkingSpaces/getLevelsByParkingLotId',
    async (id) => {
        try {
            const response = await axios.get(`${ apiUrl }/parking/${ id }/floors`);
            return response.data;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }
);

export const getParkingSpacesByParkingLotId = createAsyncThunk(
    'parkingSpaces/getParkingSpacesByParkingLotId',
    async (id) => {
        try {
            const response = await axios.get(`${ apiUrl }/parking/${ id }/zones`);
            return response.data;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }
);

export const updateParkingSpaceStatusById = createAsyncThunk(
    'parkingSpaces/updateParkingSpaceStatusById',
    async (selectedParkingSpace) => {
        try {
            const response = await axios.put(`${ apiUrl }/parking/zone/${ selectedParkingSpace.id }/edit`, selectedParkingSpace);
            return response.data;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }
);

export const setSelectedParkingSpace = createAction('parkingSpaces/setSelectedParkingSpace');
export const setParkingSpaceStatusFromFilter = createAction('parkingSpaces/setParkingSpaceStatusFromFilter');
export const setVehicleTypeFromFilter = createAction('parkingSpaces/setVehicleTypeFromFilter');

const parkingSpacesSlice = createSlice({
    name: 'parkingSpaces',
    initialState,
    reducers: {
        setSelectedParkingSpace: (state, action) => {
            state.selectedParkingSpace = action.payload
        },
        setParkingSpaceStatusFromFilter: (state, action) => {
            state.parkingSpaceStatusFromFilter = action.payload
        },
        setVehicleTypeFromFilter: (state, action) => {
            state.vehicleTypeFromFilter = action.payload
        }
    },
    extraReducers: (builder) => {
        builder

            .addCase(getAllParkingLots.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getAllParkingLots.fulfilled, (state, action) => {
                state.status = 'succeeded',
                state.allParkingLots = action.payload
            })
            .addCase(getAllParkingLots.rejected, (state, action) => {
                state.status = 'rejected',
                state.error = action.error.message 
            })

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
                state.error = action.error.message
            })

            .addCase(updateParkingSpaceStatusById.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(updateParkingSpaceStatusById.fulfilled, (state, action) => {
                state.status = 'succeeded',
                state.selectedParkingSpaceResponse = action.payload
            })
            .addCase(updateParkingSpaceStatusById.rejected, (state, action) => {
                state.status = 'rejected',
                state.error = action.error.message
            })
    }
});

export default parkingSpacesSlice.reducer;