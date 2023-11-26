import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { contacts, name } = this.state;
    const id = nanoid();
    contacts.push({ name: name, id: id });

    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    const { name, contacts } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
          <button type="submit">Add contact</button>
        </form>
        <ul>
          {contacts.map((contact, index) => {
            const { id, name } = contact;
            return (
              <li key={id} id={id}>
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
