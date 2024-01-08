import { useSelector } from 'react-redux';

import { selectIsLoading, selectError } from '../../redux/selectors';

import css from './App.module.css';

import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { ContactFilter } from '../Filter/Filter';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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
