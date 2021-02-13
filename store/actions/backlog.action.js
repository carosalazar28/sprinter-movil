import axios from 'axios';
import {
  LOADING,
  FINISHED_LOADING,
  GET_BACKLOG,
  UPDATED_TASK,
  FAILURED_BACKLOG,
  CANCEL_TASK,
  CANCEL_NAMEBACKLOG,
  CREATE_TASK,
  SET_NAMETASK,
  SET_DESCRIPTIONTASK,
  SET_ASIGN,
  SET_STATUS,
  CANCEL_DESCRIPTIONTAKS,
  CANCEL_ASIGN,
  CANCEL_STATUS,
} from '../reducers/backlog.reducer';
import { SERVER_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function setName( payload ) {
  return function( dispatch ) {
    console.log(payload)
    dispatch({ type: SET_NAMETASK, payload });
  };
}

export function setDescription( payload ) {
  return function( dispatch ) {
    dispatch({ type: SET_DESCRIPTIONTASK, payload });
  };
}

export function setAsign( payload ) {
  return function( dispatch ) {
    dispatch({ type: SET_ASIGN, payload });
  };
}

export function setStatus( payload ) {
  return function( dispatch ) {
    console.log(payload)
    dispatch({ type: SET_STATUS, payload });
  };
}

export function cleanTask() {
  return function( dispatch ) {
    dispatch({ type: CANCEL_TASK });
  };
}

export function cleanBacklog() {
  return function( dispatch ) {
    dispatch({ type: CANCEL_NAMEBACKLOG });
  };
}

export function cleanForm() {
  return function( dispatch ) {
    dispatch({ type: CANCEL_NAMEBACKLOG });
    dispatch({ type: CANCEL_DESCRIPTIONTAKS });
    dispatch({ type: CANCEL_ASIGN });
    dispatch({ type: CANCEL_STATUS });
  };
}

export function getDataBacklog( id ) {
  return async function( dispatch ) {
    dispatch({ type: LOADING });
    try {
      const { data: { data } } = await axios({
        method: 'GET',
        baseURL: SERVER_URL,
        url: `/backlog/${id}`
      });
      dispatch({ type: GET_BACKLOG, payload: data });
      console.log('here get action');
    } catch(err) {
      dispatch({ type: FAILURED_BACKLOG });
    } finally {
      dispatch({ type: FINISHED_LOADING });
    }
  };
}

export function createTask( dataSend, id ) {
  return async function( dispatch ) {
    dispatch({ type: LOADING });
    try {
      const { data } = await axios({
        method: 'POST',
        baseURL: SERVER_URL,
        url: `/task/${id}`,
        data: { name: dataSend }
      });
      dispatch({ type: CREATE_TASK, payload: data });
    } catch(err) {
      dispatch({ type: FAILURED_BACKLOG });
    } finally {
      dispatch({ type: FINISHED_LOADING });
    }
  };
}

export function getDataTask() {
  return async function( dispatch ) {
    dispatch({ type: LOADING });
    try {
      const token = await AsyncStorage.getItem('token');
      const { data: { data }} = await axios({
        method: 'GET',
        baseURL: SERVER_URL,
        url: '/task/tasks',
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
      dispatch({ type: GET_BACKLOG, payload: data });
    } catch(err) {
      dispatch({ type: FAILURED_BACKLOG });
    } finally {
      dispatch({ type: FINISHED_LOADING });
    }
  };
}

export function getDataTaskId( id ) {
  return async function( dispatch ) {
    console.log(id);
    dispatch({ type: LOADING });
    try {
      const { data: { data }} = await axios({
        method: 'GET',
        baseURL: SERVER_URL,
        url: `/task/${id}`,
      });
      console.log('here action taks', data);
      dispatch({ type: SET_NAMETASK, payload: data.name });
      dispatch({ type: SET_DESCRIPTIONTASK, payload: data.description });
      dispatch({ type: SET_STATUS, payload: data.status });
      dispatch({ type: SET_ASIGN, payload: data.asign });
    } catch(err) {
      dispatch({ type: FAILURED_BACKLOG });
    } finally {
      dispatch({ type: FINISHED_LOADING });
    }
  };
}

export function updateTask( dataSend, id, index ) {
  const { name, description, asign, status } = dataSend;
  console.log('here update');
  return async function( dispatch ) {
    console.log(dataSend, id);
    dispatch({ type: LOADING });
    try {
      const { data: { data }} = await axios({
        method: 'PUT',
        baseURL: SERVER_URL,
        url: `/task/${id}`,
        data: { name, description, asign, status }
      });
      console.log('here action taks', data);
      dispatch({ type: UPDATED_TASK, index: index, payload: data});
    } catch(err) {
      dispatch({ type: FAILURED_BACKLOG });
    } finally {
      dispatch({ type: FINISHED_LOADING });
    }
  };
}
