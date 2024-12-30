import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        name: '',
    },
    reducers: {
        changeFilter: (state, action) => {
            state.name = action.payload;
        },
    },
});

// Actions
export const { changeFilter } = filtersSlice.actions;

// Selectors
export const selectNameFilter = state => state.filters.name;

// Reducer
export default filtersSlice.reducer;