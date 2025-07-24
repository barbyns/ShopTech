import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import UserDashboard from './components/UserDashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/my-orders" element={<MyOrders/>}/>
        <Route path="/admin/products" element={<AdminProducts/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/checkout-success" element={<CheckoutSuccess/>}/>
        <Route path="/account" element={<Account />} />
        <Route path="/account" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
