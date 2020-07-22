import * as actionTypes from "./actionsTypes"

export const updateWindowSize = (width) => {
    return {
        type:actionTypes.UPDATE_WINDOWSIZE,
        width
    }
}

export const updateColumns = (columns) => {
    return {
        type:actionTypes.UPDATE_COLUMNS,
        columns
    }
}