import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from './CartWidget';
import {Link} from 'react-router-dom'
export const NavBar = () =>  {
  return (
    <><header>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link To="#home">Home</Nav.Link>
            <Nav.Link To="#features">Features</Nav.Link>
            <Nav.Link To="#pricing">Pricing</Nav.Link>
            <Nav.Link To="#about us">About us</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar></header>
    </>
  );
};
