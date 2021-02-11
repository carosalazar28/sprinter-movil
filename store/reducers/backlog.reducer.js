export const LOADING = 'LOADING';
export const FINISHED_LOADING = 'FINISHED_LOADING';

export const GET_BACKLOG = 'GET_BACKLOG';
export const FAILURED_BACKLOG = 'FAILURED_BACKLOG';

export const CANCEL_TASK = 'CANCEL_TASK';

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
    default:
      return state;
  }
};