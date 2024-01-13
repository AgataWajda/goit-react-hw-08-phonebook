import { useSelector, useDispatch } from 'react-redux';
import { selectFilterContacts } from '../../redux/selectors';
import { useEffect } from 'react';

import { fetchContacts, deleteContact } from '../../redux/operations';

import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectFilterContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = contact => dispatch(deleteContact(contact.id));

  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li key={contact.id} id={contact.id} className={css.listItem}>
          <span>
            {contact.name}: {contact.number}
          </span>
          <button
            type="button"
            className={css.deleteBtn}
            onClick={() => handleDelete(contact)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
