import React, { useContext } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home'
import Footer from './components/Footer'
import MyNavbar from './components/Navbar'
import Pizzas from './pages/Pizzas';
import { BrowserRouter , Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './components/NotFound';
import Cart from './pages/Cart';
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './components/Profile';
import CartProvider from './context/CartContext';
import { UserContext } from './context/UserContext';



const App = () => {
  const {token} = useContext(UserContext)
  return (
    <>
    <BrowserRouter> 
      <CartProvider>
      <MyNavbar/>
        <Routes>
          <Route path='/' element={<Home />} />    
          <Route path='/profile' element={ token ? <Profile/> : <Navigate to = '/login'/>} /> 
          <Route path='/login' element={ token ? <Navigate to='/' /> : <Login />} /> 
          <Route path='/register' element={ token ? <Navigate to='/' /> : <Register />} /> 
          <Route path='/cart' element={<Cart />} /> 
          <Route path='/pizza/:id' element={<Pizzas />} />  
          <Route path='*' element={ <NotFound />}/>
        </Routes>  
      </CartProvider>
        <ToastContainer position="top-center" />
        <Footer /> 
    </BrowserRouter>
    </>
  )
}

export default App
