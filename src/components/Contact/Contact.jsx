import styles from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(id));
    };

    return (
        <div className={styles.item}>
            <div className={styles.info}>
                <span className={styles.name}>{name}</span>
                <span className={styles.number}>{number}</span>
            </div>
            <button onClick={handleDelete} className={styles.deleteButton}>Delete</button>
        </div>
    );
};

export default Contact;