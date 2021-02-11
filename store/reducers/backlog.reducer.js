export const LOADING = 'LOADING';
export const FINISHED_LOADING = 'FINISHED_LOADING';

export const GET_BACKLOG = 'GET_BACKLOG';
export const FAILURED_BACKLOG = 'FAILURED_BACKLOG';

export const SET_NAMETASK = 'SET_NAMETASK';

export const CREATE_TASK = 'CREATE_TASK';

export const CANCEL_TASK = 'CANCEL_TASK';
export const CANCEL_NAMEBACKLOG = 'CANCEL_NAMEBACKLOG';

export const initialState = {
  task: [],
  loadingBacklog: false,
  name: '',
  description: '',
  status: '',
  asign: '',
  author: '',
  message: '',
};

export function backlogReducer( state = initialState, action ) {
  switch (action.type) {
    case LOADING: 
      return {
        ...state,
        loading: true,
      }
    case FINISHED_LOADING:
      return {
        ...state,
        loading: false,
      }
    case GET_BACKLOG: 
      return {
        ...state,
        task: action.payload,
      }
    case FAILURED_BACKLOG:
      return {
        ...state,
        message: 'lo sentimos, en este momento no podemos conectarnos con el servidor',
      }
    case CANCEL_TASK:
      return {
        ...state,
        task: [],
      }
    case SET_NAMETASK:
      return {
        ...state,
        name: action.payload,
      }
    case CANCEL_NAMEBACKLOG: 
      return {
        ...state,
        name: '',
      }
    case CREATE_TASK:
      return {
        ...state,
        task: state.task.concat(action.payload)
      }
    default:
      return state;
  }
};