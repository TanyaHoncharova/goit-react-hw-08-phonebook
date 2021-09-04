import axios from 'axios';
import {
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactSuccess,
    addContactRequest,
    addContactError,
    deleteContactSuccess,
    deleteContactRequest,
    deleteContactError,
}
    from './contacts-actions';

// запрос для json-servera 
// axios.defaults.baseURL = 'http://localhost:4040';

//запрос для  mockapi

axios.defaults.baseURL = 'https://61226d55d44628001705484b.mockapi.io';

const fetchContacts = () => async dispatch => {
    dispatch(fetchContactsRequest());
    try {
        const { data } = await axios.get('/contacts');

        dispatch(fetchContactsSuccess(data));
    } catch (error) {
        dispatch(fetchContactsError(error));
    }
};

const addContact = newContact => dispatch => {

    dispatch(addContactRequest());

    axios
        .post('/contacts', newContact)
        .then(({ data }) =>
            dispatch(addContactSuccess(data)),
        )
        .catch(error => dispatch(addContactError(error)));
};

const deleteContact = id => dispatch => {
    dispatch(deleteContactRequest);

    axios
        .delete(`/contacts/${id}`)
        .then(() => dispatch(deleteContactSuccess(id)))
        .catch(error => dispatch(deleteContactError(error)));
};

export default {
    fetchContacts,
    addContact,
    deleteContact
};