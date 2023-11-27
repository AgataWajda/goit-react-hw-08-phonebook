export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} id={contact.id}>
          {contact.name}: {contact.number};
        </li>
      ))}
    </ul>
  );
};
