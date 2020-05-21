import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Vitaliy.module.css'


const Vital = React.memo((props)=>{
    
    return (
        <div className={s.wrapperBut}>
            <div><a href="http://matan.kpi.ua/public/files/Posibnyk%20LA+AG.pdf">
                <button className={s.bT}>Теорія</button>
                </a></div>
            <div><NavLink to='/calculator'><button className={s.bC}>Калькулятор</button></NavLink></div>
        </div>
    )
})

export const Vitaliy = (props)=>{
    return <Vital/>
}