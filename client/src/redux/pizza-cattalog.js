

let intuitionalState = {
    pizzas:[
        {id:1,name:"Tomato",price:120,photo:'https://images.pizza33.ua/products/menu/ADASfffDUEnPlaSLE3JLAnhXpCaqI4Mm.png'},
        {id:2,name:"Peperoni",price:200,photo:'https://images.pizza33.ua/products/menu/ADASfffDUEnPlaSLE3JLAnhXpCaqI4Mm.png'},
        {id:3,name:"Four Season",price:300,photo:'https://images.pizza33.ua/products/menu/ADASfffDUEnPlaSLE3JLAnhXpCaqI4Mm.png'},
        {id:4,name:"Solo",price:100,photo:'https://images.pizza33.ua/products/menu/ADASfffDUEnPlaSLE3JLAnhXpCaqI4Mm.png'},
        {id:5,name:"Meat pizza",price:120,photo:'https://images.pizza33.ua/products/menu/ADASfffDUEnPlaSLE3JLAnhXpCaqI4Mm.png'},
        {id:6,name:"For Children",price:120,photo:'https://images.pizza33.ua/products/menu/ADASfffDUEnPlaSLE3JLAnhXpCaqI4Mm.png'},
        {id:7,name:"Bulka pizza",price:120,photo:'https://images.pizza33.ua/products/menu/ADASfffDUEnPlaSLE3JLAnhXpCaqI4Mm.png'},
        {id:8,name:"Firm pizza",price:120,photo:'https://images.pizza33.ua/products/menu/ADASfffDUEnPlaSLE3JLAnhXpCaqI4Mm.png'},
        {id:9,name:"Pineapple pizza",price:120,photo:'https://images.pizza33.ua/products/menu/ADASfffDUEnPlaSLE3JLAnhXpCaqI4Mm.png'}
    ]
}

const pizzaCatalogReducer = (state = intuitionalState, action)=>{
    switch (action.type){
        default: return state
    }
}

export default pizzaCatalogReducer;