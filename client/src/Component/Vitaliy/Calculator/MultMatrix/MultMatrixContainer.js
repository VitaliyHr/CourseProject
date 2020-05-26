import React, { useState, useEffect } from 'react';
import { getInputs, getInputs2, getResult } from '../../../../redux/Seloctors/Calculator';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setInputThunk, setInputThunk2, setResultThunk } from '../../../../redux/vitaliy';
import { pushInputInState } from '../../../Common/Helpeers/ObjectToArry/CreateInputs';
import MultMatrix from './MultMatrix';
import s from "../Add/Add.module.css"

const MultMatrixContainer = props => {
    let [count, setCount] = useState(2);
    useEffect(() => {
        props.setInputThunk(pushInputInState('a', count, s))
        props.setInputThunk2(pushInputInState('b', count, s))
    }, [count])
    let onSubmit = (form) => {
        props.setResultThunk("*", form)
    }
    return (
        <MultMatrix {...props} count={count} onSubmit={onSubmit} setCount={setCount} />
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
)(MultMatrixContainer)