import * as types from '../types'

export function callAnimeAPI(page){
    return {
        type : types.API_REQUEST,
        payload: {
            page: page
        }
    }
}

export function getAnimeList(params){
    return {
        type : types.API_SUCCESS,
        payload: {
            anime: params,
        }
    }
}

export function filterAnimeList(params){
    return {
        type : types.FILTER_ANIME_LIST,
        payload: {
            anime: params,
        }
    }
}

export function endAnimeList(){
    return {
        type : types.API_LIST_END,
    }
}

export function errorAnimeList(error){
    return {
        type : types.API_FAILURE,
        error : error
    }
}