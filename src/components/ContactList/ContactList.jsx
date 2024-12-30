import styles from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';

const ContactList = () => {
    const contacts = useSelector(selectContacts);

    return (
        <ul className={styles.list}>
            {contacts.map(({ id, name, number }) => (
                <Contact key={id} id={id} name={name} number={number} />
            ))}
        </ul>
    );
};

export default ContactList;