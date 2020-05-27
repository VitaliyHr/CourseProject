import * as axios from 'axios'

const instance = axios.create({
    headers: {
        'Content-Type': 'application/json'
    }
})


export const Pizza = {
    getPizza() {
        return instance.get('/api/pizza')
    },
    getPizzaById(id) {
        return instance.get(`/api/pizza/${id}`)
    },
    orderPizza(email, address, count, id) {
        return instance.post(`/api/pizza/buy/${id}`, JSON.stringify({ email, address, count }))
    }
}
export const Calculator = {
    addRiz(method, matrix) {
        return instance.post('/api/calc', JSON.stringify({ method, matrix }))
    },
    mult(matrix, value) {
        return instance.post('/api/calc/mnojtovalue', JSON.stringify({ matrix, value }))
    },
    pow(matrix, value) {
        return instance.post('api/calc/pow', JSON.stringify({ matrix, value }))
    },
    multMatrix(matrix) {
        return instance.post('/api/calc/mnoj', JSON.stringify({ matrix }))
    }
}