import { useState, type FormEvent } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error('Credenziali errate');

      const data = await response.json();
      login(data.token, data.ruoli); // login con token e ruoli

      // 🔐 Redirect in base al ruolo
      if (data.ruoli.includes('ADMIN')) {
        navigate('/admin/products');
      } else {
        navigate('/');
      }
    } catch (err: any) {
      setError(err.message || 'Errore durante il login');
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4">Accedi</h2>
      {error && <Alert variant="danger">{error}</Alert>}

      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Inserisci email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Inserisci una email valida.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Inserisci la password.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Accedi
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
