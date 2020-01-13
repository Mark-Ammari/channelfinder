import React from 'react';
import classes from './FuboChannel.module.css';

const FuboChannel = props => {

  return (
    <div className={classes.card}>
      <div className={classes.media}>
        {props.local ? <span className={classes.local}>LOCAL</span> :null }
        <img
          src={props.img}
          alt="TV-Provider"
        />
      </div>
      <div className={classes.cardContent}>
          <p color="inherit" className={classes.channelName}>
            {props.channelname}
          </p>
          <p className={classes.callsign} >
            {props.callsign}
          </p>
      </div>
      <div className={classes.description}>
        <span>{props.description}</span>
      </div>
    </div>
  );
};

export default FuboChannel;