import React, { Component } from 'react';
import classes from './ZipLookupContainer.module.css';
import ZipLookupBox from './ZipLookupBox';
import ZipLookupBtn from './ZipLookupBtn';
import { connect } from "react-redux"
import * as actions from '../store/action/fuboPlanAction';

class zipLookupContainer extends Component {
    state = {
        postalCode: "",
        show: false,
        isValid: true
    }

    isValidZipHandler = zip => {
        return /^\d{5}(-\d{4})?$/.test(zip);
    }

    zipLookupHandler = (e) => {
        this.setState({
            postalCode: e.target.value, 
        })
    }

    zipFetchHandler = () => {
        if (this.isValidZipHandler(this.state.postalCode)) {
            this.props.onFetchFuboPlans(this.state.postalCode)
            this.setState(prevState => ({
                show: !prevState.show,
                isValid: true
            }))
        } else {
            this.setState({
                isValid: false
            })
        }
    }
    handleKeyPress = (e) => {
        if (this.isValidZipHandler(this.state.postalCode)) {
            if(e.key === 'Enter'){
                this.props.onFetchFuboPlans(this.state.postalCode)
                this.setState(prevState => ({
                    show: !prevState.show,
                    isValid: true
                }))
              }
        } else {
            this.setState({
                isValid: false
            })
        }
    }

    render() {
        return (
            <div className={classes.Container}>
                <p className={classes.Info}>Please enter a zip code to search for available plans and channels.</p>
                <div className={classes.ZipLookupContainer}>
                    <p className={classes.Zipcode}>ZIPCODE</p>
                    <div className={classes.ZipLookup}>
                        <ZipLookupBox placeholder="000000" value={this.state.postalCode} onChange={this.zipLookupHandler} onKeyPress={this.handleKeyPress}/>
                        <ZipLookupBtn onClick={this.zipFetchHandler} />
                    </div>
                    {this.state.isValid ? null : <p className={classes.Error}>Please enter a valid zipcode</p>}
                </div>
                <p className={classes.Info}>Here are the plans and channels available in postal code {this.state.postalCode}</p>
            </div>
        );
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchFuboPlans: (postalCode) => dispatch(actions.fetchFuboPlan(postalCode))
    };
};

export default connect(null, mapDispatchToProps)(zipLookupContainer);