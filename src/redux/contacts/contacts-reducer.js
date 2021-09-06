import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { ContactsActions } from './contacts-actions';

const itemsReducer = createReducer([], {
    [ContactsActions.fetchContactSuccess]: (_, { payload }) => payload,
    [ContactsActions.addContactSuccess]: (state, { payload }) => [...state, payload],
    [ContactsActions.deleteContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload)
});

const filterReducer = createReducer('', {
    [ContactsActions.filterContacts]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
    [ContactsActions.addContactRequest]: () => true,
    [ContactsActions.addContactSuccess]: () => false,
    [ContactsActions.addContactError]: () => false,
    [ContactsActions.deleteContactRequest]: () => true,
    [ContactsActions.deleteContactSuccess]: () => false,
    [ContactsActions.deleteContactError]: () => false,
    [ContactsActions.fetchContactRequest]: () => true,
    [ContactsActions.fetchContactSuccess]: () => false,
    [ContactsActions.fetchContactError]: () => false,

});

const error = createReducer(null, {
    [ContactsActions.addContactRequest]: () => null,
    [ContactsActions.addContactSuccess]: () => null,
    [ContactsActions.addContactError]: (_, { payload }) => payload,
    [ContactsActions.deleteContactRequest]: () => null,
    [ContactsActions.deleteContactSuccess]: () => null,
    [ContactsActions.deleteContactError]: (_, { payload }) => payload,
    [ContactsActions.fetchContactRequest]: () => null,
    [ContactsActions.fetchContactSuccess]: () => null,
    [ContactsActions.fetchContactError]: (_, { payload }) => payload,

});

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
    loading,
    error
});