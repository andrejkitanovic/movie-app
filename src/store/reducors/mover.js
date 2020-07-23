import * as actionTypes from "../actions/actionsTypes";
import { updateObject } from "../utility";

const initialState = {
  hoveredMovie: null,
  mover: {
    row: 1,
    column: 1,
  },
  rows: 0,
  columns: Math.floor(document.body.clientWidth / 300),
};

const reducor = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HOVERED_MOVIE:
      return updateObject(state, { hoveredMovie: action.movie });
    case actionTypes.UPDATE_ROWS:
      return updateObject(state, { rows: action.rows });
    case actionTypes.UPDATE_WINDOWSIZE:
      const columns = Math.floor(action.width / 300);
      if (state.mover.column > columns) {
        return updateObject(state, {
          columns: columns,
          mover: { ...state.mover, column: columns },
        });
      } else return updateObject(state, { columns: columns });
    case actionTypes.MOVE_LEFT:
      if (state.mover.column - 1 > 0) {
        return updateObject(state, {
          mover: { ...state.mover, column: state.mover.column - 1 },
        });
      } else return state;
    case actionTypes.MOVE_RIGHT:
      if (state.mover.column + 1 <= state.columns) {
        return updateObject(state, {
          mover: { ...state.mover, column: state.mover.column + 1 },
        });
      } else return state;
    case actionTypes.MOVE_TOP:
      if (state.mover.row - 1 === 0 && action.movie) {
        return updateObject(state, {
          hoveredMovie: null,
          mover: { ...state.mover, row: state.mover.row - 1 },
        });
      }
      if (state.mover.row - 1 > 0) {
        return updateObject(state, {
          mover: { ...state.mover, row: state.mover.row - 1 },
        });
      } else return state;
    case actionTypes.MOVE_BOTTOM:
      if (state.mover.row + 1 <= state.rows) {
        return updateObject(state, {
          mover: { ...state.mover, row: state.mover.row + 1 },
        });
      } else return state;
    case actionTypes.RESET_MOVER:
      return updateObject(state, {
        hoveredMovie: null,
        mover: {
          row: 0,
          column: 1,
        },
      });
    case actionTypes.BEGGING_MOVER:
      return updateObject(state, {
        mover: {
          row: 1,
          column: 1,
        },
      });
    default:
      return state;
  }
};

export default reducor;
