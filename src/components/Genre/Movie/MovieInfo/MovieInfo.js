import React from "react";
import classes from "./MovieInfo.module.css";

import Star from '../../../Icons/Star'
import Watched from '../../../Icons/Watched'
import Favourite from '../../../Icons/Favourite'

const MovieInfo = (props) => (
  <div className={classes.Info}>
    <span className={classes.Star}>
      <Star />
      {props.rating}
    </span>
    <span>
      <Watched />
    </span>
    <span>
      <Favourite />
    </span>
  </div>
);

export default MovieInfo;
