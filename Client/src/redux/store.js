import { configureStore  } from "@reduxjs/toolkit";
import parkingSpacesPaginationReducer from "./features/parkingSpacesPagination/parkingSpacesPaginationSlice";
import parkingSpacesReducer from "./features/parkingSpaces/parkingSpacesSlice";
import vehicleBrandReducer from "./features/vehicleBrand/vehicleBrandSlice";
import parkingSpacesReservationReducer from './features/parkingSpacesReservation/parkingSpacesReservationSlice';

const store = configureStore({
    reducer: {
        parkingSpacesPagination: parkingSpacesPaginationReducer,
        parkingSpaces: parkingSpacesReducer,
        parkingSpacesReservation: parkingSpacesReservationReducer,
        vehicleBrand: vehicleBrandReducer
    }
});

export default store;