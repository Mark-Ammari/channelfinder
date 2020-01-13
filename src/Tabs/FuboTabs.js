import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { connect } from 'react-redux';
import * as action from '../store/action/fuboPlanAction';
class FuboTabs extends Component {

  state  = {
    value: 0
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue })
    this.props.onChangeValue(newValue)
  };

  render() {
    return (
      <Paper style={{ backgroundColor: '#3a3e3f' }} square>
        <Tabs
          value={this.state.value}
          indicatorColor="secondary"
          textColor="secondary"
          onChange={this.handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Basic" />
          <Tab label="Latino" />
          <Tab label="Latino Quarterly" />
        </Tabs>
      </Paper>
    );
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeValue: (value) => dispatch(action.dispatchChangeTabValue(value))
  };
};

export default connect(null, mapDispatchToProps)(FuboTabs);