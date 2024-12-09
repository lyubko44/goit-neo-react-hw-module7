import Contact from './Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts }) => {
    return (
        <div className={styles.contactList}>
            {contacts.map(({ id, name, number }) => (
                <Contact key={id} name={name} number={number} />
            ))}
        </div>
    );
};

export default ContactList;
