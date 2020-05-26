import React, { memo } from 'react';

const Result = ({ result, s, count, ...props }) => {
    return result.length === count 
    ?<div className={s.result}>
        <span>{result.length === 0 ? ' ' : "Результат - "}</span>
        <div className={s.wrapperRes} style={{ width: count * 75 + 'px' }}>
            {result.map(r => r.map(item=>(
                <div className={s.itemR}>{item}</div>
            )))}
        </div>
    </div>
    : " "
};


export default memo (Result);