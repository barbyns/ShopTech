import { Container, ListGroup, Badge, Row, Col, Image } from 'react-bootstrap';
import { useOrders } from '../context/OrderContext';

const MyOrders = () => {
  const { orders } = useOrders();

  return (
    <Container className="mt-4">
      <h2 className="mb-4">I miei ordini</h2>
      {orders.length === 0 ? (
        <p>Nessun ordine disponibile.</p>
      ) : (
        <ListGroup>
          {orders.map(order => (
            <ListGroup.Item key={order.id} className="mb-3">
              <div className="d-flex justify-content-between flex-column flex-md-row mb-2">
                <div>
                  <strong>Ordine #{order.id}</strong>
                  <div className="text-muted small">Data: {order.date}</div>
                </div>
                <Badge bg="dark" className="align-self-md-center mt-2 mt-md-0 fs-6">
                  Totale: €{order.total.toFixed(2)}
                </Badge>
              </div>

              <Row>
                {order.products.map(product => (
                  <Col md={6} key={product.id} className="d-flex align-items-start mb-3">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      rounded
                      style={{ width: '80px', height: '80px', objectFit: 'cover', marginRight: '1rem' }}
                    />
                    <div>
                      <h6>{product.name}</h6>
                      <div>Quantità: {product.quantity}</div>
                      <div>Prezzo unitario: €{product.price.toFixed(2)}</div>
                      <div className="text-muted small">
                        Subtotale: €{(product.price * product.quantity).toFixed(2)}
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
};

export default MyOrders;
