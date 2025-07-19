// 📁 src/data/products.ts
import type { Product } from '../types/Product';

export const appleProducts: Product[] = [
  {
    id: 1,
    name: 'Apple iPhone 16',
    description: 'Apple iPhone 16 128 GB... compatibile con AirPods',
    price: 799,
    imageUrl: 'https://m.media-amazon.com/images/I/61+GLqbh-cL._UF1000,1000_QL80_.jpg',
  },
  {
    id: 2,
    name: 'AirPods Max',
    description: 'Cuffie over-ear ad alta fedeltà con audio spaziale.',
    price: 149,
    imageUrl: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-max-hero-select-202409_FMT_WHH?wid=752&hei=636&fmt=jpeg&qlt=90',
  },
  {
    id: 3,
    name: 'MacBook Air 13"',
    description: 'Laptop performante per creativi',
    price: 1299,
    imageUrl: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/macbook-air-og-202503?wid=1200&hei=630&fmt=jpeg&qlt=90',
  },
   {
    id: 4,
    name: 'Apple Vision Pro',
    description: 'Realtà aumentata da Apple con chip R1.',
    price: 3499,
    imageUrl: 'https://www.apple.com/newsroom/images/2024/01/apple-vision-pro-available-in-the-us-on-february-2/article/Apple-Vision-Pro-availability-hero_big.jpg.large.jpg',
  },
];

export const videogameProducts: Product[] = [
  {
    id: 5,
    name: 'Nintendo Switch 2',
    description: 'Joy-Con 2 con connettori magnetici.',
    price: 450,
    imageUrl: 'https://m.media-amazon.com/images/I/717JrHodikL.jpg',
  },
  {
    id: 6,
    name: 'PlayStation 5',
    description: 'Console next-gen Sony',
    price: 480,
    imageUrl: 'https://m.media-amazon.com/images/I/51zgnbshSsL._UF894,1000_QL80_.jpg',
  },
  {
    id: 7,
    name: 'Xbox Series X',
    description: 'Potenza di 12 teraflop',
    price: 480,
    imageUrl: 'https://m.media-amazon.com/images/I/61CLCiCNtaL.jpg',
  },
  {
    id: 8,
    name: 'Steam Deck OLED',
    description: 'PC portatile da gaming by Valve con display OLED',
    price: 599,
    imageUrl: 'https://cdn.cloudflare.steamstatic.com/steamdeck/images/video/overview_oled.jpg',
  },
];

export const allProducts = [...appleProducts, ...videogameProducts];
