import { createAsyncThunk, createSlice, createAction} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    userProfile: {},
    status: 'idle',
    error: null,
    userSession: null,
    responseNotification: ''
}

export const sendUserSession = createAsyncThunk(
    'users/sendUserSession',
    async (userSession) => {
        try {
            const response = await axios.post('/user', userSession)
            console.log('soy el post de user', response.data);
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
);

export const getProfile = createAsyncThunk(
    'users/getProfile',
    async (sub) => {
        try {
            const response = await axios.get(`/user/${sub}`)
            console.log(response.data)

            return response.data;
        } catch (error) {
            console.log(error)
        }
    }
)

export const setUserSession = createAction('users/setUserSession')

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUserSession: (state, action) => {
            state.userSession = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProfile.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.userProfile = action.payload;
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.status = 'rejected';
                state.status = action.error.message;
            })
            .addCase(sendUserSession.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(sendUserSession.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.responseNotification = 'Sesión de usuario guardada con exito.';
            })
            .addCase(sendUserSession.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })
    }
})

export default usersSlice.reducer;

/* import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    userProfile: {},
    status: 'idle',
    error: null,
}

export const getProfile = createAsyncThunk(
    'users/getProfile',
    async (sub) => {
        try {
            const response = await axios.get(`/users/${sub}`)
            console.log(response.data)
            
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getProfile.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.userProfile = action.payload;
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.status = 'rejected';
                state.status = action.error.message;
            })
    }
})

export default usersSlice.reducer; */

