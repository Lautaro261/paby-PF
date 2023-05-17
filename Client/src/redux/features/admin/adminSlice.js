import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    status: 'idle',
    error: null,
    allUsers: null,
    userDetails: null,
    reservationBooking: '',
    adminAuth: {},
    bannedUsers: [], //array de usuarios banneados
}

export const toggleUserBan = createAsyncThunk(
    'admin/toggleUserBan',
    async ({ sub, token }) => {
        try {
            console.log("TOGGLE USER BAN", sub)
            console.log("TOKEN ", token)
            const response = await axios.put(`/admin/delete/user`, {sub: sub} , { //acá no sé si la ruta esta correcta espero q si
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log('soy toggleUserBan fullfiled', response.data)
            return sub //devuelvo sub 
        } catch (error) {
            console.log('soy error en toggleUserBan, adminSlice ', error)
            throw error
        }
    }
)

export const loginAdmin = createAsyncThunk(
    'admin/loginAdmin',
    async (userAdmin) => {
        try {
            const response = await axios.post('/admin/login', userAdmin)
            console.log('soy el loguin de admin', response.data)
            return response.data

        } catch (error) {
            console.log('soy el error en loginAdmin', error)
            throw error
        }
    }
)

export const getAllUserForAdmin = createAsyncThunk(
    'admin/getAllUserForAdmin',
    async (token) => {
        console.log('soy token en getAllUserForAdmin', token)
        try {
            const response = await axios.get('/admin/allusers', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('soy getAllUserForAdmin en feature admin', response.data)
            return response.data
        } catch (error) {
            console.log(error)
            throw error
        }
    }
);

export const userDetails = createAsyncThunk(
    'admin/userDetails',
    async ({ sub, token }) => {

        console.log('soy userDetails ', sub, token)
        try {
            const response = await axios.get(`/admin/user/${sub}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('soy userDetails', response.data)
            return response.data
        } catch (error) {
            console.log(error)
            throw error
        }
    }
)


export const adminPostParkingSpaceReservation = createAsyncThunk(
    'admin/adminPostParkingSpaceReservation',
    async (data) => {
        try {
            console.log("desde admin, token:", data[1], " valores: ",data[0])
            const response = await axios.post(`/admin/reservation/create`, data[0], {
                headers: {
                    Authorization: `Bearer ${data[1]}`
                }
            });
            return response.data;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }
    );
    export const clearDetails = createAction('admin/clearDetails')
    
export const ChangeParkingDetails = createAsyncThunk(
    'admin/ChangeParkingDetails',
    async (data) => {
        try {
            console.log("desde admin, token:", data[0], " valores: ",data[1], "id: ", data[2])
            const response = await axios.put(`/admin/parking/${data[2]}`, data[1], {
                headers: {
                    Authorization: `Bearer ${data[0]}`
                }
            });
            return response.data;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }
);

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        clearDetails: (state) => {
            state.userDetails = null;
        },
    },
    extraReducers: (builder) => {
        builder

            .addCase(loginAdmin.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginAdmin.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.adminAuth = action.payload;
                const rol=action.payload.rol;
                console.log("entrada", rol)
                localStorage.setItem("rol", rol)
                state.error = null;
            })
            .addCase(loginAdmin.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })

            .addCase(getAllUserForAdmin.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllUserForAdmin.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.allUsers = action.payload;
                state.error = null;
            })
            .addCase(getAllUserForAdmin.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })

            .addCase(userDetails.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(userDetails.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.userDetails = action.payload;
                state.error = null;
            })
            .addCase(userDetails.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })
            .addCase(toggleUserBan.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(toggleUserBan.fulfilled, (state, action) => { 
                const sub = action.payload;  // acá tenemos el sub
                const user = state.allUsers.find((user)=> user.sub === sub); //buscamos en el estado allUsers al usuario
                if(user){                                              // que corresponde a nuestro sub y verificamos si tenemos el user.
                    user.borrado = !user.borrado                        // acá cambiamos la propiedad de borrado, si era true ahora es false y viceversa
                    if(user.borrado){                                   //si la propiedad borrado es true 
                        state.bannedUsers.push(user);                   //agrega el usuario al array bannedUser
                    }else{
                        state.bannedUsers = state.bannedUsers.filter((bannedUser)=> bannedUser.sub !== sub) // si borrado es false, filtra 
                    }                                                                 // y devuelve los usuarios baneados diferentes a ese sub
                }                                                   
                state.error= null;
            })
            .addCase(toggleUserBan.rejected,(state,action)=>{
                state.status = 'rejected';
                state.error = action.error.message;
            })

            .addCase(adminPostParkingSpaceReservation.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(adminPostParkingSpaceReservation.fulfilled, (state, action) => {
                state.status = 'succeeded',
                state.reservationBooking = action.payload
            })
            .addCase(adminPostParkingSpaceReservation.rejected, (state, action) => {
                state.status = 'rejected',
                state.error = action.error.message 
            })
    }
})

export default adminSlice.reducer;