import { Helmet } from 'react-helmet';

export const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>Welcome to your phonebook app!</h1>
    </div>
  );
};
