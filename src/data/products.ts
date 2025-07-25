
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
  {
    id: 9,
    name: 'Nintendo Console Switch',
    description: 'La confezione contiene: console, base per Nintendo Switch, un Joy-Con sinistro (blu/neon), un Joy-Con destro (rosso/neon), impugnatura joy-con, alimentatore, un set di laccetti per Joy-Con, cavo HDM',
    price: 280,
    imageUrl: 'https://m.media-amazon.com/images/I/71n+F6bHXGL.jpg',
  },
];

export const AccessoriProducts: Product[] = [
  {
    id: 10,
    name: 'JoyCon Switch',
    description: 'Nintendo IR Swi.Set2 JoyCon per Nvidia Shield, Rosso-Blu',
    price: 69,
    imageUrl: 'https://m.media-amazon.com/images/I/71Eeyub6v6L.jpg',
  },
   {
    id: 11,
    name: 'JoyCon Viola-Giallo',
    description: 'Nintendo Switch Joy-Con Coppia Controller Viola Neon/Arancione Originale JoyCon',
    price: 69,
    imageUrl: 'https://i.ebayimg.com/images/g/AioAAOSw3ileOqCV/s-l1600.jpg',
  },
   {
    id: 12,
    name: 'Nintendo Switch Pro Controller',
    description: 'Controller wireless simile a un controller tradizionale, comodo e ideale per le lunghe sessioni di gioco.',
    price: 89,
    imageUrl: 'https://m.media-amazon.com/images/I/61xhzvDIRKL.jpg',
  },
    {
    id: 13,
    name: 'Switch Kit di accessori per Nintendo Switch',
    description: 'Il kit di accessori per interruttori include tutto ciò di cui hai bisogno: 2 x mazze da golf, 2 x racchette da tennis, 2 x cinturini da polso e cinturini per le gambe, 2 x spade, 2 x cinturino da polso Joy-con, 2 x custodia Comfort Grip.',
    price: 39,
    imageUrl: 'https://m.media-amazon.com/images/I/71N+fmA31GL.jpg',
  },
   {
    id: 14,
    name: 'Nintendo Switch: Joy-Con Charging Grip',
    description: 'Impugnatura di ricarica Joy-Con può ricaricare i Joy-Con mentre giochi, quindi non dovrai mai preoccuparti di esaurire la batteria.',
    price: 29,
    imageUrl: 'https://m.media-amazon.com/images/I/61S+mOZEsgL.jpg',
  },
  {
    id: 15,
    name: 'Nintendo Switch: Dock Set',
    description: 'Base con accessori per Nintendo Switch. La confezione include, oltre alla base, un cavo HDMI e un blocco alimentatore per Nintendo Switch',
    price: 99,
    imageUrl: 'https://m.media-amazon.com/images/I/61ipdRXCiwL.jpg',
  },

];
export const allProducts = [...appleProducts, ...videogameProducts, ...AccessoriProducts];
