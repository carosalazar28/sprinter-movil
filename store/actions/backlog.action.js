import axios from 'axios';
import {
  LOADING,
  FINISHED_LOADING,
  GET_BACKLOG,
  GET_TASKS,
  UPDATED_TASK,
  FAILURED_BACKLOG,
  CANCEL_TASK,
  CANCEL_NAMEBACKLOG,
  CREATE_TASK,
  SET_NAMETASK,
  SET_DESCRIPTIONTASK,
  SET_ASIGN,
  SET_STATUS,
  SET_BACKLOG,
  SET_TEAM,
  CANCEL_DESCRIPTIONTAKS,
  CANCEL_ASIGN,
  CANCEL_STATUS,
} from '../reducers/backlog.reducer';
import { SERVER_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function setName( payload ) {
  return function( dispatch ) {
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

export function cleanBacklogRender() {
  return function( dispatch ) {
    dispatch({ type: CANCEL_NAMEBACKLOG });
    dispatch({ type: CANCEL_TASK });
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
      const { data: { tasks } } = await axios({
        method: 'GET',
        baseURL: SERVER_URL,
        url: `/backlog/${id}`
      });
      console.log('here action', tasks)
      dispatch({ type: GET_BACKLOG, payload: tasks });
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
      console.log('here create task', data)
      dispatch({ type: SET_BACKLOG, payload: data.backlog });
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
      console.log(data)
      dispatch({ type: GET_TASKS, payload: data });
    } catch(err) {
      dispatch({ type: FAILURED_BACKLOG });
    } finally {
      dispatch({ type: FINISHED_LOADING });
    }
  };
}

export function getDataTaskId( id ) {
  return async function( dispatch ) {
    dispatch({ type: LOADING });
    try {
      const response = await axios({
        method: 'GET',
        baseURL: SERVER_URL,
        url: `/task/${id}`,
      });
      const { data } = response;
      dispatch({ type: SET_NAMETASK, payload: data.data.name });
      dispatch({ type: SET_DESCRIPTIONTASK, payload: data.data.description });
      dispatch({ type: SET_STATUS, payload: data.data.status });
      dispatch({ type: SET_ASIGN, payload: data.data.asign });
      dispatch({ type: SET_TEAM, payload: data.team });
    } catch(err) {
      dispatch({ type: FAILURED_BACKLOG });
    } finally {
      dispatch({ type: FINISHED_LOADING });
    }
  };
}

export function updateTask( dataSend, id, index ) {
  const { name, description, asign, status } = dataSend;
  return async function( dispatch ) {
    dispatch({ type: LOADING });
    try {
      const { data: { data }} = await axios({
        method: 'PUT',
        baseURL: SERVER_URL,
        url: `/task/${id}`,
        data: { name, description, asign, status }
      });
      dispatch({ type: UPDATED_TASK, index: index, payload: data});
    } catch(err) {
      dispatch({ type: FAILURED_BACKLOG });
    } finally {
      dispatch({ type: FINISHED_LOADING });
    }
  };
}
