import { useEffect, useState } from 'react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';

interface Order {
  id: number;
  total: number;
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

const UserDashboard = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  const fetchOrders = async (token: string) => {
    try {
      const res = await api.get('/orders/my', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setOrders(res.data);
    } catch (err) {
      console.error('Errore nel recupero ordini:', err);
    }
  };

  const fetchProducts = async (token: string) => {
    try {
      const res = await api.get('/products', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProducts(res.data);
    } catch (err) {
      console.error('Errore nel recupero prodotti:', err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    fetchOrders(token);
    fetchProducts(token);
  }, [navigate]);

  const handleBuyProduct = async (productId: number) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      await api.post(
        '/orders',
        {
          orderItems: [{ productId, quantity: 1 }]
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      alert('Ordine effettuato con successo!');
      fetchOrders(token); // aggiorna gli ordini
    } catch (error) {
      console.error("Errore durante l'acquisto:", error);
      alert("Errore durante l'acquisto.");
    }
  };

  return (
    <div>
      <h2>Benvenuto nella tua area personale</h2>

      <h3>I tuoi ordini</h3>
      {orders.length === 0 ? (
        <p>Nessun ordine effettuato.</p>
      ) : (
        <ul>
          {orders.map(order => (
            <li key={order.id}>Ordine #{order.id} - Totale: {order.total}€</li>
          ))}
        </ul>
      )}

      <h3>Prodotti disponibili</h3>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p>Prezzo: {product.price}€</p>
            <button onClick={() => handleBuyProduct(product.id)}>Acquista</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
