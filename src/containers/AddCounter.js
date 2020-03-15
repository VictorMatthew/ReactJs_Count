import React from "react";
import Counter from "../components/Counter";
import {connect} from 'react-redux';

// import action
import {incAction, decAction} from '../actions';
import countReducers from "../reducers/countReceducer";

const mapStateToProps = (state) => {
    return ({
        count: state.countReducers ? state.countReducers : 0,
    })
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDecrement: () => {
            dispatch(decAction());
        },
        onIncrement: () => {
            dispatch(incAction());
        }
    }
};

const AddCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default AddCounter
