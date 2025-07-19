import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const CustomNavbar = () => {
  const { isLoggedIn, logout } = useAuth(); 

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">ShopEase</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/cart">Carrello</Nav.Link>
          </Nav>

          <Nav>
            {isLoggedIn ? (
              <>
                <Nav.Link as={Link} to="/profile">Profilo</Nav.Link>
                <Nav.Link as={Link} to="/my-orders">I miei ordini</Nav.Link>
                <Nav.Link as={Link} to="/admin/products">Admin</Nav.Link>
                <Nav.Link onClick={logout}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Registrati</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
