import {
  LOADING,
  FINISHED_LOADING,
  CREATE_WORKSPACE,
  FAILURED_WORKSPACE,
  GET_WORKSPACE,
  UPDATE_WORKSPACE,
  DELETE_WORKSPACE,
  SET_NAME,
  SET_DESCRIPTION,
  SET_WEEKS,
  SET_SPRINT,
  SET_TEAMMATES,
  SET_TEAMMATE,
  CANCEL_NAME,
  CANCEL_DESCRIPTION,
  CANCEL_WEEKS,
  CANCEL_SPRINT,
  CANCEL_TEAMMATES,
  CANCEL_TEAMMATE,
  ADD_TEAMMATE,
} from '../reducers/workspace.reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SERVER_URL } from '@env';
import axios from 'axios';

export function setName( payload ) {
  return function( dispatch ) {
    dispatch({ type: SET_NAME, payload })
  }
};

export function setDescription( payload ) {
  return function( dispatch ) {
    dispatch({ type: SET_DESCRIPTION, payload })
  }
};

export function setWeeks( payload ) {
  return function( dispatch ) {
    dispatch({ type: SET_WEEKS, payload })
  }
};

export function setSprint( payload ) {
  return function( dispatch ) {
    dispatch({ type: SET_SPRINT, payload })
  }
};

export function setTeammates( payload ) {
  return function( dispatch ) {
    dispatch({ type: SET_TEAMMATES, payload })
  }
};

export function setTeammate( payload ) {
  return function( dispatch ) {
    dispatch({ type: SET_TEAMMATE, payload })
  }
};

export function onAddTeammate( payload ) {
  return function( dispatch ) {
    dispatch({ type: ADD_TEAMMATE, payload })
    dispatch({ type: CANCEL_TEAMMATE })
  }
};

export function cleanForm() {
  return function( dispatch ) {
    dispatch({ type: CANCEL_NAME })
    dispatch({ type: CANCEL_DESCRIPTION })
    dispatch({ type: CANCEL_WEEKS })
    dispatch({ type: CANCEL_SPRINT })
    dispatch({ type: CANCEL_TEAMMATES })
    dispatch({ type: CANCEL_TEAMMATE })
  }
};

export function getData() {
  return async function( dispatch ) {
    dispatch({ type: LOADING })
    try {
      const token = await AsyncStorage.getItem('token')
      const { data: {data} } = await axios({
        method: 'GET',
        baseURL: SERVER_URL,
        url: '/workspaces/workspace',
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      dispatch({ type: GET_WORKSPACE, payload: data })
    } catch (err) {
      dispatch({
        type: FAILURED_WORKSPACE,
        payload: 'Lo sentimos, en este momento no podemos conectarnos con el servidor',
      })
    } finally {
      dispatch({ type: FINISHED_LOADING })
    }
  }
};

export function getDataWorkspace(id) {
  return async function ( dispatch ) {
    dispatch({ type: LOADING })
    try {
      const token = await AsyncStorage.getItem('token');
      const { data } = await axios({
        method: 'GET',
        baseURL: SERVER_URL,
        url: `/workspaces/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      dispatch({ type: SET_NAME, payload: data.name})
      dispatch({ type: SET_DESCRIPTION, payload: data.description })
      dispatch({ type: SET_WEEKS, payload: data.weeks })
      dispatch({ type: SET_SPRINT, payload: data.sprint })
      dispatch({ type: SET_TEAMMATES, payload: data.teammates })
    } catch(err) {
      dispatch({
        type: FAILURED_WORKSPACE,
        payload: 'Lo sentimos, en este momento no podemos conectarnos con el servidor',
      })
    } finally {
      dispatch({ type: FINISHED_LOADING })
    }
  }
};

export function updateWorkspace( data, id, index ) {
  const { name, description, weeks, sprint, teammates } = data;
  return async function( dispatch ) {
    dispatch({ type: LOADING })
    try {
      const token = await AsyncStorage.getItem('token');
      const { data: { data } } = await axios({
        method: 'PUT',
        baseURL: SERVER_URL,
        url: `/workspaces/${id}`,
        headers: {
          Authorization: `Bearer ${token}`
        },
        data: { name, description, weeks, sprint, teammates }
      })
      dispatch({ type: UPDATE_WORKSPACE, index: index, payload: data })
    } catch(err) {
      dispatch({
        type: FAILURED_WORKSPACE,
        payload: 'Lo sentimos, en este momento no podemos conectarnos con el servidor',
      })
    } finally {
      dispatch({ type: FINISHED_LOADING })
    }
  }
};

export function deleteWorkspace(id, index) {
  return async function( dispatch ) {
    const token = await AsyncStorage.getItem('token');
    dispatch({ type: LOADING })
    try {
      await axios({
        method: 'DELETE',
        baseURL: SERVER_URL,
        url: `/workspaces/${id}`,
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      dispatch({ type: DELETE_WORKSPACE, payload: index })
    } catch(err) {
      dispatch({
        type: FAILURED_WORKSPACE,
        payload: 'Lo sentimos, en este momento no podemos conectarnos con el servidor',
      })
    } finally {
      dispatch({ type: FINISHED_LOADING})
    }
  }
};

export function createWorkspace( data ) {
  return async function( dispatch ) {
    const { name, description, weeks, sprint, teammates } = data
    const token = await AsyncStorage.getItem('token');
    dispatch({ type: LOADING })
    try {
      await axios({
        method: 'POST',
        baseURL: SERVER_URL,
        url: '/workspaces',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        data: { name, description, weeks, sprint, teammates }
      })
      dispatch({ type: CREATE_WORKSPACE, payload: data})
    } catch(err) {
      dispatch({
        type: FAILURED_WORKSPACE,
        payload: 'Lo sentimos, en este momento no podemos conectarnos con el servidor',
      })
    } finally {
      dispatch({ type: FINISHED_LOADING })
    }
  }
}

