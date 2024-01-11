import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectIsLogged } from '../redux/selectors';
import { login } from '../redux/operations';

export const Login = () => {
  const isLoggedIn = useSelector(selectIsLogged);
  const dispath = useDispatch();

  if (isLoggedIn) {
    return <Navigate to="/phonebook"></Navigate>;
  }

  const handleLogin = event => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    dispath(login({ email, password }));
  };

  return (
    <div>
      <div>
        <form onSubmit={handleLogin}>
          <label>
            E-mail:
            <input name="email" type="mail" />
          </label>
          <label>
            Password:
            <input name="password" type="password" />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
