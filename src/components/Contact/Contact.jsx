import { FaPhone, FaUser } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = ({ name, number }) => {
    return (
        <div className={styles.contactCard}>
            <div className={styles.row}>
                <FaUser className={styles.icon} />
                <p className={styles.contactName}>{name}</p>
            </div>
            <div className={styles.row}>
                <FaPhone className={styles.icon} />
                <p className={styles.contactNumber}>{number}</p>
            </div>
            <button className={styles.deleteButton}>Delete</button>
        </div>
    );
};

export default Contact;
