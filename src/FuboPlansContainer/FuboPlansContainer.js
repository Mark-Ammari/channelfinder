import React, { Component } from 'react';
import classes from './FuboPlansContainer.module.css';
import FuboChannel from './FuboChannel';
import { connect } from 'react-redux'

class FuboPlansContainer extends Component {

    render() {
        return (
            <div className={classes.FuboPlansContainer}>
                {this.props.fuboPlans.data[this.props.value]["default_package"]["channels"].map((channel, index) => {
                    return <FuboChannel description={channel.meta.description || "No Description."} key={index} local={channel.tags.includes("local")} img={channel.meta.networkLogoOnDarkUrl} channelname={channel.meta.networkName} callsign={channel.meta.callSign} />
                })}
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        fuboPlans: state.fuboPlan.fuboPlanData,
        value: state.fuboPlan.value
    };
};

export default connect(mapStateToProps)(FuboPlansContainer);