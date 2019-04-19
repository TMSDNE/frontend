import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';

import {
    FETCH_ARTICLE_START,
    FETCH_ARTICLE_SUCCESS,
    FETCH_ARTICLE_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    STORE_DATE_SUCCESS
} from '../actions';

const initialState = {
    article: {},
    fetchingData: false,
    error: '',
    token: '',
    date: '2019-04-01'
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case FETCH_ARTICLE_START:
            return {
                ...state,
                fetchingData: true
            }
        case FETCH_ARTICLE_SUCCESS:
            return {
                ...state,
                token: payload,
                article: payload
            }
        case FETCH_ARTICLE_FAILURE:
            return {
                error: payload.error
            }
        case STORE_DATE_SUCCESS:
            return {
                ...state,
                date: payload
            }
        default:
        return state
    }
}

export const store = createStore(reducer, applyMiddleware(thunk, logger))