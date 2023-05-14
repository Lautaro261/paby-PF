import { configureStore  } from "@reduxjs/toolkit";
import parkingSpacesPaginationReducer from "./features/parkingSpacesPagination/parkingSpacesPaginationSlice";
import parkingSpacesReducer from "./features/parkingSpaces/parkingSpacesSlice";
import vehiclesReducer from "./features/vehicles/vehiclesSlice";
import parkingSpacesReservationReducer from './features/parkingSpacesReservation/parkingSpacesReservationSlice';
import historyReducer from "./features/history/historySlice";
import usersReducer from './features/users/usersSlice'
import cartsReducer from "./features/carts/cartsSlice"

const store = configureStore({
    reducer: {
        parkingSpacesPagination: parkingSpacesPaginationReducer,
        parkingSpaces: parkingSpacesReducer,
        parkingSpacesReservation: parkingSpacesReservationReducer,
        vehicles: vehiclesReducer,
        history: historyReducer,
        users: usersReducer,
        carts:cartsReducer

    }
});

export default store;