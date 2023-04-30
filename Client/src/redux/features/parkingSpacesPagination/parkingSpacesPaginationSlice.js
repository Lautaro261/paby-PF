import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentPage: 1,
    itemsPerPage: 8
};

export const setCurrentPage = createAction('parkingSpacesPagination/setCurrentPage');

const parkingSpacesPaginationSlice = createSlice({
    name: 'parkingSpacesPagination',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        }
    }
});

export default parkingSpacesPaginationSlice.reducer;