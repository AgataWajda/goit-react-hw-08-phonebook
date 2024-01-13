import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactFilter } from 'components/Filter/Filter';

import { selectIsLoading, selectError } from '../../redux/selectors';

import css from './phonebook.module.css';

export const Phonebook = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div className={css.phonebook}>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <h1 className={css.tittle}>Phonebook</h1>
      <div className={css.conteiner}>
        <div>
          <ContactForm></ContactForm>
        </div>
        <div className={css.block}>
          <h2 className={css.contactsTittle}>Contacts:</h2>
          <ContactFilter></ContactFilter>
          {isLoading && !error && <div>Request in progress...</div>}
          <ContactList></ContactList>
        </div>
      </div>
    </div>
  );
};
