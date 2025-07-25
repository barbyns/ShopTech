// src/pages/SearchResults.tsx
import { useLocation } from 'react-router-dom';
import { allProducts } from '../data/products';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('q')?.toLowerCase() || '';
  const { addToCart } = useCart();

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm)
  );

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast.success(`${product.name} aggiunto al carrello!`);
  };

  return (
    <Container className="mt-4">
      <h2>Risultati per: "{searchTerm}"</h2>

      {filteredProducts.length === 0 ? (
        <p>Nessun prodotto trovato.</p>
      ) : (
        <Row>
          {filteredProducts.map(product => (
            <Col md={4} key={product.id} className="mb-4">
              <Card>
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text><strong>€{product.price}</strong></Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => handleAddToCart(product)}
                  >
                    Aggiungi al carrello
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default SearchResults;
