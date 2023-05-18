import { createAsyncThunk, createAction, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    currentUserId: '',
    vehicleForParkingId: '',
    reservationBooking: '',
    responseNotification: ''
};

export const postParkingSpaceReservation = createAsyncThunk(
    'parkingSpacesReservation/postParkingSpaceReservation',
    async (values) => {
        try {
            const response = await axios.post(`/reservation/createrc`, values);
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
            console.log("ESTO ME LLEGA",queryParams)
            const response = await axios.post(`reservation/notification?${ queryParams }`);
            console.log("base de datos notificada", response.data)
            return response.data;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }
);

export const setCurrentUserId = createAction('parkingSpacesReservation/setCurrentUserId');
export const setVehicleForParkingId = createAction('parkingSpacesReservation/setVehicleForParkingId');
export const setVehiclePhotoForReservationURL = createAction('parkingSpacesReservation/setVehiclePhotoForReservationURL');

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
        }
    },
    extraReducers: (builder) => {
        builder

            .addCase(postParkingSpaceReservation.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(postParkingSpaceReservation.fulfilled, (state, action) => {
                state.status = 'succeeded',
                state.reservationBooking = action.payload
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