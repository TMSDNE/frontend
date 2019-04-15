import axios from 'axios';

export const LOAD_START = 'LOAD_START';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_FAILURE = 'LOAD_FAILURE';

export const loadArticle = dispatch => {
    dispatch({type: LOAD_START})
    axios
    .get()
    .then(res => {
        console.log(res)
        dispatch({type: LOAD_SUCCESS, payload: res})  
    })
    .catch(err => console.log(err))
}

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const getData = dispatch => {
    dispatch({type: FETCH_START})
    axios
    .get()
    .then(res => {
        console.log(res)
        dispatch({type: LOAD_SUCCESS, payload: res})
    })
    .catch(err => console.log(err))
}