import React from 'react';
import propTypes from 'prop-types';
import { connect, useDispatch, } from 'react-redux';
import operations from '../../redux/contacts/contacts-operations';
import LoaderComponent from '../Loader';
import style from './ContactList.module.css';
import { useEffect } from 'react';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

const ContactList = ({ contacts, onDeleteContact, isLoading }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(operations.fetchContacts())
    }, [dispatch]);

    return (
        <>
            <ul className={style.list}>
                {contacts.map(({ id, name, number }) => {
                    return (
                        <li key={id} className={style.item}>
                            <span>{name}</span><span>{number}</span>
                            <button
                                className={style.btn}
                                type="button"
                                id={id}
                                onClick={() => onDeleteContact(id)}
                            >
                                Delete</button>
                        </li>
                    );
                })}
            </ul>
        </>
    );


};


ContactList.defaultProps = {
    contacts: []
};

ContactList.propTypes = {
    contacts: propTypes.array,
    onDeleteContact: propTypes.func.isRequired
};



const mapStateToProps = (state) => ({
    contacts: contactsSelectors.getVisibleContacts(state),

});


const mapDispatchToProps = dispatch => ({
    fetchContacts: () => dispatch(operations.fetchContacts()),
    onDeleteContact: id => dispatch(operations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);