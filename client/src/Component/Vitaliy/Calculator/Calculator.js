import React from 'react'
import { reduxForm } from 'redux-form'
import s from './Calculator.module.css'

const Calculator = React.memo(({ inputs, inputs2, setCountFieldThunk, count, ...props }) => {
    return (
        <div className={s.wrapper}>
            <div className={s.wrapperForm}>
                <form onSubmit={props.handleSubmit} className={s.A}>
                    <span>A -</span>
                    <div className={s.wrapperA} id="wrapperA" style={{ width: count * 75 + 'px' }} open="(" close=")">
                        {inputs.map(i => i)}
                    </div>
                </form>
                <form onSubmit={props.handleSubmit} className={s.A}>
                    <span>B -</span>
                    <div className={s.wrapperB} id="wrapperB" style={{ width: count * 75 + 'px' }} open="(" close=")">
                        {inputs2.map(i => i)}
                    </div>
                </form>
            </div>
            <div className={s.wrapperBut}>
                <button disabled={count===4} onClick={() => {
                    setCountFieldThunk(count + 1)
                }}>Додати</button>
                <button  disabled={count===2} onClick={() => {
                    setCountFieldThunk(count - 1)
                }}>Відняти</button>
            </div>
            <button name='submit' type='submit' className={s.submit} onClick={()=>{props.handleSubmit()}}>Вирахувати</button>
            {/* <div className={s.result} style={{display:}}></div> */}
        </div>
    )
})

export default reduxForm({ form: 'calculator' })(Calculator)