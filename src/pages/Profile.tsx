import { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const Profile = () => {
  const [name, setName] = useState('Mario Rossi');
  const [email, setEmail] = useState('mario.rossi@example.com');
  const [bio, setBio] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 🔐 In futuro: aggiornamento profilo via API
    console.log('Profilo aggiornato:', { name, email, bio });
    setSuccess(true);
  };

  return (
    <Container className="mt-4" style={{ maxWidth: '600px' }}>
      <h2>Profilo Utente</h2>
      {success && <Alert variant="success">Profilo aggiornato con successo!</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nome completo</Form.Label>
          <Form.Control value={name} onChange={(e) => setName(e.target.value)} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Biografia</Form.Label>
          <Form.Control as="textarea" rows={3} value={bio} onChange={(e) => setBio(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Salva modifiche
        </Button>
      </Form>
    </Container>
  );
};

export default Profile;
