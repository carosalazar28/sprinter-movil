export const LOADING = 'LOADING';
export const FINISHED_LOADING = 'FINISHED_LOADING';

export const CREATE_WORKSPACE = 'CREATE_WORKSPACE';
export const FAILURED_WORKSPACE = 'FAILURED_WORKSPACE';

export const SET_NAME = 'SET_NAME';
export const SET_DESCRIPTION = 'SET_DESCRIPTION';
export const SET_WEEKS = 'SET_WEEKS';
export const SET_SPRINT = 'SET_SPRINT';
export const SET_TEAMMATES = 'SET_TEAMMATES';


export const initialState = {
  name: '',
  description: '',
  weeks: '',
  sprint: 1,
  teammates: [],
  error: '',
  loading: false,
  message: '',
  workspacesList: [],
};

export function WorkspaceReducer( state = initialState, action ) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      }
    case FINISHED_LOADING:
      return {
        ...state,
        loading: false
      }
    case CREATE_WORKSPACE:
      return {
        ...state,
        message: action.payload,
        workspacesList: state.workspacesList.concat(action.payload)
      }
    case FAILURED_WORKSPACE: 
      return {
        ...state,
        error: action.payload,
      }
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      }
    case SET_DESCRIPTION: 
      return {
        ...state,
        description: action.payload,
      }
    case SET_WEEKS: 
      return {
        ...state,
        weeks: action.payload,
      }
    case SET_SPRINT: 
      return {
        ...state,
        sprint: action.payload,
      }
    case SET_TEAMMATES: 
      return {
        ...state,
        teammates: state.teammates.concat(action.payload),
      }
    
  }
}