import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Layout from 'pages/Layout';
import { selectIsRefreshing } from '../../redux/selectors';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login';
import { Phonebook } from 'pages/Phonebook';
import { currentUser } from '../../redux/operations';
import { RestricterRoute } from 'components/RestrictedRoure';
import { PrivateRoute } from 'components/PrivateRoute';
import { Home } from 'pages/Home';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

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
