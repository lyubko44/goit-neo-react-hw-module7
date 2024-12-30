import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice.js';
import { nanoid } from 'nanoid';
import { useState } from 'react';

const ContactForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = { id: nanoid(), name, number };
        dispatch(addContact(newContact));
        setName('');
        setNumber('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
            />
            <input
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Number"
                required
            />
            <button type="submit">Add Contact</button>
        </form>
    );
};

export default ContactForm;