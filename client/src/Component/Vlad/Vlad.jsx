import React from 'react'
import style from './Vlad.module.css'
import { reduxForm } from 'redux-form'
import { NavLink } from 'react-router-dom'
import { Paginator } from '../Common/Paginator/Paginator'


const Vlad = React.memo(({currentPage,size,setCurrentPageThunk, pizzas, ...props }) => {
    const baseUrlForPhoto = 'http://localhost:5000'
    return (
        <div className={style.wrapper}>
            {pizzas.map((pizza,index) =>{
                if(index<size*currentPage && index>=(size*currentPage)-size){
                    return <div key={pizza.id} className={style.wrapperPizza}>
                    <img className={style.photo} src={baseUrlForPhoto+pizza.photo} alt="NoImg" />
                    <div className={style.name}>{pizza.name}</div>
                    <div className={style.buy}>
                        <div className={style.price}>{pizza.price} грн</div>
                        <button key={pizza.id} className={style.order}><NavLink to={`/buy/${pizza._id}`} >Замовити</NavLink></button>
                    </div>
                </div>
                }
                else{
                    return ""
                }
            })}
            <div className={style.wrapperPaginator}><Paginator totalCount={pizzas.length} size={size} currentPage={currentPage} setCurrentPageThunk={setCurrentPageThunk}/></div>
        </div >
    )
})

export const VladForm = reduxForm({ form: 'buy' })(Vlad)


