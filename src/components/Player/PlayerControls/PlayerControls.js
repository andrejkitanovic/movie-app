import React from "react";

import classes from "./PlayerControls.module.css";

import Star from "../../Icons/Star";
import Back from "../../Icons/Back";
import Play from "../../Icons/Play";

const playerControls = (props) => {
  let roundToTime = (seconds) => {
    if (seconds) {
      let secondsUpdated = Math.floor(seconds);
      let minutes = Math.floor(secondsUpdated / 60);
      secondsUpdated = secondsUpdated % 60;

      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      if (secondsUpdated < 10) {
        secondsUpdated = "0" + secondsUpdated;
      }

      return `${minutes}:${secondsUpdated}`;
    }
    return `00:00`;
  };

  let count = () => {
    let time = props.played;
    let precent = time * 100;

    return precent + "%";
  };

  return (
    <div className={classes.Controls}>
      <span className={classes.Back} onClick={props.back}>
        <Back />
      </span>
      <h3>{props.movie.title}</h3>
      <p>{props.movie.overview}</p>
      <span className={classes.Star}>
        <Star />
        {props.movie.vote_average}
      </span>
      <div className={classes.Loader}>
        <p>{roundToTime(props.currentTime)}</p>
        <div className={classes.Time}>
          <input
            type="range"
            min={0}
            max={0.99999}
            step="any"
            value={props.played}
            onChange={props.handleSeekChange}
            onMouseDown={props.handleSeekMouseDown}
            onMouseUp={props.handleSeekMouseUp}
          />
           <div className={classes.Played} style={{ width: count() }}></div>
        </div>

       
        <p>{roundToTime(props.duration)}</p>
      </div>
      <span className={classes.Play} onClick={props.play}>
        <Play />
      </span>
    </div>
  );
};

export default playerControls;
