import React from 'react'
import s from './Add.module.css'
import Matrix from '../../../Common/Matrix/Matrix';
import AddInput from '../../../Common/AddInput/AddInput';
import Result from '../../../Common/Result/Result';
import { reduxForm } from 'redux-form';

const Add = ({ inputs, inputs2, setCount, result, count, ...props }) => {
    return (
        <div className={s.wrapperVital}>
            <div className={s.wrapper}>
                <div className={s.wrapperForm}>
                    <Matrix type="A - " inputs={inputs} count={count} s={s} onSubmit={props.onSubmit} />
                    <div className={s.dia}>
                        +
                    </div>
                    <Matrix type="B - " inputs={inputs2} count={count} s={s} onSubmit={props.onSubmit} />
                </div>
                <AddInput s={s} count={count} setCount={setCount} />
                <button name='submit' type='submit' className={s.submit} onClick={() => { props.handleSubmit() }}>Вирахувати</button>
            </div>
            {props.error ? <div className={s.error}>{props.error}</div> : ""}
            <Result count={count} s={s} result={result}/> 
        </div>
    );
};


export default reduxForm({ form: 'calculator' })(Add)