import React from 'react'
import { useState, useEffect } from 'react'
import CardPizza from '../components/CardPizza'
import { useParams } from 'react-router-dom'

const Pizzas = () => {
  {/*Hito 7. UseParams*/}
  const { id } = useParams()
  const url = `http://localhost:5000/api/pizzas/${id}`

   {/*Hito 4. Uso de useEffect y API.*/}
   const [pizza, setPizza] = useState (null)

   useEffect(() => {
    const getPizza = async () => {
      try {
        const res = await fetch(url)
        const data = await res.json()
        setPizza(data)
      } catch (error) {
        console.log("Error al cargar la pizza:", error)
      }
    }

    getPizza()
  }, [url]) 

  return (
    <div className='onePizza'>
      
      {pizza ? (
        <CardPizza
            id={pizza.id}
            img={pizza.img} 
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            desc={pizza.desc}
            pizza={pizza}
            detalleVerMas={true}
            />
          ) : (
            <p>Cargando pizza...</p>
          )}
    </div>
  )
}

export default Pizzas