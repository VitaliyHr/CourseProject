import React, { useState } from 'react'
import { getPizzas } from '../../redux/Seloctors/pizzaCatalogSeloctors'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { VladForm } from './Vlad'

const Vlad = React.memo((props)=>{
    let [count,setCount] = useState(0)
    let onSubmit = (form)=>{
        debugger
    }
    let onChange = (e)=>{
        if(e.target){
            setCount(e.target.value)
        }
        
    }
    return(
        <VladForm {...props} onSubmit={onSubmit} onChange={onChange} count={count} setCount={setCount}/>
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