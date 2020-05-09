import React from 'react'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

const Buy = React.memo((props)=>{
    debugger
    return <div>BUY</div>
})

export default compose(
    withRouter
)(Buy)