import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : '';
};

export const register = createAsyncThunk(
  '/users/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      setAuthToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  '/users/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('/users/logout', async (_, thunkAPI) => {
  try {
    const response = await axios.post('/users/logout');
    setAuthToken('');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const currentUser = createAsyncThunk(
  '/users/current',
  async (_, thunkAPI) => {
    const store = thunkAPI.getState();
    const token = store.auth.token;
    if (token) {
      setAuthToken(token);
      try {
        const response = await axios.get('/users/current');
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }

    return thunkAPI.rejectWithValue('No token');
  }
);

//STARY KOD:

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    const store = thunkAPI.getState();
    const token = store.auth.token;
    if (token) {
      setAuthToken(token);
      try {
        const response = await axios.get('/contacts');
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
    return thunkAPI.rejectWithValue('No token');
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (error) {
      return thunkAPI.fulfillWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.fulfillWithValue(error.message);
    }
  }
);
