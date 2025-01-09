import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/infinity-x" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/products/:category/:model" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
