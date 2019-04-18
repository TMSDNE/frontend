import axios from 'axios';

const FETCH_ARTICLE_START = 'FETCH_ARTICLE_START';
const FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS';
const FETCH_ARTICLE_FAILURE = 'FETCH_ARTICLE_FAILURE';

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