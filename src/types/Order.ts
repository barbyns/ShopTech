import type {Product} from './Product';
export interface Order {
    id: number;
    products:  products: (Product & { quantity: number})[];
    total: number;
    date: string;
   
}
    