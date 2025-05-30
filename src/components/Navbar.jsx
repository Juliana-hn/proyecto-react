import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MyNavbar = () => {
    const total = 25000;
    const token = false;    
    
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="navabar">
          <Navbar.Brand href="#home">Pizzería Mamma Mía</Navbar.Brand>
            <Nav.Link href="#home">🍕Home</Nav.Link>
            {token ? (
               <>
            <Nav.Link href="#profile">🔒Profile</Nav.Link>
            <Nav.Link href="#logout">🔒Logout</Nav.Link>
               </>
             ) : (
              <>
            <Nav.Link href="#login">🔐Login</Nav.Link>
            <Nav.Link href="#register">🔐Register</Nav.Link>
              </>
             )}
          </Nav>
            <div className='navtotal'>
            <Nav.Link href="#total">🛒 Total: ${total.toLocaleString()} </Nav.Link>
            </div>
        </Container>
      </Navbar>
    </>
  );
}
 
 

export default MyNavbar;