import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = { name, number };
        dispatch(addContact(newContact));
        setName('');
        setNumber('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.label}>Name</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
                className={styles.input}
            />
            <label className={styles.label}>Number</label>
            <input
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Number"
                required
                className={styles.input}
            />
            <button type="submit" className={styles.button}>Add Contact</button>
        </form>
    );
};

export default ContactForm;