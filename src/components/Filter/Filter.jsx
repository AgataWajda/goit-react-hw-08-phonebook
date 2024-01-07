import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import css from './Filter.module.css';

export const ContactFilter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div>
      <h3 className={css.subtitle}>Find contact by name</h3>
      <input
        name="filter"
        className={css.filter}
        onChange={handleChange}
      ></input>
    </div>
  );
};
