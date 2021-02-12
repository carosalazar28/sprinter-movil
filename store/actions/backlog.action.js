import axios from 'axios';
import { 
  LOADING,
  FINISHED_LOADING,
  GET_BACKLOG,
  FAILURED_BACKLOG,
  CANCEL_TASK,
  CANCEL_NAMEBACKLOG,
  CREATE_TASK,
  SET_NAMETASK  
} from '../reducers/backlog.reducer';
import { SERVER_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function setName( payload ) {
  return function( dispatch ) {
    dispatch({ type: SET_NAMETASK, payload })
  }
};

export function cleanTask() {
  return function( dispatch ) {
    dispatch({ type: CANCEL_TASK })
  }
};

export function cleanBacklog() {
  return function( dispatch ) {
    dispatch({ type: CANCEL_NAMEBACKLOG })
  }
}

export function getDataBacklog( id ) {
  return async function( dispatch ) {
    dispatch({ type: LOADING })
    try {
      const { data: { tasks } } = await axios({
        method: 'GET',
        baseURL: SERVER_URL,
        url: `/backlog/${id}`
      })
      dispatch({ type: GET_BACKLOG, payload: tasks })
      console.log('here get action')
    } catch(err) {
      dispatch({ type: FAILURED_BACKLOG })
    } finally {
      dispatch({ type: FINISHED_LOADING })
    }
  }
};

export function createTask( dataSend, id ) {
  return async function( dispatch ) {
    dispatch({ type: LOADING })
    console.log('here action', id, dataSend)
    try {
      const { data } = await axios({
        method: 'POST',
        baseURL: SERVER_URL,
        url: `/task/${id}`,
        data: { name: dataSend }
      })
      dispatch({ type: CREATE_TASK, payload: data })
      console.log('here create', data)
    } catch(err) {
      dispatch({ type: FAILURED_BACKLOG })
    } finally {
      dispatch({ type: FINISHED_LOADING })
    }
  }
};

export function getDataTask() {
  return async function( dispatch ) {
    dispatch({ type: LOADING })
    try {
      const token = await AsyncStorage.getItem('token')
      const { data: { data }} = await axios({
        method: 'GET',
        baseURL: SERVER_URL,
        url: '/task/tasks',
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      console.log('here action taks', data)
      dispatch({ type: GET_BACKLOG, payload: data })
    } catch(err) {
      dispatch({ type: FAILURED_BACKLOG })
    } finally {
      dispatch({ type: FINISHED_LOADING })
    }
  }
};