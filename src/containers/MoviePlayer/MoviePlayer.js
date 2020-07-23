import React, { Component } from "react";

import Aux from "../../hoc/Auxiliry/Auxiliry";

import Player from "../../components/Player/Player";
import Genre from "../../components/Genre/Genre";

import Video2 from "../../assets/trailer2.mp4";

import { connect } from "react-redux";

import {
  updateWindowSize,
  updateRows,
  moveLeft,
  moveRight,
  moveTop,
  moveBottom,
  selectMovie,
  resetMover,
} from "../../store/actions/index";

class MoviePlayer extends Component {
  componentDidUpdate() {
    this.setRows();
  }

  componentDidMount() {
    this.setRows();
    window.addEventListener("resize", () =>
      this.props.updateWindowSize(document.body.clientWidth)
    );
    window.addEventListener("keydown", this.keyPressHandle);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", () =>
      this.props.updateWindowSize(document.body.clientWidth)
    );
    window.removeEventListener("keydown", this.keyPressHandle);
  }

  keyPressHandle = (e) => {
    switch (e.key) {
      case "Enter":
        if (this.props.hoveredMovie) {
          e.preventDefault();
          let movie = this.props.hoveredMovie;
          this.props.resetMover();
          this.props.selectedMovie(movie);
        }
        break;
      case "ArrowLeft":
        e.preventDefault();
        this.props.decreaseColumn();
        break;
      case "ArrowRight":
        e.preventDefault();
        this.props.increaseColumn();
        break;
      case "ArrowUp":
        e.preventDefault();
        this.props.decreaseRow(this.props.currentMovie ? true : false);
        if(this.props.mover.row === 0){
          window.scrollTo({top:0 , behavior: "smooth"})
        }
        break;
      case "ArrowDown":
        e.preventDefault();
        this.props.increaseRow();
        break;
      default:
        break;
    }
  };

  setRows = () => {
    let numberOfRows = this.props.genres.length;
    if (this.props.currentMovie) {
      numberOfRows++;
    }
    this.props.updateRows(numberOfRows);
  };

  render() {
    let player = this.props.currentMovie ? (
      <Player movie={this.props.currentMovie} url={Video2}/>
    ) : null;

    let row = 0;

    let similarMovies = null;

    if (this.props.currentMovie) {
      row++;
      similarMovies = (
        <Genre
          id={this.props.currentMovie.genre_ids[1]}
          title={"More like this"}
          row={row}
          movies={this.props.columns}
        />
      );
    }

    let genres = this.props.genres.map((genre) => {
      row++;
      return (
        <Genre
          key={genre.id}
          id={genre.id}
          title={genre.name}
          row={row}
          movies={this.props.columns}
        />
      );
    });

    return (
      <Aux>
        {player}
        {similarMovies}
        {genres}
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.movies,
    ...state.mover,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateRows: (rows) => dispatch(updateRows(rows)),
    updateWindowSize: (width) => dispatch(updateWindowSize(width)),
    decreaseColumn: () => dispatch(moveLeft()),
    increaseColumn: () => dispatch(moveRight()),
    decreaseRow: (boolean) => dispatch(moveTop(boolean)),
    increaseRow: () => dispatch(moveBottom()),
    selectedMovie: (movie) => dispatch(selectMovie(movie)),
    resetMover: () => dispatch(resetMover()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviePlayer);
