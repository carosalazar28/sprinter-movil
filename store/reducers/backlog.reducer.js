export const LOADING = 'LOADING';
export const FINISHED_LOADING = 'FINISHED_LOADING';

export const GET_BACKLOG = 'GET_BACKLOG';
export const FAILURED_BACKLOG = 'FAILURED_BACKLOG';

export const SET_NAMETASK = 'SET_NAMETASK';
export const SET_DESCRIPTIONTASK = 'SET_DESCRIPTIONTASK';
export const SET_STATUS = 'SET_STATUS';
export const SET_ASIGN = 'SET_ASIGN';
export const SET_AUTHOR = 'SET_AUTHOR';

export const CREATE_TASK = 'CREATE_TASK';

export const CANCEL_TASK = 'CANCEL_TASK';
export const CANCEL_NAMEBACKLOG = 'CANCEL_NAMEBACKLOG';
export const CANCEL_DESCRIPTIONTAKS = 'CANCEL_DESCRIPTIONTASK';
export const CANCEL_STATUS = 'CANCEL_STATUS';
export const CANCEL_ASIGN = 'CANCEL_ASIGN';
export const CANCEL_AUTHOR = 'CANCEL_AUTHOR';

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
    case SET_DESCRIPTIONTASK: 
      return {
        ...state,
        description: action.payload,
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.payload,
      }
    case SET_ASIGN:
      return {
        ...state,
        asign: action.payload,
      }
    case SET_AUTHOR:
      return {
        ...state,
        author: action.payload,
      }
    case CANCEL_NAMEBACKLOG: 
      return {
        ...state,
        name: '',
      }
    case CANCEL_DESCRIPTIONTAKS:
      return {
        ...state,
        description: '',
      }
    case CANCEL_STATUS:
      return {
        ...state,
        status: '',
      }
    case CANCEL_ASIGN: 
      return {
        ...state,
        asign: '',
      }
    case CANCEL_AUTHOR:
      return {
        ...state,
        author: '',
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