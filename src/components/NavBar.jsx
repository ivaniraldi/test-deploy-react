import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar(){

   let precio = 0;
   let token = true

 return(
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Tutoria</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            
              {token == true ? <Nav.Link href="#home">Cerrar Sesion</Nav.Link> :  <Nav.Link href="#home">Inciar Sesion</Nav.Link>}
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">🛒: ${precio.toLocaleString()}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
 )
}

export default NavBar;