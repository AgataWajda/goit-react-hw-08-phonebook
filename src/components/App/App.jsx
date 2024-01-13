import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Layout from 'pages/Layout/Layout';
import { selectError, selectIsRefreshing } from '../../redux/selectors';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';
import { Phonebook } from 'pages/Phonebook/Phonebook';
import { currentUser } from '../../redux/operations';
import { RestricterRoute } from 'components/RestrictedRoure';
import { PrivateRoute } from 'components/PrivateRoute';
import { Home } from 'pages/Home/Home';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const errorMsg = useSelector(selectError);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  if (errorMsg === 'Request failed with status code 400') {
    Notify.failure('Ops... Something went wrong');
  }

  if (isRefreshing) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route
            path="/register"
            element={<RestricterRoute component={Register} path="/phonebook" />}
          />
          <Route
            path="/login"
            element={<RestricterRoute component={Login} path="/phonebook" />}
          />
          <Route
            path="/phonebook"
            element={<PrivateRoute component={Phonebook} path="/login" />}
          />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
