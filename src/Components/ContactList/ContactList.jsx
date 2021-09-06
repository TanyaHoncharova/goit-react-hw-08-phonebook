import style from './ContactList.module.css'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../../redux/Contacts';



const ContactList = () => {
    const contacts = useSelector(contactsSelectors.GetFilteredContactList);
    const dispatch = useDispatch();
    const error = useSelector(contactsSelectors.getError);
    const isLoading = useSelector(contactsSelectors.getLoading);

    useEffect(() => {
        dispatch(contactsOperations.fetchContacts())
    }, [dispatch]);


    return (
        <>
            {isLoading && <p>{" Loading... "}</p>}
            {error && <p>{`Sorry, something went wrong: ${error}. Please Try Again Later. `}</p>}
            {!isLoading && !error && contacts.length && <ul className={style.contactsList}>
                {contacts.map(({ id, name, number }) => (
                    <li key={id} className={style.contactItem}>
                        <span className={style.listItem}>
                            <p className={style.listItemName}>{name}</p>
                            <p className={style.listItemNumber}>{number}</p>
                        </span>
                        <button
                            type="button"
                            onClick={() => dispatch(contactsOperations.deleteContact(id))}
                            className={style.button}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>}
            {!isLoading && !error && contacts.length === 0 && <p>No information. Please add a new contact or check your query!</p>}
        </>
    );
};


export default ContactList;