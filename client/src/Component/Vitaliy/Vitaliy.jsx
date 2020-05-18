import React from 'react'
import { NavLink } from 'react-router-dom'

const Vital = React.memo((props)=>{
    return (
        <div>
            <div><a href="http://matan.kpi.ua/public/files/Posibnyk%20LA+AG.pdf"><button>Теорія</button></a></div>
            <div><NavLink to='/calculator'><button>Калькулятор</button></NavLink></div>
        </div>
    )
})

export const Vitaliy = (props)=>{
    return <Vital/>
}