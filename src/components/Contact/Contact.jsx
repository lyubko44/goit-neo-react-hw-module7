import { FaUser, FaPhone } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = ({ id, name, number, onDeleteContact }) => {
    return (
        <li className={styles.item}>
            <div className={styles.info}>
                <FaUser className={styles.icon} />
                <span className={styles.name}>{name}</span>
            </div>
            <div className={styles.info}>
                <FaPhone className={styles.icon} />
                <span className={styles.number}>{number}</span>
            </div>
            <button
                type="button"
                className={styles.deleteButton}
                onClick={() => onDeleteContact(id)}
            >
                Delete
            </button>
        </li>
    );
};

export default Contact;