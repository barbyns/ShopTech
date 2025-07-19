// src/components/ProductCarousel.tsx
import { Carousel, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import type { Product } from '../types/Product';

interface Props {
  title: string;
  products: Product[];
}

const ProductCarousel = ({ title, products }: Props) => {

  const chunked = [];
  for (let i = 0; i < products.length; i += 3) {
    chunked.push(products.slice(i, i + 3));
  }

  return (
    <>
      <h2 className="mt-5">{title}</h2>
      <Carousel indicators={false}>
        {chunked.map((group, idx) => (
          <Carousel.Item key={idx}>
            <Row className="justify-content-center">
              {group.map(product => (
                <Col key={product.id} md={4}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default ProductCarousel;
