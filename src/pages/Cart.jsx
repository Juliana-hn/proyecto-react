import { pizzaCart } from '../../pizzas'
import { useState } from 'react'
import '../assets/styles/Cart.css';

{/* Hito 3: Renderización dinámica de componentes:
- Recorre el array de pizzaCart y muestra la información de cada pizza en el carrito
- Agrega botones para aumentar y disminuir la cantidad de pizzas en el carrito. En caso de ser 0 se elimina
- Calcula total de la compra
*/}

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart)

  const aumentar = (id) => {
    const nuevoCart = cart.map((item)=>{
      if (item.id === id)
        return {
          ...item, 
          count: item.count+1
        }
      return item})
      setCart(nuevoCart)
    }

  const disminuir = (id) => {
    const nuevoCart = cart.map((item)=>{
      if (item.id === id)
        return {
          ...item, 
          count: item.count-1
        }
      return item}).filter(item => item.count > 0)
        setCart(nuevoCart)
    }
  
  const calcularTotal = (cart) => {
    return cart.reduce((total, producto) => {
      return total + producto.price * producto.count
    }, 0)
  }
  const total = calcularTotal(cart)

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
          <button className='btnComprar'>Comprar</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cart