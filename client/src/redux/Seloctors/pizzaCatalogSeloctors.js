export const getPizzas = (state)=>{
    return state.pizzaCatalog.pizzas
}
export const getCurrentPage = (state)=>{
    return state.pizzaCatalog.currentPage
}
export const getPizzaSize = (state)=>{
    return state.pizzaCatalog.size
}
export const getPizzaById = (state)=>{
    return state.pizzaCatalog.pizza
}