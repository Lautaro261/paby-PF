import { configureStore  } from "@reduxjs/toolkit";
import parkingSpacesPaginationReducer from "./features/parkingSpacesPagination/parkingSpacesPaginationSlice";
import parkingSpacesReducer from "./features/parkingSpaces/parkingSpacesSlice";

const store = configureStore({
    reducer: {
        parkingSpacesPagination: parkingSpacesPaginationReducer,
        parkingSpaces: parkingSpacesReducer
    }
});

export default store;