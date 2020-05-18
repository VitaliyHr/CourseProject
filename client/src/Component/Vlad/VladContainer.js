import React from 'react'
import { getPizzas, getCurrentPage, getPizzaSize } from '../../redux/Seloctors/pizzaCatalogSeloctors'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { VladForm } from './Vlad'
import { getPizzasThunk, setCurrentPageThunk } from '../../redux/pizza-cattalog'
class Vlad extends React.Component{
    componentDidMount(){
        this.props.getPizzasThunk()
    }
    
    render(){
        return(
            <VladForm {...this.props} />
        )
    }
    
}

const mapStateToProps = (state)=>{
    return {
        pizzas:getPizzas(state),
        currentPage: getCurrentPage(state),
        size:getPizzaSize(state)
    }
}

export default compose(
    connect(mapStateToProps,{getPizzasThunk,setCurrentPageThunk}),
)(Vlad)