import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

import { register } from '../../redux/operations';

import css from './Register.module.css';

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
      <form className={css.form} onSubmit={handleRegister}>
        <label className={css.form__item}>
          <span className={css.form__text}>Username:</span>
          <input name="username" className={css.form__input} required />
        </label>
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
          Register
        </button>
      </form>
    </div>
  );
};
