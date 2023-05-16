import { configureStore  } from "@reduxjs/toolkit";
import paginationReducer from "./features/pagination/paginationSlice";
import parkingSpacesReducer from "./features/parkingSpaces/parkingSpacesSlice";
import vehiclesReducer from "./features/vehicles/vehiclesSlice";
import parkingSpacesReservationReducer from './features/parkingSpacesReservation/parkingSpacesReservationSlice';
import historyReducer from "./features/history/historySlice";
import usersReducer from './features/users/usersSlice'
import cartsReducer from "./features/carts/cartsSlice"
import adminReducer from "./features/admin/adminSlice"

const store = configureStore({
    reducer: {
        pagination: paginationReducer,
        parkingSpaces: parkingSpacesReducer,
        parkingSpacesReservation: parkingSpacesReservationReducer,
        vehicles: vehiclesReducer,
        history: historyReducer,
        users: usersReducer,
        carts: cartsReducer,
        admin: adminReducer
    }
});

export default store;