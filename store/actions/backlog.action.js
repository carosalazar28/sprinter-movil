import axios from 'axios';
import { 
  LOADING,
  FINISHED_LOADING,
  GET_BACKLOG,
  FAILURED_BACKLOG,
  CANCEL_TASK,  
} from '../reducers/backlog.reducer';
import { SERVER_URL } from '@env';

export function cleanTask() {
  return function( dispatch ) {
    dispatch({ type: CANCEL_TASK })
  }
};

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
    } catch(err) {
      dispatch({ type: FAILURED_BACKLOG })
    } finally {
      dispatch({ type: FINISHED_LOADING })
    }
  }
};