import { Routes, Route } from 'react-router-dom';

import Layout from 'pages/Layout';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login';
import { Phonebook } from 'pages/Phonebook';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/phonebook" element={<Phonebook />} />
        </Route>
      </Routes>
    </div>
  );
};
