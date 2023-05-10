import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import { 
    persistStore, 
    persistReducer, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, 
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import parkingSpacesPaginationReducer from "./features/parkingSpacesPagination/parkingSpacesPaginationSlice";
import parkingSpacesReducer from "./features/parkingSpaces/parkingSpacesSlice";
import vehiclesReducer from "./features/vehicles/vehiclesSlice";
import parkingSpacesReservationReducer from './features/parkingSpacesReservation/parkingSpacesReservationSlice';
import historyReducer from "./features/history/historySlice";
import usersReducer from './features/users/usersSlice'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        'parkingSpaces',
        'vehicles',
        'parkingSpacesReservation',
        'history',
        'users'
    ]
};

const rootReducer = combineReducers({
    parkingSpacesPagination: parkingSpacesPaginationReducer,
    parkingSpaces: parkingSpacesReducer,
    parkingSpacesReservation: parkingSpacesReservationReducer,
    vehicles: vehiclesReducer,
    history: historyReducer,
    users: usersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

const persistor = persistStore(store);

export { store, persistor };