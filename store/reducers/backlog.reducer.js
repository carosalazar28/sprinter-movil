export const LOADING = 'LOADING';
export const FINISHED_LOADING = 'FINISHED_LOADING';

export const GET_BACKLOG = 'GET_BACKLOG';
export const GET_TASKS = 'GET_TASKS';
export const FAILURED_BACKLOG = 'FAILURED_BACKLOG';
export const UPDATED_TASK = 'UPDATED_TASK';

export const SET_NAMETASK = 'SET_NAMETASK';
export const SET_DESCRIPTIONTASK = 'SET_DESCRIPTIONTASK';
export const SET_STATUS = 'SET_STATUS';
export const SET_ASIGN = 'SET_ASIGN';
export const SET_AUTHOR = 'SET_AUTHOR';
export const SET_BACKLOG = 'SET_BACKLOG';
export const SET_TEAM = 'SET_TEAM';

export const CREATE_TASK = 'CREATE_TASK';

export const CANCEL_TASK = 'CANCEL_TASK';
export const CANCEL_NAMEBACKLOG = 'CANCEL_NAMEBACKLOG';
export const CANCEL_DESCRIPTIONTAKS = 'CANCEL_DESCRIPTIONTASK';
export const CANCEL_STATUS = 'CANCEL_STATUS';
export const CANCEL_ASIGN = 'CANCEL_ASIGN';
export const CANCEL_AUTHOR = 'CANCEL_AUTHOR';

export const initialState = {
  task: [],
  taskBacklog: [],
  loadingBacklog: false,
  name: '',
  description: '',
  status: '',
  asign: '',
  author: '',
  message: '',
  backlogId: '',
  team: [],
};

function updateItemSplice(array, index, payload) {
  let newArray = array.slice();
  newArray.splice(index, 1, payload);
  return newArray;
}

export function backlogReducer( state = initialState, action ) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case FINISHED_LOADING:
      return {
        ...state,
        loading: false,
      };
    case GET_BACKLOG:
      return {
        ...state,
        taskBacklog: action.payload,
      };
    case GET_TASKS:
      return {
        ...state,
        task: action.payload
      };
    case UPDATED_TASK:
      return {
        ...state,
        task: updateItemSplice(state.task, action.index, action.payload),
      };
    case FAILURED_BACKLOG:
      return {
        ...state,
        message: 'lo sentimos, en este momento no podemos conectarnos con el servidor',
      };
    case CANCEL_TASK:
      return {
        ...state,
        taskBacklog: [],
      };
    case SET_NAMETASK:
      return {
        ...state,
        name: action.payload,
      };
    case SET_DESCRIPTIONTASK:
      return {
        ...state,
        description: action.payload,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case SET_ASIGN:
      return {
        ...state,
        asign: action.payload,
      };
    case SET_AUTHOR:
      return {
        ...state,
        author: action.payload,
      };
    case SET_BACKLOG:
      return {
        ...state,
        backlogId: action.payload,
      };
    case SET_TEAM:
      return {
        ...state,
        team: action.payload,
      };
    case CANCEL_NAMEBACKLOG:
      return {
        ...state,
        name: '',
      };
    case CANCEL_DESCRIPTIONTAKS:
      return {
        ...state,
        description: '',
      };
    case CANCEL_STATUS:
      return {
        ...state,
        status: '',
      };
    case CANCEL_ASIGN:
      return {
        ...state,
        asign: '',
      };
    case CANCEL_AUTHOR:
      return {
        ...state,
        author: '',
      };
    case CREATE_TASK:
      return {
        ...state,
        taskBacklog: state.task.concat(action.payload)
      };
    default:
      return state;
  }
}
