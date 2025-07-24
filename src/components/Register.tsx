import { useState } from 'react';
import { registerUser } from '../api/auth';

const Register = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      setMessage('Registrazione avvenuta con successo!');
    } catch (err) {
      setMessage('Errore nella registrazione.');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input name="nome" onChange={handleChange} placeholder="Nome" />
      <input name="cognome" onChange={handleChange} placeholder="Cognome" />
      <input name="email" onChange={handleChange} placeholder="Email" />
      <input name="password" onChange={handleChange} type="password" placeholder="Password" />
      <button type="submit">Registrati</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default Register;
