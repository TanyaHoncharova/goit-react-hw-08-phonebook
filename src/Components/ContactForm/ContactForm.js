import React, { useState } from 'react';
import { connect } from "react-redux";
import LoaderComponent from '../Loader';
import contactOperations from '../../redux/contacts/contacts-operations';
// import store from "../../redux/store";
import PropTypes from 'prop-types';
import shortid from 'shortid';
import ContactsSelector from '../../redux/contacts/contacts-selectors'

import styles from './ContactForm.module.css';

const ContactForm = ({ contacts, onSubmit, isLoading }) => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const nameInputId = shortid.generate();
    const phoneInputId = shortid.generate();


    const coincidence = currentName => {
        if (!contacts) { return }

        if (contacts.find(({ name }) => name.toLowerCase() === currentName)) {
            alert(`${currentName} is already in contacts`);
            return true;
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (coincidence(name.toLowerCase())) return;

        onSubmit({ name, number });
        setName('');
        setNumber('');
    }

    return (
        <>
            {isLoading && <LoaderComponent />}
            < form
                className={styles.form} onSubmit={handleSubmit} >
                <>
                    <label className={styles.label} htmlFor={nameInputId}>
                        Name:
                    </label>
                    <input type="text" name="name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        className={styles.input}
                        id={nameInputId}
                        value={name}
                        onChange={handleInputChange}
                        required />

                    <label className={styles.label} htmlFor={phoneInputId} >
                        Number:
                    </label>
                    <input type="tel" name="number" id={phoneInputId}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        className={styles.input} value={number} onChange={handleInputChange} required />

                    <button type="submit"
                        className={styles.btn} >
                        Add contact
                    </button>
                </>
            </form >
        </>
    )
};

ContactForm.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape(PropTypes.string.isRequired)),
    onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    contacts: ContactsSelector.getContacts(state),
    isLoading: ContactsSelector.getLoading(state),
})

const mapDispatchToProps = dispatch => ({
    onSubmit: contact => dispatch(contactOperations.addContact(contact)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);