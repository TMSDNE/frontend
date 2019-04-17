import axios from 'axios';

export const DATE_START = 'DATE_START';
export const DATE_SUCCESS = 'DATE_SUCCESS';
export const DATE_FAILURE = 'DATE_FAILURE';

export const chooseDate = data => dispatch => {
    dispatch({type: DATE_START})
    axios
    .post(`http://834cfcf9.ngrok.io/`, data)
    .then(res => {
        console.log(res)
        dispatch({type: DATE_SUCCESS, payload: res})
    })
    .catch(err => console.log(err))
}