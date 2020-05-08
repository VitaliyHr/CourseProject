import React from 'react'
import style from './Vlad.module.css'
import { reduxForm, Field } from 'redux-form'
import { createField } from '../Common/Field/Field'
import { Input } from '../Common/FormInput/Input'
import { require } from '../../Validators/Validate'


const Vlad = React.memo(({ pizzas, ...props }) => {
    console.log(pizzas)
    return (
        <div className={style.wrapper}>
            {pizzas.map(pizza => <form key={pizza.id} onSubmit={props.handleSubmit} className={style.wrapperPizza}>
                <div >
                <img className={style.photo} src={pizza.photo} alt="NoImg" />
                <div className={style.name}>{pizza.name}</div>
                <div className={style.buy}>
                    <div className={style.price}>{pizza.price} грн</div>
                    <span className={style.count}>
                        <span className={style.symbol}>&minus;</span>
                        {createField('', `${pizza.id}`,'text', Input, [], style.countInput, null, (e) => props.onChange(e))}
                        <span className={style.symbol}>&#43;</span>
                        </span>
                    <button key={pizza.id}  className={style.order}>Замовити</button>
                </div>
                </div>
            </form>)}           
        </div >
    )
})

export const VladForm = reduxForm({ form: 'buy' })(Vlad)


