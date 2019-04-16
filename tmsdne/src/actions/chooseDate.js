import axios from 'axios';

export const DATE_START = 'DATE_START';
export const DATE_SUCCESS = 'DATE_SUCCESS';
export const DATE_FAILURE = 'DATE_FAILURE';

export const chooseDate = cred => dispatch => {
    dispatch({type: DATE_START})
    axios
    .get()
    .then(res => {
        console.log(res)
        dispatch({type: DATE_SUCCESS, payload: res})
    })
    .catch(err => console.log(err))
}