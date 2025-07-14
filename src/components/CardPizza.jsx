import '../assets/styles/CardPizza.css';
import { useContext } from 'react';
import { MyContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'

{/*Hito 1 - desestructurizar prop y crear plantilla de card.
   Hito 3 - Recorrer el array de pizzas.js y renderizar el componente con props + iterar cada ingrediente en un li. 
   Hito 6 - Añadiendo useContext*/}

const CardPizza = ({id, name, price, ingredients, img, desc, pizza, detalleVerMas}) => {
  const { addToCart } = useContext(MyContext)
  const navigate = useNavigate()
  const handleVerMas = () => {
    navigate(`/pizza/${id}`)
  }

  return (
    <>
    <div className='card'>
        <img src= {img} alt={name} className={detalleVerMas ? 'detalleVerMas' : ''}/>
        <h3>{name}</h3>
        <hr />
        <p>Descripción: {desc}</p>
        <h4>Ingredientes: </h4>
        <ul>
         {ingredients.map((ingredient) =>(
          <li key={ingredient}>🍕{ingredient}</li>
         ) )}
        </ul>
        <hr />
        <h4>Precio: ${price}</h4>
        <div className='buttons'>
        <button onClick={handleVerMas} className='verMasAñadir'> Ver más 👀 </button> 
        <button className='verMasAñadir' 
                onClick={() => addToCart(pizza)}>
                  Añadir 🛒
                  </button>
        </div>
    </div>
    </>
  )
}

export default CardPizza