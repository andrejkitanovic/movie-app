import * as actionTypes from "../actions/actionsTypes";
import { updateObject } from "../utility";

const initialState = {
    hoveredMovie: null,
    mover: {
        row:0,
        column:0
    },
    columns:0,
    rows:Math.floor(document.body.clientWidth / 300)
};



const reducor = (state = initialState, action) => {
  switch (action.type) {
      case actionTypes.UPDATE_COLUMNS:
        return updateObject(state,{columns:action.columns})
      case actionTypes.UPDATE_WINDOWSIZE:
          return updateObject(state,{rows:Math.floor(action.width / 300)})
    default:
      return state;
  }
};

export default reducor;
