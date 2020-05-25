import React from 'react'
import s from './Add.module.css'
import { reduxForm } from 'redux-form';

const Add = ({ inputs, inputs2, setCountFieldThunk, setCount, result, count, ...props }) => {
    return (
        <div className={s.wrapperVital}>
            <div className={s.warning}>!!! Заповнюйте 2 поле в тому ж порядку що і перше</div>
            <div className={s.wrapper}>
                <div className={s.wrapperForm}>
                    <form onSubmit={props.handleSubmit} className={s.A}>
                        <span>A -</span>
                        <div className={s.wrapperA} id="wrapperA" style={{ width: count * 75 + 'px' }} open="(" close=")">
                            {inputs.map(i => i)}
                        </div>
                    </form>
                    <div className={s.dia}>
                        +
                    </div>
                    <form onSubmit={props.handleSubmit} className={s.A}>
                        <span>B -</span>
                        <div className={s.wrapperB} id="wrapperB" style={{ width: count * 75 + 'px' }} open="(" close=")">
                            {inputs2.map(i => i)}
                        </div>
                    </form>
                </div>
                <div className={s.wrapperBut}>
                    <button disabled={count === 4} className={s.add} onClick={() => {
                        setCount(count + 1)
                    }}>Додати стовпці</button>
                    <button disabled={count === 2} className={s.add} onClick={() => {
                        setCount(count - 1)
                    }}>Відняти стовпці</button>
                </div>
                <button name='submit' type='submit' className={s.submit} onClick={() => { props.handleSubmit() }}>Вирахувати</button>
            </div>
            {props.error ? <div className={s.error}>{props.error}</div> : ""}
            {result.length / count === count ?
                <div className={s.result}>
                    <span>{result.length === 0 ? ' ' : "Результат - "}</span>
                    <div className={s.wrapperRes} style={{ width: count * 75 + 'px' }}>
                        {result.map(r => (
                            <div className={s.itemR}>{r}</div>
                        ))}
                    </div>
                </div>
                : " "
            }
        </div>
    );
};


export default reduxForm({ form: 'calculator' })(Add)