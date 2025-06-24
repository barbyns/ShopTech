import { Card, Button } from 'react-bootstrap';
import type { Product } from '../types/Product';
import { Link } from 'react-router-dom';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card style={{ width: '18rem' }} className="mb-4">
      <Card.Img variant="top" src={product.imageUrl} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>€{product.price.toFixed(2)}</Card.Text>
        <Link to={`/product/${product.id}`}>
          <Button variant="primary">Dettagli</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
