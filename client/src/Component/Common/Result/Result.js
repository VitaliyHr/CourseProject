import React, { memo } from 'react';

const Result = ({ result, s, count, ...props }) => {
    return result.length / count === count 
    ?<div className={s.result}>
        <span>{result.length === 0 ? ' ' : "Результат - "}</span>
        <div className={s.wrapperRes} style={{ width: count * 75 + 'px' }}>
            {result.map(r => (
                <div className={s.itemR}>{r}</div>
            ))}
        </div>
    </div>
    : " "
};


export default memo (Result);