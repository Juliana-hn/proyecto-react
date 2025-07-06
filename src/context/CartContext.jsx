import { createContext, useState } from "react"


export const MyContext = createContext()

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const aumentar = (id) => {
      const nuevoCart = cart.map(item => {
        if (item.id === id)
          return { ...item, count: item.count + 1 }
        return item
      })
      setCart(nuevoCart)
    }
  
    const disminuir = (id) => {
      const nuevoCart = cart.map(item => {
        if (item.id === id)
          return { ...item, count: item.count - 1 }
        return item
      }).filter(item => item.count > 0)
      setCart(nuevoCart)
    }
  
    const calcularTotal = () => {
      return cart.reduce((total, producto) => {
        return total + producto.price * producto.count
      }, 0)
    }

    const addToCart = (pizza) => {
        const existe = cart.find(item => item.id === pizza.id)
      
        if (existe) {
          const nuevoCart = cart.map(item =>
            item.id === pizza.id ? { ...item, count: item.count + 1 } : item
          )
          setCart(nuevoCart)
        } else {
          setCart([...cart, { ...pizza, count: 1 }])
        }
      }
    const stateGlobal = {
      cart,
      aumentar,
      disminuir,
      calcularTotal,
      addToCart
    }

return (
    <MyContext.Provider value={stateGlobal}>
      {children}
    </MyContext.Provider>
  )
}
export default CartProvider