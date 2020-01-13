import React from 'react';
import classes from './FuboPlansHeader.module.css';

const fuboPlansHeader = (props) => {

  return (
    <div className={classes.FuboPlansHeader}>
        <span className={classes.FuboPlansPackage}>{props.package}</span>
        <span className={classes.FuboPlansChannelName}>{props.channelname}</span>
        <span className={classes.FuboPlansCallsign}>{props.callsign}</span>
    </div>
  );
};

export default fuboPlansHeader;