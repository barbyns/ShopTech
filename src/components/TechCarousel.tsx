import { Carousel } from 'react-bootstrap';

const techNews = [
  {
    title: 'Iphone 16',
    description: 'Apple iphone 16',
    image: 'https://hips.hearstapps.com/hmg-prod/images/apple-iphone-16-finish-lineup-240909-66e007e93d2d8.jpg',
    url: 'https://www.elledecor.com/it/tech/novita/a62131141/iphone-16-novita-apple/',
  },
  {
    title: 'Il futuro della realtà aumentata',
    description: 'I visori AR cambieranno la nostra vita quotidiana.',
    image: 'https://www.teamsystem.com/magazine/contrib/uploads/constr-realta-aumentata.jpg',
    url: 'https://www.teamsystem.com/magazine/construction/realta-virtuale-e-realta-aumentata-progettazione-edilizia/',
  },
  {
    title: 'Smartphone pieghevoli in crescita',
    description: 'Samsung, Huawei e Google puntano sul foldable.',
    image: 'https://immagini.qualescegliere.it/articoli/2022/04/smartphone-pieghevoli-primi-in-italia-1024x652.jpg',
    url: '#',
  },
  {
    title: 'Laptop super sottili per il 2025',
    description: 'Più potenza in meno spazio: la nuova generazione.',
    image: 'https://m.media-amazon.com/images/I/715JlS9KHkL._UF1000,1000_QL80_.jpg',
    url: '#',
  },
];

const TechCarousel = () => {
  return (
    <Carousel>
      {techNews.map((item, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100"
            src={item.image}
            alt={item.title}
            onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/800x400?text=Immagine+non+disponibile';
            }}
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
            <h5>{item.title}</h5>
            <p>{item.description}</p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light btn-sm mt-2"
            >
              Compra
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default TechCarousel;
