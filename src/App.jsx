import { useState } from 'react';
import ContactList from './components/Contact/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import styles from './App.module.css';

const App = () => {
    const [contacts, setContacts] = useState([
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]);

    const [filter, setFilter] = useState('');

    // Фільтрація контактів
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    // Додавання нового контакту
    const addContact = (newContact) => {
        setContacts(prevContacts => [newContact, ...prevContacts]);
    };

    return (
        <div className={styles.app}>
            <h1 className={styles.title}>Phonebook</h1>
            <ContactForm onSubmit={addContact} />
            <SearchBox value={filter} onChange={setFilter} />
            <ContactList contacts={filteredContacts} />
        </div>
    );
};

export default App;