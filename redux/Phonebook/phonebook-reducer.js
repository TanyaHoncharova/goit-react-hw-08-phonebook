import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { PhonebookActions } from './phonebook-actions';

const itemsReducer = createReducer([], {
    [PhonebookActions.fetchContactSuccess]: (_, { payload }) => payload,
    [PhonebookActions.addContactSuccess]: (state, {payload})=>[...state, payload],
    [PhonebookActions.deleteContactSuccess]:(state, {payload})=> state.filter(({ id }) => id !== payload)
});

const filterReducer = createReducer('', {
    [PhonebookActions.filterContacts]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
    [PhonebookActions.addContactRequest]: () => true,
    [PhonebookActions.addContactSuccess]: () => false,
    [PhonebookActions.addContactError]: () => false,
    [PhonebookActions.deleteContactRequest]: () => true,
    [PhonebookActions.deleteContactSuccess]: () => false,
    [PhonebookActions.deleteContactError]: () => false,
    [PhonebookActions.fetchContactRequest]: () => true,
    [PhonebookActions.fetchContactSuccess]: () => false,
    [PhonebookActions.fetchContactError]: () => false,

});

const error = createReducer(null, {
    [PhonebookActions.addContactRequest]: () => null,
    [PhonebookActions.addContactSuccess]: () => null,
    [PhonebookActions.addContactError]: (_, { payload }) => payload,
    [PhonebookActions.deleteContactRequest]: () => null,
    [PhonebookActions.deleteContactSuccess]: () => null,
    [PhonebookActions.deleteContactError]: (_, { payload }) => payload,
    [PhonebookActions.fetchContactRequest]: () => null,
    [PhonebookActions.fetchContactSuccess]: () => null,
    [PhonebookActions.fetchContactError]: (_, { payload }) => payload,
    
});

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
    loading,
    error
});