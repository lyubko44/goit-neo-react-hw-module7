import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/contactsOps';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectFilteredContacts);
    const status = useSelector((state) => state.contacts.status);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchContacts());
        }
    }, [status, dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteContact(id));
    };

    return (
        <ul className={styles.list}>
            {contacts.map((contact) => (
                <li key={contact.id} className={styles.listItem}>
                    <Contact id={contact.id} name={contact.name} number={contact.number} />
                    <button onClick={() => handleDelete(contact.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;