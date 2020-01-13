import * as actionTypes from '../action/actionTypes';

const initialState = {
    loading: false,
    fuboPlanData: {},
    show: false,
    value: 0
};

const fuboPlanReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_FUBO_PLANS_START:
            return {
                ...state,
                loading: true,
                show: false
            };
        case actionTypes.FETCH_FUBO_PLANS_SUCCESS:
            return {
                ...state,
                loading: false,
                fuboPlanData: action.fuboPlanData,
                show: true,
            };
        case actionTypes.FETCH_FUBO_PLANS_FAIL:
            return {
                ...state,
                loading: false,
                show: false
            };
        case actionTypes.CHANGE_TAB_VALUE:
            return {
                ...state,
                value: action.value
            };
        default: 
            return state
    };
};

export default fuboPlanReducer;