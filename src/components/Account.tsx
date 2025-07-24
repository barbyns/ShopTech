import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios'; 

const Account = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

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
    </div>
  );
};

export default Account;
