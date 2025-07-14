import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
import '../assets/styles/Navbar.css';
import { useContext } from 'react';
import { MyContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';


const MyNavbar = () => {
  {/*Hito 6. Usando useContext para cambiar valor total también en el navbar */}
  const { calcularTotal } = useContext(MyContext)
  const total = calcularTotal()
  const { token, logout } = useContext(UserContext); 
  {/*Hito 7. Cambios NavLink para aplicar estilo visual*/}
  const validateRoot = ({isActive}) => isActive ? 'menuActive': 'menu'
    
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="navbar">
          <Navbar.Brand>Pizzería Mamma Mía</Navbar.Brand>
            <NavLink to='/' className={validateRoot}>🍕Home</NavLink>
            {/*Hito 1 - condicional si el token es false/true que muestre diferentes opciones*/}
            {token ? (
               <>
            <NavLink to='/profile' className={validateRoot}>🔒Profile </NavLink>
            <NavLink to='/logout' onClick={logout} className={validateRoot}>🔒Logout</NavLink>
               </>
             ) : (
              <>
              <NavLink to='/login' className={validateRoot}>🔐Login</NavLink>
              <NavLink to='/register' className={validateRoot}>🔐Register</NavLink>
              </>
             )}
          </Nav>
            <div className='navtotal'>
               {/*Hito 1 - toLocaleString para mostrar número total*/}
               <NavLink to='/cart' className={validateRoot}>🛒 Total: ${total.toLocaleString()}</NavLink>
            </div>
        </Container>
      </Navbar>
    </>
  );
}
 
 

export default MyNavbar;