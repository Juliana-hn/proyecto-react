import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home'
import Footer from './components/Footer'
import MyNavbar from './components/Navbar'
import Pizzas from './pages/Pizzas';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Cart from './pages/Cart';
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './components/Profile';


const App = () => {
  return (
    <>
    <BrowserRouter> 
      <MyNavbar/>
        <Routes>
          <Route path='/' element={<Home />} />    
          <Route path='/profile' element={<Profile />} /> 
          <Route path='/login' element={<Login />} /> 
          <Route path='/register' element={<Register />} /> 
          <Route path='/cart' element={<Cart />} /> 
          <Route path='/pizza/p001 ' element={<Pizzas />} />  
          <Route path='*' element={ <NotFound />}/>
        </Routes>  
        <ToastContainer position="top-center" />
        <Footer /> 
    </BrowserRouter>
    </>
  )
}

export default App
