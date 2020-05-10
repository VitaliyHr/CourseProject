import React from 'react'
import style from './Buy.module.css'
import { reduxForm } from 'redux-form'
import { createField } from '../../Common/Field/Field'
import { Input } from '../../Common/FormInput/Input'
import { require } from '../../../Validators/Validate'

class Buy extends React.Component{
    baseUrlForPhoto = 'http://localhost:5000'
    
    render(){
        return(
        <form onSubmit={this.props.handleSubmit}>
            <div className={style.wrapper}>
                <div className={style.photo}><img src={this.baseUrlForPhoto+this.props.pizza.photo} alt="NoImg"></img></div>
                <div className={style.name}>{this.props.pizza.name}</div>
                <div className={style.price}>{this.props.count===0?this.props.pizza.price:this.props.pizza.price*this.props.count}</div>
                <div>{createField('Кількість','count','text',Input,[require],style.countInput,null,(e)=>this.props.onChange(e))}</div>
                <div className={style.address}>Адреса доставки</div>
                <div>{createField('Адреса','address','text',Input,[require],style.addressInput,null)}</div>
                <div className={style.email}>Ваш email для сформування чека</div>
                <div>{createField('Email','email','text',Input,[require],style.emailInput,null)}</div>
                <button>Заказати</button>
            </div>
        </form>
    )
    }
    
}
export const BuyForm = reduxForm({form:"buy"})(Buy)