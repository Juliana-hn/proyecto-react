import Header from './Header'
import CardPizza from './CardPizza'
//import { pizzas } from '../../pizzas'
import {useState, useEffect} from 'react'
import React from 'react'

const Home = () => {

  {/*Hito 4. Uso de useEffect y API */}
  const [pizzas, setPizzas] = useState ([])

  useEffect (()=>{
    getApi()
  }, [])

  const url = 'http://localhost:5000/api/pizzas'

  const getApi = async () =>{
    try{
      const res = await fetch (url)
      const data = await res.json()
      setPizzas(data)
  } catch(error) {
    console.log(error)
  }
}
  return (
    <>
    <Header />
    <main className='cardContainer'>
    {/*Hito 1: 
    <CardPizza 
        name="Napolitana"
        price={5950}
        ingredients={["mozzarella, ", "tomates, ", "orégano"]}
        img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
        />
    <CardPizza
        name="Española"
        price={6950}
        ingredients={["mozzarella, ", "gorgonzola, ", "parmesano, ", "provolone"]}
        img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
        />
    <CardPizza
        name="Pepperoni"
        price={6950}
        ingredients={["mozzarella, ", "pepperoni, ", "orégano"]}
        img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
        />
      */}

      {/*Hito 3* - Recorrer el array de pizzas.js y renderizar el componente con props.
      Hito 4 seguimos recorriendo el array pero desde la API.*/}
      {pizzas.map((pizza) => (
        <CardPizza 
          img={pizza.img}
          key={pizza.id}
          name={pizza.name}
          price={pizza.price}
          ingredients={pizza.ingredients}
          desc={pizza.desc}
          />
      ))}
        </main>
    </>
  )
}

export default Home