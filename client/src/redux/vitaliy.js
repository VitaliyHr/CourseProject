
const SET_COUNT_FIELD = 'SET_COUNT_FIELD'
const SET_INPUTS = 'SET_INPUTS'
const SET_INPUTS_2 = 'SET_INPUTS_2'

let initialState = {
    countField:2,
    inputs:[],
    inputs2:[]
}

export const vitalPage = (state=initialState,action)=>{
    switch(action.type){
        case SET_COUNT_FIELD:{
            return{...state,countField:action.countField}
        }
        case SET_INPUTS:{
            return{...state,inputs:action.input}
        }
        case SET_INPUTS_2:{
            return{...state,inputs2:action.input}
        }
        default:return state
    }
}

const setCountField = (countField)=>({type:SET_COUNT_FIELD,countField})
const setInput = (input)=>({type:SET_INPUTS,input})
const setInput2 = (input)=>({type:SET_INPUTS_2,input})


export const setCountFieldThunk = (count)=>{
    return dispatch=>{
        dispatch(setCountField(count))
    }
}
export const setInputThunk = (input)=>{
    return dispatch=>{
        dispatch(setInput(input))
    }
}
export const setInputThunk2 = (input)=>{
    return dispatch=>{
        dispatch(setInput2(input))
    }
}