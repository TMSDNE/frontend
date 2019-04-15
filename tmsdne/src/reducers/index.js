import {
    LOAD_START,
    LOAD_SUCCESS,
    LOAD_FAILURE,
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE
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
        case FETCH_START: 
            return {
                ...state,
                fetchingData: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                title: payload,
                category: payload,
                text: payload,
                img: payload
            }
        case FETCH_FAILURE:
            return {
                error: payload.error
            }
        default:
            return state
    }
}