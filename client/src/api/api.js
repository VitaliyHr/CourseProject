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
    }
}