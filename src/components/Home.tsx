import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import TechCarousel from '../components/TechCarousel'; 
import type { Product } from '../types/Product';

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Apple Iphone 16',
    description: 'Telefono top di gamma',
    price: 799,
    imageUrl: 'https://m.media-amazon.com/images/I/61+GLqbh-cL._UF1000,1000_QL80_.jpg',
  },
  {
    id: 2,
    name: 'AirPods Max',
    description: 'Le cuffie over-ear per un ascolto davvero sublime, disponibili in colori vivaci.',
    price: 149,
    imageUrl: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-max-hero-select-202409_FMT_WHH?wid=752&hei=636&fmt=jpeg&qlt=90&.v=WXBZVEZCOUNiUWlBYUtjZmtBc0J2MGkxeEVQUXVsbFk4WEhBc0JFOWdSN2pmMHBIdXRoME5iSzRYUmF4Y3dVRy81NGMrcU1sYkxwTFJaVHI1NEQzenBJRnRzZXYwZVJMZmZQVjdBR0RkVVNpdi91OXpsc3gvUHZvVGU1aUpOaFE',
  },
  {
    id: 3,
    name: 'MacBook Air 13" - Mezzanotte',
    description: 'Magic Keyboard retroilluminata con Touch ID - Italiano',
    price: 1.899,
    imageUrl: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/macbook-air-og-202503?wid=1200&hei=630&fmt=jpeg&qlt=90&.v=1739216814915',
  },
];
const videogameProducts: Product [] = [
  {
    id: 4,
    name: 'Nintendo Switch 2',
    description: 'Nuovi controller Joy-Con 2, completamente riprogettati: possono essere usati come un mouse nei giochi compatibili e si collegano di scatto alla console grazie a connettori magnetici​',
    price: 450,
    imageUrl: 'https://m.media-amazon.com/images/I/717JrHodikL.jpg',
  },
]
const Home = () => {
  return (
    <Container className="mt-4">
      <TechCarousel />
      <h2 className="mt-5">Prodotti in evidenza Apple</h2>
      <Row>
        {mockProducts.map(product => (
          <Col key={product.id} md={4} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      <h2 className="mt-5">Videogiochi</h2>
      <Row>
        {videogameProducts.map(product => (
          <Col key={product.id} md={4} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
