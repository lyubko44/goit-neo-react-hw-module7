import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
    return (
        <div className={styles.searchBox}>
            <label className={styles.label} htmlFor="search">
                Find contacts by name
            </label>
            <input
                id="search"
                className={styles.input}
                type="text"
                value={value}
                onChange={e => onChange(e.target.value)}
                placeholder="Enter name"
            />
        </div>
    );
};

export default SearchBox;
