import * as axios from 'axios'

const instance = axios.create({
    baseURL:'http://localhost:5000',
    headers:{}
})


export const Pizza = {
    getPizza () {
        return instance.get('/api/pizza')
    },
    getPizzaById(id){
        return instance.get(`/api/pizza/${id}`)
    },
    orderPizza: async(email,address,count,id)=>{
        // try{
        //     let response = await instance.post(`/api/pizza/buy/${id}`,JSON.stringify({email,address,count}),{
        //         'Content-Type':'application/json'
        //     })
        //     return(response)
        // }
        // catch(error){
        //     console.log(error)
        // }
        return instance.post(`/api/pizza/buy/${id}`,JSON.stringify({email,address,count}))
    }
}