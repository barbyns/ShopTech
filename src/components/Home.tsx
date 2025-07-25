// 📁 src/pages/Home.tsx
import { Container } from 'react-bootstrap';
import TechCarousel from '../components/TechCarousel';
import HorizontalProductSlider from '../components/HorizontalProductuSlider';
import { appleProducts, videogameProducts, AccessoriProducts } from '../data/products'; 

const Home = () => {
  return (
    <Container className="mt-4">
      <TechCarousel />
      <HorizontalProductSlider title="Prodotti Apple" products={appleProducts} />
      <HorizontalProductSlider title="Videogiochi" products={videogameProducts} />
      <HorizontalProductSlider title="Accessori" products={AccessoriProducts} />
    </Container>
  );
};

export default Home;
