import {
    LOAD_START,
    LOAD_SUCCESS,
    LOAD_FAILURE,
    FETCH_ARTICLE_START,
    FETCH_ARTICLE_SUCCESS,
    FETCH_ARTICLE_FAILURE
} from '../actions/index';

const initialState = {
    title: '',
    category: '',
    text: '',
    img: '',
    fetchingData: false,
    error: ''
}

export const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case LOAD_START: 
            return state
        case LOAD_SUCCESS: 
            return { 
                ...state,
                title: payload,
                category: payload,
                text: payload,
                img: payload
            }
        case LOAD_FAILURE:
            console.log(payload)
            return {
                ...state,
                error: payload.error
            }
        case FETCH_ARTICLE_START: 
            return {
                ...state,
                fetchingData: true
            }
        case FETCH_ARTICLE_SUCCESS:
            return {
                ...state,
                title: payload,
                category: payload,
                text: payload,
                img: payload
            }
        case FETCH_ARTICLE_FAILURE:
            return {
                error: payload.error
            }
        default:
            return state
    }
}