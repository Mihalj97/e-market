import Navbar from './component/Navbar';
import './App.css';
import Home from './component/Home';
import Products from './component/Products';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Product from './component/Product';
import Cart from './component/Cart';

function App() {
  return (
    <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
          </Routes>
    </Router>
  )
}

export default App;
