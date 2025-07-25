
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OrderProvider } from './context/OrderContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <BrowserRouter>
  <AuthProvider>
    <CartProvider>
      <OrderProvider>
      <App />
      </OrderProvider>
    </CartProvider>
  </AuthProvider>
  </BrowserRouter>
);
