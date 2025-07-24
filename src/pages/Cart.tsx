import { Container, ListGroup, Button, Image, Row, Col } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

const Cart = () => {
  const {
    cart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    if (cart.length === 0) return;

    const token = localStorage.getItem('token');
    if (!token) {
      alert('Devi essere loggato per acquistare.');
      navigate('/login');
      return;
    }

    try {
      const orderData = {
        orderItems: cart.map(item => ({
          productId: item.id,
          quantity: item.quantity
        }))
      };

      await api.post('/orders', orderData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      alert('Ordine completato con successo!');
      clearCart();
      navigate('/my-orders');
    } catch (error) {
      console.error('Errore durante il checkout:', error);
      alert('Errore durante l\'acquisto.');
    }
  };

  return (
    <Container className="mt-4">
      <h2>Carrello</h2>
      {cart.length === 0 ? (
        <p>Il carrello è vuoto</p>
      ) : (
        <>
          <ListGroup>
            {cart.map(item => (
              <ListGroup.Item key={item.id}>
                <Row className="align-items-center">
                  <Col md={2}>
                    <Image src={item.imageUrl} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={4}>
                    <strong>{item.name}</strong>
                    <div>Prezzo: €{item.price.toFixed(2)}</div>
                    <div>Totale: €{(item.price * item.quantity).toFixed(2)}</div>
                  </Col>
                  <Col md={3}>
                    <div className="d-flex align-items-center">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => decreaseQuantity(item.id)}
                        disabled={item.quantity <= 1}
                      >
                        −
                      </Button>
                      <span className="mx-2">{item.quantity}</span>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </Button>
                    </div>
                  </Col>
                  <Col md={3}>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Rimuovi
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <h4 className="mt-4">Totale: €{total.toFixed(2)}</h4>

          <div className="mt-3">
            <Button variant="warning" onClick={clearCart} className="me-2">
              Svuota carrello
            </Button>
            <Button variant="success" onClick={handleCheckout}>
              Procedi al checkout
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default Cart;
