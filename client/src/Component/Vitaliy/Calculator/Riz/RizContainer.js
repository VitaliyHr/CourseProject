import React, { useEffect, useState } from 'react';
import { getInputs, getInputs2, getResult } from '../../../../redux/Seloctors/Calculator';
import { setInputThunk, setInputThunk2, setResultThunk } from '../../../../redux/vitaliy';
import s from './Riz.module.css';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Riz from './Riz';
import { pushInputInState } from '../../../Common/Helpeers/ObjectToArry/CreateInputs';


const RizContainer = props => {
    let [count, setCount] = useState(2);
    useEffect(() => {
        props.setInputThunk(pushInputInState('a',count,s))
        props.setInputThunk2(pushInputInState('b',count,s))
    }, [count])
    let onSubmit = (form) => {
        props.setResultThunk("-", form)
    }
    return (
        <Riz {...props} count={count} onSubmit={onSubmit} setCount={setCount} />
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
    connect(mapStateToProps, { setInputThunk, setInputThunk2, setResultThunk, pushInputInState })
)(RizContainer)
