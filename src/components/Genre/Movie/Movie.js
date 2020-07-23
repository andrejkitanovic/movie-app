import React, { Component } from "react";
import classes from "./Movie.module.css";
import Info from "./MovieInfo/MovieInfo";

import { connect } from "react-redux";
import { selectMovie, hoveredMovie , resetMover} from "../../../store/actions/index";


class Movie extends Component {

  constructor(props){
    super(props)
    this.ref = React.createRef();
  }

  componentDidUpdate(){
    if(this.props.active){
      this.props.hoveredMovie(this.props.movie)

      let top = this.ref.current.getBoundingClientRect();
      let body = document.body.getBoundingClientRect();

      let scrollTop = top.y + Math.abs(body.y) - 100;
      window.scrollTo({top:scrollTop , behavior: "smooth"})
    }
  }

  componentDidMount(){
    if(this.props.active){
      this.props.hoveredMovie(this.props.movie)
    }
  }

  selectMovie = () => {
    this.props.selectedMovie(this.props.movie)
    this.props.resetMover()
  }

  

  render() {
    let currClasses = [classes.Movie];

    if (this.props.active) {
      currClasses.push(classes.active);
    }

    return (
      <div
        className={currClasses.join(" ")}
        onClick={this.selectMovie}
        ref={this.ref} 
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`}
          alt={this.props.movie.title}
        ></img>
        <h3>{this.props.movie.title}</h3>
        <Info rating={this.props.movie.vote_average} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectedMovie: (movie) => dispatch(selectMovie(movie)),
    hoveredMovie: (movie) => dispatch(hoveredMovie(movie)),
    resetMover: () => dispatch(resetMover())
  };
};

export default connect(null, mapDispatchToProps)(Movie);
