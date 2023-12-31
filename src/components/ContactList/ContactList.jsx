import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';

import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  console.log(contacts.list);

  return (
    <ul className={css.list}>
      {contacts.list.map(contact => (
        <li key={contact.id} id={contact.id}>
          <span>
            {contact.name}: {contact.number}
          </span>
          <button
            type="button"
            className={css.deleteBtn}
            // onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
