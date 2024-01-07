import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';
import { useEffect } from 'react';

import { fetchContacts, deleteContact } from '../../redux/operations';

import css from './ContactList.module.css';

export const ContactList = () => {
  const unfilterContacts = useSelector(selectContacts);

  const filter = useSelector(selectFilter);

  const contacts =
    unfilterContacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    ) || [];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = contact => dispatch(deleteContact(contact.id));

  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li key={contact.id} id={contact.id}>
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
