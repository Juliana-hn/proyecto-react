import React from 'react'
import { useState, useEffect } from 'react'
import CardPizza from '../components/CardPizza'

const Pizzas = () => {

   {/*Hito 4. Uso de useEffect y API. Solo se muestra una sola pizza*/}
   const [pizza, setPizza] = useState (null)

   useEffect (()=>{
     getPizza()
   }, [])
 
   const url = 'http://localhost:5000/api/pizzas/p001'
 
   const getPizza = async () =>{
     try{
       const res = await fetch (url)
       const data = await res.json()
       setPizza(data)
   } catch(error) {
     console.log(error)
   }
  }

  return (
    <div className='onePizza'>
      {pizza && (
        <CardPizza 
            img={pizza.img} 
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            desc={pizza.desc}
            />
      )}
    </div>
  )
}

export default Pizzas