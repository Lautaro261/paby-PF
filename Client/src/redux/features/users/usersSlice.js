import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    userProfile: {},
    status: 'idle',
    error: null,
    userSession: null,
    responseNotification: '',
    isLoggedIn: false,
}

export const loginUser = createAsyncThunk(
    'users/loginUser',
    async (userSession) => {
        try {
            const response = await axios.post('/user/login', userSession)
            console.log('soy response en loginUser', response.data)
            return { success: true, response: response.data }
        } catch (error) {
            console.log('soy error en loginUser', error)
            throw error
        }
    }
);

export const sendUserSession = createAsyncThunk(
    'users/sendUserSession',
    async (userSession) => {
        try {
            const response = await axios.post('/user/create', userSession)
            console.log('soy el post de user', response.data);
            return { success: true, response: response.data }
        } catch (error) {
            console.log(error)
           throw error
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
            throw error
        }
    }
);

export const clearError = createAction('users/clearError')
export const setUserSession = createAction('users/setUserSession')
export const logOutUser = createAction('users/logOutUser')

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUserSession: (state, action) => {
            state.userSession = action.payload;
            state.isLoggedIn = true;
        },
        logOutUser: (state, action) => {
            state.userSession = null;
            state.isLoggedIn = false;
        },
        clearError: (state) => {
            state.error = null;
          },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getProfile.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.userProfile = action.payload;
                state.error = null;
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })
            .addCase(sendUserSession.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(sendUserSession.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.responseNotification = 'Sesión de usuario guardada con exito.';
                state.error = null;
            })
            .addCase(sendUserSession.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })
            .addCase(loginUser.pending,(state)=> {
                state.status = 'pending';
            })
            .addCase(loginUser.fulfilled,(state,action)=> {
                state.status = 'fullfilled';
                state.userSession = action.payload.response;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state,action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })

    }
})

export default usersSlice.reducer;

