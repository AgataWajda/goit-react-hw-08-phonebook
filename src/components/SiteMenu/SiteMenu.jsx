import { useSelector } from 'react-redux';
import { selectEmail } from '../../redux/selectors';
import { useDispatch } from 'react-redux';

import { logout } from '../../redux/operations';

import css from './sitemenu.module.css';
import { changeState } from '../../redux/siteMenuSlice';

export const SiteMenu = () => {
  const email = useSelector(selectEmail);
  const dispath = useDispatch();
  const handleLoggout = () => {
    dispath(logout());
    dispath(changeState());
  };

  return (
    <div className={css.siteMenu}>
      <p className={css.mail}>{email}</p>
      <button onClick={handleLoggout} className={css.logoutBtn}>
        Logout
      </button>
    </div>
  );
};
