import React, { PureComponent, memo } from 'react'
import style from './Buy.module.css'
import { reduxForm } from 'redux-form'
import { createField } from '../../Common/Field/Field'
import { Input } from '../../Common/FormInput/Input'
import { require } from '../../../Validators/Validate'
import cx from 'classnames'
import Preloader from '../../Common/Preloader/Preloader'
import { compose } from 'redux'

const Buy = ({onChange,setCount,count,pizza,...props}) => {
    return (
        pizza ?
            <form onSubmit={props.handleSubmit}>
                <div className={style.wrapper}>
                    <div className={style.photo}><img src={pizza.photo} alt="NoImg"></img></div>
                    <div className={style.wrapperInWrapper}>
                        <div className={style.wrapperForm}>
                            <div className={style.description}>
                                <span className={style.name}>{pizza.name}</span>
                                <span className={style.price}>{count === 0 ? pizza.price : pizza.price * count} грн</span>
                            </div>
                            <div className={style.item100}>
                                <div className={cx(style.count, style.item)}>Кількість</div>
                                <div>{createField('Кількість', 'count', 'text', Input, [require], style.countInput, null, (e) => onChange(e))}</div>
                            </div>
                            <div className={style.item100}>
                                <div className={cx(style.address, style.item)}>Адреса доставки</div>
                                <div>{createField('Адреса', 'address', 'text', Input, [require], style.addressInput, null)}</div>
                            </div>
                            <div className={style.item100}>
                                <div className={cx(style.email, style.item)}>Ваш email для сформування чека</div>
                                <div>{createField('Email', 'email', 'text', Input, [require], style.emailInput, null)}</div>
                            </div>
                            {props.error ? <div className={style.error}>{props.error}</div> : ""}
                            <div className={style.submit}>
                                <button disabled={props.error}>Замовити</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            : <Preloader/>
    )
}

export default compose(
    reduxForm({ form: 'buy' }),
    memo
)(Buy)