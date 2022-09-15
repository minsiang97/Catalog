import * as type from '../types'

const initialState = {
    loading: false,
    moreLoading: false,
    error: null,
    moreError: null,
    isListEnd: false,
    data: []
}

export default function Airing(state = initialState, action){
    switch (action.type) {
        case type.API_REQUEST:
            if (action.payload.page === 1){
                return {
                    ...state,
                    loading: true
                }
            } else {
                return {
                    ...state,
                    moreLoading: true
                }
            }
        case type.API_SUCCESS:
            return {
                ...state,
                data: [...state.data, ...action.payload.anime],
                error: '',
                loading: false,
                moreLoading: false
            }
        case type.API_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
                moreLoading: false
            }
        case type.API_LIST_END:
            return {
                ...state,
                isListEnd: true,
                loading: false,
                moreLoading: false
            }
        case type.FILTER_ANIME_LIST:
            return {
                ...state,
                data: action.payload.anime
            }
        default: return state
    }
}