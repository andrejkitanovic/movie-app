import * as actionTypes from "./actionsTypes"

export const selectMovie = (movie) => {
    return {
        type:actionTypes.SELECT_MOVIE,
        movie:movie
    }
}

export const cancelMovie = () => {
    return {
        type:actionTypes.CANCEL_MOVIE
    }
}