import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

import { register } from '../../redux/operations';

export const Register = () => {
  const dispath = useDispatch();

  const handleRegister = event => {
    event.preventDefault();

    const name = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    dispath(register({ name, email, password }));
  };

  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <form onSubmit={handleRegister}>
        <label>
          Username:
          <input name="username" />
        </label>
        <label>
          E-mail:
          <input name="email" type="mail" />
        </label>
        <label>
          Password:
          <input name="password" type="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
