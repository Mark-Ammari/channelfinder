import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import ZipLookupContainer from './ZipLookupContainer/ZipLookupContainer';
import FuboPlansContainer from './FuboPlansContainer/FuboPlansContainer';
import { connect } from 'react-redux';
import FuboTabs from './Tabs/FuboTabs';
import Loader from './Loader/Loader';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ZipLookupContainer />
        <FuboTabs />
        {this.props.loading ? <Loader /> : null}
        {this.props.show ? <FuboPlansContainer /> : null}
        <div className="Separate"></div>
        <Footer />
      </div>
    );
  };
};


const mapStateToProps = state => {
  return {
      fuboPlans: state.fuboPlan.fuboPlanData,
      show: state.fuboPlan.show,
      loading: state.fuboPlan.loading
  };
};

export default connect(mapStateToProps)(App);
