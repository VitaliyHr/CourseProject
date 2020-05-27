import React, { useState, memo, useEffect } from 'react'
import { getPizzaById } from "../../../redux/Seloctors/pizzaCatalogSeloctors"
import { getPizzaByIdThunk, buyPizzaThunk } from "../../../redux/pizza-cattalog"
import { compose } from "redux"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import  BuyForm  from "./Buy"
import Order from '../Order/Order'

const BuyContainer = ({ pizza, getPizzaByIdThunk, buyPizzaThunk, error, ...props }) => {
    let [count, setCount] = useState(0)
    let onSubmit = async (form) => {
        await buyPizzaThunk(form.email, form.address, form.count, props.match.params.pizzaId)
    }
    let onChange = (e) => {
        if (e.target) setCount(e.target.value)
    }
    useEffect(() => {
        getPizzaByIdThunk(props.match.params.pizzaId)
    }, [props.match.params.pizzaId])
    if(props.order === null){
        return <BuyForm
        pizza={pizza} count={count}
        setCount={setCount} onChange={onChange}
        onSubmit={onSubmit} /> 
    }
    else {
        return <Order order={props.order}/>
    }
    
}


const mapStateToProps = (state) => {
    return {
        pizza: getPizzaById(state),
        order: state.pizzaCatalog.order
    }
}


export default compose(
    withRouter,
    connect(mapStateToProps, { getPizzaByIdThunk, buyPizzaThunk })
)(memo(BuyContainer))