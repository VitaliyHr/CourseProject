import * as axios from 'axios'

const instance = axios.create({
    baseURL:'http://localhost:5000',
    headers:{}
})

export const Pizza = {
    getPizza () {
        return instance.get('/pizza')
    },
    getPizzaById(id){
        return instance.get(`/pizza/${id}`)
    },
    orderPizza(email,address,count,id){
        return instance.post(`/pizza/buy/${id}`,JSON.stringify({email,address,count}))
    }
}