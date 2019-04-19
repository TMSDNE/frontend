import axios from 'axios';
import axiosAuth from '../auth/axiosAuth';


export const FETCH_ARTICLE_START = 'FETCH_ARTICLE_START';
export const FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS';
export const FETCH_ARTICLE_FAILURE = 'FETCH_ARTICLE_FAILURE';

export const getData = creds => dispatch => {
    dispatch({type: FETCH_ARTICLE_START})
    return axios
    .post(`https://tmsdne.herokuapp.com/api/articles`, creds)
    .then(res => {
        // console.log(res.data)
        window.localStorage.setItem('token', res.data.payload)
        dispatch({type: FETCH_ARTICLE_SUCCESS, payload: res.data.payload})
    })
    .catch(err => console.log(err))
}

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
    dispatch({type: LOGIN_START});
   return axios
    .post('https://tmsdne.herokuapp.com/api/auth/login', creds)
    .then(res => {
        window.localStorage.setItem('token', res.data.payload)
        dispatch({type: LOGIN_SUCCESS, payload: res.data.payload})
    })
    .catch(err => console.log(err))
}

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const signup = creds => dispatch => {
    dispatch({type: SIGNUP_START});
    return axios
    .post('https://tmsdne.herokuapp.com/api/auth/register', creds)
    .then(res => {
        dispatch({type: SIGNUP_SUCCESS, payload: res.data.payload})
    })
    .catch(err => console.log(err))
}