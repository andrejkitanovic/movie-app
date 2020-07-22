import * as actionTypes from "./actionsTypes";

export const updateWindowSize = (width) => {
  return {
    type: actionTypes.UPDATE_WINDOWSIZE,
    width,
  };
};

export const updateRows = (rows) => {
  return {
    type: actionTypes.UPDATE_ROWS,
    rows,
  };
};

export const hoveredMovie = (movie) => {
  return {
    type: actionTypes.HOVERED_MOVIE,
    movie: movie,
  };
};

export const moveLeft = () => {
    return {
        type: actionTypes.MOVE_LEFT
    }
}

export const moveRight = () => {
    return {
        type: actionTypes.MOVE_RIGHT
    }
}

export const moveTop = () => {
    return {
        type: actionTypes.MOVE_TOP
    }
}

export const moveBottom = () => {
    return {
        type: actionTypes.MOVE_BOTTOM
    }
}

export const resetMover = () => {
  return {
    type: actionTypes.RESET_MOVER
  }
}