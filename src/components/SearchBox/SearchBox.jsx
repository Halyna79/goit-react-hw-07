import { useDispatch, useSelector } from 'react-redux';
import s from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';

function SearchBox() {
    const dispatch = useDispatch();
    const { name: search } = useSelector(state => state.filters);


    return (
        <label className={s.label}>
            Find contacts by name
            <input
                type='text'
                value={search }
                onChange={e => dispatch(changeFilter(e.target.value))}
                className={s.input}
            />
        </label>
    );
}

export default SearchBox;