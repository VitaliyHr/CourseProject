import * as axios from 'axios'

const instance = axios.create({
    headers:{
        'Content-Type':'application/json'
    }
})


export const Pizza = {
    getPizza () {
        return instance.get('/api/pizza')
    },
    getPizzaById(id){
        return instance.get(`/api/pizza/${id}`)
    },
    orderPizza: async(email,address,count,id)=>{
        try{
            let response = await instance.post(`/api/pizza/buy/${id}`,JSON.stringify({email,address,count}))
            return(response)
        }
        catch(error){
            console.log(error)
        }
    }
}
export const Calculator = {
    calculate (method,matrix) {
        return instance.post('/api/calc',JSON.stringify({method,matrix}))
    }
}