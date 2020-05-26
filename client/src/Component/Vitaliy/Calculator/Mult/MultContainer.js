import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { getInputs, getResult } from '../../../../redux/Seloctors/Calculator';
import { connect } from 'react-redux';
import { setInputThunk, setInputThunk2, setResultThunk } from '../../../../redux/vitaliy'
import s from "../Add/Add.module.css"
import Mult from './Mult';
import { pushInputInState } from '../../../Common/Helpeers/ObjectToArry/CreateInputs';

const MultContainer = props => {
    let [count, setCount] = useState(2);
    useEffect(() => {
        props.setInputThunk(pushInputInState('a', count, s))
    }, [count])
    let onSubmit = ({ number, ...form }) => {
        debugger
        props.setResultThunk("*", form, null, number)
    }
    return (
        <Mult {...props} onSubmit={onSubmit} setCount={setCount} count={count} />
    );
};

const mapStateToProps = (state) => {
    return {
        inputs: getInputs(state),
        result: getResult(state)
    }
}

export default compose(
    connect(mapStateToProps, { setInputThunk, setInputThunk2, setResultThunk, pushInputInState })
)(MultContainer)