import { NEWS_LOADED, NEWS_LOADING } from '../actions'

const INITIAL_STATE = {
    loading: false,
    loaded: false,
    data: []
}

export default ( state = INITIAL_STATE, action ) => {

    switch( action.type ) {

        case NEWS_LOADING:
            return {
                ...state,
                loading: true,
                loaded: false
            }

        case NEWS_LOADED:
            return {
                ...state,
                loading: false,
                loaded: true,
                data: action.payload
            }

        default: 
            return state
    }
}