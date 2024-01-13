import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

import { login } from '../../redux/operations';

import css from './login.module.css';

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
        <form onSubmit={handleLogin} className={css.form}>
          <label className={css.form__item}>
            <span className={css.form__text}>E-mail:</span>
            <input
              name="email"
              type="mail"
              className={css.form__input}
              required
            />
          </label>
          <label className={css.form__item}>
            <span className={css.form__text}>Password:</span>
            <input
              name="password"
              type="password"
              className={css.form__input}
              required
            />
          </label>
          <button type="submit" className={css.form__submitBtn}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
