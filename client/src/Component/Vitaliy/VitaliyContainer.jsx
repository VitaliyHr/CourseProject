import React from 'react'
import { compose } from 'redux'
import { Vitaliy } from "./Vitaliy"

class VitaliyContainer extends React.Component{
    render(){
        return(
            <Vitaliy {...this.props}/>
        )
    }
}


export default compose()(VitaliyContainer)