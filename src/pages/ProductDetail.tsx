import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Button, Spinner } from 'react-bootstrap';
import { allProducts } from '../data/products';
import type { Product } from '../types/Product';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const productId = parseInt(id || '', 10);
    const found = allProducts.find(p => p.id === productId);
    setProduct(found || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
      </div>
    );
  }

  if (!product) {
    return <p className="text-center mt-5">Prodotto non trovato</p>;
  }

  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        <Col md={6}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            fluid
            style={{ objectFit: 'cover', maxHeight: '400px', width: '100%' }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Immagine+non+disponibile';
            }}
          />
        </Col>
        <Col md={6}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h4 className="my-3">€{product.price.toFixed(2)}</h4>
          <Button variant="success" onClick={() => addToCart(product)}>
            Aggiungi al carrello
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
