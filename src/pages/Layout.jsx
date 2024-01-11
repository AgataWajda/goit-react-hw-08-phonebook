import { NavLink, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectIsLogged, selectUsername } from '../redux/selectors';
import { logout } from '../redux/operations';

const UnauthorizedNav = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </>
  );
};

const AuthorizedNav = () => {
  const username = useSelector(selectUsername);
  const dispath = useDispatch();
  const handleLoggout = () => dispath(logout());
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <span>Welcome {username}</span>
      <NavLink to="/phonebook">Phonebook</NavLink>
      <button onClick={handleLoggout}>Loggout</button>
    </>
  );
};

const Layout = () => {
  const isLogged = useSelector(selectIsLogged);

  return (
    <>
      {isLogged ? <AuthorizedNav /> : <UnauthorizedNav />}
      <Outlet />
    </>
  );
};

export default Layout;
