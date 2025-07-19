import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { Product } from '../types/Product';

// Ordine con quantità associata ad ogni prodotto
interface Order {
  id: number;
  products: (Product & { quantity: number })[];
  total: number;
  date: string;
}

interface OrderContextType {
  orders: Order[];
  addOrder: (products: (Product & { quantity: number })[], total: number) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('shopease_orders');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('shopease_orders', JSON.stringify(orders));
  }, [orders]);

  const addOrder = (products: (Product & { quantity: number })[], total: number) => {
    const newOrder: Order = {
      id: Date.now(),
      products,
      total,
      date: new Date().toISOString().split('T')[0],
    };
    setOrders(prev => [...prev, newOrder]);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
