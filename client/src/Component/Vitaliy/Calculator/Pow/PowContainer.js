import React, { useState, useEffect } from 'react';
import { getInputs, getInputs2, getResult } from '../../../../redux/Seloctors/Calculator';
import { setInputThunk, setInputThunk2, setResultThunk } from '../../../../redux/vitaliy';
import { pushInputInState } from '../../../Common/Helpeers/ObjectToArry/CreateInputs';
import s from "../Add/Add.module.css"
import Pow from './Pow';
import { compose } from 'redux';
import { connect } from 'react-redux';

const PowContainer = props => {
    let [count, setCount] = useState(2);
    useEffect(() => {
        props.setInputThunk(pushInputInState('a', count, s))
    }, [count])
    let onSubmit = ({ pow, ...form }) => {
        props.setResultThunk("*", form, pow, null)
    }
    return (
        <Pow {...props} count={count} setCount={setCount} onSubmit={onSubmit} />
    );
};

const mapStateToProps = (state) => {
    return {
        inputs: getInputs(state),
        inputs2: getInputs2(state),
        result: getResult(state)
    }
}

export default compose(
    connect(mapStateToProps, { setInputThunk, setInputThunk2, setResultThunk })
)(PowContainer)
