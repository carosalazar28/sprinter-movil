import axios from 'axios';
import {
  LOADING,
  FINISHED_LOADING_USER,
  SET_USERNAME,
  SET_EMAIL,
  SET_PASSWORD,
  SET_ROL,
  GET_USER,
  FAILURED_USER,
  UPDATE_USER,
  DESTROY_USER,
} from '../reducers/user.reducer';
import { SERVER_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function setUserName( payload ) {
  return function( dispatch ) {
    dispatch({ type: SET_USERNAME, payload });
  };
}

export function setEmail( payload ) {
  return function( dispatch ) {
    dispatch({ type: SET_EMAIL, payload });
  };
}

export function setPassword( payload ) {
  return function( dispatch ) {
    dispatch({ type: SET_PASSWORD, payload });
  };
}

export function setRol( payload ) {
  return function( dispatch ) {
    dispatch({ type: SET_ROL, payload });
  };
}

export function getUser() {
  return async function( dispatch ) {
    dispatch({ type: LOADING });
    try {
      const token = await AsyncStorage.getItem('token');
      const { data: { data }} = await axios({
        method: 'GET',
        baseURL: SERVER_URL,
        url: '/user',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('here data get user', data)
      dispatch({ type: GET_USER, payload: data });
    } catch(err) {
      dispatch({ type: FAILURED_USER });
    } finally {
      dispatch({ type: FINISHED_LOADING_USER });
    }
  };
}

export function updateUser( dataSend ) {
  const { username, email, rol } = dataSend
  return async function( dispatch ) {
    dispatch({ type: LOADING });
    try {
      const token = await AsyncStorage.getItem('token');
      const { data: { data }} = await axios({
        method: 'PUT',
        baseURL: SERVER_URL,
        url: '/user',
        headers: {
          Authorization: `Bearer ${token}`
        },
        data: { username, email, rol }
      });
      console.log('here data update user', data)
      dispatch({ type: UPDATE_USER, payload: data });
    } catch(err) {
      dispatch({ type: FAILURED_USER });
    } finally {
      dispatch({ type: FINISHED_LOADING_USER });
    }
  };
}

export function destroyUser() {
  return async function( dispatch ) {
    dispatch({ type: LOADING });
    try {
      const token = await AsyncStorage.getItem('token');
      await axios({
        method: 'DELETE',
        baseURL: SERVER_URL,
        url: '/user',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('here data get user')
      dispatch({ type: DESTROY_USER });
      await AsyncStorage.removeItem('token');
    } catch(err) {
      dispatch({ type: FAILURED_USER });
    } finally {
      dispatch({ type: FINISHED_LOADING_USER });
    }
  };
}
