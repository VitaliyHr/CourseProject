import { getPizzaById } from "../../../redux/Seloctors/pizzaCatalogSeloctors"
import { getPizzaByIdThunk } from "../../../redux/pizza-cattalog"
import { compose } from "redux"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { BuyForm } from "./Buy"



const mapStateToProps = (state)=>{
    return{
        pizza:getPizzaById(state)
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps,{getPizzaByIdThunk})
)(BuyForm)