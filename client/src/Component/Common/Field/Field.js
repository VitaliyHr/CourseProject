import React from 'react'
import { Field } from 'redux-form'
export const createField = (placeholder,name,type='text',component,validate,className,value,onChange)=><Field
    placeholder = {placeholder} name = {name} 
    type = {type} component = {component} 
    validate = {validate} className = {className} defaultValue="0" value={value} onChange={onChange}/>
