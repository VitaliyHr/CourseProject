import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import s from "./Calculator.module.css"

const Calculator = React.memo(({ inputs, inputs2, setCountFieldThunk, result, count, ...props }) => {
    return (
        <div className={s.wrapper}>
            <div className={s.wrapperButton}>
                <NavLink to="/add"><button className={s.butCalc}>Додавання</button></NavLink>
                <NavLink to="/riz"><button className={s.butCalc}>Віднімання</button></NavLink>
                <NavLink to="/mult"><button className={s.butCalc}>Множення на число</button></NavLink>
                <NavLink to="/multM"><button className={s.butCalc}>Множення матриць</button></NavLink>
                <NavLink to="/pow"><button className={s.butCalc}>Матрицю до степеня</button></NavLink>
            </div>
        </div>
    )
})

export default memo(Calculator)