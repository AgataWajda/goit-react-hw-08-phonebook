import { Helmet } from 'react-helmet';

import css from './home.module.css';

export const Home = () => {
  return (
    <div className={css.conteiner}>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1 className={css.tittle}>Welcome to your phonebook app!</h1>
    </div>
  );
};
