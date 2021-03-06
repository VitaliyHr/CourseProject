import React, { useState } from 'react'
import style from './Paginator.module.css'

export const Paginator = ({totalCount, size, currentPage, setCurrentPageThunk,portionSize=6}) => {
    let pagesCount = Math.ceil(totalCount / size);
    let pages = [];

    let [portionNumber] = useState(1);
    let leftPortionNumber = (portionNumber-1)*portionSize
    let rightPortionNumber = portionNumber*portionSize
    
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={style.activePage}>
        <span className={style.prev} onClick={(e) => {
            setCurrentPageThunk(currentPage-1)
        }}>&#8592;</span>
        {
            pages.map(p => {
                if (p >leftPortionNumber  && p < rightPortionNumber) {
                    return <span className={currentPage === p ? style.active : style.notActive}
                        onClick={(e) => { setCurrentPageThunk(p) }}>{p}</span >
                }
                else {
                    return null
                }
            })

        }
        <span className={style.next} onClick={(e) => {
           if(currentPage+1<=pagesCount) {setCurrentPageThunk(currentPage+1)}
        }}>&#8594;</span>
    </div>
}