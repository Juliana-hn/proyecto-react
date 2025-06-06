import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home'
import Footer from './components/Footer'
import MyNavbar from './components/Navbar'
import Register from './components/Register'
import Login from './components/Login'


const App = () => {
  return (
    <>
    <MyNavbar/>
    {/*<Home />*/}
    <Login />
    <Register />
    <Footer /> 
    <ToastContainer position="top-center" />
    </>
  )
}

export default App
