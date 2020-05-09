import React from 'react'
import style from './Vlad.module.css'
import { reduxForm, Field } from 'redux-form'
import { createField } from '../Common/Field/Field'
import { Input } from '../Common/FormInput/Input'
import { require } from '../../Validators/Validate'


const Vlad = React.memo(({count,setCount, pizzas, ...props }) => {
    const { handleSubmit } = props;
    return (
        <div className={style.wrapper}>
            {pizzas.map(pizza => <form key={pizza.id} onSubmit={props.handleSubmit} className={style.wrapperPizza}>
                <div >
                <img className={style.photo} src={pizza.photo} alt="NoImg" />
                <div className={style.name}>{pizza.name}</div>
                <div className={style.buy}>
                    <div className={style.price}>{pizza.price} грн</div>
                    <span className={style.count}>
                        <span className={style.symbol} onClick={()=>setCount(count-1)}>&minus;</span>
                        {createField('', `count${pizza.name}`,'text', Input, [], style.countInput, count, (e) => props.onChange(e))}
                        <span className={style.symbol} onClick={()=>{
                            console.log(count)
                            setCount(count+1)}}>&#43;</span>
                        </span>
                    <button key={pizza.id}  className={style.order} onClick={handleSubmit(values => 
                            props.onSubmit({ 
                            ...values,
                            id:pizza.id
                        }))}>Замовити</button>
                </div>
                </div>
            </form>)}           
        </div >
    )
})

export const VladForm = reduxForm({ form: 'buy' })(Vlad)


