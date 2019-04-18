import axios from 'axios';

export const FETCH_ARTICLE_START = 'FETCH_ARTICLE_START';
export const FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS';
export const FETCH_ARTICLE_FAILURE = 'FETCH_ARTICLE_FAILURE';

export const getData = dispatch => {
    dispatch({type: FETCH_ARTICLE_START})
    axios
    .get(`https://tmsdne.herokuapp.com/api/articles`)
    .then(res => {
        console.log(res)
        dispatch({type: FETCH_ARTICLE_SUCCESS, payload: res})
    })
    .catch(err => console.log(err))
}