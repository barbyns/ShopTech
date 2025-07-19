import { Container, ListGroup, Badge, Row, Col, Image } from 'react-bootstrap';
import { useOrders } from '../context/OrderContext';

const MyOrders = () => {
  const { orders } = useOrders();

  return (
    <Container className="mt-4">
      <h2>I miei ordini</h2>
      {orders.length === 0 ? (
        <p>Nessun ordine disponibile.</p>
      ) : (
        <ListGroup>
          {orders.map(order => (
            <ListGroup.Item key={order.id}>
              <div className="d-flex justify-content-between flex-column flex-md-row">
                <div>
                  <strong>Ordine #{order.id}</strong> - {order.date}
                  <Row className="mt-3">
                    {order.products.map(product => (
                      <Col md={6} key={product.id} className="d-flex mb-3">
                        <Image
                          src={product.imageUrl}
                          alt={product.name}
                          style={{ width: '80px', height: '80px', objectFit: 'cover', marginRight: '1rem' }}
                          rounded
                        />
                        <div>
                          <div>{product.name}</div>
                          <div>Quantità: {product.quantity}</div>
                          <div>Prezzo: €{product.price.toFixed(2)}</div>
                          <div>Subtotale: €{(product.price * product.quantity).toFixed(2)}</div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
                <Badge bg="secondary" className="align-self-start mt-2">
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
