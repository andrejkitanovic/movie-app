import React , { Component} from "react";

import Aux from "../../hoc/Auxiliry/Auxiliry";

import Player from "../../components/Player/Player";
import Genre from "../../components/Genre/Genre";

import { connect } from "react-redux";

import {updateColumns , updateWindowSize} from "../../store/actions/index"

class MoviePlayer extends Component{

  // useEffect(() => {
  //   window.addEventListener('scroll', props.updateWindowSize(document.body.width));
  // });
  
  // useEffect(() => {
  //   return () => {
  //     window.removeEventListener('scroll', props.updateWindowSize(document.body.width));
  //   };
  // }, []);

  // componentDidMount(){
  //  document.addEventListener("resize", () => console.log(document.body.clientWidth));
  // }

  // componentWillUnmount(){
  //   document.removeEventListener("resize" ,() => console.log(document.body.clientWidth))
  // }

  componentDidUpdate(){
    // this.setColumns()
  }

  componentDidMount(){
    // this.setColumns()
    window.addEventListener("resize", () => this.props.updateWindowSize(document.body.clientWidth));
  }

  handleClick = () => {
    console.log('a')
  }

  setColumns = () => {
    let numberOfColumns = this.props.genres.length
    if(this.props.currentMovie){
      numberOfColumns++;
    }
    this.props.updateColumns(numberOfColumns);
  }


  render(){
    let player = this.props.currentMovie ? (
      <Player movie={this.props.currentMovie} />
    ) : null;
  
    let column = 0;
  
    let similarMovies = null;
  
    if (this.props.currentMovie) {
      column++
      similarMovies = (
        <Genre
          id={this.props.currentMovie.genre_ids[1]}
          title={"More like this"}
          column={column}
          rows={this.props.rows}
        />
      );
    }
  
    let genres = this.props.genres.map((genre) => {
      column++
      return <Genre key={genre.id} id={genre.id} title={genre.name} column={column} rows={this.props.rows}/>
    })
  
    this.props.updateColumns(column)
  
    // document.addEventListener('resize', () => {
    //   console.log('a')
    //   updateWindowSize(document.body.clientWidth)
    // })
  
    return (
      <Aux>
        {player}
        {similarMovies}
        {genres}
      </Aux>
    );
  }
  
};

const mapStateToProps = (state) => {
  return {
    ...state.movies,
    ...state.mover,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateColumns:(columns) => dispatch(updateColumns(columns)),
    updateWindowSize:(width) => dispatch(updateWindowSize(width))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MoviePlayer);
