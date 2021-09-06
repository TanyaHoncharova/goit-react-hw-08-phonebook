import axios from 'axios';
import { PhonebookActions } from './phonebook-actions'

const fetchContacts = () => async dispatch => {
    dispatch(PhonebookActions.fetchContactRequest())
    try {
        const { data } = await axios.get("/contacts");
        dispatch(PhonebookActions.fetchContactSuccess(data))
    } catch (error) {
        dispatch(PhonebookActions.fetchContactError(error.message))
    }
};

const addContact = ({ name, number }) => async dispatch => {
    const contact = {
        name,
        number
    }
    dispatch(PhonebookActions.addContactRequest())
    try {
        const { data } = await axios.post('/contacts', contact)
        dispatch(PhonebookActions.addContactSuccess(data))
    } catch (error) {
        dispatch(PhonebookActions.addContactError(error.message))
    }
};

const deleteContact = (id) => async dispatch => {
    dispatch(PhonebookActions.deleteContactRequest())
    try {
        await axios.delete(`/contacts/${id}`);
        dispatch(PhonebookActions.deleteContactSuccess(id))
    } catch (error) {
        dispatch(PhonebookActions.deleteContactError(error.message));
    }
}

export const phonebookOperations= { fetchContacts, addContact, deleteContact }