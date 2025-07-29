import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

const CustomNavbar = () => {
  const { isLoggedIn, isAdmin, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">ShopTech</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar" className="justify-content-between">

          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/cart">Carrello</Nav.Link>
            {isLoggedIn && isAdmin && (
              <Nav.Link as={Link} to="/admin/products">Admin</Nav.Link>
            )}
          </Nav>

          <Form className="d-flex mx-auto" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Cerca prodotti..."
              className="me-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-light" type="submit">Cerca</Button>
          </Form>

          <Nav>
            {isLoggedIn ? (
              <>
                <Nav.Link as={Link} to="/profile">Profilo</Nav.Link>
                <Nav.Link as={Link} to="/my-orders">I miei ordini</Nav.Link>
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
