import { createAction } from '@reduxjs/toolkit';


export const fetchContactsRequest = createAction('contacts /fetchContactsRequest');
export const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
export const fetchContactsError = createAction('contact/fetchContactsError');

export const addContactRequest = createAction('contacts / addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contact/addContactError');

export const deleteContactRequest = createAction('contacts / deleteContactRequest');
export const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
export const deleteContactError = createAction('contact/deleteContactError');



export const changeFilter = createAction('contacts/changeFilter');


