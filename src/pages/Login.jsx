import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

import { login } from '../redux/operations';

export const Login = () => {
  const dispath = useDispatch();

  const handleLogin = event => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    dispath(login({ email, password }));
  };

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
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
