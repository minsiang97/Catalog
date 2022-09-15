import * as types from '../types'

export function callCompleteAnimeAPI(page){
    return {
        type : types.COMPLETE_API_REQUEST,
        payload: {
            page: page
        }
    }
}

export function getCompleteAnimeList(params){
    return {
        type : types.COMPLETE_API_SUCCESS,
        payload: {
            anime: params,
        }
    }
}

export function filterCompleteAnimeList(params){
    return {
        type : types.COMPLETE_FILTER_ANIME_LIST,
        payload: {
            anime: params,
        }
    }
}

export function errorCompleteAnimeList(error){
    return {
        type : types.COMPLETE_API_FAILURE,
        error : error
    }
}