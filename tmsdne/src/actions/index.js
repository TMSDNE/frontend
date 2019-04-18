import axios from 'axios';

export const FETCH_ARTICLE_START = 'FETCH_ARTICLE_START';
export const FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS';
export const FETCH_ARTICLE_FAILURE = 'FETCH_ARTICLE_FAILURE';

export const getData = dispatch => {
    dispatch({type: FETCH_ARTICLE_START})
    
    axios
    .post(`https://tmsdne.herokuapp.com/api/articles`)
    .then(res => {
        console.log(res.data)
        dispatch({type: FETCH_ARTICLE_SUCCESS, payload: res.data})
    })
    .catch(err => console.log(err))
}

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
    dispatch({type: LOGIN_START});
   return axios
    .post('https://tmsdne.herokuapp.com/api/auth/login', cred)
    .then(res => {
        dispatch({type: LOGIN_SUCESS, payload: res.data})
    })
    .catch(err => console.log(err))
}