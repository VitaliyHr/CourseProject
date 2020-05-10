import React from 'react'
import style from './Buy.module.css'
import { reduxForm } from 'redux-form'
import { createField } from '../../Common/Field/Field'
import { Input } from '../../Common/FormInput/Input'
import { require } from '../../../Validators/Validate'

class Buy extends React.Component{
    constructor(props){
        super(props);
        this.state = {count:0};
        
    }
    baseUrlForPhoto = 'http://localhost:5000'
    componentDidMount(){
        this.props.getPizzaByIdThunk(this.props.match.params.pizzaId)
    }
    
    onChange(e){
        debugger
    }
    onSubmit(form){
        debugger
    }
    render(){
        return(
        <form onSubmit={this.handleSubmit(this.onSubmit)}>
            <div className={style.wrapper}>
                <div className={style.photo}><img src={this.baseUrlForPhoto+this.props.pizza.photo} alt="NoImg"></img></div>
                <div className={style.name}>{this.props.pizza.name}</div>
                <div className={style.price}>{this.props.pizza.price}</div>
                <div>{createField('Кількість','count','text',Input,[require],style.countInput,null,(e)=>this.onChange(e))}</div>
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