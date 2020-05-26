import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Vitaliy.module.css'


const Vital = React.memo((props)=>{
    return (
        <div className={s.wrapperBut}>
            <div><a href="/api/files/pdf/CoursePDFProject.pdf">
                <button className={s.bT}>Теорія</button>
                </a></div>
            <div><NavLink to='/calculator'><button className={s.bC}>Калькулятор</button></NavLink></div>
            <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap" rel="stylesheet"></link>
        </div>
    )
})

export const Vitaliy = (props)=>{
    return <Vital/>
}