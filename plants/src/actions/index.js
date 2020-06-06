import axios from 'axios';
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

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
