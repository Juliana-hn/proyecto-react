import { pizzaCart } from '../../pizzas'
import { useContext } from 'react'
import '../assets/styles/Cart.css';
import { MyContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';


{/* Hito 3: Renderización dinámica de componentes:
- Recorre el array de pizzaCart y muestra la información de cada pizza en el carrito
- Agrega botones para aumentar y disminuir la cantidad de pizzas en el carrito. En caso de ser 0 se elimina
- Calcula total de la compra
Hito 6: cambiar los useState por useContext y pasar las funciones a CartContext
*/}


const Cart = () => {
  const { cart, aumentar, disminuir, calcularTotal } = useContext(MyContext)
  const total = calcularTotal()
  const { token } = useContext(UserContext);

  return (
    <>
    <div className='cartContainer'>
     <h2>Pedidos:</h2>
      <div>
      {cart.map(item =>{
        return(
        <div className='itemContainer' key={item.id}>
          <div>
            <img src={item.img} alt={item.name}/>
          </div>
          <div className='detalles'>
            <h3>{item.name}</h3>
            <p>Precio: ${item.price} </p>
              <div className='btnMasMenos'>
                <button 
                  className='btnDisminuir'
                  onClick={()=> disminuir(item.id)}> - </button>
                <span>{item.count}</span>
                <button 
                  className='btnAumentar'
                  onClick={()=> aumentar(item.id)}> + </button>
              </div>
          </div>
        </div>
        )})}
        
        <div className="totalContainer">
          <h2>Total: ${total}</h2>
          <button className='btnComprar' disabled={!token}>Comprar</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cart