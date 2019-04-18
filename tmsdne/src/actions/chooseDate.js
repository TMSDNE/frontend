import axios from 'axios';

export const FETCH_DATE_START = 'FETCH_DATE_START';
export const FETCH_DATE_SUCCESS = 'FETCH_DATE_SUCCESS';
export const FETCH_DATE_FAILURE = 'FETCH_DATE_FAILURE';

export const chooseDate = data => dispatch => {
    dispatch({type: FETCH_DATE_START})
    axios
    .post(``, data)
    .then(res => {
        console.log(res)
        dispatch({type: FETCH_DATE_SUCCESS, payload: res})
    })
    .catch(err => console.log(err))
}