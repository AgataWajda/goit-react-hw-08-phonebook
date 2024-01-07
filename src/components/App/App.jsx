import { useDispatch } from 'react-redux';

import css from './App.module.css';

import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { ContactFilter } from '../Filter/Filter';
import { selectError, selectIsLoading } from '../../redux/selectors';

export const App = () => {
  const dispatch = useDispatch();

  const isLoading = dispatch(selectIsLoading);
  const error = dispatch(selectError);
  console.log(isLoading);

  return (
    <div>
      <h1 className={css.mainTitle}>Phonebook</h1>
      <ContactForm></ContactForm>
      <h2>Contacts</h2>
      <ContactFilter></ContactFilter>
      {isLoading && !error && <div>Request in progress...</div>}
      <ContactList></ContactList>
    </div>
  );
};
