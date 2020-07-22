import React from "react";
import classes from './Movie.module.css'
import Info from './MovieInfo/MovieInfo'

import {connect} from 'react-redux'
import {selectMovie} from "../../../store/actions/index"

const movie = props => {

    return (
      <div className={classes.Movie} onClick={() => props.selectedMovie(props.movie)}>
        <img
          src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
          alt={props.movie.title}
        ></img>
        <h3>{props.movie.title}</h3>
        <Info rating={props.movie.vote_average}/>
      </div>
    );
}

const mapDispatchToProps = dispatch => {
  return {
    selectedMovie:(movie) => dispatch(selectMovie(movie))
  }
}

export default connect(null,mapDispatchToProps)(movie);
