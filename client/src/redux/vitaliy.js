import { Calculator } from "../api/api"
import { stopSubmit } from "redux-form"

const SET_INPUTS = 'SET_INPUTS'
const SET_INPUTS_2 = 'SET_INPUTS_2'
const SET_RESULT = 'SET_RESULT'

let initialState = {
    inputs:[],
    inputs2:[],
    result:[]
}

export const vitalPage = (state=initialState,action)=>{
    switch(action.type){
        case SET_INPUTS:{
            return{...state,inputs:action.input}
        }
        case SET_INPUTS_2:{
            return{...state,inputs2:action.input}
        }
        case SET_RESULT:{
            return{...state,result:action.result}
        }
        default:return state
    }
}

const setInput = (input)=>({type:SET_INPUTS,input})
const setInput2 = (input)=>({type:SET_INPUTS_2,input})
const setResult = (result)=>({type:SET_RESULT,result})


export const setInputThunk = (input)=>{
    return (dispatch)=>{
        dispatch(setInput(input))
    }
}
export const setInputThunk2 = (input)=>{
    return (dispatch)=>{
        dispatch(setInput2(input))
    }
}
export const setResultThunk = (method,matrix,pow=null,num=null)=>{
    return async dispatch=>{
        let res;
        if (method==="+"||method==="-")res = await Calculator.calculate(method,matrix);
        else if (method==="*" && pow)res = await Calculator.pow(matrix,pow);
        else if (method==="*" && num)res = await Calculator.mult(matrix,num);
        else if (method==="*")res = await Calculator.multMatrix(matrix);

        if(res.data.success){
            dispatch(setResult(res.data.result))
        }
        else{
            let error = res.data.error?res.data.error:"Some Error"
            dispatch(stopSubmit('calculator',{_error:error}))
        }
    }
}