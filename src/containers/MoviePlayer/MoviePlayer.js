import React from "react";

import Aux from "../../hoc/Auxiliry/Auxiliry";

import Player from "../../components/Player/Player";
import Genre from "../../components/Genre/Genre";

import { connect } from "react-redux";

const moviePlayer = (props) => {
  let player = props.currentMovie ? (
    <Player movie={props.currentMovie} />
  ) : null;

  let similarMovies = props.currentMovie ? (
    <Genre
      id={props.currentMovie.genre_ids[1]}
      title={"More like this"}
    />
  ) : null;

  let genres = props.genres.map((genre) => (
    <Genre key={genre.id} id={genre.id} title={genre.name} />
  ));

  return (
    <Aux>
      {player}
      {similarMovies}
      {genres}
    </Aux>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state.movies,
  };
};

export default connect(mapStateToProps, null)(moviePlayer);
