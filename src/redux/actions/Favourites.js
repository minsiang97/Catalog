import * as types from '../types'

export function addToFavourites(data){
    return {
        type : types.ADD_TO_FAVOURITES,
        payload: {
            data: data
        }
    }
}
