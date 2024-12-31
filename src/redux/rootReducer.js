import { combineReducers } from 'redux';
import filtersReducer from './filtersSlice';
import contactsReducer from './contactsSlice';

const rootReducer = combineReducers({
    filters: filtersReducer,
    contacts: contactsReducer,
});

export default rootReducer;