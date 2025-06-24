import { Container, ListGroup, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Container className="mt-4">
      <h2>Carrello</h2>
      {cart.length === 0 ? (
        <p>Il carrello è vuoto</p>
      ) : (
        <>
          <ListGroup>
            {cart.map(item => (
              <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                <div>
                  {item.name} (x{item.quantity}) - €{(item.price * item.quantity).toFixed(2)}
                </div>
                <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                  Rimuovi
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <h4 className="mt-3">Totale: €{total.toFixed(2)}</h4>
          <Button variant="warning" onClick={clearCart} className="mt-2">Svuota carrello</Button>
        </>
      )}
    </Container>
  );
};

export default Cart;
