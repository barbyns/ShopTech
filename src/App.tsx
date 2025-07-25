import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import MyOrders from './pages/MyOrders';
import AdminProducts from './pages/AdminProducts';
import Profile from './pages/Profile';
import CheckoutSuccess from './pages/CheckoutSuccess';
import Account from './components/Account'; 
import SearchResults from './pages/SearchResults';
import UserDashboard from './components/UserDashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './context/AuthContext';

// 🔐 Componente per rotte protette Admin
const AdminRoute = ({ element }: { element: JSX.Element }) => {
  const { isAdmin } = useAuth();
  return isAdmin ? element : <Navigate to="/" />;
};

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer position="top-center" autoClose={2000} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/admin/products" element={<AdminRoute element={<AdminProducts />} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout-success" element={<CheckoutSuccess />} />
        <Route path="/account" element={<Account />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </>
  );
}

export default App;
