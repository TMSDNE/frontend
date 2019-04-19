import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';

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

const reducer = (state = initialState, {type, payload}) => {
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
        default:
        return state
    }
}

export const store = createStore(reducer, applyMiddleware(thunk, logger))