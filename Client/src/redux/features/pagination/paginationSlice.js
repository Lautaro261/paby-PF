import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentPage: 1,
    itemsPerPage: 8
};

export const setCurrentPage = createAction('pagination/setCurrentPage');

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        }
    }
});

export default paginationSlice.reducer;