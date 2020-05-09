import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Header.module.css'

const HeaderComponent = React.memo((props)=>{
    return (
        <div className={style.wrapper}>
        <NavLink to = '/hryhoriv-vlad' className={style.item1}>Григорів Владислав</NavLink>
        <NavLink to = '/hryhoriv-vitaliy' className={style.item2}>Григорів Віталій</NavLink>
        </div>
    )
})

export default HeaderComponent