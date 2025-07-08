import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import type { Product } from '../types/Product';

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Smartphone X',
    description: 'Telefono top di gamma',
    price: 799,
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  {
    id: 2,
    name: 'Auricolari Bluetooth',
    description: 'Suono perfetto e comodi',
    price: 149,
    imageUrl: 'https://via.placeholder.com/300x200',
  },
   {
    id: 3,
    name: 'Switch 2',
    description: 'Suono perfetto e comodi',
    price: 350,
    imageUrl: 'https://via.placeholder.com/300x200',
  },
];

const Home = () => {
  return (
    <Container className="mt-4">
      <h2>Prodotti in evidenza</h2>
      <Row>
        {mockProducts.map(product => (
          <Col key={product.id} md={4}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
