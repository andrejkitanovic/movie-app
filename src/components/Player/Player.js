import React, { Component } from "react";
import ReactPlayer from "react-player";

import classes from "./Player.module.css";

import Video from "../../assets/trailer2.mp4";
import Overlay from "../UI/Overlay/Overlay";
import PlayerControls from "./PlayerControls/PlayerControls";

import { cancelMovie } from "../../store/actions/index";
import { connect } from "react-redux";

class Player extends Component {
  state = {
    playing: false,
    duration: 0,
    inactive: 0,
    played: 0,
  };

  resetInactivity = () => {
    return this.setState({ inactive: 0 });
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const time = this.state.inactive;
      return this.setState({ inactive: time + 1 });
    }, 1000);
    document.addEventListener("mousemove", this.resetInactivity);
    document.addEventListener("keydown", this.keyPressHandle);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    document.removeEventListener("mousemove", this.resetInactivity);
    document.removeEventListener("keydown", this.keyPressHandle);
  }

  keyPressHandle = (e) => {
    switch (e.key) {
      case "Enter":
        if(this.props.mover.row === 0){
          this.playToggleHandler()
          this.resetInactivity()
        }
       
        break;
      default:
        break;
    }
  };

  playToggleHandler = () => {
    const current = this.state.playing;
    this.setState({ playing: !current });
  };

  handleProgress = (state) => {
    if (!this.state.seeking) {
      this.setState(state);
    }
  };

  handleDuration = (duration) => {
    this.setState({ duration });
  };

  handleSeekMouseDown = (e) => {
    this.setState({ seeking: true });
  };

  handleSeekChange = (e) => {
    this.setState({ played: parseFloat(e.target.value) });
  };

  handleSeekMouseUp = (e) => {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  };

  ref = (player) => {
    this.player = player;
  };

  render() {
    let playerControls =
      this.state.inactive < 4 ? (
        <PlayerControls
          loaded={this.state.loadedSeconds}
          currentTime={this.state.playedSeconds}
          duration={this.state.duration}
          movie={this.props.movie}
          back={this.props.cancelMovie}
          play={this.playToggleHandler}
          played={this.state.played}
          handleSeekChange={this.handleSeekChange}
          handleSeekMouseDown={this.handleSeekMouseDown}
          handleSeekMouseUp={this.handleSeekMouseUp}
        />
      ) : null;

    return (
      <div className={classes.Player}>
        <ReactPlayer
          ref={this.ref}
          width="100%"
          height="90vh"
          url={Video}
          playing={this.state.playing}
          onProgress={this.handleProgress}
          onDuration={this.handleDuration}
        />
        <Overlay show={this.state.inactive < 4} />
        {playerControls}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.mover
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cancelMovie: () => dispatch(cancelMovie()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
