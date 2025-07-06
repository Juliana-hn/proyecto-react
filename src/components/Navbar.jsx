import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import '../assets/styles/Navbar.css';
import { useContext } from 'react';
import { MyContext } from '../context/CartContext';

const MyNavbar = () => {
  {/*Hito 6. Usando useContext para cambiar valor total también en el navbar */}
  const { calcularTotal } = useContext(MyContext)
  const total = calcularTotal()
  const token = false
    
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="navbar">
          <Navbar.Brand>Pizzería Mamma Mía</Navbar.Brand>
            <Link to='/'>🍕Home</Link>
            {/*Hito 1 - condicional si el token es false/true que muestre diferentes opciones*/}
            {token ? (
               <>
            <Link to='/profile'>🔒Profile</Link>
            <Link to='/logout'>🔒Logout</Link>
               </>
             ) : (
              <>
              <Link to='/login'>🔐Login</Link>
              <Link to='/register'>🔐Register</Link>
              </>
             )}
          </Nav>
            <div className='navtotal'>
               {/*Hito 1 - toLocaleString para mostrar número total*/}
               <Link to='/cart'>🛒 Total: ${total.toLocaleString()}</Link>
            </div>
        </Container>
      </Navbar>
    </>
  );
}
 
 

export default MyNavbar;