import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../api/axios';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = () => {
  const query = useQuery();
  const searchTerm = query.get('q')?.toLowerCase() || '';
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    api.get('/products', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        const filtered = res.data.filter((product: any) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm)
        );
        setProducts(filtered);
      })
      .catch(err => console.error('Errore prodotti:', err));
  }, [searchTerm]);

  return (
    <div className="container mt-4">
      <h2>Risultati per "{searchTerm}"</h2>
      {products.length === 0 ? (
        <p>Nessun prodotto trovato.</p>
      ) : (
        <div className="row">
          {products.map((p: any) => (
            <div key={p.id} className="col-md-4 mb-3">
              <div className="card h-100">
                <img src={p.imageUrl} className="card-img-top" alt={p.name} />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description}</p>
                  <p className="card-text">€{p.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
