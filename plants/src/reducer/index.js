import {
  START_FETCHING,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  START_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  START_REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../actions';

const initialState = {
  id: '',
  register: { username: '' },
  login: { username: '' },
  isRegistering: false,
  isLoggingIn: false,
  Plants: [],
  isFetching: false,
  error: false,
  errorMsg: '',
  token: '',
};

const reducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case START_REGISTER:
      return {
        ...state,
        isRegistering: true,
        error: false,
        errorMsg: '',
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        register: {
          username: action.payload.username,
        },
        isRegistering: false,
        error: false,
        errorMsg: '',
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isRegistering: false,
        error: true,
        errorMsg: action.payload,
      };
    case START_LOGIN:
      return {
        ...state,
        isLoggingIn: true,
        error: false,
        errorMsg: '',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          username: action.payload.username,
        },
        isLoggingIn: false,
        error: false,
        errorMsg: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        error: true,
        errorMsg: action.payload,
      };
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        Plants: action.payload,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default reducer;
