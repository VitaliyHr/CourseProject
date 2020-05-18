import React, { Suspense } from 'react'
import Preloader from '../Preloader/Preloader'

export const withSuspense = (Component,loading=false)=>{
    return (props)=>{
        return <Suspense fallback={loading?<Preloader/>:<></>}>
                <Component {...props}/>
            </Suspense>
    }
}