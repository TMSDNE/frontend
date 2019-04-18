import {
    FETCH_ARTICLE_START,
    FETCH_ARTICLE_SUCCESS,
    FETCH_ARTICLE_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions';

const initialState = {
    article: {},
    fetchingData: false,
    error: ''
}

export const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case FETCH_ARTICLE_SUCCESS:
            return {
                ...state,
                article: payload
            }
        case FETCH_ARTICLE_FAILURE:
            return {
                error: payload.error
            }
        case LOGIN_START:
            return state
        case LOGIN_SUCCESS:
            return 
        default:
            return state
    }
}

