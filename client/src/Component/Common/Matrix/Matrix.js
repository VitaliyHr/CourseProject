import React from 'react';
import { reduxForm } from 'redux-form';

const Matrix = ({inputs, count, s, ...props }) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.A}>
            <span>{props.type} </span>
            <div className={s.wrapperA} id="wrapperA" style={{ width: count * 75 + 'px' }}>
                {inputs.map(i => i)}
            </div>
        </form>
    );
};


export default reduxForm({ form: 'calculator' })(Matrix)