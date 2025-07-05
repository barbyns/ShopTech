import type {Product} from './Product';
export interface Order {
    id: number;
    products: Product[];
    total: number;
    date: string;
}
    