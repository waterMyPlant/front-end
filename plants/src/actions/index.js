import axios from 'axios';

export const START_REGISTER = 'START_REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const START_LOGIN = 'START_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const registerUser = (user) => (dispatch) => {
  dispatch({ type: START_REGISTER });
  axios
    .post('http://localhost:5000/api/auth/register', user)
    .then((res) => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: REGISTER_FAILURE, payload: error });
    });
};

export const loginUser = (user) => (dispatch) => {
  dispatch({ type: START_LOGIN });
  axios
    .post('http://localhost:5000/api/auth/login', user)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      localStorage.setItem('token', res.data.token);
    })
    .catch((error) => {
      dispatch({ type: LOGIN_FAILURE, payload: error });
      window.alert('Your email or password is incorrect');
    });
};

export const fetchPlants = () => (dispatch) => {
  dispatch({ type: START_FETCHING });
  axios
    .get('http://localhost:5000/api/plants')
    .then((res) => {
      console.log(res.data);
      return res;
    })
    .then((res) => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};
