import React, { memo, PureComponent } from 'react'
import Calculator from './Calculator'

class CalculatorContainer extends PureComponent {
    
    render(){
        return(
            <div><Calculator/></div>
        )
    }
}

export default memo(CalculatorContainer)