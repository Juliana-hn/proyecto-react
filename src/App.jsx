import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home'
import Footer from './components/Footer'
import MyNavbar from './components/Navbar'
import Cart from './components/Cart';
//import Register from './components/Register'
//import Login from './components/Login'


const App = () => {
  return (
    <>
    <MyNavbar/>
    <Home />
    {/*<Login />
    <Register />*/}
    <Cart />
    <Footer /> 
    <ToastContainer position="top-center" />
    </>
  )
}

export default App
