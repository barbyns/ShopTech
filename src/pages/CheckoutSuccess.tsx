import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CheckoutSuccess = () => {
  return (
    <Container className="mt-5 text-center">
      <h2> Ordine completato con successo!</h2>
      <p className="mt-3">Grazie per il tuo acquisto. Puoi visualizzare i tuoi ordini nella sezione "I miei ordini".</p>
      
      <Link to="/">
        <Button variant="primary" className="mt-3">
          Torna alla Home
        </Button>
      </Link>
    </Container>
  );
};

export default CheckoutSuccess;
