import styles from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';

const ContactsList = () => {
    const contacts = useSelector(selectFilteredContacts);

    return (
        <ul className={styles.list}>
            {contacts.map(contact => (
                <li key={contact.id} className={styles.listItem}>
                    <Contact id={contact.id} name={contact.name} number={contact.number} />
                </li>
            ))}
        </ul>
    );
};

export default ContactsList;