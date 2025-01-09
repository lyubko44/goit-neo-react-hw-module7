import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import { fetchContacts } from './redux/contactsOps';
import styles from './App.module.css';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div className={styles.app}>
            <h1 className={styles.title}>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            <ContactList />
        </div>
    );
};

export default App;