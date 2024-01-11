import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactFilter } from 'components/Filter/Filter';

import { selectIsLoading, selectError } from '../redux/selectors';

export const Phonebook = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>
      <h2>Contacts</h2>
      <ContactFilter></ContactFilter>
      {isLoading && !error && <div>Request in progress...</div>}
      <ContactList></ContactList>
    </div>
  );
};
