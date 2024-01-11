import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactFilter } from 'components/Filter/Filter';

import {
  selectIsLoading,
  selectError,
  selectIsLogged,
} from '../redux/selectors';

export const Phonebook = () => {
  const isLoggedIn = useSelector(selectIsLogged);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  if (!isLoggedIn) {
    return <Navigate to="/login"></Navigate>;
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>
      <h2>Contacts</h2>
      <ContactFilter></ContactFilter>
      {isLoading && !error && <div>Request in progress...</div>}
      <ContactList></ContactList>
    </div>
  );
};
