// src/components/HorizontalProductSlider.tsx
import { useRef } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProductCard from './ProductCard';
import type { Product } from '../types/Product';

interface Props {
  title: string;
  products: Product[];
}

const HorizontalProductSlider = ({ title, products }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const newScrollLeft =
        direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  return (
    <div className="mt-5">
      <h2>{title}</h2>
      <div className="d-flex align-items-center position-relative">
        <Button variant="light" onClick={() => scroll('left')} className="me-2">
          <FaChevronLeft />
        </Button>

        <div
          ref={scrollRef}
          className="d-flex overflow-auto"
          style={{ scrollBehavior: 'smooth', gap: '1rem' }}
        >
          {products.map(product => (
            <div key={product.id} style={{ minWidth: '300px', flexShrink: 0 }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <Button variant="light" onClick={() => scroll('right')} className="ms-2">
          <FaChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default HorizontalProductSlider;
