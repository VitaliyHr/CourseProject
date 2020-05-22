import React from 'react'
import { reduxForm } from 'redux-form'
import s from './Calculator.module.css'

const Calculator = React.memo(({ inputs, inputs2, setCountFieldThunk, result, count, ...props }) => {
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
                        <select className={s.section} onChange={(e) => { props.onChange(e) }}>
                            <option>+</option>
                            <option>-</option>
                        </select>
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
                        setCountFieldThunk(count + 1)
                    }}>Додати стовпці</button>
                    <button disabled={count === 2} className={s.add} onClick={() => {
                        setCountFieldThunk(count - 1)
                    }}>Відняти стовпці</button>
                </div>
                <button name='submit' type='submit' className={s.submit} onClick={() => { props.handleSubmit() }}>Вирахувати</button>
            </div>
            {result.length/count===count?
                <div className={s.result}>
                <span>{result.length===0?' ':"Результат - "}</span>
                <div className={s.wrapperRes} style={{ width: count * 75 + 'px' }}>
                    {result.map(r=>(
                        <div className={s.itemR}>{r}</div>
                    ))}
                </div>
                </div>
                :" "
            }
            
        </div>
    )
})

export default reduxForm({ form: 'calculator' })(Calculator)