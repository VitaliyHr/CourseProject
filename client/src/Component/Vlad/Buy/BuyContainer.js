import React, { useState, useEffect } from 'react'
import { getPizzaById } from "../../../redux/Seloctors/pizzaCatalogSeloctors"
import { getPizzaByIdThunk , buyPizzaThunk} from "../../../redux/pizza-cattalog"
import { compose } from "redux"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { BuyForm } from "./Buy"
import Preloader from "../../Common/Preloader/Preloader"

const BuyContainer = React.memo(({pizza,getPizzaByIdThunk,...props})=>{
    let [count,setCount] = useState(0)
    let onSubmit=(form)=>{
        buyPizzaThunk(form.email,form.address,form.count,props.match.params.pizzaId)
    }
    let onChange=(e)=>{
        if(e.target)setCount(e.target.value)
    }
    if(pizza===null){
        getPizzaByIdThunk(props.match.params.pizzaId)
    }
    return pizza?<BuyForm 
    pizza={pizza} count={count}
    setCount = {setCount} onChange={onChange}
    onSubmit={onSubmit}/>:<Preloader/>
})


const mapStateToProps = (state)=>{
    return{
        pizza:getPizzaById(state)
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps,{getPizzaByIdThunk,buyPizzaThunk})
)(BuyContainer)