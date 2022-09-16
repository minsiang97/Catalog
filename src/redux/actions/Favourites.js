import * as types from '../types'

export function addToFavourites(data){
    return {
        type : types.ADD_TO_FAVOURITES,
        payload: {
            data: data
        }
    }
}

export function removeFromFavourites(data){
    return {
        type : types.REMOVE_FROM_FAVOURITES,
        payload: {
            data: data
        }
    }
}

export function filterFromFavourites(data){
    return {
        type : types.FILTER_FROM_FAVOURITES,
        payload: {
            data: data
        }
    }
}
