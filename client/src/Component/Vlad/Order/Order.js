import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import s from './Order.module.css'
import { withRouter } from 'react-router-dom'

const Order = React.memo(({...props})=>{
        if(!props.order===null){
            let date = new Date(props.order.createdAt);
            let formatter = new Intl.DateTimeFormat("ukr", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric"
            })
            return (
                <div className={s.wrapper}>
                    <div className={s.wrapperText}>
                        <div className={s.check}>Ваш чек сформовано і відправлено на пошту</div>
                        <div className={s.name}>Назва : {props.order.pizza.name} </div>
                        <div className={s.price}>Загальна вартість : {props.order.price} </div>
                        <div className={s.count}>Кількість : {props.order.count} </div>
                        <div className={s.email}>Ваш email : {props.order.email} </div>
                        <div className={s.date}>{formatter.format(date)} </div>
                    </div>
                    
            </div>)
        }
        else{
            props.history.push('/hryhoriv-vlad')
        }
})


const mapStateToProps = (state) =>{
    return {
        order:state.pizzaCatalog.order
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps)
)(Order)