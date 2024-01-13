import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectIsLogged,
  selectSiteMenu,
  selectUsername,
} from '../../redux/selectors';

import css from './layout.module.css';
import { StyledLink } from './Layout.styled';

import { SiteMenu } from '../../components/SiteMenu/SiteMenu';
import { changeState } from '../../redux/siteMenuSlice';

const UnauthorizedNav = () => {
  return (
    <nav className={css.nav}>
      <StyledLink to="/home">Home</StyledLink>
      <div className={css.wrapper}>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/register">Register </StyledLink>
      </div>
    </nav>
  );
};

const AuthorizedNav = () => {
  const username = useSelector(selectUsername);
  const dispath = useDispatch();
  const isHidden = useSelector(selectSiteMenu);
  const handleMenu = () => {
    dispath(changeState());
  };

  return (
    <nav className={css.nav}>
      <StyledLink to="/home">Home</StyledLink>
      <div className={css.wrapper}>
        <StyledLink to="/phonebook">Phonebook</StyledLink>
        <button className={css.userBtn} onClick={handleMenu}>
          {username}
          <img
            width="15"
            height="15"
            src="https://img.icons8.com/ios-filled/50/expand-arrow--v1.png"
            alt="expand-arrow--v1"
          />
        </button>
        {!isHidden ? <SiteMenu /> : <></>}
      </div>
    </nav>
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
