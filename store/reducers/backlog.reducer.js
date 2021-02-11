export const LOADING = 'LOADING';
export const FINISHED_LOADING = 'FINISHED_LOADING';

export const GET_BACKLOG = 'GET_BACKLOG';

export const initialState = {
  task: [],
  loadingBacklog: false,
  name: '',
  description: '',
  status: '',
  asign: '',
  author: '',
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
    default:
      return state;
  }
};