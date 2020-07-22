import React, { PureComponent } from "react";
import classes from "./Genre.module.css";

import Movie from "./Movie/Movie";
import axios from "axios";

import Category from "../Icons/Category";
import Spinner from "../UI/Spinner/Spinner"

import { connect } from "react-redux";

class Genre extends PureComponent {
  state = {
    movies: [],
    loading: false
  };

  loadMovies = () => {
    this.setState({loading: true})
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${this.props.id}&api_key=d38aa8716411ef7d8e9054b34a6678ac`
      )
      .then((response) => {
        // const movies = response.data.results.slice(0, this.props.rows);
        this.setState({ movies: response.data.results ,loading: false});
      })
      .catch(error => {console.log(error)})
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
     this.loadMovies()
    }
  }

  componentDidMount() {
    this.loadMovies()
  }

  activeClass(column){
      if(this.props.row === this.props.mover.row && column === this.props.mover.column){
        return true
      }
      return false
  }

  render() {

    let movies = null;
    
    if (this.state.movies) {
      let updatedMoives = this.state.movies;
      updatedMoives = updatedMoives.slice(0,this.props.movies)
      let counter = 0;
      movies = updatedMoives.map((movie) => {
        counter++
        return <Movie key={movie.id} movie={movie} clicked={this.props.selectMovie} back={this.props.back} active={this.activeClass(counter)}/>
      });
    }

    if(this.state.loading){
      movies = <Spinner />
    }   

    return (
      <div className={classes.Genre}>
        <h2>
          <Category />
          {this.props.title}
        </h2>
        <div className={classes.MovieContainer}>{movies}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.mover
  };
};


export default connect(mapStateToProps, null)(Genre);
