import React, { memo } from 'react';

const AddInput = ({s,count,setCount,...props}) => {
    return (
        <div className={s.wrapperBut}>
        <button disabled={count === 4} className={s.add} onClick={() => {
            setCount(count + 1)
        }}>Додати стовпці</button>
        <button disabled={count === 2} className={s.add} onClick={() => {
            setCount(count - 1)
        }}>Відняти стовпці</button>
    </div>
    );
};


export default memo(AddInput);