import * as types from '../types'

export function callUpcomingAnimeAPI(page){
    return {
        type : types.UPCOMING_API_REQUEST,
        payload: {
            page: page
        }
    }
}

export function getUpcomingAnimeList(params){
    return {
        type : types.UPCOMING_API_SUCCESS,
        payload: {
            anime: params,
        }
    }
}

export function filterUpcomingAnimeList(params){
    return {
        type : types.UPCOMING_FILTER_ANIME_LIST,
        payload: {
            anime: params,
        }
    }
}

export function errorUpcomingAnimeList(error){
    return {
        type : types.UPCOMING_API_FAILURE,
        error : error
    }
}