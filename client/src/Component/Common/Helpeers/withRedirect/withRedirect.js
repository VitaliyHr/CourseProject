import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

let mapPropsToState = (state)=>({
    order:state.pizzaCatalog.order
})

export const withRedirect = (Component)=>{
    class RedirectComponent extends React.Component {
        render(){
            if(this.props.order === null) return <Redirect to='/hryhoriv-vlad' />
            return <Component {...this.props}/>
        }
    }
    let ConnectRedirect = connect(mapPropsToState)(RedirectComponent)
    return ConnectRedirect;
}