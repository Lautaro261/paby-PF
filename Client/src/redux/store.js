import { configureStore  } from "@reduxjs/toolkit";
import parkingSpacesPaginationReducer from "./features/parkingSpacesPagination/parkingSpacesPaginationSlice";
import parkingSpacesReducer from "./features/parkingSpaces/parkingSpacesSlice";
import vehicleBrandReducer from "./features/vehicleBrand/vehicleBrandSlice";

const store = configureStore({
    reducer: {
        parkingSpacesPagination: parkingSpacesPaginationReducer,
        parkingSpaces: parkingSpacesReducer,
        vehicleBrand: vehicleBrandReducer,
    }
});

export default store;