import React from 'react';
import Matrix from '../../../Common/Matrix/Matrix';
import AddInput from '../../../Common/AddInput/AddInput';
import Result from '../../../Common/Result/Result';
import s from "../Add/Add.module.css"
import { createField } from '../../../Common/Field/Field';
import { Input } from '../../../Common/FormInput/Input';
import { reduxForm } from 'redux-form';

const Pow = ({ inputs, setCount, result, count, ...props }) => {
    return (
        <div className={s.wrapperVital}>
            <div className={s.wrapper}>
                <div className={s.wrapperForm}>
                    <Matrix type="A - " inputs={inputs} count={count} s={s} onSubmit={props.onSubmit} />
                    <span>Степінь </span>
                    <div >{createField('', "pow", "number", Input, [], s.pow, 1)}</div>
                </div>
                <AddInput s={s} count={count} setCount={setCount} />
                <button name='submit' type='submit' className={s.submit} onClick={() => { props.handleSubmit() }}>Вирахувати</button>
            </div>
            {props.error ? <div className={s.error}>{props.error}</div> : ""}
            <Result count={count} s={s} result={result} />
        </div>
    );
};


export default reduxForm({ form: 'calculator' })(Pow);