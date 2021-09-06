import { createAction } from '@reduxjs/toolkit';

const fetchContactRequest = createAction('contacts/fetchContactsRequest');
const fetchContactSuccess = createAction('contacts/fetchContactsSuccess');
const fetchContactError = createAction('contacts/fetchContactsError');

const addContactRequest = createAction('contacts/addContactsRequest');
const addContactSuccess = createAction('contacts/addContactsSuccess');
const addContactError = createAction('contacts/addContactsError');

const deleteContactRequest = createAction('contacts/deleteContactsRequest');
const deleteContactSuccess = createAction('contacts/deleteContactsSuccess');
const deleteContactError = createAction('contacts/deleteContactsError');


const filterContacts = createAction('phonebook/filter')

export const PhonebookActions = {
    fetchContactRequest, fetchContactSuccess, fetchContactError,
    addContactRequest, addContactSuccess, addContactError,
    deleteContactRequest, deleteContactSuccess, deleteContactError,
    filterContacts
}

