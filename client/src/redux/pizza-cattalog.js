import { Pizza } from "../api/api"
import { stopSubmit } from "redux-form";


const SET_PIZZAS = 'SET_PIZZAS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_PIZZA_BY_ID = 'SET_PIZZA_BY_ID'
const SET_ORDER_PIZZA = 'SET_ORDER_PIZZA'



let intuitionalState = {
    pizzas:[],
    currentPage:1,
    size:9,
    pizza:null,
    creatingData:null,
    order:null
}



const pizzaCatalogReducer = (state = intuitionalState, action)=>{
    switch (action.type){
        case SET_PIZZAS:{
            return {...state,pizzas:action.pizzas}
        }
        case SET_CURRENT_PAGE:{
            return{...state,currentPage:action.page}
        }
        case SET_PIZZA_BY_ID:{
            return{...state,pizza:action.pizza}
        }
        case SET_ORDER_PIZZA:{
            return {...state,order:action.order}
        }
        default: return state
    }
}

const setPizzas = (pizzas)=>({type:SET_PIZZAS,pizzas})
const setCurrentPage = (page)=>({type:SET_CURRENT_PAGE,page})
const setPizzaById = (pizza)=>({type:SET_PIZZA_BY_ID,pizza})
const setOrderedPizza = (order)=>({type:SET_ORDER_PIZZA,order})


export const buyPizzaThunk = (email,address,count,id)=>{
    return async (dispatch)=>{
        let response = await Pizza.orderPizza(email,address,count,id)
        if(response.data.success){
            dispatch(setOrderedPizza(response.data.order))
        }
        else{
            let error = response.data.error?response.data.error:"Some Error"
            dispatch(stopSubmit('buy',{_error:error}))
        }
    }
}

export const getPizzaByIdThunk=(id)=>{
    return async (dispatch)=>{
        const response = await Pizza.getPizzaById(id)
        if(response.data.success){
            dispatch(setPizzaById(response.data.pizza))
        }
        else{}
    }
}

export const setCurrentPageThunk = (page)=>{
    if(page === 0){
        page = 1;
    }
    return (dispatch)=>{
        dispatch(setCurrentPage(page))
    }
}

export const getPizzasThunk = ()=>{
    return async(dispatch)=>{
        const response = await Pizza.getPizza()
        if(response.data.success){
            dispatch(setPizzas(response.data.pizzas))
        }
        else{
            
        }
    }
}

export default pizzaCatalogReducer;