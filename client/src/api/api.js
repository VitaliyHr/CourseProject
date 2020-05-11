import * as axios from 'axios'
import qs from 'qs'

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
        const data = qs.stringify({email,address,count})
        return instance.post(`/pizza/buy/${id}`,data)
    }
}