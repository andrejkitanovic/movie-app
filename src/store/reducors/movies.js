import * as actionTypes from "../actions/actionsTypes";
import { updateObject } from "../utility";

const initialState = {
  currentMovie: null,
  genres: [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
  ],
};

const reducor = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_MOVIE:
      window.scrollTo({top:0})
      return updateObject(state, { currentMovie: action.movie });
    case actionTypes.CANCEL_MOVIE:
      return updateObject(state, { currentMovie: null });
    default:
      return state;
  }
};

export default reducor;
