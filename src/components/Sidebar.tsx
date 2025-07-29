import { useNavigate } from 'react-router-dom';
import { ListGroup, Form, Button } from 'react-bootstrap';
import { FaSearch, FaUser, FaBoxOpen, FaShoppingCart, FaTshirt, FaHome, FaTv, FaFilter } from 'react-icons/fa';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div style={{ width: '250px', minHeight: '100vh', backgroundColor: '#f8f9fa', padding: '1rem' }}>
      <h5><FaSearch className="me-2" />Ricerca</h5>
      <Form.Control type="text" placeholder="Cerca prodotti..." className="mb-3" />

      <h5><FaFilter className="me-2" />Categorie</h5>
      <ListGroup className="mb-3">
        <ListGroup.Item action onClick={() => navigate('/search?category=tech')}>
          <FaTv className="me-2" />Elettronica
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => navigate('/search?category=abbigliamento')}>
          <FaTshirt className="me-2" />Abbigliamento
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => navigate('/search?category=casa')}>
          <FaHome className="me-2" />Casa
        </ListGroup.Item>
      </ListGroup>

      <h5><FaFilter className="me-2" />Filtri</h5>
      <Form.Group className="mb-3">
        <Form.Label>Prezzo max</Form.Label>
        <Form.Control type="number" placeholder="€" />
      </Form.Group>

      <Button variant="dark" className="w-100">Applica Filtri</Button>

      <hr />

      <ListGroup>
        <ListGroup.Item action onClick={() => navigate('/profile')}>
          <FaUser className="me-2" />Profilo
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => navigate('/my-orders')}>
          <FaBoxOpen className="me-2" />I miei ordini
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => navigate('/cart')}>
          <FaShoppingCart className="me-2" />Carrello
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Sidebar;
