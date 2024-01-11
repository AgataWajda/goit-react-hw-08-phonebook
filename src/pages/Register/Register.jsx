import { useDispatch, useSelector } from 'react-redux';

import { selectIsLogged } from '../../redux/selectors';
import { register } from '../../redux/operations';

import { Navigate } from 'react-router-dom';

export const Register = () => {
  const dispath = useDispatch();

  const handleRegister = event => {
    event.preventDefault();

    const name = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    dispath(register({ name, email, password }));
  };

  const isLoggedIn = useSelector(selectIsLogged);

  if (isLoggedIn) {
    return <Navigate to="/phonebook"></Navigate>;
  }

  return (
    <div>
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
