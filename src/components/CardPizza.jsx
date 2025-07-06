import '../assets/styles/CardPizza.css';
import { useContext } from 'react';
import { MyContext } from '../context/CartContext';

{/*Hito 1 - desestructurizar prop y crear plantilla de card.
   Hito 3 - Recorrer el array de pizzas.js y renderizar el componente con props + iterar cada ingrediente en un li. 
   Hito 6 - Añadiendo useContext*/}

const CardPizza = ({name, price, ingredients, img, desc, pizza}) => {
  const { addToCart } = useContext(MyContext)

  return (
    <>
    <div className='card'>
        <img src= {img} alt={name}/>
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
        <button className='verMasAñadir'> Ver más 👀 </button> 
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