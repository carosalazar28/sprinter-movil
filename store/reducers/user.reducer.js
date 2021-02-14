export const LOADING = 'LOADING';
export const FINISHED_LOADING_USER = 'FINISHED_LOADING_USER';

export const SET_USERNAME = 'SET_USERNAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_ROL = 'SET_ROL';

export const GET_USER = 'GET_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DESTROY_USER = 'DESTROY_USER';
export const FAILURED_USER = 'FAILURED_USER';

export const initialState = {
  username: '',
  email: '',
  password: '',
  rol: '',
  loading: false,
  user: [],
  message: '',
};

export function userReducer( state = initialState, action ) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case SET_ROL:
      return {
        ...state,
        rol: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case FAILURED_USER:
      return {
        ...state,
        message: 'Lo sentimos, no pudimos conectarnos con el servidor'
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case DESTROY_USER:
      return {
        ...state,
        user: [],
      };
    case FINISHED_LOADING_USER:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
