import * as actionTypes from './actionTypes';
import Axios from 'axios';

export const fuboPlanStart = () => {
    return {
        type: actionTypes.FETCH_FUBO_PLANS_START
    };
};

export const fuboPlanFail = (err) => {
    return {
        type: actionTypes.FETCH_FUBO_PLANS_FAIL,
        err: err
    };
};

export const fuboPlanSuccess = (fuboPlanData) => {
    return {
        type: actionTypes.FETCH_FUBO_PLANS_SUCCESS,
        fuboPlanData: fuboPlanData,
    };
};

export const fetchFuboPlan = (postalCode) => {
    return dispatch => {
        dispatch(fuboPlanStart())
        Axios.get(`https://cors-anywhere.herokuapp.com/https://api.fubo.tv/plans/v1/location?homePostalCode=${postalCode}&currentPostalCode=${postalCode}&countrySlug=USA`)
        .then(res => {
            dispatch(fuboPlanSuccess(res.data))
        })
        .catch(err => { 
            console.log(err)
            dispatch(fuboPlanFail(err))
        })
    };
};

export const changeTabValueStart = () => {
    return {
        type: actionTypes.CHANGE_TAB_VALUE_START
    };
};

export const changeTabValue = (value) => {
    return {
        type: actionTypes.CHANGE_TAB_VALUE,
        value: value
    };
};

export const dispatchChangeTabValue = (value) => {
    return dispatch => {
        dispatch(changeTabValueStart);
        dispatch(changeTabValue(value))
    };
};