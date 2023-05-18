import { createAsyncThunk, createAction, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    allParkingLots: [],
    citiesForTheParkingLotFilter: [],
    filteredParkingLots: [],
    selectedParkingLot: {},
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
            const response = await axios.get(`/parking/alls`);
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
            const response = await axios.get(`/parking/${ id }`);
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
            const response = await axios.get(`/parking/${ id }/floors`);
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
            const response = await axios.get(`/parking/${ id }/zones`);
            return response.data;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }
);

export const updateParkingSpaceStatus = createAsyncThunk(
    'parkingSpaces/updateParkingSpaceStatus',
    async (selectedParkingSpace) => {
        try {
            const response = await axios.put(
                `/parking/zone/${ selectedParkingSpace.id }/edit`, 
                    { zone_status: "Ocupada", zone_number: selectedParkingSpace.zone_number }
            );
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }
);

export const setCitiesForTheParkingLotFilter = createAction('parkingSpaces/setCitiesForTheParkingLotFilter');
export const setFilteredParkingLots = createAction('parkingSpaces/setFilteredParkingLots');
export const setSelectedParkingSpace = createAction('parkingSpaces/setSelectedParkingSpace');
export const setParkingSpaceStatusFromFilter = createAction('parkingSpaces/setParkingSpaceStatusFromFilter');
export const setVehicleTypeFromFilter = createAction('parkingSpaces/setVehicleTypeFromFilter');
export const setSelectedParkingLot = createAction('parkingSpaces/setSelectedParkingLot');

const parkingSpacesSlice = createSlice({
    name: 'parkingSpaces',
    initialState,
    reducers: {
        setCitiesForTheParkingLotFilter: (state, action) => {
            state.citiesForTheParkingLotFilter = action.payload
        },
        setFilteredParkingLots: (state, action) => {
            state.filteredParkingLots = action.payload
        },
        setSelectedParkingSpace: (state, action) => {
            state.selectedParkingSpace = action.payload
            console.log(action.payload)
        },
        setParkingSpaceStatusFromFilter: (state, action) => {
            state.parkingSpaceStatusFromFilter = action.payload
        },
        setVehicleTypeFromFilter: (state, action) => {
            state.vehicleTypeFromFilter = action.payload
        },
        setSelectedParkingLot: (state, action) => {
            state.selectedParkingLot = action.payload
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
                state.selectedParkingLot = action.payload
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

            .addCase(updateParkingSpaceStatus.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(updateParkingSpaceStatus.fulfilled, (state, action) => {
                state.status = 'succeeded',
                state.selectedParkingSpaceResponse = action.payload
            })
            .addCase(updateParkingSpaceStatus.rejected, (state, action) => {
                state.status = 'rejected',
                state.error = action.error.message
            })
    }
});

export default parkingSpacesSlice.reducer;