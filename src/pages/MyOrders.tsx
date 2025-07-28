// src/pages/MyOrders.tsx
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { Container, Card, ListGroup, Spinner } from "react-bootstrap";

interface OrderItem {
  productId: number;
  nomeProdotto: string;
  quantita: number;
  prezzo: number;
}

interface Order {
  id: number;
  dataOrdine: string;
  totale: number;
  items: OrderItem[];
}

const MyOrders = () => {
  const { token } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/orders", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });
        setOrders(response.data);
      } catch (error) {
        console.error("Errore nel recupero ordini:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token]);

  if (loading) {
    return (
      <Container className="mt-4 text-center">
        <Spinner animation="border" />
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h2>I miei ordini</h2>
      {orders.length === 0 ? (
        <p>Non hai ancora effettuato ordini.</p>
      ) : (
        orders.map((order) => (
          <Card className="mb-4" key={order.id}>
            <Card.Header>
              Ordine #{order.id} - {new Date(order.dataOrdine).toLocaleString()}
            </Card.Header>
            <ListGroup variant="flush">
              {order.items.map((item, idx) => (
                <ListGroup.Item key={idx}>
                  <strong>{item.nomeProdotto}</strong> — Quantità: {item.quantita} — Prezzo unitario: €{item.prezzo}
                </ListGroup.Item>
              ))}
            </ListGroup>
            <Card.Footer>
              <strong>Totale ordine:</strong> €{order.totale.toFixed(2)}
            </Card.Footer>
          </Card>
        ))
      )}
    </Container>
  );
};

export default MyOrders;
