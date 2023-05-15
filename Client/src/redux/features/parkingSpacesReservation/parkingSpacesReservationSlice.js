import { createAsyncThunk, createAction, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    currentUserId: '',
    vehicleForParkingId: '',
    vehiclePhotoForReservationURL: '',
    parkingSpacePaymentLink: '',
    responseNotification: ''
};

export const postParkingSpaceReservation = createAsyncThunk(
    'parkingSpacesReservation/postParkingSpaceReservation',
    async (inputData) => {
        try {
            const response = await axios.post(`/reservation/create`, inputData);
            return response.data;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }
);

export const postParkingSpaceReservationNotification = createAsyncThunk(
    'parkingSpacesReservation/postParkingSpaceReservationNotification',
    async (queryParams) => {
        try {
            const response = await axios.post(`reservation/notification?${queryParams}`);
            return response.data;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }
)

export const setCurrentUserId = createAction('parkingSpacesReservation/setCurrentUserId');
export const setVehicleForParkingId = createAction('parkingSpacesReservation/setVehicleForParkingId');
export const setVehiclePhotoForReservationURL = createAction('parkingSpacesReservation/setVehiclePhotoForReservationURL');
export const setParkingSpacePaymentLink = createAction('parkingSpacesReservation/setParkingSpacePaymentLink');

const parkingSpacesReservationSlice = createSlice({
    name: 'parkingSpacesReservation',
    initialState,
    reducers: {
        setCurrentUserId: (state, action) => {
            state.currentUserId = action.payload
        },
        setVehicleForParkingId: (state, action) => {
            state.vehicleForParkingId = action.payload
        },
        setVehiclePhotoForReservationURL: (state, action) => {
            state.vehiclePhotoForReservationURL = action.payload
        },
        setParkingSpacePaymentLink: (state, action) => {
            state.parkingSpacePaymentLink = action.payload
        }
    },
    extraReducers: (builder) => {
        builder

            .addCase(postParkingSpaceReservation.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(postParkingSpaceReservation.fulfilled, (state, action) => {
                state.status = 'succeeded',
                state.parkingSpacePaymentLink = action.payload
            })
            .addCase(postParkingSpaceReservation.rejected, (state, action) => {
                state.status = 'rejected',
                state.error = action.error.message 
            })

            .addCase(postParkingSpaceReservationNotification.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(postParkingSpaceReservationNotification.fulfilled, (state, action) => {
                state.status = 'succeeded',
                state.responseNotification = action.payload
            })
            .addCase(postParkingSpaceReservationNotification.rejected, (state, action) => {
                state.status = 'rejected',
                state.error = action.error.message 
            })
        }
});

export default parkingSpacesReservationSlice.reducer;