import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import type { Product } from '../types/Product';
import { useCart } from '../context/CartContext'; // 👈 IMPORT

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Apple 16 ',
    description: 'Apple iPhone 16 128 GB: Telefono 5G con Controllo fotocamera, chip A18 e tanta autonomia in più. Compatibile con AirPods; Azzurro.',
    price: 799,
    imageUrl: 'https://m.media-amazon.com/images/I/61+GLqbh-cL._UF1000,1000_QL80_.jpg',
  },
  {
    id: 2,
    name: 'AirPods Max',
    description: 'Le cuffie over-ear per un ascolto davvero sublime, disponibili in colori vivaci. Le AirPods Max offrono un suono ad alta fedeltà incredibilmente dettagliato. L’audio spaziale personalizzato con rilevamento dinamico della posizione della testa ti proietta al centro della scena. Nota ⁴ La cancellazione attiva del rumore di livello pro elimina i rumori indesiderati.',
    price: 149,
    imageUrl: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-max-hero-select-202409_FMT_WHH?wid=752&hei=636&fmt=jpeg&qlt=90&.v=WXBZVEZCOUNiUWlBYUtjZmtBc0J2MGkxeEVQUXVsbFk4WEhBc0JFOWdSN2pmMHBIdXRoME5iSzRYUmF4Y3dVRy81NGMrcU1sYkxwTFJaVHI1NEQzenBJRnRzZXYwZVJMZmZQVjdBR0RkVVNpdi91OXpsc3gvUHZvVGU1aUpOaFE',
  },
   {
    id: 3,
    name: 'MacBook Air 13" - Mezzanotte',
    description: 'Laptop performante per sviluppatori e creativi.',
    price: 1299,
    imageUrl: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/macbook-air-og-202503?wid=1200&hei=630&fmt=jpeg&qlt=90&.v=1739216814915',
  },
   {
    id: 4,
    name: 'Nintendo Switch 2',
    description: 'Nuovi controller Joy-Con 2, completamente riprogettati: possono essere usati come un mouse nei giochi compatibili e si collegano di scatto alla console grazie a connettori magnetici​',
    price: 450,
    imageUrl: 'https://m.media-amazon.com/images/I/717JrHodikL.jpg',
  },
  {
    id: 5,
    name: 'SONY PlayStation 5 Console - Split Bundle (EU) (PS5)',
    description: 'Nuovi controller Joy-Con 2, completamente riprogettati: possono essere usati come un mouse nei giochi compatibili e si collegano di scatto alla console grazie a connettori magnetici​',
    price: 450,
    imageUrl: 'https://m.media-amazon.com/images/I/51zgnbshSsL._UF894,1000_QL80_.jpg',
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
