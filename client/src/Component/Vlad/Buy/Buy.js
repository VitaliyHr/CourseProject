import React, { useState } from 'react'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

const Buy = React.memo((props)=>{
    const [count,setCount] = useState(0)
    return(
        <div>BUY</div>
    )
})
   


export default compose(
    withRouter
)(Buy)