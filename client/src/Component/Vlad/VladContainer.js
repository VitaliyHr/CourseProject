import React from 'react'
import { getPizzas } from '../../redux/Seloctors/pizzaCatalogSeloctors'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { VladForm } from './Vlad'

const Vlad = React.memo((props)=>{
    let onSubmit = (form)=>{
        debugger
    }
    let onChange = (e)=>{
        debugger
    }
    return(
        <VladForm {...props} onSubmit={onSubmit} onChange={onChange}/>
    )
})

const mapStateToProps = (state)=>{
    return {
        pizzas:getPizzas(state)
    }
}

export default compose(
    connect(mapStateToProps),
)(Vlad)