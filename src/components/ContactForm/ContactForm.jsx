import { useDispatch } from 'react-redux';

import { addContact } from '../../redux/operations';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const pushData = event => {
    event.preventDefault();

    const contactData = {
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    };

    dispatch(addContact(contactData));

    event.target.reset();
  };

  return (
    <form className={css.form} onSubmit={pushData}>
      <label>
        <h3 className={css.subtitle}>Name</h3>
        <input
          type="text"
          name="name"
          className={css.input}
          pattern="^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <h3 className={css.subtitle}>Number</h3>
        <input
          type="tel"
          name="number"
          className={css.input}
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.submitBtn}>
        Add contact
      </button>
    </form>
  );
};
