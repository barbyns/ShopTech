import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

interface User {
  nome: string;
  cognome: string;
  email: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

const Account = () => {
  const [user, setUser] = useState<User | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    // Recupero dati utente
    api.get('/users/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Errore nel recupero dei dati utente:", error);
        navigate('/login');
      });

    // Recupero prodotti
    api.get('/products', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => setProducts(res.data))
      .catch(err => console.error('Errore nel recupero prodotti:', err));
  }, [navigate]);

  if (loading) return <p>Caricamento profilo...</p>;

  return (
    <div className="account-container">
      <h2>Profilo Utente</h2>
      {user && (
        <div>
          <p><strong>Nome:</strong> {user.nome}</p>
          <p><strong>Cognome:</strong> {user.cognome}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}

      <h3>Prodotti disponibili</h3>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p>Prezzo: {product.price}€</p>
            <button onClick={() => alert(`Acquisto simulato: ${product.name}`)}>
              Acquista
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Account;
