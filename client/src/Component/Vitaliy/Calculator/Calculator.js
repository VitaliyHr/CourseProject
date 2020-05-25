import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

const Calculator = React.memo(({ inputs, inputs2, setCountFieldThunk, result, count, ...props }) => {
    return (
        <div>
            <NavLink to="/add"><button>Додавання</button></NavLink>
            <NavLink to="/riz"><button>Віднімання</button></NavLink>
        </div>
    )
})

export default memo(Calculator)