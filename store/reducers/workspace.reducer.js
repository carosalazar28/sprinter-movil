export const LOADING = 'LOADING';
export const FINISHED_LOADING = 'FINISHED_LOADING';

export const CREATE_WORKSPACE = 'CREATE_WORKSPACE';
export const FAILURED_WORKSPACE = 'FAILURED_WORKSPACE';
export const UPDATE_WORKSPACE = 'UPDATE_WORKSPACE';
export const GET_WORKSPACE = 'GET_WORKSPACE';
export const DELETE_WORKSPACE = 'DELETE_WORKSPACE';
export const ADD_TEAMMATE = 'ADD_TEAMMATE';

export const SET_NAME = 'SET_NAME';
export const SET_DESCRIPTION = 'SET_DESCRIPTION';
export const SET_WEEKS = 'SET_WEEKS';
export const SET_SPRINT = 'SET_SPRINT';
export const SET_TEAMMATES = 'SET_TEAMMATES';
export const SET_TEAMMATE = 'SET_TEAMMATE';
export const SET_MESSAGE = 'SET_MESSAGE';
export const SET_WORKSPACEID = 'SET_WORKSPACEID';
export const SET_BACKLOGID = 'SET_BACKLOGID';

export const CANCEL_NAME = 'CANCEL_NAME';
export const CANCEL_DESCRIPTION = 'CANCEL_DESCRIPTION';
export const CANCEL_WEEKS = 'CANCEL_WEEKS';
export const CANCEL_SPRINT = 'CANCEL_SPRINT';
export const CANCEL_TEAMMATES = 'CANCEL_TEAMMATES';
export const CANCEL_TEAMMATE = 'CANCEL_TEAMMATE';
export const CANCEL_MESSAGE = 'CANCEL_MESSAGE';

export const initialState = {
  name: '',
  description: '',
  weeks: '',
  sprint: 1,
  teammate: '',
  teammates: [],
  error: '',
  loading: false,
  message: '',
  workspacesList: [],
  workspaceId: '',
  backlogId: '',
};

function updateItemSplice(array, index, payload) {
  let newArray = array.slice();
  newArray.splice(index, 1, payload);
  return newArray;
}

function removeItemSplice(array, action) {
  let newArray = array.slice();
  newArray.splice(action.index, 1);
  return newArray;
}

function weeksString(key, payload) {
  if(!payload) {
    key = '';
  } else {
    key = payload;
  }
  return key;
}

export function workspaceReducer( state = initialState, action ) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case FINISHED_LOADING:
      return {
        ...state,
        loading: false
      };
    case CREATE_WORKSPACE:
      return {
        ...state,
        message: 'El workspace se ha creado con éxito',
        workspacesList: state.workspacesList.concat(action.payload)
      };
    case FAILURED_WORKSPACE:
      return {
        ...state,
        error: action.payload,
      };
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_DESCRIPTION:
      return {
        ...state,
        description: action.payload,
      };
    case SET_WEEKS:
      return {
        ...state,
        weeks: weeksString( state.weeks, action.payload),
      };
    case SET_SPRINT:
      return {
        ...state,
        sprint: action.payload,
      };
    case SET_TEAMMATES:
      return {
        ...state,
        teammates: state.teammates.concat(action.payload),
      };
    case SET_TEAMMATE:
      return {
        ...state,
        teammate: action.payload,
      };
    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload
      };
    case SET_WORKSPACEID:
      return {
        ...state,
        workspaceId: action.payload,
      };
    case SET_BACKLOGID:
      return {
        ...state,
        backlogId: action.payload,
      };
    case CANCEL_NAME:
      return {
        ...state,
        name: '',
      };
    case CANCEL_DESCRIPTION:
      return {
        ...state,
        description: '',
      };
    case CANCEL_WEEKS:
      return {
        ...state,
        weeks: '',
      };
    case CANCEL_SPRINT:
      return {
        ...state,
        sprint: 1,
      };
    case CANCEL_TEAMMATES:
      return {
        ...state,
        teammates: [],
      };
    case CANCEL_TEAMMATE:
      return {
        ...state,
        teammate: '',
      };
    case CANCEL_MESSAGE:
      return {
        ...state,
        message: '',
      };
    case GET_WORKSPACE:
      return {
        ...state,
        workspacesList: action.payload,
      };
    case UPDATE_WORKSPACE:
      return {
        ...state,
        workspacesList: updateItemSplice(state.workspacesList, action.index, action.payload)
      };
    case DELETE_WORKSPACE:
      return {
        ...state,
        workspacesList: removeItemSplice(state.workspacesList, action.payload)
      };
    case ADD_TEAMMATE:
      return {
        ...state,
        teammates: [ ...state.teammates, action.payload ]
      };
    default:
      return state;
  }
}
