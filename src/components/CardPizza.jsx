import '../assets/styles/CardPizza.css';

{/*Hito 1 - desestructurizar prop y crear plantilla de card*/}

const CardPizza = ({name, price, ingredients, img}) => {
  return (
    <>
    <div className='card'>
        <img src= {img} alt={name} />
        <h3>{name}</h3>
        <hr />
        <h4>Ingredientes: </h4>
        <p>🍕{ingredients}</p>
        <hr />
        <h4>Precio: ${price}</h4>
        <div className='buttons'>
        <button className='verMasAñadir'>Ver más 👀 </button> <button className='verMasAñadir'>Añadir 🛒</button>
        </div>
    </div>
    </>
  )
}

export default CardPizza