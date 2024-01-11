import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogged } from '../redux/selectors';

export const RestricterRoute = ({ component: Component, path }) => {
  const isLoggedIn = useSelector(selectIsLogged);

  if (isLoggedIn) {
    return <Navigate to={path}></Navigate>;
  }
  return <Component />;
};
