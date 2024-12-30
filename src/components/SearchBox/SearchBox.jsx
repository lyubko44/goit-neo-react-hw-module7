import styles from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const handleChange = (e) => {
        dispatch(changeFilter(e.target.value));
    };

    return (
        <input
            type="text"
            value={filter}
            onChange={handleChange}
            placeholder="Search contacts"
            className={styles.searchBox}
        />
    );
};

export default SearchBox;