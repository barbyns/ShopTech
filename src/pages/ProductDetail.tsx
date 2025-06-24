import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import type { Product } from '../types/Product';
import { useCart } from '../context/CartContext'; // 👈 IMPORT

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Smartphone X',
    description: 'Telefono top di gamma con fotocamera ultra wide.',
    price: 799,
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  {
    id: 2,
    name: 'Auricolari Bluetooth',
    description: 'Suono perfetto e comodi tutto il giorno.',
    price: 149,
    imageUrl: 'https://via.placeholder.com/300x200',
  },
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  const { addToCart } = useCart(); 

  useEffect(() => {
    const prod = mockProducts.find(p => p.id === parseInt(id || ''));
    if (prod) setProduct(prod);
  }, [id]);

  if (!product) return <p className="text-center mt-5">Prodotto non trovato</p>;

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <Image src={product.imageUrl} fluid />
        </Col>
        <Col md={6}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h4>€{product.price.toFixed(2)}</h4>
          <Button variant="success" onClick={() => addToCart(product)}>
            Aggiungi al carrello
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
