import { Pizza } from "../api/api"

const SET_PIZZAS = 'SET_PIZZAS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'


let intuitionalState = {
    pizzas:[],
    currentPage:1,
    size:9
}



const pizzaCatalogReducer = (state = intuitionalState, action)=>{
    switch (action.type){
        case SET_PIZZAS:{
            return {...state,pizzas:action.pizzas}
        }
        case SET_CURRENT_PAGE:{
            return{...state,currentPage:action.page}
        }
        default: return state
    }
}

const setPizzas = (pizzas)=>({type:SET_PIZZAS,pizzas})
const setCurrentPage = (page)=>({type:SET_CURRENT_PAGE,page})

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