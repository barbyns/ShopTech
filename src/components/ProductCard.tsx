import { Card, Button } from 'react-bootstrap';
import type { Product } from '../types/Product';
import { Link } from 'react-router-dom';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card className="h-100 shadow-sm">
      <div style={{ height: '200px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa' }}>
        <Card.Img
          variant="top"
          src={product.imageUrl}
          alt={product.name}
          style={{ maxHeight: '100%', width: 'auto', objectFit: 'contain' }}
        />
      </div>
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>€{product.price.toFixed(2)}</Card.Text>
        </div>
        <Link to={`/product/${product.id}`} className="mt-auto align-self-start">
          <Button variant="primary">Dettagli</Button>
        </Link>
      </Card.Body>
    
    </Card>
  );
};

export default ProductCard;
