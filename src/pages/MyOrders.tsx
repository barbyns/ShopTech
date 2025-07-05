import { useEffect, useState } from 'react';
import { Container, ListGroup, Badge } from 'react-bootstrap';
import type { Order } from '../types/order';

const mockOrders: Order[] = [
  {
    id: 1,
    products: [
      { id: 1, name: 'Smartphone X', price: 799, description: '', imageUrl: '' },
      { id: 2, name: 'Auricolari Bluetooth', price: 149, description: '', imageUrl: '' },
    ],
    total: 948,
    date: '2025-07-01',
  },
  {
    id: 2,
    products: [{ id: 3, name: 'Laptop Pro 14', price: 1299, description: '', imageUrl: '' }],
    total: 1299,
    date: '2025-06-24',
  },
];

const MyOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // 🔐 Qui in futuro verificheremo l'utente loggato e faremo una chiamata API
    setOrders(mockOrders);
  }, []);

  return (
    <Container className="mt-4">
      <h2>I miei ordini</h2>
      {orders.length === 0 ? (
        <p>Nessun ordine disponibile.</p>
      ) : (
        <ListGroup>
          {orders.map(order => (
            <ListGroup.Item key={order.id}>
              <div className="d-flex justify-content-between">
                <div>
                  <strong>Ordine #{order.id}</strong> - {order.date}
                  <ul className="mb-0">
                    {order.products.map(p => (
                      <li key={p.id}>{p.name} – €{p.price.toFixed(2)}</li>
                    ))}
                  </ul>
                </div>
                <Badge bg="secondary" className="align-self-start">
                  Totale: €{order.total.toFixed(2)}
                </Badge>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
};

export default MyOrders;
