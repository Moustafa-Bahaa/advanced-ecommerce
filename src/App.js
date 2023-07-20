import './App.css';
import CartItems from './components/cart-items/CartItems';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import Add from './components/Mobiles/add-new-product/Add';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';


function App() {

  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="/CartItems" element={<CartItems />} />
          <Route path="/" element={<HomePage />} />
          <Route path='/add' element={<Add />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
