import css from './App.module.css';

import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { ContactFilter } from '../Filter/Filter';

export const App = () => {
  return (
    <div>
      <h1 className={css.mainTitle}>Phonebook</h1>
      <ContactForm></ContactForm>
      <h2>Contacts</h2>
      <ContactFilter></ContactFilter>

      <ContactList></ContactList>
    </div>
  );
};
