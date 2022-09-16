import * as type from '../types'

const initialState = {
    data: []
}

export default function Favourites(state = initialState, action){
    switch (action.type) {
        case type.ADD_TO_FAVOURITES:
            return {
                data: [...state.data, action.payload.data]
            }
        
        case type.REMOVE_FROM_FAVOURITES:
            return {
                data: action.payload.data
            }
             
        case type.FILTER_FROM_FAVOURITES:
            return {
                ...state,
                data: action.payload.data
            }

        default: return state
    }
}