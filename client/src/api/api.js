import * as axios from 'axios'

const instance = axios.create({
    baseURL:'http://localhost:5000',
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