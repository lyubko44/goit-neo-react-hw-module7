import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://677e18f694bde1c1252a58a7.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
    const response = await axios.get(API_URL);
    return response.data;
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
    const response = await axios.post(API_URL, contact);
    return response.data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
});

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter((contact) => contact.id !== action.payload);
            });
    },
});

export const selectFilteredContacts = createSelector(
    (state) => state.contacts.items,
    (items) => items // Add your filtering logic here if needed
);

export default contactsSlice.reducer;