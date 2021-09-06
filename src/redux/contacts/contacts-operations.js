import axios from 'axios';
import { ContactsActions } from './contacts-actions'

const fetchContacts = () => async dispatch => {
    dispatch(ContactsActions.fetchContactRequest())
    try {
        const { data } = await axios.get("/contacts");
        dispatch(ContactsActions.fetchContactSuccess(data))
    } catch (error) {
        dispatch(ContactsActions.fetchContactError(error.message))
    }
};

const addContact = ({ name, number }) => async dispatch => {
    const contact = {
        name,
        number
    }
    dispatch(ContactsActions.addContactRequest())
    try {
        const { data } = await axios.post('/contacts', contact)
        dispatch(ContactsActions.addContactSuccess(data))
    } catch (error) {
        dispatch(ContactsActions.addContactError(error.message))
    }
};

const deleteContact = (id) => async dispatch => {
    dispatch(ContactsActions.deleteContactRequest())
    try {
        await axios.delete(`/contacts/${id}`);
        dispatch(ContactsActions.deleteContactSuccess(id))
    } catch (error) {
        dispatch(ContactsActions.deleteContactError(error.message));
    }
}

export const contactsOperations = { fetchContacts, addContact, deleteContact }